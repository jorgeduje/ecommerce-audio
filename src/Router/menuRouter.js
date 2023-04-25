import Home from "../components/pages/Home/Home";
import Login from "../components/pages/Login/Login";


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
]