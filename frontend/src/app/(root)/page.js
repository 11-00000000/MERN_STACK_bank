"use client";
import { IoCardSharp } from "react-icons/io5";
import Link from "next/link";
import HeaderName from "@/components/HeaderName";
import { useMainContext } from "@/context/MainContext";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { PiHandDepositFill } from "react-icons/pi";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
const HomePage=()=>{
<<<<<<< HEAD
  const {user} = useMainContext()
 const dashboard_data = [
=======
  const { user } = useMainContext();

  if (!user) {
    return (
      <div className="py-10 flex flex-col gap-y-4">
        <HeaderName />
        <div className="text-center text-gray-600 p-6">
          Please log in to view your dashboard.
        </div>
      </div>
    );
  }

  const dashboard_data = [
>>>>>>> cae322d380ffc5d45added984836410228f6245f
    {
      title: "Amount",
      Icon: <RiMoneyRupeeCircleFill className="text-6xl text-yellow-500" />,
      value: `₹${
        Array.isArray(user.account_no)
          ? user.account_no.map(cur => cur.amount).reduce((pre, cur) => pre + cur, 0)
          : user.amount ?? 0
      }`,
      link: '/amount'
    },
    {
      title: "FD Amount",
      Icon: <PiHandDepositFill className="text-6xl text-rose-700" />,
      value: `₹${user.fd_amount}`,
      link: "/fd-amount"
    },
    {
      title: "ATM Cards",
      Icon: <IoCardSharp className="text-6xl text-black" />,
      value: `${2}`,
      link: '/atm-cards'
    }
<<<<<<< HEAD
  ]
  return <>
  <div className="py-10 flex flex-col gap-y-4 " >
  <HeaderName/>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-3">
    {
      dashboard_data.map((cur,i)=>{
        return  <DashboardCard data={cur} key={i} />
      })
    }
       </div>
    
  </div>
  </>
=======
  ];

  return (
    <>
      <div className="py-10 flex flex-col gap-y-4">
        <HeaderName />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-3">
          {dashboard_data.map((cur, i) => (
            <DashboardCard data={cur} key={i} />
          ))}
        </div>
      </div>
    </>
  );
>>>>>>> cae322d380ffc5d45added984836410228f6245f
}
export default HomePage

const DashboardCard = ({data})=>{

  const [isShow,setIsShow] = useState(false)

  return <Link href={data.link}  className="flex items-center justify-between border py-3 px-10">
       {data.Icon  }
      <div className="flex flex-col gap-y-2 justify-end">
        <p className="text-3xl font-semibold">{data.title}</p> 
          <div className="flex items-center justify-end gap-x-2">  
            <h3 className="text-4xl font-bold text-end">  {isShow?data.value:``.padStart(`${data.value}`.length,`x`.repeat(`${data.value}`.length))}</h3>
          <button onClick={(e)=>{e.preventDefault(); e.stopPropagation(); setIsShow(!isShow);}} className="text-2xl pt-2 text-black">{isShow?<FaEyeSlash/>:<FaEye/>}</button>
          </div>

      </div>
  </Link>
}