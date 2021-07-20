import React, { useState } from "react";

import { Modal } from "../../context/Modal";
import LoginForm from "./LoginForm";

function LoginFormModal({ onClose = function () {} }) {
	const [showLoginModal, setShowLoginModal] = useState(false);

	return (
		<>
			<button
				onClick={() => {
					onClose();
					setShowLoginModal(true);
				}}
				className="nav-bar-login-button"
			>
				Log In
			</button>
			{showLoginModal && (
				<Modal onClose={() => setShowLoginModal(false)}>
					<LoginForm setShowLoginModal={setShowLoginModal} />
				</Modal>
			)}
		</>
	);
}

export default LoginFormModal;
