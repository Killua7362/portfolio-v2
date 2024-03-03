import NavBar from "./Navbar";
import { ProjectsData } from "../constants";
import { FaGithub} from "react-icons/fa";

const ProjectPage = () => {
  return (
    <div className="h-full pb-10 w-screen bg-background text-text" data-lenis-prevent>
      <NavBar />
      <div className="w-11/12 sm:w-10/12 lg:w-8/12 2xl:w-6/12 h-full mx-auto relative z-30">
        <div className="text-3xl sm:text-5xl pt-10 border-solid border-b-2 border-text/20 pb-6">
          ALL PROJECTS
        </div>
        <div className="mt-6 flex flex-col gap-y-4">
          {
            ProjectsData.map((ele,idx)=>{
              return(
                  <div className="bg-[#1C1C1F] border-white/30 border-[0.1px] p-6 px-10 gap-y-2 rounded-2xl flex flex-col sm:items-start items-center">
                  <div className={`text-xs p-1 rounded-xl text-white w-fit bg-[${ele.tag === "ML"?"#C10528":ele.tag === "WEB"?"#CD921E":"#20A7D8"}]`}>
                    {ele.tag}
                  </div>
                  <div className="flex justify-between w-full items-center flex-col gap-y-3 sm:flex-row sm:gap-y-0">
                    <div className="text-3xl font-semibold ">
                      <div>
                        {ele.name}
                      </div>
                    </div>
                    <div className="flex gap-x-2 text-xs flex-wrap gap-y-2">
                      {
                        ele.tech_stack.map((e,i)=>{
                          return(
                            <div className=" bg-[#222222] text-text rounded-2xl px-2 py-1 text-center whitespace-nowrap border-white/30 border-[0.1px]">
                              {e}
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                  <div className="text-xl text-text/80">
                    {ele.description}
                  </div>
                  <a className="flex gap-x-2 items-center text-white hover:text-white/80" target="_blank" tabIndex={-1} href={ele.github_link}>
                    <FaGithub size={20}/>
                    code
                  </a>
                </div>
              )
            })
          }

        </div>
      </div>
    </div>
  );
};

export default ProjectPage;

//