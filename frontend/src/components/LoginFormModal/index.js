import React, { useState } from "react";

import { Modal } from "../../context/Modal";
import LoginForm from "./LoginForm";

function LoginFormModal() {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<button
				onClick={() => {
					setShowModal(true);
					console.log(showModal);
				}}
				className="nav-bar-login-button"
			>
				Log In
			</button>
			{showModal && (
				<Modal
					onClose={() => {
						setShowModal(false);
						console.log(showModal);
					}}
				>
					<LoginForm />
				</Modal>
			)}
		</>
	);
}

export default LoginFormModal;
