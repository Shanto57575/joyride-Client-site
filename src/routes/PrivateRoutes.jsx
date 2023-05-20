/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

const PrivateRoutes = ({ children }) => {
	const { user } = useContext(AuthContext);

	if (user) {
		return children;
	}
	if (!user) {
		Swal.fire({
			title: "You need to Sign in first",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Sign In",
			// eslint-disable-next-line no-unused-vars
		}).then((result) => {
			// if (result.isConfirmed) {
			// 	// Swal.fire("Deleted!", "Your file has been deleted.", "success");
			// }
		});
		return <Navigate to="/login"></Navigate>;
	}
};

export default PrivateRoutes;
