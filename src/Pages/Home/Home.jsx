import ShopCategory from "../Shop/ShopCategory";
import Banner from "../Banner/Banner";
import Gallery from "./Gallery";
import Reviews from "../Reviews";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Gallery></Gallery>
			<ShopCategory></ShopCategory>
			<Reviews></Reviews>
		</div>
	);
};

export default Home;
