const Comment = require("../models/Comment");
const Article = require("../models/Article");

exports.addComment = async (req, res) => {
  try {
    const { articleId, userName, content } = req.body;
    if (!articleId || !userName || !content) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const comment = new Comment({ articleId, userName, content });
    await comment.save();
    await Article.findByIdAndUpdate(articleId, {
      $push: { comments: comment._id },
    });
    res.status(201).json(comment);
  } catch (error) {
    console.error("Error in addComment:", error);
    res.status(500).json({ message: error.message });
  }
};

exports.getComments = async (req, res) => {
  try {
    const { articleId } = req.params;
    const comments = await Comment.find({ articleId, isDeleted: false }).sort({
      createdAt: -1,
    });
    res.json(comments);
  } catch (error) {
    console.error("Error in getComments:", error);
    res.status(500).json({ message: error.message });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findById(id);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    comment.isDeleted = true;
    await comment.save();
    res.json({ message: "Comment soft deleted successfully" });
  } catch (error) {
    console.error("Error in deleteComment:", error);
    res.status(500).json({ message: error.message });
  }
};

exports.undeleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findById(id);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    comment.isDeleted = false;
    await comment.save();
    res.json({ message: "Comment restored successfully" });
  } catch (error) {
    console.error("Error in undeleteComment:", error);
    res.status(500).json({ message: error.message });
  }
};

exports.getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find()
      .populate("articleId", "title")
      .sort({ createdAt: -1 });
    res.json(comments);
  } catch (error) {
    console.error("Error in getAllComments:", error);
    res.status(500).json({ message: error.message });
  }
};

exports.reportComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findById(id);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    comment.reportCount += 1;
    comment.isReported = true;
    await comment.save();
    res.json({
      message: "Comment reported successfully",
      reportCount: comment.reportCount,
    });
  } catch (error) {
    console.error("Error in reportComment:", error);
    res.status(500).json({ message: error.message });
  }
};

exports.clearReport = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findById(id);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    comment.isReported = false;
    comment.reportCount = 0;
    await comment.save();
    res.json({ message: "Comment report cleared successfully" });
  } catch (error) {
    console.error("Error in clearReport:", error);
    res.status(500).json({ message: error.message });
  }
};
