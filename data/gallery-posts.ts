/**
 * Hand-picked gallery tiles (images under /public).
 * Reorder or edit `caption`; keep each `id` unique.
 *
 * Optional `instagramPostUrl`: paste a single post's link so the tile opens
 * that Instagram URL (otherwise the tile is display-only).
 *
 * Order is the phone mosaic: left, right, then the centered bottom tile.
 * On wider screens the bottom tile moves to the center so the right tile stays on the right.
 */
export type CuratedGalleryPost = {
  id: string;
  imageSrc: string;
  caption: string;
  instagramPostUrl?: string;
  /** Tailwind object-position classes. Defaults to a hair-crop bias. */
  objectPositionClass?: string;
};

export const curatedGalleryPosts: CuratedGalleryPost[] = [
  {
    id: "result-1",
    imageSrc:
      "/images/gallery/656971786_17996368532925958_860149472021765218_n.jpg",
    caption: "Face-framing caramel balayage",
    instagramPostUrl: "https://www.instagram.com/p/DWVrG00F4hC/?img_index=1",
  },
  {
    id: "julie",
    imageSrc: "/images/gallery/julie-hair.jpg",
    caption: "Lived-in brunette",
    instagramPostUrl: "https://www.instagram.com/p/DbBuhlBAekL/",
    objectPositionClass: "object-[center_52%]",
  },
  {
    id: "colour-in-progress",
    imageSrc: "/images/gallery/colour-in-progress.jpg",
    caption: "Blonde colour in progress",
    instagramPostUrl: "https://www.instagram.com/p/DafT8XrF6qL/?img_index=1",
    objectPositionClass: "object-center",
  },
];
