import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Model from './components/Model';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin)

const App = () => {
  const root= useRef()
  const [ctx] = useState(gsap.context(() => {}, root));
  const welcome = useRef()

  const scrolling = {
    enabled: true,
    events: "scroll,wheel,touchmove,pointermove".split(","),
    prevent: e => e.preventDefault(),
    disable() {
      if (scrolling.enabled) {
        scrolling.enabled = false;
        window.addEventListener("scroll", gsap.ticker.tick, {passive: true});
        scrolling.events.forEach((e, i) => (i ? document : window).addEventListener(e, scrolling.prevent, {passive: false}));
      }
    },
    enable() {
      if (!scrolling.enabled) {
        scrolling.enabled = true;
        window.removeEventListener("scroll", gsap.ticker.tick);
        scrolling.events.forEach((e, i) => (i ? document : window).removeEventListener(e, scrolling.prevent));
      }
    }
  };

  const goToSection=(section)=> {
    if (scrolling.enabled) { // skip if a scroll tween is in progress
      scrolling.disable();
      gsap.to(window, {
        scrollTo: {y: section, autoKill: false},
        onComplete: scrolling.enable,
        duration: 1
      });
    }
  }
  useLayoutEffect(()=>{
    ctx.add(() => {
      let panels = gsap.utils.toArray(".section")
      panels.forEach((panel,i)=>{
        ScrollTrigger.create({
          trigger:panel,
          start:'top bottom-=1',
          end:'bottom top+=1',
          onEnter:()=>goToSection(panel),
          onEnterBack:()=>goToSection(panel)
        })
      })
        gsap.to(welcome.current,
          {
          opacity:0,
          scrollTrigger:{
            trigger:'.section-1',
            start:'top',
            end:window.innerHeight * 0.4,
            scrub:true,
          }
        })
      })
    return ()=>ctx.revert()
  },[])

return(
  <div className='section-root overflow-hidden' ref={root}>
    <div className='fixed h-screen w-full'>
      <Model/>
    </div>
    <div className={`text-6xl h-screen relative z-0 justify-center items-center flex section-1 section `} ref={welcome}>
        WELCOME
    </div>
    <div className='text-6xl h-screen relative z-0 flex flex-col justify-end items-start pb-8 pl-16 section-2 section'>
        <div className='relative'>
          <div className='text-start text-gray-800'>
            Akshay Bhat
          </div>
          <div className='text-xl text-gray-600 pt-1'>
            Full Stack Engineer | Machine Learning Engineer
          </div>
        </div>
    </div>
    <div className='text-6xl h-screen section-3 relative z-0 flex section'>
    </div>
    <div className='text-6xl h-screen w-6/12 section-4 relative z-0 flex bg-white section'>
    </div>
  </div>
)
}
 
export default App;