const express = require("express");

const {
  getUser,
  createUser,
  signUser,
  getOneUser,
} = require("../controller/userController");

const router = express.Router();

router.route("/").get(getUser);
router.route("/:id").get(getOneUser);
router.route("/create").post(createUser);
router.route("/signin").post(signUser);

module.exports = router;
