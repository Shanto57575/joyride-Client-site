/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
	return (
		<section className="flex justify-center items-center h-screen bg-gray-800">
			<div className="max-w-md w-full bg-gray-900 rounded p-6 space-y-4">
				<div className="mb-4">
					<p className="text-white text-center text-2xl">Sign In</p>
				</div>
				<div>
					<input
						className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
						type="text"
						placeholder="Email"
					/>
				</div>
				<div>
					<input
						className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
						type="text"
						placeholder="Password"
					/>
				</div>
				<div>
					<button className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">
						Sign In
					</button>
					<div className="flex justify-between gap-5">
						<p className="w-full py-4 my-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">
							<FaGoogle className="w-full mx-auto" />
						</p>
						<p className="w-full py-4 my-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">
							<FaGithub className="w-full mx-auto" />
						</p>
					</div>
				</div>
				<div className="flex items-center justify-between">
					<p className="text-sm text-white">
						Don't have an Account ?
						<span className="text-blue-600 hover:underline m-1">
							<Link to="/signup">Sign up</Link>
						</span>
					</p>
					{/* <div>
						<a className="text-sm text-blue-600 hover:underline" href="#">
							Forgot password?
						</a>
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default Login;
