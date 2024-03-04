import NavBar from "./Navbar";
import Filter from './Filter'
import { ProjectsData } from "../constants";
import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from 'react'
import { FcClearFilters } from "react-icons/fc";

const slugify = (string) => {
	return string.toLowerCase().trim().replace(/ /g, "_")
}

const customFilter = (data, filter) => {
	let need = filter.languages.size + filter.type.size + filter.tech.size
	if (need === 0) {
		return [data]
	}
	console.log(filter)
	let partialMatch = []
	let fullMatch = []
	let noMatch = []
	data.map((ele, idx) => {
		let have = 0
		for (let i = 0; i < ele.tech_stack.length; i++) {
			if (have >= need) {
				break;
			}

			let temp = slugify(ele.tech_stack[i])
			if (filter.tech.has(temp)) {
				have++;
			}
		}
		for (let i = 0; i < ele.tag.length; i++) {
			if (have >= need) {
				break;
			}

			let temp = slugify(ele.tag[i])
			if (filter.type.has(temp)) {
				have++;
			}
		}
		for (let i = 0; i < ele.language.length; i++) {
			if (have >= need) {
				break;
			}

			let temp = slugify(ele.language[i])
			if (filter.languages.has(temp)) {
				have++;
			}
		}
		if (have >= need) {
			fullMatch.push(ele)
		} else if (have > 0) {
			partialMatch.push(ele)
		} else {
			noMatch.push(ele)
		}
	})
	return [fullMatch, partialMatch, noMatch];
}

const ProjectPage = () => {
	const [finalFilter, setFinalFilter] = useState({
		languages: new Set(),
		type: new Set(),
		tech: new Set()
	})

	const [filterActive, setFilterActive] = useState(false)
	const [isRendered, setIsRendered] = useState(false)
	const matchTypeStrings = ["Strong Matches", "Partial Matches", "No Matches"]

	useEffect(() => {
		let temp = JSON.parse(localStorage.getItem('filter'))
		if (temp) {
			setFinalFilter({
				languages: new Set(temp.languages),
				type: new Set(temp.type),
				tech: new Set(temp.tech)
			})
		}
		setIsRendered(true)
	}, [])

	return isRendered && (
		<div className={`h-full pb-10 w-screen bg-background text-text ${filterActive ? "fixed" : ""}`} data-lenis-prevent>
			<NavBar />
			{filterActive && <Filter finalFilter={finalFilter} setFinalFilter={setFinalFilter} setFilterActive={setFilterActive} />}
			<div className="w-11/12 sm:w-10/12 lg:w-8/12 2xl:w-6/12 h-full mx-auto relative z-30">
				<div className="text-3xl sm:text-5xl pt-10 border-solid border-b-2 border-text/20 pb-6">
					ALL PROJECTS
				</div>
				<div className="flex mt-4 items-center gap-x-4 text-2xl">
					<div className={`p-1 px-4 text-xl bg-[#303036]/30 hover:bg-[#303036] w-fit border-[0.1px] rounded-xl cursor-pointer ${(finalFilter.languages.size || finalFilter.type.size || finalFilter.tech.size) ? "border-yellow-400" : "border-white/30"}`}
						onClick={() => {
							setFilterActive(true)
						}}
					>
						Filter
					</div>
					{(finalFilter.languages.size || finalFilter.type.size || finalFilter.tech.size) ? <FcClearFilters
						className="cursor-pointer hover:text-inherit/10"
						onClick={() => {
							setFinalFilter({
								languages: new Set(),
								type: new Set(),
								tech: new Set()
							})
							localStorage.setItem('filter', JSON.stringify({
								languages: [],
								tech: [],
								type: [],
							}))
						}}

					/> : <></>}
				</div>
				<div className="mt-4 flex flex-col gap-y-4">
					{
						customFilter(ProjectsData, finalFilter).map((matchType, matchIdx) => {
							return (
								<>
									{((finalFilter.languages.size || finalFilter.type.size || finalFilter.tech.size)
										&& (matchType.length !== 0)) ?
										<div className="text-xl pt-1 h-5 border-b-[1px] border-white mb-8 text-center">
											<span className="px-2 bg-[#222222] uppercase font-semibold text-white">
												{matchTypeStrings[matchIdx]}
											</span>
										</div> : <></>}
									{matchType.map((ele, idx) => {

										return (
											<div
												className="bg-[#1C1C1F] border-white/30 border-[0.1px] p-6 px-10 gap-y-2 rounded-2xl flex flex-col sm:items-start items-center" key={idx}>
												<div
													className={`text-xs text-white w-full flex justify-between items-center`}>
													<div className="flex gap-x-2">
														{
															ele.tag.map((tag, _) => {
																return (
																	<div
																		className={`p-1 rounded-xl w-fit bg-[${tag === "ML" ? "#C10528" : "#CD921E"}]`}>
																		{tag}
																	</div>
																)
															})
														}
													</div>
													<div
														className="flex gap-x-2">
														{
															ele.language.map((e, i) => {
																return (
																	<div className="p-1 rounded-xl w-fit bg-[#222222]/70 border-white/30 border-[1px] text-text" key={i}>{e}</div>
																)
															})
														}
													</div>
												</div>
												<div className="flex justify-between w-full items-center flex-col gap-y-3 sm:flex-row sm:gap-y-0">
													<div className="text-3xl font-semibold ">
														<div>
															{ele.name}
														</div>
													</div>
													<div className="flex gap-x-2 text-xs flex-wrap gap-y-2">
														{
															ele.tech_stack.map((e, i) => {
																return (
																	<div className=" bg-[#222222] text-text rounded-2xl px-2 py-1 text-center whitespace-nowrap border-white/30 border-[0.1px]" key={i}>
																		{e}
																	</div>
																)
															})
														}
													</div>
												</div>
												<div className="text-xl text-text/80">
													{ele.description}
												</div>
												<a className="flex gap-x-2 items-center text-white hover:text-white/80" target="_blank" tabIndex={-1} href={ele.github_link}>
													<FaGithub size={20} />
													code
												</a>
											</div>
										)
									})}
								</>
							)
						})
					}

				</div>
			</div>
		</div>
	);
};

export default ProjectPage;

//
