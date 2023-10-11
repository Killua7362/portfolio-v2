import { FaGithub } from "react-icons/fa";
import ProjectCard from "./ProjectsCard";
import { ProjectsData } from "../constants";

const Projects = () => {
    return (
        <div className="w-full lg:w-10/12 mx-auto text-text pt-4">
            <div className="text-4xl pb-6 border-solid border-b-[1px] border-text/50 pt-8">
                Projects
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 pt-8">
                {ProjectsData.map(function (item,i){
                    return(
                        <ProjectCard key={i} ProjectData={item}/>
                    )
                })}
            </div>
        </div>
      );
}
 
export default Projects;