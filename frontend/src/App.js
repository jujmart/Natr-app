import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Photo from "./components/Photo";
import UploadPhotoForm from "./components/UploadPhotoForm";
import { restoreSessionUserThunk } from "./store/session";

function App() {
	const [isLoaded, setIsLoaded] = useState(false);
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.session);

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
				<Route path="/upload">
					{!isLoaded ? null : user ? (
						<UploadPhotoForm />
					) : (
						<Redirect to="/" />
					)}
				</Route>
				<Route>
					<h1 style={{ textAlign: "center" }}>
						Page Not Found. <br /> <br />
						Sorry!
					</h1>
				</Route>
			</Switch>
		</>
	);
}

export default App;
