import { BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Works,
  Navbar,
  Tech,
} from "./components";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";
const App = () => {
  return (
    <BrowserRouter className="">
      <div className="relative z-0 bg-primary  ">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center container mx-auto overflow-hidden w-full">
          <Navbar></Navbar>
          <Hero className=" w-full "></Hero>
        </div>

        <About ></About>
        <Experience ></Experience>
        <Tech></Tech>
        <Works></Works>
        <Feedbacks></Feedbacks>
        <div className="relative z-0">
          <Contact></Contact>
        </div>
        <Footer></Footer>
      </div>
      <SocialLinks />
    </BrowserRouter>
  );
};

export default App;
