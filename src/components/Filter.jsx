import { useEffect, useState } from 'react'
import { skills, ProjectsData } from '../constants'
import Select from 'react-select';

const slugify = (string) => {
	return string.toLowerCase().trim().replace(/ /g, "_")
}

const Filter = ({ finalFilter, setFinalFilter, setFilterActive }) => {
	const [techStacks, setTechStacks] = useState([])
	const [isRendered, setIsRendered] = useState(false)
	const [selectedTech, setSelectedTech] = useState([])

	const [filter, setFilter] = useState({
		languages: new Set(),
		type: new Set(),
		tech: new Set()
	})

	useEffect(() => {
		setFilter(finalFilter);
		let visit = new Set();
		let tempList = []
		let tempSelectedList = []
		ProjectsData.map((ele, _) => {
			ele.tech_stack.map((e, _) => {
				let temp = slugify(e)
				if (!visit.has(temp)) {
					visit.add(temp);
					tempList.push({ value: temp, label: e })
					if (finalFilter.tech.has(temp)) {
						tempSelectedList.push({ value: temp, label: e })
					}
				}
			})
		})
		tempList.sort((a, b) => {
			if (a.value < b.value) {
				return -1
			}
			if (a.value > b.value) {
				return 1;
			}
			return 0;
		})
		setSelectedTech(tempSelectedList)
		setTechStacks(tempList)
		setIsRendered(true)
	}, [])

	const typesOfProject = ["ML", "WEB"]

	return isRendered && (
		<div className="z-40 w-screen h-screen backdrop-blur-lg fixed flex justify-center items-center" onClick={() => {
			setFilterActive(false)
			setFilter(
				{
					languages: new Set(),
					type: new Set(),
					tech: new Set()
				}
			)

		}}>
			<div className="bg-[#1C1C1F] border-white/30 border-[0.5px] 2xl:w-1/4 w-5/6 sm:w-2/4 h-6/12 rounded-xl flex flex-col items-center p-4 gap-y-3"
				onClick={(e) => e.stopPropagation()}>
				<div className="text-2xl font-semibold">
					Filter
				</div>
				<div className="flex flex-col w-full gap-y-4">
					<div className='uppercase flex items-center gap-x-4'>
						Type of project
						{filter.type.size !== 0 && <span className="text-xs bg-[#303036] rounded-xl p-1 px-2 border-red-800 border-[0.1px] cursor-pointer"
							onClick={() => {
								setFilter(prev => {
									return { ...prev, type: new Set() }
								})
							}}
						>clear</span>}
					</div>
					<div className="flex gap-x-3">
						{
							typesOfProject.map((ele, i) => {
								return (
									<div
										key={i}
										className={`p-1 px-2 w-16 text-center rounded-xl cursor-pointer border-white hover:bg-[#303036]/10 ${filter.type.has(slugify(ele)) ? "bg-[#303036]/10 border-[0.1px]" : "bg-[#303036]"}`}
										onClick={() => {
											let temp = slugify(ele);
											if (filter.type.has(temp)) {
												setFilter(prevState => {
													prevState.type.delete(temp)
													return { ...prevState }
												})
											} else {
												setFilter(prevState => {
													prevState.type.add(temp)
													return { ...prevState }
												})
											}
										}}>
										{ele}
									</div>
								)
							})
						}
					</div>
				</div>
				<div className='flex flex-col w-full gap-y-4'>
					<div className='uppercase flex items-center gap-x-4'>
						Languages
						{filter.languages.size !== 0 && <span className="text-xs bg-[#303036] rounded-xl p-1 px-2 border-red-800 border-[0.1px] cursor-pointer"
							onClick={() => {
								setFilter(prev => {
									return { ...prev, languages: new Set() }
								})
							}}
						>clear</span>}
					</div>
					<div className='flex gap-x-3 gap-y-4 flex-wrap'>{
						skills[2].tech_stack.sort().map((ele, i) => {
							return (
								<div
									key={i}
									className={`p-1 px-2 min-w-16 w-fit text-center rounded-xl cursor-pointer border-white hover:bg-[#303036]/10 ${filter.languages.has(slugify(ele)) ? "bg-[#303036]/10 border-[0.1px]" : "bg-[#303036]"}`}
									onClick={() => {
										let temp = slugify(ele);
										if (filter.languages.has(temp)) {
											setFilter(prevState => {
												prevState.languages.delete(temp)
												return { ...prevState }
											})
										} else {
											setFilter(prevState => {
												prevState.languages.add(temp)
												return { ...prevState }
											})
										}
									}}>
									{ele}
								</div>
							)
						})
					}
					</div>
				</div>
				<div className='flex flex-col w-full gap-y-4'>
					<div className='uppercase flex items-center gap-x-4'>
						Frameworks
						{selectedTech.length !== 0 && <span className="text-xs bg-[#303036] rounded-xl p-1 px-2 border-red-800 border-[0.1px] cursor-pointer"
							onClick={() => {
								setFilter(prev => {
									setSelectedTech([])
									return { ...prev, tech: new Set() }
								})
							}}
						>clear</span>}
					</div>
					<div className='flex flex-col gap-y-3 flex-wrap text-black'>
						<Select defaultValue={[]} isMulti classNamePrefix='select'
							value={selectedTech}
							onChange={(ele) => {
								setSelectedTech(ele)
							}}
							options={techStacks} />
					</div>
				</div>
				<div className='flex w-full gap-x-4 justify-end pt-4 font-semibold uppercase'>
					<div className='p-2 px-3 rounded-xl bg-[#303036]/30 hover:bg-[#303036] border-white/30 border-[0.1px] cursor-pointer'
						onClick={() => {
							setSelectedTech([])
							setFilter(
								{
									languages: new Set(),
									type: new Set(),
									tech: new Set()
								}
							)
						}}
					>
						Clear All
					</div>
					<div className='p-2 px-3 rounded-xl bg-[#303036]/30 hover:bg-[#303036] border-white/30 border-[0.1px] cursor-pointer'
						onClick={() => {
							setFilterActive(false)
							setFilter(
								{
									languages: new Set(),
									type: new Set(),
									tech: new Set()
								}
							)
						}}
					>
						Cancel
					</div>

					<div className='p-2 px-4 rounded-xl bg-[#303036]/30 hover:bg-[#303036] border-white/30 border-[0.1px] cursor-pointer'
						onClick={(e) => {
							e.stopPropagation();
							let temp = selectedTech.map(obj => obj.value)
							setFinalFilter({ ...filter, tech: new Set(temp) })
							setFilterActive(false)
							localStorage.setItem('filter', JSON.stringify({
								languages: [...filter.languages],
								tech: temp,
								type: [...filter.type],
							}))
						}}
					>
						Apply
					</div>
				</div>
			</div>
		</div >
	)
}

export default Filter

// Must include these techs
// This type projects
// Must include these languages
