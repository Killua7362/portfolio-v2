import { experience } from "../constants";
import { VerticalTimeline, VerticalTimelineElement, }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ExperienceCard from "./ExperienceCard";
const Experience = () => {
    return (
        <div className=" mt-96 w-10/12 mx-auto">
            <div className="about-me-text text-black text-4xl relative z-20">
                Experience
            </div>
            <div>
            <VerticalTimeline animate={false} className="top-[-15px] relative z-10" layout="1-column-left" lineColor="black">
                  {experience.map((exp,i)=>{
                    return <ExperienceCard key={i} experience={exp}/>
                  })}
                </VerticalTimeline>       
            </div>
        </div>
      );
}
 
export default Experience;