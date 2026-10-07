import { createFileRoute, Link } from "@tanstack/react-router";
import { ImagePanel, PageHero } from "../components/site";
import { Button } from "../components/ui/button";
import biriSpe from "../../image_asstes/optimized/biri_spe.png.webp";
import biryaniBackground from "../../image_asstes/optimized/biriyani_bg.png.webp";
import indianPlatter from "../../image_asstes/optimized/indian_platter.png.webp";
import indoChinese from "../../image_asstes/optimized/indo_chinese.png.webp";
import tandoorPlatter from "../../image_asstes/optimized/tandoor_platter.png.webp";
import { createSeo } from "../lib/site-config";
export const Route = createFileRoute("/specialties")({
  head: () =>
    createSeo({
      path: "/specialties",
      title: "NAWAAB Specialities | Biryani, Tandoor & Indian Cuisine",
      description:
        "Explore NAWAAB's signature Biryani, smoky Tandoor dishes, Indian classics and Indo-Chinese favourites in Kolkata.",
    }),
  component: Page,
});
const blocks = [
  [
    "Biryani – The Heart of NAWAAB",
    "Fragrant basmati rice, carefully balanced spices and beautifully cooked meat, layered and slow-cooked for a finish worth remembering.",
    "specialty-biryani",
    "NAWAAB Special Biryani • Mutton Biryani • Chicken Biryani",
    "biryani",
  ],
  [
    "Tandoor",
    "Smoky, succulent favourites taken straight from the fire.",
    "specialty-tandoor",
    "Stuffed Afgani Chicken • Chicken Tikka • Paneer Tikka",
    "tandoor",
  ],
  [
    "Indian",
    "Rich, comforting classics prepared for sharing.",
    "specialty-indian",
    "Butter Chicken • Rogan Josh • Dal Makhani",
    "indian",
  ],
  [
    "Indo-Chinese",
    "Vibrant wok-fired flavours with familiar Kolkata spirit.",
    "specialty-chinese",
    "Chilli Chicken • Hakka Noodles • Mixed Fried Rice",
    "chinese",
  ],
] as const;
function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Crafted with purpose"
        title="Our Specialities"
        copy="One kitchen, four culinary stories — always beginning with Biryani."
        imageId="specialties-hero"
        imageSrc={biryaniBackground}
      />
      <div className="bg-cream text-espresso">
        {blocks.map(([title, copy, img, dishes, hash], i) => (
          <section key={title} className="section-pad border-b border-espresso/10">
            <div
              className={`mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-2 md:px-8 ${i % 2 ? "" : ""}`}
            >
              <ImagePanel
                id={img}
                label={`${title} Image`}
                imageSrc={
                  i === 0
                    ? biriSpe
                    : i === 1
                      ? tandoorPlatter
                      : i === 2
                        ? indianPlatter
                        : i === 3
                          ? indoChinese
                          : undefined
                }
                className={i === 0 ? "min-h-96 md:min-h-[650px]" : "min-h-80 md:min-h-[430px]"}
              />
              <div className={i % 2 ? "md:-order-1" : ""}>
                <p className="text-[10px] uppercase tracking-[.25em] text-maroon">
                  {i === 0 ? "The heart of our kitchen" : `Speciality ${i + 1}`}
                </p>
                <h2
                  className={`mt-3 ${i === 0 ? "text-[clamp(3rem,14vw,4.5rem)] md:text-7xl" : "text-[clamp(2.5rem,12vw,3rem)]"}`}
                >
                  {title}
                </h2>
                <p className="mt-6 max-w-md text-sm leading-7 text-espresso/65">{copy}</p>
                <p className="mt-6 text-xs uppercase leading-6 tracking-[.1em] sm:tracking-[.12em]">
                  {dishes}
                </p>
                <Button asChild variant="royal" size="lg" className="mt-8 w-full sm:w-auto">
                  <Link to="/menu" hash={hash}>
                    Explore the Menu
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
