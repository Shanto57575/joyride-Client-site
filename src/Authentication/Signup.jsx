import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Signup = () => {
	const { createUser } = useContext(AuthContext);

	const handleUser = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		const confirm = form.confirm.value;
		const photo = form.photo.value;
		console.log(name, email, password, confirm, photo);

		createUser(email, password)
			.then((result) => {
				Swal.fire({
					icon: "success",
					title: "Yeah!",
					text: "Account created Successfully!",
				});
				updateProfile(result.user, {
					displayName: name,
					photoURL: "https://i.postimg.cc/3JVMhBVg/shanto-png.jpg",
				})
					.then(() => {})
					.catch(() => {});
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

	return (
		<section className="flex justify-center items-center h-screen bg-gray-800">
			<form
				onSubmit={handleUser}
				className="max-w-md w-full bg-gray-900 rounded p-6 space-y-4"
			>
				<div className="mb-4">
					<p className="text-white text-center text-2xl">Sign Up</p>
				</div>
				<div>
					<input
						className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
						type="text"
						placeholder="Name"
						name="name"
						required
					/>
				</div>
				<div>
					<input
						className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
						type="text"
						placeholder="Email"
						name="email"
						required
					/>
				</div>
				<div>
					<input
						className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
						type="Password"
						placeholder="Password"
						name="password"
						required
					/>
				</div>
				<div>
					<input
						className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
						type="password"
						placeholder="Confirm password"
						name="confirm"
						required
					/>
				</div>
				<div>
					<input
						className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
						type="url"
						placeholder="Photo Url"
						name="photo"
						required
					/>
				</div>
				<div>
					<button className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">
						Create an Account
					</button>
				</div>
				<div className="flex items-center justify-between">
					<p className="text-sm text-white">
						Already have an Account ?
						<span className="text-blue-600 hover:underline m-1">
							<Link to="/login">login</Link>
						</span>
					</p>
				</div>
			</form>
		</section>
	);
};

export default Signup;
