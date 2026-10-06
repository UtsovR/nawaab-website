import { Link } from "@tanstack/react-router";
import { Menu, X, Instagram, Facebook, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import nawaabLogo from "../../logo/NAWAAB_LOGO.png";

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
        className="flex h-20 w-52 items-center justify-center overflow-hidden"
      >
        <img
          src={nawaabLogo}
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
      className="flex h-20 w-52 items-center justify-center overflow-hidden"
    >
      <img
        src={nawaabLogo}
        alt="NAWAAB — The Taste of Royals"
        className="h-full w-full object-cover object-center brightness-0 invert"
      />
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-[92px] max-w-7xl items-center justify-between rounded-lg border border-primary/30 bg-surface-glass px-5 shadow-royal backdrop-blur-xl lg:grid lg:grid-cols-[1fr_auto_1fr]"
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
          onClick={() => setOpen(!open)}
          className="grid size-11 place-items-center text-cream lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-lg border border-primary/30 bg-espresso p-5 shadow-royal lg:hidden">
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
      className="group relative py-2 text-xs uppercase tracking-[0.14em] text-cream transition-colors hover:text-primary"
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
  imageClassName,
}: {
  id: string;
  label: string;
  className?: string;
  children?: ReactNode;
  imageSrc?: string;
  imageClassName?: string;
}) {
  return (
    <div
      id={id}
      role="img"
      aria-label={`${label} placeholder`}
      className={cn("image-grain group relative min-h-64 overflow-hidden", className)}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt=""
          aria-hidden="true"
          className={cn("absolute inset-0 size-full object-cover", imageClassName)}
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
    <div className="mb-10 max-w-2xl">
      <div className="mb-4 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">
        <span className="h-px w-10 bg-primary" />
        {eyebrow}
      </div>
      <h2
        className={cn(
          "text-4xl font-semibold leading-none md:text-6xl",
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
    <section className="relative min-h-[72vh] overflow-hidden pt-28">
      <ImagePanel
        id={imageId}
        label={`${title} Image`}
        imageSrc={imageSrc}
        imageClassName={imageClassName ?? "brightness-75 saturate-50 opacity-65"}
        className="absolute inset-0 min-h-full slow-zoom"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/75 to-transparent" />
      <div className="relative mx-auto flex min-h-[62vh] max-w-7xl items-end px-5 pb-16 md:px-8">
        <div className="reveal max-w-3xl">
          <p className="mb-5 text-xs uppercase tracking-[0.28em] text-primary">{eyebrow}</p>
          <h1 className="text-5xl font-semibold leading-[.92] text-cream md:text-7xl lg:text-8xl">
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
    <footer className="border-t border-primary/20 bg-espresso px-5 py-16 text-cream">
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
            <Social
              label="Instagram"
              href="https://www.instagram.com/nawaab.restaurant?stkn=ZGQyNXdvbW93ZWM4"
            >
              <Instagram />
            </Social>
            <Social
              label="Facebook"
              href="https://www.facebook.com/share/1Heean9nWN/?mibextid=wwXIfr"
            >
              <Facebook />
            </Social>
            <Social label="Google Business" href="https://maps.app.goo.gl/ziqPZu6dyvv8KpSP8">
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
      className="grid size-10 place-items-center rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
    >
      {children}
    </a>
  );
}

export function ContactActions() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button asChild variant="royal">
        <a href="tel:+919230004309">
          <Phone />
          Call
        </a>
      </Button>
      <Button asChild variant="royalOutline">
        <a href="mailto:support@nawaabthetasteofroyals.com">
          <Mail />
          Email
        </a>
      </Button>
      <Button asChild variant="royalOutline">
        <a href="https://wa.me/919230004309" target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </Button>
      <Button asChild variant="royalOutline">
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=10C%20Southern%20Avenue%20Kolkata%20700026"
          target="_blank"
          rel="noreferrer"
        >
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
        className="h-80 w-full grayscale-[20%]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps?q=10C%20Southern%20Avenue%20Kolkata%20700026&output=embed"
      />
    </div>
  );
}
