import type { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

/** Stroke icons lifted verbatim from the reference design. */
function StrokeIcon({ size = 21, children, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowRightIcon({ size = 16, ...props }: IconProps) {
  return (
    <StrokeIcon size={size} strokeWidth={2.4} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </StrokeIcon>
  );
}

export function CompassIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M16.2 7.8l-2.1 6.3-6.3 2.1 2.1-6.3z" />
    </StrokeIcon>
  );
}

export function TrendUpIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M21 13V7h-6" />
    </StrokeIcon>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </StrokeIcon>
  );
}

export function HelpIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M9.1 9a3 3 0 015.8 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </StrokeIcon>
  );
}

export function PlanIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M9 20H5a2 2 0 01-2-2V6a2 2 0 012-2h4M15 4h4a2 2 0 012 2v12a2 2 0 01-2 2h-4M12 2v20" />
    </StrokeIcon>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </StrokeIcon>
  );
}

export function VideoIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M23 7l-7 5 7 5V7z" />
      <rect x="1" y="5" width="15" height="14" rx="2" />
    </StrokeIcon>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </StrokeIcon>
  );
}

export function ChecklistIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    </StrokeIcon>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" />
      <path d="M22 6l-10 7L2 6" />
    </StrokeIcon>
  );
}

export function ChatIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </StrokeIcon>
  );
}

export function WhatsAppIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.1 4.5.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2-1.42.25-.7.25-1.29.18-1.42-.07-.12-.27-.2-.57-.35zM12.05 21.8h-.01a9.8 9.8 0 01-5-1.37l-.36-.21-3.72.97.99-3.62-.23-.37a9.77 9.77 0 01-1.5-5.22c0-5.4 4.4-9.8 9.82-9.8a9.75 9.75 0 016.94 2.88 9.75 9.75 0 012.87 6.94c0 5.4-4.4 9.8-9.8 9.8zm8.34-18.14A11.7 11.7 0 0012.05.2C5.55.2.26 5.49.26 12a11.75 11.75 0 001.57 5.9L.16 24l6.25-1.64a11.78 11.78 0 005.63 1.44h.01c6.5 0 11.79-5.29 11.79-11.8 0-3.15-1.23-6.11-3.45-8.34z" />
    </svg>
  );
}
