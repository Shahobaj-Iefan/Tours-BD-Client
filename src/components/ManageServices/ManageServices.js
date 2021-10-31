import React, { useEffect, useState } from "react";
const ManageServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://dreadful-mausoleum-75577.herokuapp.com/services")
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  // handle delelte
  const handleDelete = id => {
    const url = `https://dreadful-mausoleum-75577.herokuapp.com/services/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount) {
          alert("deleted");
          const remaining = services.filter(service => service._id !== id);
          setServices(remaining);
        }
      });
  };
  return (
    <div>
      <h3>Manage Services</h3>
      {services.map(service => (
        <div className='border border-dark w-50 m-auto p-3' key={service._id}>
          <h3>Service Name: {service.name}</h3>
          <h3>Service Name: {service.price}</h3>
          <h3>Id :{service._id} </h3>
          <button
            onClick={() => handleDelete(service._id)}
            className='btn btn-primary '
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
