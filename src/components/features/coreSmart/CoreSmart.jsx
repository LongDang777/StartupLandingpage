import React from "react";
import Button from "../../../Layouts/Button";
import parner from "../../../asset/images/partner.png";
import "./coreSmart.scss";

export default function CoreSmart() {
  return (
    <section id="coreSmart">
      <div className="coreSmart__contains">
        <div className="coreSmart__text">
          <div className="coreSmart__title">
            <p>Core features</p>
            <h2>Smart Jackpots that you may love this anytime & anywhere</h2>
          </div>
          <p className="coreSmart__description">
            Get your tests delivered at let home collect sample from the victory
            of the managements that supplies best design system guidelines ever.
            Get your tests delivered at let home collect sample.
          </p>
          <a href="#">
            <Button>Get Started</Button>
          </a>
        </div>
        <div className="coreSmart__img">
          <img src={parner} alt="" />
        </div>
      </div>
    </section>
  );
}
