"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios
      .get("/api/user/profile", { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } })
      .then(res => {
        setUser(res.data);
        setFormData({ name: res.data.name, email: res.data.email, phone: res.data.phone });
      })
      .catch(err => console.error(err));
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSave = () => {
    axios.put("/api/user/profile", formData, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } })
      .then(res => {
        setUser(res.data);
        setEditMode(false);
      })
      .catch(err => console.error(err));
  };

  if (!user) return <p className="text-center mt-20">Loading profile...</p>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">User Profile</h2>

        {!editMode ? (
          <div className="space-y-3">
            <p><span className="font-medium">Name:</span> {user.name}</p>
            <p><span className="font-medium">Email:</span> {user.email}</p>
            <p><span className="font-medium">Phone:</span> {user.phone || "Not set"}</p>

            <button
              onClick={() => setEditMode(true)}
              className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Edit Profile
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="Enter Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="Enter Email"
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="Enter Phone"
            />

            <div className="flex gap-3 mt-4">
              <button
                onClick={handleSave}
                className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
              >
                Save
              </button>
              <button
                onClick={() => setEditMode(false)}
                className="flex-1 bg-gray-400 text-white py-2 rounded-lg hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
