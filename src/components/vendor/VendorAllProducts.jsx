import React from 'react'

const VendorAllProducts = () => {
    const products = [
        { name: "Vanilla Ice cream", price: 180, image: "/images/vanilla.png" },
        { name: "Chocolate Ice cream", price: 190, image: "/images/chocolate.png" },
      ];

  return (
    <div className='h-[100vh]'>
        <h1 className='text-center mt-5'>All Products</h1>
      <div className="flex justify-center mt-10 mb-10">
        <table className="border-collapse border w-3/4">
            <thead>
            <tr className="bg-blue-600 text-white">
                <th className="border p-2">Product Name</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Image</th>
                <th className="border p-2">Delete</th>
            </tr>
            </thead>
            <tbody>
            {products.map((product, index) => (
                <tr key={index} className="text-center">
                <td className="border p-2">{product.name}</td>
                <td className="border p-2">₹{product.price}</td>
                <td className="border p-2">
                    <img src={product.image} alt={product.name} className="w-12 h-12 mx-auto" />
                </td>
                <td className="border p-2">
                    <button className="text-red-500 hover:underline">Delete</button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default VendorAllProducts;
