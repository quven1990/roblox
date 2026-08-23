"use client";

import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { analyticsContextFromPath, trackEvent } from "@/lib/analytics";

export function YouTubeEmbed({
  videoId,
  title,
  credit,
  caption,
  poster,
  watchUrl,
}: {
  videoId: string;
  title: string;
  credit: string;
  caption: string;
  poster: string;
  watchUrl: string;
}) {
  const [playing, setPlaying] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { game, page } = analyticsContextFromPath(pathname);

  if (!/^[A-Za-z0-9_-]{11}$/.test(videoId)) {
    return null;
  }

  const embedSrc = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0&modestbranding=1&fs=1`;

  function handlePlay() {
    setPlaying(true);
    trackEvent("video_play", { game, page, video_id: videoId });
    requestAnimationFrame(() => {
      frameRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  }

  return (
    <figure className="yt-embed">
      <div className="yt-embed-frame" ref={frameRef}>
        {playing ? (
          <iframe
            src={embedSrc}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <button
            type="button"
            className="yt-embed-load"
            onClick={handlePlay}
            aria-label={`Play video: ${title}`}
          >
            <img
              src={poster}
              alt=""
              width={1280}
              height={720}
              decoding="async"
              loading="lazy"
              fetchPriority="low"
            />
            <span className="yt-embed-shade" aria-hidden="true" />
            <span className="yt-embed-ui" aria-hidden="true">
              <span className="yt-embed-play">
                <Play size={28} fill="currentColor" />
              </span>
              <span className="yt-embed-hint yt-embed-hint-fine">Play video</span>
              <span className="yt-embed-hint yt-embed-hint-coarse">Tap to play</span>
            </span>
          </button>
        )}
      </div>
      <figcaption>
        <p>{caption}</p>
        <span className="yt-embed-credit">
          Unofficial clip by {credit}. YouTube only loads after you choose play.
        </span>
        <a
          className="yt-embed-watch"
          href={watchUrl}
          rel="noopener noreferrer"
          target="_blank"
          onClick={() =>
            trackEvent("video_youtube", { game, page, video_id: videoId })
          }
        >
          Watch on YouTube
        </a>
      </figcaption>
    </figure>
  );
}
