const BOOKING_URL =
  "https://s-iq.co/BookingPortal/dist/?salonid=dbafbaca-eef6-4027-8a63-87a83f5384a0&tab=book";

export function ContactFooter() {
  return (
    <footer id="contact" className="bg-background py-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 lg:flex-row lg:justify-between lg:px-12">
        <div>
          <h3 className="font-serif text-3xl text-foreground">
            HairStudio 89
          </h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
            Boutique hair studio focused on tailored cuts, modern colour, and
            refined styling for everyday confidence.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="uppercase tracking-[0.16em] text-foreground">Visit</p>
            <p>89 Studio Lane</p>
            <p>London, UK</p>
            <p>Mon-Sat: 9am - 7pm</p>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="uppercase tracking-[0.16em] text-foreground">
              Contact
            </p>
            <a href="tel:07549365189" className="block hover:text-foreground">
              07549 365189
            </a>
            <a
              href="mailto:booking@hairstudio89.co.uk"
              className="block hover:text-foreground"
            >
              booking@hairstudio89.co.uk
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex rounded-md border border-border px-4 py-2 text-xs uppercase tracking-wider text-foreground transition hover:border-foreground/40 hover:bg-secondary"
            >
              Reserve Online
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
