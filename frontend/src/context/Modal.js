import React, { useContext, useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const ModalContext = React.createContext();

export function ModalProvider({ children }) {
	const modalRef = useRef();
	const [value, setValue] = useState();
	useEffect(() => {
		setValue(modalRef.current);
	}, []);

	return (
		<>
			<ModalContext.Provider value={value}>
				{children}
			</ModalContext.Provider>
			<div ref={modalRef} />
		</>
	);
}

export function Modal({ onClose, children }) {
	let modalNode = useContext(ModalContext);
	console.log(modalNode);
	if (!modalNode) return null;

	// modalNode.innerHTML = "";
	// if (modalNode.childNodes.length > 1) onClose();
	return ReactDOM.createPortal(
		<div id="modal">
			<div id="modal-background" onClick={onClose} />
			<div id="modal-content">{children}</div>
		</div>,
		modalNode
	);
}
