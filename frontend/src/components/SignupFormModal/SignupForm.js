import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setClose, setShowLogin } from "../../store/modal";

import { createSessionUserThunk } from "../../store/session";
import styles from "./SignupForm.module.css";

export default function SignupFormPage() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [backendErrors, setBackendErrors] = useState([]);
	const [validationErrors, setValidationErrors] = useState([]);

	const dispatch = useDispatch();

	async function handleSubmit(e) {
		e.preventDefault();

		let res = await dispatch(
			createSessionUserThunk({ username, email, password })
		);
		if (res) {
			setBackendErrors(res.errors);
			setPassword("");
			setConfirmPassword("");
		} else {
			dispatch(setClose());
		}
	}

	useEffect(() => {
		let errors = [];
		if (username) {
			if (username.length < 4)
				errors.push("Username must have at least 4 characters");
			if (username.length > 30)
				errors.push("Username must have at most 30 characters");
			if (username.includes(" "))
				errors.push("Username must not contain spaces");
		}
		if (email) {
			if (!email.includes("@") || email.includes(" "))
				errors.push("Email must be a valid email address");
			if (email.length < 3)
				errors.push("Email must have at least 3 characters");
			if (email.length > 256)
				errors.push("Email must have at most 256 characters");
		}
		if (password || confirmPassword) {
			if (password !== confirmPassword)
				errors.push("Password and confirmed password must match");
			if (password.length < 6)
				errors.push("Password must have at least 6 characters");
		}
		setValidationErrors(errors);
	}, [username, email, password, confirmPassword]);

	return (
		<div className={styles["signup-form-div"]}>
			<h3>Sign up for Natr</h3>
			<form className={styles["signup-form"]} onSubmit={handleSubmit}>
				<div>
					<label>
						Username:
						<input
							className={styles["signup-input"]}
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</label>
				</div>
				<div>
					<label>
						Email:
						<input
							className={styles["signup-input"]}
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</label>
				</div>
				<div>
					<label>
						Password:
						<input
							className={styles["signup-input"]}
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</label>
				</div>
				<div>
					<label>
						Confirm Password:
						<input
							className={styles["signup-input"]}
							type="password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
					</label>
				</div>
				<button
					className={
						!!validationErrors.length ||
						!username ||
						!email ||
						!password ||
						!confirmPassword
							? styles["signup-button-disabled"]
							: styles["signup-button"]
					}
					disabled={
						!!validationErrors.length ||
						!username ||
						!email ||
						!password ||
						!confirmPassword
					}
				>
					Sign Up
				</button>
			</form>
			<div>
				<ul className={styles["signup-form-errors"]}>
					{backendErrors.map((error) => (
						<li key={error}>{error}</li>
					))}
					{validationErrors.map((error) => (
						<li key={error}>{error}</li>
					))}
				</ul>
			</div>
			<div>
				Already a Natr member?{" "}
				<button
					onClick={() => dispatch(setShowLogin())}
					className={styles["signup-form-login-button"]}
				>
					Log In
				</button>
			</div>
			<div>
				<ul></ul>
			</div>
		</div>
	);
}
