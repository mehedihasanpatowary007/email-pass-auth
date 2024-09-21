import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Root from "./Root";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import Index from "../PageNoteFound/Index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      {path:'*', element:<Index/>}
    ],
  },
]);
