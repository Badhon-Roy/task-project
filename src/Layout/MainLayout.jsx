import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


const MainLayout = () => {
    return (
        <div className="max-w-[375px] max-h-[667px] border-[6px] border-[#333] mx-auto my-[50px] rounded-[20px] shadow-custom">
            <Outlet></Outlet>
            <Navbar></Navbar>
        </div>
    );
};

export default MainLayout;