"use client";
import { BsCoin } from "react-icons/bs";
const HomePage= () => {

return <>
  <div className="py-10 flex flex-col gap-y-4 " >
    <div className="">
      <h1>hello</h1>
      </div>
 <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-3">
 {
      Array(3).fill(null).map((cur,i)=>{
        return <div key={i} className=""></div>
      
      })
    }
</div>
      </div>

  </>
}


export default HomePage;

const DashboardCard = ()=>{

  return <div  className="flex items-center justify-between border py-3 px-10">
    <BsCoin className="text-6xl text-yellow-500"/>
      <div className="flex flex-col gap-y-2 justify-end">
        <p className="text-3xl font-semibold">{data.title}</p> 
          <div className="flex items-center justify-end gap-x-2">  
            <h3 className="text-4xl font-bold text-end">  45</h3>
      </div>
</div>
      </div>

}