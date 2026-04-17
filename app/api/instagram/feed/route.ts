import { NextResponse } from "next/server";

const FEED_URL = "https://feedframer.com/api/v1/me";

type InstagramFeedPost = {
  id: string;
  caption: string | null;
  permalink: string | null;
  imageUrl: string;
};

function pickImageUrl(post: {
  mediaUrl?: string;
  sizes?: Record<string, string>;
}): string | null {
  if (post.mediaUrl) return post.mediaUrl;
  const s = post.sizes;
  if (!s) return null;
  return s["768"] ?? s["640"] ?? s["320"] ?? Object.values(s)[0] ?? null;
}

export async function GET() {
  const apiKey = process.env.FEEDFRAMER_API_KEY;
  if (!apiKey) {
    return NextResponse.json({
      configured: false as const,
      posts: [] as InstagramFeedPost[],
    });
  }

  try {
    const params = new URLSearchParams({
      api_key: apiKey,
      "page[size]": "12",
    });
    const res = await fetch(`${FEED_URL}?${params.toString()}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json(
        { configured: true as const, posts: [], error: "upstream" },
        { status: 200 },
      );
    }

    const data = (await res.json()) as {
      posts?: Array<{
        id: string;
        caption?: string | null;
        permalink?: string | null;
        mediaUrl?: string;
        sizes?: Record<string, string>;
      }>;
    };

    const raw = data.posts ?? [];
    const posts: InstagramFeedPost[] = [];

    for (const p of raw) {
      const imageUrl = pickImageUrl(p);
      if (!imageUrl) continue;
      posts.push({
        id: p.id,
        caption: p.caption ?? null,
        permalink: p.permalink ?? null,
        imageUrl,
      });
    }

    return NextResponse.json({ configured: true as const, posts });
  } catch {
    return NextResponse.json(
      { configured: true as const, posts: [], error: "fetch" },
      { status: 200 },
    );
  }
}
