import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import adress from "../../../Images/Footer/cIcon1.png";
import phone from "../../../Images/Footer/cIcon2.png";
import email from "../../../Images/Footer/cIcon3.png";
import fFive from "../../../Images/Footer/fFive.png";
import fFour from "../../../Images/Footer/fFour.png";
import fOne from "../../../Images/Footer/fOne.png";
import fThree from "../../../Images/Footer/fThree.png";
import fTwo from "../../../Images/Footer/fTwo.png";
import logo from "../../../Images/logoTwo.png";
import './Footer.scss';
const Footer = () => {
  return (
    <footer className="footer-main">
      <Container>
        <Row>
          <Col lg={3} md={3} sm={12} xs={12}>
            <div className="footer-title">
              <img src={logo} alt="" />
              <h5>
                Evening creature waters unto fill deep man given divided whales
                man kind Winged open us and there to multiply land evening under
              </h5>
            </div>
          </Col>
          <Col lg={3} md={3} sm={12} xs={12}>
            <div className="footer-service">
              <div className="heading">
                <h3>Our Service</h3>
              </div>
              <ul>
                <li>Frontend Developing</li>
                <li>Graphic Design</li>
                <li>Software Developing</li>
                <li>Digital Marketing</li>
                <li>Wordpress Developing </li>
              </ul>
            </div>
          </Col>
          <Col lg={3} md={3} sm={12} xs={12}>
            <div className="insta-feed">
              <div className="heading">
                <h3>Instagram Feed</h3>
              </div>
              <div className="insta-images">
                <img src={fOne} alt="" />
                <img src={fTwo} alt="" />
                <img src={fThree} alt="" />
                <img src={fFour} alt="" />
                <img src={fFive} alt="" />
                <img src={fOne} alt="" />
              </div>
            </div>
          </Col>
          <Col lg={3} md={3} sm={12} xs={12}>
            <div className="contact-footer">
              <div className="heading">
                <h3>Contact info</h3>
              </div>
              <div className="contact-item">
                <img src={adress} alt="" />
                <span>67 Sasha Cove,67 Sasha Cove Eest, Andrewburgh, ML11 DB innings
                West pink city</span>
              </div>
              <div className="contact-item">
                <img src={phone} alt="" />
                <span>02 639 4982 2698 - 2</span>
              </div>
              <div className="contact-item">
                <img src={email} alt="" />
                <span>info@themeies.com</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
