import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addItem } from "../store/itemSlice";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addItem(data));
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" bg-green-500 m-8 rounded-lg p-8 w-1/3 grid grid-cols-2 grid-rows-3 gap-4 justify-center  "
    >
      <input
        className=" col-span-2 p-3 rounded-xl"
        type="text"
        placeholder="Website Name"
        {...register("website", { required: true })}
      />

      <input
        className="p-3 rounded-xl"
        {...register("email", { required: true })}
        type="text"
        placeholder="E-mail"
      />

      <input
        className="p-3 rounded-xl"
        {...register("password", { required: true })}
        type="password"
        placeholder="Password"
      />
      <input
      className=" p-3 text-green-500 bg-white font-bold text-xl h-fit rounded-full px-8 col-span-2"
       type="submit" />
    </form>
  );
};

export default Form;
