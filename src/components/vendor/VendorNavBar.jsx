import React from 'react'

const VendorNavBar = () => {
  return (
    <div>
      <nav className="bg-orange-500 p-4 flex flex-col sm:flex-row justify-between items-center text-white text-center">
        <div className="text-lg font-semibold mb-2 sm:mb-0">Vendor Dashboard</div>
        <div className="text-lg font-semibold mb-2 sm:mb-0">Firname :</div>
        <div className="text-lg font-semibold">Login / Register</div>
      </nav>
    </div>
  )
}

export default VendorNavBar;
