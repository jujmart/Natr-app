const SHOW_LOGIN = "/modal/SHOW_LOGIN";
const SHOW_SIGNUP = "/modal/SHOW_SIGNUP";
const CLOSE = "/modal/CLOSE";

export function setShowLogin() {
	return { type: SHOW_LOGIN };
}

export function setShowSignup() {
	return { type: SHOW_SIGNUP };
}

export function setClose() {
	return { type: CLOSE };
}

export default function modalReducer(
	state = { login: null, signup: null },
	action
) {
	Object.freeze(state);
	switch (action.type) {
		case SHOW_LOGIN:
			return { login: true, signup: null };
		case SHOW_SIGNUP:
			return { login: null, signup: true };
		case CLOSE:
			return { login: null, signup: null };
		default:
			return state;
	}
}
