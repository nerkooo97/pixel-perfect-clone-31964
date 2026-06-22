import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { Logo } from "@/components/Logo";

const searchSchema = z.object({
  paket: z.enum(["Osnovni", "Napredni", "Premium"]).optional(),
});

export const Route = createFileRoute("/zahtjev")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Zahtjev — GlowBook App" },
      { name: "description", content: "Pošaljite zahtjev za odabrani paket." },
    ],
  }),
  component: RequestPage,
});

type FormData = {
  paket: string;
  ime: string;
  prezime: string;
  email: string;
  telefon: string;
  nazivBiznisa: string;
  brojLokacija: string;
  brojUposlenika: string;
  specijalniZahtjevi: string;
};

const initial: FormData = {
  paket: "",
  ime: "",
  prezime: "",
  email: "",
  telefon: "",
  nazivBiznisa: "",
  brojLokacija: "1",
  brojUposlenika: "1-5",
  specijalniZahtjevi: "",
};

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">Početna</Link>
          <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground">Cjenovnik</Link>
        </nav>
      </div>
    </header>
  );
}

function Stepper({ step }: { step: number }) {
  const steps = ["Osnovni podaci", "Detalji biznisa", "Pregled"];
  return (
    <div className="mb-10 flex items-center justify-center gap-2">
      {steps.map((label, i) => {
        const idx = i + 1;
        const active = step === idx;
        const done = step > idx;
        return (
          <div key={label} className="flex items-center gap-2">
            <div
              className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-medium ${done
                  ? "bg-brand text-white"
                  : active
                    ? "bg-foreground text-background"
                    : "bg-muted text-muted-foreground"
                }`}
            >
              {done ? <Check className="h-3.5 w-3.5" /> : idx}
            </div>
            <span
              className={`hidden text-xs sm:inline ${active ? "font-medium text-foreground" : "text-muted-foreground"
                }`}
            >
              {label}
            </span>
            {idx < steps.length && <div className="mx-2 h-px w-8 bg-border" />}
          </div>
        );
      })}
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-foreground">{label}</span>
      {children}
    </label>
  );
}

const inputCls =
  "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand";

function RequestPage() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>({
    ...initial,
    paket: search.paket ?? "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const update = <K extends keyof FormData>(k: K, v: FormData[K]) =>
    setData((d) => ({ ...d, [k]: v }));

  const handleSubmit = async () => {
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
          name: `${data.ime} ${data.prezime}`,
          email: data.email,
          phone: data.telefon,
          subject: `Novi zahtjev za paket: ${data.paket || "Nije odabran"} - GlowBook.app`,
          message: `
Detalji zahtjeva:
-----------------
Odabrani paket: ${data.paket || "—"}
Ime i prezime: ${data.ime} ${data.prezime}
Email: ${data.email}
Telefon: ${data.telefon || "—"}
Naziv biznisa: ${data.nazivBiznisa}
Broj lokacija: ${data.brojLokacija}
Broj uposlenika: ${data.brojUposlenika}
Specijalni zahtjevi: ${data.specijalniZahtjevi || "—"}
          `.trim(),
        }),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setSubmitted(true);
      } else {
        setError(result.message || "Došlo je do greške prilikom slanja zahtjeva.");
      }
    } catch (err) {
      setError("Došlo je do mrežne greške. Molimo pokušajte ponovo.");
    } finally {
      setLoading(false);
    }
  };

  const canNext1 =
    data.ime.trim() && data.prezime.trim() && data.email.trim() && data.nazivBiznisa.trim();

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Nav />
        <section className="mx-auto max-w-xl px-6 py-20 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
            <Check className="h-6 w-6 text-brand" />
          </div>
          <h1 className="mt-6 text-2xl font-semibold tracking-tight">Hvala vam!</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Vaš zahtjev je uspješno poslan. Kontaktiraćemo vas u najkraćem mogućem roku.
          </p>
          <button
            onClick={() => navigate({ to: "/" })}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background hover:opacity-90"
          >
            Nazad na početnu
          </button>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <section className="mx-auto max-w-2xl px-6 py-12">
        <div className="text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Zahtjev
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight">Pošaljite zahtjev</h1>
          {data.paket && (
            <div className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3 py-1 text-xs">
              <span className="text-muted-foreground">Odabrani paket:</span>
              <span className="font-medium text-foreground">{data.paket}</span>
            </div>
          )}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-card p-6 md:p-8">
          <Stepper step={step} />

          {step === 1 && (
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Ime">
                  <input
                    className={inputCls}
                    value={data.ime}
                    onChange={(e) => update("ime", e.target.value)}
                    placeholder="Vaše ime"
                  />
                </Field>
                <Field label="Prezime">
                  <input
                    className={inputCls}
                    value={data.prezime}
                    onChange={(e) => update("prezime", e.target.value)}
                    placeholder="Vaše prezime"
                  />
                </Field>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Email">
                  <input
                    type="email"
                    className={inputCls}
                    value={data.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="email@primjer.com"
                  />
                </Field>
                <Field label="Telefon">
                  <input
                    className={inputCls}
                    value={data.telefon}
                    onChange={(e) => update("telefon", e.target.value)}
                    placeholder="+387 ..."
                  />
                </Field>
              </div>
              <Field label="Naziv biznisa">
                <input
                  className={inputCls}
                  value={data.nazivBiznisa}
                  onChange={(e) => update("nazivBiznisa", e.target.value)}
                  placeholder="Naziv vašeg salona/klinike"
                />
              </Field>

              <div className="flex justify-end pt-2">
                <button
                  disabled={!canNext1}
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Dalje <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <Field label="Broj lokacija biznisa">
                <select
                  className={inputCls}
                  value={data.brojLokacija}
                  onChange={(e) => update("brojLokacija", e.target.value)}
                >
                  <option value="1">1 lokacija</option>
                  <option value="2-3">2 - 3 lokacije</option>
                  <option value="4-10">4 - 10 lokacija</option>
                  <option value="10+">Više od 10</option>
                </select>
              </Field>
              <Field label="Broj uposlenika">
                <select
                  className={inputCls}
                  value={data.brojUposlenika}
                  onChange={(e) => update("brojUposlenika", e.target.value)}
                >
                  <option value="1-5">1 - 5</option>
                  <option value="6-15">6 - 15</option>
                  <option value="16-50">16 - 50</option>
                  <option value="50+">Više od 50</option>
                </select>
              </Field>
              <Field label="Specijalni zahtjevi">
                <textarea
                  className={`${inputCls} min-h-[120px] resize-y`}
                  value={data.specijalniZahtjevi}
                  onChange={(e) => update("specijalniZahtjevi", e.target.value)}
                  placeholder="Opišite specifične potrebe, integracije ili funkcionalnosti..."
                />
              </Field>

              <div className="flex justify-between pt-2">
                <button
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2 text-sm font-medium hover:bg-muted"
                >
                  <ArrowLeft className="h-3.5 w-3.5" /> Nazad
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background hover:opacity-90"
                >
                  Dalje <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-muted/30 p-5">
                <h3 className="text-sm font-semibold">Pregled zahtjeva</h3>
                <dl className="mt-4 space-y-2 text-xs">
                  <Row label="Paket" value={data.paket || "—"} />
                  <Row label="Ime i prezime" value={`${data.ime} ${data.prezime}`} />
                  <Row label="Email" value={data.email} />
                  <Row label="Telefon" value={data.telefon || "—"} />
                  <Row label="Naziv biznisa" value={data.nazivBiznisa} />
                  <Row label="Broj lokacija" value={data.brojLokacija} />
                  <Row label="Broj uposlenika" value={data.brojUposlenika} />
                  <Row
                    label="Specijalni zahtjevi"
                    value={data.specijalniZahtjevi || "—"}
                  />
                </dl>
              </div>

              {error && (
                <div className="rounded-lg bg-red-500/10 p-3 text-xs text-red-500">
                  {error}
                </div>
              )}

              <div className="flex justify-between">
                <button
                  disabled={loading}
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2 text-sm font-medium hover:bg-muted disabled:opacity-50"
                >
                  <ArrowLeft className="h-3.5 w-3.5" /> Nazad
                </button>
                <button
                  disabled={loading}
                  onClick={handleSubmit}
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2 text-sm font-medium text-white hover:bg-brand/90 disabled:opacity-50 transition-all active:scale-[0.98]"
                >
                  {loading ? "Slanje..." : "Pošalji zahtjev"}
                  {!loading && <Check className="h-3.5 w-3.5" />}
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-border/50 pb-2 last:border-0 last:pb-0">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="text-right font-medium text-foreground">{value}</dd>
    </div>
  );
}
