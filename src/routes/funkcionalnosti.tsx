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
  ArrowRight,
} from "lucide-react";
import { Logo } from "@/components/Logo";

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
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-10 text-center">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Funkcionalnosti
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
        Sve što vam treba na
        <br />
        jednom mjestu
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        Otkrijte sve funkcionalnosti naše platforme — od profesionalne web stranice, preko
        mobilne aplikacije za vaš tim, do brendirane aplikacije za vaše klijente.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href="#web"
          className="rounded-full border border-border bg-background px-5 py-2 text-sm font-medium hover:bg-muted"
        >
          Web stranica
        </a>
        <a
          href="#uposlenici"
          className="rounded-full border border-border bg-background px-5 py-2 text-sm font-medium hover:bg-muted"
        >
          Aplikacija za uposlenike
        </a>
        <a
          href="#klijenti"
          className="rounded-full bg-brand px-5 py-2 text-sm font-medium text-white hover:bg-brand/90"
        >
          Aplikacija za klijente
        </a>
      </div>
    </section>
  );
}

type Feature = { icon: typeof Calendar; t: string; d: string };

function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((f) => (
        <div
          key={f.t}
          className="rounded-2xl border border-border bg-background p-5 transition-colors hover:border-brand/40"
        >
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand/10">
            <f.icon className="h-5 w-5 text-brand" />
          </div>
          <h3 className="mt-4 text-sm font-semibold">{f.t}</h3>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{f.d}</p>
        </div>
      ))}
    </div>
  );
}

