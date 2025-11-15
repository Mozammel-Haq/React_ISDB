import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditCustomer = () => {
  const [photoPreview, setPhotoPreview] = useState(null);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const mediaBaseUrl = import.meta.env.VITE_MEDIA_BASE_URL;

  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    photo: "", // Can be a file or a string (existing photo URL)
    address: "",
    status: "",
  });

  // Fetch the customer data
  const getCustomer = async () => {
    try {
      const res = await axios.get(`${baseUrl}/customer/find/${id}`);
      if (res.data) {
        setFormData({
          name: res.data.name,
          email: res.data.email,
          phone: res.data.phone,
          photo: res.data.photo, // store backend photo filename
          address: res.data.address,
          status: res.data.status,
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getCustomer();
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file selection and preview
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setPhotoPreview(previewURL);
      setFormData((prev) => ({
        ...prev,
        photo: file, // store file for upload
      }));
    } else {
      setPhotoPreview(null);
      setFormData((prev) => ({
        ...prev,
        photo: "",
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("id", id);
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("address", formData.address);
    form.append("status", formData.status);

    if (formData.photo instanceof File) {
      form.append("photo", formData.photo); // upload new file
    }

    try {
      const res = await axios.put(`${baseUrl}/customer/update/${id}`, form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(res.data);
      // navigate("/customer");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="w-full flex flex-col items-center justify-center">
      {/* Title */}
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-[2rem] font-bold text-emerald-600 leading-[36px] my-2">
          Edit Customer
        </h1>
        <p className="text-[1rem] dark:text-slate-400 text-[#424242]">
          Please edit the details to modify the customer.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-2xl mt-[50px]">
        {/* Name & Email */}
        <div className="flex flex-col sm:flex-row items-center gap-[20px]">
          <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
            <label className="text-[#777777] mb-1">Customer Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              className="border border-emerald-600 rounded-md outline-none px-4 py-3 dark:bg-transparent dark:border-slate-700 dark:text-[#abc2d3] w-full focus:border-emerald-600 transition-colors duration-300"
            />
          </div>

          <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
            <label className="text-[#777777] mb-1">Email Address</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              className="border border-emerald-600 rounded-md outline-none px-4 py-3 w-full dark:bg-transparent dark:border-slate-700 dark:text-[#abc2d3] focus:border-emerald-600 transition-colors duration-300"
            />
          </div>
        </div>

        {/* Phone & Address */}
        <div className="flex flex-col sm:flex-row items-center gap-[20px] mt-[20px]">
          <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
            <label className="text-[#777777] mb-1">Phone Number</label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="text"
              className="border border-emerald-600 rounded-md outline-none px-4 py-3 dark:bg-transparent dark:border-slate-700 dark:text-[#abc2d3] w-full focus:border-emerald-600 transition-colors duration-300"
            />
          </div>

          <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
            <label className="text-[#777777] mb-1">Address</label>
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              type="text"
              className="border border-emerald-600 rounded-md outline-none px-4 py-3 dark:bg-transparent dark:border-slate-700 dark:text-[#abc2d3] w-full focus:border-emerald-600 transition-colors duration-300"
            />
          </div>
        </div>

        {/* Photo Upload with Preview */}
        <div className="flex gap-10 items-center w-full mt-[20px]">
          <div className="mt-3 flex justify-center shrink-0">
            <img
              src={
                photoPreview
                  ? photoPreview
                  : formData.photo
                  ? `${mediaBaseUrl}/profiles/${formData.photo}`
                  : "/public/img/avatar-01.jpg"
              }
              alt="Preview"
              className="w-16 h-16 rounded-full object-cover border border-gray-300 shadow-sm"
            />
          </div>

          <div className="flex flex-col w-full">
            <label className="text-[#777777] mb-1">Photo</label>
            <input
              name="photo"
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="border border-emerald-600 rounded-md outline-none px-4 py-3 dark:bg-transparent dark:border-slate-700 dark:text-[#abc2d3] w-full focus:border-emerald-600 transition-colors duration-300 file:mr-3 file:py-2 file:px-3 file:rounded-md file:border-0 file:bg-emerald-600 file:text-white hover:file:bg-emerald-600"
            />
          </div>

          <div className="flex flex-col gap-[5px] w-full">
            <label className="text-[#777777] mb-1">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="border border-emerald-600 rounded-md outline-none px-4 py-3 w-full dark:bg-transparent dark:border-slate-700 dark:text-[#abc2d3] focus:border-emerald-600 transition-colors duration-300 appearance-none"
            >
              <option value="" disabled>
                Select Status
              </option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="py-2 px-6 border border-emerald-600 text-emerald-600 rounded font-[500] relative overflow-hidden z-10 mt-[20px] hover:bg-emerald-600 hover:text-white transition-all duration-300"
        >
          Update Customer
        </button>
      </form>
    </section>
  );
};

export default EditCustomer;
