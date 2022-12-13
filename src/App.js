import { useState, useRef, useEffect } from "react";
import "./App.scss";
import BannerTop from "./components/BannerTop/BannerTop";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Header from "./components/Header";
import Pricing from "./components/Pricing/Pricing";
import Sidebar from "./components/Sidebar/Sidebar";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState("Home");

  const HomeRef = useRef();
  const FeaturesRef = useRef();
  const TestimonialRef = useRef();
  const PricingRef = useRef();

  const HEADER_HEIGHT = 72;
  

  const navbar = [
    {
      id: 1,
      title: "Home",
      ref: HomeRef,
    },
    {
      id: 2,
      title: "Features",
      ref: FeaturesRef,
    },
    {
      id: 3,
      title: "Testimonial",
      ref: TestimonialRef,
    },
    {
      id: 4,
      title: "Pricing",
      ref: PricingRef,
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      handleScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickToScroll = (ref) => {
    window.scrollTo({ behavior: "smooth", top: ref.current.offsetTop - HEADER_HEIGHT });
  };

  const handleScroll = (topWindow) => {
    navbar.map((x) => topWindow >= x.ref.current.offsetTop - HEADER_HEIGHT && setActive(x.title));
  };

  const toggleSidebar = () => setShow(!show);

  return (
    <div className="App">
      <Header
        active={active}
        navbar={navbar}
        handleClickToScroll={handleClickToScroll}
        toggleSidebar={toggleSidebar}
      />
      <Sidebar
        active={active}
        navbar={navbar}
        handleClickToScroll={handleClickToScroll}
        toggleSidebar={toggleSidebar}
        show={show}
      />
      <main>
        <BannerTop ref={HomeRef} />
        <Features ref={FeaturesRef} />
        <Testimonial ref={TestimonialRef} />
        <Pricing ref={PricingRef} />
        <Footer />
      </main>
    </div>
  );
}

export default App;
