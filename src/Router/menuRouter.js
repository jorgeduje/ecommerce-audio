import Home from "../components/pages/Home/Home";
import Login from "../components/pages/Login/Login";
import RegisterContainer from "../components/pages/Register/RegisterContainer";
import CategoryContainer from "../components/pages/Category/CategoryContainer";

export const menuRouter = [{
        id: "home",
        path: "/",
        Element: Home
    },
    {
        id: "login",
        path: "/login",
        Element: Login
    },
    {
        id: "register",
        path: "/register",
        Element: RegisterContainer
    },
    {
        id: "category",
        path: "/category",
        Element: CategoryContainer
    }
]