import React, { forwardRef } from "react";
import Payment from "./payment/Payment";
import TestimonialSlide from "./TestimonialSlide/TestimonialSlide";

function Testimonial(props, ref) {
  

  return (
    <section ref={ref}>
      <TestimonialSlide />
      <Payment/>
    </section>
  );
}

export default forwardRef(Testimonial);
