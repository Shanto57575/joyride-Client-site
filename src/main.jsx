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
import AddAToy from "./Pages/AddAToy";
import PrivateRoutes from "./routes/PrivateRoutes";
import Error from "./Pages/Error";
import About from "./Pages/Home/About";
import AllToys from "./Pages/AllToys/AllToys";
import Mytoys from "./Pages/MyAdded/Mytoys";
import DetailsCar from "./Pages/Shop/DetailsCar";
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
				path: "/about",
				element: <About></About>,
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
				element: <AllToys></AllToys>,
			},
			{
				path: "/details/:id",
				element: <DetailsCar></DetailsCar>,
			},
			{
				path: "/toys",
				element: (
					<PrivateRoutes>
						<Mytoys></Mytoys>
					</PrivateRoutes>
				),
				// loader: (data) => {
				// 	const { params } = data;
				// 	console.log(data, params);
				// },
			},
			{
				path: "/addatoy",
				element: (
					<PrivateRoutes>
						<AddAToy></AddAToy>
					</PrivateRoutes>
				),
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
