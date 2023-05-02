import Home from "../components/pages/Home/Home";
import LoginContainer from "../components/pages/Login/LoginContainer";
import RegisterContainer from "../components/pages/Register/RegisterContainer";

export const menuRouter = [{
        id: "home",
        path: "/",
        Element: Home
    },
    {
        id: "login",
        path: "/login",
        Element: LoginContainer
    },
    {
        id: "register",
        path: "/register",
        Element: RegisterContainer
    }
]