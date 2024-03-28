import Benefits from "./Component/Benefits/Benefits";
import Hero from "./Home.js/Hero";
import WhoAreWe from "./Home.js/WhoAreWe";
import Navbar from "./Navbar/page";
import OurTeam from "./Component/OurTeam/OurTeam";
import Items from "./Component/Items/Items";

export default function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <WhoAreWe />
        <Items />
        <Benefits />
        <OurTeam />
    </div>
  );
}
