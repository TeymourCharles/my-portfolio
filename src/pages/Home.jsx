import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from '../components/Navbar'

import Hero from '../sections/Hero'
import About from '../sections/About'
import Projects from '../sections/Projects'

import Footer from '../components/Footer'

function Home() {
    return (
        <div className="flex flex-row gap-[2px] min-h-screen">
            
                <aside className="flex w-[30%] my-[5px] min-w-[200px] max-w-[240px] bg-white dark:bg-neutral-800 p-2 rounded-sm">
                    <Navbar/>
                </aside>
                <div className="flex flex-col min-h-screen max-h-screen overflow-auto flex-1">
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