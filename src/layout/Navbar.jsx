import { Link } from "react-router-dom";
import logo from "../assets/car.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
	const { user, logOut } = useContext(AuthContext);

	const handleLogout = () => {
		logOut()
			.then(() => {})
			.catch(() => {
				console.log("Out");
			});
	};

	return (
		<div className="navbar font-serif text-lg ">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-4 gap-5 shadow bg-base-100 rounded-box w-52"
					>
						<Link to="/">
							<li>Home</li>
						</Link>
						<Link to="/blog">
							<li>Blog</li>
						</Link>
						<Link to="/alltoys">
							<li>All Toys</li>
						</Link>
						<Link to="/mytoys">
							<li>My Toys</li>
						</Link>
						<Link to="/addatoy">
							<li>Add A Toy</li>
						</Link>
						<Link to="/signup">
							<li>Sign Up</li>
						</Link>
						<div className="navbar-end">
							{user ? (
								<p onClick={handleLogout}>Sign Out</p>
							) : (
								<Link to="/login">
									<p className="text-cyan-200">Sign In</p>
								</Link>
							)}
						</div>
					</ul>
				</div>
				<p className="flex items-center">
					<img className="w-32" src={logo} alt="" />
					<h3 className="font-extrabold lg:text-4xl ">
						Joy
						<span className=" text-cyan-500">Ride</span>{" "}
					</h3>
				</p>
			</div>
			<div className="navbar-center hidden lg:flex ms-20">
				<ul className="menu menu-horizontal px-1 gap-7 text-lg font-serif text-cyan-200  font-extrabold">
					<Link to="/">
						<li>Home</li>
					</Link>
					<Link to="/blog">
						<li>Blog</li>
					</Link>
					<Link to="/alltoys">
						<li>All Toys</li>
					</Link>
					<Link to="/mytoys">
						<li>My Toys</li>
					</Link>
					<Link to="/addatoy">
						<li>Add A Toy</li>
					</Link>
					<Link to="/signup">
						<li>Sign Up</li>
					</Link>
				</ul>
			</div>
			<div className="navbar-end">
				{user ? (
					<div className="flex items-center gap-4">
						<p className="font-bold" onClick={handleLogout}>
							Sign Out
						</p>
						<img
							className="w-12 rounded-full"
							src={user.photoURL ? user.photoURL : "loading"}
							alt="profile"
							title={user.displayName}
						/>
					</div>
				) : (
					<Link to="/login">
						<p className="text-cyan-200 font-bold">Sign In</p>
					</Link>
				)}
			</div>
		</div>
	);
};

export default Navbar;
