import Header from "./Header/Header"
import Sidebar from "./Sidebar/Sidebar"
import Footer from "./Footer/Footer"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <Header/>
      <div className="flex gap-4 w-full">
        <Sidebar/>
        <Outlet/>
      </div>
      

      <Footer/>
    </>
  )
}

export default Layout

