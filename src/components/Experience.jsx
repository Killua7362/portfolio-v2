import { experience } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";

const Experience = ({ settingsValues }) => {
  return (
    <div
      className={`w-screen min-h-screen flex flex-col items-center section section-5  ${!settingsValues["scroll_snap"] ? "pt-0" : "pt-24"}`}
    >
      {!settingsValues["scroll_snap"] && (
        <div className="text-5xl uppercase mb-8 text-text">Experience</div>
      )}
      <div>
        <VerticalTimeline
          animate={true}
          className=" lg:w-8/12 relative z-10 top-4"
          layout="1-column-left"
          lineColor="#e4f3fb"
        >
          {experience.map((exp, i) => {
            return <ExperienceCard key={i} experience={exp} />;
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
