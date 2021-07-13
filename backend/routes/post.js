const express = require("express");
const router = express.Router();
const {createPost, getPost,showPost, editPost, deletePost, createImage} = require("../handlers/posts");
const { upload} = require('../uploadcontroller')



router.get("/urunler", getPost );
router.get("/urunler/:id", showPost);
router.post("/admin/urunler875548674", upload.single('image'), createPost);
router.put("/admin/urunler875548674/:id", editPost);
router.delete("/admin/urunler875548674/:id", deletePost);
//router.post("/fileupload", createImage);

module.exports = router;