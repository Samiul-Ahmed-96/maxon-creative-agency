import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.scss";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="about" className="about-main">
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}></Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <div data-aos="fade-left" className="about-content">
              <span>About our company</span>
              <h1>Make the customer the hero of your story</h1>
              <h4>
                Open without also first greats land and bring said you give
                second face seed deep whales.
              </h4>
              <p>
                May is called whose was moveth was isn't. Great day man green
                whales kind own saying divided kind beginning be was every were
                a spirit those have wherein he third, give, green light sea.
              </p>
              <button className="common-btn">Learn More </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
