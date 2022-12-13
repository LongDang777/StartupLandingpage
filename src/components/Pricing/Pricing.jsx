import React from "react";
import { forwardRef } from "react";
import PricingWork from "./pricingWork/PricingWork";
import Question from "./question/Question";

function Pricing(props, ref) {
  

  

  return (
    <section ref={ref}>
      <PricingWork />
      <Question />
    </section>
  );
}
export default forwardRef(Pricing);
