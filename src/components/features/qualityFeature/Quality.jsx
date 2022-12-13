import React from "react";
import "./quality.scss";
import qsmart from "../../../asset/images/qsmart.svg";
import fast from "../../../asset/images/fast.svg";
import unlimited from "../../../asset/images/unlimited.svg";
import qunlimited from "../../../asset/images/qunlimited.svg";
import boost from "../../../asset/images/boost.svg";
import support from "../../../asset/images/support.svg";

export default function Quality() {
  const qualityData = [
    {
      id: 1,
      title: "Smart Features",
      img: qsmart,
      text: "Get your blood tests delivered at let home collect sample from the victory of the managements.",
    },
    {
      id: 2,
      title: "Fast Performance",
      img: fast,
      text: "Get your blood tests delivered at let home collect sample from the victory of the managements.",
    },
    {
      id: 3,
      title: "Unlimited Content",
      img: unlimited,
      text: "Get your blood tests delivered at let home collect sample from the victory of the managements.",
    },
    {
      id: 4,
      title: "Unlimited Customization",
      img: qunlimited,
      text: "Get your blood tests delivered at let home collect sample from the victory of the managements.",
    },
    {
      id: 5,
      title: "Boost Productivity",
      img: boost,
      text: "Get your blood tests delivered at let home collect sample from the victory of the managements.",
    },
    {
      id: 6,
      title: "Customer Support",
      img: support,
      text: "Get your blood tests delivered at let home collect sample from the victory of the managements.",
    },
  ];

  return (
    <section id="qualityFeature">
      <div className="qualityFeature__contains">
        <div className="quality__title">
          <p>Quality features</p>
          <h2>Meet exciting feature of app</h2>
        </div>
        <div className="quality__content">
          {qualityData.map(({id, title, img, text}) => (
            <div className="quality__item" key={id}>
              <img src={img} alt="" />
              <div className="quality__text">
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
