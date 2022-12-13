import React from "react";

import { closebtn } from "../../asset/icons";
import { iconSidebar } from "../../asset/jsonData/sidebar";
import "./sidebar.scss";

export default function Sidebar(props) {
  const { handleClickToScroll, active, navbar, toggleSidebar, show } = props;

  return (
    <div>
      <aside className={`sidebar ${show === true ? "show" : ""}`}>
        <button className="btnClose" onClick={toggleSidebar}>
          {closebtn}
        </button>

        <div className="sidebar__content">
          {navbar.map(({ title, id, ref }) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
              style={{ color: active === title && "#25CB9E" }}
              onClick={() => handleClickToScroll(ref)}
              key={id}
              className="sidebar__item"
            >
              {title}
            </a>
          ))}
        </div>

        <div className="Sidebar__social">
          {iconSidebar.map(({ id, img }) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a key={id} href="#" className="social-item">
              {img}
            </a>
          ))}
        </div>
      </aside>
      <div
        className={`sidebar__overlay ${show === true ? "overlay-block" : ""}`}
        onClick={toggleSidebar}
      ></div>
    </div>
  );
}
