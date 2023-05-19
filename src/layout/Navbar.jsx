import { Link } from "react-router-dom";
import logo from "../assets/car.png";
const Navbar = () => {
	return (
		<div className="navbar bg-base-100 font-serif text-lg">
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
						<Link to="/signin">
							<li>Sign In</li>
						</Link>
					</ul>
				</div>
				<p className="flex items-center">
					<img className="w-32" src={logo} alt="" />
					<h3 className="font-extrabold lg:text-4xl ">
						Joy<span className="text-orange-500">Ride</span>{" "}
					</h3>
				</p>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1 gap-5">
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
					<Link to="/login">
						<li>Sign In</li>
					</Link>
				</ul>
			</div>
			<div className="navbar-end">
				<a className="btn">Get started</a>
			</div>
		</div>
	);
};

export default Navbar;
