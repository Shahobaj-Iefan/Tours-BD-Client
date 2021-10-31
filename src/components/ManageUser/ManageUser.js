import React, { useEffect, useState } from "react";

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://dreadful-mausoleum-75577.herokuapp.com/orders")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);
  //=========
  const handleDelete = id => {
    const url = `https://dreadful-mausoleum-75577.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount) {
          alert("deleted");
          const remaining = users.filter(user => user._id !== id);
          setUsers(remaining);
        }
      });
  };
  return (
    <div>
      <h3>Manage Users</h3>
      {users.map(user => (
        <div className='border border-dark w-50 m-auto p-3' key={user._id}>
          <h3>User Name: {user.name}</h3>
          <h3>Id :{user._id} </h3>
          <button
            onClick={() => handleDelete(user._id)}
            className='btn btn-primary '
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ManageUser;
