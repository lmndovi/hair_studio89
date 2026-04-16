const team = [
  {
    name: "Araceli Perez",
    initials: "AP",
    tagline: "Freehand balayage · 17+ years",
    bio: "Araceli brings with her over 17 years of experience in the industry, having worked in numerous salons across the world. Her speciality is in the freehand balayage technique, which she has honed over the years to create stunning and natural-looking results. Araceli’s experience also includes working as a creative stylist for events in the Middle East and the UK.",
  },
  {
    name: "Daniel Matez",
    initials: "DM",
    tagline: "Creative colour & styling · 16+ years",
    bio: "Daniel, on the other hand, has been in the industry for 16 years, and his expertise lies in creative colouring and styling. His talent has landed him the opportunity to collaborate on red-carpet events and fashion weeks. With his keen eye for detail and ability to create unique looks, Daniel is a valuable asset to our team.",
  },
] as const;

function MonogramPlate({ initials }: { initials: string }) {
  return (
    <div
      className="relative flex h-72 w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-card"
      aria-hidden
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 30%, color-mix(in oklch, var(--accent) 45%, transparent) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 85% 75%, color-mix(in oklch, var(--primary) 20%, transparent) 0%, transparent 50%)",
        }}
      />
      <div className="pointer-events-none absolute inset-6 rounded-lg border border-border/60" />
      <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-accent/40 bg-background/80 shadow-sm backdrop-blur-[2px]">
        <span className="font-serif text-5xl tracking-tight text-foreground/90 md:text-6xl">
          {initials}
        </span>
      </div>
    </div>
  );
}

export function Team() {
  return (
    <section id="team" className="bg-background py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Meet The Team
        </p>
        <h2 className="mt-3 max-w-2xl font-serif text-3xl text-foreground sm:text-4xl">
          The creatives behind HairStudio&nbsp;89.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          These two artists prefer the spotlight to stay
          on their craft and you hair.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-12">
          {team.map((member) => (
            <article
              key={member.name}
              className="flex flex-col rounded-xl border border-border bg-card shadow-sm"
            >
              <MonogramPlate initials={member.initials} />
              <div className="flex flex-1 flex-col p-6 pb-10 lg:p-8 lg:pb-12">
                <h3 className="font-serif text-2xl text-card-foreground lg:text-3xl">
                  {member.name}
                </h3>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-accent">
                  {member.tagline}
                </p>
                <p className="mt-5 text-sm leading-7 text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
