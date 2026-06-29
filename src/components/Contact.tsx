import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
              Contact us
            </p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Questions? We're{" "}
              <span className="text-brand-700">here to help.</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Reach out about consultations, 1:1 classes, or just to say hi —
              we'll respond within one business day.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <ContactRow
                icon={<Mail className="h-5 w-5" />}
                label="Email"
                value="yatharth1604@gmail.com"
                href="mailto:yatharth1604@gmail.com"
              />
              <ContactRow
                icon={<Phone className="h-5 w-5" />}
                label="Phone"
                value="9937797985"
                href="tel:+919937797985"
              />
              <ContactRow
                icon={<MapPin className="h-5 w-5" />}
                label="Hours"
                value="Mon–Sat · 9am – 8pm"
              />
              <ContactRow
                icon={<MessageCircle className="h-5 w-5" />}
                label="WhatsApp"
                value="9937797985"
                href="https://wa.me/919937797985"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:border-brand-100 hover:shadow-md">
      <span className="icon-circle h-11 w-11">{icon}</span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          {label}
        </p>
        <p className="text-sm font-semibold text-slate-900">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block" target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return content;
}
