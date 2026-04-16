const galleryItems = [
  "Glossy brunette blend",
  "Soft blonde balayage",
  "Textured layered cut",
  "Sleek bridal updo",
  "Effortless waves finish",
  "Polished bob silhouette",
];

export function Gallery() {
  return (
    <section className="bg-secondary py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Gallery
        </p>
        <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
          Recent transformations from the studio.
        </h2>

        <div className="scrollbar-hide mt-10 overflow-x-auto">
          <div className="flex w-max gap-4 pb-3">
            {galleryItems.map((item) => (
              <article
                key={item}
                className="h-72 w-72 shrink-0 rounded-xl border border-border bg-card p-4 shadow-sm"
              >
                <div className="h-full rounded-lg bg-gradient-to-br from-muted to-secondary p-5">
                  <p className="mt-auto text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {item}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
