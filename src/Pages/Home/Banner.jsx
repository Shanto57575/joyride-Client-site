import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const Banner = () => {
	return (
		<div className="lg:flex bg-orange-50 text-stone-700">
			<div className="lg:w-1/2 text-center lg:text-left">
				<div className="p-5 lg:px-20 lg:pt-20">
					<div className="text-2xl lg:text-6xl top-1/2 font-serif space-y-2">
						<p className="text-base my-3">
							Welcome to,{" "}
							<span className="text-2xl ml-2 text-orange-500  font-extrabold">
								joy
							</span>
							Ride
						</p>
						Where Kids Rule the Roads of Fun
					</div>
					<div className="flex gap-5 my-5">
						<Link to="/about">
							<button className=" bg-orange-500 hover:text-orange-500 border font-bold border-orange-500 hover:bg-white text-white p-1  lg:py-4 lg:px-5">
								About us
							</button>
						</Link>
						<button className="bg-transparent border font-bold border-black p-1 lg:p-3 hover:text-white hover:bg-black">
							Learn More
						</button>
					</div>{" "}
				</div>
			</div>
			<div className="lg:w-1/2">
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
