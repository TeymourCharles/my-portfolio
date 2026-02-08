import Education from "../components/Education";
import Footer from "../components/Footer";
import Experience from "../components/Experience";
import LocationIcon from "../assets/icon_components/LocationIcon"
import MessageIcon from "../assets/icon_components/MessageIcon";
import heroBanner3 from "../assets/images/hero-banner/pexels-luis-gomes-166706-546819.jpg";
import MyImage from '../assets/images/my-profile.jpg'

import { motion } from "motion/react";
import { aboutMe } from "../constants";
import { useState } from "react";


function About() {
    const [isExpanded, setIsExpanded] = useState(false);
   
    return (
     
            <div className="flex xl:flex-row flex-col gap-[8px] xl:h-[720px] text-black dark:text-white">
                <div className="flex flex-col gap-[8px] xl:w-[70%] w-[100%]">
                    <div className="relative bg-white dark:bg-neutral-800 w-full h-[41%] rounded-sm animate-fade-in">
                        <div className="overflow-hidden xl:h-[100%] sm:h-[200px] h-auto flex justify-center items-center rounded-sm">
                            <img src={heroBanner3} alt="" />
                        </div>
                        <div className="p-1 z-20 bg-white dark:bg-neutral-800 absolute bottom-8 left-10 flex justify-center items-center rounded-full overflow-hidden max-h-[100px] max-w-[100px]">
                            <img src={MyImage} alt="my image" className="w-[100%] h-[100%] rounded-full"/>
                        </div>
                        <div className="flex flex-col gap-3 text-white lg:mx-[150px] ml-[140px] py-[10px] absolute bottom-11 z-20">
                            <div className="flex gap-2">
                                <LocationIcon/>
                                <h6>Metro Manila, Philippines</h6>
                            </div>
                            <a 

                                href="https://mail.google.com/mail/?view=cm&fs=1&to=villanuevateymour27@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Teymour,%0A%0AI%20saw%20your%20portfolio%20and%20..."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex justify-center active:text-blue-400 active:scale-95 duration-200 text-white w-[100%] max-w-[140px] items-center gap-4 py-1 border border-blue-400 rounded-md px-3">
                                <MessageIcon/>
                                Message
                            </a>
                        </div>
                        <div className="bg-black/10 dark:bg-black/30 bottom-0 left-0 absolute w-full h-[50%] z-10 backdrop-blur-xs"/>
                    </div>
                    
                    <motion.div className="relative overflow-hidden bg-white dark:bg-neutral-800 px-5 pt-4 pb-20 rounded-sm animate-fade-in"
                        initial={false}
                        animate={{ maxHeight: isExpanded ? 400 : 120 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                        <h5 className="pb-2">About</h5>
                        <p className="leading-relaxed">
                            {aboutMe}
                            
                        </p>
                        <span
                        onClick={() => setIsExpanded(!isExpanded)}
                        className={`text-blue-400 dark:text-blue-300 cursor-pointer hover:underline inline absolute
                        bottom-0 left-0 bg-white dark:bg-neutral-800  w-full pl-[20px] pb-3`}
                        >
                        {isExpanded ? "See Less" : "See More"}
                        </span>
                    </motion.div>
                    
                    <footer className="bg-white dark:bg-neutral-800 p-2 rounded-sm lg:h-[25%] animate-fade-in">
                        <Footer/>
                    </footer>
                </div>
                <div className="xl:w-[30%] w-[100%] flex flex-col gap-[8px]">
                    <div className="bg-white dark:bg-neutral-800 rounded-sm p-2 animate-fade-in">
                        <Education/>
                    </div>
                    <div className="min-h-[300px] bg-white dark:bg-neutral-800 rounded-sm p-2 animate-fade-in">
                        <Experience/>
                    </div>
                </div>
            </div>
    )
}

export default About;