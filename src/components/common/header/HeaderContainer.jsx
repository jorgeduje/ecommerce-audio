import Header from "./Header"
import { useNavigate } from "react-router-dom";
import { menu } from "../../../Router/navigation"; 
import { useWindowSize } from "../../../utils/useWindowSize";
import { useState } from "react";

const HeaderContainer = () => {
  const size = useWindowSize(null);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Header size={size} navigate={navigate} menu={menu} open={open} handleOpen={handleOpen} handleClose={handleClose}/>
  )
}

export default HeaderContainer