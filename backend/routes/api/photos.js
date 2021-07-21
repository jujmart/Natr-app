const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");

const { Image, User } = require("../../db/models");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

const validateImage = [
	check("imageUrl")
		.exists({ checkFalsy: true })
		.withMessage("Please provide an image url."),
	check("userId")
		.exists({ checkFalsy: true })
		.withMessage("Please make sure you are signed in as a valid user."),
	handleValidationErrors,
];

router.get(
	"/",
	asyncHandler(async (req, res) => {
		const photos = await Image.findAll({ order: [["createdAt", "DESC"]] });
		return res.json({ photos });
	})
);

router.get(
	"/:userId",
	asyncHandler(async (req, res) => {
		const { userId } = req.params;
		const user = await User.scope("postUser").findByPk(userId);
		return res.json({ user });
	})
);

router.post(
	"/",
	validateImage,
	asyncHandler(async (req, res) => {
		const { imageUrl, title, content, userId } = req.body;
		const photo = await Image.create({
			imageUrl,
			title,
			content,
			userId,
		});
		res.json({ photo });
	})
);

module.exports = router;
