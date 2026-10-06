import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, MapPin, Quote } from "lucide-react";
import { Button } from "../components/ui/button";
import { ContactActions, ImagePanel, MapEmbed, SectionTitle } from "../components/site";
import { ReservationForm } from "../components/forms";
import butterChicken from "../../image_asstes/butter_chicken.jpeg";
import biryaniImage from "../../image_asstes/biriyani.JPG";
import biryaniBanner from "../../image_asstes/biriyani_bg.png";
import muttonBiryani from "../../image_asstes/biri_square.png";
import chickenBiryani from "../../image_asstes/chicken_biri.png";
import chickenTikka from "../../image_asstes/chicken_tikka.jpeg";
import chilliChicken from "../../image_asstes/chilli_chicken.jpeg";
import homepageBanner from "../../image_asstes/homepage_bg.jpeg";
import mixedRice from "../../image_asstes/Mixed_rice.jpeg";
import pulaoMangsho from "../../image_asstes/pulao_mangsho.jpeg";
import signatureBiryani from "../../image_asstes/signature_biriyani.jpeg";
import specialMutton from "../../image_asstes/special_mutton.png";
import stuffedAfganiChicken from "../../image_asstes/afgani.png";
import tandoorImage from "../../image_asstes/tandoor.png";
import { siteDescription } from "../lib/site-config";

const description =
  "Discover NAWAAB – The Taste of Royals in Kolkata. Enjoy signature Biryani, smoky Tandoor dishes, authentic Indian favourites and Indo-Chinese classics.";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "NAWAAB – The Taste of Royals | Biryani, Indian, Tandoor & Chinese Restaurant in Kolkata",
      },
      { name: "description", content: description },
      { name: "description", content: siteDescription },
      {
        title:
          "NAWAAB – The Taste of Royals | Biryani, Tandoor, Indian & Chinese Restaurant in Kolkata",
      },
      { property: "og:title", content: "NAWAAB – The Taste of Royals" },
      { property: "og:description", content: description },
      { property: "og:description", content: siteDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});
