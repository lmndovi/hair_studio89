import { BOOKING_URL } from "@/lib/booking";

const services = [
  {
    title: "Luxury Blowout",
    description:
      "Smooth, bouncy styling with long-lasting movement and shine.",
    tag: "Styling",
  },
  {
    title: "Precision Haircut",
    description:
      "Shape-enhancing cuts tailored to your features and lifestyle.",
    tag: "Cut",
  },
  {
    title: "Balayage & Gloss",
    description:
      "Soft dimensional color finished with healthy, reflective gloss.",
    tag: "Color",
  },
  {
    title: "Bridal Styling",
    description:
      "Elegant event hair with trial support for your biggest moments.",
    tag: "Bridal",
  },
  {
    title: "Treatment Ritual",
    description:
      "Deep hydration and scalp care to restore softness and strength.",
    tag: "Care",
  },
] as const;

/** Two identical halves for a seamless infinite marquee */
const serviceMarqueeStrip = [...services, ...services];

export function Services() {
  return (
    <section id="services" className="bg-background py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Signature Services
            </p>
            <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
              Crafted for texture, movement, and glow.
            </h2>
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border bg-card px-5 py-2.5 text-xs uppercase tracking-wider text-foreground transition hover:border-foreground/40 hover:bg-secondary"
          >
            Book now
          </a>
        </div>

        <div className="services-marquee-outer py-3">
          <div className="services-marquee-track flex gap-5">
            {[...serviceMarqueeStrip, ...serviceMarqueeStrip].map(
              (service, index) => (
                <a
                  key={`${service.title}-${index}`}
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-[22rem] w-[19.5rem] shrink-0 flex-col rounded-2xl border border-border/90 bg-card p-8 shadow-sm ring-1 ring-transparent transition duration-300 hover:-translate-y-1 hover:border-accent/35 hover:bg-secondary/30 hover:shadow-md hover:ring-accent/15"
                >
                  <span className="w-fit rounded-full border border-border/80 bg-background/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground transition group-hover:border-accent/30 group-hover:text-foreground">
                    {service.tag}
                  </span>

                  <h3 className="mt-7 font-serif text-2xl leading-snug tracking-tight text-card-foreground md:text-[1.65rem]">
                    {service.title}
                  </h3>
                  <div className="mt-5 h-px w-10 bg-accent/60 transition group-hover:w-14 group-hover:bg-accent" />

                  <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-accent transition group-hover:gap-3 group-hover:text-foreground">
                    Enquire
                    <span aria-hidden className="text-base leading-none">
                      →
                    </span>
                  </span>
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
