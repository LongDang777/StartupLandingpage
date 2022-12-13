import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { nextBtn, prevBtn, start } from "../../../../asset/icons.js";
import avarta1 from "../../../../asset/images/avatar1.png";
import avarta2 from "../../../../asset/images/avatar2.png";
import avarta3 from "../../../../asset/images/avatar3.png";
import avarta4 from "../../../../asset/images/avatar4.png";
import useResize from "../../../../hooks/useResize.js";
import "./slider.scss";

const screen = {
  mini: 480,
  mobile: 640,
  tablet: 768,
  pcSmall: 1024,
  pcLarge: 1220,
  pcLargePlus: 1620,

  maxScreenPcSmall: 780,
  maxScreenPcLarge: 1020,
  maxScreen: 1200,
  maxScreenPlus: 1310
};


export default function Slider() {
  const size = useResize()
  const slidesRef = useRef(null);
  const [widthItem, setWidthItem] = useState();

  const [btn, setBtn] = useState(false);
  const [count, setCount] = useState(0)

  const { mini, mobile, tablet, pcLarge, pcSmall, pcLargePlus, maxScreen, maxScreenPcLarge, maxScreenPcSmall, maxScreenPlus } = screen

  const isMiniScreen = size < mini;
  const isMoblieScreen = size >= mini && size < mobile;
  const isTabletScreen = size >= mobile && size <= tablet;
  const isPcScreenSmall = size > tablet && size < pcSmall;
  const isPcScreenLarge = size >= pcSmall && size < pcLarge;
  const isScreenMax = size >= pcLarge;
  const isScreenMaxPlus = size >= pcLargePlus;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const resizeScreen = () => {
    // screen show 1 items
    isMiniScreen && setWidthItem(size - 30);
    isMoblieScreen && setWidthItem(size - 40);

    // screen show 2 items
    isTabletScreen && setWidthItem((size - 40) / 2)
    isPcScreenSmall && setWidthItem((maxScreenPcSmall - 40) / 2);

    // screen show 3 items
    isPcScreenLarge && setWidthItem((maxScreenPcLarge - 40) / 3);
    isScreenMax && setWidthItem((maxScreen - 40) / 3);
    isScreenMaxPlus && setWidthItem((maxScreenPlus - 40) / 3);
  }

  const slideData = [
    {
      id: 1,
      rating: 4,
      title: "Modern look & trending design",
      text: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
      img: avarta1,
      name: "Denny Hilguston",
      email: "@denny.hil",
    },
    {
      id: 2,
      rating: 5,
      title: "Design Quality & performance",
      text: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
      img: avarta2,
      name: "Denny Hilguston",
      email: "@denny.hil",
    },
    {
      id: 3,
      rating: 5,
      title: "Layout and organized layers",
      text: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
      img: avarta3,
      name: "Denny Hilguston",
      email: "@denny.hil",
    },
    {
      id: 4,
      rating: 4,
      title: "Modern look & trending design",
      text: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
      img: avarta4,
      name: "Denny Hilguston",
      email: "@denny.hil",
    },
    {
      id: 5,
      rating: 4,
      title: "Modern look & trending design",
      text: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
      img: avarta1,
      name: "Denny Hilguston",
      email: "@denny.hil",
    },
    {
      id: 6,
      rating: 5,
      title: "Design Quality & performance",
      text: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
      img: avarta2,
      name: "Denny Hilguston",
      email: "@denny.hil",
    },
    {
      id: 7,
      rating: 5,
      title: "Layout and organized layers",
      text: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
      img: avarta3,
      name: "Denny Hilguston",
      email: "@denny.hil",
    },
    {
      id: 8,
      rating: 4,
      title: "Modern look & trending design",
      text: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
      img: avarta4,
      name: "Denny Hilguston",
      email: "@denny.hil",
    },
    {
      id: 9,
      rating: 4,
      title: "Modern look & trending design",
      text: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
      img: avarta1,
      name: "Denny Hilguston",
      email: "@denny.hil",
    },
    {
      id: 10,
      rating: 5,
      title: "Design Quality & performance",
      text: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
      img: avarta2,
      name: "Denny Hilguston",
      email: "@denny.hil",
    },
    {
      id: 11,
      rating: 5,
      title: "Layout and organized layers",
      text: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
      img: avarta3,
      name: "Denny Hilguston",
      email: "@denny.hil",
    },
    {
      id: 12,
      rating: 4,
      title: "Modern look & trending design",
      text: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
      img: avarta4,
      name: "Denny Hilguston",
      email: "@denny.hil",
    },
  ];

  useEffect(() => {
    resizeScreen();
    slidesRef.current.style.transform = `translateX(-${count * 100}%)`;

    if ((isScreenMaxPlus || isScreenMax || isPcScreenLarge) && count === 3) {
      setBtn(true);
    }
    else if ((isTabletScreen || isPcScreenSmall) && count === 5) {
      setBtn(true);
    }
    else if ((isMiniScreen || isMoblieScreen) && count === 11) {
      setBtn(true);
    }
    else {
      setBtn(false)
    }
  }, [size, count, slideData.length, resizeScreen])


  const btnpressnext = () => {
    setCount(count => count + 1)
  }

  const btnpressPrev = () => {
    setCount(count => count - 1)
  }


  return (
    <div className="container">
      <div className="slide__carousel slide__content">
        <ul ref={slidesRef} className="slide__main">
          {slideData.map((item, index) => {
            const { id, title, text, img, name, rating, email } = item;
            return (
              <li key={id}
                className="slide__item"
                style={{ maxWidth: `${widthItem}px`, left: `${index * widthItem}px` }}
              >
                <div className="item__content">
                  <div className="rating">
                    <ul>
                      {Array(5)
                        .fill(0)
                        .map((_, index) => (
                          <li key={index} className={index < rating ? "start" : "start-gray"}>
                            {start}
                          </li>
                        ))}
                    </ul>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <div className="item__footer">
                    <div className="avartar">
                      <img src={img} alt="" />
                    </div>
                    <div className="item__info">
                      <h4>{name}</h4>
                      <p>{email}</p>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="slide__btn">
        <button disabled={count <= 0 || false} className={`arrowBtn prevBtn ${count === 0 ? "disableBtn" : ""}`} onClick={btnpressPrev}>{prevBtn}</button>
        <button disabled={btn ? true : false} className={`arrowBtn nextBtn ${btn ? "disableBtn" : ""}`} onClick={btnpressnext}>{nextBtn}</button>
      </div>
    </div>
  );
}
