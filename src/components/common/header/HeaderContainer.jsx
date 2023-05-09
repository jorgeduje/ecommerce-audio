import Header from "./Header"
import { useNavigate } from "react-router-dom";
import { menu } from "../../../Router/navigation"; 
import { useWindowSize } from "../../../utils/useWindowSize";

const HeaderContainer = () => {
  const size = useWindowSize(null);
  const navigate = useNavigate();
  return (
    <Header size={size} navigate={navigate} menu={menu}/>
  )
}

export default HeaderContainer