const express = require("express");
const asyncHandler = require("express-async-handler");

const { Comment } = require("../../db/models");

const router = express.Router();

router.get(
	"/",
	asyncHandler(async (req, res) => {
		const { imageId } = req.body;
		const comments = await Comment.findAll({
			where: { imageId },
			order: [["createdAt", "DESC"]],
		});
		res.json({ comments });
	})
);

module.exports = router;
