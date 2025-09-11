import Gallery from "../components/Home/Gallery";
import Hero from "../components/Home/Hero";
import InfiniteScrollBar from "../components/Home/InfiniteScrollBar";
import MembersOverview from "../components/Home/MembersOverview";
import Notices from "../components/Home/Notices";
import OrgHistory from "../components/Home/OrgHistory";
import OurOrgMembers from "../components/Home/OurOrgMembers";
import UpcomingEvents from "../components/Home/UpcomingEvents";
import YearlyPrograms from "../components/Home/YearlyPrograms";
import TopBanner from "../components/Shared/TopBanner";
import AboutUs from "./AboutUs";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="min-h-screen pt-0 md:pt-15">
      <InfiniteScrollBar />
      <TopBanner
        customClass={
          "bg-gradient-to-r from-green-800 via-green-700 to-green-900 text-white px-10 pt-2"
        }
        orgTitleClass={"text-4xl text-yellow-300"}
      />
      <Hero />
      <YearlyPrograms />
      <Notices />
      <UpcomingEvents />
      <OrgHistory />
      <MembersOverview />
      <Gallery />
      <AboutUs />
      <OurOrgMembers />
      <Contact />
    </div>
  );
};

export default Home;
