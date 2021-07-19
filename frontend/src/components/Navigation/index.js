import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import "./Navigation.css";

function Navigation({ isLoaded }) {
	const sessionUser = useSelector((state) => state.session.user);

	let sessionLinks;
	if (sessionUser) {
		sessionLinks = <ProfileButton user={sessionUser} />;
	} else {
		sessionLinks = (
			<>
				<div className="nav-bar-login">
					<LoginFormModal />
				</div>
				<div className="nav-bar-signup">
					<SignupFormModal />
				</div>
			</>
		);
	}

	return (
		<div className="nav-bar-div">
			<NavLink exact to="/" className="nav-bar">
				<h3>Natr</h3>
			</NavLink>
			{isLoaded && sessionLinks}
		</div>
	);
}

export default Navigation;
