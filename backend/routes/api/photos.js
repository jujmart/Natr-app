const express = require("express");
const asyncHandler = require("express-async-handler");
const { Image, User } = require("../../db/models");

const router = express.Router();

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

module.exports = router;
