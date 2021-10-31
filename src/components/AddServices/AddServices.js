import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Stack from "react-bootstrap/Stack";
const AddServices = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    console.log(data);
    axios
      .post("https://dreadful-mausoleum-75577.herokuapp.com/services", data)
      .then(res => {
        if (res.data.insertedId) {
          alert("Service added Successfully");
          reset();
        }
      });
  };

  return (
    <div>
      <h1>Adding service</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={2} className='col-md-5 mx-auto'>
          <input
            {...register("name", { required: true, maxLength: 20 })}
            placeholder='Service Name'
          />
          <textarea
            {...register("description")}
            placeholder='Service Details'
          />
          <input
            type='number'
            {...register("price")}
            placeholder='Service Price'
          />
          <input {...register("img")} placeholder='Put image link' />
          <input type='submit' />
        </Stack>
      </form>
    </div>
  );
};

export default AddServices;
