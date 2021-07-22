import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { setClose } from "../../store/modal";
import { deletePhotoThunk } from "../../store/photos";

export default function DeleteConfirm({ photoId, setBackendDeleteErrors }) {
	const dispatch = useDispatch();
	const history = useHistory();

	async function handleDelete() {
		let res = await dispatch(deletePhotoThunk(photoId));

		dispatch(setClose());
		if (res) {
			setBackendDeleteErrors(["Image has already been deleted."]);
		} else {
			history.push("/");
		}
	}

	return (
		<div className="individual-photo-delete-confirm-container">
			<div className="individual-photo-delete-message">
				Are you sure you want to delete this image?
			</div>
			<div className="individual-photo-delete-confirm-buttons">
				<button
					className="individual-photo-confirm-delete-button"
					onClick={handleDelete}
				>
					Delete
				</button>
				<button
					className="individual-photo-cancel-button"
					onClick={() => dispatch(setClose())}
				>
					Cancel
				</button>
			</div>
		</div>
	);
}
