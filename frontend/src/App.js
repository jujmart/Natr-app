import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Navigation from "./components/Navigation";
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
		</>
	);
}

export default App;
