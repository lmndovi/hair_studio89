import { Brands } from "@/components/brands";
import { ContactFooter } from "@/components/contact-footer";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { Services } from "@/components/services";
import { Team } from "@/components/team";
import { Testimonials } from "@/components/testimonials";
import { WhyChooseUs } from "@/components/why-choose-us";


export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Brands />
      <Testimonials />
      <Team />
      <Gallery />
      <ContactFooter />
    </main>
  );
}
