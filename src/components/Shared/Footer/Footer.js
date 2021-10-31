import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container className='bg-dark text-white p-4 mt-3 mb-3'>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={2} lg={3}>
          <h5>This is "BD Tours "</h5>
          <p className='align-justify'>
            BD Tours is equipped with everythig required for an amazing
            campground business website. Set up camp now.
          </p>
          <h5>Greetings</h5>
          <p>Thanks for choose us</p>
        </Col>
        <Col xs={12} md={2} lg={3}>
          <h5>Contact</h5>
          <address>
            <p>
              <small>
                Addrss: Santinagor Arambg, Dhaka <br /> Phone: +88-01788888888
                <br /> App: Viber, WhatsApp <br /> Email: toursbd@qode.com
              </small>
            </p>
          </address>
        </Col>
        <Col xs={12} md={2} lg={3}>
          <h5>Links</h5>
          <p>About us</p>
          <p>Camp Accomodation</p>
          <p>Nearby Activities</p>
        </Col>
        <p>Terms of Use | Privacy Policy &copy 2021 All Rights Reserves</p>
      </Row>
    </Container>
  );
};

export default Footer;
