import React from "react";
import vector from "../../../asset/images/vector.svg";
import monitor from "../../../asset/images/monitor.svg";
import quality from "../../../asset/images/quality.svg";
import "./features.scss";

export default function FeaturesApp() {
  const featureData = [
    {
      id: 1,
      img: vector,
      title: "Vector Editing",
      description:
        "Get your blood tests delivered at home collect a sample from the your blood tests.",
    },
    {
      id: 2,
      img: monitor,
      title: "Customize & Monitoring",
      description:
        "Get your blood tests delivered at home collect a sample from the your blood tests.",
    },
    {
      id: 3,
      img: quality,
      title: "Quality & Short-period",
      description:
        "Get your blood tests delivered at home collect a sample from the your blood tests.",
    },
  ];

  return (
    <section id="features">
      <div className="feature__contains">
        <div className="feature__title">
          <p>Quality features</p>
          <h2>Meet exciting feature of app</h2>
        </div>
        <div className="feature__content">
          {featureData.map(({ id, img, title, description }) => (
            <div className="feature__item" key={id}>
              <img src={img}  alt='' />
              <div className="feature__item-text">
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}