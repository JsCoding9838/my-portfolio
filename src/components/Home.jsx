import React from 'react';
import HeroImage from "../assets/remove-bg.png";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import {Link} from "react-scroll";
import { motion } from "framer-motion";

import github from '../assets/social/github.png';
import linkedin from '../assets/social/linkedin.png';
import instagram from '../assets/social/instagram.png';
import twitter from '../assets/social/twitter.png';

import Typewriter from 'typewriter-effect';

const Home = () => {

  	return (
		<div name="home" className="md:h-screen w-full pt-20 bg-gradient-to-b from-black via-black to-gray-800">
			<div className="w-screen-lg md:px-16 mx-auto flex flex-col items-center justify-around h-full px-4 md:flex-row">
				<div
				
				className="flex flex-col justify-center">
					<motion.h2 
					initial={{y:40, opacity:0}}
					whileInView={{y:0,opacity:1}}
					transition={{ duration:0.8}}
					className="text-2xl font-bold text-gray-500">Hello,</motion.h2>
					<motion.h2
					initial={{y:40, opacity:0}}
					whileInView={{y:0,opacity:1}}
					transition={{delay:0.2, duration:0.9}}
					className="text-4xl sm:text-5xl font-bold text-white">I<span className="text-red-500">'</span>m Jubayer Hosain</motion.h2>

					<motion.h2
						initial={{y:40, opacity:0}}
						whileInView={{y:0,opacity:1}}
						transition={{delay:0.4, duration:1}}
						className="text-2xl text-gray-500 py-4 max-w-md font-bold">
							
						<span>
							I'm a
							<span style={{color:"#00bfff"}}>
								<Typewriter
									options={{
										autoStart: true,
										loop: true,
										delay: 40,
										strings: [
											"MERN Stack Developer.",
											"Front end Developer.",
											"Full Stack Developer."
										]

									}}
								/>
							</span>

						</span>

					</motion.h2>


					<div className="mb-4">
						
						<div class="flex space-x-5 text-white">
							<a 
								href="https://github.com/JsCoding9838"
								target="_blank"
								rel="noreferrer"
							>
								<img src={github} alt="" />
								{/* <FaGithub size={30}/> */}
							</a>
							<a 
								href="https://www.instagram.com/jubayerhosain22/"
								target="_blank"
								rel="noreferrer"
							>
								<img src={instagram} alt="" />
								{/* <BsFacebook size={30}/> */}
							</a>
							<a 
								href="https://www.linkedin.com/in/jubayer-hosain-947010236/"
								target="_blank"
								rel="noreferrer"

							>
								<img src={linkedin} alt="" />
								{/* <FaLinkedin size={30}/> */}
							</a>
							<a 
								href="https://twitter.com/JubayerHosain38"
								target="_blank"
								rel="noreferrer"

							>
								<img src={twitter} alt="" />
								{/* <FaLinkedin size={30}/> */}
							</a>
							
						</div>
					</div>

					<div className="flex">
						<motion.div
						initial={{y:40, opacity:0}}
						whileInView={{y:0,opacity:1}}
						transition={{delay:0.6, duration:1.1,type:'spring',stiffness:120}}
						href="/Jubayer-hosain-Resume.pdf"
						>
						<Link to="portfolio"  smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
							Portfolio
							<span className="group-hover:rotate-90 duration-200">
								<MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
							</span>
						</Link>
						</motion.div>

						<motion.a 
						initial={{y:40, opacity:0}}
						whileInView={{y:0,opacity:1}}
						transition={{delay:0.8, duration:1.2 ,type:'spring',stiffness:120}}
						href="/Jubayer-hosain-Resume.pdf"
						
						download={true}
						target="_blank"
						rel="noreferrer"
						className="group text-black font-bold w-fit ml-8 px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-300 to-blue-300 cursor-pointer">
							Resume
							<span className="group-hover:rotate-90 duration-200">
								<MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
							</span>
						</motion.a>
					</div>
				</div>
				<div>
					<motion.img 
						initial={{x:200, opacity:0}}
						whileInView={{x:0,opacity:1}}
						transition={{ duration:0.8,type:'spring',stiffness:30}}
					
					src={HeroImage} alt="my profile" className="rounded-2xl mx-auto md:w-[70%]" />
				</div>
			</div>
		</div>
  	)
}

export default Home