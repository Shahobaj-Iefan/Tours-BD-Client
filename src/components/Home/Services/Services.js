import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://dreadful-mausoleum-75577.herokuapp.com/services")
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);
  return (
    <Container>
      <h4>Our Services</h4>
      <Row className='mt-4'>
        {services.map(service => (
          <Col lg={4}>
            <Service service={service} key={service.key}></Service>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
