import Education from "../components/Education";
import Footer from "../components/Footer";
import Experience from "../components/Experience";
import { motion } from "motion/react";

import { useState } from "react";

import LocationIcon from "../assets/icon_components/LocationIcon"
import MessageIcon from "../assets/icon_components/MessageIcon";
import heroBanner3 from "../assets/images/hero-banner/pexels-luis-gomes-166706-546819.jpg";
import MyImage from '../assets/images/my-profile.jpg'


function About() {
    const [isExpanded, setIsExpanded] = useState(false);

    const text = `I’m a Frontend Developer with hands-on experience in React and Vue, 
                passionate about building responsive, user-friendly web applications that 
                solve real-world problems. Beyond frontend development, I have experience 
                creating backend APIs, integrating databases, and ensuring smooth communication 
                between client and server. I am also comfortable deploying projects, setting up 
                environments, and managing applications in live production, which gives me a full-stack
                perspective on web development.

                I enjoy working on scalable solutions, optimizing performance, and writing clean, 
                maintainable code. I thrive in collaborative environments, learning from real-world 
                challenges, and continuously improving my skills by exploring new frameworks, tools, and 
                technologies. My goal is to create web applications that not only look great but also deliver
                    seamless functionality and performance for both users and businesses.`
    const limit = 290;
    return (
     
            <div className="flex flex-row gap-[8px] h-[720px] text-black dark:text-white">
                <div className="flex flex-col gap-[8px] w-[70%]">
                    <div className="relative bg-white dark:bg-neutral-800 w-full h-[41%] rounded-sm">
                        <div className="overflow-hidden h-[100%] flex justify-center items-center rounded-sm">
                            <img src={heroBanner3} alt="" />
                        </div>
                        <div className="p-1 z-20 bg-white dark:bg-neutral-800 absolute bottom-8 left-10 flex justify-center items-center rounded-full overflow-hidden max-h-[100px] max-w-[100px]">
                            <img src={MyImage} alt="my image" className="w-[100%] h-[100%] rounded-full"/>
                        </div>
                        <div className="flex flex-col gap-3 text-white mx-[150px] py-[10px] absolute bottom-11 z-20">
                            <div className="flex gap-2">
                                <LocationIcon/>
                                <h6>Metro Manila, Philippines</h6>
                            </div>
                            <button type="button" className="flex justify-center active:text-blue-400 active:scale-95 duration-200 text-white w-[100%] max-w-[140px] items-center gap-4 py-1 border border-blue-400 rounded-md px-3">
                                <MessageIcon/>
                                Message
                            </button>
                        </div>
                        <div className="bg-black/10 dark:bg-black/30 bottom-0 left-0 absolute w-full h-[50%] z-10 backdrop-blur-xs"/>
                    </div>
                    
                    <motion.div className="relative overflow-hidden bg-white dark:bg-neutral-800 px-5 pt-4 pb-20 rounded-sm"
                        initial={false}
                        animate={{ maxHeight: isExpanded ? 400 : 120 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                        <h5 className="pb-2">About</h5>
                        <p className="leading-relaxed">
                            {text}
                            
                        </p>
                        <span
                        onClick={() => setIsExpanded(!isExpanded)}
                        className={`text-blue-400 dark:text-blue-300 cursor-pointer hover:underline inline absolute
                        bottom-0 left-0 bg-white dark:bg-neutral-800  w-full pl-[20px] pb-3`}
                        >
                        {isExpanded ? "See Less" : "See More"}
                        </span>
                    </motion.div>
                    
                    <footer className="bg-white dark:bg-neutral-800 p-2 rounded-sm h-[25%]">
                        <Footer/>
                    </footer>
                </div>
                <div className="w-[30%] flex flex-col gap-[8px]">
                    <div className="bg-white dark:bg-neutral-800 rounded-sm p-2">
                        <Education/>
                    </div>
                    <div className="min-h-[300px] bg-white dark:bg-neutral-800 rounded-sm p-2">
                        <Experience/>
                    </div>
                </div>
            </div>
    )
}

export default About;