import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules"; 
import 'swiper/css';

import StackIcon from "../assets/icon_components/StackIcon";

import ReactIcon from "../assets/icons/react-icon.png";
import LaravelIcon from "../assets/icons/laravel-icon.png"
import PhpIcon from "../assets/icons/php-icon.png";
import GithubIcon from "../assets/icons/github-icon.png";
import VueIcon from "../assets/icons/vue-icon.png";
import HtmlIcon from "../assets/icons/html-icon.png";
import TypescriptIcon from "../assets/icons/typescript-icon.png";

import FigmaIcon from "../assets/icons/figma-icon.png";
import CssIcon from "../assets/icons/css-icon.png";
import MysqlIcon from "../assets/icons/mysql-icon.png";
import JsIcon from "../assets/icons/js-icon.png";
import TailwindIcon from "../assets/icons/tailwind-icon.png";
import ViteIcon from "../assets/icons/vite-icon.png";
import PostmanIcon from "../assets/icons/postman-icon.png";

function SkillSet () {
    return (
        <div className="relative h-full">
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
                        <SwiperSlide><img src={ReactIcon} className="w-[30px] h-[30px]" alt="" /></SwiperSlide>
                        <SwiperSlide><img src={LaravelIcon} className="w-[30px] h-[30px]" alt="" /></SwiperSlide>
                        <SwiperSlide><img src={PhpIcon} className="w-[30px] h-[30px]" alt="" /></SwiperSlide>
                        <SwiperSlide><img src={GithubIcon} className="w-[30px] h-[30px]" alt="" /></SwiperSlide>
                        <SwiperSlide><img src={VueIcon} className="w-[30px] h-[30px]" alt="" /></SwiperSlide>
                        <SwiperSlide><img src={HtmlIcon} className="w-[30px] h-[30px]" alt="" /></SwiperSlide>
                        <SwiperSlide><img src={TypescriptIcon} className="w-[30px] h-[30px]" alt="" /></SwiperSlide>
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
                        <SwiperSlide><img src={FigmaIcon} className="w-[43px] h-[33px]" alt="" /></SwiperSlide>
                        <SwiperSlide><img src={CssIcon} className="w-[33px] h-[33px]" alt="" /></SwiperSlide>
                        <SwiperSlide><img src={MysqlIcon} className="w-[33px] h-[28px]" alt="" /></SwiperSlide>
                        <SwiperSlide><img src={JsIcon} className="w-[33px] h-[33px]" alt="" /></SwiperSlide>
                        <SwiperSlide><img src={TailwindIcon} className="w-[33px] h-[26px]" alt="" /></SwiperSlide>
                        <SwiperSlide><img src={ViteIcon} className="w-[33px] h-[33px]" alt="" /></SwiperSlide>
                        <SwiperSlide><img src={PostmanIcon} className="w-[33px] h-[33px]" alt="" /></SwiperSlide>
                    </Swiper>
                </div>
                <div className="absolute z-10 inset-0 pointer-events-none bg-gradient-to-l to-white dark:to-neutral-800 via-transparent via-80% from-transparent dark:from-transparent w-[100%]"/>
                <div className="absolute z-10 inset-0 pointer-events-none bg-gradient-to-r to-white dark:to-neutral-800 via-transparent via-80% from-transparent dark:from-transparent w-[100%]"/>
            </div>
            
            
        </div>
    )
}

export default SkillSet;