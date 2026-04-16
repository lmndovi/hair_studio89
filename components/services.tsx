const services = [
  {
    title: "Luxury Blowout",
    description: "Smooth, bouncy styling with long-lasting movement and shine.",
    tag: "Styling",
  },
  {
    title: "Precision Haircut",
    description: "Shape-enhancing cuts tailored to your features and lifestyle.",
    tag: "Cut",
  },
  {
    title: "Balayage & Gloss",
    description: "Soft dimensional color finished with healthy, reflective gloss.",
    tag: "Color",
  },
  {
    title: "Bridal Styling",
    description: "Elegant event hair with trial support for your biggest moments.",
    tag: "Bridal",
  },
  {
    title: "Treatment Ritual",
    description: "Deep hydration and scalp care to restore softness and strength.",
    tag: "Care",
  },
];

const carouselServices = [...services, ...services];

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
            href="#contact"
            className="rounded-md border border-border bg-card px-5 py-2.5 text-xs uppercase tracking-wider text-foreground transition hover:border-foreground/40 hover:bg-secondary"
          >
            Consultation
          </a>
        </div>

        <div className="scrollbar-hide overflow-x-auto">
          <div className="flex w-max gap-5 pb-3">
            {carouselServices.map((service, index) => (
              <article
                key={`${service.title}-${index}`}
                className="group flex h-72 w-72 shrink-0 flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <span className="w-fit rounded-full bg-secondary px-3 py-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                  {service.tag}
                </span>
                <h3 className="mt-5 font-serif text-2xl text-card-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-auto w-fit text-xs uppercase tracking-widest text-accent transition group-hover:text-foreground"
                >
                  Learn More
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
