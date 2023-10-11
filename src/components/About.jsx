import Linx from "./Linx";
import Skills from "./Skills";

const About = () => {
    return (
        <div className="w-full lg:w-10/12 mx-auto relative h-full text-text">
          <div className='pt-8 flex justify-center md:justify-start border-solid'>
            <div className='mr-6 mt-2'>
                <img src='killua.jpeg' className='w-24 border-2 border-black rounded-full'/>
            </div>
            <div className='flex flex-col'>
              <div className="text-lg">
                Hi my name is
              </div>
              <div className='font-bold text-4xl'>
                Akshay Bhat
              </div>
              <Linx/>
            </div>
              </div>
          <div className='text-xl  pt-16 text-justify'>
              <div className="text-4xl pb-6 border-solid border-b-[1px] border-text/50 ">
                About
              </div>
              <div className="pt-4 w-11/12 lg:w-full mx-auto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos rerum maxime itaque beatae, incidunt quo minus reiciendis iure praesentium voluptatum iste aliquid quos quam expedita laudantium labore! Est, cumque quibusdam.
              </div>
          </div>
            <div className="text-4xl pb-6 border-solid border-b-[1px] border-text/50 pt-8">
            Skills
          </div>
          <Skills/>
        </div>
      );
}
 
export default About;