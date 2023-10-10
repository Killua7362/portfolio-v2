import Model from './Model';
import NavBar from './Navbar';
import { VerticalTimeline, VerticalTimelineElement, }  from 'react-vertical-timeline-component';
import { experience } from '../constants';
import About from './About';
import ExperienceCard from './ExperienceCard';
import Lenis from "@studio-freight/lenis";
import { useLayoutEffect, useRef, useState } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin)

const BasePage = () => {
  const skillLen = 2
  const welcome = useRef()
  const root= useRef()
  const [ctx] = useState(gsap.context(() => {}, root));
  const [debug,setDebug]=useState(false)
  
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
  
  const lenis = new Lenis({
    smoothWheel: true,
  });

  const goToSection=(section)=> {
    if (scrolling.enabled) { // skip if a scroll tween is in progress
      lenis.stop()
      scrolling.disable();
      gsap.to(window, {
        scrollTo: {y: section, autoKill: false},
        onComplete:()=>{
          scrolling.enable()
          lenis.start()
        } ,
        duration: 1
      });
    }
  }

  
  useLayoutEffect(()=>{

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
    
    if (debug) return
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
    return (
    <div className='h-full w-full' ref={root}>
      <NavBar/>
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
      <div className='text-2xl h-full section-3 relative z-0 section w-7/12 bg-white p-10 pt-[10vh] pb-[60vh] border-solid border-black border-2'>
        <About/>
      </div>
      <div className='section-4 section relative z-0 w-screen backdrop-blur-lg'>
          <div className='text-6xl w-5/12  flex flex-col'>
            <div className='bg-white mx-5  h-full py-[20vh] w-full about-me-text text-center border-solid border-black border-2 border-t-0'>
              Experience
            </div>
              <div className='h-full w-full relative top-[-20px]'>
                <VerticalTimeline animate={false}>
                  {experience.map((exp,i)=>{
                    return <ExperienceCard key={i} experience={exp}/>
                  })}

                </VerticalTimeline>
              </div>
            </div>
          </div>
        </div>
      );
}
 
export default BasePage;