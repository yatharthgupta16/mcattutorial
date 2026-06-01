import { z } from "zod";

export const bookingSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be at most 100 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email"),
  phone: z
    .string()
    .trim()
    .min(7, "Phone must be at least 7 characters")
    .max(20, "Phone must be at most 20 characters")
    .regex(/^[0-9+()\-\s]+$/, "Phone can only contain digits, +, -, ( ), and spaces"),
});

export type BookingInput = z.infer<typeof bookingSchema>;

export interface BookingRecord extends BookingInput {
  id: string;
  created_at: string;
}

const STORAGE_KEY = "mock_class_bookings";

/**
 * Mirrors the shape of `submitBooking` server function described in the spec.
 * Backed by localStorage so the demo runs without Lovable Cloud / Supabase.
 * Replace this body with a `createServerFn` call to swap in the real backend.
 */
export async function submitBooking(input: unknown): Promise<BookingRecord> {
  const parsed = bookingSchema.parse(input);

  const record: BookingRecord = {
    id:
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    created_at: new Date().toISOString(),
    ...parsed,
  };

  const existing = readBookings();
  existing.push(record);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));

  await new Promise((r) => setTimeout(r, 350));

  return record;
}

function readBookings(): BookingRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}
