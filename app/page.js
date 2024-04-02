import Benefits from "./Component/Benefits/Benefits";
import Hero from "./Home.js/Hero";
import WhoAreWe from "./Home.js/WhoAreWe";
import Navbar from "./Navbar/page";
import OurTeam from "./Component/OurTeam/OurTeam";
import Items from "./Component/Items/Items";
import Footer from "./Component/Footer/Footer";
import Testimonial from "./Component/Testimonial/Testimonial";
import reviews from './datatest';
import MentorReg from "./MentorReg/MentorReg";
import MentorDash from "./MentorDash/MentorDash";
import MentorDash2 from "./MentorDash2/MentorDash2";

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
        {/* <MentorReg />
        <MentorDash />
        <MentorDash2 /> */}
    </div>
  );
}
