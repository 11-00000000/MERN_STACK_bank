"use client";
import { useMainContext } from "@/context/MainContext";

export default function ProfilePage() {
  const { user } = useMainContext();

  if (!user) {
    return <p className="p-6 text-center">Please log in to view your profile.</p>;
  }

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-center">Profile</h1>
      <div className="space-y-2">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
       <p><strong>Account Number:</strong> {user.accountNumber || "N/A"}</p>

<p><strong>Total Balance:</strong> ₹{user.amount || 0}</p>
        <p><strong>FD Amount:</strong> ₹{user.fd_amount}</p>
      </div>
    </div>
  );
}
