import { FaGithub, FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";
import './components.css'
const ProjectCard = ({ ProjectData }) => {
  return (
    <motion.div
      className="relative text-base p-4 bg-[#1C1C1F] px-8 rounded-xl lg:w-5/6 w-fit border-white/30 border-[0.01px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.3, delay: 0.1 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
    >
      <div className="absoulte w-full mb-2 lg:mb-0">
        <div className="text-lg font-bold flex justify-start items-center gap-x-1">
          <div>{ProjectData.name}</div>
          {ProjectData.live !== "" && (
            <div className="pt-1">
              <FaLongArrowAltRight />
            </div>
          )}
        </div>
        <div
            className={`pt-4 relative image-zoom`}
         >
          <img
            src={`projects/${
              ProjectData.img_src === "" ? "noimage.png" : ProjectData.img_src
            }`}
            className={`h-full w-full max-w-[350px] max-h-[200px] border-white/30 border-[0.1px] rounded-lg image-zoom`}
          />
          <div className="z-50 absolute flex flex-col justify-center items-center top-3 w-full h-full text-text image-frame image-cover rounded-md bg-[#0D1117]">
            <div className="flex justify-around items-center w-10/12 h-5/6 flex-col p-1">
              <div className="text-base">
                {ProjectData.description}
              </div>
              {ProjectData.live !== "" &&
               <a href={ProjectData.live} target="_blank" tabIndex={-1} className="text-sm hover:text-white/70 text-white rounded-2xl bg-[#1C1C1F] p-2 px-4 border-white/30 border-[0.1px] cursor-pointer image-frame">
                  Visit Website
              </a>
              }
            </div>
          </div>
        </div>
        <div className="flex justify-start pt-4">
          <a href={ProjectData.github_link} tabindex="-1" className="text-text">
            <FaGithub className="rounded-full text-3xl hover:text-text/70 text-text" />
          </a>
          <div className="flex text-black justify-start pl-2 pr-2 gap-3 text-xs flex-wrap">
            {ProjectData.tech_stack.map(function (item, i) {
              return (
                <div className=" bg-[#222222] text-text rounded-2xl px-2 py-1 text-center whitespace-nowrap border-white/30 border-[0.1px]">
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
