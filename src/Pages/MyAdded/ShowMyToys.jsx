import { useState } from "react";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const ShowMyToys = ({ car, handleDelete, setCars }) => {
	const { _id, category, name, photo, price, quantity, rating, toyname } = car;

	const [modalOpen, setModalOpen] = useState(false);

	const handleDetails = () => {
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};

	const handleUpdate = (event) => {
		event.preventDefault();
		const form = event.target;
		const price = form.price.value;
		const quantity = form.quantity.value;
		const details = form.details.value;

		const updateCar = { ...car, price, quantity, details };

		fetch(`http://localhost:5000/cars/${_id}`, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(updateCar),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					Swal.fire({
						title: "Success!",
						text: "Car data Updated Successfully",
						icon: "success",
						confirmButtonText: "Cool",
					});
					setCars((prevCars) => {
						const updatedCars = prevCars.find((prevCar) => {
							prevCar._id === _id ? updateCar : prevCar;
						});
						return updatedCars;
					});
				}
			});
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
				<label
					onClick={handleDetails}
					className="text-white cursor-pointer bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2"
					htmlFor="my-modal-5"
				>
					Edit
				</label>
				{modalOpen && (
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
								<form onSubmit={handleUpdate} className="w-full px-20">
									<div className="flex flex-wrap -mx-3 mb-6">
										<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
											<label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
												Quantity
											</label>
											<input
												className="appearance-none block w-full bg-gray-200 text-black border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
												id="grid-first-name"
												type="text"
												name="quantity"
												defaultValue={car.quantity}
												placeholder="Quantity"
											/>
										</div>
										<div className="w-full md:w-1/2 px-3">
											<label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
												Price
											</label>
											<input
												className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
												id="grid-last-name"
												type="text"
												defaultValue={car.price}
												name="price"
												placeholder="Price"
											/>
										</div>
									</div>
									<div className="flex flex-wrap -mx-3 mb-6">
										<div className="w-full px-3">
											<label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
												Description
											</label>
											<input
												className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
												id="grid-password"
												type="text"
												defaultValue={car.details}
												name="details"
												placeholder="Description"
											/>
										</div>
									</div>
									<div className="flex flex-wrap -mx-3 mb-6">
										<div className="w-full px-3">
											<div className="form-control">
												<div className="input-group">
													<select
														className="select select-bordered"
														name="vehicle"
													>
														<option disabled selected>
															Pick category
														</option>
														<option>Bus</option>
														<option>Truck</option>
														<option>Sports Car</option>
													</select>
													<input
														className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm pt-2 pb-1 px-5 text-center"
														type="submit"
														value="Submit"
													/>
												</div>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				)}
			</th>
			<th>
				<button
					onClick={() => handleDelete(_id)}
					className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
				>
					Delete
				</button>
			</th>
		</tr>
	);
};

export default ShowMyToys;
