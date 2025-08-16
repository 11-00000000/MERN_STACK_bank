"use client";
import HeaderName from "@/components/HeaderName";
import React, { Suspense, useState } from "react";

import AddAmountModel from "@/components/Amount/AddAmountModel";
import { useMainContext } from "@/context/MainContext";
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import AddAccountModal from './+__(components)/AddAccountModal';
// import CustomLoader from '@/components/reuseable/CustomLoader';

const AmountPage = () => {
  const { user } = useMainContext();

  return (
    <>
      <div className="container py-10">
        <HeaderName />

        <div className="card w-full border py-5 rounded flex items-center justify-between px-3">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">Add Amount</h1>
            <p className="text-lg text-zinc-500 font-medium">
              {" "}
              {user.account_no}
            </p>
            <p className="text-3xl font-semibold">
              Total Amount : {user.amount}/-
            </p>
          </div>

          <AddAmountModel id={user.account_no} />
        </div>
      </div>
    </>
  );
};

export default AmountPage;
