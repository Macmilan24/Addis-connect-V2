import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGlobe,
  faLightbulb,
  faUsers,
  faChartBar,
  faNewspaper,
  faChartLine,
  faStar,
  faTrophy,
  faComment,
  faUserSecret,
  faBell,
  faPaintBrush,
  faLanguage,
  faPlug,
  faProjectDiagram,
  faUtensils,
  faTrain,
  faHome,
  faExclamationTriangle,
  faBriefcase,
  faEuroSign,
} from "@fortawesome/free-solid-svg-icons";

import NavBar from "../navbar/NavBar";
import React from "react";
import WelcomeSection from "../WelcomeSection/WelcomeSections";
import ChallengesSection from "../WelcomeSection/ChallengesSection";
import DiscussionsSection from "../WelcomeSection/DiscussionsSectios";
import SuccessStoriesSection from "../WelcomeSection/SuccessStories";
import Footer from "../footer/Footer";

// Add all the icons to the library
library.add(
  faGlobe,
  faLightbulb,
  faUsers,
  faChartBar,
  faNewspaper,
  faChartLine,
  faStar,
  faTrophy,
  faComment,
  faUserSecret,
  faBell,
  faPaintBrush,
  faLanguage,
  faPlug,
  faProjectDiagram,
  faUtensils,
  faTrain,
  faHome,
  faExclamationTriangle,
  faBriefcase,
  faEuroSign
);

export default function LandingPage() {
  return (
    <div className="">
      <NavBar />
      <WelcomeSection />
      <ChallengesSection />
      <DiscussionsSection />
      <SuccessStoriesSection />
      <Footer />
    </div>
  );
}
