const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

router.post("/add", commentController.addComment);
router.get("/:articleId", commentController.getComments);
router.delete("/:id", commentController.deleteComment);
router.post("/:id/undelete", commentController.undeleteComment); // جديد
router.get("/", commentController.getAllComments);
router.post("/:id/report", commentController.reportComment);
router.post("/:id/clear-report", commentController.clearReport); // جديد

module.exports = router;
