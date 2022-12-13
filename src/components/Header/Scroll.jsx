import React, {  useEffect, useRef, useState } from 'react'

export default function Scroll() {

  const [active, setActive] = useState("Home")

  const HomeRef = useRef();
  const FeaturesRef = useRef();
  const TestimonialRef = useRef();
  const PricingRef = useRef();

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
    window.scrollTo({ behavior: "smooth", top: ref.current.offsetTop });
  };

  const handleScroll = (topWindow) => {
    navbar.map(
      (x) => topWindow >= x.ref.current.offsetTop && setActive(x.title)
    );
  };

  return
}

