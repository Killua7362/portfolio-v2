import Linx from "./Linx";
import Skills from "./Skills";

const About = () => {
    return (
        <div className="w-10/12 mx-auto relative h-full">
          <div className='pt-8 flex justify-start border-solid'>
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
          <div className='text-xl  text-gray-700 pt-8 text-justify'>
              <div className="text-4xl about-me-text pb-[1vh]">
                About
              </div>
              <div>

              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos rerum maxime itaque beatae, incidunt quo minus reiciendis iure praesentium voluptatum iste aliquid quos quam expedita laudantium labore! Est, cumque quibusdam.
              </div>
          </div>
          <div className='about-me-text text-4xl py-3 mt-6 pb-[1vh]'>
            Skills
          </div>
          <Skills/>
        </div>
      );
}
 
export default About;