const brands = [
  {
    name: "O\u0026M",
    description:
      "O\u0026M product formulas replace harsh chemicals with active natural extracts and minerals, including native Australian ingredients like Lilly Pilly, Banksia Flower, Quandong, Tasmanian Sea Kelp and Davidson Plum, as well as quality essential oils that deliver real benefits.",
  },
] as const;

export function Brands() {
  return (
    <section className="bg-secondary py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="mb-16 text-center lg:mb-20">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Our Brands
          </p>
          <h2 className="font-serif text-3xl tracking-tight text-balance text-foreground md:text-5xl lg:text-6xl">
            Powered By
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          {brands.map((brand) => (
            <article
              key={brand.name}
              className="rounded-md border border-border bg-background/50 p-8 transition-colors duration-300 hover:border-accent lg:p-12"
            >
              <h3 className="font-serif text-2xl text-foreground lg:text-3xl">
                {brand.name}
              </h3>
              <div className="mt-4 mb-6 h-px w-10 bg-accent" />
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {brand.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
