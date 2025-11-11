import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
const EditRole = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL
  const {id} = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    description:""
  })
  // Get Current Role
  useEffect(()=>{
    axios({
      url:`${baseUrl}/role/find/${id}`,
      method: "GET",
      data:{
        id:id
      }
    })
    .then((res)=>{
      console.log(res)
      setFormData({
        name: res.data.role.name,
        description: res.data.role.description,
      });
    })
    .catch((err)=>{
      console.log(err)
    })
  },[id])
  // Handle Input Changes

  const handleChange = (e)=>{
    const{value,name} = e.target;
    setFormData((prev)=>(
      {
      ...prev,
      [name]:value
    }
    ))
  }

// HANDle Update
const handleUpdate=(e)=>{
  e.preventDefault()
  axios({
      url:`${baseUrl}/role/update`,
      method: "PUT",
      data:{
        id:id,
        name:formData.name,
        description: formData.description
      }
    })
    .then((res)=>{
      console.log(res)
      navigate("/role")
    })
    .catch((err)=>{
      console.log(err)
    })
}



  return (
    <>
     <div className="w-full flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-lg bg-white shadow-md rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Edit User Role
        </h2>

        <form className="grid grid-cols-1 gap-4" onSubmit={handleUpdate}>
          {/* Name Field */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-600 font-medium">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Enter full name"
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-600 font-medium">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description"
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          {/* Horizontal Button */}
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors"
            >
              Update Role
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default EditRole
