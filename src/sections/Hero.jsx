import CareerStats from "../components/CareerStats";
import SkillSet from "../components/Skillset";
import Expertise from "../components/Expertise";
import Footer from "../components/Footer";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules"; 
import 'swiper/css';

import heroBanner1 from "../assets/images/hero-banner/pexels-bradleyhook-123335.jpg"
import heroBanner2 from "../assets/images/hero-banner/pexels-lastly-699122.jpg";
import heroBanner3 from "../assets/images/hero-banner/pexels-luis-gomes-166706-546819.jpg";

const herobanner = [
    heroBanner1,
    heroBanner2,
    heroBanner3
]
function Hero() {
    return (
    <div className="flex flex-row gap-[8px] h-full text-black dark:text-white">
        <div className="flex flex-col gap-[8px] w-[70%] min-h-screen">
            <div className="bg-white dark:bg-neutral-800 w-full h-[44%] max-h-[300px] rounded-sm flex justify-center items-center overflow-hidden">
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