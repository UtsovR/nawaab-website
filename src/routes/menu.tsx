import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site";
import { menuNavigation, menuSections } from "../lib/restaurant-data";
import { createSeo } from "../lib/site-config";
import menuBackground from "../../image_asstes/optimized/our_menu_bg.png.webp";

export const Route = createFileRoute("/menu")({
  head: () =>
    createSeo({
      path: "/menu",
      title: "NAWAAB Menu | Biryani, Tandoor, Indian & Indo-Chinese",
      description:
        "Explore the NAWAAB menu featuring signature Biryani, Tandoor kebabs, Indian main courses, Indo-Chinese favourites, mocktails and desserts.",
    }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <main>
      <PageHero
        eyebrow="The royal table"
        title="Our Menu"
        copy="Biryani takes pride of place, followed by fire-kissed Tandoor, rich Indian classics and bold Indo-Chinese favourites."
        imageId="menu-hero"
        imageSrc={menuBackground}
      />

      <nav
        aria-label="Menu categories"
        className="sticky top-20 z-30 overflow-x-auto border-y border-primary/25 bg-espresso/95 px-4 shadow-lg backdrop-blur md:top-28"
      >
        <div className="mx-auto flex w-max min-w-full max-w-7xl snap-x snap-proximity gap-6 py-4 md:justify-center">
          {menuNavigation.map(([label, id]) => (
            <a
              key={label}
              href={`#${id}`}
              className="snap-start whitespace-nowrap py-1 text-[10px] font-semibold uppercase tracking-[.16em] text-cream transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-none"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      <div className="bg-espresso text-cream">
        {menuSections.map((section, sectionIndex) => (
          <section
            id={section.id}
            key={section.id}
            className="scroll-mt-48 border-b border-primary/20 px-5 section-pad md:px-8"
          >
            <div className="mx-auto grid max-w-7xl gap-8 md:gap-12 lg:grid-cols-[minmax(15rem,.65fr)_minmax(0,1.35fr)]">
              <header className="lg:sticky lg:top-48 lg:self-start">
                <p className="text-[10px] font-semibold uppercase tracking-[.28em] text-primary">
                  {section.eyebrow}
                </p>
                <h2
                  className={`mt-4 leading-[.92] ${sectionIndex === 0 ? "text-[clamp(2.75rem,13vw,4rem)] md:text-7xl" : "text-[clamp(2.25rem,10vw,3rem)] md:text-5xl"}`}
                >
                  {section.title}
                </h2>
                {section.intro && (
                  <p className="mt-6 max-w-sm text-sm leading-7 text-cream/70">{section.intro}</p>
                )}
              </header>

              <div className="grid gap-10 md:grid-cols-2">
                {section.subcategories.map((subcategory) => (
                  <section key={subcategory.title}>
                    <h3 className="border-b border-primary/45 pb-3 text-xl leading-tight text-primary">
                      {subcategory.title}
                    </h3>
                    <ul className="mt-2 divide-y divide-cream/10">
                      {subcategory.items.map((item) => (
                        <li
                          key={item.name}
                          className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 py-3 text-sm leading-5"
                        >
                          <span className="min-w-0 break-words text-cream/90">{item.name}</span>
                          <span className="whitespace-nowrap font-semibold tabular-nums text-primary">
                            ₹{item.price}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
