import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 select-none hover:opacity-90 transition-opacity">
      <span className="text-xl tracking-tight text-foreground">
        <span className="font-extrabold">GlowBook</span>
        <span className="font-medium text-brand">.app</span>
      </span>
    </Link>
  );
}
