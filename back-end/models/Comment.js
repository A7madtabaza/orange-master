const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  articleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Article",
    required: true,
  },
  userName: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  isReported: { type: Boolean, default: false },
  reportCount: { type: Number, default: 0 },
  isDeleted: { type: Boolean, default: false }, // جديد
});

module.exports = mongoose.model("Comment", commentSchema);
