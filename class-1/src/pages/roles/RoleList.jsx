import { useEffect, useState } from "react";
import axios from 'axios';
const RoleList = () => {

  const [roles, setRoles] = useState([])
  
  useEffect(()=>{
    axios({
      method: "GET",
      url:"https://dummyjson.com/users",
      data: {}
    })
    .then((res)=>{
      setRoles(res.data.users)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <>

       <div className="w-full px-40 py-10">
        <h1 className="text-center mb-8 font-bold text-3xl">#Role List</h1>
        <table class="min-w-full border border-gray-200">
  <thead class="bg-gray-100">
    <tr>

      <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700">ID</th>
      <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700">Name</th>
    </tr>
  </thead>
  <tbody>

    {
      roles.map((role)=>
          <tr class="border-b">
      <td class="px-4 py-2">{role.id}</td>
      <td class="px-4 py-2">{role.firstName}</td>
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
