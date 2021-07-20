import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Modal } from "../../context/Modal";
import LoginForm from "../LoginFormModal/LoginForm";
import SignupForm from "../SignupFormModal/SignupForm";
import ProfileButton from "./ProfileButton";
import { setShowSignup, setShowLogin, setClose } from "../../store/modal";
import "./Navigation.css";

function Navigation({ isLoaded }) {
	const sessionUser = useSelector((state) => state.session.user);
	const signup = useSelector((state) => state.modal.signup);
	const login = useSelector((state) => state.modal.login);
	const dispatch = useDispatch();

	let sessionLinks;
	if (sessionUser) {
		sessionLinks = (
			<div className="nav-bar-buttons">
				<ProfileButton user={sessionUser} />
			</div>
		);
	} else {
		sessionLinks = (
			<div className="nav-bar-buttons">
				<div className="nav-bar-login">
					<button
						onClick={() => dispatch(setShowLogin())}
						className="nav-bar-login-button"
					>
						Log In
					</button>
					{login ? (
						<Modal onClose={() => dispatch(setClose())}>
							<LoginForm />
						</Modal>
					) : null}
				</div>
				<div className="nav-bar-signup">
					<button
						onClick={() => dispatch(setShowSignup())}
						className="nav-bar-signup-button"
					>
						Sign Up
					</button>
					{signup ? (
						<Modal onClose={() => dispatch(setClose())}>
							<SignupForm />
						</Modal>
					) : null}
				</div>
			</div>
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
