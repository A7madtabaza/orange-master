// const mongoose = require("mongoose");

// const articleSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   content: { type: String, required: true },
//   image: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now },
// });

// const mongoose = require("mongoose");

// const articleSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   content: { type: String, required: true },
//   image: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now },
//   likes: { type: Number, default: 0 },
//   savedBy: [{ type: String }], // معرفات المستخدمين الذين أضافوا المقالة إلى Wishlist
// });

// module.exports = mongoose.model("Article", articleSchema);



const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
  likedBy: [{ type: String }], // معرفات المستخدمين الذين أعجبوا بالمقالة
  savedBy: [{ type: String }], // معرفات المستخدمين الذين أضافوا المقالة إلى Wishlist
});

module.exports = mongoose.model("Article", articleSchema);