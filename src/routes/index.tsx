import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Building2,
  BarChart3,
  DollarSign,
  FileText,
  Check,
  CheckCircle2,
  ShieldCheck,
  Users,
  TrendingUp,
  ChevronDown,
  Search,
  Plus,
  Bell,
  Sparkles,
  Scissors,
  Flower2,
  HeartPulse,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GlowBook App — Rješenje koje mijenja vaše poslovanje!" },
      {
        name: "description",
        content:
          "Mobilna aplikacija i web stranica za vaše klijente i pametni sistem za vaše zaposlenike. Povećajte broj rezervacija i izgradite brend koji klijenti obožavaju.",
      },
      { property: "og:title", content: "GlowBook App" },
      {
        property: "og:description",
        content: "The all-in-one platform for modern beauty salons and clinics.",
      },
    ],
  }),
  component: Index,
});

import { Logo } from "@/components/Logo";

function Nav() {
  const items = [
    { label: "Početna", href: "/" },
    { label: "Funkcionalnosti", href: "/funkcionalnosti" },
    { label: "Cjenovnik", href: "/pricing" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {items.map((i) => (
            <Link key={i.label} to={i.href} className="text-sm text-muted-foreground hover:text-foreground">
              {i.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/pricing" className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-medium text-foreground hover:bg-muted">
            Cjenovnik
          </Link>
          <Link to="/kontakt" className="rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background hover:opacity-90">
            Kontakt
          </Link>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const [activeDevice, setActiveDevice] = useState<"web" | "employee" | "client">("web");
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-16">
      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl">
          Rješenje koje mijenja
          <br />
          vaše poslovanje!
        </h1>
        <div className="flex flex-col justify-between gap-6">
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            Mobilna aplikacija i web stranica za vaše klijente i pametni sistem za vaše zaposlenike. Povećajte broj rezervacija i izgradite brend koji klijenti vole.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/pricing" className="rounded-full border border-border bg-background px-5 py-2 text-sm font-medium text-foreground hover:bg-muted">
              Cjenovnik
            </Link>
            <Link to="/kontakt" className="rounded-full bg-brand px-5 py-2 text-sm font-medium text-white hover:bg-brand/90">
              Kontakt
            </Link>
          </div>
        </div>
      </div>

      {/* Multi-Device Presentation */}
      <div className="relative mt-16 w-full flex flex-col items-center justify-center select-none overflow-visible pb-12">
        {/* Ambient Glow */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-brand/10 blur-3xl -top-24 -left-24 pointer-events-none" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-brand/10 blur-3xl -bottom-24 -right-24 pointer-events-none" />

        {/* Mobile Switcher Tabs */}
        <div className="flex sm:hidden justify-center gap-1.5 mb-6 bg-muted/65 p-1 rounded-full max-w-[320px] mx-auto w-full border border-border/40 z-20">
          {[
            { id: "web", label: "Web Platforma" },
            { id: "employee", label: "App Uposlenici" },
            { id: "client", label: "App Klijenti" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveDevice(tab.id as any)}
              className={`flex-1 py-1.5 px-3 text-xs font-semibold rounded-full transition-all ${
                activeDevice === tab.id
                  ? "bg-brand text-white shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Desktop Layout: Show all devices overlapping */}
        <div className="hidden sm:flex relative w-full max-w-5xl items-center justify-center overflow-visible">
          {/* 1. Desktop Computer Mockup in the Background */}
          <div className="w-[80%] md:w-[75%] flex flex-col items-center z-10 transition-transform duration-500 hover:scale-[1.01]">
            {/* Browser Frame */}
            <div className="w-full rounded-t-2xl border-[6px] border-neutral-900 bg-neutral-900 shadow-2xl overflow-hidden aspect-[16/10]">
              {/* Browser header bar */}
              <div className="h-5 bg-neutral-900 px-3 flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/80" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                <div className="w-2 h-2 rounded-full bg-green-500/80" />
              </div>
              <img
                src="https://placehold.co/1200x750?text=Web+Dashboard"
                alt="Web Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Laptop/Desktop Base */}
            <div className="w-[112%] h-[6px] sm:h-[8px] bg-neutral-800 rounded-b-xl border-t border-neutral-700 shadow-md" />
            <div className="w-[20%] h-[3px] sm:h-[4px] bg-neutral-950 rounded-b-md" />
          </div>

          {/* 2. Left iPhone Mockup (Employee App) */}
          <div
            className="absolute left-[4%] md:left-[7%] bottom-[-35px] md:bottom-[-45px] z-20 w-[155px] md:w-[190px] shrink-0 transition-all duration-500 hover:-translate-y-2 hover:scale-105"
            style={{ aspectRatio: "9/19.5" }}
          >
            <div className="relative w-full h-full rounded-[24px] sm:rounded-[32px] md:rounded-[36px] p-[6px] sm:p-[8px] md:p-[10px] bg-neutral-900 shadow-2xl ring-2 ring-neutral-800/10 overflow-hidden">
              {/* Dynamic Island */}
              <div className="absolute top-[3%] left-1/2 -translate-x-1/2 w-[35%] h-[5%] rounded-full bg-neutral-900 z-30 flex items-center justify-center">
                <div className="w-[12%] h-[24%] rounded-full bg-neutral-950/80 mr-[8%]" />
                <div className="w-[6%] h-[12%] rounded-full bg-neutral-950/80" />
              </div>
              {/* Speaker Line */}
              <div className="absolute top-[1.5%] left-1/2 -translate-x-1/2 w-[15%] h-[1%] rounded-full bg-neutral-950 z-30" />
              {/* Screen Content */}
              <div className="relative w-full h-full rounded-[18px] sm:rounded-[24px] md:rounded-[26px] overflow-hidden bg-neutral-100 border border-neutral-950">
                <img
                  src="https://placehold.co/600x1200?text=App+Uposlenici"
                  alt="Employee App"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* 3. Right iPhone Mockup (Client App) */}
          <div
            className="absolute right-[4%] md:right-[7%] bottom-[-35px] md:bottom-[-45px] z-20 w-[155px] md:w-[190px] shrink-0 transition-all duration-500 hover:-translate-y-2 hover:scale-105"
            style={{ aspectRatio: "9/19.5" }}
          >
            <div className="relative w-full h-full rounded-[24px] sm:rounded-[32px] md:rounded-[36px] p-[6px] sm:p-[8px] md:p-[10px] bg-neutral-900 shadow-2xl ring-2 ring-neutral-800/10 overflow-hidden">
              {/* Dynamic Island */}
              <div className="absolute top-[3%] left-1/2 -translate-x-1/2 w-[35%] h-[5%] rounded-full bg-neutral-900 z-30 flex items-center justify-center">
                <div className="w-[12%] h-[24%] rounded-full bg-neutral-950/80 mr-[8%]" />
                <div className="w-[6%] h-[12%] rounded-full bg-neutral-950/80" />
              </div>
              {/* Speaker Line */}
              <div className="absolute top-[1.5%] left-1/2 -translate-x-1/2 w-[15%] h-[1%] rounded-full bg-neutral-950 z-30" />
              {/* Screen Content */}
              <div className="relative w-full h-full rounded-[18px] sm:rounded-[24px] md:rounded-[26px] overflow-hidden bg-neutral-100 border border-neutral-950">
                <img
                  src="https://placehold.co/600x1200?text=App+Klijenti"
                  alt="Client App"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout: Show only active device */}
        <div className="flex sm:hidden w-full items-center justify-center overflow-visible animate-fade-in">
          {activeDevice === "web" && (
            <div className="w-[90%] flex flex-col items-center">
              <div className="w-full rounded-t-xl border-[4px] border-neutral-900 bg-neutral-900 shadow-xl overflow-hidden aspect-[16/10]">
                <div className="h-4 bg-neutral-900 px-2 flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
                </div>
                <img
                  src="https://placehold.co/1200x750?text=Web+Dashboard"
                  alt="Web Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[112%] h-[4px] bg-neutral-800 rounded-b-lg border-t border-neutral-700 shadow-sm" />
              <div className="w-[20%] h-[2px] bg-neutral-950 rounded-b-xs" />
            </div>
          )}

          {activeDevice === "employee" && (
            <div className="w-[150px] shrink-0 animate-fade-in" style={{ aspectRatio: "9/19.5" }}>
              <div className="relative w-full h-full rounded-[24px] p-[6px] bg-neutral-900 shadow-xl ring-2 ring-neutral-800/10 overflow-hidden">
                {/* Dynamic Island */}
                <div className="absolute top-[3%] left-1/2 -translate-x-1/2 w-[35%] h-[5%] rounded-full bg-neutral-900 z-30 flex items-center justify-center">
                  <div className="w-[12%] h-[24%] rounded-full bg-neutral-950/80 mr-[8%]" />
                  <div className="w-[6%] h-[12%] rounded-full bg-neutral-950/80" />
                </div>
                {/* Speaker Line */}
                <div className="absolute top-[1.5%] left-1/2 -translate-x-1/2 w-[15%] h-[1%] rounded-full bg-neutral-950 z-30" />
                {/* Screen Content */}
                <div className="relative w-full h-full rounded-[18px] overflow-hidden bg-neutral-100 border border-neutral-950">
                  <img
                    src="https://placehold.co/600x1200?text=App+Uposlenici"
                    alt="Employee App"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          )}

          {activeDevice === "client" && (
            <div className="w-[150px] shrink-0 animate-fade-in" style={{ aspectRatio: "9/19.5" }}>
              <div className="relative w-full h-full rounded-[24px] p-[6px] bg-neutral-900 shadow-xl ring-2 ring-neutral-800/10 overflow-hidden">
                {/* Dynamic Island */}
                <div className="absolute top-[3%] left-1/2 -translate-x-1/2 w-[35%] h-[5%] rounded-full bg-neutral-900 z-30 flex items-center justify-center">
                  <div className="w-[12%] h-[24%] rounded-full bg-neutral-950/80 mr-[8%]" />
                  <div className="w-[6%] h-[12%] rounded-full bg-neutral-950/80" />
                </div>
                {/* Speaker Line */}
                <div className="absolute top-[1.5%] left-1/2 -translate-x-1/2 w-[15%] h-[1%] rounded-full bg-neutral-950 z-30" />
                {/* Screen Content */}
                <div className="relative w-full h-full rounded-[18px] overflow-hidden bg-neutral-100 border border-neutral-950">
                  <img
                    src="https://placehold.co/600x1200?text=App+Klijenti"
                    alt="Client App"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function DashboardMock() {
  const tabs = ["Dashboard", "Properties", "Analytics", "Finance", "Documents"];
  return (
    <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-rose-50 via-amber-50 to-brand/10 p-3 shadow-sm">
      <div className="mx-auto mb-3 flex max-w-2xl items-center justify-center gap-2 rounded-full border border-border/60 bg-background/70 px-2 py-1.5 backdrop-blur">
        {tabs.map((t, i) => (
          <span
            key={t}
            className={`rounded-full px-3 py-1 text-xs ${i === 3 ? "bg-foreground text-background" : "text-muted-foreground"
              }`}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="rounded-xl border border-border bg-card p-4">
        <div className="grid grid-cols-12 gap-4">
          <aside className="col-span-3 space-y-3 border-r border-border pr-3">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded bg-brand" />
              <span className="text-xs font-semibold">GlowBook App</span>
            </div>
            <div className="space-y-1 pt-2">
              {[
                ["Dashboard", true],
                ["Properties", false],
                ["Finance", false],
                ["Documents", false],
              ].map(([n, a]) => (
                <div
                  key={n as string}
                  className={`rounded px-2 py-1 text-[11px] ${a ? "bg-muted text-foreground" : "text-muted-foreground"
                    }`}
                >
                  {n}
                </div>
              ))}
            </div>
            <div className="pt-2 text-[10px] uppercase tracking-wide text-muted-foreground">
              Tools
            </div>
            <div className="space-y-1">
              {["Reports", "Settings"].map((n) => (
                <div key={n} className="rounded px-2 py-1 text-[11px] text-muted-foreground">
                  {n}
                </div>
              ))}
            </div>
          </aside>
          <main className="col-span-9 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">Finance</h3>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 rounded-md border border-border bg-background px-2 py-1 text-[10px] text-muted-foreground">
                  <Search className="h-3 w-3" />
                  Search transactions
                </div>
                <div className="flex items-center gap-1 rounded-md bg-brand px-2 py-1 text-[10px] text-white">
                  <Plus className="h-3 w-3" /> Add Property
                </div>
                <Bell className="h-3 w-3 text-muted-foreground" />
              </div>
            </div>
            <div className="flex gap-2">
              {["Overview", "Transactions", "Payouts"].map((t, i) => (
                <span
                  key={t}
                  className={`rounded-md px-2 py-1 text-[10px] ${i === 0 ? "bg-muted text-foreground" : "text-muted-foreground"
                    }`}
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[
                ["Total Revenue", "$590,000"],
                ["Properties Sold", "$205,000"],
                ["Active Listings", "$385,000"],
                ["Avg. Deal Value", "$128,750"],
              ].map(([l, v]) => (
                <div key={l} className="rounded-lg border border-border bg-background p-2">
                  <div className="text-[9px] text-muted-foreground">{l}</div>
                  <div className="mt-1 text-sm font-semibold text-foreground">{v}</div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-2 rounded-lg border border-border bg-background p-3">
                <div className="mb-2 text-[10px] font-medium">Cash Flow Analysis</div>
                <svg viewBox="0 0 300 100" className="h-24 w-full">
                  <path
                    d="M0,70 C40,30 80,90 120,50 C160,10 200,80 240,40 C270,20 290,60 300,40"
                    fill="none"
                    stroke="oklch(0.84 0.038 76.57)"
                    strokeWidth="2"
                  />
                  <path
                    d="M0,80 C40,60 80,70 120,75 C160,55 200,85 240,60 C270,55 290,70 300,55"
                    fill="none"
                    stroke="oklch(0.7 0.15 30)"
                    strokeWidth="2"
                    strokeDasharray="3 3"
                  />
                </svg>
              </div>
              <div className="rounded-lg border border-border bg-background p-3">
                <div className="mb-2 text-[10px] font-medium">Revenue Breakdown</div>
                <div className="flex items-center justify-center">
                  <div className="relative grid h-20 w-20 place-items-center rounded-full border-[10px] border-brand">
                    <span className="text-[9px] font-semibold">Analytics</span>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-xl bg-neutral-900 p-5 text-white">
          <p className="text-sm leading-snug">
            Iskustvo koje vaši klijenti nose u džepu
          </p>
        </div>
        {[
          ["Obrađenih termina", "50,000+"],
          ["Biznisi koji koriste platformu", "200+"],
          ["Klijenata obrađenih kroz platformu", "11,200+"],
        ].map(([l, v]) => (
          <div key={l} className="rounded-xl border border-border bg-card p-5">
            <p className="text-xs text-muted-foreground">{l}</p>
            <p className="mt-3 text-2xl font-semibold tracking-tight">{v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Features() {
  const features = [
    { icon: Building2, t: "Upravljanje terminima", d: "Organizujte upravljanje terminima bez poklapanja." },
    { icon: BarChart3, t: "Više lokacija", d: "Upravljajte vašim biznisom koji posluje na više lokacija." },
    { icon: DollarSign, t: "Web i mobilna aplikacija", d: "Budite dostupni svojim klijentima 24 sata, 7 dana u sedmici." },
    { icon: FileText, t: "Voucher program", d: "Nagradite svoje klijente onim što navjiše vole, popustima!" },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-2xl border border-border bg-card p-10">
        <div className="text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            PREGLED PLATFORME
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Kompletno digitalno
            <br />
            rješenje
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
            Povećajte popunjenost kapaciteta i zadržite klijente uz moderan sistem dizajniran specijalno za estetsku i kozmetičku industriju.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {features.map((f) => (
            <div key={f.t} className="rounded-xl border border-border bg-background p-5">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-muted">
                <f.icon className="h-4 w-4 text-foreground" />
              </div>
              <h3 className="mt-4 text-sm font-semibold">{f.t}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RealtimeSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid gap-8 rounded-2xl border border-border bg-card p-8 md:grid-cols-2 md:p-10 items-center">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Kome je sistem namijenjen?
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Naš sistem je krojen po mjeri biznisa u industriji ljepote, zdravlja i njege tijela koji žele podići svoje klijentsko iskustvo na viši nivo:
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Estetske i dermatološke klinike",
                desc: "Kojima je potreban elektronski karton pacijenta sa detaljnim praćenjem historije tretmana i zahvata.",
                icon: HeartPulse,
              },
              {
                title: "Kozmetički saloni i saloni ljepote",
                desc: "Koji žele brzu rezervaciju tretmana uz ugrađen loyalty sistem za zadržavanje klijenata.",
                icon: Sparkles,
              },
              {
                title: "Frizerski i stilski saloni",
                desc: "Koji žele jednostavan pregled slobodnih termina po frizerima/terapeutima i lako zakazivanje.",
                icon: Scissors,
              },
              {
                title: "Spa i wellness centri",
                desc: "Kojima je potrebno upravljanje posjetama i uslugama na više lokacija.",
                icon: Flower2,
              },
              {
                title: "Nail barovi i saloni za obrve/trepavice",
                desc: "Koji žele privući klijente jednostavnim online bukingom i modernom digitalnom karticom lojalnosti.",
                icon: Building2,
                className: "sm:col-span-2",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`rounded-xl border border-border bg-background/50 p-4 hover:border-brand/40 hover:shadow-xs transition-all duration-300 flex flex-col gap-2 ${item.className || ""
                  }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-brand/10 text-brand">
                    <item.icon className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="text-xs font-semibold text-foreground leading-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[11px] leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right side: iPhone Mockup */}
        <div className="relative flex items-center justify-center py-4">
          {/* Ambient Glow */}
          <div className="absolute w-72 h-72 rounded-full bg-brand/15 blur-3xl -z-10" />

          {/* iPhone Device Wrapper */}
          <div className="relative w-[290px] h-[590px] rounded-[48px] p-[10px] bg-neutral-900 shadow-2xl ring-4 ring-neutral-800/10 transition-transform duration-500 hover:scale-[1.02] overflow-hidden">
            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 rounded-full bg-neutral-900 z-30 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-neutral-950/80 mr-2" />
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-950/80" />
            </div>

            {/* Speaker Line */}
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full bg-neutral-950 z-30" />

            {/* Screen Content */}
            <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-neutral-100 border border-neutral-950">
              <img
                src="https://placehold.co/400x800?text=Platform+Preview"
                alt="Platform preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Traditional() {
  const products = [
    {
      title: "Mobilna aplikacija za uposlenike",
      image: "https://placehold.co/600x900?text=App+Uposlenici",
      features: [
        "Upravljanje terminima i kalendar",
        "Pregled klijenata i historije",
        "Notifikacije i podsjetnici",
        "Upravljanje smjenama i pauzama",
      ],
    },
    {
      title: "Mobilna aplikacija za klijente",
      image: "https://placehold.co/600x900?text=App+Klijenti",
      features: [
        "Online rezervacija termina",
        "Pregled usluga i cjenovnika",
        "Loyalty program i popusti",
        "Push notifikacije i podsjetnici",
      ],
    },
    {
      title: "Web stranica",
      image: "https://placehold.co/800x500?text=Web+Stranica",
      features: [
        "Prezentacija brenda i usluga",
        "Online booking integracija",
        "SEO optimizacija za Google",
        "Blog i sadržaj za angažman",
      ],
    },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Tri kanala za vaš uspjeh
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Povežite se sa svojim klijentima tamo gdje su — na mobitelu i webu.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3 items-stretch">
        {products.map((p, idx) => (
          <div key={p.title} className="flex flex-col rounded-2xl border border-border bg-card p-5 h-full hover:border-brand/40 hover:shadow-md transition-all duration-300">
            {/* Mockup Container */}
            <div className="h-[320px] flex items-center justify-center overflow-hidden bg-muted/20 rounded-xl p-4 border border-border/50 relative mb-4">
              {idx < 2 ? (
                /* iPhone Mockup */
                <div className="relative w-[140px] h-[280px] rounded-[26px] p-[6px] bg-neutral-900 shadow-lg ring-2 ring-neutral-800/10 overflow-hidden">
                  {/* Dynamic Island */}
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-3 rounded-full bg-neutral-900 z-30 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-neutral-950/80 mr-1" />
                    <div className="w-0.5 h-0.5 rounded-full bg-neutral-950/80" />
                  </div>
                  {/* Speaker Line */}
                  <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-neutral-950 z-30" />
                  {/* Screen Content */}
                  <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-neutral-100 border border-neutral-950">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ) : (
                /* Laptop Mockup */
                <div className="w-full max-w-[260px] flex flex-col items-center">
                  <div className="relative w-full aspect-[16/10] rounded-t-xl border-[5px] border-neutral-900 bg-neutral-900 shadow-md overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Base */}
                  <div className="relative w-[112%] h-[3px] sm:h-[5px] md:h-[6px] bg-neutral-800 rounded-b-xl border-t border-neutral-700 shadow-md z-10" />
                  <div className="relative w-[20%] h-[1.5px] sm:h-[2.5px] md:h-[3px] bg-neutral-900 rounded-b-md z-10" />
                </div>
              )}
            </div>

            {/* Info Area */}
            <div className="flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-base font-semibold text-foreground">{p.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-xs text-muted-foreground leading-normal">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pillars() {
  const items = [
    { icon: ShieldCheck, t: "Sigurnost na prvom mjestu", d: "Vaši podaci su zaštićeni najnovijim sigurnosnim standardima i enkripcijom." },
    { icon: Users, t: "Napredna autentifikacija", d: "Robustan sistem prijave sa višefaktorskom zaštitom i kontrolom pristupa." },
    { icon: TrendingUp, t: "Ažuriranja u realnom vremenu", d: "Sve promjene su odmah vidljive svim korisnicima — bez kašnjenja i zastoja." },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-6">
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((i) => (
          <div
            key={i.t}
            className="rounded-2xl border border-border bg-card p-6 text-center"
          >
            <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-muted">
              <i.icon className="h-4 w-4" />
            </div>
            <h3 className="mt-4 text-sm font-semibold">{i.t}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{i.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Faq() {
  const items = [
    ["Da li klijenti u aplikaciji vide druge salone ili je ona brendirana samo za nas?", "Aplikacija je potpuno brendirana isključivo za vaš biznis. Na App Store-u i Google Play-u ona se pojavljuje pod nazivom vaše klinike ili salona, sa vašim logotipom i bojama. Vaši klijenti nemaju dodira sa drugim salonima; za njih je to vaša privatna mobilna aplikacija."],
    ["Koliko vremena je potrebno da pokrenemo aplikaciju za naš salon ili kliniku?", "Proces implementacije obično traje između 2 i 3 sedmice. To uključuje prilagođavanje vizuelnog identiteta aplikacije vašem brendu, unos vaših lokacija, usluga i zaposlenika, testiranje sistema, te proces objave aplikacije na Apple i Google prodavnicama. Naš tim obavlja sav tehnički posao za vas."],
    ["Šta se dešava sa našom postojećom bazom klijenata? Da li moramo sve ručno unositi?", "Nema potrebe za ručnim unosom. Naš tehnički tim vrši besplatnu migraciju vaših postojećih podataka (kontakti klijenata, historija posjeta i bilješke) iz vašeg starog softvera ili Excel tabela direktno u novi sistem, tako da možete odmah nastaviti sa radom."],
    ["Koju opremu moramo imati u salonu/klinici da bismo koristili sistem?", "Zaposlenička aplikacija radi na bilo kojem modernom pametnom telefonu ili tabletu (iOS i Android). Za recepciju ili radne prostorije možete koristiti tablet radi lakšeg pregleda kalendara, dok vaši zaposlenici mogu koristiti svoje mobilne telefone za brzi pregled zakazanih termina, skeniranje klijentskih QR kodova i unošenje bilješki o tretmanima."],
    ["Kako sistem sprečava preklapanje termina (double-booking)?", "Sistem koristi sinhronizaciju podataka u realnom vremenu. U trenutku kada klijent rezerviše termin za određenu uslugu kod određenog zaposlenika, taj vremenski slot se automatski bilježi i zaključava. Na taj način je kalendar zaposlenika uvijek tačan i nema mogućnosti da dva klijenta rezervišu isti termin u isto vrijeme."],
    ["Na koji način se čuvaju kartoni klijenata i da li je sistem usklađen sa GDPR-om?", "Svi podaci o klijentima, historija posjeta i kartoni tretmana se čuvaju na sigurnim cloud serverima sa visokim stepenom zaštite. Podaci su enkriptovani, a sistem je usklađen sa GDPR regulativom – klijenti imaju uvid u svoje podatke i historija direktno kroz svoju aplikaciju, što garantuje maksimalnu privatnost."],
    ["Šta ako naš salon ima više lokacija? Možemo li upravljati svima kroz aplikaciju?", "Da, sistem u potpunosti podržava rad na više lokacija. Klijenti prilikom zakazivanja termina u svojoj aplikaciji jednostavno biraju lokaciju (poslovnicu) na kojoj žele rezervisati tretman, a sistem sve raspoređuje na odgovarajući kalendar za tu lokaciju."],
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid gap-8 rounded-2xl border border-border bg-card p-10 md:grid-cols-[1fr_2fr]">
        <div>
          <span className="inline-block rounded-full border border-border px-3 py-1 text-[10px] uppercase tracking-wide text-muted-foreground">
            ČESTA PITANJA
          </span>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
            Najčešća pitanja
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Sve što trebate znati prije nego što započnete s našom platformom.
          </p>
          <p className="mt-6 text-xs text-muted-foreground">Još uvijek imate pitanja?</p>
          <Link to="/kontakt" className="mt-2 inline-block rounded-full bg-brand px-4 py-1.5 text-xs font-medium text-white">
            Kontaktirajte nas
          </Link>
        </div>
        <div className="space-y-2">
          {items.map(([q, a], i) => (
            <button
              key={q}
              onClick={() => setOpen(open === i ? -1 : i)}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-left"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-medium">{q}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-muted-foreground transition ${open === i ? "rotate-180" : ""
                    }`}
                />
              </div>
              {open === i && (
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{a}</p>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}


function CtaStrip() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-card p-8 md:flex-row">
        <h3 className="text-2xl font-semibold tracking-tight">Spremni za korak ispred konkurencije</h3>
        <div className="flex gap-2">
          <Link to="/pricing" className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium">
            Cjenovnik
          </Link>
          <Link to="/kontakt" className="rounded-full bg-brand px-4 py-2 text-sm font-medium text-white">
            Kontakt
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const links = ["Product", "Pricing", "Resources", "Company", "Support"];
  return (
    <footer className="mx-auto max-w-6xl px-6 py-8">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
        <Logo />
        <nav className="flex flex-wrap items-center gap-6">
          {links.map((l) => (
            <span key={l} className="text-xs text-muted-foreground hover:text-foreground cursor-pointer">
              {l}
            </span>
          ))}
        </nav>
        <p className="text-xs text-muted-foreground">2025 GlowBook App</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl bg-background">
        <Nav />
        <Hero />
        <Stats />
        <Features />
        <RealtimeSection />
        <Traditional />
        <Pillars />
        <Faq />

        <CtaStrip />
        <Footer />
      </div>
    </div>
  );
}
