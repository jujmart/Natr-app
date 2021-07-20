import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignupForm from "./SignupForm";

function SignupFormModal({ onClose = function () {} }) {
	const [showSignupModal, setShowSignupModal] = useState(false);

	return (
		<>
			<button
				onClick={() => {
					onClose();
					setShowSignupModal(true);
				}}
				className="nav-bar-signup-button"
			>
				Sign Up
			</button>
			{showSignupModal && (
				<Modal onClose={() => setShowSignupModal(false)}>
					<SignupForm setShowSignupModal={setShowSignupModal} />
				</Modal>
			)}
		</>
	);
}

export default SignupFormModal;
