import React from 'react';
import menufacturers from "../assets/portfolio/menufacturer.png";
import carwarehouse from "../assets/portfolio/carwarehouse.png";
import sportphotograher from "../assets/portfolio/sportphotograher.png";
import foodpanda from "../assets/portfolio/foodpanda.png";
import televisionshop from "../assets/portfolio/televisionshop.png";

const Portfolio = () => {

	const portfolio = [
		{
			id: 1,
			src: menufacturers,
			href: "https://assignment-12-with-node.web.app/"
		},
		{
			id: 2,
			src: carwarehouse,
			href: "https://warehouse-with-node.web.app/"
		},
		{
			id: 3,
			src: sportphotograher,
			href: "https://assignment-10-with-firebase.web.app/"
		},
		{
			id: 4,
			src: foodpanda,
			href: "https://freshfoodsshop.netlify.app/"
		},
		{
			id: 5,
			src: televisionshop,
			href: "https://televisionshopwithled.netlify.app/"
		}
	];


  	return (
		<div name="portfolio" className="w-full pt-8 md:pt-24 pb-10 bg-gradient-to-b from-black to-gray-800 text-white">
			<div className="max-w-screen-lg md:px-16 px-8 mx-auto">
				<div className="pb-8">
					<p className="text-4xl font-bold inlin border-b-4 border-gray-500">Portfolio</p>
					<p className="py-6">Check out some of my work right here</p>
				</div>
				<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 text-center md:py-8 sm:px-0">
					{
						portfolio.map(({id, src, href}) => (
							<div key={id} className="card bg-base-100 shadow-xl">
								<figure><img src={src} alt="Shoes" /></figure>
								<div className="card-body text-black">
									<h2 className="card-title text-start">Site name</h2>
									<p className="text-start">Description If a dog chews shoes whose shoes does he choose?</p>
									<div className="card-actions justify-between">
										<a href={href}
										target="_blank"
										rel="noreferrer"
										>
										<button className="btn btn-secondary duration-200 hover:scale-105">Demo</button>
										</a>
										<button className="btn btn-primary duration-200 hover:scale-105">Details</button>
									</div>
								</div>
							</div>
						))
					}
				
				</div>
			</div>
		</div>
  	)
}

export default Portfolio