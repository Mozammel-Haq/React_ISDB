import Footer from "../../layout/Footer/Footer"
import Header from "../../layout/Header/Header"
import Sidebar from "../../layout/Sidebar/Sidebar"

const CreateRole = () => {
  return (
    <>
    <Header/>
    <div className="flex gap-5 w-full">
        <Sidebar/>
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

          {/* Role Dropdown */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-600 font-medium">Role</label>
            <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400">
              <option value="">Select role</option>
              <option value="admin">Admin</option>
              <option value="editor">Editor</option>
              <option value="viewer">Viewer</option>
            </select>
          </div>

          {/* Horizontal Button */}
          <div className="flex justify-end mt-4">
            <button className="px-6 py-2 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors">
              Create Role
            </button>
          </div>
        </form>
      </div>
    </div>

    </div>


    <Footer/>
    </>
  )
}

export default CreateRole
