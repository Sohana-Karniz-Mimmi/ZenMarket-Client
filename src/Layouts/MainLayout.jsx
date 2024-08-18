import { Outlet } from "react-router-dom";
import Topbar from "../Shared/Navbar/Topbar";
import Navbar from "../Shared/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Topbar></Topbar>
            <div className="sticky top-0 z-50 ">
                <Navbar></Navbar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;