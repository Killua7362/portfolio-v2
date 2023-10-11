import { FaGithub } from "react-icons/fa";

const ProjectCard= () => {
    return (
            <div className="relative text-base p-4 overflow-y-hidden bg-primary/60 px-8 rounded-xl">
                <div className="absoulte w-full min-h-[20rem] mb-6 lg:mb-0">
                <div className="text-lg font-bold">
                    Project Name                      
                </div>
                <div className="text-text/80 text-base">
                    It's a full stack application which is used to parse the markdown files in a folder and render them on my personal digital garden.
                </div>
                <div className="pt-2">
                    <img src="projects/project.webp"/>
                </div>
                <div className="flex pt-4">
                    <FaGithub className='bg-black rounded-full text-3xl'/>
                    <div className="flex text-black justify-center items-center pl-2 gap-x-2 text-sm">
                        <div className=" bg-[#35a9e3] rounded-2xl px-2 py-1 w-16 text-center">
                            tech 1
                        </div>
                        <div className="">
                            tech 2
                        </div>
                    </div>
                </div>
                </div>
            </div>
      );
}
 
export default ProjectCard
;