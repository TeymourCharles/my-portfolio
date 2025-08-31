import { NavLink } from "react-router-dom";
import MyImage from '../assets/samp-user-img.png'

function Navbar() {
    return (
        <nav className="flex flex-col gap-2 w-full">
            <div className="flex justify-center">
                <img src={MyImage} alt="my image" className="md:w-[150px] md:h-[150px] w-[100px] h-[100px]"/>
            </div>
            <div className="flex flex-col items-center">
                <h6 className="font-bold">Teymour Charles S. Villanueva</h6>
                <h6>Full-stack Developer</h6>
            </div>
            <div className="flex justify-center">
                <button type="button" className="border-2 rounded-lg py-1 px-2 w-[100%] min-w-[100px] border-gray-300 text-gray-500">Resume</button>
            </div>
            <div className="">
                <div className="">
                    <NavLink to="/" className={({isActive}) => `block py-2 px-2 w-full rounded-sm ${isActive && "bg-iceGray font-medium"}`}>Hero</NavLink>
                </div>
                <div className="">
                        <NavLink to="/about" className={({isActive}) => `block py-2 px-2 w-full rounded-sm ${isActive && "bg-iceGray font-medium"}`}>About</NavLink>
                </div>
                <div className="">
                        <NavLink to="/projects" className={({isActive}) => `block py-2 px-2 w-full rounded-sm ${isActive && "bg-iceGray font-medium"}`}>Projects</NavLink>
                </div>
            </div>
            
           
        </nav>
    )
}

export default Navbar;