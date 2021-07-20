import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Photo from "./components/Photo";
import { restoreSessionUserThunk } from "./store/session";

function App() {
	const [isLoaded, setIsLoaded] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(restoreSessionUserThunk()).then(() => setIsLoaded(true));
	}, [dispatch]);

	return (
		<>
			<Navigation isLoaded={isLoaded} />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/photos/:photoId">
					<Photo />
				</Route>
			</Switch>
		</>
	);
}

export default App;
