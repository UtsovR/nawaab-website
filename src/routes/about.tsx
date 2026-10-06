import { createFileRoute } from "@tanstack/react-router";
import { ImagePanel, PageHero, SectionTitle } from "../components/site";
export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About NAWAAB – The Taste of Royals" },
      {
        name: "description",
        content: "Discover the story, philosophy and kitchen behind NAWAAB in Kolkata.",
      },
      { property: "og:title", content: "About NAWAAB" },
      { property: "og:description", content: "Biryani at heart, warm hospitality at every table." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
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
      <section className="section-pad bg-cream text-espresso">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-2 md:px-8">
          <ImagePanel
            id="restaurant-interior"
            label="Restaurant Interior"
            className="min-h-[500px]"
          />
          <div className="flex flex-col justify-center">
            <SectionTitle
              light
              eyebrow="Our Story"
              title="Gathered around flavour"
              copy="Every plate is made to feel generous, considered and deeply satisfying — food for family meals, old friends and new celebrations."
            />
            <p className="text-sm leading-7 text-espresso/65">
              Our Biryani leads the table: aromatic, layered and made with the patience a memorable
              meal deserves.
            </p>
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
              <div className="bg-background p-8" key={n}>
                <span className="text-xs text-primary">{n}</span>
                <h3 className="mt-10 text-3xl text-cream">{t}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-cream text-espresso">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionTitle light eyebrow="Our Kitchen" title="Made with care, finished with fire" />
          <div className="grid auto-rows-[230px] gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "biryani-preparation",
              "chef-image",
              "tandoor-kitchen",
              "kitchen-image",
              "food-plating",
            ].map((x, i) => (
              <ImagePanel
                id={x}
                label={x.replaceAll("-", " ")}
                key={x}
                className={i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
