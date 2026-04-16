const BOOKING_URL =
  "https://s-iq.co/BookingPortal/dist/?salonid=dbafbaca-eef6-4027-8a63-87a83f5384a0&tab=book";

export function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden pt-28">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/hero-background.mov" type="video/quicktime" />
      </video>
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-background" />

      <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-7xl flex-col justify-end px-6 pb-12 lg:px-12 lg:pb-20">
        <p className="mb-4 inline-flex w-fit rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.24em] text-white backdrop-blur-sm">
          Luxury Hair Experience
        </p>
        <h1 className="max-w-3xl font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
          Create your signature look with effortless confidence.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
          Hair Studio 89 blends precision cutting, dimensional colour, and
          modern finishing in a calm boutique setting designed around you.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-white px-6 py-3 text-sm font-medium uppercase tracking-wider text-foreground transition hover:scale-[1.02]"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="rounded-md border border-white/70 px-6 py-3 text-sm font-medium uppercase tracking-wider text-white transition hover:bg-white/15"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}
