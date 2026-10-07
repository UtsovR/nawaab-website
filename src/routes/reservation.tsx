import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionTitle } from "../components/site";
import { ReservationForm } from "../components/forms";
import { createSeo } from "../lib/site-config";
export const Route = createFileRoute("/reservation")({
  head: () =>
    createSeo({
      path: "/reservation",
      title: "Reserve a Table | NAWAAB Kolkata",
      description:
        "Reserve your table at NAWAAB in Kolkata for family meals, dinner with friends and special celebrations through WhatsApp.",
    }),
  component: Reservation,
});
function Reservation() {
  return (
    <main>
      <PageHero
        eyebrow="Your table awaits"
        title="Reserve Your Table"
        copy="Good food tastes even better when shared. Reserve your table at NAWAAB for your next family meal, dinner with friends or special celebration."
        imageId="reservation-ambience"
      />
      <section className="section-pad bg-maroon">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 md:gap-12 lg:grid-cols-[.7fr_1.3fr] md:px-8">
          <div>
            <SectionTitle
              eyebrow="Plan your visit"
              title="A royal welcome"
              copy="Share your preferred date and time. Our team will contact you to confirm availability."
            />
            <p className="text-xs leading-6 text-muted-foreground">
              For same-day reservations, call 92300 04309.
            </p>
          </div>
          <ReservationForm />
        </div>
      </section>
    </main>
  );
}
