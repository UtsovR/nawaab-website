import { Link } from "@tanstack/react-router";
import { Menu, X, Instagram, Facebook, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import { socialLinks } from "../lib/site-config";
import nawaabLogo from "../../logo/nawaab-logo-optimized.png";

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Menu", "/menu"],
  ["Specialties", "/specialties"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
] as const;

export function Brand({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <Link
        to="/"
        aria-label="NAWAAB home"
        className="flex h-16 w-40 items-center justify-center overflow-hidden sm:h-20 sm:w-52"
      >
        <img
          src={nawaabLogo}
          width={208}
          height={80}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          alt="NAWAAB — The Taste of Royals"
          className="h-full w-full object-cover object-center brightness-0 invert"
        />
      </Link>
    );
  }

  return (
    <Link
      to="/"
      aria-label="NAWAAB home"
      className="flex h-16 w-40 items-center justify-center overflow-hidden sm:h-20 sm:w-52"
    >
      <img
        src={nawaabLogo}
        width={208}
        height={80}
        loading="lazy"
        decoding="async"
        alt="NAWAAB — The Taste of Royals"
        className="h-full w-full object-cover object-center brightness-0 invert"
      />
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-lg border border-primary/30 bg-surface-glass px-3 shadow-royal backdrop-blur-xl sm:px-5 lg:grid lg:h-[92px] lg:grid-cols-[1fr_auto_1fr]"
      >
        <div className="hidden items-center gap-7 lg:flex">
          {nav.slice(0, 3).map(([label, to]) => (
            <NavLink key={to} to={to}>
              {label}
            </NavLink>
          ))}
        </div>
        <Brand compact />
        <div className="hidden items-center justify-end gap-6 lg:flex">
          {nav.slice(3).map(([label, to]) => (
            <NavLink key={to} to={to}>
              {label}
            </NavLink>
          ))}
          <Button asChild variant="royal" size="lg">
            <Link to="/reservation">Reserve</Link>
          </Button>
        </div>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
          className="grid size-11 place-items-center rounded-md text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div
          id="mobile-navigation"
          className="mx-auto mt-2 max-w-7xl rounded-lg border border-primary/30 bg-espresso p-4 shadow-royal lg:hidden"
        >
          <div className="grid gap-1">
            {nav.map(([label, to]) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className="border-b border-border px-2 py-3 text-sm text-cream"
              >
                {label}
              </Link>
            ))}
            <Button asChild variant="royal" size="lg" className="mt-4">
              <Link to="/reservation" onClick={() => setOpen(false)}>
                Reserve Table
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, children }: { to: (typeof nav)[number][1]; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="group relative py-2 text-xs uppercase tracking-[0.14em] text-cream transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <span>{children}</span>
      <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-primary transition-transform group-hover:scale-x-100" />
    </Link>
  );
}

