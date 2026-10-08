import { createFileRoute, Link } from "@tanstack/react-router";
import { ContactActions, MapEmbed, PageHero, SectionTitle } from "../components/site";
import { ContactForm } from "../components/forms";
import { Button } from "../components/ui/button";
import { createSeo } from "../lib/site-config";
import visitNawaabImage from "../../image_asstes/optimized/v_nawaab.png.webp";
export const Route = createFileRoute("/contact")({
  head: () =>
    createSeo({
      path: "/contact",
      title: "Contact NAWAAB | Southern Avenue, Kolkata",
      description:
        "Contact and visit NAWAAB on Southern Avenue, Kolkata. Find our location, phone number and reserve your table directly through WhatsApp.",
    }),
  component: Contact,
});
function Contact() {
  return (
    <main>
      <PageHero
        eyebrow="Come dine with us"
        title="Visit NAWAAB"
        copy="A warm table, fragrant Biryani and royal flavours await on Southern Avenue."
        imageId="restaurant-exterior"
        imageSrc={visitNawaabImage}
        imageClassName="object-[60%_center] brightness-75 saturate-75 opacity-70"
      />
      <section className="section-pad bg-cream text-espresso">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 md:px-8">
          <div>
            <SectionTitle
              light
              eyebrow="NAWAAB – The Taste of Royals"
              title="Find your way to the table"
            />
            <address className="not-italic text-sm leading-7">
              10C, Southern Avenue
              <br />
              Opposite Nabanalanda School
              <br />
              Kolkata – 700026
            </address>
            <p className="mt-5 text-sm">Restaurant timings: To be updated</p>
            <p className="mt-3 text-sm">92300 04309</p>
            <p className="mt-2 break-all text-sm">support@nawaabthetasteofroyals.com</p>
            <div className="mt-7">
              <ContactActions />
            </div>
            <Button asChild variant="royal" size="lg" className="mt-5 w-full sm:w-auto">
              <Link to="/reservation">Reserve a Table</Link>
            </Button>
          </div>
          <MapEmbed />
        </div>
      </section>
      <section className="section-pad bg-maroon">
        <div className="mx-auto grid max-w-5xl gap-12 px-5 md:grid-cols-2 md:px-8">
          <SectionTitle
            eyebrow="Write to us"
            title="How can we help?"
            copy="For table questions, group dining or general enquiries, leave us a message."
          />
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
