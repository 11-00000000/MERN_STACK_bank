"use client";
import { axiosClient } from "@/utils/AxiosClient";
import React, { useState } from "react"; // ✅ Import useState
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import CustomAuthButton from "@/components/reuseable/CustomAuthButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMainContext } from "@/context/MainContext";

const LoginPage = () => {
  const [loading, setLoading] = useState(false); // ✅ loading state
const {fetchUserProfile} = useMainContext()
  const router=useRouter()

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object({
    email: yup.string().email("Invalid Email").required("Email is Required"),
    password: yup.string().required("Password is required"),
  });

  const onSubmitHandler = async (values, helpers) => {
    try {
      setLoading(true); // ✅ start loading
      const response = await axiosClient.post("/auth/login", values);
      const data = await response.data;

      // console.log(data);

      toast.success(data.msg)

      //token
      localStorage.setItem("token", data.token)

      await fetchUserProfile();
      router.push("/")

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
        
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmitHandler}
        >
          <Form className="w-full lg:w-1/2 px-10 py-10">
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
              <CustomAuthButton
                isLoading={loading} // ✅ pass state
                text={"Login"}
                type="submit"
              />
            </div>
            <div className="mb-3">
              <p className="text-end font-medium">
                Don't Have An Account ?{" "}
                <Link href={"/register"} className="text-red-600 ">
                  Register
                </Link>{" "}
              </p>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;