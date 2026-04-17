/**
 * Hand-picked gallery tiles (images under /public).
 * Reorder or edit `caption`; keep each `id` unique.
 *
 * Optional `instagramPostUrl`: paste a single post’s link so the tile opens
 * that Instagram URL (otherwise the tile is display-only).
 */
export type CuratedGalleryPost = {
  id: string;
  imageSrc: string;
  caption: string;
  instagramPostUrl?: string;
};

export const curatedGalleryPosts: CuratedGalleryPost[] = [
  {
    id: "balayage",
    imageSrc: "/images/balayage.jpg",
    caption: "Balayage & gloss",
  },
  {
    id: "treatment",
    imageSrc: "/images/hair-treatment.jpg",
    caption: "Treatment ritual",
  },
  {
    id: "result-1",
    imageSrc: "/images/gallery/hair-result-1.jpg",
    caption: "Dimensional colour",
  },
  {
    id: "result-2",
    imageSrc: "/images/gallery/hair-result-2.jpg",
    caption: "Bridal-ready finish",
  },
  {
    id: "result-3",
    imageSrc: "/images/gallery/hair-result-3.jpg",
    caption: "Movement & shine",
  },
  {
    id: "studio",
    imageSrc: "/images/salon-hero.webp",
    caption: "The studio",
  },
];
