import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bannerShape from "../../../Images/Banner/banner-shape.png";
import "./Banner.scss";

const Banner = () => {
  return (
    <section id="banner" className="banner-main">
      <div className="banner-shape">
        <img src={bannerShape} alt="" />
      </div>
      <Container className="banner-container">
        <Row className="align-items-center">
          <Col lg={6} md={6} sm={12} xs={12}>
            <div className="banner-content">
              <span>Creative Agency</span>
              <h1>Building Brand is Our Business</h1>
              <p>
                Can days you'll forth two grass form face you saying, divide.
                Subdue days light whose. Stars creepeth that creature thing.
              </p>
              <button className="common-btn">VIEW PROJECT</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
