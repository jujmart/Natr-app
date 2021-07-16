import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";

import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import SignupFormPage from "./components/SignupFormPage";
import { restoreSessionUserThunk } from "./store/session";

function App() {
	const user = useSelector((state) => state.session.user);
	const [isLoaded, setIsLoaded] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(restoreSessionUserThunk()).then(() => setIsLoaded(true));
	}, [dispatch]);

	return (
		<>
			<Navigation isLoaded={isLoaded} />
			{isLoaded && (
				<Switch>
					<Route path="/login">
						{user ? <Redirect to="/" /> : <LoginFormPage />}
					</Route>
					<Route path="/signup">
						{user ? <Redirect to="/" /> : <SignupFormPage />}
					</Route>
				</Switch>
			)}
		</>
	);
}

export default App;
