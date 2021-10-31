import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h4>Manage users order and Services</h4>
      <div>
        <Link to='/manageusers'>
          <button>Manage User order Info</button>
        </Link>
        <Link to='/manageservices'>
          <button>Manage Services </button>
        </Link>
        <Link to='/addService'>
          <button>Add New Service </button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
