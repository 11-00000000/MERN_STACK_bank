"use client";
import React, { useState } from "react";
import{Formik,Form,ErrorMessage} from 'formik'
import *as yup from 'yup'

const RegisterPage = () => {
    const [loading,setLoading] = useState(false)
        const {fetchUserProfile} = useMainContext()
        const router = useRouter()
  //const [states, setStates] = useState();

  // const onChangeHandler = (e) => {
  //   setStates({ ...states, [e.target.name]: e.target.value });
  // }
const initialValues ={
   name: "",
    email: "",
    password: "",
    ac_type: "",
}
const validationSchema=yup.object({
  name:yup.string().required("Name is Required"),
  email:yup.string().email("Email must be valid").required("Email is Required"),
  password:yup.string().required("Password is required"),
  ac_type:yup.string().oneOf(["saving","current"],"Account should a valid Saving or Current Account").required("Account Type is Required")
})
  const onSubmitHandler = async(values,helpers) => {

    try {
      const response = await axiosClient.post('/auth/register',values)
      const data = await response.data

      console.log(data);
      helpers.resetForm()
    } catch (error) {
      console.log(error.message);
      
    }
  }

  return (
    <>
      <div className="min-h-[80vh] flex items-center justify-center">
        <formik
            initialValues={initialValues}
            validationSchema={validationSchema}
          onSubmit={onSubmitHandler}
        >
        <form className="w-1/2 px-10 py-10 border">
          <div className="mb-3">
            <field
              type="text"
             
              name="name"
              className="w-full py-3 px-3 rounded border outline-none"
              placeholder="Name"
            />
          <ErrorMessage name='name' className='text-red-500'component={'p'}/>
          </div>

          <div className="mb-3">
            <input
              type="text"           
              name="email"
              className="w-full py-3 px-3 rounded border outline-none"
              placeholder="Email"
              />
          <ErrorMessage name='email' className='text-red-500'component={'p'}/>
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              className="w-full py-3 px-3 rounded border outline-none"
              placeholder="Password"
            />
              <ErrorMessage name='password' className='text-red-500'component={'p'}/>
          </div>
          <div className="mb-3">
            <select
              name="ac_type"             
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
          </formik>
      </div>
    </>
  );
};

export default RegisterPage
