import Model from "./Model";
import NavBar from "./Navbar";
import About from "./About";
import Lenis from "@studio-freight/lenis";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Experience from "./Experience";
import Progress from "./Progress/ProgressBar";
import { Context } from "./Progress/context";
import Projects from "./Projects";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const BasePage = () => {
  const skillLen = 2;
  const welcome = useRef();
  const root = useRef();
  const [ctx] = useState(gsap.context(() => {}, root));
  const [debug, setDebug] = useState(false);
  const [progress, setProgress] = useState(0);

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
  });

  const goToSection = (section) => {
    if (scrolling.enabled) {
      // skip if a scroll tween is in progress
      lenis.stop();
      scrolling.disable();
      gsap.to(
        window, {
        duration:1.2,
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
      
      gsap.ticker.lagSmoothing(0);
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
      ScrollTrigger.create({
        trigger: ".section-3",
        start: "top bottom",
        end: "bottom-=4%",
        scrub: true,
        immediateRender: false,
        onUpdate: (trigger) => {
          setProgress(trigger.progress * 100);
        },
      });
      gsap.to(welcome.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: ".section-1",
          start: "top",
          end: window.innerHeight * 0.4,
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="h-full w-full overflow-x-hidden" ref={root}>
      <NavBar />
      <div className="fixed h-screen w-full">
        <Model />
      </div>
      <div
        className={`text-4xl h-screen relative z-0 justify-center items-center flex section-1 section pt-4 pl-8 text-text`}
        ref={welcome}
      >
        WELCOME
      </div>
      <div className="text-4xl lg:text-6xl h-screen relative z-0 flex flex-col justify-end items-start pb-24 md:pb-4 pl-4 lg:pb-8 lg:pl-16 section-2 section">
        <div className="relative">
          <div className="text-start text-text">Akshay Bhat</div>
          <div className="text-base lg:text-xl text-text/80 pt-1">
            Full Stack Engineer | Machine Learning Engineer
          </div>
        </div>
      </div>
      <div className="text-2xl h-full relative z-0 section w-7/12 section-3 ">
        <div className="relative h-screen lg:hidden"/>
          <Context.Provider value={progress}>
            <Progress />
          </Context.Provider>
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
