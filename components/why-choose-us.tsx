import {
  Armchair,
  Gem,
  Heart,
  Leaf,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const values: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Gem,
    title: "The Studio Experience",
    description:
      "Step into a calm, one-to-one space where every detail is considered. From consultation to finish, your experience is entirely tailored to you.",
  },
  {
    icon: Sparkles,
    title: "Our Approach",
    description:
      "We focus on lived-in colour and balayage with a personalised method, creating soft, seamless results designed to grow out beautifully.",
  },
  {
    icon: Heart,
    title: "What We Do Differently",
    description:
      "A more considered approach to hair - one-to-one appointments, thoughtful colour placement, and results that feel effortless and natural.",
  },
  {
    icon: Leaf,
    title: "The Art of Colour",
    description:
      "Specialising in lived-in colour and balayage, we create dimension, softness, and movement through carefully placed, bespoke colour work.",
  },
  {
    icon: Armchair,
    title: "Tailored To You",
    description:
      "No two appointments are the same. Every colour is customised to suit your tone, lifestyle, and desired level of maintenance.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-background py-20 lg:py-32" id="why">
      <div className="mx-auto max-w-6xl px-6 lg:px-16">
        <div className="mb-16 text-center lg:mb-24">
          <h2 className="font-serif text-3xl tracking-tight text-balance text-foreground md:text-5xl lg:text-6xl">
            The Studio Experience
          </h2>
        </div>

        <ul className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-6 lg:gap-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            const layoutClass =
              index === 3
                ? "lg:col-start-2"
                : index === 4
                  ? "lg:col-start-4"
                  : "";
            return (
              <li
                key={value.title}
                className={`flex flex-col items-center text-center lg:col-span-2 ${layoutClass}`}
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-border">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-3 font-serif text-xl text-foreground lg:text-2xl">
                  {value.title}
                </h3>
                <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
