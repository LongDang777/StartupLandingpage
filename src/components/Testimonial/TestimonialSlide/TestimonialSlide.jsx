import React from "react";
import Slider from "./slider/Slider";
import "./TestimonialSlide.scss";


export default function TestimonialSlide() {
  

  return (
    <section id="testimonialSlide">
      <div className="slide__contains">
        <div className="title">
          <p className="title__small">TESTIMONIAL</p>
          <h2 className="title__big">Meet Client Satisfaction</h2>
        </div>
        <Slider/>
      </div>
    </section>
  );
}
