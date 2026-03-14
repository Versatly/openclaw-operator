import CalButton from "@/components/CalButton";
import FadeIn from "@/components/FadeIn";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-onyx/10 bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(242,100,48,0.12),transparent_45%)]" />
      <div className="relative mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <FadeIn>
          <CalButton className="text-sm text-tiger hover:underline">
            Book a free consultation. We&apos;ll scope your deployment together →
          </CalButton>
        </FadeIn>
        <FadeIn delay={0.04}>
          <h1 className="mt-6 max-w-3xl font-heading text-4xl font-semibold leading-tight text-onyx sm:text-5xl">
            We deploy and manage your team&apos;s AI assistant — remotely, secured from day one.
          </h1>
        </FadeIn>
        <FadeIn delay={0.08}>
          <p className="mt-6 max-w-2xl text-base text-onyx/70">
            White-glove OpenClaw deployment for founders and exec teams. No technical knowledge required — we handle
            the install, hardening, integrations, and ongoing care so you can focus on running your business.
          </p>
        </FadeIn>
        <FadeIn delay={0.12}>
          <blockquote className="mt-6 border-l-2 border-onyx/15 pl-4">
            <p className="text-sm italic text-onyx/60">
              &ldquo;It feels like hiring an employee rather than opening another chat window.&rdquo;
            </p>
          </blockquote>
        </FadeIn>
        <FadeIn delay={0.16}>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <CalButton className="btn-primary">Book a free call →</CalButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
