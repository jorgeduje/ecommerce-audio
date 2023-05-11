import CartContainer from "../components/pages/Cart/CartContainer";
import Checkout from "../components/pages/Checkout/Checkout";
import Home from "../components/pages/Home/Home";
import LoginContainer from "../components/pages/Login/LoginContainer";
import RegisterContainer from "../components/pages/Register/RegisterContainer";
import ProductDetailContainer from "../components/pages/productDetail/ProductDetailContainer";

export const menuRouter = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "login",
    path: "/login",
    Element: LoginContainer,
  },
  {
    id: "register",
    path: "/register",
    Element: RegisterContainer,
  },
  {
    id: "category",
    path: "/category/:categoryName",
    Element: Home,
  },
  {
    id: "productdetail",
    path: "/product/:id",
    Element: ProductDetailContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: Checkout,
  },
];
