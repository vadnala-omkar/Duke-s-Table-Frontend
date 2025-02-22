import React from 'react'
import { useState } from "react";


const VendorAddFirm = () => {
  return (
    <div>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="bg-white p-6 rounded-lg shadow-lg w-[600px]">
                    <h2 className="text-center font-bold text-lg">Add Firm</h2>
                    <label className="block mt-4">Firm Name</label>
                    <input className="border p-2 w-full" type="text" />

                    <label className="block mt-4">Area</label>
                    <input className="border p-2 w-full" type="text" />

                    <label className="block mt-4">Category</label>
                    <div className="flex gap-4">
                    <label><input type="checkbox" /> Veg</label>
                    <label><input type="checkbox" /> Non-Veg</label>
                    </div>

                    <label className="block mt-4">Offer</label>
                    <input className="border p-2 w-full" type="text" />

                    <label className="block mt-4">Region</label>
                    <div className="flex gap-4">
                    <label><input type="checkbox" /> South Indian</label>
                    <label><input type="checkbox" /> North-Indian</label>
                    <label><input type="checkbox" /> Chinese</label>
                    <label><input type="checkbox" /> Bakery</label>
                    </div>

                    <label className="block mt-4">Firm Image</label>
                    <input className="border p-2 w-full" type="file" />

                    <button className="bg-blue-600 text-white px-4 py-2 mt-4 w-full">Submit</button>
                </div>
                </div>
    </div>
  )
}

export default VendorAddFirm;



