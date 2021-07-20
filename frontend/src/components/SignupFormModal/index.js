import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignupForm from "./SignupForm";

function SignupFormModal() {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<button
				onClick={() => {
					setShowModal(true);
					console.log(showModal);
				}}
				className="nav-bar-signup-button"
			>
				Sign Up
			</button>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<SignupForm />
				</Modal>
			)}
		</>
	);
}

export default SignupFormModal;
