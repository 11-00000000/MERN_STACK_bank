"use client";
import { BsCoin } from "react-icons/bs";

// HomePage component
const HomePage = () => {
  return (
    <>
      <div className="py-10 flex flex-col gap-y-4">
        <div className="">
          <h1 className="text-5xl font-bold">hello</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-3">
          {Array(3)
            .fill(null)
            .map((cur, i) => {
              return <DashboardCard key={i} />;
            })}
        </div>
      </div>
    </>
  );
};

export default HomePage;

// DashboardCard component
const DashboardCard = () => {
  return <div className="flex items-center justify-between border py-3"></div>;
};
