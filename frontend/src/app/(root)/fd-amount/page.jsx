"use client";
import HeaderName from '@/components/HeaderName';
import React, { Suspense, useEffect, useState } from 'react';
import AddNewFDModel from './+___compoents/AddNewFDModel';
import FDCard from './+___compoents/FDCard';
import { axiosClient } from '@/utils/AxiosClient';
import CustomLoader from '@/components/reuseable/CustomLoader';
import { toast } from 'react-toastify';
//import FixDepositService from "./FDService.js";
//import { AccountModel, FixDepositModel, TransactionModel } from '@/models'; // Assuming these are your Mongoose models


const FDPage = () => {
  const [deposits, setDeposits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isUpdate, setIsUpdate] = useState(false);
  

  const fetchAllDeposits = async () => {
    try {
      setLoading(true);
      const response = await axiosClient.get('/fd/get-all', {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
      });

      const data = await response.data;
      setDeposits(data);

    } catch (error) {
      console.error("Fetch error:", error); // For debugging
      const msg = error?.response?.data?.msg || error?.message || "Something went wrong";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllDeposits();
  }, [isUpdate]);

  if (loading) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <CustomLoader />
      </div>
    );
  }

  return (
    <>
      <div className="container py-10">
        <HeaderName />

        <div className="py-10 grid grid-cols-1 items-start gap-x-4 gap-y-3 lg:grid-cols-2 xl:grid-cols-3">
          <AddNewFDModel isUpdate={isUpdate} setIsUpdate={setIsUpdate} />
          <Suspense fallback={<CustomLoader />}>
            {deposits.length > 0 &&
              deposits.map((cur, i) => (
                <FDCard
                  key={i}
                  data={cur}
                  isUpdate={isUpdate}
                  setIsUpdate={setIsUpdate}
                />
              ))}
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default FDPage;