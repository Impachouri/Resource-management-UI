import { Outlet } from "react-router-dom"
import Navbar from "../component/Navbar"

const MainLayout = () => {
    return <>
        <Navbar />
        <main className="md:h-[90%] w-full bg-[#FBFBFB] font-grotesk">
            <Outlet />
        </main>
    </>
}

export default MainLayout