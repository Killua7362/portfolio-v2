import { FaGithub, FaLongArrowAltRight } from "react-icons/fa";
import ProjectCard from "./ProjectsCard";
import { ProjectsData } from "../constants";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Projects = ({ settingsValues }) => {
  return (
    <div className="lg:w-10/12 w-full min-h-screen section section-6  mx-auto text-text pt-24">
      {!settingsValues["scroll_snap"] && (
        <div className="text-5xl uppercase text-center my-6">Projects</div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-4 pt-8">
        {ProjectsData.slice(0, 3).map(function (item, i) {
          return <ProjectCard key={i} ProjectData={item} />;
        })}
      </div>
      <div className="text-lg my-8 w-fit">
        <Link
          to="projects"
          className="flex text-text all-project-class-00 items-center visited:text-text hover:text-text/70"
        >
          View All Projects
          <FaLongArrowAltRight className="mt-1 ml-1 all-project-class-01" />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
