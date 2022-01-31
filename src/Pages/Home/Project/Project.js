import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import btnIcon from "../../../Images/iconOne.png";
import btnIconTwo from "../../../Images/iconTwo.png";
import picOne from "../../../Images/Project/picOne.png";
import picThree from "../../../Images/Project/picThree.png";
import picTwo from "../../../Images/Project/picTwo.png";
import "./Project.scss";

const Project = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="projects-main overflow-hidden" id="projects">
      <div className="section-heading">
        <span>Client work experience</span>
        <h1>Recent Creative Work</h1>
      </div>
      <Row className="align-items-center my-5 ">
        <Col lg={2} md={2} sm={12} xs={12}></Col>
        <Col lg={4} md={4} sm={12} xs={12}>
          <div className="project-content">
            <span>Abstract design</span>
            <h2>For You beast you herb whales she would two you are</h2>
            <p>
              Seasons let creeping seasons was green a tree called bring created
              Shall made whales very green may above dominion seed. Day wo out.
              Doesn creeping can called she very. Beast creeping. air secod
              without, good shall two forth a stars every have won't seed be
              forth Tree fruitful may May light that thating
            </p>
            <div className="project-btn">
              <button>LEARN MORE</button>
              <img src={btnIcon} alt="" />
            </div>
          </div>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <div data-aos="zoom-out-right" className="project-img">
            <img className="w-100" src={picOne} alt="" />
          </div>
        </Col>
      </Row>
      <Row className="align-items-center my-5">
        <Col lg={6} md={6} sm={12} xs={12}>
          <div data-aos="zoom-out-left" className="project-img">
            <img className="w-100" src={picTwo} alt="" />
          </div>
        </Col>

        <Col lg={4} md={4} sm={12} xs={12}>
          <div className="project-content">
            <span>Abstract design</span>
            <h2>For You beast you herb whales she would two you are</h2>
            <p>
              Seasons let creeping seasons was green a tree called bring created
              Shall made whales very green may above dominion seed. Day wo out.
              Doesn creeping can called she very. Beast creeping. air secod
              without, good shall two forth a stars every have won't seed be
              forth Tree fruitful may May light that thating
            </p>
            <div className="project-btn">
              <button className="secondary-btn">LEARN MORE</button>
              <img src={btnIconTwo} alt="" />
            </div>
          </div>
        </Col>
        <Col lg={2} md={2} sm={12} xs={12}></Col>
      </Row>
      <Row className="align-items-center my-5">
        <Col lg={2} md={2} sm={12} xs={12}></Col>
        <Col lg={4} md={4} sm={12} xs={12}>
          <div className="project-content">
            <span>Abstract design</span>
            <h2>For You beast you herb whales she would two you are</h2>
            <p>
              Seasons let creeping seasons was green a tree called bring created
              Shall made whales very green may above dominion seed. Day wo out.
              Doesn creeping can called she very. Beast creeping. air secod
              without, good shall two forth a stars every have won't seed be
              forth Tree fruitful may May light that thating
            </p>
            <div className="project-btn">
              <button>LEARN MORE</button>
              <img src={btnIcon} alt="" />
            </div>
          </div>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <div data-aos="zoom-out-right" className="project-img">
            <img className="w-100" src={picThree} alt="" />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Project;
