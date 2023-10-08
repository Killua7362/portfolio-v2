import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Model from './components/Model';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  const t2 = gsap.timeline();
  const welcome = useRef(null)
  const root= useRef(null)
  const lenis = useLenis(({scroll})=>{
    console.log('rowkinr')
  })
  useEffect(()=>{
  
    const update = (time)=>{
      root.current?.raf(time*1000)
    }

    gsap.ticker.add(update)

    return ()=>{
      gsap.ticker.remove(update)
    }
  })
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
    <ReactLenis ref={root} autoRaf={false} root>
  <div>
    <div className='fixed h-screen w-full'>
      <Model/>
    </div>
    <div className={`text-6xl h-screen relative z-0 justify-center items-center flex section-1`} ref={welcome}>
        WELCOME
    </div>
    <div className='text-6xl h-screen section-2 relative z-0 flex flex-col justify-end items-start pb-28 pl-16'>
    </div>
    <div className='text-6xl h-screen relative z-0 flex flex-col justify-end items-start pb-28 pl-16'>
        <div className='relative'>
          <div className='text-start text-gray-800'>
            Akshay Bhat
          </div>
          <div className='text-xl text-gray-600 pt-1'>
            Full Stack Engineer | Machine Learning Engineer
          </div>
        </div>
    </div>
    <div className='text-6xl h-screen section-3 relative z-0 flex'>
    </div>
    <div className='text-6xl h-screen relative z-0 flex'>
    </div>
    <div className='text-6xl h-screen w-6/12 section-4 relative z-0 flex bg-white'>
    </div>
    <div className='text-6xl h-screen w-6/12 relative z-0 flex bg-white'>
    </div>
  </div>
    </ReactLenis>
)
}
 
export default App;