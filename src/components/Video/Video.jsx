

import React from "react";
import { closebtn } from "../../asset/icons";
import "./video.scss";

export default function Video({ setShow, show }) {
  return (
    <div id="video" style={{ display: show ? "block" : "none" }}>
      <div className="video-overlay" onClick={()=>setShow(false)}></div>
      <div className="modal-video">
        <div className="inner-video">
          <div className="warrap-video">
            <button onClick={() => setShow(false)}>{closebtn}</button>
            <iframe
              width="460"
              height="230"
              src="//www.youtube.com/embed/ZNA9rmDsYVE?autoplay=1&mute=1;cc_load_policy=1&amp;controls=1&amp;disablekb=0&amp;enablejsapi=0&amp;fs=1&amp;iv_load_policy=1&amp;loop=0&amp;rel=0&amp;showinfo=1&amp;start=0&amp;wmode=transparent&amp;theme=dark&amp;mute=0"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              tabIndex="-1"
              title="video"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
