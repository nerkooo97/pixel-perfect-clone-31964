import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Smartphone,
  Globe,
  Calendar,
  Bell,
  CreditCard,
  Users,
  BarChart3,
  Gift,
  MapPin,
  Clock,
  MessageSquare,
  FileText,
  ShieldCheck,
  Search,
  Star,
  QrCode,
  Camera,
  Settings,
  Heart,
  Mail,
  Check,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import { useState, useEffect } from "react";

// Asset imports
import webMockup from "@/assets/web-mockup.jpg";
import employeeMockup from "@/assets/employee-app-mockup.jpg";
import clientMockup from "@/assets/client-app-mockup.jpg";

import webSlika1 from "@/assets/screens/web/slika-1.png";

import empSlika1 from "@/assets/screens/uposlenici/slika-1.png";
import empSlika2 from "@/assets/screens/uposlenici/slika-2.png";
import empSlika3 from "@/assets/screens/uposlenici/slika-3.png";
import empSlika4 from "@/assets/screens/uposlenici/slika-4.png";
import empSlika5 from "@/assets/screens/uposlenici/slika-5.png";
import empSlika6 from "@/assets/screens/uposlenici/slika-6.png";
import empSlika7 from "@/assets/screens/uposlenici/slika-7.png";
import empSlika8 from "@/assets/screens/uposlenici/slika-8.png";
import empSlika9 from "@/assets/screens/uposlenici/slika-9.png";
import empSlika10 from "@/assets/screens/uposlenici/slika-10.png";
import empSlika11 from "@/assets/screens/uposlenici/slika-11.png";
import empSlika12 from "@/assets/screens/uposlenici/slika-12.png";
import empSlika13 from "@/assets/screens/uposlenici/slika-13.png";
import empSlika14 from "@/assets/screens/uposlenici/slika-14.png";
import empSlika16 from "@/assets/screens/uposlenici/slika-16.png";

import clientSlika1 from "@/assets/screens/klijenti/slika-1.png";
import clientSlika2 from "@/assets/screens/klijenti/slika-2.png";
import clientSlika3 from "@/assets/screens/klijenti/slika-3.png";
import clientSlika4 from "@/assets/screens/klijenti/slika-4.png";
import clientSlika5 from "@/assets/screens/klijenti/slika-5.png";
import clientSlika6 from "@/assets/screens/klijenti/slika-6.png";
import clientSlika7 from "@/assets/screens/klijenti/slika-7.png";
import clientSlika8 from "@/assets/screens/klijenti/slika-8.png";

export const Route = createFileRoute("/funkcionalnosti")({
  head: () => ({
    meta: [
      { title: "Funkcionalnosti — Sve mogućnosti platforme" },
      {
        name: "description",
        content:
          "Detaljan pregled funkcionalnosti web stranice, aplikacije za uposlenike i aplikacije za klijente — od online rezervacija do loyalty programa i analitike.",
      },
      { property: "og:title", content: "Funkcionalnosti — Sve mogućnosti platforme" },
      {
        property: "og:description",
        content:
          "Web, mobilna aplikacija za uposlenike i klijente — sve funkcionalnosti za moderan salon i kliniku.",
      },
    ],
  }),
  component: FeaturesPage,
});

function Nav() {
  const items = [
    { label: "Početna", href: "/" as const },
    { label: "Funkcionalnosti", href: "/funkcionalnosti" as const },
    { label: "Cjenovnik", href: "/pricing" as const },
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
            to="/pricing"
            className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-medium text-foreground hover:bg-muted"
          >
            Cjenovnik
          </Link>
          <Link
            to="/kontakt"
            className="rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background hover:opacity-90"
          >
            Kontakt
          </Link>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-8 text-center">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        FUNKCIONALNOSTI SISTEMA
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
        Sveobuhvatno rješenje
        <br />
        za vaš salon i kliniku
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        Detaljan pregled svih mogućnosti koje donosi naša platforma — od brendirane mobilne aplikacije do modernog web booking sistema.
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-8">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
        <Logo />
        <p className="text-xs text-muted-foreground">2025 GlowBook App</p>
      </div>
    </footer>
  );
}

