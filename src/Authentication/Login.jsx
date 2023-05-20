/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
	const { SignIn, GoogleLogin, GithubLogin } = useContext(AuthContext);

	const handleLogin = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);
		SignIn(email, password)
			.then(() => {
				Swal.fire({
					icon: "success",
					title: "Yeah!",
					text: "Successfully Logged In!",
				});
				form.reset();
			})
			.catch((error) =>
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: error.message,
				})
			);
	};

	const handleGoogle = () => {
		GoogleLogin()
			.then(() => {
				Swal.fire({
					icon: "success",
					title: "Yeah!",
					text: "Successfully Logged In!",
				});
			})
			.catch((error) =>
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: error.message,
				})
			);
	};

	const handleGithub = () => {
		GithubLogin()
			.then(() => {
				Swal.fire({
					icon: "success",
					title: "Yeah!",
					text: "Successfully Logged In!",
				});
			})
			.catch((error) =>
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: error.message,
				})
			);
	};

	return (
		<section className="flex justify-center items-center h-screen bg-gray-800">
			<div className="max-w-md w-full bg-gray-900 rounded p-10 space-y-4">
				<div className="mb-4">
					<p className="text-white text-center text-2xl">Sign In</p>
				</div>
				<form onSubmit={handleLogin} className="space-y-5">
					<div>
						<input
							className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
							type="email"
							name="email"
							placeholder="Email"
							required
						/>
					</div>
					<div>
						<input
							className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
							type="password"
							name="password"
							placeholder="Password"
							required
						/>
					</div>
					<button className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">
						Sign In
					</button>
				</form>
				<div>
					<div className="flex justify-between gap-5">
						<p
							onClick={handleGoogle}
							className="w-full py-4 my-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200"
						>
							<FaGoogle className="w-full mx-auto" />
						</p>
						<p
							onClick={handleGithub}
							className="w-full py-4 my-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200"
						>
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
				</div>
			</div>
		</section>
	);
};

export default Login;
