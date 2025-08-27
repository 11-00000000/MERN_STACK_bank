"use client";
import { useMainContext } from "@/context/MainContext";
import { CreditCard, PiggyBank, Wallet } from "lucide-react";

export default function ProfilePage() {
  const { user } = useMainContext();

  if (!user) {
    return (
      <p className="p-6 text-center text-gray-600">
        Please log in to view your profile.
      </p>
    );
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      {/* Profile Card */}
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Top Banner */}
        <div className="h-36 bg-gradient-to-r from-blue-600 to-indigo-500 relative flex justify-center">
          {/* Avatar (Image instead of icon) */}
          <div className="absolute -bottom-14">
            <div className="w-32 h-32 rounded-full bg-white p-1 shadow-2xl hover:scale-105 transition transform overflow-hidden">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" 
                alt="User Avatar"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pt-20 px-6 pb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
          <p className="text-gray-500">{user.email}</p>

          {/* Account No */}
          <div className="mt-6 bg-gradient-to-r from-gray-50 to-gray-100 p-5 rounded-2xl shadow-sm text-center hover:shadow-md transition">
            <p className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <CreditCard className="w-4 h-4 text-blue-500" /> Account No
            </p>
            <p className="text-lg font-semibold text-gray-800 mt-1">
              {user.account_no || "N/A"}
            </p>
          </div>

          {/* FD Amount + Total Balance */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-2xl shadow-sm text-center hover:shadow-md transition">
              <p className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <PiggyBank className="w-4 h-4 text-blue-500" /> FD Amount
              </p>
              <p className="text-lg font-semibold text-blue-700 mt-1">
                ₹{user.fd_amount}
              </p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-5 rounded-2xl shadow-sm text-center hover:shadow-md transition">
              <p className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <Wallet className="w-4 h-4 text-green-600" /> Total Balance
              </p>
              <p className="text-lg font-semibold text-green-700 mt-1">
                ₹{user.amount || 0}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
