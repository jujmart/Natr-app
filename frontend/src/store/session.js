import { csrfFetch } from "./csrf";

const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";
const RESTORE_USER = "session/RESOTRE_USER";

function setSessionUser(user) {
	return { type: SET_USER, user };
}

function removeSessionUser() {
	return { type: REMOVE_USER };
}

function restoreSessionUser(user) {
	return { type: RESTORE_USER, user };
}

export function setSessionUserThunk({ credential, password }) {
	return async function (dispatch) {
		try {
			const res = await csrfFetch("/api/session", {
				method: "POST",
				body: JSON.stringify({ credential, password }),
			});

			if (res.ok) {
				const user = await res.json();
				dispatch(setSessionUser(user));
			}
		} catch (err) {
			return err.json();
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

export function restoreSessionUserThunk() {
	return async function (dispatch) {
		const res = await csrfFetch("/api/session");
		const { user } = await res.json();
		if (user) {
			dispatch(restoreSessionUser({ user }));
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
		case RESTORE_USER:
			return action.user;
		default:
			return state;
	}
}
