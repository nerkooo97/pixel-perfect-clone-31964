import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Cjenovnik — RealEstate Pro" },
      {
        name: "description",
        content:
          "Odaberite paket koji najbolje odgovara vašem biznisu. Aplikacije za uposlenike, klijente i web stranica.",
      },
      { property: "og:title", content: "Cjenovnik — RealEstate Pro" },
      {
        property: "og:description",
        content: "Odaberite paket koji najbolje odgovara vašem biznisu.",
      },
    ],
  }),
  component: PricingPage,
});

function Nav() {
  const items = [
    { label: "Početna", href: "/" },
    { label: "Cjenovnik", href: "/pricing" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {items.map((i) => (
            <Link
              key={i.label}
              to={i.href}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {i.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-medium text-foreground hover:bg-muted"
          >
            Početna
          </Link>
          <button className="rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background hover:opacity-90">
            Kontakt
          </button>
        </div>
      </div>
    </header>
  );
}

const packages = [
  {
    name: "Osnovni",
    description: "Aplikacija za uposlenike + Web stranica",
    price: "999 KM",
    features: [
      "Aplikacija za uposlenike (iOS & Android)",
      "Web stranica prilagođena vašem brendu",
      "Upravljanje terminima i kalendar",
      "Pregled klijenata i historije",
      "Notifikacije i podsjetnici",
      "Interna komunikacija tima",
      "Online booking integracija",
      "SEO optimizacija",
    ],
    cta: "Započnite",
    highlighted: false,
  },
  {
    name: "Napredni",
    description: "Aplikacija za uposlenike + Aplikacija za klijente",
    price: "1199 KM",
    features: [
      "Aplikacija za uposlenike (iOS & Android)",
      "Aplikacija za klijente (iOS & Android)",
      "Online rezervacija termina 24/7",
      "Pregled usluga i cjenovnika",
      "Loyalty program i digitalna kartica",
      "Push notifikacije i podsjetnici",
      "Upravljanje terminima i kalendar",
      "Višelokacijska podrška",
    ],
    cta: "Započnite",
    highlighted: true,
  },
  {
    name: "Premium",
    description: "Kompletno rješenje — sve u jednom",
    price: "1399 KM",
    features: [
      "Aplikacija za uposlenike (iOS & Android)",
      "Aplikacija za klijente (iOS & Android)",
      "Web stranica prilagođena vašem brendu",
      "Online booking na svim kanalima",
      "Loyalty program i digitalna kartica",
      "Elektronski karton pacijenta",
      "Višelokacijska podrška",
      "Prioritetna tehnička podrška",
    ],
    cta: "Kontaktirajte nas",
    highlighted: false,
  },
];

function PricingCards() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          CJENOVNIK
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Izaberite paket koji odgovara
          <br />
          vašem biznisu
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
          Bilo da tek započinjete ili želite kompletno digitalno rješenje, imamo paket prilagođen vašim potrebama.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className={`flex flex-col rounded-2xl border p-6 ${
              pkg.highlighted
                ? "border-brand bg-brand/5"
                : "border-border bg-card"
            }`}
          >
            <div>
              <h3 className="text-lg font-semibold">{pkg.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                {pkg.description}
              </p>
            </div>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-3xl font-semibold tracking-tight">
                {pkg.price}
              </span>
              <span className="text-xs text-muted-foreground">+ PDV</span>
            </div>
            <p className="mt-2 text-[10px] leading-relaxed text-muted-foreground">
              Nakon prve godine: hosting, domena i osnovno održavanje 300 KM/godišnje
            </p>
            <ul className="mt-6 space-y-3">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <Link
                to="/zahtjev"
                search={{ paket: pkg.name as "Osnovni" | "Napredni" | "Premium" }}
                className={`flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
                  pkg.highlighted
                    ? "bg-brand text-white hover:bg-brand/90"
                    : "border border-border bg-background text-foreground hover:bg-muted"
                }`}
              >
                {pkg.cta}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ComparisonTable() {
  const rows = [
    { feature: "Aplikacija za uposlenike", basic: true, advanced: true, premium: true },
    { feature: "Web stranica", basic: true, advanced: false, premium: true },
    { feature: "Aplikacija za klijente", basic: false, advanced: true, premium: true },
    { feature: "Online rezervacija", basic: true, advanced: true, premium: true },
    { feature: "Upravljanje terminima", basic: true, advanced: true, premium: true },
    { feature: "Loyalty program", basic: false, advanced: true, premium: true },
    { feature: "Push notifikacije", basic: false, advanced: true, premium: true },
    { feature: "Elektronski karton", basic: false, advanced: false, premium: true },
    { feature: "Više lokacija", basic: false, advanced: true, premium: true },
    { feature: "Prioritetna podrška", basic: false, advanced: false, premium: true },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="overflow-hidden rounded-2xl border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-6 py-4 font-medium text-foreground">Mogućnost</th>
              <th className="px-6 py-4 font-medium text-foreground text-center">Osnovni</th>
              <th className="px-6 py-4 font-medium text-foreground text-center">Napredni</th>
              <th className="px-6 py-4 font-medium text-foreground text-center">Premium</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={row.feature}
                className={idx % 2 === 0 ? "bg-background" : "bg-muted/30"}
              >
                <td className="px-6 py-3 text-muted-foreground">{row.feature}</td>
                <td className="px-6 py-3 text-center">
                  {row.basic ? (
                    <Check className="mx-auto h-4 w-4 text-brand" />
                  ) : (
                    <span className="text-muted-foreground">—</span>
                  )}
                </td>
                <td className="px-6 py-3 text-center">
                  {row.advanced ? (
                    <Check className="mx-auto h-4 w-4 text-brand" />
                  ) : (
                    <span className="text-muted-foreground">—</span>
                  )}
                </td>
                <td className="px-6 py-3 text-center">
                  {row.premium ? (
                    <Check className="mx-auto h-4 w-4 text-brand" />
                  ) : (
                    <span className="text-muted-foreground">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-muted/30 p-8 text-center md:p-12">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Sigurnost
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
          Platite tek kada sve bude spremno
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
          Bez predplate — plaćate po isporuci, tek kada su aplikacije i web stranica potpuno postavljene i spremne za rad.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-8">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
        <Logo />
        <p className="text-xs text-muted-foreground">2025 RealEstate Pro</p>
      </div>
    </footer>
  );
}

function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl bg-background">
        <Nav />
        <PricingCards />
        <ComparisonTable />
        <TrustSection />
        <Footer />
      </div>
    </div>
  );
}
