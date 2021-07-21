import { useState } from "react";
import { useDispatch } from "react-redux";

import { setClose, setShowSignup } from "../../store/modal";
import { setSessionUserThunk } from "../../store/session";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
	const [credential, setCredential] = useState("");
	const [password, setPassword] = useState("");
	const [backendErrors, setBackendErrors] = useState([]);

	const dispatch = useDispatch();

	async function handleSubmit(e) {
		e.preventDefault();

		let res = await dispatch(setSessionUserThunk({ credential, password }));
		if (res) {
			setBackendErrors(res.errors);
			setPassword("");
		} else {
			dispatch(setClose());
		}
	}

	return (
		<div className={styles["login-form-div"]}>
			<h3>Log in to Natr</h3>
			<div>
				<ul className={styles["login-form-errors"]}>
					{backendErrors.map((error) => (
						<li key={error}>{error}</li>
					))}
				</ul>
			</div>
			<form className={styles["login-form"]} onSubmit={handleSubmit}>
				<div>
					<label>
						Login Credential (username or email):
						<input
							className={styles["login-input"]}
							type="text"
							value={credential}
							onChange={(e) => setCredential(e.target.value)}
						/>
					</label>
				</div>
				<div>
					<label>
						Password:
						<input
							className={styles["login-input"]}
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</label>
				</div>
				<button className={styles["login-button"]}>Login</button>
			</form>
			<div>
				<ul></ul>
			</div>
			<div>
				Not a Natr member?{" "}
				<button
					onClick={() => dispatch(setShowSignup())}
					className={styles["login-form-signin-button"]}
				>
					Sign Up
				</button>
			</div>
			<div>
				<ul></ul>
			</div>
		</div>
	);
}
