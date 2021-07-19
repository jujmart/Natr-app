const express = require("express");
const asyncHandler = require("express-async-handler");
const { Image } = require("../../db/models");

const router = express.Router();

router.get(
	"/",
	asyncHandler(async (req, res) => {
		console.log(Image);
		const photos = await Image.findAll({ order: [["createdAt", "DESC"]] });
		return res.json({ photos });
	})
);

module.exports = router;
