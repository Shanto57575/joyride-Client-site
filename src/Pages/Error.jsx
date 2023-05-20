import { Link } from "react-router-dom";

const Error = () => {
	return (
		<div className="py-28 lg:px-96">
			<Link className="font-serif font-extrabold text-cyan-400">
				Back to Home
			</Link>
			<img
				src="https://media.istockphoto.com/id/1094424762/photo/404-buzzword-cubes-with-computer-mouse-3d-rendering.jpg?s=612x612&w=0&k=20&c=FYZ5eBekD4ANFN78So2c7iZEa87fTha8rhxj0BDzkhU="
				alt=""
			/>
		</div>
	);
};

export default Error;
