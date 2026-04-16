import { ContactFooter } from "@/components/contact-footer";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { Services } from "@/components/services";
import { Team } from "@/components/team";


export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Services />
      {/* <Testimonials /> */}
      <Team />
      <Gallery />
      <ContactFooter />
    </main>
  );
}
