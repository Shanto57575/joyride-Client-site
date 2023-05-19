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
				element: <AllToys></AllToys>,
			},
			{
				path: "/addatoy",
				element: <AddAToy></AddAToy>,
			},
			{
				path: "/mytoys",
				element: <Mytoys></Mytoys>,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</React.StrictMode>
);
