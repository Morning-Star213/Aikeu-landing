import Header from "@/components/layout/header/Header";
import HomeBanner from "@/components/layout/banner/HomeBanner";
import Craft from "@/components/containers/home/Craft";
import TextSliderLarge from "@/components/containers/home/TextSliderLarge";
import Portfolio from "@/components/containers/home/Portfolio";
import WorkExperience from "@/components/containers/home/WorkExperience";
import Achievements from "@/components/containers/home/Achievements";
import Footer from "@/components/layout/footer/Footer";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import ContactSection from "@/components/containers/ContactSection";
import Skills from "@/components/containers/home/Skills";
const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
        <HomeBanner />
        <Craft />
        <TextSliderLarge />
        <Achievements />
        <Portfolio />
        <WorkExperience />
        <Skills />
        <ContactSection />
      </main>
      <Footer />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;
