/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";

/* eslint-disable react/prop-types */
const ShowCar = ({ car }) => {
	const { price, rating, name, picture, category, description } = car;

	const [modalOpen, setModalOpen] = useState(false);

	const handleDetails = () => {
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};

	return (
		<div className="card card-compact lg:w-96 bg-base-100 shadow-xl">
			<figure>
				<img className="lg:h-[250px]" src={picture} alt="car" />
			</figure>
			<div className="card-body">
				<h2 className="font-serif text-lg font-extrabold text-sky-500">
					{name} <div className="badge badge-secondary">{category}</div>
				</h2>
				<p className="font-serif text-lg font-bold">Price : ${price}</p>
				<p className="font-serif text-lg font-bold">rating : {rating} stars!</p>
				<div className="card-actions justify-end">
					<label
						onClick={handleDetails}
						className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
						htmlFor="my-modal-3"
					>
						View Details
					</label>
					{modalOpen && (
						<div>
							<input type="checkbox" id="my-modal-3" className="modal-toggle" />
							<div className="modal">
								<div className="modal-box relative p-3">
									<label
										onClick={closeModal}
										htmlFor="my-modal-3"
										className="btn btn-md btn-circle absolute right-2 top-2"
									>
										✕
									</label>
									<img className="w-full" src={picture} alt="" />
									<h2 className="font-serif text-lg font-extrabold text-sky-500">
										{name}{" "}
										<div className="badge badge-secondary">{category}</div>
									</h2>
									<p className="font-serif text-lg font-bold">
										Price : ${price}
									</p>
									<p className="font-serif text-lg font-bold">
										rating : {rating} stars!
									</p>
									<p>{description}</p>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ShowCar;
