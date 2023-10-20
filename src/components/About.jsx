import { motion } from "framer-motion";
import Linx from "./Linx";
import Skills from "./Skills";
const About = () => {
    return (
        <div className="w-full lg:w-10/12 mx-auto relative h-full text-text">
          <motion.div className='flex justify-center md:justify-start border-solid border-b-[1px] border-text/50 pb-10'
          initial='hidden'
          whileInView='visible'
          viewport={{once:false}}
          transition={{duration:0.6,delay:0.1}}
          variants={{
            visible:{opacity:1,y:0},
            hidden:{opacity:0,y:50}
            }}
          >
            <div className='flex flex-col justify-center w-full'>
              <div className='font-bold text-4xl tracking-wide'>
                Akshay Bhat
              </div>
              <Linx/>
            </div>
            <div className='mr-6 mt-2 mx-auto'>
                <img src='killua.jpeg' className='w-24 border-2 border-black rounded-full'/>
            </div>
              </motion.div>
          <motion.div className="text-4xl pb-6 pt-24 tracking-wide"
          initial='hidden'
          whileInView='visible'
          viewport={{once:false}}
          transition={{duration:0.6,delay:0.1}}
          variants={{
            visible:{opacity:1,y:0},
            hidden:{opacity:0,y:50}
          }}
          >
            My Skills
          </motion.div>
          <Skills/>
        </div>
      );
}
 
export default About;