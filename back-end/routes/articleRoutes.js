const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");

router.post(
  "/add",
  articleController.uploadArticleImage,
  articleController.addArticle
);
router.get("/", articleController.getArticles);
router.get("/wishlist", articleController.getWishlist); // جديد
router.delete("/:id", articleController.deleteArticle);
router.put(
  "/:id",
  articleController.uploadArticleImage,
  articleController.updateArticle
);
router.post("/:id/like", articleController.likeArticle);
router.post("/:id/save", articleController.saveArticle);

module.exports = router;
