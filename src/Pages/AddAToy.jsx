import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const AddAToy = () => {
	return (
		<div className="border p-10 my-5 bg-black text-white">
			<h1 className="text-center text-xl lg:text-3xl font-serif font-extrabold mb-10">
				Add a <span className="text-orange-500">Toy</span>
			</h1>
			<form className="w-full px-20">
				<div className="flex flex-wrap -mx-3 mb-6">
					<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
							Seller Name
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-black border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
							id="grid-first-name"
							type="url"
							name="name"
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
							type="text"
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
							placeholder="$Price"
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
							type="text"
							name="photo"
							placeholder="Photo Url"
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
							placeholder="Description"
						/>
					</div>
				</div>
				<div className="flex flex-wrap -mx-3 mb-6">
					<div className="w-full px-3">
						<label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
							Category
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-password"
							name="category"
							type="text"
							placeholder="category"
						/>
						<Tabs>
							<TabList>
								<Tab>Sports car</Tab>
								<Tab>Trucks</Tab>
								<Tab></Tab>
							</TabList>

							<TabPanel>
								<h2>Any content 1</h2>
							</TabPanel>
							<TabPanel>
								<h2>Any content 2</h2>
							</TabPanel>
							<TabPanel>
								<h2>Any content 3</h2>
							</TabPanel>
						</Tabs>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AddAToy;
