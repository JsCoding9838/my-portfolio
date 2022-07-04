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
				I'm a MERN stack web developer. I have more than one year of experience with MERN stack development. my skills improved from the programming hero community platform and I got a reward of the best student from there.  this platform is most famous in Bangladesh. And I have many examples and projects on my Github. Also, I like to work collaboratively.
				</p>
			</div>
		</div>
	)
}

export default About