import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Container>
      <h5>Welcome to Wonderer Camping Ground</h5>
      <Row xs={1} md={2} className='g-4'>
        <Col>
          <Card>
            <Card.Img
              variant='top'
              src='https://i.ibb.co/cJnxhwB/service1.png'
            />
            <Card.Body>
              <Card.Title>Camping area for tents</Card.Title>
              <Card.Text>
                The world is a book and those who do not travel read only one
                page.” ~ Saint Augustine
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant='top'
              src='https://i.ibb.co/YbJr12J/service5.png'
            />
            <Card.Body>
              <Card.Title>Trailers and RV spots</Card.Title>
              <Card.Text>
                This is definitely one of the best travel quotes of all time,
                but it certainly reads true. When you travel, the whole world
                opens up.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant='top'
              src='https://i.ibb.co/zFYRWdv/service3.png'
            />
            <Card.Body>
              <Card.Title>Cabins and glamping</Card.Title>
              <Card.Text>
                Throughout our lives, people have thought that because we keep
                traveling and searching for new things to do, we are not
                focused.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant='top'
              src='https://i.ibb.co/5WPBL6z/service6.png'
            />
            <Card.Body>
              <Card.Title>Haiking</Card.Title>
              <Card.Text>
                The world is a book and those who do not travel read only one
                page.” ~ Saint Augustine
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
