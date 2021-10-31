import React from "react";
import { Carousel, Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
/* 
https://i.ibb.co/NFjDDWP/second.png
https://i.ibb.co/3rnGKD5/third.png */

const Banner = () => {
  return (
    <>
      <Container>
        <Carousel className='mt-4' fade>
          <Carousel.Item>
            <Image
              className='d-block w-100'
              src='https://i.ibb.co/kVTTx1P/frist.png'
              alt='First slide'
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className='d-block w-100'
              src='https://i.ibb.co/QfKcXsb/fourth.png'
              alt='Second slide'
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className='d-block w-100'
              src='https://i.ibb.co/tKJR8v4/fifth.png '
              alt='Third slide'
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};

export default Banner;
