"use client";
import { axiosClient } from "@/utils/AxiosClient";
import React, { useState } from "react"; // ✅ Import useState
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import CustomAuthButton from "@/components/reusable/CustomAuthButton";
import Link from "next/link";

const RegisterPage = () => {
  const [loading, setLoading] = useState(false); // ✅ loading state

  const initialValues = {
    name: "",
    email: "",
    password: "",
    ac_type: "",
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
      setLoading(true); // ✅ start loading
      const response = await axiosClient.post("/auth/register", values);
      const data = await response.data;

      // console.log(data);
      
      toast.success(data.msg);
      //token
      localStorage.setItem("token", data.token)
      helpers.resetForm();
    } catch (error) {
      toast.error(error.response.data.msg || error.message);
    } finally {
      setLoading(false); // ✅ stop loading
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="w-full xl:w-[60%] flex items-start border">
        <div className="hidden lg:block bg-white">
          <img
            src="https://bfsi.eletsonline.com/wp-content/uploads/2023/07/Yono-SBI.jpg"
            className="h-full w-full object-cover"
            alt=""
          />
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmitHandler}
        >
          <Form className="w-full lg:w-1/2 px-10 py-10">
            <div className="mb-3">
              <Field
                type="text"
                name="name"
                className="w-full py-3 px-3 rounded border outline-none"
                placeholder="Enter your name"
              />
              <ErrorMessage
                name="name"
                className="text-red-500"
                component="p"
              />
            </div>

            <div className="mb-3">
              <Field
                type="text"
                name="email"
                className="w-full py-3 px-3 rounded border outline-none"
                placeholder="Enter your email"
              />
              <ErrorMessage
                name="email"
                className="text-red-500"
                component="p"
              />
            </div>

            <div className="mb-3">
              <Field
                type="password"
                name="password"
                className="w-full py-3 px-3 rounded border outline-none"
                placeholder="Enter your password"
              />
              <ErrorMessage
                name="password"
                className="text-red-500"
                component="p"
              />
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
              <ErrorMessage
                name="ac_type"
                className="text-red-500"
                component="p"
              />
            </div>

            <div className="mb-3">
              <CustomAuthButton
                isLoading={loading} // ✅ pass state
                text={"Register"}
                type="submit"
              />
            </div>
            <div className="mb-3">
              <p className="text-end font-medium">
                Already Have An Account ?{" "}
                <Link href={"/login"} className="text-red-600 ">
                  Login
                </Link>{" "}
              </p>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default RegisterPage;
