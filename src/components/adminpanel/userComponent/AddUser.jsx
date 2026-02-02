"use client";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";

const AddUser = () => {
  const [formData, setFormData] = useState({
    userId: "",
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

     const { CREATEUSER } = await import("../../../actions/userAction");

    const res = await CREATEUSER(formData); 

    setLoading(false);

    if (res.success) {
      alert("User Created Successfully!");

      setFormData({
        userId: "",
        name: "",
        email: "",
        phone: "",
        password: "",
        role: "",
      });

    } else {
      alert(res.error || "Failed to create user");
    }
  };

  return (
    <div className="w-full p-8">
      <h2 className="text-xl font-bold mb-4">Create a New User</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className=" grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
            className=" p-2 rounded h-[3.5rem] outline-none bg-site-gray placeholder:text-site-text"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className=" p-2 rounded h-[3.5rem] outline-none bg-site-gray placeholder:text-site-text"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
            maxLength={10}
            minLength={10}
            value={formData.phone}
            onChange={handleChange}
            className=" p-2 rounded h-[3.5rem] outline-none bg-site-gray placeholder:text-site-text"
          />
          <div className=" w-full h-[3.5rem] flex items-center bg-site-gray rounded p-2">
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              required
              value={formData.password}
              onChange={handleChange}
              className=" w-full  rounded h-[3.5rem] outline-none bg-site-gray placeholder:text-site-text"
            />
            <button className=" text-center">
            <FaEye />
            </button>
          </div>

          <select
            name="role"
            required
            value={formData.role}
            onChange={handleChange}
            className=" p-2 rounded h-[3.5rem] outline-none bg-site-gray placeholder:text-site-text"
          >
            <option value="">Select Role</option>
            <option value="ADMIN">Admin</option>
            <option value="STAFF">Staff</option>
            <option value="USER">User</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className="bg-site-main text-lg text-white py-2 rounded h-[3.5rem]"
          >
            {loading ? "Creating..." : "Add User"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
