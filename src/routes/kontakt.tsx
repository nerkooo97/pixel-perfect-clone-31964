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

const inputCls =
  "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand";

function ContactForm() {
  const [data, setData] = useState({
    ime: "",
    email: "",
    telefon: "",
    poruka: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const valid = data.ime.trim() && data.email.trim() && data.poruka.trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;

    setLoading(true);
    setError("");

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "2f33f393-6829-430a-ba3c-dc7b40547900";

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: data.ime,
          email: data.email,
          phone: data.telefon,
          message: data.poruka,
          subject: "Nova poruka sa kontakt forme - GlowBook.app",
        }),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setSent(true);
      } else {
        setError(result.message || "Došlo je do greške prilikom slanja poruke.");
      }
    } catch (err) {
      setError("Došlo je do mrežne greške. Molimo pokušajte ponovo.");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center animate-fade-in">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
          <Check className="h-6 w-6 text-brand" />
        </div>
        <h3 className="mt-5 text-lg font-semibold text-foreground">Poruka poslana!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Hvala vam na poruci. Javit ćemo vam se uskoro na vaš email.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-foreground">Ime i prezime</span>
          <input
            className={inputCls}
            value={data.ime}
            onChange={(e) => setData({ ...data, ime: e.target.value })}
            placeholder="Vaše ime"
            required
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-foreground">Telefon</span>
          <input
            className={inputCls}
            value={data.telefon}
            onChange={(e) => setData({ ...data, telefon: e.target.value })}
            placeholder="+387 ..."
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-xs font-medium text-foreground">Email</span>
        <input
          type="email"
          className={inputCls}
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          placeholder="email@primjer.com"
          required
        />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-xs font-medium text-foreground">Poruka</span>
        <textarea
          className={`${inputCls} min-h-[140px] resize-y`}
          value={data.poruka}
          onChange={(e) => setData({ ...data, poruka: e.target.value })}
          placeholder="Kako vam možemo pomoći?"
          required
        />
      </label>

      {error && (
        <div className="rounded-lg bg-red-500/10 p-3 text-xs text-red-500">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={!valid || loading}
        className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2 text-sm font-medium text-white hover:bg-brand/90 disabled:cursor-not-allowed disabled:opacity-40 transition-all active:scale-[0.98]"
      >
        {loading ? "Slanje..." : "Pošalji poruku"}
        {!loading && <Send className="h-3.5 w-3.5" />}
      </button>
    </form>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-6 text-center">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand">
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
        <section className="mx-auto max-w-2xl px-6 pb-20">
          <ContactForm />
        </section>
        <Footer />
      </div>
    </div>
  );
}
