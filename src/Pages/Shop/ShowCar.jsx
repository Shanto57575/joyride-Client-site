/* eslint-disable react/no-unescaped-entities */

import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
// import PrivateRoutes from "../../routes/PrivateRoutes";

/* eslint-disable react/prop-types */
const ShowCar = ({ car }) => {
	const { id, price, rating, name, picture, category } = car;

	const { user } = useContext(AuthContext);

	const handleDetails = () => {
		{
			if (!user) {
				Swal.fire({
					title: "Oops...",
					text: "You need to Sign In first to view Details!",
				});
				return;
			}
		}
	};

	return (
		<div className="card card-compact lg:w-96 bg-base-100 shadow-xl">
			<figure>
				<img className="lg:h-[250px]" src={picture} alt="car" />
			</figure>
			<div className="card-body shadow-2xl">
				<h2 className="font-serif text-lg font-extrabold text-sky-500">
					{name} <div className="badge badge-secondary">{category}</div>
				</h2>
				<p className="font-serif text-lg font-bold">Price : ${price}</p>
				<p className="font-serif text-lg font-bold">rating : {rating} stars!</p>
				<div className="card-actions justify-end">
					{user ? (
						<>
							<Link
								className="cursor-pointer text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
								to={`/details/${id}`}
							>
								View Details
							</Link>
						</>
					) : (
						<>
							<Link
								to="/login"
								onClick={handleDetails}
								className="cursor-pointer text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
							>
								View Details
							</Link>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default ShowCar;
