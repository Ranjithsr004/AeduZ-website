import Benefits from "./Component/Benefits/Benefits";
import Hero from "./Home.js/Hero";
import WhoAreWe from "./Home.js/WhoAreWe";
import Navbar from "./Navbar/page";
import OurTeam from "./Component/OurTeam/OurTeam";
import Items from "./Component/Items/Items";
import Footer from "./Component/Footer/Footer";
import Testimonial from "./Component/Testimonial/Testimonial";
import reviews from "./datatest";

export default function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <WhoAreWe />
        <Items />
        <Benefits />
        <OurTeam />
        <Testimonial reviews={reviews}/>
        <Footer />
    </div>
  );
}
