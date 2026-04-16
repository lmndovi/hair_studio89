"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const VIDEO_SRC = "/videos/salon-vid2.mp4";

/** How long the outgoing and incoming clips blend (ms) */
const CROSSFADE_MS = 1400;

/**
 * Start crossfade this many seconds *before* the active clip ends.
 * Must be >= CROSSFADE_MS/1000 so the outgoing layer is fully faded out
 * before the element hits `ended` (avoids a visible hitch).
 */
const CROSSFADE_LEAD_SEC = CROSSFADE_MS / 1000 + 0.35;

const videoBaseClassName =
  "absolute inset-0 h-full w-full object-cover object-[center_25%] pointer-events-none";

const opacityTransitionStyle = {
  transitionProperty: "opacity",
  transitionDuration: `${CROSSFADE_MS}ms`,
  transitionTimingFunction: "linear",
} as const;

function startClipFromZero(video: HTMLVideoElement): Promise<void> {
  video.pause();
  video.currentTime = 0;

  const waitSeek = () =>
    new Promise<void>((resolve) => {
      if (Math.abs(video.currentTime) < 0.02) {
        resolve();
        return;
      }
      video.addEventListener("seeked", () => resolve(), { once: true });
    });

  const waitCanPlay = () =>
    new Promise<void>((resolve, reject) => {
      if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        resolve();
        return;
      }
      const onReady = () => {
        video.removeEventListener("error", onErr);
        resolve();
      };
      const onErr = () => {
        video.removeEventListener("canplay", onReady);
        reject(new Error("video load error"));
      };
      video.addEventListener("canplay", onReady, { once: true });
      video.addEventListener("error", onErr, { once: true });
    });

  return waitSeek()
    .then(() => waitCanPlay())
    .then(() => video.play())
    .then(() => undefined);
}

export function HeroBackgroundVideo() {
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const v0 = useRef<HTMLVideoElement>(null);
  const v1 = useRef<HTMLVideoElement>(null);
  const crossfadeStarted = useRef(false);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    const el = v0.current;
    if (el) void el.play();
  }, []);

  const beginCrossfade = useCallback((which: 0 | 1) => {
    const cur = which === 0 ? v0.current : v1.current;
    const next = which === 0 ? v1.current : v0.current;
    if (!cur || !next) return;

    if (crossfadeStarted.current) return;
    crossfadeStarted.current = true;

    void startClipFromZero(next).then(
      () => {
        setActive(which === 0 ? 1 : 0);
      },
      () => {
        crossfadeStarted.current = false;
      },
    );
  }, []);

  const onTimeUpdate = useCallback(
    (which: 0 | 1) => {
      if (activeRef.current !== which) return;

      const cur = which === 0 ? v0.current : v1.current;
      if (!cur) return;

      const dur = cur.duration;
      if (!Number.isFinite(dur) || dur <= 0) return;

      const remaining = dur - cur.currentTime;
      if (remaining <= CROSSFADE_LEAD_SEC || remaining <= 0) {
        beginCrossfade(which);
      }
    },
    [beginCrossfade],
  );

  useEffect(() => {
    crossfadeStarted.current = false;
    const prev = active === 0 ? 1 : 0;
    const el = prev === 0 ? v0.current : v1.current;
    const id = window.setTimeout(() => {
      if (el) {
        el.pause();
        el.currentTime = 0;
      }
    }, CROSSFADE_MS + 80);
    return () => clearTimeout(id);
  }, [active]);

  return (
    <div className="absolute inset-0 z-0">
      <video
        ref={v0}
        style={opacityTransitionStyle}
        className={`${videoBaseClassName} ${
          active === 0 ? "z-[1] opacity-100" : "z-0 opacity-0"
        }`}
        muted
        playsInline
        preload="auto"
        onTimeUpdate={() => onTimeUpdate(0)}
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>
      <video
        ref={v1}
        style={opacityTransitionStyle}
        className={`${videoBaseClassName} ${
          active === 1 ? "z-[1] opacity-100" : "z-0 opacity-0"
        }`}
        muted
        playsInline
        preload="auto"
        onTimeUpdate={() => onTimeUpdate(1)}
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>
    </div>
  );
}
