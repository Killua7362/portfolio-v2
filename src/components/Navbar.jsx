import { useState } from "react";
import resume from "../resume.pdf";
const NavBar = () => {
	const [isHovered, setIsHovered] = useState(false);
	const [imgHovered, setImgHovered] = useState("navbar/nothovered.png");
	return (
		<div className="fixed w-full z-30 p-4">
			<div className="w-full h-full flex flex-col items-end">
				<img
					src={imgHovered}
					onMouseLeave={(e) => {
						if (isHovered === false) {
							setImgHovered("navbar/nothovered.png");
						}
					}}
					onMouseOver={(e) => {
						setImgHovered("navbar/hovered.png");
						setIsHovered(true);
					}}
					className="w-16 rounded-full navbar-parent z-30"
				/>
				<div
					className={`bg-text absolute top-[4px] h-30 w-56 mt-2 border-white/30 border-[0.1px] navbar-div ${isHovered ? "" : "hidden"
						}`}
					onMouseLeave={() => {
						setIsHovered(false);
						setImgHovered("navbar/nothovered.png");
					}}
					onMouseOver={() => {
						setImgHovered("navbar/hovered.png");
					}}
					style={{ transition: "opacity 0.5s" }}
				>
					<div className="flex flex-col gap-y-2 p-4 text-base bg-[#1C1C1F]">
						<a
							className="w-[8.5rem] h-full p-2 rounded-lg hover:bg-[#FFCE56]/30 bg-[#FFCE56] text-background text-center text-white hover:text-white"
							target="_blank" href="https://resume-website-taupe-nine.vercel.app/"
							onMouseEnter={(e) => {
								e.currentTarget.style.backgroundColor = "#deb03e";
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.backgroundColor = "#FFCE56";
							}}
						>
							Resume
						</a>
						<a
							className="w-[8.5rem] h-full bg-[#FFCE56] hover:bg-[#FFCE56]/30 text-background p-2 rounded-lg text-center text-white hover:text-white"
							target="_blank"
							href="mailto:bhat7362@gmail.com"
							onMouseEnter={(e) => {
								e.currentTarget.style.backgroundColor = "#deb03e";
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.backgroundColor = "#FFCE56";
							}}
						>
							Hire me
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
