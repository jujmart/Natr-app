const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");

const { setTokenCookie } = require("../../utils/auth");
const { User } = require("../../db/models");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

const validateSignup = [
	check("email")
		.exists({ checkFalsy: true })
		.withMessage("Please provide an email address.")
		.isEmail()
		.withMessage("Please provide a valid email.")
		.isLength({ min: 3 })
		.withMessage("Please provide an email with at least 3 characaters.")
		.isLength({ max: 256 })
		.withMessage("Please provide an email with at most 256 characaters."),
	check("username")
		.exists({ checkFalsy: true })
		.withMessage("Please provide a username.")
		.isLength({ min: 4 })
		.withMessage("Please provide a username with at least 4 characters.")
		.isLength({ max: 30 })
		.withMessage("Please provide a username with at most 30 characters.")
		.custom((value) => !value.includes(" "))
		.withMessage("Please provide a one-word username (no spaces)."),
	check("username")
		.not()
		.isEmail()
		.withMessage("Please provide a username that is not an email."),
	check("password")
		.exists({ checkFalsy: true })
		.withMessage("Please provide a password.")
		.isLength({ min: 6 })
		.withMessage("Please provide a password with at least 6 characters."),
	handleValidationErrors,
];

// Sign up
router.post(
	"/",
	validateSignup,
	asyncHandler(async (req, res) => {
		const { email, password, username } = req.body;
		const user = await User.signup({ email, username, password });

		await setTokenCookie(res, user);

		return res.json({
			user,
		});
	})
);

router.get(
	"/:id",
	asyncHandler(async (req, res) => {
		const { id } = req.params;
		const user = await User.scope("postUser").findByPk(id);
		return res.json({ user });
	})
);

module.exports = router;
