import React from "react";
import colorFeature from "../../../asset/images/coreFeature.png";
import smart from "../../../asset/images/smart.svg";
import scure from "../../../asset/images/scure.svg";
import "./coreFeatures.scss";

export default function CoreFeatures() {
  const coreData = [
    {
      id: 1,
      title: "Smart Features",
      img: smart,
      text: "Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.",
    },
    {
      id: 2,
      title: "Secure Contents",
      img: scure,
      text: "Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.",
    },
  ];

  return (
    <section id="coreFeatures">
      <div className="coreFeatures__contains">
        <div className="coreFeatures__img">
          <img src={colorFeature} alt="" width={480} height={837} />
        </div>
        <div className="coreFeatures__text">
          <div className="coreFeatures__text-title">
            <p>Core features</p>
            <h2>Smart Jackpots that you may love this anytime & anywhere</h2>
          </div>
          <div className="coreFeature__content">
            {coreData.map(({ id, title, img, text }) => (
              <div className="coreFeature__item" key={id}>
                <img src={img} alt="" />
                <div className="item-text">
                  <h2>{title}</h2>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
