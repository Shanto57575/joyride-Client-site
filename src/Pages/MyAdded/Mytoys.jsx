import { useState } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData, useParams } from "react-router-dom";
import ShowMyToys from "./ShowMyToys";
import Swal from "sweetalert2";

const Mytoys = () => {
	const { email } = useParams();
	console.log(email);
	const loadedData = useLoaderData();
	console.log(loadedData);
	const [cars, setCars] = useState(loadedData);
	console.log(cars);

	const handleDelete = (_id) => {
		console.log(_id);
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`http://localhost:5000/cars/${_id}`, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
						if (data.deletedCount > 0) {
							Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
							const remaining = cars.filter((car) => car._id !== _id);
							setCars(remaining);
						}
					});
			}
		});
	};

	return (
		<div className="overflow-x-auto w-full">
			<table className="table w-full">
				<thead>
					<tr className="text-center">
						<th>Name</th>
						<th>Toy Name</th>
						<th>Category</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>rating</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{cars.map((car) => (
						<ShowMyToys
							key={car._id}
							car={car}
							setCars={setCars}
							handleDelete={handleDelete}
						></ShowMyToys>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Mytoys;
