const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const photosRouter = require("./photos.js");
const commentsRouter = require("./comments.js");

router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/photos", photosRouter);
router.use("/comments", commentsRouter);

module.exports = router;
