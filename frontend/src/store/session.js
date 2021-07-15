import { csrfFetch } from "./csrf";

const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";

function setSessionUser(user) {
	return { type: SET_USER, user };
}

function removeSessionUser() {
	return { type: REMOVE_USER };
}

export function setSessionUserThunk(credential, password) {
	return async function (dispatch) {
		console.log(credential, password);
		const res = await csrfFetch("/api/session", {
			method: "POST",
			body: JSON.stringify({ credential, password }),
		});

		if (res.ok) {
			const user = await res.json();
			console.log(user);
			dispatch(setSessionUser(user));
		}
	};
}

export function removeSessionUserThunk() {
	return async function (dispatch) {
		const res = await csrfFetch("/api/session", {
			method: "DELETE",
		});

		if (res.ok) {
			dispatch(removeSessionUser());
		}
	};
}

export default function sessionReducer(state = { user: null }, action) {
	Object.freeze(state);

	switch (action.type) {
		case SET_USER:
			return action.user;
		case REMOVE_USER:
			return { user: null };
		default:
			return state;
	}
}
