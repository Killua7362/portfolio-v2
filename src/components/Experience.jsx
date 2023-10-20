import { experience } from "../constants";
import { VerticalTimeline, VerticalTimelineElement, }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ExperienceCard from "./ExperienceCard";
const Experience = () => {
    return (
        <div className=" mt-96 w-full lg:w-10/12 mx-auto">
            <div className="text-4xl pb-6 border-solid border-b-[1px] text-text border-text/50 pt-8 relative z-20 ">
                Experience
            </div>
            <div>
            <VerticalTimeline animate={false} className=" ml-[-10px] lg:w-10/12 relative z-10 top-4" layout="1-column-left" lineColor="#e4f3fb">
                  {experience.map((exp,i)=>{
                    return <ExperienceCard key={i} experience={exp}/>
                  })}
                </VerticalTimeline>       
            </div>
        </div>
      );
}
 
export default Experience;