import { FaLongArrowAltLeft } from "react-icons/fa";
import NavBar from "./Navbar";
import { ProjectsData } from "../constants";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { kv } from "@vercel/kv";

const ProjectPage = () => {
	const [lastDate,setLastDate] = useState({})

	useEffect(()=>{
		const savedLastDate = JSON.parse(localStorage.getItem('dates'))
		const redis_token = import.meta.env.VITE_KV_REST_API_TOKEN

		ProjectsData.map((ele,i)=>{
			const repo_name = ele.github_link.split('https://github.com/')[1]
			if(savedLastDate == null || !savedLastDate.has(repo_name) || ( savedLastDate.get(repo_name).get(time_stamp) ) > 691200000){

			}
		})

		const fetchDate = async (repo_name) => {
			try{
				const response = await fetch(`https://api.github.com/repos/${repo_name}commits`,{
					method:"GET",
					headers:{
						Authorization:`Bearer ${apiToken}`,
					}
				})
				.then(res=>res.json())
				.then(res=>console.log(res))
				//last commit date
				//res[0].commit.author.date 
			}catch(error){
				console.log(error);
			}
		}

	},[])

	return (
		<div className="h-full w-screen bg-background text-text" data-lenis-prevent>
			<NavBar />
			<div className="w-6/12 h-full mx-auto relative z-30">
				<Link to={-1}>
					<div className="flex gap-x-2 text-text items-center pt-10 all-project-class-10" onMouseEnter={(e) => {
					}}>
						<FaLongArrowAltLeft className='all-project-class-11' />
						Return
					</div>
				</Link>
				<div className="text-5xl pt-10 border-solid border-b-2 border-text/20 pb-6">
					ALL PROJECTS
				</div>
				<div className="grid grid-cols-12 mt-4 gap-x-8 gap-y-6">
					<div className="col-span-1 text-xl">
					</div>
					<div className="col-span-2 text-xl">
						Project Name
					</div>
					<div className="col-span-4 text-xl">
						Description
					</div>
					<div className="col-span-4 text-xl">
						Technologies
					</div>
					<div className="col-span-1 text-xl mb-4">
						links
					</div>
					{ProjectsData.map(function(item, index) {
						return (
							<>
								<div className="col-span-1 text-lg">
									{index + 1}
								</div>
								<div className="col-span-2 text-lg text-start">
									{item.name}
								</div>
								<div className="col-span-4 text-lg text-start">
									{item.description}
								</div>
								<div className="col-span-4 text-base flex text-start flex-wrap gap-2">
									{item.tech_stack.map(function(i, j) {
										return (
											<div className=" bg-[#35a9e3] rounded-2xl px-2 max-h-6 text-xs py-1 text-center whitespace-nowrap">
												{i}
											</div>
										)
									})}
								</div>
								<div className="col-span-1 text-xl">
									<a href={item.github_link}>
										code
									</a>
								</div>
								<div className="h-full w-full col-span-12 border-b-2 border-text/20 border-solid" />
							</>
						)
					})}
				</div>
			</div>
		</div>
	);
}

export default ProjectPage;
