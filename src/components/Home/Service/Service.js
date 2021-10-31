import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, description, name, img, price } = service;
  return (
    <div>
      <Card>
        <Card.Img variant='top' src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>Price:{price}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to={`/booking/${_id}`}>
            <button className='btn btn-success'>Book Now</button>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Service;
