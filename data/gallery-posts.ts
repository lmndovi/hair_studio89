/**
 * Hand-picked gallery tiles (images under /public).
 * Reorder or edit `caption`; keep each `id` unique.
 *
 * Optional `instagramPostUrl`: paste a single post's link so the tile opens
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
    id: "result-1",
    imageSrc:
      "/images/gallery/656971786_17996368532925958_860149472021765218_n.jpg",
    caption: "Face-framing caramel balayage",
    instagramPostUrl: "https://www.instagram.com/p/DWVrG00F4hC/?img_index=1",
  },
  {
    id: "result-2",
    imageSrc:
      "/images/gallery/671813813_17999612345925958_8558819217781760793_n.jpg",
    caption: "Cool blonde dimension",
    instagramPostUrl: "https://www.instagram.com/p/DXZHPv5l1-W/?img_index=1",
  },
  {
    id: "result-3",
    imageSrc:
      "/images/gallery/682040977_18000420164925958_6758963316320720298_n.jpg",
    caption: "Honey-blonde balayage",
    instagramPostUrl: "https://www.instagram.com/p/DXolw5mF5co/?img_index=1",
  },
];
