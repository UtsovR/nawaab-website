import { useEffect, useState, type FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const fieldClass =
  "h-12 border-primary/30 bg-espresso/40 text-cream placeholder:text-muted-foreground focus-visible:ring-primary";
type ReservationField = "name" | "mobile" | "guests" | "date" | "time";
type ReservationErrors = Partial<Record<ReservationField, string>>;

const whatsappNumber = "919230004309";

function todayIsoDate() {
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${today.getFullYear()}-${month}-${day}`;
}

function formatReservationDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

function formatReservationTime(time: string) {
  const [hourText = "0", minuteText = "0"] = time.split(":");
  const hour = Number(hourText);
  const minute = Number(minuteText);
  const suffix = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 || 12;
  return `${hour12}:${String(minute).padStart(2, "0")} ${suffix}`;
}

export function ReservationForm() {
  const [errors, setErrors] = useState<ReservationErrors>({});
  const [openingWhatsApp, setOpeningWhatsApp] = useState(false);
  const [minimumDate, setMinimumDate] = useState<string>();
  useEffect(() => setMinimumDate(todayIsoDate()), []);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const values = new FormData(form);
    const name = String(values.get("name") ?? "").trim();
    const mobile = String(values.get("mobile") ?? "").trim();
    const email = String(values.get("email") ?? "").trim();
    const guests = String(values.get("guests") ?? "").trim();
    const date = String(values.get("date") ?? "").trim();
    const time = String(values.get("time") ?? "").trim();
    const request = String(values.get("request") ?? "").trim();
    const nextErrors: ReservationErrors = {};

    if (!name) nextErrors.name = "Please enter your full name.";
    const mobileDigits = mobile.replace(/\D/g, "");
    if (!mobile) nextErrors.mobile = "Please enter your mobile number.";
    else if (!/^(?:91)?[6-9]\d{9}$/.test(mobileDigits)) {
      nextErrors.mobile = "Please enter a valid mobile number.";
    }
    if (!guests) nextErrors.guests = "Please enter the number of guests.";
    else if (!Number.isInteger(Number(guests)) || Number(guests) <= 0) {
      nextErrors.guests = "Enter a valid number of guests.";
    }
    if (!date) nextErrors.date = "Please select a reservation date.";
    else if (date < todayIsoDate()) {
      nextErrors.date = "Please select today or a future date.";
    }
    if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(time)) {
      nextErrors.time = "Please select a valid reservation time.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const message = `Hello NAWAAB,

I would like to reserve a table.

Reservation Details:

Name: ${name}
Mobile Number: ${mobile}
Email: ${email || "Not provided"}
Number of Guests: ${guests}
Date: ${formatReservationDate(date)}
Time: ${formatReservationTime(time)}

Special Request:
${request || "None"}

Please confirm the availability of the table.

Thank you.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    setOpeningWhatsApp(true);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  const errorId = (field: ReservationField) => `reservation-${field}-error`;

  return (
    <form onSubmit={submit} noValidate className="grid gap-4 sm:grid-cols-2">
      <div>
        <Input
          name="name"
          aria-label="Full Name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? errorId("name") : undefined}
          placeholder="Full Name *"
          className={fieldClass}
        />
        {errors.name && (
          <p id={errorId("name")} role="alert" className="mt-1 text-xs text-destructive">
            {errors.name}
          </p>
        )}
      </div>
      <div>
        <Input
          name="mobile"
          aria-label="Mobile Number"
          aria-invalid={Boolean(errors.mobile)}
          aria-describedby={errors.mobile ? errorId("mobile") : undefined}
          type="tel"
          placeholder="Mobile Number *"
          className={fieldClass}
        />
        {errors.mobile && (
          <p id={errorId("mobile")} role="alert" className="mt-1 text-xs text-destructive">
            {errors.mobile}
          </p>
        )}
      </div>
      <Input
        name="email"
        aria-label="Email"
        type="email"
        placeholder="Email"
        className={fieldClass}
      />
      <div>
        <Input
          name="guests"
          aria-label="Number of Guests"
          aria-invalid={Boolean(errors.guests)}
          aria-describedby={errors.guests ? errorId("guests") : undefined}
          type="number"
          min="1"
          max="20"
          placeholder="Number of Guests"
          className={fieldClass}
        />
        {errors.guests && (
          <p id={errorId("guests")} role="alert" className="mt-1 text-xs text-destructive">
            {errors.guests}
          </p>
        )}
      </div>
      <div>
        <Input
          name="date"
          aria-label="Date"
          aria-invalid={Boolean(errors.date)}
          aria-describedby={errors.date ? errorId("date") : undefined}
          type="date"
          min={minimumDate}
          className={fieldClass}
        />
        {errors.date && (
          <p id={errorId("date")} role="alert" className="mt-1 text-xs text-destructive">
            {errors.date}
          </p>
        )}
      </div>
      <div>
        <Input
          name="time"
          aria-label="Time"
          aria-invalid={Boolean(errors.time)}
          aria-describedby={errors.time ? errorId("time") : undefined}
          type="time"
          className={fieldClass}
        />
        {errors.time && (
          <p id={errorId("time")} role="alert" className="mt-1 text-xs text-destructive">
            {errors.time}
          </p>
        )}
      </div>
      <Textarea
        name="request"
        aria-label="Special Request"
        placeholder="Special Request"
        className="min-h-30 border-primary/30 bg-espresso/40 text-cream sm:col-span-2"
      />
      {openingWhatsApp && (
        <p role="status" className="text-sm text-cream/75 sm:col-span-2">
          Opening WhatsApp with your reservation details…
        </p>
      )}
      <Button type="submit" variant="royal" size="lg" className="w-full sm:col-span-2">
        Reserve Table
      </Button>
    </form>
  );
}
export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (!f.get("name") || !f.get("mobile") || !f.get("message")) {
      setError("Please add your name, mobile number and message.");
      return;
    }
    setError("");
    setSent(true);
    e.currentTarget.reset();
  }
  return (
    <form onSubmit={submit} noValidate className="grid gap-4">
      {sent && (
        <p role="status" className="border border-primary/30 bg-primary/10 p-4 text-sm text-cream">
          Your message is ready. Our team will be in touch.
        </p>
      )}
      <Input
        name="name"
        aria-label="Name"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? "contact-form-error" : undefined}
        placeholder="Name *"
        className={fieldClass}
      />
      <Input
        name="mobile"
        aria-label="Mobile Number"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? "contact-form-error" : undefined}
        type="tel"
        placeholder="Mobile *"
        className={fieldClass}
      />
      <Input
        name="email"
        aria-label="Email"
        type="email"
        placeholder="Email"
        className={fieldClass}
      />
      <Textarea
        name="message"
        aria-label="Message"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? "contact-form-error" : undefined}
        placeholder="Message *"
        className="min-h-36 border-primary/30 bg-espresso/40 text-cream"
      />
      {error && (
        <p id="contact-form-error" role="alert" className="text-sm text-destructive">
          {error}
        </p>
      )}
      <Button type="submit" variant="royal" size="lg">
        Send Message
      </Button>
    </form>
  );
}
