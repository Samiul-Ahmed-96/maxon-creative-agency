import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import './Features.scss';

const Features = () => {
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    fetch("/features.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);
  return (
    <section className="features-main" id="features">
        <div className="section-heading">
            <span>Special Features</span>
            <h1>Advertising with Difference</h1>
        </div>
      <Container className="banner-container">
        <Row>
          {features.map((feature) => (
            <Col key={feature.id} lg={3} md={3} sm={12} xs={12}>
              <div className="feature-content">
                <img src={feature.img} alt="" />
                <h3>{feature.name}</h3>
                <p>{feature.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
