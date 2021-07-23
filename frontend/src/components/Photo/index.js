import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { Modal } from "../../context/Modal";
import {
	addCommentThunk,
	deleteCommentThunk,
	editCommentThunk,
	setCommentsThunk,
	unsetComments,
} from "../../store/comments";
import { setPhotoUserThunk } from "../../store/individualPhoto";
import { setClose, setShowDeleteConfirm } from "../../store/modal";
import { setPhotosThunk } from "../../store/photos";
import DeleteConfirm from "./DeleteConfirm";

import "./Photo.css";

export default function Photo() {
	const photos = useSelector((state) => state.photos);
	const comments = useSelector((state) => state.comments);
	const { user } = useSelector((state) => state.individualPhoto);
	const sessionUser = useSelector((state) => state.session.user);
	const deleteConfirm = useSelector((state) => state.modal.delete);
	const dispatch = useDispatch();
	const { photoId } = useParams();
	const [currentPhoto, setCurrentPhoto] = useState({});
	const [newComment, setNewComment] = useState("");
	const [editId, setEditId] = useState(0);
	const [editedComment, setEditedComment] = useState("");
	const [backendImageDeleteErrors, setBackendImageDeleteErrors] = useState(
		[]
	);
	// const [backendCommentDeleteErrors, setBackendCommentDeleteErrors] =
	// 	useState([]);
	const [backendCommentErrors, setBackendCommentErrors] = useState([]);
	const [backendCommentEditErrors, setBackendCommentEditErrors] = useState(
		[]
	);
	const history = useHistory();

	window.onbeforeunload = function (e) {
		dispatch(unsetComments());
	};

	async function handleAddComment() {
		const res = await dispatch(
			addCommentThunk({
				userId: sessionUser.id,
				imageId: currentPhoto.id,
				content: newComment,
			})
		);
		if (res) {
			setBackendCommentErrors(res.errors);
		} else {
			setNewComment("");
		}
	}

	async function handleDeleteComment(commentId) {
		const res = await dispatch(deleteCommentThunk(commentId));
		if (res) {
			console.log(res.errors);
			// 	setBackendCommentDeleteErrors(res.errors);
		}
	}

	async function handleEditComment(commentId) {
		const res = await dispatch(
			editCommentThunk({ id: commentId, content: editedComment })
		);
		if (res) {
			setBackendCommentEditErrors(res.errors);
		} else {
			setEditId(0);
		}
	}

	useEffect(() => {
		dispatch(setPhotosThunk());
	}, [dispatch]);

	useEffect(() => {
		let photo = photos.find((photo) => +photoId === photo.id);
		setCurrentPhoto(photo);
	}, [dispatch, photos, photoId]);

	useEffect(() => {
		if (currentPhoto?.userId) {
			dispatch(setPhotoUserThunk(currentPhoto.userId));
		}
	}, [dispatch, currentPhoto]);

	useEffect(() => {
		if (currentPhoto?.id) {
			dispatch(setCommentsThunk(currentPhoto.id));
		}
	}, [dispatch, currentPhoto]);

	return (
		<div className="individual-photo-container">
			<div className="individual-photo-img-container">
				<img
					src={currentPhoto?.imageUrl}
					alt={currentPhoto?.title}
					className="individual-photo-img"
				/>
			</div>
			{sessionUser &&
			(sessionUser.username === "Demo-lition" ||
				sessionUser.username === user?.username) ? (
				<div className="individual-photo-delete-and-edit-container">
					<div className="individual-photo-delete-and-edit-buttons-container">
						<button
							className="individual-photo-edit-button"
							onClick={() => history.push(`/edit/${photoId}`)}
						>
							Edit Image
						</button>
						<button
							className="individual-photo-delete-button"
							onClick={() => dispatch(setShowDeleteConfirm())}
						>
							Delete Image
						</button>
						{deleteConfirm ? (
							<Modal onClose={() => dispatch(setClose())}>
								<DeleteConfirm
									photoId={photoId}
									setBackendDeleteErrors={
										setBackendImageDeleteErrors
									}
								/>
							</Modal>
						) : null}
					</div>
					{backendImageDeleteErrors.length ? (
						<div>
							<ul className="individual-photo-delete-errors">
								{backendImageDeleteErrors.map((error) => (
									<li key={error}>{error}</li>
								))}
							</ul>
						</div>
					) : null}
				</div>
			) : null}
			<div className="individual-photo-user">
				<div className="individual-photo-user-photo-container">
					<img
						src={user?.profilePhotoUrl}
						alt="Profile Pic"
						className="individual-photo-user-photo"
					/>
				</div>
				<div className="individual-photo-user-username">
					{user?.username}
				</div>
			</div>
			<div className="individual-photo-title">{currentPhoto?.title}</div>
			<div className="individual-photo-content">
				{currentPhoto?.content}
			</div>
			<div className="individual-photo-comments-container">
				<div>
					{comments.map((comment) => (
						<div
							key={comment.id}
							className="individual-photo-individual-comment-container"
						>
							<img
								src={comment.User?.profilePhotoUrl}
								alt="Profile Pic"
								className={`individual-photo-individual-comment-user-photo ${
									+editId === comment.id
										? "profile-photo-top-position"
										: null
								}`}
							/>
							<div>
								<div className="individual-photo-individual-comment-username-and-updated-date">
									<div className="individual-photo-individual-comment-username">
										{comment.User?.username}
									</div>
									<div className="individual-photo-individual-comment-updated-date">
										{comment.updatedAt}
									</div>
								</div>
								{+editId !== comment.id ? (
									<div className="individual-photo-individual-comment-content-and-edit-and-delete-buttons">
										<div className="individual-photo-individual-comment-content">
											{comment.content}
										</div>
										{comment.userId === sessionUser?.id ||
										sessionUser?.username ===
											"Demo-lition" ? (
											<div className="individual-photo-individual-comment-edit-and-delete-buttons">
												<button
													className="individual-photo-individual-comment-edit-button"
													onClick={(e) => {
														setEditId(
															e.target.value
														);
														setEditedComment(
															comment.content
														);
													}}
													value={comment.id}
												>
													Edit
												</button>
												<button
													className="individual-photo-individual-comment-delete-button"
													onClick={(e) =>
														handleDeleteComment(
															e.target.value
														)
													}
													value={comment.id}
												>
													Delete
												</button>
											</div>
										) : null}
									</div>
								) : (
									<div className="individual-photo-individual-comment-edit-comment-container">
										<textarea
											className="individual-photo-individual-comment-edit-comment-content"
											value={editedComment}
											onChange={(e) =>
												setEditedComment(e.target.value)
											}
										/>
										<button
											onClick={() =>
												handleEditComment(comment.id)
											}
											className="individual-photo-individual-comment-edit-comment-button"
										>
											Done
										</button>
									</div>
								)}
							</div>
						</div>
					))}
				</div>
				{sessionUser ? (
					<div className="individual-photo-individual-comment-add-comment-container">
						{backendCommentErrors.length ? (
							<div>
								<ul className="individual-photo-comment-errors">
									{backendCommentErrors.map((error) => (
										<li key={error}>{error}</li>
									))}
								</ul>
							</div>
						) : null}
						<textarea
							value={newComment}
							onChange={(e) => setNewComment(e.target.value)}
							className="individual-photo-individual-comment-add-comment"
							placeholder="Add a comment"
						/>
						{newComment ? (
							<button
								className="individual-photo-individual-comment-add-comment-button"
								onClick={handleAddComment}
							>
								Comment
							</button>
						) : null}
					</div>
				) : null}
			</div>
		</div>
	);
}
