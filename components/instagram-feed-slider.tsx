"use client";

import { curatedGalleryPosts } from "@/data/gallery-posts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

const INSTAGRAM_URL = "https://www.instagram.com/hairstudio89_/";

type FeedResponse =
  | { configured: false; posts: [] }
  | {
      configured: true;
      posts: Array<{
        id: string;
        caption: string | null;
        permalink: string | null;
        imageUrl: string;
      }>;
      error?: string;
    };

function captionLabel(caption: string | null): string {
  if (!caption?.trim()) return "Instagram";
  const t = caption.replace(/\s+/g, " ").trim();
  return t.length > 52 ? `${t.slice(0, 52)}\u2026` : t;
}

function SlideCard({
  href,
  imageUrl,
  label,
}: {
  href: string | null;
  imageUrl: string;
  label: string;
}) {
  const article = (
    <article className="relative aspect-square w-full max-w-[min(24rem,calc(100vw-3rem))] overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:border-accent/40 hover:shadow-md sm:aspect-auto sm:h-96 sm:w-96 sm:max-w-none">
      <Image
        src={imageUrl}
        alt={label}
        fill
        className="object-cover object-[center_22%]"
        sizes="(max-width: 640px) calc(100vw - 3rem), 384px"
        unoptimized={imageUrl.startsWith("http")}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/15 to-transparent"
        aria-hidden
      />
    </article>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label} — view on Instagram`}
        className="block shrink-0 snap-start rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {article}
      </a>
    );
  }

  return <div className="shrink-0 snap-start">{article}</div>;
}

export function InstagramFeedSlider() {
  const [state, setState] = useState<"loading" | "ready">("loading");
  const [feed, setFeed] = useState<FeedResponse | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/instagram/feed");
        const data = (await res.json()) as FeedResponse;
        if (!cancelled) {
          setFeed(data);
          setState("ready");
        }
      } catch {
        if (!cancelled) {
          setFeed({ configured: false, posts: [] });
          setState("ready");
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const useInstagram =
    feed?.configured === true &&
    feed.posts.length > 0 &&
    !feed.error;

  const slides = useInstagram
    ? feed.posts.map((p) => ({
        id: p.id,
        imageUrl: p.imageUrl,
        href: p.permalink,
        label: captionLabel(p.caption),
      }))
    : curatedGalleryPosts.map((p) => ({
        id: p.id,
        imageUrl: p.imageSrc,
        href: p.instagramPostUrl ?? null,
        label: p.caption,
      }));

  const isScrollStrip =
    state === "ready" && useInstagram && slides.length > 3;

  return (
    <div className="mt-10 space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4 px-0">
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
          {useInstagram ? (
            <>
              Latest from{" "}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline decoration-accent/50 underline-offset-4 transition hover:decoration-accent"
              >
                @hairstudio89_
              </a>
              .
              {isScrollStrip ? (
                <> Swipe or drag sideways to browse.</>
              ) : (
                <> Recent posts from the chair.</>
              )}
            </>
          ) : (
            <>
              A curated look at recent work from the chair. For day-to-day
              cuts and colour, follow{" "}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline decoration-accent/50 underline-offset-4 transition hover:decoration-accent"
              >
                @hairstudio89_
              </a>
              .
            </>
          )}
        </p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-md border border-border bg-card px-4 py-2 text-xs uppercase tracking-wider text-foreground transition hover:border-accent/40 hover:bg-secondary"
        >
          Open Instagram
        </a>
      </div>

      <div
        className={cn(isScrollStrip && "-mx-6 px-6 lg:-mx-12 lg:px-12")}
      >
        <div
          className={cn(
            "pb-2 pt-1",
            state === "loading" && "opacity-60",
            isScrollStrip
              ? "scrollbar-hide flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth"
              : "grid grid-cols-1 justify-items-center gap-1 sm:grid-cols-3 sm:gap-1",
          )}
          aria-busy={state === "loading"}
          aria-label={
            isScrollStrip ? "Instagram gallery slider" : "Gallery images"
          }
        >
          {state === "loading"
            ? Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={`sk-${i}`}
                  className="aspect-square w-full max-w-[min(24rem,calc(100vw-3rem))] shrink-0 animate-pulse rounded-xl border border-border bg-muted sm:aspect-auto sm:h-96 sm:w-96 sm:max-w-none sm:snap-start"
                />
              ))
            : slides.map((slide) => (
                <SlideCard
                  key={slide.id}
                  href={slide.href}
                  imageUrl={slide.imageUrl}
                  label={slide.label}
                />
              ))}
        </div>
      </div>
    </div>
  );
}
