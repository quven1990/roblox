"use client";

import { useState } from "react";
import { Play } from "lucide-react";

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

  if (!/^[A-Za-z0-9_-]{11}$/.test(videoId)) {
    return null;
  }

  const embedSrc = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0&modestbranding=1`;

  return (
    <figure className="yt-embed">
      <div className="yt-embed-frame">
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
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${title}`}
          >
            <img
              src={poster}
              alt=""
              width={1280}
              height={720}
              decoding="async"
              loading="lazy"
            />
            <span className="yt-embed-shade" aria-hidden="true" />
            <span className="yt-embed-ui" aria-hidden="true">
              <span className="yt-embed-play">
                <Play size={28} fill="currentColor" />
              </span>
              <span className="yt-embed-hint">Play video</span>
            </span>
          </button>
        )}
      </div>
      <figcaption>
        <p>{caption}</p>
        <span className="yt-embed-credit">
          Unofficial clip by {credit}. YouTube only loads after you tap play.
        </span>
        <a
          className="yt-embed-watch"
          href={watchUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          Watch on YouTube
        </a>
      </figcaption>
    </figure>
  );
}
