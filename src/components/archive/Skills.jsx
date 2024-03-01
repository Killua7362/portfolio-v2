import { useState } from "react";
import { skills } from "../constants";
import {motion} from 'framer-motion'

const Skills = () => {
    const[active,setActive] = useState(Object.keys(skills)[0])
    const handleClick = (event)=>{
      setActive(event.target.id)
    }
    return (
      <motion.div className="absolute w-8/12 h-full flex mx-auto pt-3"
          initial='hidden'
          whileInView='visible'
          viewport={{once:false}}
          transition={{duration:0.6,delay:0.5}}
          variants={{
            visible:{opacity:1,y:0},
            hidden:{opacity:0,y:50}
          }}
      >
        <div className="w-3/12  text-text mr-2 grid grid-cols-1 auto-rows-min lg:p-6 py-6 gap-4 text-xs md:text-base lg:text-lg overflow-y-scroll scrollbar-thin scrollbar-thumb-[#363636] scrollbar-track-[#222222]" style={{direction:'rtl'}} data-lenis-prevent>
          {
            Object.keys(skills).map(function(name,index){
              return(
                <div className={`text-center flex justify-center items-center h-11 p-2  w-full rounded-md cursor-pointer ${active === name?'bg-primary/80':''}`} id={name} onClick={handleClick} >
                  {name}
                 </div>) 
            })
          }
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 pl-4 py-6 lg:p-6 auto-rows-min w-9/12 overflow-y-scroll cursor-grabbing scrollbar-thin scrollbar-thumb-[#363636] scrollbar-track-[#222222]" data-lenis-prevent>

        {skills[active].map(function(name,index){
          return(
        <div className=" w-full h-11 flex justify-center items-center rounded-md p-2  bg-primary/70 whitespace-nowrap ">
              <div className="text-xs md:text-[1.9vmin]">
                {name}
              </div>
        </div>
          )
        })}
        </div>
      </motion.div>
      );
}
 
export default Skills;
