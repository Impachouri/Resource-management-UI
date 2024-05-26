import { Outlet } from "react-router-dom"
import Navbar from "../component/Navbar"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
    return <>
        <Navbar />
        <main className="md:h-[90%] w-full bg-[#FBFBFB] font-grotesk">
            <ToastContainer />
            <Outlet />
        </main>
    </>
}

export default MainLayout