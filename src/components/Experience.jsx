import { experience } from "../constants";
import { VerticalTimeline, VerticalTimelineElement, }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ExperienceCard from "./ExperienceCard";
import {motion} from 'framer-motion'

const Experience = () => {
    return (
        <div className=" mt-96 w-full lg:w-10/12 mx-auto">
            <motion.div className="text-4xl pb-6 text-text text-textpt-8 relative z-20 "
            
          initial='hidden'
          whileInView='visible'
          viewport={{once:false}}
          transition={{duration:0.3,delay:0.3}}
          variants={{
            visible:{opacity:1},
            hidden:{opacity:0}
          }}
            >
                Experience
            </motion.div>
            <div>
            <VerticalTimeline animate={true} className=" ml-[-10px] lg:w-10/12 relative z-10 top-4" layout="1-column-left" lineColor="#e4f3fb">
                  {experience.map((exp,i)=>{
                    return <ExperienceCard key={i} experience={exp}/>
                  })}
                </VerticalTimeline>       
            </div>
        </div>
      );
}
 
export default Experience;