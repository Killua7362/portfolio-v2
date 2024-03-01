import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { FcLink, FcClock } from "react-icons/fc";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1C1C1F",
        border: 1,
        borderColor: "black",
      }}
      contentArrowStyle={{ borderRight: "7px solid white" }}
      iconStyle={{
        background: "white",
        outline: `3px solid ${experience.icon_outline}`,
      }}
      icon={
        <div className="w-100 h-100 object-fill">
          <img src={experience.img_src} className="rounded-full p-1" />
        </div>
      }
    >
      <div className="py-4 px-6 flex flex-col text-text">
        <div className="flex text-base pb-1 text-text/60 items-center gap-x-4">
          <FcClock size={30} />
          {experience.date}
        </div>
        <h3 className="text-[1.2rem] lg:text-[1.7rem] font-bold uppercase">
          {experience.title}
        </h3>
        <div
          className={`flex items-center gap-x-2 text-[1.1rem] text-${experience.company_color}`}
        >
          {experience.company_name}
          <a target="_blank" href={experience.company_site} tabindex="-1">
            <FcLink />
          </a>
        </div>
        <ul className="list-disc pl-4 pt-1 ">
          {experience.points.map((point, index) => {
            return <li className="text-[1.1rem] tracking-wider">{point}</li>;
          })}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};
export default ExperienceCard;
