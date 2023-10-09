import {  Suspense, useLayoutEffect, useRef, useState } from 'react';
import Model from './components/Model';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import './App.css'
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'
import { SiMyanimelist, SiGmail } from 'react-icons/si'
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin)

const App = () => {
  const [debug,setDebug]=useState(false)

  const root= useRef()
  const welcome = useRef()
  const [ctx] = useState(gsap.context(() => {}, root));
  const skillLen = 2

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

return(
    <div className='overflow-hidden' ref={root}>
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
      <div className='text-2xl h-full section-3 relative z-0 section w-5/12 bg-white mx-5 p-10 pt-[30vh] pb-[60vh]'>
          <div className='font-bold relative about-me-text text-6xl text-center pb-[55vh]'>
            About Me
          </div>
          <div className='pt-8  border-t-2 border-yellow-400 flex justify-between border-solid p-4'>
            <div className='flex flex-col p-2'>
              <div className='font-bold text-4xl'>
                Akshay Bhat
              </div>
              <div className='flex pt-2 gap-2'>
                <a href="https://github.com/Killua7362" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={23} />
                </a>
                <a href="https://twitter.com/Killua7362" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={23} />
                </a>
                <a href="https://www.linkedin.com/in/killua7362/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={23} />
                </a>
                <a href="mailto:bhat7362@gmail.com">
                  <SiGmail size={23} />
                </a>
                <a href="https://www.instagram.com/___killuaa/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={23} />
                </a>
                <a href="https://myanimelist.net/profile/Killua7362" target="_blank" rel="noopener noreferrer">
                  <SiMyanimelist size={25} />
                </a>
              </div>
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
          <div className='skills-container text-3xl border-solid border-y-2 py-3 mt-6 text-center border-yellow-400'>
            Skills
          </div>
          <div className='grid grid-cols-10 mt-6 gap-y-4'>
              <div className='text-xl col-span-2'>
                Libraries
              </div>              
              <div className='text-lg col-span-8 '>
              Pytorch,Tensorflow,Jax,scikit-learn,pandas,NumPy,matplotlib
              </div>   
              <div className='text-xl col-span-2'>
              Technologies
              </div>              
              <div className='text-lg col-span-8 '>
              Git,Linux/Unix,Vim
                            </div>     
              <div className='text-xl col-span-2'>
              Languages
              </div>              
              <div className='text-lg col-span-8 '>
              Python,JavaScript,SQL,HTML/CSS,C++
              </div>     
              <div className='text-xl col-span-2'>
              Web Dev
              </div>              
              <div className='text-lg col-span-8 '>
              React,Nodejs,Express,Mongodb
              </div>                
          </div>
      </div>
      <div className='text-6xl h-screen w-6/12 section-4 relative z-0 flex bg-white section'>
      </div>
    </div>
)
}
 
export default App;
