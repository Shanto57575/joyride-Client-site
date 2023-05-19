/* eslint-disable react/prop-types */
import { createContext } from "react";
import {
	GithubAuthProvider,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	signInWithPopup,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
	// const [user,setUser] = useState([]);
	// const [loading,setLoading] = useState(true);

	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const SignIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const GoogleLogin = () => {
		return signInWithPopup(auth, provider);
	};
	const GithubLogin = () => {
		return signInWithPopup(auth, gitProvider);
	};

	const authInfo = {
		SignIn,
		createUser,
		GoogleLogin,
		GithubLogin,
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
