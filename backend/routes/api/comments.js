const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");

const { Comment, User } = require("../../db/models");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

const validateComment = [
	check("content")
		.exists({ checkFalsy: true })
		.withMessage("Please provide some comment content."),
	check("userId")
		.exists({ checkFalsy: true })
		.withMessage("Please make sure you are signed in as a valid user."),
	check("imageId")
		.exists({ checkFalsy: true })
		.withMessage("Please make sure you are commenting on a valid image."),
	handleValidationErrors,
];

// GET route but I needed something that could handle bringing in a body (didnt want to change the actual route to include the photoId)
router.patch(
	"/",
	asyncHandler(async (req, res) => {
		const { imageId } = req.body;
		const comments = await Comment.findAll({
			where: { imageId },
			order: [
				["createdAt", "ASC"],
				["id", "ASC"],
			],
			include: User.scope("postUser"),
		});
		res.json({ comments });
	})
);

router.post(
	"/",
	validateComment,
	asyncHandler(async (req, res) => {
		const comment = req.body;
		const incompleteNewComment = await Comment.create(comment);
		const newComment = await Comment.findByPk(incompleteNewComment.id, {
			include: User.scope("postUser"),
		});
		res.json({ newComment });
	})
);

module.exports = router;
