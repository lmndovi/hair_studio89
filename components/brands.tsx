const brands = [
  {
    name: "Olaplex",
    description:
      "Our humble beginnings started in a California garage, and since 2014 have grown exponentially to include millions of fans worldwide. Our patented technology is continuously changing what is possible for hair!",
  },
  {
    name: "O&M",
    description:
      "O&M product formulas replace harsh chemicals with active natural extracts and minerals, including native Australian ingredients like Lilly Pilly, Banksia Flower, Quandong, Tasmanian Sea Kelp and Davidson Plum, as well as quality essential oils that deliver real benefits.",
  },
];

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

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="rounded-md border border-border p-8 transition-colors duration-300 hover:border-accent lg:p-12"
            >
              <h3 className="mb-4 font-serif text-2xl text-foreground lg:text-3xl">
                {brand.name}
              </h3>
              <div className="mb-6 h-px w-10 bg-accent" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                {brand.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
