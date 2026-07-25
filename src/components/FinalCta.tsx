import { CALENDAR_URL, WHATSAPP_URL } from "../lib/site";
import { WhatsAppIcon } from "./icons";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section id="calendar" className="pb-16 sm:pb-24">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[26px] bg-gradient-to-br from-green-dark to-[#0a4f34] p-[clamp(44px,6vw,72px)] text-center text-[#dff2e8]">
          <span
            className="absolute -right-[140px] -top-[180px] h-[420px] w-[420px] rounded-full bg-white/5"
            aria-hidden="true"
          />
          <span
            className="absolute -bottom-[120px] -left-[100px] h-[280px] w-[280px] rounded-full bg-white/[0.04]"
            aria-hidden="true"
          />
          <Reveal className="relative">
            <h2 className="mb-4 text-[clamp(28px,4vw,44px)] font-extrabold text-white">
              Take the First Step Towards Your MCAT Success
            </h2>
            <p className="mx-auto mb-2.5 max-w-[680px] text-[17px]">
              Every student's journey is different.
            </p>
            <p className="mx-auto mb-2.5 max-w-[680px] text-[17px]">
              Book a free one-on-one MCAT consultation to discuss your current preparation,
              target score, study plan, and goals. We'll help you understand your next steps
              and determine whether personalized MCAT coaching is{" "}
              <strong className="font-bold text-white">the right fit</strong> for you.
            </p>
            <div className="mt-[30px] flex flex-wrap justify-center gap-3.5">
              <a
                className="btn bg-white text-green-dark transition-all duration-200 hover:scale-[1.03]"
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Your Free MCAT Consultation
              </a>
              <a
                className="btn border-[1.5px] border-white/40 bg-white/[0.14] text-white transition-all duration-200 hover:scale-[1.03] hover:bg-white/20"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
