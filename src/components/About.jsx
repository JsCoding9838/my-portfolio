import React from 'react'

const About = () => {
	return (
		<div 
			name="about me"
			className="w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
		>
			<div className="max-w-screen-lg md:px-16 p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="md:pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">About me</p>
				</div>
				<p className="text-xl mt-8 md:mt-20">
					I'm a full stack web developer. I have one year of experience with MERN stack developer. I got skilled from programming hero comunity. this is most famuch in the Bangladesh. There are many examples and project in my Github. and like to work with group.
				</p>
			</div>
		</div>
	)
}

export default About