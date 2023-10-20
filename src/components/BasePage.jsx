import Model from "./Model";
import NavBar from "./Navbar";
import About from "./About";
import Lenis from "@studio-freight/lenis";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Experience from "./Experience";
import Projects from "./Projects";
import {motion,useScroll,useSpring} from 'framer-motion'
import { fadeIn } from "../utils";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const BasePage = () => {
  const welcome = useRef();
  const root = useRef();
  const [ctx] = useState(gsap.context(() => {}, root));
  const [debug, setDebug] = useState(false);
  const {scrollYProgress} = useScroll()
  const scaleX =useSpring(scrollYProgress,{
    stiffness:100,
    damping:30,
    restDelta:0.001
  })
  
  const scrolling = {
    enabled: true,
    events: "scroll,wheel,touchmove,pointermove".split(","),
    prevent: (e) => e.preventDefault(),
    disable() {
      if (scrolling.enabled) {
        scrolling.enabled = false;
        window.addEventListener("scroll", gsap.ticker.tick, { passive: true });
        scrolling.events.forEach((e, i) =>
          (i ? document : window).addEventListener(e, scrolling.prevent, {
            passive: false,
          })
        );
      }
    },
    enable() {
      if (!scrolling.enabled) {
        scrolling.enabled = true;
        window.removeEventListener("scroll", gsap.ticker.tick);
        scrolling.events.forEach((e, i) =>
          (i ? document : window).removeEventListener(e, scrolling.prevent)
        );
      }
    },
  };

  const lenis = new Lenis({
    smoothWheel: true,
    smoothTouch: false,
  });

  const goToSection = (section) => {
    if (scrolling.enabled) {
      // skip if a scroll tween is in progress
      lenis.stop();
      scrolling.disable();
      gsap.to(
        window, {
        duration:1,
        scrollTo: { y: section, autoKill: false},
        onComplete: () => {
          scrolling.enable();
          lenis.start();
        },
      });
    }
  };

  useLayoutEffect(() => {
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      
    if (debug) return;
    ctx.add(() => {
  
      let panels = gsap.utils.toArray(".section");
      panels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top bottom-=1",
          end: "bottom top+=1",
          onEnter: () => goToSection(panel),
          onEnterBack: () => goToSection(panel),
        });
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="h-full w-full" ref={root}>
      <NavBar />
      <div className="fixed h-screen w-full z-10">
        <Model />
      </div>
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -200, opacity: 0 }}
          transition={{ duration: 1,type:'spring',bounce:0.3}}>
      <div
        className={`text-6xl z-0 h-screen relative justify-center items-center flex section-1 section pt-4 pl-8 text-text welcome-text`}
        ref={welcome}
      >
          WELCOME
      </div>
        </motion.div>
      <div className="text-2xl lg:text-6xl h-screen relative z-0 flex flex-col justify-end items-start pb-24 md:pb-4 pl-4 lg:pb-8 lg:pl-16 section-2 section">
        <div className="relative">
          <div className="text-start text-text name-text">Akshay Bhat</div>
          <div className="text-base lg:text-xl text-text/60 pt-1">
            Full Stack Engineer | Machine Learning Engineer
          </div>
        </div>
      </div>
      <div className="text-2xl h-full relative z-20 section w-7/12 section-3 ">
        <div className="relative h-screen lg:hidden"/>
        <motion.div className="sticky w-full top-0 z-20 h-1 bg-[#7872B8] origin-[0%]" style={{scaleX:scaleX}}/>
          <div className="bg-background w-screen lg:w-full h-full  p-10 pt-[10vh] pb-[60vh] border-solid border-black border-2 flex flex-col">
            <About />
            <Experience />
            <Projects/>
          </div>
      </div>
    </div>
  );
};

export default BasePage;
