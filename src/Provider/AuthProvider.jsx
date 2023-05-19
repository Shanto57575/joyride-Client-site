/* eslint-disable react/prop-types */
import { createContext } from "react";
import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	// const [user,setUser] = useState([]);
	// const [loading,setLoading] = useState(true);

	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const SignIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const authInfo = {
		SignIn,
		createUser,
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
