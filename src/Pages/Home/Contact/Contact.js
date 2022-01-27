import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import iOne from "../../../Images/iOne.png";
import iThree from "../../../Images/iThree.png";
import iTwo from "../../../Images/iTwo.png";
import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact-main" id="contact">
      <Container>
        <Row >
       
          <Col lg={3} md={3} sm={12} xs={12}>
            <div className="contact-content">
            <div className="contact-tile">
            <span>conatct us</span>
            <h3>Don’t Hesitate, Ask Any Query</h3>
          </div>
              <div className="contact-info">
                <img src={iOne} alt="" />
                <span>123 Main Street, 310 USA 12345</span>
              </div>
            </div>

            <div className="contact-content">
              <div className="contact-info">
                <img src={iTwo} alt="" />
                <span>+01- 190 -2258 - 2658</span>
              </div>
            </div>
            <div className="contact-content">
              <div className="contact-info">
                <img src={iThree} alt="" />
                <span>Examp@creativeagn.com</span>
              </div>
            </div>
          </Col>
          <Col lg={9} md={9} sm={12} xs={12}>
            <div className="contact-form">
             
              <form>
                <Row>
                  <Col lg={6} md={6} sm={12} xs={12}>
                    <input
                      className="half"
                      type="text"
                      name=""
                      placeholder="Full Name"
                      id=""
                    />
                  </Col>
                  <Col lg={6} md={6} sm={12} xs={12}>
                    <input
                      className="half"
                      type="text"
                      name=""
                      placeholder="Phone"
                      id=""
                    />
                  </Col>
                  <Col lg={12} md={12} sm={12} xs={12}>
                    <input type="email" name="" placeholder="Email" id="" />
                  </Col>
                  <Col lg={12} md={12} sm={12} xs={12}>
                    <textarea
                      name=""
                      id=""
                      placeholder="Your Message"
                      cols="30"
                      rows="10"
                    ></textarea>
                  </Col>
                  
                </Row>
                <button className="common-btn">SEND MASSAGE</button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
