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
        live:''
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
        'Vite'
],
    'Backend':['Node.JS','Express','Flask'],
    'Database':['MySQL','MongooDB','FireBase'],
    'Testing':['Jest'],
    'Tools':['Git','Linux','Vim']
}
const aboutMe = 'Testing'
export {experience,aboutMe,skills,ProjectsData};