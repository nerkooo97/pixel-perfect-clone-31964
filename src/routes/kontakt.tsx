import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Check, Send } from "lucide-react";
import { Logo } from "@/components/Logo";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — GlowBook App" },
      {
        name: "description",
        content:
          "Stupite u kontakt s nama. Odgovaramo na sva pitanja u najkraćem mogućem roku.",
      },
      { property: "og:title", content: "Kontakt — GlowBook App" },
      {
        property: "og:description",
        content: "Stupite u kontakt s nama putem forme, emaila ili telefona.",
      },
    ],
  }),
  component: KontaktPage,
});

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
            Početna
          </Link>
          <Link
            to="/pricing"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Cjenovnik
          </Link>
          <Link
            to="/kontakt"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Kontakt
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/pricing"
            className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-medium text-foreground hover:bg-muted"
          >
            Cjenovnik
          </Link>
        </div>
      </div>
    </header>
  );
}

const infoCards = [
  {
    icon: Mail,
    label: "Email",
    value: "info@glowbook.app",
    sub: "Odgovaramo u roku od 24h",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+387 33 123 456",
    sub: "Pon - Pet, 09:00 - 17:00",
  },
  {
    icon: MapPin,
    label: "Adresa",
    value: "Sarajevo, BiH",
    sub: "Posjeta po dogovoru",
  },
  {
    icon: Clock,
    label: "Radno vrijeme",
    value: "09:00 - 17:00",
    sub: "Ponedjeljak - Petak",
  },
];

const inputCls =
  "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand";

function ContactForm() {
  const [data, setData] = useState({
    ime: "",
    email: "",
    telefon: "",
    poruka: "",
  });
  const [sent, setSent] = useState(false);

  const valid = data.ime.trim() && data.email.trim() && data.poruka.trim();

  if (sent) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
          <Check className="h-6 w-6 text-brand" />
        </div>
        <h3 className="mt-5 text-lg font-semibold">Poruka poslana!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Hvala vam na poruci. Javit ćemo vam se uskoro.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (valid) setSent(true);
      }}
      className="space-y-4 rounded-2xl border border-border bg-card p-6 md:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium">Ime i prezime</span>
          <input
            className={inputCls}
            value={data.ime}
            onChange={(e) => setData({ ...data, ime: e.target.value })}
            placeholder="Vaše ime"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium">Telefon</span>
          <input
            className={inputCls}
            value={data.telefon}
            onChange={(e) => setData({ ...data, telefon: e.target.value })}
            placeholder="+387 ..."
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-xs font-medium">Email</span>
        <input
          type="email"
          className={inputCls}
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          placeholder="email@primjer.com"
        />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-xs font-medium">Poruka</span>
        <textarea
          className={`${inputCls} min-h-[140px] resize-y`}
          value={data.poruka}
          onChange={(e) => setData({ ...data, poruka: e.target.value })}
          placeholder="Kako vam možemo pomoći?"
        />
      </label>
      <button
        type="submit"
        disabled={!valid}
        className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2 text-sm font-medium text-white hover:bg-brand/90 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Pošalji poruku <Send className="h-3.5 w-3.5" />
      </button>
    </form>
  );
}

function ContactInfo() {
  return (
    <div className="grid gap-3">
      {infoCards.map(({ icon: Icon, label, value, sub }) => (
        <div
          key={label}
          className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10">
            <Icon className="h-5 w-5 text-brand" />
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {label}
            </p>
            <p className="mt-1 text-sm font-medium text-foreground">{value}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">{sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-6 text-center">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Kontakt
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
        Razgovarajmo o vašem biznisu
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
        Imate pitanje, ideju ili želite demonstraciju? Popunite formu i naš tim
        će vas kontaktirati u najkraćem mogućem roku.
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

function KontaktPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl bg-background">
        <Nav />
        <Hero />
        <section className="mx-auto max-w-6xl px-6 pb-12">
          <div className="grid gap-6 md:grid-cols-[3fr_2fr]">
            <ContactForm />
            <ContactInfo />
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
