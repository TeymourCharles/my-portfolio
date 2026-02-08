import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from '../components/Navbar'

import Hero from '../sections/Hero'
import About from '../sections/About'
import Projects from '../sections/Projects'

import Footer from '../components/Footer'

import { NavLink } from "react-router-dom";

const navDesign = `flex-1 lg:flex-none block py-2.5 px-3 lg:px-2 text-center lg:text-left rounded-lg lg:rounded-sm
                    text-sm lg:text-base font-medium transition-all duration-200 active:scale-85`
function Home() {
    return (
        <div className="relative flex lg:flex-row flex-col gap-[2px] min-h-screen">
                <div className="lg:hidden flex lg:flex-col gap-1 lg:gap-2 w-full py-2 sticky top-0 lg:static z-10 backdrop-blur-xs">
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
                <aside className="flex w-[30%] my-[5px] lg:min-w-[200px] lg:max-w-[240px] w-[100%] bg-white dark:bg-neutral-800 lg:p-2 p-4 rounded-sm">
                    <Navbar/>
                </aside>
                <div className="relative flex flex-col lg:min-h-screen lg:max-h-screen lg:overflow-y-auto overflow-y-hidden overflow-x-hidden flex-1">
                    <main className="flex-1 m-[5px] rounded-lg">
                        <Routes>
                            <Route path="/" element={<Hero />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/projects" element={<Projects/>} />
                        </Routes>
                    </main>
                    
                </div>
        </div>
    )
}

export default Home;