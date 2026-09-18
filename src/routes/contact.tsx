import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Footer, Header, TopBar, WHATSAPP_URL, PHONE_MAIN } from "@/components/site/chrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SAICOMEDIA — Devis gratuit sécurité & solaire à Abidjan" },
      {
        name: "description",
        content:
          "Contactez SAICOMEDIA pour un devis gratuit : caméras, alarmes, contrôle d'accès et solaire. WhatsApp 07 87 27 09 00, infoline 07 83 44 12, abs@saicomedia.com.",
      },
      { property: "og:title", content: "Contact SAICOMEDIA — Devis gratuit sous 24h" },
      {
        property: "og:description",
        content: "Écrivez-nous sur WhatsApp ou par e-mail : audit gratuit et devis détaillé sous 24h à Abidjan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const INFOS = [
  { icon: Phone, title: "Téléphone", lines: ["07 87 27 09 00", "Infoline 07 83 44 12", "01 01 01 42 43"] },
  { icon: Mail, title: "E-mail", lines: ["abs@saicomedia.com"] },
  { icon: MapPin, title: "Adresse", lines: ["Abidjan, Côte d'Ivoire", "Interventions Cocody · Yopougon · régions"] },
  { icon: Clock, title: "Horaires", lines: ["Lun – Sam : 8h – 18h", "Assistance technique 24/7"] },
];

const SUBJECTS = ["Caméras & surveillance", "Alarme", "Contrôle d'accès", "Clôture / portail", "Solaire", "Autre"];

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState(SUBJECTS[0]);
  const [message, setMessage] = useState("");

  const waLink = `${WHATSAPP_URL}?text=${encodeURIComponent(
    `Bonjour SAICOMEDIA,\nNom : ${name || "—"}\nTéléphone : ${phone || "—"}\nBesoin : ${subject}\n${message}`,
  )}`;

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <TopBar />
      <Header />
      <main>
        <section className="mesh border-b border-border">
          <div className="mx-auto max-w-7xl px-6 py-14 lg:py-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-card/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Contact · Réponse sous 24h
            </span>
            <h1 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight lg:text-5xl">
              Parlons de votre <span className="text-primary">sécurité</span>.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Audit technique gratuit, devis détaillé, installation par nos équipes certifiées.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-border bg-card p-6 lg:p-8">
              <h2 className="font-display text-2xl font-bold">Demander un devis</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Remplissez le formulaire, votre message s'ouvre directement dans WhatsApp.
              </p>
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.open(waLink, "_blank", "noopener");
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-medium">Nom complet</span>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Ex. Kouadio Bonnaventure"
                      className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium">Téléphone</span>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      placeholder="07 00 00 00 00"
                      className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="text-sm font-medium">Votre besoin</span>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                  >
                    {SUBJECTS.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="text-sm font-medium">Message</span>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    placeholder="Décrivez votre site : nombre de caméras, surface, localisation…"
                    className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground sm:w-auto"
                >
                  <span className="size-2 rounded-full bg-mint" />
                  Envoyer sur WhatsApp
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-5">
            {INFOS.map((i) => (
              <div key={i.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-start gap-4">
                  <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                    <i.icon className="size-5" strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="font-display font-semibold">{i.title}</div>
                    <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                      {i.lines.map((l) => (
                        <li key={l}>{l}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
            <div className="mesh rounded-2xl p-6">
              <div className="font-display text-lg font-semibold">Urgence ou panne ?</div>
              <p className="mt-2 text-sm text-muted-foreground">Appelez-nous, un technicien vous rappelle.</p>
              <a
                href={PHONE_MAIN}
                className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
              >
                Appeler 07 87 27 09 00
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
