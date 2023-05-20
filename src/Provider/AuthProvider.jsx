/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
	GithubAuthProvider,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	// const [loading, setLoading] = useState(true);

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

	const logOut = () => {
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
		return () => {
			return unsubscribe();
		};
	}, []);

	const authInfo = {
		user,
		SignIn,
		createUser,
		GoogleLogin,
		GithubLogin,
		logOut,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
