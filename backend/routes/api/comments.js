const express = require("express");
const asyncHandler = require("express-async-handler");

const { Comment } = require("../../db/models");

const router = express.Router();

// GET route but I needed something that could handle bringing in a body (didnt want to change the actual route to include the photoId)
router.patch(
	"/",
	asyncHandler(async (req, res) => {
		const { imageId } = req.body;
		const comments = await Comment.findAll({
			where: { imageId },
			order: [
				["createdAt", "DESC"],
				["id", "DESC"],
			],
		});
		res.json({ comments });
	})
);

module.exports = router;
