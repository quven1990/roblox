import type { ReactNode } from "react";

export function KitHero({
  kicker,
  title,
  dek,
  src,
  alt,
  icon,
  children,
  eager = false,
  capture = false,
}: {
  kicker: string;
  title: string;
  dek: string;
  src: string;
  alt: string;
  icon?: string;
  children?: ReactNode;
  eager?: boolean;
  capture?: boolean;
}) {
  return (
    <header className="kit-hero">
      <div className="wrap">
        <img
          className={capture ? "kit-cover is-capture" : "kit-cover"}
          src={src}
          alt={alt}
          width={1400}
          height={788}
          sizes="100vw"
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
        />
        <div className="kit-hero-copy">
          {icon ? (
            <img
              className="game-icon"
              src={icon}
              alt=""
              width={72}
              height={72}
            />
          ) : null}
          <div>
            <p className="kicker">{kicker}</p>
            <h1>{title}</h1>
            <p className="lede">{dek}</p>
            {children}
          </div>
        </div>
      </div>
    </header>
  );
}
