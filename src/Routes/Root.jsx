import { Outlet } from "react-router-dom";
import Navbar from '../Layout/Navbar/Navbar' 
import Footer from '../Layout/Footer/Footer' 
const Root = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;