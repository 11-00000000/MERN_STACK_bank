"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { toast } from "react-toastify";
import Avatar from "boring-avatars";
import { useMainContext } from "@/context/MainContext";

export default function ProfileEditModal({ isOpen, onClose }) {
  const { user, fetchUserProfile } = useMainContext();
  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    avatar: user?.avatar || user?.name || "User"
  });
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleAvatarChange = value => setForm({ ...form, avatar: value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      // Replace with your API endpoint
      await fetch("/api/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(form)
      });
      toast.success("Profile updated!");
      fetchUserProfile();
      onClose();
    } catch (err) {
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center">
      <Dialog.Panel className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col items-center">
            <Avatar size={48} name={form.avatar} variant="beam" />
            <input
              type="text"
              name="avatar"
              value={form.avatar}
              onChange={e => handleAvatarChange(e.target.value)}
              className="mt-2 border rounded px-2 py-1 w-32 text-center"
              placeholder="Avatar name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="border rounded px-2 py-1 w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="border rounded px-2 py-1 w-full"
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded bg-gray-200">Cancel</button>
            <button type="submit" disabled={loading} className="px-4 py-2 rounded bg-blue-600 text-white">
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </Dialog.Panel>
    </Dialog>
  );
}
