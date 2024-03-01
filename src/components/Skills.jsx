import {skills} from '../constants/index'

const Skills = () => {
    return (
    <div className="w-screen text-text min-h-screen flex justify-center items-center section section-4">
        <div className="bg-[#333333] lg:w-11/12 lg:h-11/12 flex flex-wrap lg:flex-nowrap p-8 lg:rounded-3xl gap-10 lg:gap-0">
            {
                skills.map((ele,idx)=>{
                    return (
                        <div className="w-5/12 lg:w-3/12 flex flex-col items-center">
                            <div className={`flex flex-col justify-center items-center gap-y-4 pb-10 w-10/12 border-b-2 border-${ele.border_color}-300`}>
                                <div className="text-xl text-center lg:text-2xl uppercase leading-10 font-mono">
                                    {ele.title}
                                </div>
                                <img height={100} width={100} src={ele.image_path}/>
                            </div>
                            <div className="text-lg flex flex-col items-center mt-6 gap-y-2">
                                {ele.tech_stack.map((e,i)=>{
                                    return(
                                        <div>
                                            {e}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                     )
                })
            }
        </div>
    </div>  );
}
 
export default Skills;