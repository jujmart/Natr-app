import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";

import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import { restoreSessionUserThunk } from "./store/session";

function App() {
	const user = useSelector((state) => state.session.user);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(restoreSessionUserThunk());
	}, [dispatch]);

	return (
		<>
			<h1>Hello from App</h1>
			<Switch>
				<Route path="/login">
					{user ? <Redirect to="/" /> : <LoginFormPage />}
				</Route>
				<Route path="/signup">
					{user ? <Redirect to="/" /> : <SignupFormPage />}
				</Route>
			</Switch>
		</>
	);
}

export default App;
