import Home from "../components/pages/Home/Home";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Register/register";


export const menuRouter = [
    {
        id: "home",
        path: "/",
        Element: Home
    },
    {
        id: "login",
        path: "/login",
        Element: Login
    }
    ,
    {
        id: "register",
        path: "/register",
        Element: Register
    }
]