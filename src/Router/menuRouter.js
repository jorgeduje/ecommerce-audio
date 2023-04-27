import Home from "../components/pages/Home/Home";
import Login from "../components/pages/Login/Login";
import RegisterContainer from "../components/pages/Register/RegisterContainer";

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
    }
]