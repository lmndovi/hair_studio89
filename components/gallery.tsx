import { InstagramFeedSlider } from "@/components/instagram-feed-slider";

export function Gallery() {
  return (
    <section className="bg-secondary py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Instagram
        </p>
        <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
          Fresh from the chair.
        </h2>

        <InstagramFeedSlider />
      </div>
    </section>
  );
}
