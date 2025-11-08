import Button from "../../components/Button"
import Logo from "../../components/Logo"
import Navbar from "../../components/navbar"

const Header = () => {
  return (

      <header className="flex justify-between px-40 align-center items-center h-20 border-b-2 border-emerald-500">
      <Logo/>
      <Navbar/>
      <Button/>
    </header>

  )
}

export default Header
