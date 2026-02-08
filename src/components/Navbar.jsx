import { NavLink } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";


import MyImage from '../assets/images/my-profile.jpg'
import ResumeIcon from "../assets/icon_components/ResumeIcon";
import DownloadIcon from "../assets/icon_components/DownloadIcon";
import ResumePreviewModal from "./navbar/ResumePreviewModal";

const navDesign = `flex-1 lg:flex-none block py-2.5 px-3 lg:px-2 text-center lg:text-left rounded-lg lg:rounded-sm
                    text-sm lg:text-base font-medium transition-all duration-200`

function Navbar() {
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    const handleDownloadResume = () => {
        const link = document.createElement("a");
        link.href = "/TeymourCharles-Resume.pdf"; // path from public folder
        link.download = "TeymourCharles-Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handlePreviewResume = () => {
        setIsResumeOpen(true);
    };

    const handleCloseResume = () => {
        setIsResumeOpen(false);
    };

    return (
        <nav className="flex flex-col gap-2 w-full relative h-full dark:text-white">
            <div className="flex lg:flex-col sm:flex-row flex-col justify-start items-center lg:gap-2 sm:gap-10 gap-3 lg:pl-0 sm:pl-7 pl-0">
                <div className="flex justify-center">
                    <div className="flex justify-center items-center rounded-full overflow-hidden max-h-[190px] max-w-[190px]">
                        <img src={MyImage} alt="my image" className="md:w-[160px] md:h-[160px] w-[160px] h-[100px] min-h-[160px]"/>
                    </div>
                    
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col items-center">
                        <h6 className="font-bold">Teymour Charles S. Villanueva</h6>
                        <h6>Full-stack Developer</h6>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex justify-center w-[100%] max-w-[200px]">
                                <button onClick={handlePreviewResume} type="button" className="flex justify-center items-center bg-gradient-to-r to-blue-700 from-blue-400 transition-all duration-500
                            hover:to-blue-600 hover:from-blue-300 gap-2 rounded-l-lg py-[4px] px-2 w-full  border-black dark:border-white text-white">
                                    <ResumeIcon size={18} className="text-white"/>

                                    Preview Resume
                                </button>
                                <ResumePreviewModal isOpen={isResumeOpen} close={handleCloseResume}/>
                                <button onClick={handleDownloadResume} className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-r-lg px-3 hover:from-blue-500 to-blue-700">
                                    <DownloadIcon size={17} className="text-white"/>
                                </button>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            
            <div className="lg:flex hidden lg:flex-col gap-1 lg:gap-2 w-full py-5 sticky top-0 lg:static z-10">
                <NavLink 
                    to="/" 
                    className={({isActive}) => `${navDesign}
                    ${isActive 
                        ? "bg-iceGray dark:bg-neutral-600 text-blue-500 dark:text-blue-400 shadow-sm" 
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-700"
                    }
                    `}
                >
                    Hero
                </NavLink>
                
                <NavLink 
                    to="/about" 
                    className={({isActive}) => `${navDesign}
                    ${isActive 
                        ? "bg-iceGray dark:bg-neutral-600 text-blue-500 dark:text-blue-400 shadow-sm" 
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-700"
                    }
                    `}
                >
                    About
                </NavLink>
                
                <NavLink 
                    to="/projects" 
                    className={({isActive}) => `${navDesign}
                    ${isActive 
                        ? "bg-iceGray dark:bg-neutral-600 text-blue-500 dark:text-blue-400 shadow-sm" 
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-700"
                    }
                    `}
                >
                    Projects
                </NavLink>
            </div>
            <div className="absolute lg:bottom-0 right-0 lg:top-auto top-0 lg:w-full">
                <ThemeToggle/>
            </div>
           
        </nav>
    )
}

export default Navbar;