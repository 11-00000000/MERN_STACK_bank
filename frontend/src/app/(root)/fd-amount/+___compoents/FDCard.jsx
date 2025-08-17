"use client";

import React, { Suspense, useEffect, useState } from "react";
import HeaderName from "@/components/HeaderName";
import AddNewFDModel from "./AddNewFDModel";
import FDCard from "./FDCard";
import { axiosClient } from "@/utils/AxiosClient";
import CustomLoader from "@/components/reuseable/CustomLoader";

const FDPage = () => {
  const [fdList, setFdList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllFds = async () => {
    try {
      setLoading(true);
      const res = await axiosClient.get("/fd");
      setFdList(res?.data?.fds || []);
    } catch (err) {
      console.error("Error fetching FDs", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllFds();
  }, []);

  return (
    <div className="py-6 space-y-6">
      <HeaderName />
      <AddNewFDModel refresh={getAllFds} />

      {loading ? (
        <CustomLoader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {fdList.map((fd, i) => (
            <FDCard key={i} data={fd} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FDPage;