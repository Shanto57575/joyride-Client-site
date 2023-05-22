/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsCar = () => {
	const { id } = useParams();
	console.log(id);
	const [details, setDetails] = useState([]);

	useEffect(() => {
		fetch("/Category.json")
			.then((res) => res.json())
			.then((data) => {
				const showData = data.find((car) => car.id === parseInt(id));
				setDetails(showData);
			});
	}, [id]);

	console.log(details);

	return (
		<div>
			<h1 className="text-center font-serif font-extrabold text-cyan-200 text-2xl mb-7">
				Know More About {details.name} !!!
			</h1>
			<div className="flex gap-5 my-5">
				<div>
					<img
						className="h-[300px] rounded-lg"
						src={details.picture}
						alt="car!"
					/>
				</div>
				<div className="w-1/2 card-body font-serif text-white space-y-2 p-0">
					<h2 className="card-title text-xl">
						<span className="text-cyan-400">CarName :</span> {details.name}
					</h2>
					<p className="text-xl">
						<span className="text-cyan-400">Price :</span> ${details.price}
					</p>
					<p className="text-xl">
						<span className="text-cyan-400">rating :</span> {details.rating}
					</p>
					<p className="text-lg text-justify">{details.description}</p>
				</div>
			</div>
		</div>
	);
};

export default DetailsCar;
