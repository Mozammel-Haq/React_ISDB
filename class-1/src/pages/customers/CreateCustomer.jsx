import React, { useState } from "react";

const AddCustomer = () => {
  const [photoPreview, setPhotoPreview] = useState(null);

  // Handle file selection and preview
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setPhotoPreview(previewURL);
    } else {
      setPhotoPreview(null);
    }
  };

  return (
    <section className="w-full flex flex-col items-center justify-center">
      {/* Title */}
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-[2rem] font-bold text-[#3B9DF8] leading-[36px] my-2">
          Create New Customer
        </h1>
        <p className="text-[1rem] dark:text-slate-400 text-[#424242]">
          Please fill in the details to add a new customer.
        </p>
      </div>

      {/* Form */}
      <form className="w-full max-w-2xl mt-[50px]">
        {/* Name & Email */}
        <div className="flex flex-col sm:flex-row items-center gap-[20px]">
          <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
            <label className="relative">
              <input
                type="text"
                className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 dark:bg-transparent dark:border-slate-700 dark:text-[#abc2d3] w-full focus:border-[#3B9DF8] transition-colors duration-300"
              />
              <span className="absolute top-3 left-5 text-[#777777] peer-focus:-top-3 peer-focus:bg-white dark:peer-focus:bg-darkBgColor peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] peer-focus:px-1 transition-all duration-300">
                Customer Name
              </span>
            </label>
          </div>

          <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
            <label className="relative">
              <input
                type="email"
                className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full dark:bg-transparent dark:border-slate-700 dark:text-[#abc2d3] focus:border-[#3B9DF8] transition-colors duration-300"
              />
              <span className="absolute top-3 left-5 text-[#777777] peer-focus:-top-3 peer-focus:bg-white dark:peer-focus:bg-darkBgColor peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] peer-focus:px-1 transition-all duration-300">
                Email Address
              </span>
            </label>
          </div>
        </div>

        {/* Phone & Address */}
        <div className="flex flex-col sm:flex-row items-center gap-[20px] mt-[20px]">
          <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
            <label className="relative">
              <input
                type="text"
                className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 dark:bg-transparent dark:border-slate-700 dark:text-[#abc2d3] w-full focus:border-[#3B9DF8] transition-colors duration-300"
              />
              <span className="absolute top-3 left-5 text-[#777777] peer-focus:-top-3 peer-focus:bg-white dark:peer-focus:bg-darkBgColor peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] peer-focus:px-1 transition-all duration-300">
                Phone Number
              </span>
            </label>
          </div>

          <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
            <label className="relative">
              <input
                type="text"
                className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 dark:bg-transparent dark:border-slate-700 dark:text-[#abc2d3] w-full focus:border-[#3B9DF8] transition-colors duration-300"
              />
              <span className="absolute top-3 left-5 text-[#777777] peer-focus:-top-3 peer-focus:bg-white dark:peer-focus:bg-darkBgColor peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] peer-focus:px-1 transition-all duration-300">
                Address
              </span>
            </label>
          </div>
        </div>

        {/* Photo Upload with Preview */}
        <div className="flex gap-10 items-center w-full mt-[20px]">
                    {/* Show preview if available */}
          {photoPreview && (
            <div className="mt-3 flex justify-center">
              <img
                src={photoPreview}
                alt="Preview"
                className="w-16 h-16 rounded-full object-cover border border-gray-300 shadow-sm"
              />
            </div>
          )}
          <label>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 dark:bg-transparent dark:border-slate-700 dark:text-[#abc2d3] w-full focus:border-[#3B9DF8] transition-colors duration-300 file:mr-3 file:py-2 file:px-3 file:rounded-md file:border-0 file:bg-[#3B9DF8] file:text-white hover:file:bg-[#2e7fd1]"
            />
          </label>


        </div>

        {/* Status Dropdown */}
        <div className="flex flex-col gap-[5px] w-full mt-[20px]">
          <label className="relative">
            <select
              className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full dark:bg-transparent dark:border-slate-700 dark:text-[#abc2d3] focus:border-[#3B9DF8] transition-colors duration-300 appearance-none"
              defaultValue=""
            >
              <option value="" disabled>
                Select Status
              </option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="py-2 px-6 border border-[#3B9DF8] text-[#3B9DF8] rounded font-[500] relative overflow-hidden z-10 mt-[20px] hover:bg-[#3B9DF8] hover:text-white transition-all duration-300"
        >
          Add Customer
        </button>
      </form>
    </section>
  );
};

export default AddCustomer;
