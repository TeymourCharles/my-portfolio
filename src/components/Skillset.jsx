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
import BootstrapIcon from "../assets/icons/bootstrap.png"; 

import FigmaIcon from "../assets/icons/figma-icon.png";
import CssIcon from "../assets/icons/css-icon.png";
import MysqlIcon from "../assets/icons/mysql-icon.png";
import JsIcon from "../assets/icons/js-icon.png";
import TailwindIcon from "../assets/icons/tailwind-icon.png";
import ViteIcon from "../assets/icons/vite-icon.png";
import PostmanIcon from "../assets/icons/postman-icon.png";
import DockerIcon from "../assets/icons/docker.png"

const firstArray = [
    ReactIcon, LaravelIcon, PhpIcon, GithubIcon, VueIcon, HtmlIcon, TypescriptIcon, BootstrapIcon
]

const secondArray = [
    FigmaIcon, CssIcon, MysqlIcon, JsIcon, TailwindIcon, ViteIcon, PostmanIcon, DockerIcon
]

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