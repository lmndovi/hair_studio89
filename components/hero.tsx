import { HeroBackgroundVideo } from "@/components/hero-background-video";
import { BOOKING_URL } from "@/lib/booking";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden pt-28">
      <HeroBackgroundVideo />
      <div className="absolute inset-0 z-10 bg-black/45" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-black/55 to-background" />

      <div className="relative z-20 mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-7xl flex-col justify-end px-6 pb-16 lg:px-12 lg:pb-24">
        <p
          className={`${cairo.className} max-w-2xl text-lg leading-snug text-white sm:text-xl lg:text-3xl`}
        >
          Lived-in colour specialists creating soft, blended blondes and
          brondes. Our focus is on natural-looking colour that grows
          seamlessly and complements your unique style.
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
