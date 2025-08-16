"use client";
import { BsCoin } from "react-icons/bs";
import { RiCoinsLine } from "react-icons/ri";
import { IoCardSharp } from "react-icons/io5";
import Link from "next/link";
import HeaderName from "@/components/HeaderName";
import { useMainContext } from "@/context/MainContext";


// HomePage component
const HomePage = () => {

  const {user}= useMainContext()

   const dashboard_data = [
    {
       title:"Amount",
      "Icon":< BsCoin className="text-6xl text-yellow-500" />,
      "value":`₹${user.amount}`
      // link:'/amount'
    },
    {
       title:"FD Amount",
      "Icon":<RiCoinsLine  className="text-6xl text-yellow-500" />,
      "value":`₹${10}`
    },
    {
       title:"ATM Card",
      "Icon":<IoCardSharp  className="text-6xl text-yellow-500" />,
      "value":`₹${10}`
    }
   ]

  return (
    <>
      <div className="py-10 flex flex-col gap-y-4">
        <div className="">
          <h1 className="text-5xl font-bold">hello</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-3">
          {
          //  {Array(3)
          //   .fill(null) 
            dashboard_data.map((cur, i) => {
              return <DashboardCard data={cur} key={i} />;
            })}
        </div>
      </div>
    </>
  );
};

export default HomePage;

// DashboardCard component
const DashboardCard = ({data}) => {
  return <div className="flex items-center justify-between border py-3 px-10">

{data.Icon}
  <div className="flex flex-col gap-y-2 justify-end">
    <p className="text-3xl font-semibold">{data.title}</p>
    <h3 className="text-3xl font-semibold text-end">{data.value} </h3>
    </div>
  </div>
};
