const express = require("express");
const router = express.Router();
const uploadCloud = require("../../middlewares/client/uploadCloud.middleware")
const controller = require("../../controller/client/home.controller")
const multer = require("multer");
const upload = multer()

router.get("/", controller.index)

router.get("/create", controller.create)

router.post(
    "/create",
    upload.single("thumbnail"),
    uploadCloud.upload,
    controller.createPost)

router.get("/edit/:id", controller.edit)

router.patch(
    "/edit/:id",
    upload.single("thumbnail"),
    uploadCloud.upload,
    controller.editPatch)

router.delete("/delete/:id", controller.delete)

module.exports = router;