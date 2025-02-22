import React from 'react'

const VendorRegister = () => {
  return (
    <div>
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
                <h2 className="text-center font-bold text-lg">Vendor Register</h2>
                
                <label className="block mt-4">Username</label>
                <input className="border p-2 w-full" type="text" placeholder="Enter username" />
                
                <label className="block mt-4">Email</label>
                <input className="border p-2 w-full" type="email" placeholder="Enter email" />
                
                <label className="block mt-4">Password</label>
                <input className="border p-2 w-full" type="password" placeholder="Enter password" />
                
                <button className="bg-blue-600 text-white px-4 py-2 mt-4 w-full">Register</button>
            </div>
        </div>
    </div>
  )
}

export default VendorRegister;
