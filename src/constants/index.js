const experience = [
	{
		title: "Software Engineer Intern",
		company_name: "Unify Ivy",
		company_site: "https://unify.ai/",
		company_color: "green-400",
		icon_outline: "green",
		img_src: "experience/ivy.png",
		date: "Jun 2023 - Nov 2023",
		points: [
			"Implemented Audio Spectrogram transformer which transforms audio into spectrogram and runs image classification using transformer architecture",
			"Implemented torch mobile support for Ivy's autotuner",
			"Created a keyword arguments expander which let's user supply variable number of keyword arguments to torch script",
		],
	},
	{
		title: "Machine Learning Research Intern",
		company_name: "HALE lab",
		company_site: "https://halelabnitk.github.io/",
		company_color: "blue-800",
		icon_outline: "#0275D8",
		img_src: "experience/nitk.jpeg",
		date: "May 2022 - Aug 2022",
		points: [
			"Interned at The Healthcare Analytics and Language Engineering lab, where I implemented a domain-specific pre-trained language model for classifying self-reporting tweets as potential COVID-19 cases",
			"Conducted experiments with various Huggingface transformer models on a dataset comprising over 18,000 tweets, addressing data imbalance through oversampling and augmentation techniques.",
		],
	},
];
const ProjectsData = [
	{
		name: "My Portfolio",
		language: ["Javascript"],
		description: "My personal portfolio website",
		img_src: "portfolio.png",
		github_link: "https://github.com/Killua7362/portfolio-v2/",
		tech_stack: ["ReactJS", "Three JS", "TailwindCss", "GSAP", "Lenis"],
		live: "", tag: ["WEB"]
	},
	{
		name: "Small",
		language: ["Typescript"],
		description: "blogging website similar to medium but smaller",
		img_src: "blog.png",
		github_link: "https://github.com/Killua7362/blogger",
		tech_stack: [
			"NextJS",
			"TailwindCss",
			"Prisma",
			"axios",
			"clerk",
			"zod",
			"recoil",
		],
		live: "", tag: ["WEB"]
	},
	{
		name: "gptforme",
		language: ["Typescript", "Python"],
		description: "chatgpt which uses my custom neural network library",
		img_src: "gptforme.png",
		github_link: "https://github.com/Killua7362/gptforme/",
		tech_stack: ["ReactJS", "Flask", "TailwindCss", "clerk", "redis", "redux"],
		live: "", tag: ["ML", "WEB"]
	},
	{
		name: "clowder",
		language: [],
		description: "scripts for creating the server automagically",
		img_src: "",
		github_link: "https://github.com/Killua7362/clowder/",
		tech_stack: ["Terraform", "GKE", "GCP", "Ansible", "Jenkins"],
		live: "", tag: ["WEB"]
	},
	{
		name: "MicroNet",
		language: ["Python"],
		description: "Neural network library from scratch with gpu support",
		img_src: "",
		github_link: "https://github.com/Killua7362/MicroNet/",
		tech_stack: ["Numpy", "Cupy"],
		live: "", tag: ["ML"]
	},
	{
		name: "black grimore",
		language: ["Javascript"],
		description: "My old portfolio + digital garden",
		img_src: "",
		github_link: "https://github.com/Killua7362/black-grimoire/",
		tech_stack: ["Nextjs"],
		live: "", tag: ["WEB"]
	},
	{
		name: "diffusion",
		language: ["Python"],
		description: "unconditional stable diffusion from scratch using torch",
		img_src: "",
		github_link: "https://github.com/Killua7362/diffusion/",
		tech_stack: ["torch"],
		live: "", tag: ["ML"]
	},
	{
		name: "animefusion",
		language: ["Python"],
		description:
			"condition stable diffusion from scratch using torch and trained on anime waifus",
		img_src: "",
		github_link: "https://github.com/Killua7362/animefusion/",
		tech_stack: ["torch"],
		live: "", tag: ["ML"]
	},
	{
		name: "vqgan",
		language: ["Python"],
		description: "vqgan from scratch",
		img_src: "",
		github_link: "https://github.com/Killua7362/vqgan/",
		tech_stack: ["torch"],
		live: "", tag: ["ML"]
	},
	{
		name: "deduper",
		language: ["Python"],
		description: "duplicate record finder",
		img_src: "gptforme.png",
		github_link: "https://github.com/Killua7362/deduper/",
		tech_stack: ["sklearn", "xgboost"],
		live: "", tag: ["ML"]
	},
	{
		name: "picogpt",
		language: ["Python"],
		description: "character level gpt model from scratch",
		img_src: "",
		github_link: "https://github.com/Killua7362/picogpt/",
		tech_stack: ["numpy"],
		live: "", tag: ["ML"]
	},
	{
		name: "otakuflix",
		language: ["Typescript"],
		description: "anime streaming app",
		img_src: "gptforme.png",
		github_link: "https://github.com/Killua7362/otakuflix/",
		tech_stack: ["Nextjs"],
		live: "", tag: ["WEB"]
	},
];

const skills = [
	{
		title: "Machine Learning",
		image_path: "icons/machinelearning.png",
		border_color: "red-300",
		tech_stack: [
			"Pytorch",
			"Tensorflow",
			"Jax",
			"Scikit-Learn",
			"Pandas",
			"Numpy",
			"Matplotlib",
			"Pyspark",
		],
	},
	{
		title: "Web development",
		image_path: "icons/webdev.png",
		border_color: "blue-300",
		tech_stack: [
			"React.Js",
			"Next.js",
			"TAILWIND CSS",
			"Redux",
			"Recoil",
			"GraphQL",
			"Node.JS",
			"Express",
			"Flask",
			"Jest",
			"Selenium",
			"Gatling",
		],
	},
	{
		title: "Language",
		image_path: "icons/language.png",
		border_color: "yellow-300",
		tech_stack: ["Java", "Javascript", "Python", "Typescript", "C++", "C"],
	},
	{
		title: "Tools",
		image_path: "icons/tools.png",
		border_color: "orange-300",
		tech_stack: ["Git", "Linux", "Docker", "Vim", "Postman", "Jenkins"],
	},
	{
		title: "Cloud and Database",
		image_path: "icons/cloud.png",
		border_color: "cyan-300",
		tech_stack: [
			"Terraform",
			"GCP",
			"Ansible",
			"MySQL",
			"MongooDB",
			"FireBase",
			"Redis",
		],
	},
];

const aboutMe = "Testing";
export { experience, aboutMe, skills, ProjectsData };
