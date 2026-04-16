import {
  Armchair,
  Gem,
  Heart,
  Leaf,
  Palette,
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
    title: "Genderless",
    description:
      "We believe in charging only for what you need, regardless of your gender.",
  },
  {
    icon: Sparkles,
    title: "Exceptional hair care",
    description:
      "Our team of creative directors and colourists are committed to providing you with the highest quality hair care.",
  },
  {
    icon: Heart,
    title: "Unmatched experience",
    description:
      "We are dedicated to creating an unforgettable hair experience for every client.",
  },
  {
    icon: Leaf,
    title: "Enviable shine",
    description:
      "Our salon only uses the best and most natural products to ensure that your hair shines.",
  },
  {
    icon: Armchair,
    title: "Relaxing environment",
    description:
      "We believe in creating a welcoming and relaxing environment where you can unwind and enjoy your hair experience.",
  },
  {
    icon: Palette,
    title: "Talented creatives",
    description:
      "Our team is made up of highly skilled and talented creatives who are passionate about their craft.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-background py-20 lg:py-32" id="why">
      <div className="mx-auto max-w-6xl px-6 lg:px-16">
        <div className="mb-16 text-center lg:mb-24">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Our Mission
          </p>
          <h2 className="font-serif text-3xl tracking-tight text-balance text-foreground md:text-5xl lg:text-6xl">
            Why Choose Hair Studio 89?
          </h2>
        </div>

        <ul className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <li
                key={value.title}
                className="flex flex-col items-center text-center"
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
