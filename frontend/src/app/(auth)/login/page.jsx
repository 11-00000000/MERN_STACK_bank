"use client";
import React, { useState } from "react";

const Loginpage = () => {
  const [states, setStates] = useState({
    name: "",
    email: "",
    password: "",
    ac_type: "",
  });
  const onChangeHandler = (e) => {
    setStates({ ...states, [e.target.name]: e.target.value });
  }

  const onSubmitHandler = async(e) => {
    e.preventDefault();
    try {
      const response = await axiosClient.post('/auth/register',states)
      const data = await response.data

      console.log(data);
    } catch (error) {
      console.log(error.message);
      
    }
  }

  return (
    <>
      <div className="min-h-[80vh] flex items-center justify-center">
        <form onSubmit={onSubmitHandler}className="w-1/2 px-10 py-10 border">
          <div className="mb-3">
            <input
              type="text"
              value={states.name}
              onChange={onChangeHandler}
              name="name"
              className="w-full py-3 px-3 rounded border outline-none"
              placeholder="Name"
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              value={states.email}
              onChange={onChangeHandler}
              name="email"
              className="w-full py-3 px-3 rounded border outline-none"
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={states.password}
              onChange={onChangeHandler}
              name="password"
              className="w-full py-3 px-3 rounded border outline-none"
              placeholder="Password"
            />
          </div>
          <div className="mb-3">
            <select
              name="ac_type"
              value={states.ac_type}
              onChange={onChangeHandler}
              className="w-full py-3 px-3 rounded border outline-none"
            >
              <option value="">Select Account Type</option>
              <option value="savings">Savings</option>
              <option value="current">Current</option>
            </select>
          </div>

          <div className="mb-3">
            <button className="w-full py-4 text-center text-lg bg-blue-600 rounded text-white">Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Loginpage;
