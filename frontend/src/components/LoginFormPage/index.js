import { useState } from "react";
import { useDispatch } from "react-redux";

import { setSessionUserThunk } from "../../store/session";

export default function LoginFormPage() {
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
		}
	}

	return (
		<div>
			<ul className="errors">
				{backendErrors.map((error) => (
					<li key={error}>{error}</li>
				))}
			</ul>
			<form onSubmit={handleSubmit}>
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
