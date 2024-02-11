import React from 'react';

const RegisterForm = ({ formData, handleInputChange}) => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Register</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e)=> handleInputChange("email",e.target.value)}
            className="block w-full border rounded-md py-2 px-3 mb-4 focus:outline-none focus:border-green-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e)=> handleInputChange("password",e.target.value)}
            className="block w-full border rounded-md py-2 px-3 mb-4 focus:outline-none focus:border-green-500"
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;