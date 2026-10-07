import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { ImagePanel, PageHero } from "../components/site";
import intBackground from "../../image_asstes/int_bg.png";
import { siteUrl } from "../lib/site-config";

const galleryAssets = import.meta.glob("../../gallery_asstes/*.{jpeg,JPEG,png}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const image = (name: string) => galleryAssets[`../../gallery_asstes/${name}`];
export const Route = createFileRoute("/gallery")({
  head: () => ({
    links: [{ rel: "canonical", href: `${siteUrl}/gallery` }],
    meta: [
      { title: "Inside NAWAAB | Restaurant & Food Gallery" },
      {
        name: "description",
        content: "Step inside NAWAAB through our food, kitchen and restaurant gallery.",
      },
      { property: "og:title", content: "Inside NAWAAB" },
      { property: "og:description", content: "Biryani, fire, flavour and warm hospitality." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Gallery,
});
const cats = [
  "All",
  "Biryani",
  "Tandoor",
  "Indian",
  "Chinese",
  "Drinks",
  "Interior",
  "Restaurant",
  "Dining",
];
const pics = [
  ["barrackpore style biryani in handi.jpg.jpeg", "Biryani"],
  ["Moody Mutton Biryani Feast.png", "Biryani"],
  ["Cheesy Grilled Chicken Drumsticks with Chutney.png", "Tandoor"],
  ["chicken tikka masala.jpg.jpeg", "Tandoor"],
  ["malai_tangri.jpg.jpeg", "Tandoor"],
  ["tandoor.png", "Tandoor"],
  ["IMG_9717.JPG", "Tandoor"],
  ["IMG_9755.JPG", "Tandoor"],
  ["IMG_9781.JPG", "Tandoor"],
  ["IMG_9853.JPG", "Tandoor"],
  ["butter_chicken.jpg.jpeg", "Indian"],
  ["Rustic Spiced Chicken in Gravy.png", "Indian"],
  ["Warm Pistachio Kheer Still Life.png", "Indian"],
  ["IMG_9720.JPG", "Indian"],
  ["IMG_9809.JPG", "Indian"],
  ["IMG_9811.JPG", "Indian"],
  ["IMG_9824.JPG", "Indian"],
  ["IMG_9829.JPG", "Indian"],
  ["IMG_9854.JPG", "Indian"],
  ["mutton_dakB.jpg.jpeg", "Indian"],
  ["chilli_chicken.jpeg", "Chinese"],
  ["20_hot garlic fish.jpg.jpeg", "Chinese"],
  ["Mixed_rice.jpg.jpeg", "Chinese"],
  ["wok.jpg.jpeg", "Chinese"],
  ["IMG_9812.JPG", "Chinese"],
  ["IMG_9827.JPG", "Chinese"],
  ["Green Lime Cocktail with Spiral Garnish (1).png", "Drinks"],
  ["Midnight Blue Layered Cocktail.png", "Drinks"],
  ["Mint Mojito on a Leather Coaster.png", "Drinks"],
  ["Strawberry Mint Mojito Still Life.png", "Drinks"],
  ["Tropical Sunrise Cocktail Still Life.png", "Drinks"],
  ["Tropical Sunset Layered Cocktail.png", "Drinks"],
  ["IMG_7273.jpeg", "Interior"],
  ["IMG_7274.jpeg", "Interior"],
  ["IMG_7275.jpeg", "Interior"],
  ["IMG_7276.jpeg", "Interior"],
  ["IMG_7277.jpeg", "Interior"],
  ["IMG_7278.jpeg", "Interior"],
  ["IMG_7279.jpeg", "Interior"],
  ["IMG_7280.jpeg", "Interior"],
  ["IMG_7281.jpeg", "Interior"],
  ["IMG_7282.jpeg", "Interior"],
  ["IMG_7283.jpeg", "Restaurant"],
  ["IMG_7284.jpeg", "Restaurant"],
  ["IMG_7285.jpeg", "Restaurant"],
  ["IMG_7286.jpeg", "Restaurant"],
  ["IMG_7287.jpeg", "Restaurant"],
  ["IMG_7295.jpeg", "Dining"],
  ["IMG_7300.jpeg", "Dining"],
  ["IMG_7301.jpeg", "Dining"],
].map(([file, cat], index) => ({
  id: `gallery-${String(index + 1).padStart(2, "0")}`,
  cat,
  label: `${cat} image ${index + 1}`,
  src: image(file),
}));
function Gallery() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<number | null>(null);
  const visible = pics.filter((p) => filter === "All" || p.cat === filter);
  return (
    <main>
      <PageHero
        eyebrow="A glimpse within"
        title="Inside NAWAAB"
        copy="Food, fire, warm light and the tables where memories are shared."
        imageId="gallery-hero"
        imageSrc={intBackground}
        imageClassName="brightness-95 saturate-75 opacity-95"
      />
      <section className="section-pad bg-cream px-5 text-espresso md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex snap-x snap-proximity gap-2 overflow-x-auto pb-2 md:mb-10">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`snap-start whitespace-nowrap border px-4 py-3 text-[10px] uppercase tracking-widest ${filter === c ? "border-maroon bg-maroon text-cream" : "border-espresso/20"}`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="columns-1 gap-3 sm:columns-2 md:columns-3 lg:columns-4">
            {visible.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                className="mb-3 block w-full break-inside-avoid text-left"
              >
                <ImagePanel
                  id={p.id}
                  label={p.label}
                  imageSrc={p.src}
                  className={i % 4 === 0 ? "min-h-72 md:min-h-96" : "min-h-56 md:min-h-64"}
                />
              </button>
            ))}
          </div>
        </div>
      </section>
      {active !== null && visible[active] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery lightbox"
          className="fixed inset-0 z-[70] grid place-items-center bg-espresso/95 p-5"
        >
          <button
            aria-label="Close lightbox"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 grid size-11 place-items-center text-cream md:right-6 md:top-6"
          >
            <X />
          </button>
          <button
            aria-label="Previous image"
            onClick={() => setActive((active - 1 + visible.length) % visible.length)}
            className="absolute left-1 grid size-11 place-items-center text-primary md:left-4"
          >
            <ChevronLeft className="size-10" />
          </button>
          <ImagePanel
            id={`${visible[active].id}-large`}
            label={visible[active].label}
            imageSrc={visible[active].src}
            className="h-[68vh] w-[calc(100vw-5.5rem)] max-w-[900px] md:h-[75vh] md:w-[min(900px,80vw)]"
          />
          <button
            aria-label="Next image"
            onClick={() => setActive((active + 1) % visible.length)}
            className="absolute right-1 grid size-11 place-items-center text-primary md:right-4"
          >
            <ChevronRight className="size-10" />
          </button>
        </div>
      )}
    </main>
  );
}
