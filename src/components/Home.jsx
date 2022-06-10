import React from 'react';
import HeroImage from "../assets/remove-bg.png";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import {Link} from "react-scroll";

const Home = () => {
  return (
	<div name="home" className="md:h-screen w-full pt-20 bg-gradient-to-b from-black via-black to-gray-800">
		<div className="max-w-screen-lg md:px-16 mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row">
			<div className="flex flex-col justify-center">
				<h2 className="text-4xl sm:text-5xl font-bold text-white">I'm a full Stack Developer</h2>
				<p className="text-gray-500 py-4 max-w-md">I have one year of exerience building and desgining
					software. Currently, I have to work on web appllication using technologies like React, Tailwind, Node JS, and Next JS.
				</p>
				<div className="flex">
					<Link to="portfolio"  smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
						Portfolio
						<span className="group-hover:rotate-90 duration-200">
							<MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
						</span>
					</Link>

					<a 
					href="/Jubayer-hosain-Resume.pdf"
					
					download={true}
					target="_blank"
					rel="noreferrer"
					className="group text-black font-bold w-fit ml-8 px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-300 to-blue-300 cursor-pointer">
						Resume
						<span className="group-hover:rotate-90 duration-200">
							<MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
						</span>
					</a>
				</div>
			</div>
			<div>
				<img src={HeroImage} alt="my profile" className="rounded-2xl mx-auto md:w-[70%]" />
			</div>
		</div>
	</div>
  )
}

export default Home