const specialties = [
  ["biryani-specialty", "Biryani", "The Heart of NAWAAB", "biryani"],
  ["tandoor-section", "Tandoor", "Straight From The Fire", "tandoor"],
  ["indian-section", "Indian", "Rich, Comforting Classics", "indian"],
] as const;
const dishes = [
  ["signature-biryani", "NAWAAB Special Biryani", "Signature"],
  ["mutton-biryani", "Mutton Biryani", "Bestseller"],
  ["chicken-biryani", "Chicken Biryani", "Biryani"],
  ["tandoori-chicken", "Stuffed Afgani Chicken", "Tandoor"],
  ["chicken-tikka", "Chicken Tikka", "Tandoor"],
  ["butter-chicken", "Butter Chicken", "Indian"],
  ["chilli-chicken", "Chilli Chicken", "Chinese"],
  ["mixed-fried-rice", "Mixed Fried Rice", "Chinese"],
] as const;
function Home() {
  return (
    <main>
      <section className="relative min-h-[94vh] overflow-hidden pt-28">
        <ImagePanel
          id="hero-biryani"
          label="Hero Biryani Image"
          imageSrc={homepageBanner}
          className="absolute inset-0 min-h-full slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/75 to-transparent" />
        <div className="relative mx-auto flex min-h-[82vh] max-w-7xl items-center px-5 md:px-8">
          <div className="reveal max-w-4xl">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-primary">
              NAWAAB — The Taste of Royals
            </p>
            <h1 className="max-w-4xl text-6xl font-semibold leading-[.88] text-cream md:text-8xl lg:text-9xl">
              <span className="text-primary">Biryani</span> is the Heart of NAWAAB
            </h1>
            <p className="mt-7 max-w-2xl text-sm leading-7 text-cream/75 md:text-base">
              Experience aromatic Biryani, smoky Tandoor favourites, rich Indian classics and bold
              Indo-Chinese flavours, prepared with care and served with a royal touch.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="royal" size="lg">
                <Link to="/menu">
                  View Menu <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="royalOutline" size="lg">
                <Link to="/reservation">Reserve a Table</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad bg-cream text-espresso">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-12 md:px-8">
          <div className="md:col-span-7">
            <ImagePanel
              id="biryani-heart"
              label="Signature Biryani Image"
              imageSrc={signatureBiryani}
              imageClassName="object-top"
              className="min-h-[520px]"
            />
          </div>
          <div className="flex flex-col justify-center md:col-span-5">
            <SectionTitle
              light
              eyebrow="The soul of our kitchen"
              title="Biryani – The Heart of NAWAAB"
              copy="At NAWAAB, Biryani is not just another dish on the menu. Fragrant basmati rice, carefully balanced spices and beautifully cooked meat come together to create a Biryani made to be remembered."
            />
            <div className="grid grid-cols-2 gap-3 border-y border-espresso/15 py-5 text-[10px] uppercase tracking-[.2em] sm:grid-cols-4">
              <span>Slow Cooked</span>
              <span>Aromatic</span>
              <span>Richly Spiced</span>
              <span>Royally Served</span>
            </div>
            <Button asChild variant="royal" size="lg" className="mt-7 self-start">
              <a href="/menu#biryani">Explore Our Biryani</a>
            </Button>
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionTitle eyebrow="From our kitchen" title="Our Specialities" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {specialties.map(([id, title, tag, hash], i) => (
              <Link
                key={id}
                to="/menu"
                hash={hash}
                className={i === 0 ? "md:col-span-2 lg:row-span-2" : ""}
              >
                <ImagePanel
                  id={id}
                  label={`${title} Image`}
                  imageSrc={
                    id === "biryani-specialty"
                      ? biryaniImage
                      : id === "tandoor-section"
                        ? tandoorImage
                        : id === "indian-section"
                          ? pulaoMangsho
                          : undefined
                  }
                  className={i === 0 ? "min-h-[480px]" : "min-h-[280px]"}
                >
                  <div className="absolute inset-x-6 top-6">
                    <p className="text-[10px] uppercase tracking-[.2em] text-primary">{tag}</p>
                    <h3 className="mt-2 text-4xl text-cream">{title}</h3>
                  </div>
                  <ChevronRight className="absolute bottom-14 right-5 text-primary" />
                </ImagePanel>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-cream text-espresso">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionTitle light eyebrow="House favourites" title="Our Signature Dishes" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {dishes.map(([id, name, label]) => (
              <article key={id} className="border-b border-espresso/20 pb-5">
                <ImagePanel
                  id={id}
                  label={`${name} Image`}
                  imageSrc={
                    name === "NAWAAB Special Biryani"
                      ? specialMutton
                      : name === "Chicken Biryani"
                        ? chickenBiryani
                        : name === "Stuffed Afgani Chicken"
                          ? stuffedAfganiChicken
                          : name === "Mutton Biryani"
                            ? muttonBiryani
                            : name === "Chicken Tikka"
                              ? chickenTikka
                              : name === "Butter Chicken"
                                ? butterChicken
                                : name === "Chilli Chicken"
                                  ? chilliChicken
                                  : name === "Mixed Fried Rice"
                                    ? mixedRice
                                    : undefined
                  }
                  imageClassName={
                    name === "Stuffed Afgani Chicken" ? "object-[center_20%]" : undefined
                  }
                  className="min-h-64"
                />
                <p className="mt-5 text-[10px] uppercase tracking-[.2em] text-maroon">{label}</p>
                <h3 className="mt-2 text-2xl">{name}</h3>
                <p className="mt-2 text-xs text-espresso/60">
                  Richly prepared and served with the NAWAAB touch.
                </p>
              </article>
            ))}
          </div>
          <Button asChild variant="royal" size="lg" className="mt-10">
            <Link to="/menu">View Full Menu</Link>
          </Button>
        </div>
      </section>
      <section className="relative min-h-[560px] overflow-hidden">
        <ImagePanel
          id="royal-banner"
          label="Biryani Close-up"
          imageSrc={biryaniBanner}
          className="absolute inset-0 min-h-full"
        />
        <div className="absolute inset-0 bg-espresso/65" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-espresso/90" />
        <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-center justify-center px-5 text-center">
          <div>
            <p className="text-xs uppercase tracking-[.28em] text-primary">Your table awaits</p>
            <h2 className="mt-4 text-5xl text-cream md:text-7xl">Hungry for Something Royal?</h2>
            <p className="mx-auto mt-5 max-w-xl text-sm text-cream/75">
              Your favourite Biryani, kebabs, Indian curries and Indo-Chinese classics are waiting.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild variant="ivory" size="lg">
                <Link to="/menu">View Menu</Link>
              </Button>
              <Button asChild variant="royalOutline" size="lg">
                <Link to="/reservation">Reserve a Table</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad bg-cream text-espresso">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionTitle light eyebrow="Food, fire & hospitality" title="Inside NAWAAB" />
          <div className="columns-2 gap-3 md:columns-4">
            {Array.from({ length: 8 }, (_, i) => (
              <ImagePanel
                key={i}
                id={`gallery-0${i + 1}`}
                label={`Food Gallery Image ${i + 1}`}
                className={`mb-3 break-inside-avoid ${i % 3 === 0 ? "min-h-96" : "min-h-64"}`}
              />
            ))}
          </div>
          <Button asChild variant="royal" size="lg" className="mt-8">
            <Link to="/gallery">View Gallery</Link>
          </Button>
        </div>
      </section>
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionTitle eyebrow="Shared at our tables" title="What Our Guests Say" />
          <div className="flex snap-x gap-5 overflow-x-auto pb-5">
            {[
              "The Biryani was aromatic and perfectly cooked. The kebabs were incredibly juicy too. Definitely visiting again.",
              "Warm hospitality, generous portions and a Biryani worth coming back for.",
              "A wonderful dinner — rich Indian flavours and a beautifully welcoming atmosphere.",
            ].map((q, i) => (
              <article
                key={q}
                className="min-w-[85%] snap-start rounded-md border border-primary/20 bg-card p-7 sm:min-w-[48%] lg:min-w-[31%]"
              >
                <div className="text-primary">★★★★★</div>
                <Quote className="mt-8 text-primary/50" />
                <p className="mt-4 text-sm leading-7 text-cream/80">“{q}”</p>
                <div className="mt-7 border-t border-border pt-4">
                  <h3 className="font-sans text-sm">Guest {i + 1}</h3>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    Google Review • Recently
                  </p>
                </div>
              </article>
            ))}
          </div>
          <Button asChild variant="royalOutline">
            <a
              href="https://www.google.com/search?q=NAWAAB+Southern+Avenue+Kolkata+reviews"
              target="_blank"
              rel="noreferrer"
            >
              Read More Reviews
            </a>
          </Button>
        </div>
      </section>
      <section className="section-pad bg-cream text-espresso">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 md:px-8">
          <div>
            <SectionTitle light eyebrow="Southern Avenue, Kolkata" title="Visit NAWAAB" />
            <h3 className="text-2xl">NAWAAB – The Taste of Royals</h3>
            <p className="mt-5 flex gap-3 text-sm leading-7">
              <MapPin className="mt-1 shrink-0 text-maroon" />
              10C, Southern Avenue, Opposite Nabanalanda School, Kolkata – 700026
            </p>
            <p className="mt-4 text-sm text-espresso/60">Restaurant timings: To be updated</p>
            <div className="mt-7">
              <ContactActions />
            </div>
          </div>
          <MapEmbed />
        </div>
      </section>
      <section className="section-pad bg-maroon">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.8fr_1.2fr] md:px-8">
          <SectionTitle
            eyebrow="Good food, shared"
            title="Reserve Your Table"
            copy="Good food tastes even better when shared. Reserve your table at NAWAAB for your next family meal, dinner with friends or special celebration."
          />
          <ReservationForm />
        </div>
      </section>
    </main>
  );
}
