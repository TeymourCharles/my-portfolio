import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules"; 
import 'swiper/css';
import { firstArray, secondArray } from "../constants"

import StackIcon from "../assets/icon_components/StackIcon";

function SkillSet () {
    return (
        <div className="relative lg:h-full max-h-[100px]">
            <div className="flex gap-3">
                <StackIcon className=""/>
                <h5>Skill Set</h5>
            </div>
            <div className="flex flex-col relative gap-4 py-5 w-full">
                <div className="">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={5} // <-- Controls how many logos show at once
                        loop={true}
                        speed={4000}
                        autoplay={{ 
                            delay: 0, 
                            disableOnInteraction: false,
                            reverseDirection: true
                        }}
                       
                        >
                        {firstArray.map((item, index) => (
                            <SwiperSlide key={index}><img src={item} className="w-[30px] h-[30px]" alt="" /></SwiperSlide>
                        ))}
                        
                        
                    </Swiper>
                </div>
                <div className="">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={5} // <-- Controls how many logos show at once
                        loop={true}
                        autoplay={{ delay: 1000, disableOnInteraction: false }}
                        
                        >
                        {secondArray.map((item, index) => (
                            <SwiperSlide key={index}><img src={item} className="w-[30px] h-[30px]" alt="" /></SwiperSlide>
                        ))}
                        
                        
                    </Swiper>
                </div>
                <div className="absolute z-10 inset-0 pointer-events-none bg-gradient-to-l to-white dark:to-neutral-800 via-transparent via-80% from-transparent dark:from-transparent w-[100%]"/>
                <div className="absolute z-10 inset-0 pointer-events-none bg-gradient-to-r to-white dark:to-neutral-800 via-transparent via-80% from-transparent dark:from-transparent w-[100%]"/>
            </div>
            
            
        </div>
    )
}

export default SkillSet;