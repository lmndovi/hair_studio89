import { BOOKING_URL } from "@/lib/booking";
import { SALON_EMAIL } from "@/lib/contact";

export function ContactFooter() {
  return (
    <footer id="contact" className="bg-primary py-16 text-primary-foreground">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 lg:flex-row lg:justify-between lg:px-12">
        <div className="max-w-md space-y-8">
          <div>
            <h3 className="font-serif text-3xl text-primary-foreground">
              HairStudio 89
            </h3>
            <div className="mt-4 space-y-2 text-sm leading-7 text-primary-foreground/80">
              <p className="font-medium text-primary-foreground">
                Exclusive Key Worker Offer
              </p>
              <p>
                Receive 15% off your appointment, Tuesday&ndash;Thursday only.
                Valid ID required.
              </p>
            </div>
          </div>

          <div className="space-y-2 text-sm leading-7 text-primary-foreground/80">
            <p className="font-serif font-medium leading-snug text-primary-foreground">
              Love your hair? Share it!
            </p>
            <p>Refer a friend and you&apos;ll both get 15% off.</p>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-2 text-sm text-primary-foreground/80">
            <p className="uppercase tracking-[0.16em] text-primary-foreground">
              Visit
            </p>
            <p>63 Lupus St</p>
            <p>Pimlico, London SW1V 3EY</p>
            <p>Tue&ndash;Fri: 10am&ndash;8pm</p>
            <p>Sat: 9am&ndash;4pm</p>
          </div>
          <div className="space-y-2 text-sm text-primary-foreground/80">
            <p className="uppercase tracking-[0.16em] text-primary-foreground">
              Contact
            </p>
            <a
              href="tel:07549365189"
              className="block hover:text-primary-foreground"
            >
              07549 365189
            </a>
            <a
              href={`mailto:${SALON_EMAIL}`}
              className="block hover:text-primary-foreground"
            >
              {SALON_EMAIL}
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex rounded-md border border-primary-foreground/35 px-4 py-2 text-xs uppercase tracking-wider text-primary-foreground transition hover:border-primary-foreground/55 hover:bg-primary-foreground/10"
            >
              Reserve Online
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
