import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const RoleList = () => {

    const baseUrl = import.meta.env.VITE_BASE_URL
  const navigate = useNavigate()

  const getRoles = ()=>{
        axios({
      method: "GET",
      url:`${baseUrl}/role`,
      data: {}
    })
    .then((res)=>{
      console.log(res.data.roles)
      setRoles(res.data.roles)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const [roles, setRoles] = useState([])
  
  useEffect(()=>{
    getRoles()
  },[])

  const handleDeleteRole =(id)=>{
       axios({
      url:`${baseUrl}/role/delete`,
      method: "DELETE",
      data:{
        id:id
      }
    })
    .then((res)=>{
      console.log(res)
      getRoles()
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  const handleEditRole =(id)=>{
       navigate(`/role/edit/${id}`)
  }

  return (
    <>

       <div className="w-full px-40 py-10">
        <h1 className="text-center mb-8 font-bold text-3xl">#Role List</h1>
        <table className="min-w-full border border-gray-200">
  <thead className="bg-gray-100">
    <tr>

      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">SL</th>
      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Name</th>
      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Description</th>
      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Action</th>
    </tr>
  </thead>
  <tbody>

    {
      roles.map((role,i)=>
          <tr className="border-b" key={i}>
      <td className="px-4 py-2">{++i}</td>
      <td className="px-4 py-2">{role.name}</td>
      <td className="px-4 py-2">{role.description}</td>
      <td className="px-4 py-2">
        <button className="bg-none outline-0 border-0" onClick={()=>handleEditRole(role.id)}>✏️</button>&nbsp; &nbsp;
        <button className="bg-none outline-0 border-0" onClick={()=>handleDeleteRole(role.id)}>🗑️</button>
        </td>
    </tr>
      )
    }



  </tbody>
</table>


       </div>
       </>

  )
}

export default RoleList
