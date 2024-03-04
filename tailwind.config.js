/** @type {import('tailwindcss').Config} */
export default {
	purge: {
		content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
		options: {
			safelist: [
				"border-red-300",
				"border-blue-300",
				"border-yellow-300",
				"border-orange-300",
				"border-cyan-300",
				"bg-[#CD921E]",
				"bg-[#C10528]",
				"bg-[#20A7D8]",
				'bg-[#303036]/10',
				'bg-[303036]',
				'border-yellow-400',
				'border-white/30'
			],
		},
	},
	theme: {
		extend: {
			colors: {
				background: "#242424",
				primary: "#3b3b3b",
				secondary: "#0f0f10",
				accent: "#74717a",
				text: "#e4f3fb",
			},
		},
	},
	plugins: [require("tailwind-scrollbar")],
};