function FeaturesPage() {
  // Slider states
  const [empSlide, setEmpSlide] = useState(0);
  const [clientSlide, setClientSlide] = useState(0);
  const [activeBrandingDevice, setActiveBrandingDevice] = useState<"employee" | "client">("employee");

  const empSlides = [
    empSlika1,
    empSlika2,
    empSlika3,
    empSlika4,
    empSlika5,
    empSlika6,
    empSlika7,
    empSlika8,
    empSlika9,
    empSlika10,
    empSlika11,
    empSlika12,
    empSlika13,
    empSlika14,
  ];

  const clientSlides = [
    clientSlika1,
    clientSlika2,
    clientSlika3,
    clientSlika4,
    clientSlika5,
    clientSlika6,
    clientSlika7,
    clientSlika8,
  ];

  // Auto-rotating slider logic
  useEffect(() => {
    const empInterval = setInterval(() => {
      setEmpSlide((prev) => (prev === empSlides.length - 1 ? 0 : prev + 1));
    }, 4500);

    const clientInterval = setInterval(() => {
      setClientSlide((prev) => (prev === clientSlides.length - 1 ? 0 : prev + 1));
    }, 4500);

    return () => {
      clearInterval(empInterval);
      clearInterval(clientInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl bg-background">
        <Nav />
        <Hero />

        {/* BLOCK 1: Prilagođeno brendiranje aplikacija (Custom Branding) */}
        <section className="mx-auto max-w-6xl px-6 py-12 border-b border-border/50">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Left Column: Text */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-xs text-brand">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Vizuelni Identitet</span>
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl leading-tight">
                Prilagođeno brendiranje mobilnih aplikacija
              </h2>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                Sistem se u potpunosti prilagođava vizuelnom stilu vašeg salona ili klinike. Vaša aplikacija se na App Store i Google Play prodavnicama pojavljuje pod nazivom vaše klinike, sa vašim logotipom i bojama.
              </p>

              <ul className="space-y-3 pt-2">
                {[
                  "Vlastiti naziv i ikonica aplikacije na App Store i Google Play",
                  "Kompletno brendiran interfejs sa vašom paletom boja",
                  "Isticanje logotipa na ekranima za prijavu i glavnim stranicama",
                  "Push obavještenja sa potpisom i logom vašeg salona",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: 2 Phones Mockup / Mobile switcher */}
            <div className="relative flex flex-col items-center justify-center min-h-[360px] sm:min-h-[440px] md:min-h-[500px] overflow-visible select-none py-8">
              <div className="absolute w-72 h-72 rounded-full bg-brand/10 blur-3xl -z-10" />

              {/* Mobile Switcher Tabs */}
              <div className="flex sm:hidden justify-center gap-1.5 mb-6 bg-muted/65 p-1 rounded-full max-w-[280px] mx-auto w-full border border-border/40 z-20">
                {[
                  { id: "employee", label: "App Uposlenici" },
                  { id: "client", label: "App Klijenti" }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveBrandingDevice(tab.id as any)}
                    className={`flex-1 py-1.5 px-3 text-[11px] font-semibold rounded-full transition-all ${activeBrandingDevice === tab.id
                        ? "bg-brand text-white shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Desktop Layout: Both phones overlapping */}
              <div className="hidden sm:flex relative w-full max-w-[380px] items-center justify-center overflow-visible">
                {/* 1. Left iPhone Mockup (Employee App) */}
                <div
                  className="absolute left-[0%] md:left-[3%] z-20 w-[140px] md:w-[165px] shrink-0 transition-all duration-500 hover:-translate-y-2 hover:scale-105"
                  style={{ aspectRatio: "9/19.5" }}
                >
                  <div className="relative w-full h-full rounded-[20px] sm:rounded-[26px] md:rounded-[30px] p-[4px] sm:p-[6px] md:p-[7px] bg-neutral-900 shadow-2xl ring-2 ring-neutral-800/10 overflow-hidden">
                    {/* Dynamic Island */}
                    <div className="absolute top-[3%] left-1/2 -translate-x-1/2 w-[35%] h-[5%] rounded-full bg-neutral-900 z-30 flex items-center justify-center">
                      <div className="w-[12%] h-[24%] rounded-full bg-neutral-950/80 mr-[8%]" />
                      <div className="w-[6%] h-[12%] rounded-full bg-neutral-950/80" />
                    </div>
                    {/* Speaker Line */}
                    <div className="absolute top-[1.5%] left-1/2 -translate-x-1/2 w-[15%] h-[1%] rounded-full bg-neutral-950 z-30" />
                    {/* Screen Content */}
                    <div className="relative w-full h-full rounded-[16px] sm:rounded-[20px] md:rounded-[23px] overflow-hidden bg-neutral-100 border border-neutral-950">
                      <img
                        src={empSlika16}
                        alt="Employee App Branding"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Right iPhone Mockup (Client App) */}
                <div
                  className="absolute right-[0%] md:right-[3%] bottom-[-10px] z-10 w-[140px] md:w-[165px] shrink-0 transition-all duration-500 hover:-translate-y-2 hover:scale-105"
                  style={{ aspectRatio: "9/19.5" }}
                >
                  <div className="relative w-full h-full rounded-[20px] sm:rounded-[26px] md:rounded-[30px] p-[4px] sm:p-[6px] md:p-[7px] bg-neutral-900 shadow-2xl ring-2 ring-neutral-800/10 overflow-hidden">
                    {/* Dynamic Island */}
                    <div className="absolute top-[3%] left-1/2 -translate-x-1/2 w-[35%] h-[5%] rounded-full bg-neutral-900 z-30 flex items-center justify-center">
                      <div className="w-[12%] h-[24%] rounded-full bg-neutral-950/80 mr-[8%]" />
                      <div className="w-[6%] h-[12%] rounded-full bg-neutral-950/80" />
                    </div>
                    {/* Speaker Line */}
                    <div className="absolute top-[1.5%] left-1/2 -translate-x-1/2 w-[15%] h-[1%] rounded-full bg-neutral-950 z-30" />
                    {/* Screen Content */}
                    <div className="relative w-full h-full rounded-[16px] sm:rounded-[20px] md:rounded-[23px] overflow-hidden bg-neutral-100 border border-neutral-950">
                      <img
                        src={clientSlika1}
                        alt="Client App Branding"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Layout: Show only active phone */}
              <div className="flex sm:hidden w-full items-center justify-center overflow-visible animate-fade-in">
                {activeBrandingDevice === "employee" ? (
                  <div className="w-[150px] shrink-0 animate-fade-in" style={{ aspectRatio: "9/19.5" }}>
                    <div className="relative w-full h-full rounded-[20px] p-[4px] bg-neutral-900 shadow-2xl ring-2 ring-neutral-800/10 overflow-hidden">
                      {/* Dynamic Island */}
                      <div className="absolute top-[3%] left-1/2 -translate-x-1/2 w-[35%] h-[5%] rounded-full bg-neutral-900 z-30 flex items-center justify-center">
                        <div className="w-[12%] h-[24%] rounded-full bg-neutral-950/80 mr-[8%]" />
                        <div className="w-[6%] h-[12%] rounded-full bg-neutral-950/80" />
                      </div>
                      {/* Speaker Line */}
                      <div className="absolute top-[1.5%] left-1/2 -translate-x-1/2 w-[15%] h-[1%] rounded-full bg-neutral-950 z-30" />
                      {/* Screen Content */}
                      <div className="relative w-full h-full rounded-[16px] overflow-hidden bg-neutral-100 border border-neutral-950">
                        <img
                          src={empSlika16}
                          alt="Employee App Branding"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-[150px] shrink-0 animate-fade-in" style={{ aspectRatio: "9/19.5" }}>
                    <div className="relative w-full h-full rounded-[20px] p-[4px] bg-neutral-900 shadow-2xl ring-2 ring-neutral-800/10 overflow-hidden">
                      {/* Dynamic Island */}
                      <div className="absolute top-[3%] left-1/2 -translate-x-1/2 w-[35%] h-[5%] rounded-full bg-neutral-900 z-30 flex items-center justify-center">
                        <div className="w-[12%] h-[24%] rounded-full bg-neutral-950/80 mr-[8%]" />
                        <div className="w-[6%] h-[12%] rounded-full bg-neutral-950/80" />
                      </div>
                      {/* Speaker Line */}
                      <div className="absolute top-[1.5%] left-1/2 -translate-x-1/2 w-[15%] h-[1%] rounded-full bg-neutral-950 z-30" />
                      {/* Screen Content */}
                      <div className="relative w-full h-full rounded-[16px] overflow-hidden bg-neutral-100 border border-neutral-950">
                        <img
                          src={clientMockup}
                          alt="Client App Branding"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* BLOCK 2: Izrada web stranice (Website with booking and customer area) */}
        <section className="mx-auto max-w-6xl px-6 py-16 border-b border-border/50">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Left Column: Desktop Device Mockup */}
            <div className="relative flex flex-col items-center justify-center select-none py-8 order-last md:order-first">
              <div className="absolute w-80 h-80 rounded-full bg-brand/5 blur-3xl -z-10" />

              {/* Laptop Mockup */}
              <div className="w-full max-w-[480px] flex flex-col items-center z-10 transition-transform duration-500 hover:scale-[1.01]">
                {/* Browser Frame */}
                <div className="w-full rounded-t-2xl border-[6px] border-neutral-900 bg-neutral-900 shadow-2xl aspect-[16/10] flex flex-col overflow-hidden">
                  {/* Browser header bar */}
                  <div className="h-5 bg-neutral-900 px-3 flex items-center gap-1.5 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-red-500/80" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                    <div className="w-2 h-2 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 overflow-y-auto scrollbar-none bg-neutral-100">
                    <img
                      src={webSlika1}
                      alt="Web Booking Platform"
                      className="w-full h-auto object-contain object-top"
                    />
                  </div>
                </div>
                {/* Base */}
                <div className="w-[112%] h-[4px] sm:h-[6px] md:h-[8px] bg-neutral-800 rounded-b-xl border-t border-neutral-700 shadow-md" />
                <div className="w-[20%] h-[2px] sm:h-[3px] md:h-[4px] bg-neutral-950 rounded-b-md" />
              </div>
            </div>

            {/* Right Column: Text */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-xs text-brand">
                <Globe className="w-3.5 h-3.5" />
                <span>Web Prisutnost</span>
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl leading-tight">
                Profesionalna web stranica sa online bukingom
              </h2>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                Vaš salon dobija brzu, modernu i SEO optimizovanu web stranicu koja nudi klijentima jednostavan način za interakciju sa vašim uslugama i radnim vremenom.
              </p>

              <ul className="space-y-3 pt-2">
                {[
                  "Online booking kalendar dostupan 24/7 za brzu rezervaciju tretmana",
                  "Pregledan katalog usluga sa cjenovnikom, trajanjem i opisima",
                  "Klijentski profil (Customer Area) za upravljanje sopstvenim rezervacijama",
                  "Pregled statusa poslatih zahtjeva za termine i historije tretmana",
                  "Uvid u lojaliti bodove, sakupljene nivoe i digitalne pogodnosti",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* BLOCK 3: Aplikacija za uposlenike sa sliderom (Employee app with slider) */}
        <section className="mx-auto max-w-6xl px-6 py-16 border-b border-border/50">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Left Column: Text */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-xs text-brand">
                <Smartphone className="w-3.5 h-3.5" />
                <span>Uposlenici</span>
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl leading-tight">
                Aplikacija za zaposlenike i radne timove
              </h2>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                Potpuna kontrola nad vašim radnim danom. Omogućite svojim terapeutima, stilistima i menadžerima da brzo upravljaju kalendarom, unose bilješke i prate klijente.
              </p>

              <ul className="space-y-3 pt-2">
                {[
                  "Pametni kalendar sa pregledom zauzetosti u realnom vremenu",
                  "Digitalni karton klijenta sa detaljnom historije tretmana i fotografijama",
                  "Mogućnost skeniranja QR kodova klijenata na recepciji",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Phone Mockup with Slider */}
            <div className="relative flex items-center justify-center py-8">
              <div className="absolute w-72 h-72 rounded-full bg-brand/5 blur-3xl -z-10" />

              {/* iPhone Slider Mockup */}
              <div
                className="relative w-[190px] sm:w-[220px] md:w-[240px] shrink-0 shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                style={{ aspectRatio: "9/19.5" }}
              >
                <div className="relative w-full h-full rounded-[32px] sm:rounded-[38px] md:rounded-[44px] p-[6px] sm:p-[8px] md:p-[10px] bg-neutral-900 ring-2 ring-neutral-800/10 overflow-hidden">
                  {/* Dynamic Island */}
                  <div className="absolute top-[3%] left-1/2 -translate-x-1/2 w-[35%] h-[5%] rounded-full bg-neutral-900 z-30 flex items-center justify-center">
                    <div className="w-[12%] h-[24%] rounded-full bg-neutral-950/80 mr-[8%]" />
                    <div className="w-[6%] h-[12%] rounded-full bg-neutral-950/80" />
                  </div>
                  {/* Speaker Line */}
                  <div className="absolute top-[1.5%] left-1/2 -translate-x-1/2 w-[15%] h-[1%] rounded-full bg-neutral-950 z-30" />

                  {/* Screen Content Slider */}
                  <div className="relative w-full h-full rounded-[26px] sm:rounded-[30px] md:rounded-[34px] overflow-hidden bg-neutral-100 border border-neutral-950 group">
                    <img
                      src={empSlides[empSlide]}
                      alt="Uposlenici aplikacija ekran"
                      className="w-full h-full object-cover"
                    />



                    {/* Left/Right Arrow Overlays */}
                    <button
                      onClick={() => setEmpSlide((prev) => (prev === 0 ? empSlides.length - 1 : prev - 1))}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black/55 text-white flex items-center justify-center hover:bg-black/75 opacity-0 group-hover:opacity-100 transition duration-300 active:scale-90 z-30"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setEmpSlide((prev) => (prev === empSlides.length - 1 ? 0 : prev + 1))}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black/55 text-white flex items-center justify-center hover:bg-black/75 opacity-0 group-hover:opacity-100 transition duration-300 active:scale-90 z-30"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BLOCK 4: Aplikacija za klijente sa sliderom (Customer app with slider) */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Left Column: Phone Mockup with Slider */}
            <div className="relative flex items-center justify-center py-8 order-last md:order-first">
              <div className="absolute w-72 h-72 rounded-full bg-brand/5 blur-3xl -z-10" />

              {/* iPhone Slider Mockup */}
              <div
                className="relative w-[190px] sm:w-[220px] md:w-[240px] shrink-0 shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                style={{ aspectRatio: "9/19.5" }}
              >
                <div className="relative w-full h-full rounded-[32px] sm:rounded-[38px] md:rounded-[44px] p-[6px] sm:p-[8px] md:p-[10px] bg-neutral-900 ring-2 ring-neutral-800/10 overflow-hidden">
                  {/* Dynamic Island */}
                  <div className="absolute top-[3%] left-1/2 -translate-x-1/2 w-[35%] h-[5%] rounded-full bg-neutral-900 z-30 flex items-center justify-center">
                    <div className="w-[12%] h-[24%] rounded-full bg-neutral-950/80 mr-[8%]" />
                    <div className="w-[6%] h-[12%] rounded-full bg-neutral-950/80" />
                  </div>
                  {/* Speaker Line */}
                  <div className="absolute top-[1.5%] left-1/2 -translate-x-1/2 w-[15%] h-[1%] rounded-full bg-neutral-950 z-30" />

                  {/* Screen Content Slider */}
                  <div className="relative w-full h-full rounded-[26px] sm:rounded-[30px] md:rounded-[34px] overflow-hidden bg-neutral-100 border border-neutral-950 group">
                    <img
                      src={clientSlides[clientSlide]}
                      alt="Klijenti aplikacija ekran"
                      className="w-full h-full object-cover"
                    />



                    {/* Left/Right Arrow Overlays */}
                    <button
                      onClick={() => setClientSlide((prev) => (prev === 0 ? clientSlides.length - 1 : prev - 1))}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black/55 text-white flex items-center justify-center hover:bg-black/75 opacity-0 group-hover:opacity-100 transition duration-300 active:scale-90 z-30"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setClientSlide((prev) => (prev === clientSlides.length - 1 ? 0 : prev + 1))}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black/55 text-white flex items-center justify-center hover:bg-black/75 opacity-0 group-hover:opacity-100 transition duration-300 active:scale-90 z-30"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Text */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-xs text-brand">
                <Heart className="w-3.5 h-3.5" />
                <span>Klijenti</span>
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl leading-tight">
                Aplikacija za vaše klijente
              </h2>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                Zadržite klijente i povećajte broj poseta. Ponudite im brendiranu mobilnu aplikaciju koja im omogućava brzo zakazivanje i skupljanje lojaliti bodova.
              </p>

              <ul className="space-y-3 pt-2">
                {[
                  "Brzo online zakazivanje tretmana, odabir radnika i lokacije",
                  "Digitalna loyalty kartica sa automatskim sakupljanjem poena",
                  "Podsjetnici za termine putem push obavještenja",
                  "Pregled historije psojeta i detalja obavljenih usluga",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <ComparisonTeaser />
        <Footer />
      </div>
    </div>
  );
}

function ComparisonTeaser() {
  const points = [
    "Sva tri kanala su međusobno povezana u realnom vremenu",
    "Jedna baza klijenata, termina i usluga za sve platforme",
    "Brendirano vašim logom, bojama i nazivom",
    "Tehnička podrška i besplatna ažuriranja uključeni",
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid gap-8 rounded-2xl border border-border bg-card p-8 md:grid-cols-2 md:p-10">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            SVE U JEDNOM
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
            Tri platforme — jedan sistem
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Web stranica, aplikacija za uposlenike i aplikacija za klijente rade kao jedna cjelina. Svaka promjena se trenutno ažurira na svim kanalima.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2 text-sm font-medium text-white hover:bg-brand/90"
            >
              Pogledaj cjenovnik <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2 text-sm font-medium hover:bg-muted"
            >
              Zatraži demo
            </Link>
          </div>
        </div>
        <ul className="space-y-3">
          {points.map((p) => (
            <li
              key={p}
              className="flex items-start gap-3 rounded-xl border border-border bg-background p-4"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <span className="text-sm text-foreground">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
