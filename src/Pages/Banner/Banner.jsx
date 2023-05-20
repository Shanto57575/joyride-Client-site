import Marquee from "react-fast-marquee";
const Banner = () => {
	return (
		<div className="lg:flex text-blue-950 bg-gradient-to-r from-cyan-100 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm text-center mr-2 mb-2">
			<div className="w-full mx-auto lg:w-1/2 text-center lg:text-left">
				<div className="p-5 lg:px-20 lg:pt-20">
					<div className="text-2xl lg:text-6xl top-1/2 font-serif space-y-2">
						<p className="text-base my-3">
							Welcome To,{" "}
							<span className="text-2xl ml-2  font-extrabold">joy</span>
							Ride
						</p>
						Where Kids Rule the Roads of Fun
					</div>
					<div className="flex gap-5 my-5 w-full mx-auto">
						<button
							type="button"
							className="text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 dark:focus:ring-sky-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
						>
							About us
						</button>
						<button
							type="button"
							className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm p-4 text-center mr-2 mb-2"
						>
							Learn More
						</button>
					</div>{" "}
				</div>
			</div>
			<div className="w-full mx-auto lg:w-1/2">
				<Marquee speed={300} pauseOnHover={true}>
					<img
						className="lg:h-[450px]"
						src="https://media.istockphoto.com/id/1375439355/photo/cheerful-father-and-son-playing-with-toy-cars.jpg?s=612x612&w=0&k=20&c=Xdok1LUslWmml5dIPIhXWG3ZnbEh67Ce5tk_GsdzRik="
						alt=""
					/>
					<img
						className="lg:h-[450px]"
						src="https://media.istockphoto.com/id/1283681886/photo/little-boy-riding-toy-car-in-the-garden.jpg?s=612x612&w=0&k=20&c=3B-qiRGCB1cUbUuAYZuSiVYf74hGrE3IOL2G3PWYCw4="
						alt=""
					/>
					<img
						className="lg:h-[450px]"
						src="https://media.istockphoto.com/id/1407266047/photo/sharing-is-caring.jpg?s=612x612&w=0&k=20&c=q3Dqr7PKw_v5cFgX9wSVBacYPxJrFny9AJfonPlOibY="
						alt=""
					/>
					<img
						className="lg:h-[450px]"
						src="https://media.istockphoto.com/id/1356433415/photo/preschool-age-boy-plays-with-toy-trains-on-floor.jpg?s=612x612&w=0&k=20&c=oQr7aUbMTk9X8hyOW20p-_lvI2VOB6XloT6m4OiOndI="
						alt=""
					/>
					<img
						className="lg:h-[450px]"
						src="https://media.istockphoto.com/id/1388346908/photo/mom-and-little-son-play-racing-on-the-carpet-at-home-have-fun-and-hug-single-mother-raises.jpg?s=612x612&w=0&k=20&c=VI7qFwfirRxsnEpwX4fBF9vYmKL835L33A9y0Y9o_xY="
						alt=""
					/>
					<img
						className="lg:h-[450px]"
						src="https://media.istockphoto.com/id/870507038/photo/our-collection-toy.jpg?s=612x612&w=0&k=20&c=q51HSA1TtOekAQeKI1AT3pMe_Q_k2p0U0j87X8tQCzc="
						alt=""
					/>
				</Marquee>
			</div>
		</div>
	);
};

export default Banner;
