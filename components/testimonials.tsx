const reviews = [
  {
    quote:
      "I\u2019ve been going to Daniel for 4 years, he\u2019s fantastic and his colleague is also good. Even after many years of coloring my hair are still healthy thanks to Daniel\u2019s professionalism. Today Daniel was on holiday and his colleague Aracely did my hair and the result is extraordinary. They are both amazing.",
    name: "Greta A.",
  },
  {
    quote:
      "Daniel is a magician! Had balayage taking my (rather ignored and poorly treated) limp dark brown hair, to a gorgeous mid brown and caramel with hints of mid blonde and I honestly feel like an entirely new human. I knew I wanted to go lighter, but wasn\u2019t sure what would suit my skin tone or colouring in general, and he absolutely nailed it! Friendly, professional, great drinks selection, amazing head massage during hair washing - cannot recommend enough!",
    name: "Jade T.",
  },
  {
    quote:
      "Amazing salon! I\u2019ve been coming here in the last months for a blow dry with Daniel and Aracely and now I decided to do my balayage with them too, I\u2019m in love with my new look 😍 Daniel did exactly what I wanted but also he advised me what was best for my hair. 100% recommend. Thank you",
    name: "Rocio R.",
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
