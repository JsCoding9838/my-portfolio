import React from 'react';

const Contact = () => {
	return (
		<div 
			name="contact"
			className="pt-8 md:pt-24 bg-gradient-to-b from-black to-gray-800 text-white">
			<div className="max-w-screen-lg md:px-16 flex flex-col p-4 justify-center mx-auto h-full">
				<div className="pb-2 md:pb-8">
					<p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact Me</p>
					<p className="py-3 md:py-6">Submit the form below get in touch with me</p>
				</div>
				<div className="flex justify-center items-center">
					<form action="https://getform.io/f/80f29b7f-f720-4931-8251-4702c60f573e" method="POST" className="flex flex-col w-full md:w-1/2">
						<input 
							type="text"
							name="name"
							placeholder="Enter Your name"
							className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"

						/>
						<input 
							type="text"
							name="email"
							placeholder="Enter Your email"
							className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"

						/>
						<textarea 
							name="message" 
							placeholder="Enter your message"
							rows="5" 
							className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
						>

						</textarea>
						<button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-4 sm:my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
							Let's talk
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Contact;