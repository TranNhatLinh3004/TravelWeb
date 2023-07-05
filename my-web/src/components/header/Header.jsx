import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { Container, Row } from "reactstrap";

import "./header.css";

import { Link, NavLink, useNavigate } from "react-router-dom";

const nav__links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "about",
    display: "About",
  },
  {
    path: "places",
    display: "Places",
  },
  {
    path: "testimonials",
    display: "Places",
  },
];
function Header(props) {
  const [navbarState, setNavbarState] = useState(false);

  const [active, setActive] = useState("home");

  const handleActive = (e) => {
    setActive(e.target.id);
  };

  return (
    <header className="header" id="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="brand">
              <div className="container">
                <img src={logo} alt="" />
                Travel
              </div>
              <div className="toggle">
                {navbarState ? (
                  <VscChromeClose onClick={() => setNavbarState(false)} />
                ) : (
                  <GiHamburgerMenu onClick={() => setNavbarState(true)} />
                )}
              </div>
            </div>

            <ul>
              <li>
                <Link
                  to="/home"
                  href="#home"
                  id="home"
                  className={active === "home" ? "active" : ""}
                  onClick={handleActive}
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#about"
                  id="about"
                  className={active === "about" ? "active" : ""}
                  onClick={handleActive}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#recommend"
                  id="recommend"
                  className={active === "recommend" ? "active" : ""}
                  onClick={handleActive}
                >
                  Places
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  id="testimonials"
                  className={active === "testimonials" ? "active" : ""}
                  onClick={handleActive}
                >
                  Testimonials
                </a>
              </li>
            </ul>
            <button>Login</button>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
