import * as Dialog from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { X, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { bookingSchema, submitBooking, type BookingInput } from "../lib/bookings";
import { cn } from "../lib/cn";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BookingDialog({ open, onOpenChange }: BookingDialogProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingInput>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { name: "", email: "", phone: "" },
  });

  const onSubmit = async (values: BookingInput) => {
    try {
      await submitBooking(values);
      toast.success("Booking received!", {
        description: "We'll reach out within one business day to confirm your mock class.",
      });
      reset();
      onOpenChange(false);
    } catch (err) {
      toast.error("Something went wrong", {
        description:
          err instanceof Error ? err.message : "Please try again in a moment.",
      });
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm data-[state=open]:animate-fadeIn" />
        <Dialog.Content
          className={cn(
            "fixed left-1/2 top-1/2 z-50 w-[calc(100vw-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white p-6 shadow-2xl",
            "data-[state=open]:animate-fadeIn",
          )}
        >
          <div className="flex items-start justify-between">
            <div>
              <Dialog.Title className="text-xl font-bold text-slate-900">
                Book a Mock Class
              </Dialog.Title>
              <Dialog.Description className="mt-1 text-sm text-slate-500">
                Free 30-minute session. We'll match you with the right tutor.
              </Dialog.Description>
            </div>
            <Dialog.Close
              className="rounded-full p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </Dialog.Close>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4" noValidate>
            <Field
              label="Full name"
              error={errors.name?.message}
              htmlFor="b-name"
            >
              <input
                id="b-name"
                type="text"
                autoComplete="name"
                placeholder="Jane Doe"
                className={inputClass(!!errors.name)}
                {...register("name")}
              />
            </Field>

            <Field
              label="Email"
              error={errors.email?.message}
              htmlFor="b-email"
            >
              <input
                id="b-email"
                type="email"
                autoComplete="email"
                placeholder="jane@example.com"
                className={inputClass(!!errors.email)}
                {...register("email")}
              />
            </Field>

            <Field
              label="Phone"
              error={errors.phone?.message}
              htmlFor="b-phone"
            >
              <input
                id="b-phone"
                type="tel"
                autoComplete="tel"
                placeholder="+1 (555) 123-4567"
                className={inputClass(!!errors.phone)}
                {...register("phone")}
              />
            </Field>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Submitting…
                </>
              ) : (
                "Book my mock class"
              )}
            </button>

            <p className="text-center text-[11px] text-slate-400">
              By submitting you agree to be contacted about your booking.
            </p>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-600"
      >
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-xs font-medium text-red-600">{error}</p>
      )}
    </div>
  );
}

function inputClass(invalid: boolean) {
  return cn(
    "w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:outline-none focus:ring-2",
    invalid
      ? "border-red-300 focus:border-red-400 focus:ring-red-200"
      : "border-slate-200 focus:border-brand-500 focus:ring-brand-100",
  );
}
