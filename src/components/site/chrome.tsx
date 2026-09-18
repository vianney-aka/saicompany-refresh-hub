import { Link } from "@tanstack/react-router";

export const WHATSAPP_URL = "https://wa.me/2250787270900";
export const PHONE_MAIN = "tel:0787270900";

export function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs tracking-wide">
        <span className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-mint" />
          Installation &amp; maintenance partout en Côte d'Ivoire
        </span>
        <span className="hidden items-center gap-4 sm:flex">
          <span>Abidjan · Cocody · Yopougon</span>
          <a href={PHONE_MAIN} className="font-semibold text-sun">
            Infoline 07 83 44 12
          </a>
        </span>
      </div>
    </div>
  );
}

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/boutique", label: "Boutique" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="border-b border-border bg-card/85">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="grid size-9 place-items-center rounded-lg bg-primary">
            <span className="font-display text-lg font-bold text-primary-foreground">S</span>
          </div>
          <span className="font-display text-xl font-bold tracking-tight">SAICOMEDIA</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full border border-primary/20 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/5 sm:inline-flex"
          >
            <span className="size-2 rounded-full bg-mint" />
            WhatsApp
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Devis gratuit
          </Link>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground/70">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 text-sm sm:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <div className="grid size-8 place-items-center rounded-lg bg-primary-foreground/10">
              <span className="font-display font-bold text-primary-foreground">S</span>
            </div>
            <span className="font-display font-bold text-primary-foreground">SAICOMEDIA</span>
          </div>
          <p className="leading-relaxed">
            Sécurité, surveillance et électricité solaire pour les particuliers et entreprises en Côte d'Ivoire.
          </p>
        </div>
        <div>
          <div className="mb-3 font-semibold text-primary-foreground">Produits</div>
          <ul className="space-y-2">
            <li>
              <Link to="/boutique">Caméras IP</Link>
            </li>
            <li>
              <Link to="/boutique">Alarmes</Link>
            </li>
            <li>
              <Link to="/boutique">Contrôle d'accès</Link>
            </li>
            <li>
              <Link to="/boutique">Solaire</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="mb-3 font-semibold text-primary-foreground">Services</div>
          <ul className="space-y-2">
            <li>Installation</li>
            <li>Maintenance</li>
            <li>Audit sécurité</li>
            <li>Visioconférence</li>
          </ul>
        </div>
        <div>
          <div className="mb-3 font-semibold text-primary-foreground">Contact</div>
          <ul className="space-y-2">
            <li>Abidjan, Côte d'Ivoire</li>
            <li>
              <a href="tel:07834412">Infoline 07 83 44 12</a>
            </li>
            <li>
              <a href="tel:0101014243">01 01 01 42 43</a>
            </li>
            <li>
              <a href="mailto:abs@saicomedia.com">abs@saicomedia.com</a>
            </li>
            <li>
              <Link to="/contact" className="font-semibold text-sun">
                Page contact →
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl justify-between px-6 py-5 text-xs">
          <span>© 2026 SAICOMEDIA. Tous droits réservés.</span>
          <span>Conçu à Abidjan</span>
        </div>
      </div>
    </footer>
  );
}