export function ImagePanel({
  id,
  label,
  className = "",
  children,
  imageSrc,
  imageSrcSet,
  imageSizes,
  imageClassName,
}: {
  id: string;
  label: string;
  className?: string;
  children?: ReactNode;
  imageSrc?: string | undefined;
  imageSrcSet?: string | undefined;
  imageSizes?: string | undefined;
  imageClassName?: string | undefined;
}) {
  return (
    <div
      id={id}
      role={imageSrc ? undefined : "img"}
      aria-label={imageSrc ? undefined : label}
      className={cn("image-grain group relative min-h-64 overflow-hidden", className)}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          srcSet={imageSrcSet}
          sizes={imageSizes}
          alt={label}
          className={cn("absolute inset-0 size-full object-cover", imageClassName)}
          loading={id.includes("hero") ? "eager" : "lazy"}
          fetchPriority={id.includes("hero") ? "high" : "auto"}
          decoding="async"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-transparent to-espresso/10" />
      {children}
    </div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  copy,
  light = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  light?: boolean;
}) {
  return (
    <div className="mb-8 max-w-2xl md:mb-10">
      <div className="mb-4 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">
        <span className="h-px w-10 bg-primary" />
        {eyebrow}
      </div>
      <h2
        className={cn(
          "text-[clamp(2.25rem,10vw,3rem)] font-semibold leading-none md:text-6xl",
          light ? "text-espresso" : "text-cream",
        )}
      >
        {title}
      </h2>
      {copy && (
        <p
          className={cn(
            "mt-5 max-w-xl text-sm leading-7",
            light ? "text-espresso/70" : "text-muted-foreground",
          )}
        >
          {copy}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
  imageId,
  imageSrc,
  imageClassName,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  imageId: string;
  imageSrc?: string;
  imageClassName?: string;
}) {
  return (
    <section className="relative min-h-[460px] overflow-hidden pt-20 md:min-h-[72vh] md:pt-28">
      <ImagePanel
        id={imageId}
        label={`${title} background at NAWAAB`}
        imageSrc={imageSrc}
        imageClassName={imageClassName ?? "brightness-75 saturate-50 opacity-65"}
        className="absolute inset-0 min-h-full slow-zoom"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/75 to-transparent" />
      <div className="relative mx-auto flex min-h-[390px] max-w-7xl items-end px-5 pb-10 md:min-h-[62vh] md:px-8 md:pb-16">
        <div className="reveal max-w-3xl">
          <p className="mb-5 text-xs uppercase tracking-[0.28em] text-primary">{eyebrow}</p>
          <h1 className="text-[clamp(2.75rem,13vw,4.5rem)] font-semibold leading-[.92] text-cream md:text-7xl lg:text-8xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-7 text-cream/75 md:text-base">{copy}</p>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-primary/20 bg-espresso px-5 py-10 text-cream md:py-16">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Brand />
          <p className="mt-6 max-w-xs text-sm leading-6 text-muted-foreground">
            Biryani at heart. Royal flavours on every plate.
          </p>
        </div>
        <div>
          <FooterTitle>Explore</FooterTitle>
          {nav.map(([l, t]) => (
            <Link
              key={t}
              to={t}
              className="mb-2 block text-sm text-muted-foreground hover:text-primary"
            >
              {l}
            </Link>
          ))}
        </div>
        <div>
          <FooterTitle>Visit</FooterTitle>
          <p className="text-sm leading-6 text-muted-foreground">
            Southern Avenue
            <br />
            Kolkata – 700026
          </p>
          <a href="tel:+919230004309" className="mt-3 block text-sm hover:text-primary">
            92300 04309
          </a>
          <a
            href="mailto:support@nawaabthetasteofroyals.com"
            className="mt-2 block break-all text-xs text-muted-foreground hover:text-primary"
          >
            support@nawaabthetasteofroyals.com
          </a>
        </div>
        <div>
          <FooterTitle>Stay close</FooterTitle>
          <div className="flex gap-3">
            <Social label="Instagram" href={socialLinks.instagram}>
              <Instagram />
            </Social>
            <Social label="Facebook" href={socialLinks.facebook}>
              <Facebook />
            </Social>
            <Social label="Google Business" href={socialLinks.maps}>
              <MapPin />
            </Social>
          </div>
          <Button asChild variant="royal" size="lg" className="mt-6">
            <Link to="/reservation">
              Reserve Your Table <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-3 border-t border-primary/20 pt-6 text-[10px] uppercase tracking-[0.15em] text-muted-foreground sm:flex-row sm:justify-between">
        <span>© 2026 NAWAAB – The Taste of Royals.</span>
        <span>All Rights Reserved.</span>
      </div>
    </footer>
  );
}
function FooterTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-5 font-sans text-xs uppercase tracking-[0.2em] text-primary">{children}</h3>
  );
}
function Social({ label, href, children }: { label: string; href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid size-10 place-items-center rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      {children}
    </a>
  );
}

export function ContactActions() {
  return (
    <div className="grid gap-3 sm:flex sm:flex-wrap">
      <Button asChild variant="royal" className="w-full sm:w-auto">
        <a href="tel:+919230004309">
          <Phone />
          Call
        </a>
      </Button>
      <Button asChild variant="royalOutline" className="w-full sm:w-auto">
        <a href="mailto:support@nawaabthetasteofroyals.com">
          <Mail />
          Email
        </a>
      </Button>
      <Button asChild variant="royalOutline" className="w-full sm:w-auto">
        <a href="https://wa.me/919230004309" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
      </Button>
      <Button asChild variant="royalOutline" className="w-full sm:w-auto">
        <a href={socialLinks.maps} target="_blank" rel="noopener noreferrer">
          <MapPin />
          Directions
        </a>
      </Button>
    </div>
  );
}

export function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-lg border border-primary/25 bg-card">
      <iframe
        title="NAWAAB location on Google Maps"
        className="h-64 w-full grayscale-[20%] md:h-80"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps?q=10C%20Southern%20Avenue%20Kolkata%20700026&output=embed"
      />
    </div>
  );
}
