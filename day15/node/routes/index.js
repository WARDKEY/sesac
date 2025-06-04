const express = require("express");
const router = express.Router();
const controller = require("../controller/mainController");

// 라우터는 전달만 하는 역할
router.route("/").get(controller.getMain);

router.route("/").post(controller.postMain);

router.route("/:id").get(controller.getId);


module.exports = router;
