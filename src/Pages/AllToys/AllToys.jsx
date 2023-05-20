import { useEffect, useState } from "react";
import ShowToy from "./ShowToy";

const AllToys = () => {
	const [cars, setCars] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/cars")
			.then((res) => res.json())
			.then((data) => setCars(data));
	}, []);

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
						<th>Details</th>
					</tr>
				</thead>
				<tbody>
					{cars.map((car) => (
						<ShowToy key={car._id} car={car}></ShowToy>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default AllToys;
