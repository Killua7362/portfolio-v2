import Model from "./Model";
import Lenis from "@studio-freight/lenis";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Experience from "./Experience";
import Projects from "./Projects";
import { motion, useScroll, useSpring } from 'framer-motion'
import { fadeIn } from "../utils";
import resume from "../resume.pdf"
import './components.css'
import Linx from "./Linx";
import Skills from "./Skills";
import ProgressBar from "./ProgressBar";
import Settings from "./Settings";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const BasePage = () => {
	const welcome = useRef();
	const root = useRef();
	const [ctx] = useState(gsap.context(() => { }, root));
	const [sectionNum,setSectionNum] = useState(1);
	const [openSettings,setOpenSettings] = useState(false);
	const [isRender,setIsRender] = useState(false);
	const [settingsValues,setSettingsValues] = useState({
		"model_visibility":true,
		"smooth_scroll":true,
		"scroll_snap":true,
	});

	useEffect(()=>{
		let savedSettings = JSON.parse(localStorage.getItem('settingsValues'))
		if(savedSettings){
			setSettingsValues(savedSettings)
		}
		setIsRender(true);
	},[])

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
		smoothWheel: settingsValues["smooth_scroll"],
		smoothTouch: false,
	});

	const goToSection = (section,i) => {
		if (scrolling.enabled) {
			// skip if a scroll tween is in progress
			lenis.stop();
			scrolling.disable();
			gsap.to(
				window, {
				duration: 1,
				scrollTo: { y: section, autoKill: false },
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
		lenis.start()
		ctx.add(() => {
			let panels = gsap.utils.toArray(".section");
			panels.forEach((panel, i) => {
				ScrollTrigger.create({
					trigger: panel,
					start: "top bottom-=1",
					end: "bottom top+=1",
					onEnter: () =>{
						if(settingsValues["scroll_snap"]){
	 						goToSection(panel,i)					
						}
						setSectionNum(i)
					},
					onEnterBack: () =>{
						if(settingsValues["scroll_snap"]){
	 						goToSection(panel,i)					
						}
						setSectionNum(i)
					},
				});
			});
		});
		return () => ctx.revert();
	}, [settingsValues["scroll_snap"]]);
	
	return (
		<div className="h-full w-full" ref={root}>
			<div className="fixed h-screen w-full z-10 ">
				{
					settingsValues["model_visibility"] && <Model />
				}
			</div>

			{
				isRender &&
					<Settings openSettings={openSettings} setOpenSettings={setOpenSettings} settingsValues={settingsValues} setSettingsValues={setSettingsValues}/>
			}

			<ProgressBar sectionNum={sectionNum} setOpenSettings={setOpenSettings} settingsValues={settingsValues}/>
			<motion.div
				initial={{ y: -200, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 1, type: 'spring', bounce: 0.3, delay: 0.2 }}>
				<div
					className={`text-3xl ml-8 lg:ml-32 lg:text-5xl z-0 min-h-screen relative justify-center items-center flex section-1 section text-text welcome-text`}
					ref={welcome}
				>
					WELCOME
				</div>
			</motion.div>
			 <div className={`text-2xl lg:text-6xl min-h-screen relative z-0 flex flex-col justify-end items-start pb-24 md:pb-4 pl-4 lg:pl-16 section-2 section`}>
				<div className="relative">
					<div className="text-start text-text name-text">Akshay Bhat</div>
					<div className="text-base lg:text-xl text-text/60 pt-1">
						Full Stack Engineer | Machine Learning Engineer
					</div>
				</div>
			</div>
			<div className="min-h-screen relative z-20 section w-full bg-[#222222] section-3 text-white flex flex-col justify-center ">
				<motion.div
				 initial='hidden'
				 whileInView='visible'
				 viewport={{once:false}}
				 transition={{duration:0.6,delay:0.1}}
				 variants={{
				   visible:{opacity:1,y:0},
				   hidden:{opacity:0,y:50}
				 }}
				className="w-full flex flex-col lg:flex-row gap-y-20 lg:gap-y-0 justify-around relative items-center">
					<div className="flex flex-col gap-y-4">
						<div
						 className="text-3xl lg:tracking-[0.1rem] tracking-[0.2rem] left-[15.5%]"
						>
							Hi, I am
						</div>
						<div className="overflow-hidden string relative flex flex-col h-[4.4rem] w-fit ">
							<div className="text-4xl name bg-[#20a7d8]">
								Akshay Bhat
							</div>
							<div className="text-4xl name bg-[#CD921E]">
								Full Stack Engineer
							</div>
							<div className="text-4xl name bg-[#c10528]">
								ML Engineer
							</div>
						</div>
						<div className="flex space-x-6 justify-center lg:justify-normal lg:text-lg text-base">
							<a
							target = "_blank" href="mailto:bhat7362@gmail.com"
							tabindex="-1"
							 className="bg-[#8BC371] rounded-md uppercase w-[7.5rem] text-center align-middle p-2 resume-frame cursor-pointer text-white hover:text-white  font-sans leading-10">
								Hire me
							</a>
							<a
							target = "_blank" href={resume}
							tabindex="-1"
							 className="bg-[#8BC371] rounded-md w-[7.5rem] text-center align-middle p-2 resume-frame text-white font-sans leading-10 uppercase">
									Resume
							</a>
						</div>
					</div>
					<div className="flex flex-col justify-center items-center">
						<img src="killua.jpeg" height="270rem" width="270rem" className="image-frame mb-5"/>
						<Linx/>
					</div>
				</motion.div>
			</div>

			<div className="w-screen min-h-screen relative z-20 p-10 pt-[10vh] pb-[60vh] flex flex-col items-center bg-[#222222]">
					<Skills settingsValues={settingsValues}/>
					<Experience  settingsValues={settingsValues}/>
					<Projects  settingsValues={settingsValues}/>
			</div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
			>
			</motion.div>
		</div>
	);
};

export default BasePage;
