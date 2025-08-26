import Hero from "../components/Home/Hero";
import MembersOverview from "../components/Home/MembersOverview";
import Notices from "../components/Home/Notices";
import UpcomingEvents from "../components/Home/UpcomingEvents";

const Home = () => {
  return (
    <div>
      <Hero />
      <Notices />
      <UpcomingEvents />
      <MembersOverview />
    </div>
  );
};

export default Home;
