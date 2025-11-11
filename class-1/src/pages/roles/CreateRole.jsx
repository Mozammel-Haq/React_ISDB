import { useEffect, useState } from "react"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

 const AddRole = () => {

  const baseUrl = import.meta.env.VITE_BASE_URL
    const navigate = useNavigate('');
      const [role, setRole] = useState({
      name: "",
      description: ""
    })

  const handleChange=(e)=>{
    const{value,name} = e.target;
    setRole((prev)=>(
      {
        ...prev,
        [name]: value
      }
    ))
  }
  const handleSubmit= (e)=>{
    e.preventDefault();
        axios({
      url:`${baseUrl}/role/save`,
      method: "POST",
      data:{
        role
      }
    })
    .then((res)=>{
      console.log(res)
      if(res){
        navigate('/role')
      }
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
          Create User Role
        </h2>

        <form className="grid grid-cols-1 gap-4">
          {/* Name Field */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-600 font-medium">Name</label>
            <input
             name="name"
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
              onChange={handleChange}
            name="description"
              placeholder="Enter Description"
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              </textarea>
          </div>


          {/* Horizontal Button */}
          <div className="flex justify-end mt-4">
            <button 
            onClick={handleSubmit}
            type="submit"
            className="px-6 py-2 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors">
              Create Role
            </button>
          </div>
        </form>
      </div>

    </div>

    </>
  )
}

export default AddRole
