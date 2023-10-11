import { FaGithub } from "react-icons/fa";

const ProjectCard= ({ProjectData}) => {
    return (
            <div className="relative text-base p-4 overflow-y-hidden bg-primary/60 px-8 rounded-xl">
                <div className="absoulte w-full min-h-[20rem] mb-6 lg:mb-0">
                <div className="text-lg font-bold">
                    {ProjectData.name}
                </div>
                <div className="text-text/80 text-base">
                    {ProjectData.description}
                </div>
                <div className="pt-2">
                    <img src={`projects/${ProjectData.img_src}`} className="max-w-[350px] max-h-[200px]"/>
                </div>
                <div className="flex justify-start items-center pt-4">
                    <a href={ProjectData.github_link} className="text-text">
                        <FaGithub className='rounded-full text-3xl'/>
                    </a>
                    <div className="flex text-black justify-center items-center pl-2 gap-x-2 text-sm">
                        {ProjectData.tech_stack.map(function(item,i){
                            return(
                            <div className=" bg-[#35a9e3] rounded-2xl px-2 py-1 w-16 text-center">
                                {item}
                            </div>
                            )
                        })}
                    </div>
                </div>
                </div>
            </div>
      );
}
 
export default ProjectCard
;