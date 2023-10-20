import { FaGithub, FaLongArrowAltRight } from "react-icons/fa";
import ProjectCard from "./ProjectsCard";
import { ProjectsData } from "../constants";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'

const Projects = () => {
    return (
        <div className="w-full lg:w-10/12 mx-auto text-text pt-4"
        >
        <motion.div className="text-4xl pb-6 pt-8 "
          initial='hidden'
          whileInView='visible'
          viewport={{once:false}}
          transition={{duration:0.3,delay:0.1}}
          variants={{
            visible:{opacity:1,y:0},
            hidden:{opacity:0,y:50}
          }}
            >
                Projects
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 pt-8">
                {ProjectsData.map(function (item,i){
                    return(
                        <ProjectCard key={i} ProjectData={item}/>
                    )
                })}
            </div>
            <div className="text-lg my-8 w-fit">
            <Link to='projects' className="flex text-text all-project-class-00 items-center visited:text-text">
                View All Projects
                <FaLongArrowAltRight className='mt-1 ml-1 all-project-class-01'/>
            </Link>
            </div>
        </div>
      );
}
 
export default Projects;