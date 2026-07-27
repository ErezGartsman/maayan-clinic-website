import Hero from "../components/sections/Hero.jsx";
import Bio from "../components/sections/Bio.jsx";
import ServicesGrid from "../components/sections/ServicesGrid.jsx";
import Testimonials from "../components/sections/Testimonials.jsx";
import ContactBanner from "../components/sections/ContactBanner.jsx";

function Home({ revealed }) {
  return (
    <>
      <Hero revealed={revealed} />
      <Bio />
      <ServicesGrid />
      <Testimonials />
      <ContactBanner />
    </>
  );
}

export default Home;
