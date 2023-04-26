
import { Outlet } from "react-router-dom";
import Footer from "../../components/common/footer/Footer";
import HeaderContainer from "../../components/common/header/HeaderContainer";

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