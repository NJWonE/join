"ues strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.get("/join", ctrl.output.join);

router.post("/", ctrl.process.login);
router.post("/register", ctrl.process.register);

module.exports = router;