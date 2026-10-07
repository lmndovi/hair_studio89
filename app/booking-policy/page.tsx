import type { Metadata } from "next";
import { ContactFooter } from "@/components/contact-footer";
import { Navigation } from "@/components/navigation";

export const metadata: Metadata = {
  title: "Booking Policy | HairStudio 89",
  description:
    "Booking, deposit, and cancellation policy for HairStudio 89 in Pimlico, London.",
};

type PolicyItem =
  | string
  | {
      text: string;
      children: string[];
    };

const sections: { title: string; items: PolicyItem[] }[] = [
  {
    title: "Deposit Policy",
    items: [
      "A 50% non-refundable deposit is required to secure all appointments.",
      "Appointments will not be confirmed until the deposit has been received.",
      "Deposits will be deducted from the final service cost on the day of your appointment.",
    ],
  },
  {
    title: "Cancellation & Rescheduling Policy",
    items: [
      "We require a minimum of 72 hours\u2019 notice for any appointment cancellation or rescheduling.",
      {
        text: "Cancellations or appointment changes made with at least 72 hours\u2019 notice will allow the deposit to be:",
        children: [
          "Transferred to a new appointment date, or",
          "Refunded upon request.",
        ],
      },
      "Cancellations made with less than 72 hours\u2019 notice will result in the loss of the deposit.",
      "Failure to attend your appointment without notice (\u201cno-show\u201d) will result in the loss of the deposit and may require full prepayment for future bookings.",
    ],
  },
  {
    title: "Late Arrivals",
    items: [
      "Please arrive on time for your appointment.",
      "Clients arriving more than 15 minutes late may need to have their service adjusted, shortened, or rescheduled.",
      "In such cases, the deposit may be forfeited.",
    ],
  },
  {
    title: "Patch Test Policy",
    items: [
      "For all clients booking a colour service with Hairstudio89 for the first time, a patch test is mandatory at least 72 hours before the appointment.",
      "Patch tests are provided free of charge and take only a few minutes.",
      "If a patch test has not been carried out within the required timeframe, we reserve the right to refuse the colour service, and the deposit will not be refunded.",
      "Clients who have not had colour services recently, have experienced allergies, or have had changes to medication or health conditions may be required to undergo a new patch test.",
    ],
  },
  {
    title: "Colour Service Disclaimer",
    items: [
      "Hair colour results may vary depending on hair history, previous colour applications, condition of the hair, and home care.",
      "While every effort will be made to achieve the desired result, Hairstudio89 cannot guarantee specific outcomes.",
    ],
  },
  {
    title: "Children & Guests",
    items: [
      "For health and safety reasons, we kindly ask that only clients receiving services attend appointments unless agreed otherwise in advance.",
    ],
  },
  {
    title: "Right to Refuse Service",
    items: [
      "Hairstudio89 reserves the right to refuse service where we believe a treatment may compromise the client\u2019s hair condition, health, safety, or wellbeing.",
    ],
  },
  {
    title: "Contact Us",
    items: [
      "If you need to amend, cancel, or discuss your appointment, please contact us as soon as possible.",
    ],
  },
];

function PolicyItems({ items }: { items: PolicyItem[] }) {
  return (
    <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-foreground/80 marker:text-gold">
      {items.map((item) => {
        if (typeof item === "string") {
          return <li key={item}>{item}</li>;
        }

        return (
          <li key={item.text}>
            {item.text}
            <ul className="mt-2 list-[circle] space-y-2 pl-5 marker:text-foreground/45">
              {item.children.map((child) => (
                <li key={child}>{child}</li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

export default function BookingPolicyPage() {
  return (
    <main>
      <Navigation />
      <article className="mx-auto w-full max-w-3xl px-6 pb-24 pt-32 lg:px-8 lg:pt-40">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          HairStudio 89
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
          Booking, Deposit &amp; Cancellation Policy
        </h1>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-foreground/80">
          By booking an appointment with Hairstudio89, you agree to the
          following terms and conditions:
        </p>

        <div className="mt-14 space-y-12">
          {sections.map((section, index) => (
            <section key={section.title}>
              <h2 className="flex items-baseline gap-4 font-serif text-2xl text-foreground">
                <span className="text-sm tracking-[0.18em] text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {section.title}
              </h2>
              <PolicyItems items={section.items} />
            </section>
          ))}
        </div>

        <p className="mt-16 border-t border-border pt-8 text-sm leading-7 text-foreground/80">
          Thank you for choosing Hairstudio89. We appreciate your understanding
          and cooperation and look forward to welcoming you to the salon.
        </p>
      </article>
      <ContactFooter />
    </main>
  );
}
