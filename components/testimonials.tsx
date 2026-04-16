const reviews = [
  {
    quote:
      "Best salon experience I've had in years. The cut grows out beautifully and still feels effortless after weeks.",
    name: "Amelia H.",
  },
  {
    quote:
      "My balayage is exactly what I asked for - bright, natural, and so soft. The team is warm and highly skilled.",
    name: "Sophie W.",
  },
  {
    quote:
      "I booked for bridal hair and everything was flawless. The style held all day and photographed perfectly.",
    name: "Lauren P.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-muted py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Client Love
        </p>
        <h2 className="mt-3 max-w-2xl font-serif text-3xl text-foreground sm:text-4xl">
          Trusted by clients.
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <p className="text-sm leading-7 text-card-foreground">
                &ldquo;{review.quote}&rdquo;
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {review.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
