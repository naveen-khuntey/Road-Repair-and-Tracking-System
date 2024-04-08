import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
export default function Complaint() {
   // State variable for form data
   const {user} = useAuth0();
   const [formData, setFormData] = useState({
    location: '',
    type: '',
    comment: '',
    email : user.email,
  });
  const navigate = useNavigate();
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform further actions like submitting the form data to an API here
      console.log('Form submitted:', formData);
      alert('Complaint submitted successfully');
      navigate('/');
  };

  // Function to handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className=" mt-9 max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-[#5a697c] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="location">
            Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            type="text"
            placeholder="Enter location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="type">
            Type
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="type"
            type="text"
            placeholder="Enter type"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="comment">
            Comment
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="comment"
            placeholder="Enter comment"
            name="comment"
            value={formData.comment}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
