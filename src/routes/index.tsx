import { createFileRoute } from "@tanstack/react-router";
import { Camera, DoorOpen, Zap, Lightbulb, type LucideIcon } from "lucide-react";
import { Footer, Header, PHONE_MAIN, TopBar, WHATSAPP_URL } from "@/components/site/chrome";
import heroCamera from "@/assets/hero-camera.jpg";
import productDome from "@/assets/product-dome.jpg";
import productBiometric from "@/assets/product-biometric.jpg";
import productFence from "@/assets/product-fence.jpg";
import productLamp from "@/assets/product-lamp.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "SAICOMEDIA — Technologie de pointe pour une sécurité sans faille",
      },
      {
        name: "description",
        content:
          "Caméras IP et solaires, alarmes, contrôle d'accès, clôtures électrifiées et lampadaires solaires. Vente, installation et maintenance en Côte d'Ivoire. Infoline 07 83 44 12.",
      },
      {
        property: "og:title",
        content: "SAICOMEDIA — Technologie de pointe pour une sécurité sans faille",
      },
      {
        property: "og:description",
        content:
          "Caméras IP et solaires, alarmes, contrôle d'accès, clôtures électrifiées et lampadaires solaires. Vente, installation et maintenance en Côte d'Ivoire.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Categories />
        <PopularProducts />
        <ProcessAndCta />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="mesh">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-card/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Distributeur &amp; installateur · Abidjan
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight lg:text-6xl">
            Technologie de pointe pour une <span className="text-primary">sécurité</span> sans
            faille.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Caméras IP et solaires, alarmes, contrôle d'accès, clôtures électrifiées et portails
            motorisés. Nous vendons, installons et assurons la maintenance de votre système.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground"
            >
              Demander un devis
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-card px-7 py-3.5 font-semibold text-foreground"
            >
              Voir le catalogue
            </a>
          </div>
          <div className="mt-10 grid max-w-lg grid-cols-3 gap-6">
            <div>
              <div className="font-display text-3xl font-bold">12+</div>
              <div className="mt-1 text-sm text-muted-foreground">ans d'expérience</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold">2500+</div>
              <div className="mt-1 text-sm text-muted-foreground">sites sécurisés</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold">24/7</div>
              <div className="mt-1 text-sm text-muted-foreground">support technique</div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-border bg-card p-4 shadow-xl shadow-primary/5">
            <img
              src={heroCamera}
              alt="Caméra IP solaire 4K avec panneau intégré"
              width={1024}
              height={1024}
              className="aspect-square w-full rounded-2xl object-cover"
            />
            <div className="mt-4 flex items-center justify-between px-1">
              <div>
                <div className="font-display text-base font-semibold">Caméra IP Solaire 4K</div>
                <div className="text-sm text-muted-foreground">Vision nocturne · Wi-Fi</div>
              </div>
              <div className="text-right">
                <div className="font-display text-lg font-bold">145 000 F</div>
                <div className="text-xs font-semibold text-primary">Installation incluse</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SOLUTIONS: { icon: LucideIcon; tint: string; title: string; text: string }[] = [
  {
    icon: Camera,
    tint: "bg-secondary text-primary",
    title: "Caméras IP & solaires",
    text: "Surveillance 4K, vision nocturne, alerte mobile.",
  },
  {
    icon: DoorOpen,
    tint: "bg-sun/15 text-primary",
    title: "Contrôle d'accès",
    text: "Pointeuses biométriques, badges, visiophones.",
  },
  {
    icon: Zap,
    tint: "bg-mint/15 text-primary",
    title: "Clôtures & portails",
    text: "Clôtures électrifiées et portails motorisés.",
  },
  {
    icon: Lightbulb,
    tint: "bg-sun/15 text-primary",
    title: "Solaire & alarmes",
    text: "Lampadaires solaires, alarmes et visioconférence.",
  },
];

function Categories() {
  return (
    <section id="solutions" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="font-display text-3xl font-bold tracking-tight">Nos solutions</h2>
          <p className="mt-2 text-muted-foreground">
            Un écosystème complet, du capteur au portail.
          </p>
        </div>
        <a href="#contact" className="hidden text-sm font-semibold text-primary sm:inline">
          Tout le catalogue →
        </a>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SOLUTIONS.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/20"
          >
            <div className={`grid size-11 place-items-center rounded-xl ${s.tint}`}>
              <s.icon className="size-5" strokeWidth={1.8} />
            </div>
            <div className="mt-5 font-display text-lg font-semibold">{s.title}</div>
            <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
            <div className="mt-4 text-xs font-semibold text-primary">Voir →</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const PRODUCTS = [
  {
    image: productDome,
    category: "Surveillance",
    categoryClass: "text-mint",
    name: "Dome IP 4 Mégapixels",
    price: "89 000 F",
    badge: "Promo",
    badgeClass: "bg-mint/20 text-primary",
  },
  {
    image: productBiometric,
    category: "Contrôle d'accès",
    categoryClass: "text-sun",
    name: "Pointeuse Biométrique",
    price: "120 000 F",
    badge: "En stock",
    badgeClass: "text-primary-foreground/50",
  },
  {
    image: productFence,
    category: "Périmètre",
    categoryClass: "text-mint",
    name: "Clôture Électrifiée 50m",
    price: "145 000 F",
    badge: "En stock",
    badgeClass: "text-primary-foreground/50",
  },
  {
    image: productLamp,
    category: "Solaire",
    categoryClass: "text-sun",
    name: "Lampadaire Solaire 30W",
    price: "65 000 F",
    badge: "En stock",
    badgeClass: "text-primary-foreground/50",
  },
];

function PopularProducts() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight">Produits populaires</h2>
            <p className="mt-2 text-primary-foreground/60">
              Sélection de nos équipements les plus installés.
            </p>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-4"
            >
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                width={1024}
                height={1024}
                className="aspect-square w-full rounded-xl object-cover"
              />
              <div className="px-1 pt-4">
                <div className={`text-xs font-semibold ${p.categoryClass}`}>{p.category}</div>
                <div className="mt-1 font-display font-semibold">{p.name}</div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-display font-bold">{p.price}</span>
                  <span className={`rounded-full px-2 py-1 text-xs ${p.badgeClass}`}>
                    {p.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  {
    num: "01",
    title: "Audit & devis",
    text: "Visite technique gratuite et devis détaillé sous 24h.",
  },
  {
    num: "02",
    title: "Conception",
    text: "Plan de couverture et choix des équipements adaptés.",
  },
  {
    num: "03",
    title: "Installation",
    text: "Pose par nos techniciens certifiés, propre et rapide.",
  },
  {
    num: "04",
    title: "Maintenance 24/7",
    text: "Suivi, formation et assistance technique continue.",
  },
];

function ProcessAndCta() {
  return (
    <section id="installation" className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold tracking-tight">
            Installation en 4 étapes
          </h2>
          <div className="mt-8 space-y-6">
            {STEPS.map((s) => (
              <div key={s.num} className="flex gap-4">
                <span className="font-display text-lg font-bold text-primary">{s.num}</span>
                <div>
                  <div className="font-display font-semibold">{s.title}</div>
                  <p className="text-sm text-muted-foreground">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div id="contact" className="mesh rounded-3xl p-8 lg:p-10">
          <h3 className="font-display text-2xl font-bold">Parlons de votre projet</h3>
          <p className="mt-3 text-muted-foreground">
            Un doute sur votre sécurité ? Notre équipe vous répond en quelques minutes sur WhatsApp.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground"
            >
              <span className="size-2 rounded-full bg-mint" />
              Écrire sur WhatsApp
            </a>
            <a
              href={PHONE_MAIN}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/10 bg-card px-6 py-3.5 font-semibold text-foreground"
            >
              Appeler 07 87 27 09 00
            </a>
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <span className="size-2 rounded-full bg-mint" />
            Disponibles 7j/7 · Abidjan &amp; régions
          </div>
        </div>
      </div>
    </section>
  );
}
