import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './OurInfo.scss';

const OurInfo = () => {
    const [info,setInfo] = useState([])
    useEffect(() => {
        fetch("/info.json")
          .then((res) => res.json())
          .then((data) => setInfo(data));
      }, []);
    return (
        <section className='info-main'>
            <Container>
                <Row>
                    {
                        info.map(info => <Col key={info.id} lg={3} md={3} sm={12} xs={12}>
                            <div className="info-content">
                                <img src={info.img} alt="" />
                                <div className="info-item">
                                    <h2>{info.amount}</h2>
                                    <h4>{info.name}</h4>
                                </div>
                            </div>
                        </Col>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default OurInfo;