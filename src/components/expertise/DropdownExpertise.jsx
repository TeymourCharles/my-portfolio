import { motion } from "motion/react"
import { useState } from "react";
import ArrowIcon from "../../assets/icon_components/ArrowIcon";

function DropdownExpertise ({ title, text, isExpand, toggle }) {
     const expand = isExpand;

    return (
        <div className="px-3 pt-2 flex flex-col gap-2">
            <div onClick={toggle} className="flex justify-between items-center cursor-pointer">
                <div>
                    <h6 className="font-semibold">{title}</h6>
                </div>
                <motion.div 
                    className=""
                    animate={{ 
                        rotate: expand ? 90 : 0
                    }}
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                    }}
                >
                    <ArrowIcon />
                </motion.div>
        
            </div>
            <motion.p
                className="overflow-hidden text-[12px]"
                initial={false}
                animate={{
                    height: expand ? "auto" : 0,
                    opacity: expand ? 1 : 0
                }}
                transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                }}
                >
                {text}
            </motion.p>
          
        </div>
    )
}

export default DropdownExpertise;