import  {React, useState } from "react";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Registered:", formData);
    setSuccessMessage("Registration successful!");
    setFormData({ name: "", phone: "", email: "" });
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded-lg shadow-lg w-96 transition-transform duration-300 ease-in-out transform hover:scale-105">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1 transition-colors duration-300 ease-in-out focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1 transition-colors duration-300 ease-in-out focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1 transition-colors duration-300 ease-in-out focus:border-blue-500"
            required
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-2 rounded transition-transform duration-300 ease-in-out hover:bg-blue-600 hover:scale-105">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;