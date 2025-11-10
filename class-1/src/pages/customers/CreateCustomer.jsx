import React from 'react'

const CreateCustomer = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center bg-gray-50 p-6"> 
  <div className="w-full max-w-lg bg-white shadow-md rounded-xl p-8">
    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
      Create New Customer
    </h2>

    <form className="grid grid-cols-1 gap-4">
      {/* Name Field */}
      <div className="flex flex-col">
        <label className="mb-1 text-gray-600 font-medium">Name</label>
        <input
          type="text"
          placeholder="Enter full name"
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
      </div>

      {/* Email Field */}
      <div className="flex flex-col">
        <label className="mb-1 text-gray-600 font-medium">Email</label>
        <input
          type="email"
          placeholder="Enter email address"
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
      </div>

      {/* Phone Field */}
      <div className="flex flex-col">
        <label className="mb-1 text-gray-600 font-medium">Phone</label>
        <input
          type="text"
          placeholder="Enter phone number"
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
      </div>

      {/* Address Field */}
      <div className="flex flex-col">
        <label className="mb-1 text-gray-600 font-medium">Address</label>
        <input
          type="text"
          placeholder="Enter address"
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
      </div>

      {/* Photo Upload */}
      <div className="flex flex-col">
        <label className="mb-1 text-gray-600 font-medium">Photo</label>
        <input
          type="file"
          accept="image/*"
          className="px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
      </div>

      {/* Status Dropdown */}
      <div className="flex flex-col">
        <label className="mb-1 text-gray-600 font-medium">Status</label>
        <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400">
          <option value="">Select status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      {/* Button */}
      <div className="flex justify-end mt-4">
        <button className="px-6 py-2 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors">
          Create Customer
        </button>
      </div>
    </form>
  </div>
</div>

    </>
  )
}

export default CreateCustomer
