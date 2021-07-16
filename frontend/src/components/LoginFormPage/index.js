import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { setSessionUserThunk } from "../../store/session";
import "./LoginForm.css";

export default function LoginFormPage() {
	const [credential, setCredential] = useState("");
	const [password, setPassword] = useState("");
	const [backendErrors, setBackendErrors] = useState([]);

	const dispatch = useDispatch();
	const user = useSelector((state) => state.session.user);

	async function handleSubmit(e) {
		e.preventDefault();

		let res = await dispatch(setSessionUserThunk({ credential, password }));
		if (res) {
			setBackendErrors(res.errors);
			setPassword("");
		}
	}

	if (user) return <Redirect to="/" />;

	return (
		<div className="login-form-div">
			<div>
				<ul className="login-form-errors">
					{backendErrors.map((error) => (
						<li key={error}>{error}</li>
					))}
				</ul>
			</div>
			<form className="login-form" onSubmit={handleSubmit}>
				<div>
					<label>
						Login Credential (username or email)
						<input
							type="text"
							value={credential}
							onChange={(e) => setCredential(e.target.value)}
						/>
					</label>
				</div>
				<div>
					<label>
						Password
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</label>
				</div>
				<button>Login</button>
			</form>
		</div>
	);
}
