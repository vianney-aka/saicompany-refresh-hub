import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Camera, DoorOpen, Zap, Lightbulb, Grid2x2, type LucideIcon } from "lucide-react";
import { Footer, Header, TopBar, WHATSAPP_URL } from "@/components/site/chrome";
import heroCamera from "@/assets/hero-camera.jpg";
import productDome from "@/assets/product-dome.jpg";
import productBiometric from "@/assets/product-biometric.jpg";
import productFence from "@/assets/product-fence.jpg";
import productLamp from "@/assets/product-lamp.jpg";

export const Route = createFileRoute("/boutique")({
  head: () => ({
    meta: [
      { title: "Boutique SAICOMEDIA — Caméras, alarmes, solaire et contrôle d'accès" },
      {
        name: "description",
        content:
          "Catalogue SAICOMEDIA : caméras IP et solaires, pointeuses biométriques, clôtures électrifiées, lampadaires solaires. Prix en FCFA, installation incluse à Abidjan.",
      },
      { property: "og:title", content: "Boutique SAICOMEDIA — Équipements de sécurité en Côte d'Ivoire" },
      {
        property: "og:description",
        content:
          "Caméras IP et solaires, pointeuses biométriques, clôtures électrifiées et lampadaires solaires, livrés et installés.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Boutique,
});

type Category = "Surveillance" | "Contrôle d'accès" | "Périmètre" | "Solaire";

const FILTERS: { label: string; value: Category | "Tout"; icon: LucideIcon }[] = [
  { label: "Tout", value: "Tout", icon: Grid2x2 },
  { label: "Surveillance", value: "Surveillance", icon: Camera },
  { label: "Contrôle d'accès", value: "Contrôle d'accès", icon: DoorOpen },
  { label: "Périmètre", value: "Périmètre", icon: Zap },
  { label: "Solaire", value: "Solaire", icon: Lightbulb },
];

const CATALOG: {
  image: string;
  category: Category;
  name: string;
  desc: string;
  price: string;
  badge?: string;
}[] = [
  {
    image: heroCamera,
    category: "Surveillance",
    name: "Caméra IP Solaire 4K",
    desc: "Panneau intégré, vision nocturne couleur, alerte mobile.",
    price: "145 000 F",
    badge: "Best-seller",
  },
  {
    image: productDome,
    category: "Surveillance",
    name: "Dome IP 4 Mégapixels",
    desc: "Intérieur/extérieur, anti-vandale, POE.",
    price: "89 000 F",
    badge: "Promo",
  },
  {
    image: productDome,
    category: "Surveillance",
    name: "Kit 4 caméras + NVR 1 To",
    desc: "Installation, câblage et paramétrage mobile inclus.",
    price: "420 000 F",
  },
  {
    image: productBiometric,
    category: "Contrôle d'accès",
    name: "Pointeuse Biométrique",
    desc: "Empreinte + badge, export des présences.",
    price: "120 000 F",
  },
  {
    image: productBiometric,
    category: "Contrôle d'accès",
    name: "Visiophone 7 pouces",
    desc: "Écran couleur, ouverture portail à distance.",
    price: "95 000 F",
  },
  {
    image: productFence,
    category: "Périmètre",
    name: "Clôture Électrifiée 50 m",
    desc: "Énergiseur, sirène et panneaux de signalisation.",
    price: "145 000 F",
  },
  {
    image: productFence,
    category: "Périmètre",
    name: "Portail motorisé coulissant",
    desc: "Moteur, crémaillère, télécommandes et pose.",
    price: "380 000 F",
    badge: "Sur devis",
  },
  {
    image: productLamp,
    category: "Solaire",
    name: "Lampadaire Solaire 30 W",
    desc: "Détecteur de mouvement, autonomie 2 nuits.",
    price: "65 000 F",
  },
  {
    image: productLamp,
    category: "Solaire",
    name: "Lampadaire Solaire 100 W",
    desc: "Éclairage de cour, batterie lithium longue durée.",
    price: "155 000 F",
  },
];

function Boutique() {
  const [active, setActive] = useState<Category | "Tout">("Tout");
  const items = active === "Tout" ? CATALOG : CATALOG.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <TopBar />
      <Header />
      <main>
        <section className="mesh border-b border-border">
          <div className="mx-auto max-w-7xl px-6 py-14 lg:py-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-card/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Boutique · Livraison Abidjan &amp; régions
            </span>
            <h1 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight lg:text-5xl">
              Nos équipements, <span className="text-primary">installés</span> par nos techniciens.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Des prix clairs en FCFA, du matériel garanti 12 mois et la pose assurée par SAICOMEDIA.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => {
              const on = active === f.value;
              return (
                <button
                  key={f.value}
                  type="button"
                  onClick={() => setActive(f.value)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                    on
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <f.icon className="size-4" strokeWidth={1.8} />
                  {f.label}
                </button>
              );
            })}
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => (
              <article
                key={p.name}
                className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/25"
              >
                <div className="relative">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  {p.badge ? (
                    <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      {p.badge}
                    </span>
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="text-xs font-semibold uppercase tracking-wide text-primary">{p.category}</div>
                  <h2 className="mt-2 font-display text-lg font-semibold">{p.name}</h2>
                  <p className="mt-1 flex-1 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="font-display text-xl font-bold">{p.price}</span>
                    <a
                      href={`${WHATSAPP_URL}?text=${encodeURIComponent(
                        `Bonjour SAICOMEDIA, je suis intéressé par : ${p.name} (${p.price}).`,
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                    >
                      Commander
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-14 lg:flex-row lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight">Un besoin sur mesure ?</h2>
              <p className="mt-2 text-primary-foreground/70">
                Grands sites, entreprises, résidences : nous chiffrons votre projet sous 24h.
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-sun px-7 py-3.5 font-semibold text-primary"
            >
              Demander un devis
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
