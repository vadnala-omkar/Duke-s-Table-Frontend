import {React, useState } from "react";

const VendorAddProduct = () => {
  return (
    <div>
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[600px]">
                <h2 className="text-center font-bold text-lg">Add Product</h2>
                
                <label className="block mt-4">Product Name</label>
                <input className="border p-2 w-full" type="text" />

                <label className="block mt-4">Price</label>
                <input className="border p-2 w-full" type="text" />

                <label className="block mt-4">Category</label>
                <div className="flex gap-4">
                <label><input type="checkbox" /> Veg</label>
                <label><input type="checkbox" /> Non-Veg</label>
                </div>

                <label className="block mt-4">Best Seller</label>
                <div className="flex gap-4">
                <label><input type="radio" name="best_seller" /> Yes</label>
                <label><input type="radio" name="best_seller" /> No</label>
                </div>

                <label className="block mt-4">Description</label>
                <input className="border p-2 w-full" type="text" />

                <label className="block mt-4">Product Image</label>
                <input className="border p-2 w-full" type="file" />

                <button className="bg-blue-600 text-white px-4 py-2 mt-4 w-full">Submit</button>
            </div>
            </div>
    </div>
  )
}

export default VendorAddProduct;
