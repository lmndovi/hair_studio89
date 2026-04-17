import { BOOKING_URL } from "@/lib/booking";

export function ContactFooter() {
  return (
    <footer id="contact" className="bg-primary py-16 text-primary-foreground">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 lg:flex-row lg:justify-between lg:px-12">
        <div>
          <h3 className="font-serif text-3xl text-primary-foreground">
            HairStudio 89
          </h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-primary-foreground/80">
            Boutique hair studio focused on tailored cuts, modern colour, and
            refined styling for everyday confidence.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-2 text-sm text-primary-foreground/80">
            <p className="uppercase tracking-[0.16em] text-primary-foreground">
              Visit
            </p>
            <p>63 Lupus St</p>
            <p>Pimlico, London SW1V 3EY</p>
            <p>Mon-Sat: 9am - 7pm</p>
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
              href="mailto:booking@hairstudio89.co.uk"
              className="block hover:text-primary-foreground"
            >
              booking@hairstudio89.co.uk
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
