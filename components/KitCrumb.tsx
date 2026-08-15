import Link from "next/link";

export function KitCrumb({
  trail,
}: {
  trail: readonly { href?: string; label: string }[];
}) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <Link href="/">Hub</Link>
      {trail.map((item) => (
        <span key={item.label}>
          <span aria-hidden="true"> / </span>
          {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
        </span>
      ))}
    </nav>
  );
}
