import React, { useLayoutEffect, useRef, useState } from "react";
import { toggle } from "../../asset/icons";
import logo from "../../asset/images/logo.svg";
import logoFixed from '../../asset/images/logoFixed.svg'
import Button from "../../Layouts/Button";
import styles from "./styles.scss";

function Header(props) {
  const { handleClickToScroll, navbar, toggleSidebar, active } = props;
  const [fix, setFixed] = useState('');
  const fixHeader = useRef();

  useLayoutEffect(() => {
    const fixedTop = fixHeader.current.offsetTop;
    const fixedHeader = () => {
      if (window.pageYOffset > fixedTop) {
        setFixed('fixed')
      } else {
        setFixed('')
      }
    };
    window.addEventListener('scroll', fixedHeader)

    return () => {
      window.removeEventListener('scroll', fixedHeader)
    }
  });

  const Link = props => <a {...props}>{props.children}</a>;

  return (
    <header id="header" ref={fixHeader} className={fix}>
      <div className="header__content">
        <Link className={styles.header__logo}>
          <img src={fix ? logoFixed : logo} alt="Startup lannding" />
        </Link>
        <nav className="header__nav">
          {navbar.map(({ title, id, ref }) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
              style={{ color: active === title && "#25CB9E" }}
              onClick={() => handleClickToScroll(ref)}
              key={id}
            >
              {title}
            </a>
          ))}
        </nav>
        <Button className="header__btn" aria-label="Get Started">
          Get Started
        </Button>
        <p className="toggle" onClick={toggleSidebar}>
          {toggle}
        </p>
      </div>
    </header>
  );
}

export default Header;
