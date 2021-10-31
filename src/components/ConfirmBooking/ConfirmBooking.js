import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Stack from "react-bootstrap/Stack";
const ConfirmBooking = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    console.log(data);
    fetch("https://dreadful-mausoleum-75577.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(result => {
        if (result.insertedId) {
          alert("Order process successfully");
          reset();
        }
      });
  };
  return (
    <div>
      <h4>Booking Info Form</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={2} className='col-md-5 mx-auto'>
          <input
            defaultValue={user.displayName}
            {...register("name", { required: true, maxLength: 20 })}
            placeholder='Your Name'
          />
          <input
            defaultValue={user.email}
            {...register("email")}
            placeholder='Your Email'
          />
          <textarea {...register("address")} placeholder='Your Address' />
          <input
            type='number'
            {...register("phone")}
            placeholder='Your Phone Number'
          />
          <input type='submit' />
        </Stack>
      </form>
    </div>
  );
};

export default ConfirmBooking;
