import { FaGithub, FaLongArrowAltRight } from "react-icons/fa";
import {motion} from 'framer-motion'
const ProjectCard= ({ProjectData}) => {
    return (
        <motion.div className="relative text-base p-4 bg-primary px-8 rounded-xl"
          initial='hidden'
          whileInView='visible'
          viewport={{once:false}}
          transition={{duration:0.3,delay:0.1}}
          variants={{
            visible:{opacity:1,y:0},
            hidden:{opacity:0,y:100}
          }}
            >
                <div className="absoulte w-full mb-2 lg:mb-0">
                <div className="text-lg font-bold flex justify-start items-center gap-x-1">
                    <div>
                    {ProjectData.name}
                    </div>
                    {ProjectData.live !== '' && <div className="pt-1">
                        <FaLongArrowAltRight/>
                    </div> }
                </div>
                <div className="text-text/80 text-base">
                    {ProjectData.description}
                </div>
                <div className="pt-4">
                    <img src={`projects/${ProjectData.img_src}`} className="h-full w-full max-w-[350px] max-h-[200px]"/>
                </div>
                <div className="flex justify-start pt-4">
                    <a href={ProjectData.github_link} className="text-text">
                        <FaGithub className='rounded-full text-3xl'/>
                    </a>
                    <div className="flex text-black justify-start pl-2 pr-2 gap-3 text-xs flex-wrap">
                        {ProjectData.tech_stack.map(function(item,i){
                            return(
                            <div className=" bg-[#35a9e3] rounded-2xl px-2 py-1 text-center whitespace-nowrap">
                                {item}
                            </div>
                            )
                        })}
                    </div>
                </div>
                </div>
            </motion.div>
      );
}
 
export default ProjectCard
;