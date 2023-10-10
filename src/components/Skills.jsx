import { useState } from "react";
import { skills } from "../constants";

const Skills = () => {
    const[active,setActive] = useState(Object.keys(skills)[0])
    const handleClick = (event)=>{
      setActive(event.target.id)
    }
    return (
      <div className="absolute w-full h-5/6  flex">
        <div className="w-3/12  text-white mr-2 grid grid-cols-1 auto-rows-min p-6 gap-4">
          {
            Object.keys(skills).map(function(name,index){
              return(
                <div className={`text-center h-[5vh] bg-black w-full item-1 ${active === name?'text-green-800':''}`} id={name} onClick={handleClick} >
                  {name}
                 </div>) 
            })
          }
        </div>
        <div className="grid grid-cols-4 gap-4  p-6 auto-rows-min w-9/12 data-lenis-prevent-wheel cursor-all-scroll overflow-y-scroll relative " style={{scrollbarWidth:'none'}}>

        {skills[active].map(function(name,index){
          return(
        <div className="text-black bg-white w-full h-[5vh] text-center rounded-md data-lenis-prevent p-2 text-lg outline-1 outline-black outline-double">
          {name}
        </div>
          )
        })}
        </div>
      </div>
      );
}
 
export default Skills;