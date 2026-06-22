import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" className="inline-block">
      <img
        src="https://placehold.co/160x40?text=GlowBook+App"
        alt="GlowBook App logo"
        className="h-8 w-auto"
      />
    </Link>
  );
}
