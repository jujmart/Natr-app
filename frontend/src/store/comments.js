import { csrfFetch } from "./csrf";

const SET_COMMENTS = "/comments/SET_COMMENTS";
const ADD_COMMENT = "/comments/ADD_COMMENT";
const UNSET_COMMENTS = "/comments/UNSET_COMMENTS";
const DELETE_COMMENT = "/comments/DELETE_COMMENT";
const EDIT_COMMENT = "/comments/EDIT_COMMENT";

function setComments(comments) {
	return { type: SET_COMMENTS, comments };
}

function addComment(comment) {
	return { type: ADD_COMMENT, comment };
}

export function unsetComments() {
	return { type: UNSET_COMMENTS };
}

function deleteComment(id) {
	return { type: DELETE_COMMENT, id };
}

function editComment(comment) {
	return { type: EDIT_COMMENT, comment };
}

export function setCommentsThunk(imageId) {
	return async function (dispatch) {
		const res = await csrfFetch(`/api/comments`, {
			method: "PATCH",
			body: JSON.stringify({ imageId }),
		});

		if (res.ok) {
			const { comments } = await res.json();
			dispatch(setComments(comments));
		}
	};
}

export function addCommentThunk(comment) {
	return async function (dispatch) {
		try {
			const res = await csrfFetch(`/api/comments`, {
				method: "POST",
				body: JSON.stringify(comment),
			});

			if (res.ok) {
				const { newComment } = await res.json();
				dispatch(addComment(newComment));
			}
		} catch (err) {
			return err.json();
		}
	};
}

export function deleteCommentThunk(id) {
	return async function (dispatch) {
		try {
			await csrfFetch(`/api/comments/${id}`, {
				method: "DELETE",
			});
			dispatch(deleteComment(id));
		} catch (err) {
			return err.json();
		}
	};
}

export function editCommentThunk({ id, content, imageId, userId, username }) {
	return async function (dispatch) {
		try {
			const res = await csrfFetch(`/api/comments/${id}`, {
				method: "PUT",
				body: JSON.stringify({ content, imageId, userId, username }),
			});
			if (res.ok) {
				const { comment } = await res.json();
				dispatch(editComment(comment));
			}
		} catch (err) {
			return err.json();
		}
	};
}

export default function commentsReducer(state = [], action) {
	Object.freeze(state);
	switch (action.type) {
		case SET_COMMENTS:
			return action.comments;
		case ADD_COMMENT:
			return [...state, action.comment];
		case UNSET_COMMENTS:
			return [];
		case DELETE_COMMENT:
			return state.filter((comment) => comment.id !== +action.id);
		case EDIT_COMMENT:
			return state.map((comment) => {
				if (comment.id === action.comment.id) {
					return action.comment;
				} else {
					return comment;
				}
			});
		default:
			return state;
	}
}
