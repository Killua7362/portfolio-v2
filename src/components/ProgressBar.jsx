const ProgressBar = ({sectionNum}) => {
    const arr = ["Home","About","Skills","Experience"]
    return sectionNum !==0 &&  (
			<div className={`fixed z-50 w-full h-[4rem] flex justify-center ${sectionNum !== 1?"bg-[#222222]":"bg-[#333333]"}`}>
                <div className="flex justify-center items-center lg:gap-10 gap-2">
                    {arr.map((ele,i)=>{
                    return (
                        <>
                            <div className={`${i+1 === sectionNum?"text-text text-base lg:text-3xl":"text-gray-500 text-sm lg:text-2xl"} `}>
                                {ele}
                            </div>
                            <div className={`h-[1px] ${i+1 === sectionNum?"bg-white":"bg-gray-500"} lg:w-16 w-4`}/>
                        </>
                    )
                    })}
                    <div className={`${sectionNum === 5?"text-text lg:text-3xl text-base":"text-gray-500 lg:text-2xl text-sm"} `}>
                    Projects
                    </div>
                </div>
			</div>
      );
}
 
export default ProgressBar;