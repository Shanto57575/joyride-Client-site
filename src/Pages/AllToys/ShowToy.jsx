import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, Navigate, useLocation } from "react-router-dom";

/* eslint-disable react/prop-types */
const ShowToy = ({ car }) => {
	const { user } = useContext(AuthContext);
	console.log(car);
	const location = useLocation();

	const { category, details, name, photo, price, quantity, rating, toyname } =
		car;

	const [modalOpen, setModalOpen] = useState(false);

	// const { user } = useContext(AuthContext);

	const handleDetails = () => {
		if (!user) {
			Swal.fire({
				title: "Oops...",
				text: "You need to Sign In first",
			});
			return (
				<Navigate
					to="/login"
					state={{ from: location }}
					replace={true}
				></Navigate>
			);
		}
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};

	return (
		<tr className="text-white font-serif text-xl text-center">
			<td>
				<div className="flex items-center space-x-5">
					<div className="avatar">
						<div className="mask mask-squircle w-12 h-12">
							<img src={photo} alt="Avatar Tailwind CSS Component" />
						</div>
					</div>
					<div className="font-bold">{name}</div>
				</div>
			</td>
			<td>{toyname}</td>
			<td>{category}</td>
			<td>${price}</td>
			<td className="text-center">{quantity}</td>
			<td>{rating}</td>
			<th>
				{user ? (
					<label
						onClick={handleDetails}
						className="text-white cursor-pointer bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
						htmlFor="my-modal-5"
					>
						View Details
					</label>
				) : (
					<Link to="/login">
						<label
							onClick={handleDetails}
							className="text-white cursor-pointer bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
							htmlFor="my-modal-5"
						>
							View Details
						</label>
					</Link>
				)}
				{modalOpen && user && (
					<div>
						<input type="checkbox" id="my-modal-5" className="modal-toggle" />
						<div className="modal text-left">
							<div className="modal-box w-11/12 max-w-5xl">
								<label
									onClick={closeModal}
									htmlFor="my-modal-5"
									className="btn btn-md btn-circle absolute right-2 top-2"
								>
									✕
								</label>
								<div className="lg:flex gap-5">
									<div className="lg:w-1/2">
										<img className="w-full mb-5" src={photo} alt="" />
									</div>
									<div className="lg:w-1/2 space-y-3 text-2xl p-3">
										<h2 className="font-serif text-lg font-extrabold">
											<span className="text-sky-500">SellerName : </span>
											{name}{" "}
										</h2>
										<h2 className="font-serif text-lg font-extrabold">
											<span className="text-sky-500">ToyName : </span>
											{toyname}{" "}
										</h2>
										<p className="font-serif text-lg font-bold">
											<span className="text-sky-500">Category : </span>{" "}
											{category}
										</p>
										<p className="font-serif text-lg font-bold">
											<span className="text-sky-500">Price : </span>${price}
										</p>
										<p className="font-serif text-lg font-bold">
											<span className="text-sky-500">rating : </span>
											{rating} stars!
										</p>
										<p className="font-serif text-lg font-bold">
											<span className="text-sky-500">Total buy : </span>
											{quantity}
										</p>
										<p className="font-serif text-base">
											<span className="text-sky-500 font-bold">
												Description :{" "}
											</span>
											<span className="text-white">{details}</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</th>
		</tr>
	);
};

export default ShowToy;
