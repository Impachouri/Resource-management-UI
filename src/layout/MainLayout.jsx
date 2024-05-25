import { Outlet } from "react-router-dom"
import Navbar from "../component/Navbar"

const MainLayout = () => {
    return <>
        <Navbar />
        <main className="h-[90%] w-full">
            <Outlet />
        </main>
    </>
}

export default MainLayout