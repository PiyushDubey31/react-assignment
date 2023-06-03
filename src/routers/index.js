import Dashboard from "../components/Dashboard";
import Login from "../components/Login";

let BaseRoutes = [
    {
        path: "/",
        exact: true,
        element: <Dashboard/>
    },
    // {
    //     path: "/login",
    //     exact: true,
    //     element: <Login/>
    // }
]
export default BaseRoutes