import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";


import MyImage from '../assets/images/my-profile.jpg'
import DownloadIcon from "../assets/icon_components/DownloadIcon";


function Navbar() {
    return (
        <nav className="flex flex-col gap-2 w-full relative h-full dark:text-white">
            <div className="flex justify-center">
                <div className="flex justify-center items-center rounded-full overflow-hidden max-h-[190px] max-w-[190px]">
                    <img src={MyImage} alt="my image" className="md:w-[160px] md:h-[160px] w-[160px] h-[100px]"/>
                </div>
                
            </div>
            <div className="flex flex-col items-center">
                <h6 className="font-bold">Teymour Charles S. Villanueva</h6>
                <h6>Full-stack Developer</h6>
            </div>
            <div className="flex justify-center">
                <button type="button" className="flex justify-center active:scale-95 duration-200 gap-2 border rounded-lg py-[5px] px-2 w-[100%] min-w-[100px] border-black dark:border-white text-black dark:text-white">
                    <DownloadIcon size={18} className="text-black dark:text-white"/>

                    Download Resume
                </button>
            </div>
            <div className="">
                <div className="">
                        <NavLink to="/" className={({isActive}) => `block py-2 px-2 w-full rounded-sm ${isActive && "bg-iceGray dark:bg-neutral-600 font-medium"}`}>Hero</NavLink>
                </div>
                <div className="">
                        <NavLink to="/about" className={({isActive}) => `block py-2 px-2 w-full rounded-sm ${isActive && "bg-iceGray dark:bg-neutral-600 font-medium"}`}>About</NavLink>
                </div>
                <div className="">
                        <NavLink to="/projects" className={({isActive}) => `block py-2 px-2 w-full rounded-sm ${isActive && "bg-iceGray dark:bg-neutral-600 font-medium"}`}>Projects</NavLink>
                </div>
            </div>
            <div className="absolute bottom-0 right-0">
                <ThemeToggle/>
            </div>
           
        </nav>
    )
}

export default Navbar;