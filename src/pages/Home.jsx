import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from '../components/Navbar'

import Hero from '../sections/Hero'
import About from '../sections/About'
import Projects from '../sections/Projects'

import Footer from '../components/Footer'

function Home() {
    return (
        <div className="flex min-h-screen">
            
                <aside className="w-[30%] min-w-[200px] max-w-[270px] bg-white m-[5px] p-2 rounded-lg">
                    <Navbar/>
                </aside>
                <div className="flex flex-col min-h-screen flex-1">
                    <main className="flex-1 m-[5px] rounded-lg">
                        <Routes>
                            <Route path="/" element={<Hero />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/projects" element={<Projects/>} />
                        </Routes>
                    </main>
                    <footer className="flex justify-center bg-white m-[5px] p-2 rounded-lg h-[25%]">
                        <Footer/>
                    </footer>
                </div>
        </div>
    )
}

export default Home;