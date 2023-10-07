import { useLayoutEffect, useRef, useState } from 'react';
import Model from './components/Model';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  const t2 = gsap.timeline();
  const welcome = useRef(null)

  useLayoutEffect(()=>{
      let ctx = gsap.context(()=>{
        gsap.fromTo(welcome.current,
          {
          opacity:1        
          },
          {
          opacity:0,
          scrollTrigger:{
            trigger:'.section-1',
            start:'top',
            end:window.innerHeight * 0.4,
            scrub:true,
            onUpdate:trigger=>{
            }
          }
        })
      },welcome)
    return ()=>ctx.revert()
  },[welcome])
return(
  <div>
    <div className='fixed h-screen w-full overflow-hidden'>
      <Model/>
    </div>
    <div className={`text-6xl h-screen relative z-0 justify-center items-center flex section-1`} ref={welcome}>
        WELCOME
    </div>
    <div className='text-6xl h-screen section-2 relative z-0 flex'>
        I am Akshay
    </div>
    <div className='text-6xl h-screen section-3 relative z-0 flex'>
      Hey, I am Akshay
    </div>
    <div className='text-6xl h-screen section-4 relative z-0 flex'>
    </div>
  </div>
)
}
 
export default App;