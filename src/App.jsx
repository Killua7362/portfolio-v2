import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Model from './components/Model';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin)

const App = () => {
  const t2 = gsap.timeline();
  const welcome = useRef(null)
  const root= useRef(null)

  const lenis = useLenis(({scroll})=>{
  })

  useEffect(()=>{
    const update = (time)=>{
      root.current?.raf(time*800)
    }

    gsap.ticker.add(update)

    return ()=>{
      gsap.ticker.remove(update)
    }
  })
  useLayoutEffect(()=>{
      let panels = gsap.utils.toArray(".panels"),
          observer = ScrollTrigger.normalizeScroll(true),
          scrollTween;

      const goToSection = (i)=>{
        let scrollTween = gsap.to(window,{
          scrollTo:{y:i*innerHeight,autoKill:false},
          onStart:()=>{
            observer.enable()
          },
          duration:1,
          onComplete:()=>scrollTween = null,
          overwrite:true
        })
      }
    panels.forEach((panel,i)=>{
      ScrollTrigger.create({
        trigger:panel,
        start:'top bottom',
        end:'+=199%',
        onToggle:self=>self.isActive && !scrollTween && goToSection(i)
      })
    })
    ScrollTrigger.create({
      start:0,
      end:'max',
      snap:1/(panels.length-1)
    })
      let ctx = gsap.context(()=>{
        gsap.to(welcome.current,
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
    <div className={`text-6xl h-screen relative z-0 justify-center items-center flex section-1 panels`} ref={welcome}>
        WELCOME
    </div>
    <div className='text-6xl h-screen relative z-0 flex flex-col justify-end items-start pb-8 pl-16 panels section-2'>
        <div className='relative'>
          <div className='text-start text-gray-800'>
            Akshay Bhat
          </div>
          <div className='text-xl text-gray-600 pt-1'>
            Full Stack Engineer | Machine Learning Engineer
          </div>
        </div>
    </div>
    <div className='text-6xl h-screen section-3 relative z-0 flex panels'>
    </div>
    <div className='text-6xl h-screen w-6/12 section-4 relative z-0 flex bg-white panels'>
    </div>
  </div>
    </ReactLenis>
)
}
 
export default App;