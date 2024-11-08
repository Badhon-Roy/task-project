import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import '../../src/index.css'


const MainLayout = () => {
    return (
        <div className="max-w-[375px] max-h-[667px] h-[667px] border-[6px] border-[#333] mx-auto my-[50px] rounded-[20px] shadow-custom relative overflow-hidden">
            <div className="h-full pb-16 overflow-y-auto scrollbar-hide bg-[#f4f8fa]">
                <Outlet></Outlet>
            </div>
            <div className="absolute bottom-0 left-0 z-10 w-full bg-white">
                <Navbar></Navbar>
            </div>
        </div>
    );
};

export default MainLayout;