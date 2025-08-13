"use client";
import { axiosClient } from "@/utils/AxiosClient";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { toast } from 'react-toastify';

const RegisterPage = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    ac_type: ""
  };

  const validationSchema = yup.object({
    name: yup.string().required("Name is Required"),
    email: yup.string().email("Invalid Email").required("Email is Required"),
    password: yup.string().required("Password is required"),
    ac_type: yup
      .string()
      .oneOf(["saving", "current"], "Must be Saving or Current")
      .required("Account Type is Required"),
  });

  const onSubmitHandler = async (values, helpers) => {
    try {
      const response = await axiosClient.post("/auth/register", values);
      console.log(response.data);

      //console.log(data);

      toast.success(data.msg);

      //token

      helpers.resetForm();
    } catch (error) {
      // console.error(error);
      toast.error(error.response.data.msg || error.message)
    }
  };

  return (
    <>
    <div className="min-h-[80vh] flex items-center justify-center">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmitHandler}
      >
        <Form className="w-1/2 px-10 py-10 border">
          <div className="mb-3">
            <Field
              type="text"
              name="name"
              className="w-full py-3 px-3 rounded border outline-none"
            />
            <ErrorMessage name="name" className="text-red-500" component="p" />
          </div>

          <div className="mb-3">
            <Field
              type="text"
              name="email"
              className="w-full py-3 px-3 rounded border outline-none"
            />
            <ErrorMessage name="email" className="text-red-500" component="p" />
          </div>

          <div className="mb-3">
            <Field
              type="password"
              name="password"
              className="w-full py-3 px-3 rounded border outline-none"
            />
            <ErrorMessage name="password" className="text-red-500" component="p" />
          </div>

          <div className="mb-3">
            <Field
              as="select"
              name="ac_type"
              className="w-full py-3 px-3 rounded border outline-none"
            >
              <option value="">Select Account Type</option>
              <option value="saving">Saving</option>
              <option value="current">Current</option>
            </Field>
            <ErrorMessage name="ac_type" className="text-red-500" component="p" />
          </div>

          <div className="mb-3">
            <button
              type="submit"
              className="w-full py-4 text-center text-lg bg-blue-600 rounded text-white"
            >
              Login
            </button>
          </div>
        </Form>
      </Formik>
    </div>
    </>
  );
};

export default RegisterPage;