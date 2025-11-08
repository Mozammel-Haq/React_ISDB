import Footer from "../../layout/Footer/Footer"
import Header from "../../layout/Header/Header"
import Sidebar from "../../layout/Sidebar/Sidebar"

const RoleList = () => {
  return (
    <>
    <Header/>
    <div className="flex gap-5 w-full">
        <Sidebar/>
       <div className="w-full px-40 py-10">
        <h1 className="text-center mb-8 font-bold text-3xl">#Role List</h1>
        <table class="min-w-full border border-gray-200">
  <thead class="bg-gray-100">
    <tr>
      <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700">Name</th>
      <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700">Email</th>
      <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700">Role</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b">
      <td class="px-4 py-2">John Doe</td>
      <td class="px-4 py-2">john@example.com</td>
      <td class="px-4 py-2">Admin</td>
    </tr>
  </tbody>
</table>


       </div>
       </div>
        <Footer/>
       </>

  )
}

export default RoleList
