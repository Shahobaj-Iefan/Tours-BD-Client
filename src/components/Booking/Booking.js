import React, { useEffect, useState } from "react";

import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Booking = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState([]);

  axios
    .get(`https://dreadful-mausoleum-75577.herokuapp.com/services/${serviceId}`)
    .then(res => {
      setService(res.data);
    });

  return (
    <div className='mt-4'>
      <img src={service.img} alt='' />
      <h1>Booking Id : {serviceId}</h1>
      <h2>Service name: {service.name}</h2>
      <h4>Price : {service.price}</h4>
      <br />
      <Link to='/confirmbooking'>
        <button>Confirm Booking</button>
      </Link>
    </div>
  );
};

export default Booking;
