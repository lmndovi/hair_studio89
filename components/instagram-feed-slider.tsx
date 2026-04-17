"use client";

import { curatedGalleryPosts } from "@/data/gallery-posts";
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
  return t.length > 52 ? `${t.slice(0, 52)}…` : t;
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
    <article className="relative h-72 w-72 overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:border-accent/40 hover:shadow-md">
      <Image
        src={imageUrl}
        alt={label}
        fill
        className="object-cover"
        sizes="288px"
        unoptimized={imageUrl.startsWith("http")}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/15 to-transparent" />
      <p className="absolute bottom-4 left-4 right-4 text-xs uppercase tracking-[0.18em] text-foreground">
        {label}
      </p>
    </article>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block shrink-0 snap-start"
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
              . Swipe or drag sideways to browse.
            </>
          ) : (
            <>
              A curated look at recent work — swipe sideways to browse. For
              day-to-day cuts and colour, follow{" "}
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

      <div className="-mx-6 px-6 lg:-mx-12 lg:px-12">
        <div
          className={`scrollbar-hide flex gap-4 overflow-x-auto scroll-smooth pb-2 pt-1 snap-x snap-mandatory ${
            state === "loading" ? "opacity-60" : ""
          }`}
          aria-busy={state === "loading"}
          aria-label="Instagram gallery slider"
        >
          {state === "loading"
            ? Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={`sk-${i}`}
                  className="h-72 w-72 shrink-0 snap-start animate-pulse rounded-xl border border-border bg-muted"
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
