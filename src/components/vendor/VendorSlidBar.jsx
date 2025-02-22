import { FaHome, FaBox, FaPlus, FaUser, FaSignOutAlt } from "react-icons/fa";
import { React, useState } from "react";

const VendorSlidBar = () => {
    const [active, setActive] = useState("Dashboard");
  return (
    <div>
        <div className="w-64 h-[90vh] bg-orange-500 text-white p-4">
            <h2 className="text-xl font-bold text-center mb-6">Vendor Panel</h2>
            <ul>
                <li
                className={`p-3 flex items-center gap-2 cursor-pointer rounded-md ${
                    active === "AddFirm" ? "bg-orange-400" : ""
                }`}
                onClick={() => setActive("AddFirm")}
                >
                <FaPlus /> Add Firm
                </li>
                <li
                className={`p-3 flex items-center gap-2 cursor-pointer rounded-md ${
                    active === "AddProduct" ? "bg-orange-400" : ""
                }`}
                onClick={() => setActive("AddProduct")}
                >
                <FaPlus /> Add Product
                </li>
                <li
                className={`p-3 flex items-center gap-2 cursor-pointer rounded-md ${
                    active === "AllProducts" ? "bg-orange-400" : ""
                }`}
                onClick={() => setActive("AllProducts")}
                >
                <FaBox /> All Products
                </li>
                <li
                className={`p-3 flex items-center gap-2 cursor-pointer rounded-md ${
                    active === "UserDetails" ? "bg-orange-400" : ""
                }`}
                onClick={() => setActive("UserDetails")}
                >
                <FaUser /> User Details
                </li>
                <li
                className="p-3 flex items-center gap-2 text-red-900  cursor-pointer rounded-md text-red-500"
                onClick={() => console.log("Logging out...")}
                >
                <FaSignOutAlt /> Logout
                </li>
            </ul>
        </div>
    </div>
  )
}

export default VendorSlidBar;
