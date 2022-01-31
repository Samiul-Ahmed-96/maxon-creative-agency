import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Team.scss";

const Team = () => {
  const [teamMember, setTeamMember] = useState([]);
  useEffect(() => {
    fetch("/team.json")
      .then((res) => res.json())
      .then((data) => setTeamMember(data));
  }, []);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="team-main">
      <div className="section-heading">
        <span>team member</span>
        <h1>Our Experieced Team</h1>
      </div>
      <Container>
        <Row>
          {teamMember.map((member) => (
            <Col key={member.id} lg={4} md={4} sm={12} xs={12}>
              <div className="member-content">
                <img data-aos="flip-left" src={member.img} alt="" />
                <h4>{member.name}</h4>
                <span>{member.designation}</span>
                <ul>
                  <li className="contact">
                    <a href="">facebook</a>
                  </li>
                  <li className="contact">
                    <a href="">twitter</a>
                  </li>
                  <li>
                    <a href="">skype</a>
                  </li>
                </ul>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Team;
