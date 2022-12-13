import React, { forwardRef, useState } from "react";
import { playVideo } from "../../asset/icons";
import Button from "../../Layouts/Button";
import paypal from "../../asset/images/paypal.svg";
import google from "../../asset/images/google.svg";
import dropbox from "../../asset/images/dropbox.svg";
import banner from "../../asset/images/banner.png";
import Video from "../Video/Video";
import "./bannerTop.scss";

function BannerTop(props, ref) {

  const [show, setShow] = useState(false);

  return (
    <section ref={ref} id="bannerTop">
      <div className="bannerTop__contains">
        <div className="bannerTop__left">
          <h1 className="bannerTop__title">
            Experience your ultimate mobile application
          </h1>
          <p className="bannerTop__description">
            Get your blood tests delivered at let home collect sample from the
            victory of the managements that supplies best design system
            guidelines ever.
          </p>
          <div className="bannerTop__btn">
            <Button className='btn-secondary'>Get Started</Button>
            <button className='btn btn-playVideo' onClick={() => setShow(true)}>
              {playVideo}
              Watch Video
            </button>
            <Video show={show} setShow={setShow}/>
          </div>
          <div className="bannerTop__social">
            <span>Sponsored by:</span>
            <div className="bannerTop__social-link">
              <a href="#">
                <img src={paypal} alt="" />
              </a>
              <a href="#">
                <img src={google} alt="" />
              </a>
              <a href="#">
                <img src={dropbox} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="bannerTop__right">
          <img src={banner} alt="" />
        </div>
      </div>
    </section>
  );
}

export default forwardRef(BannerTop)