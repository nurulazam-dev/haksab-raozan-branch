import Hero from "../components/Home/Hero";
import MembersOverview from "../components/Home/MembersOverview";
import Notices from "../components/Home/Notices";
import UpcomingEvents from "../components/Home/UpcomingEvents";
import AboutUs from "./AboutUs";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <Notices />
      <UpcomingEvents />
      <MembersOverview />
      <AboutUs />
      <Contact />
    </div>
  );
};

export default Home;
