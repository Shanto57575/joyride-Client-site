import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Login from "./Authentication/Login";
import Signup from "./Authentication/Signup";
import AuthProvider from "./Provider/AuthProvider";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog";
import AllToys from "./Pages/AllToys";
import AddAToy from "./Pages/AddAToy";
import Mytoys from "./Pages/Mytoys";
import PrivateRoutes from "./routes/PrivateRoutes";
import Error from "./Pages/Error";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/signup",
				element: <Signup></Signup>,
			},
			{
				path: "/blog",
				element: <Blog></Blog>,
			},
			{
				path: "/alltoys",
				element: (
					<PrivateRoutes>
						<AllToys></AllToys>
					</PrivateRoutes>
				),
			},
			{
				path: "/mytoys",
				element: (
					<PrivateRoutes>
						<Mytoys></Mytoys>
					</PrivateRoutes>
				),
			},
			{
				path: "/addatoy",
				element: <AddAToy></AddAToy>,
			},
		],
	},
	{
		path: "*",
		element: <Error></Error>,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</React.StrictMode>
);
