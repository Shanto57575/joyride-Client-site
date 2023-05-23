import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ShowCar from "./ShowCar";
import Aos from "aos";
import "aos/dist/aos.css";

const ShopCategory = () => {
	const [cars, setCar] = useState([]);

	useEffect(() => {
		Aos.init({ duration: 100 });
	}, []);

	useEffect(() => {
		fetch("Category.json")
			.then((res) => res.json())
			.then((data) => setCar(data));
	}, []);

	return (
		<div
			data-aos="flip-up"
			data-aos-easing="ease-out-back"
			data-aos-duration="1000"
		>
			<div className="my-10">
				<h1 className="text-center text-cyan-200 font-extrabold text-3xl font-serif">
					Choose Your Category!
				</h1>
				<Tabs>
					<TabList
						className={
							"text-center rounded-lg bg-cyan-500 text-white font-extrabold border-black my-5 py-2"
						}
					>
						{" "}
						<div className={"font-serif text-xl"}>
							<Tab>Bus</Tab>
							<Tab>Sports car</Tab>
							<Tab>Truck</Tab>
						</div>
					</TabList>

					<TabPanel>
						<h2 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full mx-auto">
							{cars.slice(0, 3).map((car) => (
								<ShowCar key={car.id} car={car}></ShowCar>
							))}
						</h2>
					</TabPanel>
					<TabPanel>
						<h2 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mx-auto">
							{cars.slice(3, 6).map((car) => (
								<ShowCar key={car.id} car={car}></ShowCar>
							))}
						</h2>
					</TabPanel>
					<TabPanel>
						<h2 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mx-auto">
							{cars.slice(6, 9).map((car) => (
								<ShowCar key={car.id} car={car}></ShowCar>
							))}
						</h2>
					</TabPanel>
				</Tabs>
			</div>
		</div>
	);
};

export default ShopCategory;
