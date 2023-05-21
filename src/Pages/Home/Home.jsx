import Offer from "../Offer";
import ShopCategory from "../Shop/ShopCategory";
import Banner from "./Banner";
import Gallery from "./Gallery";
import Reviews from "./Reviews";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Gallery></Gallery>
			<ShopCategory></ShopCategory>
			<Offer></Offer>
			<Reviews></Reviews>
		</div>
	);
};

export default Home;
