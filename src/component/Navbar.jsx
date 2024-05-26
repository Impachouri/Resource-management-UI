import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="h-[10%] w-screen bg-[#FFFFFF] py-4 px-8 border-b-2 font-grotesk">
            <div className="w-full h-full flex items-center justify-between">
                <Link to="/" className="h-full ">
                    <img className="h-full w-18" src="logo.svg" alt="logo" />
                </Link>
                <div className="h-full flex gap-8 items-center justify-center">
                    <Link to="add-item" className="h-full w-40 bg-primaryButton flex items-center justify-center text-white  rounded text-xl font-semibold">
                        ADD ITEM
                    </Link>
                    <img className="h-full  rounded-full" src="aman.jpg" alt="aman" />
                </div>
            </div>
        </nav >
    )
}

export default Navbar