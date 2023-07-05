import React from "react";
import { Container } from "reactstrap";
import { FaFacebookF } from "react-icons/fa";
import "./footer.css";
function Footer(props) {
  return (
    <Container>
      <footer>
        <span>Copyright &copy; 2021 Travelo. All rights reserved</span>
        <ul className="links">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#services">About</a>
          </li>
          <li>
            <a href="#recommend">Places</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
        <ul className="social__links">
          <li>
            <FaFacebookF />
          </li>
          <li>
            <FaFacebookF />
          </li>
          <li>
            <FaFacebookF />
          </li>
        </ul>
      </footer>
    </Container>
  );
}

export default Footer;
