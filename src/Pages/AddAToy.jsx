import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const AddAToy = () => {
	const { user } = useContext(AuthContext);

	const handleAddAToy = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = user?.displayName;
		const email = user?.email;
		const price = form.price.value;
		const rating = form.rating.value;
		const details = form.details.value;
		const quantity = form.quantity.value;
		const photo = form.photo.value;
		const toyname = form.toyname.value;
		const category = form.vehicle.value;
		const addAll = {
			name,
			email,
			quantity,
			price,
			rating,
			details,
			photo,
			category,
			toyname,
		};

		console.log(addAll);

		fetch("http://localhost:5000/cars", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(addAll),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.insertedId) {
					Swal.fire({
						icon: "success",
						title: "Successful...",
						text: "Data added Successfully!",
					});
				}
			});
		form.reset();
	};
	return (
		<div className="border p-10 my-5 bg-cyan-900 rounded-lg text-white">
			<h1 className="text-center text-xl lg:text-3xl font-serif font-extrabold mb-10">
				Add a <span className="text-cyan-500">Toy</span>
			</h1>
			<form onSubmit={handleAddAToy} className="w-full px-20">
				<div className="flex flex-wrap -mx-3 mb-6">
					<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
							Seller Name
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-black border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
							id="grid-first-name"
							type="text"
							placeholder="Seller Name"
						/>
					</div>
					<div className="w-full md:w-1/2 px-3">
						<label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
							Seller Email
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-last-name"
							name="email"
							type="email"
							placeholder="Seller Email"
						/>
					</div>
				</div>
				<div className="flex flex-wrap -mx-3 mb-6">
					<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
							price{" "}
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-black border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
							id="grid-first-name"
							name="price"
							type="text"
							placeholder="Price"
						/>
					</div>
					<div className="w-full md:w-1/2 px-3">
						<label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
							Rating
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-last-name"
							name="rating"
							type="text"
							placeholder="rating"
						/>
					</div>
				</div>
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
							placeholder="Quantity"
						/>
					</div>
					<div className="w-full md:w-1/2 px-3">
						<label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
							Photo Url
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-last-name"
							type="url"
							name="photo"
							placeholder="Photo Url"
						/>
					</div>
				</div>
				<div className="flex flex-wrap -mx-3 mb-6">
					<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
							Toy Name
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-black border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
							id="grid-first-name"
							type="text"
							name="toyname"
							placeholder="Toy Name"
						/>
					</div>
					<div className="w-full md:w-1/2 px-3">
						<label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
							Description
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-password"
							type="text"
							name="details"
							placeholder="Description"
						/>
					</div>
				</div>
				<div className="flex flex-wrap -mx-3 mb-6">
					<div className="w-full px-3">
						<div className="form-control">
							<div className="input-group">
								<select className="select select-bordered" name="vehicle">
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
	);
};

export default AddAToy;
