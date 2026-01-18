import { useEffect, useState } from "react";
import CareerStats from "../components/CareerStats";
import SkillSet from "../components/Skillset";
import Expertise from "../components/Expertise";
import Footer from "../components/Footer";
import DateIcon from "../assets/icon_components/DateIcon";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules"; 
import 'swiper/css';
import TextType from "../components/TextType";
import heroBanner1 from "../assets/images/hero-banner/pexels-bradleyhook-123335.jpg"
import heroBanner2 from "../assets/images/hero-banner/pexels-lastly-699122.jpg";
import heroBanner3 from "../assets/images/hero-banner/pexels-luis-gomes-166706-546819.jpg";

const herobanner = [
    heroBanner1,
    heroBanner2,
    heroBanner3
]
function Hero() {
    const date = new Date();
    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);

    const getGreeting = () => {
        const hour = new Date().getHours();

        if (hour < 12) return "Good morning";
        if (hour < 18) return "Good afternoon";
        return "Good evening";
    };

    return (
    <div className="flex flex-row gap-[8px] h-full text-black dark:text-white">
        <div className="flex flex-col gap-[8px] w-[70%] min-h-screen">
            <div className="relative bg-white dark:bg-neutral-800 w-full h-[44%] max-h-[300px] rounded-sm flex justify-center items-center overflow-hidden">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1} // <-- Controls how many logos show at once
                    loop={true}
                    speed={1000}
                    autoplay={{ 
                        delay: 3000, 
                        disableOnInteraction: false,
                        reverseDirection: false
                    }}
                    
                    >
                        {herobanner.map((item, index) => (
                            <SwiperSlide key={index} className=""><img src={item} className="max-w-full max-h-full object-contain" alt="" /></SwiperSlide>
                        ))}
                    
                    
                </Swiper>
                <div className="flex items-center gap-3 absolute top-2 left-3 z-10 text-white">
                    <DateIcon/>
                    <h5 className="font-mono">{formattedDate}</h5>
                </div>
                <div className="absolute bottom-3 left-7 z-10 text-white">
                        <TextType 
                            text={[
                                `Hello, ${getGreeting()}!`,
                                "Got a project in mind? Lets chat!",
                                
                            ]}
                            typingSpeed={80}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                            cursorClassName="cursor-blink"
                            className="text-[23px] font-mono"
                        />
                </div>
            </div>
            <div className="bg-white dark:bg-neutral-800 py-[15px] px-[20px] rounded-sm p-2">
                <CareerStats/>
            </div>
            <footer className="bg-white dark:bg-neutral-800 p-2 rounded-sm h-[25%]">
                <Footer/>
            </footer>
        </div>
        <div className="flex flex-col gap-[8px] w-[30%]">
            <div className="h-auto bg-white dark:bg-neutral-800 rounded-sm p-2">
                <SkillSet/>
            </div>
            <div className="h-auto bg-white dark:bg-neutral-800 rounded-sm p-2">
                <Expertise/>
            </div>
        </div>
        
        
    </div>
    )
}

export default Hero;