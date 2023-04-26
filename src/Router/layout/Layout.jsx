import Footer from "../../components/footer/Footer"
import { Outlet } from "react-router-dom";
import HeaderContainer from "../../components/header/HeaderContainer";

const Layout = () => {
  return (
    <>
    <HeaderContainer/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout