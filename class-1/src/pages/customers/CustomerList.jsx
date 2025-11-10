import { useEffect, useState } from "react";
import axios from 'axios';
const CustomerList = () => {

  const [customers, setCustomers] = useState([])
  
  useEffect(()=>{
    axios({
      method: "GET",
      url:"http://localhost/elctro_Ecom_project/Admin/api/customer",
      data: {}
    })
    .then((res)=>{
      console.log(res.data.customers)
      setCustomers(res.data.customers)
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
      <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700">Email</th>
      <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700">Phone</th>
      <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700">Photo</th>
      <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700">Address</th>
      <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700">Status</th>
    </tr>
  </thead>
  <tbody>

    {
      customers.map((customer)=>
          <tr class="border-b">
      <td class="px-4 py-2">{customer.id}</td>
      <td class="px-4 py-2">{customer.name}</td>
      <td class="px-4 py-2">{customer.email}</td>
      <td class="px-4 py-2">{customer.phone}</td>
      <td class="px-4 py-2">{customer.photo}</td>
      <td class="px-4 py-2">{customer.address}</td>
      <td class="px-4 py-2">{customer.status}</td>
    </tr>
      )
    }



  </tbody>
</table>


       </div>
       </>

  )
}

export default CustomerList
