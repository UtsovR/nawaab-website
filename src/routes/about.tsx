import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionTitle } from "../components/site";
import { createSeo } from "../lib/site-config";
import aboutDishes768 from "../../image_asstes/optimized/about-dishes-768.webp";
import aboutDishes1280 from "../../image_asstes/optimized/about-dishes-1280.webp";
import aboutDishes1600 from "../../image_asstes/optimized/about-dishes-1600.webp";
import aboutDishes1920 from "../../image_asstes/optimized/about-dishes-1920.webp";
import tandoorKitchenImage from "../../image_asstes/optimized/tandoor_kitchen.png.webp";
export const Route = createFileRoute("/about")({
  head: () =>
    createSeo({
      path: "/about",
      title: "About NAWAAB – The Taste of Royals | Kolkata",
      description:
        "Discover NAWAAB – The Taste of Royals, a premium Kolkata dining destination where signature Biryani, Indian classics and warm hospitality come together.",
    }),
  component: About,
});
function About() {
  return (
    <main>
      <PageHero
        eyebrow="Our story"
        title="A Royal Take on Everyday Cravings"
        copy="NAWAAB was created around one simple idea: memorable food should bring people together. At the heart of our kitchen is Biryani, supported by smoky Tandoor dishes, rich Indian favourites and Indo-Chinese classics."
        imageId="about-biryani"
      />
      <section className="relative flex min-h-[560px] items-center overflow-hidden sm:min-h-[580px] md:min-h-[600px] lg:min-h-[680px] xl:min-h-[720px]">
        <picture className="absolute inset-0 size-full">
          <source
            type="image/webp"
            srcSet={`${aboutDishes768} 768w, ${aboutDishes1280} 1280w, ${aboutDishes1600} 1600w, ${aboutDishes1920} 1920w`}
            sizes="100vw"
          />
          <img
            src={aboutDishes1600}
            alt="NAWAAB signature dishes and biryani"
            className="size-full object-cover object-[68%_center] sm:object-[64%_center] md:object-[60%_center] lg:object-center"
            loading="lazy"
            decoding="async"
            width={1600}
            height={560}
          />
        </picture>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,7,4,0.86)_0%,rgba(18,7,4,0.68)_55%,rgba(18,7,4,0.3)_100%)] md:bg-[linear-gradient(90deg,rgba(18,7,4,0.8)_0%,rgba(18,7,4,0.6)_38%,rgba(18,7,4,0.2)_68%,rgba(18,7,4,0.05)_100%)]" />
        <div className="relative z-10 w-full px-5 py-8 md:px-8 lg:px-[7vw]">
          <div className="max-w-[580px]">
            <div className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-primary sm:text-xs">
              <span className="h-px w-10 bg-primary" />
              Our Story
            </div>
            <h2 className="text-[clamp(2.35rem,9vw,3.6rem)] font-semibold leading-[1.03] text-cream lg:text-[clamp(3rem,5vw,5.5rem)]">
              Gathered around flavour
            </h2>
            <div className="mt-7 max-w-[560px] space-y-5 text-[15px] leading-[1.7] text-cream/85 sm:text-base">
              <p>
                Every plate is made to feel generous, considered and deeply satisfying — food for
                family meals, old friends and new celebrations.
              </p>
              <p>
                Our Biryani leads the table: aromatic, layered and made with the patience a
                memorable meal deserves.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionTitle eyebrow="Our Philosophy" title="Four promises, every service" />
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Freshly Prepared"],
              ["02", "Flavour First"],
              ["03", "Generous Portions"],
              ["04", "Warm Hospitality"],
            ].map(([n, t]) => (
              <div className="bg-background p-6 md:p-8" key={n}>
                <span className="text-xs text-primary">{n}</span>
                <h3 className="mt-8 text-3xl text-cream md:mt-10">{t}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-cream text-espresso">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionTitle light eyebrow="Our Kitchen" title="Made with care, finished with fire" />
          <img
            src={tandoorKitchenImage}
            alt="Inside the tandoor kitchen at NAWAAB"
            className="block h-auto w-full"
            loading="lazy"
            decoding="async"
            width={1600}
            height={900}
          />
        </div>
      </section>
    </main>
  );
}
