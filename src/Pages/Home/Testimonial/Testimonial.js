import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import clientImg from '../../../Images/Testimonial//client.png';
import company from '../../../Images/Testimonial/company.png';
import testi from '../../../Images/Testimonial/testi.png';
import videoicon from '../../../Images/Testimonial/videoIcon.png';
import './Testimonial.scss';

const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    return (
        <section id='testimonial' className='testimonial-main overflow-hidden'>
        <div className="section-heading">
        <span>Testimonials</span>
        <h1>Happy Clients Says</h1>
      </div>
            <Row className="align-items-center my-5 ">
            <Col lg={6} md={6} sm={12} xs={12}>
            <div className="testmonial-img">
              <img className="w-100" src={testi} alt="" />
              <img className='video-icon' src={videoicon} alt="" />
            </div>
          </Col>
            <Col lg={4} md={4} sm={12} xs={12} className='p-4'>
            <Slider {...settings}>
              <div className="testimonial-item">
                <img src={clientImg} alt="" />
                <h4>Day set fifth winged divided seas years, seas is void darkness winged. Season green life Don great said won't whales together man lesser is may Itself need moveth herb  itself darkness likeness sixth creepeth.</h4>
                <div className="client-info">
                    <img src={company} alt="" />
                    <div>
                        <h5>Millard  Castinson</h5>
                        <span>Software Developer</span>
                    </div>
                </div>
              </div>
              <div className="testimonial-item">
                <img src={clientImg} alt="" />
                <h4>Day set fifth winged divided seas years, seas is void darkness winged. Season green life Don great said won't whales together man lesser is may Itself need moveth herb  itself darkness likeness sixth creepeth.</h4>
                <div className="client-info">
                    <img src={company} alt="" />
                    <div>
                        <h5>Millard  Castinson</h5>
                        <span>Software Developer</span>
                    </div>
                </div>
              </div>
              <div className="testimonial-item">
                <img src={clientImg} alt="" />
                <h4>Day set fifth winged divided seas years, seas is void darkness winged. Season green life Don great said won't whales together man lesser is may Itself need moveth herb  itself darkness likeness sixth creepeth.</h4>
                <div className="client-info">
                    <img src={company} alt="" />
                    <div>
                        <h5>Millard  Castinson</h5>
                        <span>Software Developer</span>
                    </div>
                </div>
              </div>
              </Slider>
            </Col>
            <Col lg={2} md={2} sm={12} xs={12}></Col>

          </Row>
        </section>
    );
};

export default Testimonial;