const team = [
  {
    name: "Maya",
    role: "Creative Director",
    blurb: "Editorial-inspired cutting and styling with a soft luxury finish.",
  },
  {
    name: "Eleanor",
    role: "Color Specialist",
    blurb: "Known for seamless balayage, blondes, and healthy color correction.",
  },
  {
    name: "Nadia",
    role: "Stylist",
    blurb: "Effortless event styling and polished, modern everyday looks.",
  },
];

export function Team() {
  return (
    <section id="team" className="bg-background py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Meet The Team
        </p>
        <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
          Artists with a detail-first approach.
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {team.map((member) => (
            <article
              key={member.name}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="mb-5 h-52 rounded-lg bg-gradient-to-br from-secondary to-muted" />
              <h3 className="font-serif text-2xl text-card-foreground">
                {member.name}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-accent">
                {member.role}
              </p>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {member.blurb}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
