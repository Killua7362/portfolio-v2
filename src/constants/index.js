const experience = [
    {
        title:'Machine Learning Volunteer',
        company_name:'Unify Ivy',
        company_color:'green-400',
        icon_outline:'green',
        img_src:'experience/ivy.png',
        date:'Aug 2023 - Sep 2023',
        points:[
            'Implemented Audio Spectrogram transformer which transforms audio into spectrogram and runs image classification using transformer architecture',
            'Implemented torch mobile support for Ivy\'s autotuner',
            'Created a keyword arguments expander which let\'s user supply variable number of keyword arguments to torch script'
        ]
    },
    {
        title:'Machine Learning Research Intern',
        company_name:'National Institute of Technology Karnataka',
        company_color:'blue-800',
        icon_outline:'#0275D8',
        img_src:'experience/nitk.jpeg',
        date:'May 2022 - Aug 2022',
        points:[
            'Interned at The Healthcare Analytics and Language Engineering lab, where I implemented a domain-specific pre-trained language model for classifying self-reporting tweets as potential COVID-19 cases',
            'Conducted experiments with various Huggingface transformer models on a dataset comprising over 18,000 tweets, addressing data imbalance through oversampling and augmentation techniques.'
        ]
    },
]
const ProjectsData = [
    {
        name:'My Portfolio',
        description:'My personal portfolio website',
        img_src:'portfolio.png',
        github_link:'https://github.com/Killua7362/portfolio-v2/',
        tech_stack:['ReactJS','Three JS','TailwindCss','GSAP','Lenis'],
        live:'',
    },
    {
        name:'Small',
        description:'blogging website similar to medium but smaller',
        img_src:'blog.png',
        github_link:'https://github.com/Killua7362/blogger',
        tech_stack:['NextJS','TailwindCss','Prisma','axios','clerk','zod','recoil'],
        live:'',
    },
    {
        name:'gptforme',
        description:'chatgpt which uses my custom neural network library',
        img_src:'gptforme.png',
        github_link:'https://github.com/Killua7362/gptforme/',
        tech_stack:['ReactJS','Flask','TailwindCss','clerk','redis','redux'],
        live:'',
    },
    {
        name:'clowder',
        description:'scripts for creating the server automagically',
        img_src:'gptforme.png',
        github_link:'https://github.com/Killua7362/clowder/',
        tech_stack:['Terraform','GKE','GCP','Ansible','Jenkins'],
        live:'',
    },
    {
        name:'MicroNet',
        description:'Neural network library from scratch with gpu support',
        img_src:'gptforme.png',
        github_link:'https://github.com/Killua7362/MicroNet/',
        tech_stack:['Numpy','Cupy'],
        live:'',
    },
    {
        name:'black grimore',
        description:'My old portfolio + digital garden',
        img_src:'gptforme.png',
        github_link:'https://github.com/Killua7362/black-grimoire/',
        tech_stack:['Nextjs'],
        live:'',
    },
    {
        name:'diffusion',
        description:'unconditional stable diffusion from scratch using torch',
        img_src:'gptforme.png',
        github_link:'https://github.com/Killua7362/diffusion/',
        tech_stack:['torch'],
        live:'',
    },
    {
        name:'animefusion',
        description:'condition stable diffusion from scratch using torch and trained on anime waifus',
        img_src:'gptforme.png',
        github_link:'https://github.com/Killua7362/animefusion/',
        tech_stack:['torch'],
        live:'',
    },
    {
        name:'vqgan',
        description:'vqgan from scratch',
        img_src:'gptforme.png',
        github_link:'https://github.com/Killua7362/vqgan/',
        tech_stack:['torch'],
        live:'',
    },
    {
        name:'deduper',
        description:'duplicate record finder',
        img_src:'gptforme.png',
        github_link:'https://github.com/Killua7362/deduper/',
        tech_stack:['sklearn','xgboost'],
        live:'',
    },
    {
        name:'picogpt',
        description:'character level gpt model from scratch',
        img_src:'gptforme.png',
        github_link:'https://github.com/Killua7362/picogpt/',
        tech_stack:['numpy'],
        live:'',
    },
    {
        name:'otakuflix',
        description:'anime streaming app',
        img_src:'gptforme.png',
        github_link:'https://github.com/Killua7362/otakuflix/',
        tech_stack:['Nextjs'],
        live:'',
    },
]

const skills={
    'Languages':['Javascript','Python','Typescript','C++','C'],
    'Libraries':['Pytorch','Tensorflow','Jax','Scikit-Learn','Pandas','Numpy','Matplotlib'],
    'Front-End':[
        'HTML',
        'CSS',
        'TAILWIND CSS',
        'React.Js',
        'Redux',
        'Recoil',
        'Next.js',
        'Vite',
	'GraphQL'
],
    'Backend':['Node.JS','Express','Flask'],
    'Database':['MySQL','MongooDB','FireBase','Redis'],
    'Testing':['Jenkins','Jest','python unittest'],
    'Cloud':['Terraform','GCP','Ansible'],
    'Tools':['Git','Linux','Docker','Vim',]
}
const aboutMe = 'Testing'
export {experience,aboutMe,skills,ProjectsData};
