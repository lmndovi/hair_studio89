import Image from "next/image";

const slides = [
  {
    src: "/images/balayage.jpg",
    caption: "Soft blonde balayage",
  },
  {
    src: "/images/hair-treatment.jpg",
    caption: "Treatment ritual & shine",
  },
  {
    src: "/images/gallery/hair-result-1.jpg",
    caption: "Dimensional colour",
  },
  {
    src: "/images/gallery/hair-result-2.jpg",
    caption: "Glossy brunette blend",
  },
  {
    src: "/images/gallery/hair-result-3.jpg",
    caption: "Effortless waves",
  },
  {
    src: "/images/salon-hero.webp",
    caption: "The studio",
  },
] as const;

function GalleryCard({
  src,
  caption,
  duplicate,
}: {
  src: string;
  caption: string;
  duplicate?: boolean;
}) {
  return (
    <article
      className="relative h-72 w-72 shrink-0 overflow-hidden rounded-xl border border-border bg-card shadow-sm"
      aria-hidden={duplicate ? true : undefined}
    >
      <Image
        src={src}
        alt={duplicate ? "" : caption}
        fill
        className="object-cover"
        sizes="288px"
        priority={!duplicate && src === slides[0].src}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
      <p className="absolute bottom-4 left-4 right-4 text-xs uppercase tracking-[0.18em] text-foreground">
        {caption}
      </p>
    </article>
  );
}

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

        <div className="gallery-marquee-outer mt-10 -mx-6 px-6 lg:-mx-12 lg:px-12">
          <div className="gallery-marquee-track">
            {slides.map((slide) => (
              <GalleryCard
                key={slide.src}
                src={slide.src}
                caption={slide.caption}
              />
            ))}
            {slides.map((slide) => (
              <GalleryCard
                key={`${slide.src}-loop`}
                src={slide.src}
                caption={slide.caption}
                duplicate
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
