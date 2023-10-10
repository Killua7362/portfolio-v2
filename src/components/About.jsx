import Linx from "./Linx";
import Skills from "./Skills";

const About = () => {
    return (
        <>
          <div className='font-bold relative about-me-text text-6xl text-center pb-[55vh]'>
            About Me
          </div>
          <div className='pt-8  border-t-2 border-black flex justify-between border-solid p-4'>
            <div className='flex flex-col p-2'>
              <div className='font-bold text-4xl'>
                Akshay Bhat
              </div>
              <Linx/>
            </div>
            <div className='mr-10'>
                <img src='killua.jpeg' className='w-24 border-2 border-black rounded-full'/>
            </div>
              </div>
          <div className='text-xl  text-gray-700 pt-8'>
          &nbsp; &nbsp; I am Akshay Bhat, I am a Machine-Learning Engineer and a Full-Stack developer from India.
           I love technology and I enjoy working on every aspect of software development from React to LLAMA to DebianOS to Flutter 
          </div>
          <div className='text-lg pt-4 text-gray-500'>
            &nbsp; &nbsp; Back in 2018 I got my first personal laptop and in 2019
            COVID-19 happened it was like a big vacation for me, I was a fresher
            at my university pursuing Mechanical Engineering. Since childhood, I
            was fascinated by hackers so thinking I would become a hacker I
            installed Kali Linux on my laptop, and using it was tough and I did
            not know how to reinstall Windows. After a few days of using Linux, I
            fell in love with it. I was fascinated by how flexible and powerful it
            was. Since then I have tried all sorts of technologies like AI/ML, Web
            Development, App Development, etc.
          </div>
          <div className='skills-container text-3xl border-solid border-y-2 py-3 mt-6 text-center border-black'>
            Skills
          </div>
          <Skills/>
        </>
      );
}
 
export default About;