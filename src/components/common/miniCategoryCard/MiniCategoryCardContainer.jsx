import { useNavigate } from "react-router-dom";
import { menu } from "../../../Router/navigation";
import MiniCategoryCard from "./MiniCategoryCard";



const MiniCategoryCardContainer = ({images, category, }) => {
  const navigate = useNavigate();
  function linkearCategoria() {
    menu.map((item) => {
      if (item.title === category) {
        navigate(item.path)
      } 
    })
  }
  return (
    <MiniCategoryCard images={images} category={category} linkearCategoria={linkearCategoria}/>
  )
}

export default MiniCategoryCardContainer;
