import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from '../components/Navbar'

import Hero from '../sections/Hero'
import About from '../sections/About'
import Projects from '../sections/Projects'

import Footer from '../components/Footer'

function Home() {
    return (
        <Router>
            <div className="flex min-h-screen bg-gray-200">
                
                    <sidebar className="w-[20%] min-w-[150px] max-w-[200px]">
                        <Navbar/>
                    </sidebar>
                    <div className="flex flex-col min-h-screen flex-1">
                        <main className="flex-1">
                            <Routes>
                                <Route path="/" element={<Hero />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/projects" element={<Projects/>} />
                            </Routes>
                        </main>
                        <footer className="flex justify-center">
                            <Footer/>
                        </footer>
                    </div>
            </div>
            
        </Router>
    )
}

export default Home;