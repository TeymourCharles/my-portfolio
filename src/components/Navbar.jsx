import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";


import MyImage from '../assets/images/my-profile.jpg'
import ResumeIcon from "../assets/icon_components/ResumeIcon";
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
                <div className="flex justify-center w-[100%] max-w-[200px]">
                        <button type="button" className="flex justify-center items-center bg-gradient-to-r to-blue-700 from-blue-400 transition-all duration-500
                    hover:to-blue-600 hover:from-blue-300 gap-2 rounded-l-lg py-[4px] px-2 w-full  border-black dark:border-white text-white">
                            <ResumeIcon size={18} className="text-white"/>

                            Preview Resume
                        </button>
                        <button className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-r-lg px-3 hover:from-blue-500 to-blue-700">
                            <DownloadIcon size={17} className="text-white"/>
                        </button>
                </div>
                
            </div>
            <div className="">
                <div className="">
                        <NavLink to="/" className={({isActive}) => `block py-2 px-2 w-full rounded-sm ${isActive && "bg-iceGray dark:bg-neutral-600 font-medium text-blue-500 dark:text-blue-400"}`}>Hero</NavLink>
                </div>
                <div className="">
                        <NavLink to="/about" className={({isActive}) => `block py-2 px-2 w-full rounded-sm ${isActive && "bg-iceGray dark:bg-neutral-600 font-medium text-blue-500 dark:text-blue-400"}`}>About</NavLink>
                </div>
                <div className="">
                        <NavLink to="/projects" className={({isActive}) => `block py-2 px-2 w-full rounded-sm ${isActive && "bg-iceGray dark:bg-neutral-600 font-medium text-blue-500 dark:text-blue-400"}`}>Projects</NavLink>
                </div>
            </div>
            <div className="absolute bottom-0 right-0">
                <ThemeToggle/>
            </div>
           
        </nav>
    )
}

export default Navbar;