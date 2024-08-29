const express = require("express");
const router = express.Router();
const multer = require("multer")
const upload = multer({ dest: "./public/img" })

const controller = require("../../controller/client/home.controller")
router.get("/", controller.index)

router.get("/create", controller.create)

router.post(
    "/create",
    upload.single("thumbnail"),
    controller.createPost)

router.get("/edit/:id", controller.edit)

router.patch(
    "/edit/:id",
    upload.single("thumbnail"),
    controller.editPatch)

router.delete("/delete/:id", controller.delete)

module.exports = router;