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
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RealEstate Pro — Rješenje koje mijenja vaše poslovanje!" },
      {
        name: "description",
        content:
          "Mobilna aplikacija i web stranica za vaše klijente i pametni sistem za vaše zaposlenike. Povećajte broj rezervacija i izgradite brend koji klijenti obožavaju.",
      },
      { property: "og:title", content: "RealEstate Pro" },
      {
        property: "og:description",
        content: "The all-in-one platform for modern real estate teams.",
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
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-10">
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
      <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-muted">
        <img
          src="https://placehold.co/1200x600?text=Dashboard+Preview"
          alt="Dashboard preview"
          className="h-auto w-full"
        />
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
            className={`rounded-full px-3 py-1 text-xs ${
              i === 3 ? "bg-foreground text-background" : "text-muted-foreground"
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
              <span className="text-xs font-semibold">RealEstate Pro</span>
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
                  className={`rounded px-2 py-1 text-[11px] ${
                    a ? "bg-muted text-foreground" : "text-muted-foreground"
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
                  className={`rounded-md px-2 py-1 text-[10px] ${
                    i === 0 ? "bg-muted text-foreground" : "text-muted-foreground"
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
      <div className="grid gap-8 rounded-2xl border border-border bg-card p-8 md:grid-cols-2 md:p-10">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Kome je sistem namijenjen?
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Naš sistem je krojen po mjeri biznisa u industriji ljepote, zdravlja i njege tijela koji žele podići svoje klijentsko iskustvo na viši nivo:
          </p>
          <ul className="mt-6 space-y-4">
            {[
              ["Estetske i dermatološke klinike", "kojima je potreban siguran elektronski karton pacijenta sa detaljnim praćenjem historije tretmana i estetskih zahvata."],
              ["Kozmetički saloni i saloni ljepote", "koji žele brzu rezervaciju tretmana lica, tijela ili epilacije uz ugrađen loyalty sistem za zadržavanje klijenata."],
              ["Frizerski i stilski saloni", "koji žele jednostavan pregled slobodnih termina po frizerima/terapeutima i lako zakazivanje."],
              ["Spa i wellness centri", "kojima je potrebno upravljanje posjetama i uslugama na više lokacija."],
              ["Nail barovi i saloni za njegu obrva/trepavica", "koji žele privući klijente jednostavnim online bukingom i modernom digitalnom karticom lojalnosti."],
            ].map(([t, d]) => (
              <li key={t} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <div>
                  <div className="text-sm font-medium">{t}</div>
                  <div className="text-xs text-muted-foreground">{d}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-border bg-background p-5">
          <img
            src="https://placehold.co/400x600?text=Platform+Preview"
            alt="Platform preview"
            className="h-auto w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Traditional() {
  const products = [
    {
      title: "Mobilna aplikacija za uposlenike",
      image: "https://placehold.co/600x400?text=App+Uposlenici",
      features: [
        "Upravljanje terminima i kalendar",
        "Pregled klijenata i istorije",
        "Notifikacije i podsjetnici",
        "Interna komunikacija tima",
      ],
    },
    {
      title: "Mobilna aplikacija za klijente",
      image: "https://placehold.co/600x400?text=App+Klijenti",
      features: [
        "Online rezervacija termina",
        "Pregled usluga i cjenovnika",
        "Loyalty program i popusti",
        "Push notifikacije i podsjetnici",
      ],
    },
    {
      title: "Web stranica",
      image: "https://placehold.co/600x400?text=Web+Stranica",
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
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {products.map((p) => (
          <div key={p.title} className="flex flex-col rounded-2xl border border-border bg-card p-5">
            <div className="overflow-hidden rounded-xl border border-border bg-muted">
              <img
                src={p.image}
                alt={p.title}
                className="h-auto w-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-base font-semibold">{p.title}</h3>
            <ul className="mt-3 space-y-2">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
                  {f}
                </li>
              ))}
            </ul>
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
    ["Šta se dešava sa našom postojećom bazom klijenata? Da li moramo sve ručno unositi?", "Nema potrebe za ručnim unosom. Naš tehnički tim vrši besplatnu migraciju vaših postojećih podataka (kontakti klijenata, istorija posjeta i bilješke) iz vašeg starog softvera ili Excel tabela direktno u novi sistem, tako da možete odmah nastaviti sa radom."],
    ["Koju opremu moramo imati u salonu/klinici da bismo koristili sistem?", "Zaposlenička aplikacija radi na bilo kojem modernom pametnom telefonu ili tabletu (iOS i Android). Za recepciju ili radne prostorije možete koristiti tablet radi lakšeg pregleda kalendara, dok vaši zaposlenici mogu koristiti svoje mobilne telefone za brzi pregled zakazanih termina, skeniranje klijentskih QR kodova i unošenje bilješki o tretmanima."],
    ["Kako sistem sprečava preklapanje termina (double-booking)?", "Sistem koristi sinhronizaciju podataka u realnom vremenu. U trenutku kada klijent rezerviše termin za određenu uslugu kod određenog zaposlenika, taj vremenski slot se automatski bilježi i zaključava. Na taj način je kalendar zaposlenika uvijek tačan i nema mogućnosti da dva klijenta rezervišu isti termin u isto vrijeme."],
    ["Na koji način se čuvaju kartoni klijenata i da li je sistem usklađen sa GDPR-om?", "Svi podaci o klijentima, istorija posjeta i kartoni tretmana se čuvaju na sigurnim cloud serverima sa visokim stepenom zaštite. Podaci su enkriptovani, a sistem je usklađen sa GDPR regulativom – klijenti imaju uvid u svoje podatke i istoriju direktno kroz svoju aplikaciju, što garantuje maksimalnu privatnost."],
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
                  className={`h-4 w-4 shrink-0 text-muted-foreground transition ${
                    open === i ? "rotate-180" : ""
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
        <p className="text-xs text-muted-foreground">2025 RealEstate Pro</p>
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