function SectionHeader({
  badge,
  title,
  description,
  icon: Icon,
}: {
  badge: string;
  title: string;
  description: string;
  icon: typeof Globe;
}) {
  return (
    <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-6">
      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand/10">
        <Icon className="h-6 w-6 text-brand" />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {badge}
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

const webFeatures: Feature[] = [
  { icon: Globe, t: "Prilagođen dizajn", d: "Moderna web stranica prilagođena identitetu vašeg brenda — boje, logo i fotografije." },
  { icon: Calendar, t: "Online rezervacija", d: "Klijenti rezervišu termin direktno sa web stranice, bez poziva i čekanja." },
  { icon: Search, t: "SEO optimizacija", d: "Optimizovan kod, brzina i metapodaci za bolju vidljivost na Google pretrazi." },
  { icon: FileText, t: "Pregled usluga", d: "Detaljan katalog usluga sa cijenama, opisom i fotografijama prije/poslije." },
  { icon: Star, t: "Recenzije klijenata", d: "Prikaz ocjena i komentara zadovoljnih klijenata za izgradnju povjerenja." },
  { icon: MapPin, t: "Prikaz lokacija", d: "Interaktivna mapa, radno vrijeme i kontakt podaci za sve vaše poslovnice." },
  { icon: Smartphone, t: "Responzivan dizajn", d: "Stranica se savršeno prilagođava mobitelu, tabletu i desktop računaru." },
  { icon: Mail, t: "Newsletter forma", d: "Prikupljajte email adrese za promocije, akcije i informacije o novim uslugama." },
  { icon: BarChart3, t: "Google Analytics", d: "Pratite posjete, izvore prometa i ponašanje korisnika na stranici." },
];

const employeeFeatures: Feature[] = [
  { icon: Calendar, t: "Pametan kalendar", d: "Pregled svih termina po danu, sedmici i mjesecu uz boje po uslugama i statusima." },
  { icon: Users, t: "Karton klijenta", d: "Kompletna historija posjeta, tretmana, bilješki i fotografija za svakog klijenta." },
  { icon: Bell, t: "Push notifikacije", d: "Automatska obavještenja o novim rezervacijama, otkazivanjima i izmjenama termina." },
  { icon: QrCode, t: "QR check-in", d: "Brzo skeniranje QR koda klijenta za prijavu na termin i identifikaciju." },
  { icon: CreditCard, t: "Naplata i fakture", d: "Evidencija plaćanja, generisanje računa i pregled prihoda po uposleniku." },
  { icon: Camera, t: "Fotografije tretmana", d: "Prikačite fotografije prije/poslije direktno u karton klijenta sa telefona." },
  { icon: MessageSquare, t: "Interna komunikacija", d: "Brze poruke unutar tima, dijeljenje bilješki i koordinacija smjena." },
  { icon: Clock, t: "Upravljanje smjenama", d: "Postavite radno vrijeme, pauze i godišnje odmore za svakog uposlenika." },
  { icon: BarChart3, t: "Statistika rada", d: "Broj klijenata, prihod, najtraženije usluge i učinak po uposleniku u realnom vremenu." },
  { icon: Settings, t: "Upravljanje uslugama", d: "Dodajte nove usluge, mijenjajte cijene i trajanje tretmana u par sekundi." },
  { icon: MapPin, t: "Više lokacija", d: "Upravljajte timom i terminima na svim poslovnicama iz jedne aplikacije." },
  { icon: ShieldCheck, t: "Kontrola pristupa", d: "Definišite uloge i nivoe pristupa — vlasnik, menadžer, terapeut, recepcija." },
];

const clientFeatures: Feature[] = [
  { icon: Calendar, t: "Rezervacija 24/7", d: "Klijenti zakazuju termin u bilo koje vrijeme, biraju uslugu, uposlenika i lokaciju." },
  { icon: Bell, t: "Podsjetnici na termin", d: "Automatske push notifikacije i email podsjetnici — manje propuštenih termina." },
  { icon: Gift, t: "Loyalty program", d: "Digitalna kartica lojalnosti sa bodovima, nivoima i nagradama za vjerne klijente." },
  { icon: Heart, t: "Omiljene usluge", d: "Klijenti spremaju omiljene tretmane i uposlenike za bržu sljedeću rezervaciju." },
  { icon: Star, t: "Ocjene i recenzije", d: "Nakon posjete klijent može ostaviti ocjenu i komentar o iskustvu." },
  { icon: CreditCard, t: "Online plaćanje", d: "Plaćanje akontacije ili pune cijene tretmana karticom direktno kroz aplikaciju." },
  { icon: FileText, t: "Historija posjeta", d: "Pregled svih prošlih tretmana, plaćanja i bilješki na jednom mjestu." },
  { icon: MessageSquare, t: "Chat sa salonom", d: "Direktna komunikacija sa recepcijom za pitanja, izmjene ili savjete." },
  { icon: Gift, t: "Vaučeri i pokloni", d: "Kupovina poklon vaučera za prijatelje direktno iz aplikacije." },
];

function WebSection() {
  return (
    <section id="web" className="mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-2xl border border-border bg-card p-6 md:p-10">
        <SectionHeader
          badge="Web stranica"
          title="Profesionalna web prisutnost"
          description="Vaša online vitrina koja radi za vas 24 sata dnevno — privlači nove klijente, prima rezervacije i gradi vaš brend."
          icon={Globe}
        />
        <FeatureGrid features={webFeatures} />
      </div>
    </section>
  );
}

function EmployeeSection() {
  return (
    <section id="uposlenici" className="mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-2xl border border-border bg-card p-6 md:p-10">
        <SectionHeader
          badge="Aplikacija za uposlenike"
          title="Pametan sistem za vaš tim"
          description="Sve što je vašem timu potrebno za upravljanje radnim danom — od rasporeda do kartona klijenata, sve u jednoj aplikaciji na mobitelu ili tabletu."
          icon={Smartphone}
        />
        <FeatureGrid features={employeeFeatures} />
      </div>
    </section>
  );
}

function ClientSection() {
  return (
    <section id="klijenti" className="mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-2xl border border-border bg-gradient-to-br from-brand/5 via-card to-card p-6 md:p-10">
        <SectionHeader
          badge="Aplikacija za klijente"
          title="Iskustvo koje klijenti vole"
          description="Brendirana mobilna aplikacija na ime vašeg salona — dostupna na App Store-u i Google Play-u, sa vašim logom i bojama."
          icon={Heart}
        />
        <FeatureGrid features={clientFeatures} />
      </div>
    </section>
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
            Sve u jednom
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
            Tri platforme — jedan sistem
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Web stranica, aplikacija za uposlenike i aplikacija za klijente rade kao jedna
            cjelina. Promjena na jednom mjestu se odmah vidi na svim ostalim.
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

function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl bg-background">
        <Nav />
        <Hero />
        <WebSection />
        <EmployeeSection />
        <ClientSection />
        <ComparisonTeaser />
        <Footer />
      </div>
    </div>
  );
}
