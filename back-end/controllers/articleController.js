// const Article = require("../models/Article");
// const multer = require("multer");
// const path = require("path");
// const fs = require("fs");

// const uploadDir = path.join(__dirname, "../uploads");
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir);
// }

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });
// const upload = multer({ storage });

// exports.uploadArticleImage = upload.single("image");

// exports.addArticle = async (req, res) => {
//   try {
//     const { title, content } = req.body;
//     if (!title || !content || !req.file) {
//       return res.status(400).json({ message: "All fields are required" });
//     }
//     const image = `/uploads/${req.file.filename}`;
//     const article = new Article({ title, content, image });
//     await article.save();
//     res.status(201).json(article);
//   } catch (error) {
//     console.error("Error in addArticle:", error);
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.getArticles = async (req, res) => {
//   try {
//     const articles = await Article.find();
//     res.json(articles);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// const Article = require("../models/Article");
// const multer = require("multer");
// const path = require("path");
// const fs = require("fs");

// const uploadDir = path.join(__dirname, "../Uploads");
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir);
// }

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "Uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });
// const upload = multer({ storage });

// exports.uploadArticleImage = upload.single("image");

// exports.addArticle = async (req, res) => {
//   try {
//     const { title, content } = req.body;
//     if (!title || !content || !req.file) {
//       return res.status(400).json({ message: "All fields are required" });
//     }
//     const image = `/Uploads/${req.file.filename}`;
//     const article = new Article({ title, content, image });
//     await article.save();
//     res.status(201).json(article);
//   } catch (error) {
//     console.error("Error in addArticle:", error);
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.getArticles = async (req, res) => {
//   try {
//     const articles = await Article.find();
//     res.json(articles);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.deleteArticle = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const article = await Article.findById(id);
//     if (!article) {
//       return res.status(404).json({ message: "Article not found" });
//     }
//     const imagePath = path.join(__dirname, "../", article.image);
//     if (fs.existsSync(imagePath)) {
//       fs.unlinkSync(imagePath);
//     }
//     await Article.findByIdAndDelete(id);
//     res.json({ message: "Article deleted successfully" });
//   } catch (error) {
//     console.error("Error in deleteArticle:", error);
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.updateArticle = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { title, content } = req.body;
//     const article = await Article.findById(id);
//     if (!article) {
//       return res.status(404).json({ message: "Article not found" });
//     }
//     article.title = title || article.title;
//     article.content = content || article.content;
//     if (req.file) {
//       const oldImagePath = path.join(__dirname, "../", article.image);
//       if (fs.existsSync(oldImagePath)) {
//         fs.unlinkSync(oldImagePath);
//       }
//       article.image = `/Uploads/${req.file.filename}`;
//     }
//     await article.save();
//     res.json(article);
//   } catch (error) {
//     console.error("Error in updateArticle:", error);
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.likeArticle = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const article = await Article.findById(id);
//     if (!article) {
//       return res.status(404).json({ message: "Article not found" });
//     }
//     article.likes += 1;
//     await article.save();
//     res.json({ likes: article.likes });
//   } catch (error) {
//     console.error("Error in likeArticle:", error);
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.saveArticle = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { userId } = req.body; // افترض أنك تمررين userId (يمكن استبداله بمعرف آخر)
//     const article = await Article.findById(id);
//     if (!article) {
//       return res.status(404).json({ message: "Article not found" });
//     }
//     if (!article.savedBy.includes(userId)) {
//       article.savedBy.push(userId);
//       await article.save();
//     }
//     res.json({ savedBy: article.savedBy });
//   } catch (error) {
//     console.error("Error in saveArticle:", error);
//     res.status(500).json({ message: error.message });
//   }
// };




// const Article = require("../models/Article");
// const multer = require("multer");
// const path = require("path");
// const fs = require("fs");

// const uploadDir = path.join(__dirname, "../Uploads");
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir);
// }

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "Uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });
// const upload = multer({ storage });

// exports.uploadArticleImage = upload.single("image");

// exports.addArticle = async (req, res) => {
//   try {
//     const { title, content } = req.body;
//     if (!title || !content || !req.file) {
//       return res.status(400).json({ message: "All fields are required" });
//     }
//     const image = `/Uploads/${req.file.filename}`;
//     const article = new Article({ title, content, image });
//     await article.save();
//     res.status(201).json(article);
//   } catch (error) {
//     console.error("Error in addArticle:", error);
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.getArticles = async (req, res) => {
//   try {
//     const articles = await Article.find();
//     res.json(articles);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.getWishlist = async (req, res) => {
//   try {
//     const { userId } = req.query;
//     if (!userId) {
//       return res.status(400).json({ message: "userId is required" });
//     }
//     const articles = await Article.find({ savedBy: userId });
//     res.json(articles);
//   } catch (error) {
//     console.error("Error in getWishlist:", error);
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.deleteArticle = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const article = await Article.findById(id);
//     if (!article) {
//       return res.status(404).json({ message: "Article not found" });
//     }
//     const imagePath = path.join(__dirname, "../", article.image);
//     if (fs.existsSync(imagePath)) {
//       fs.unlinkSync(imagePath);
//     }
//     await Article.findByIdAndDelete(id);
//     res.json({ message: "Article deleted successfully" });
//   } catch (error) {
//     console.error("Error in deleteArticle:", error);
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.updateArticle = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { title, content } = req.body;
//     const article = await Article.findById(id);
//     if (!article) {
//       return res.status(404).json({ message: "Article not found" });
//     }
//     article.title = title || article.title;
//     article.content = content || article.content;
//     if (req.file) {
//       const oldImagePath = path.join(__dirname, "../", article.image);
//       if (fs.existsSync(oldImagePath)) {
//         fs.unlinkSync(oldImagePath);
//       }
//       article.image = `/Uploads/${req.file.filename}`;
//     }
//     await article.save();
//     res.json(article);
//   } catch (error) {
//     console.error("Error in updateArticle:", error);
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.likeArticle = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const article = await Article.findById(id);
//     if (!article) {
//       return res.status(404).json({ message: "Article not found" });
//     }
//     article.likes += 1;
//     await article.save();
//     res.json({ likes: article.likes });
//   } catch (error) {
//     console.error("Error in likeArticle:", error);
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.saveArticle = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { userId } = req.body;
//     if (!userId) {
//       return res.status(400).json({ message: "userId is required" });
//     }
//     const article = await Article.findById(id);
//     if (!article) {
//       return res.status(404).json({ message: "Article not found" });
//     }
//     const index = article.savedBy.indexOf(userId);
//     if (index === -1) {
//       article.savedBy.push(userId);
//     } else {
//       article.savedBy.splice(index, 1);
//     }
//     await article.save();
//     res.json({ savedBy: article.savedBy });
//   } catch (error) {
//     console.error("Error in saveArticle:", error);
//     res.status(500).json({ message: error.message });
//   }
// };


const Article = require("../models/Article");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const uploadDir = path.join(__dirname, "../Uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

exports.uploadArticleImage = upload.single("image");

exports.addArticle = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content || !req.file) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const image = `/Uploads/${req.file.filename}`;
    const article = new Article({ title, content, image });
    await article.save();
    res.status(201).json(article);
  } catch (error) {
    console.error("Error in addArticle:", error);
    res.status(500).json({ message: error.message });
  }
};

exports.getArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getWishlist = async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) {
      return res.status(400).json({ message: "userId is required" });
    }
    const articles = await Article.find({ savedBy: userId });
    res.json(articles);
  } catch (error) {
    console.error("Error in getWishlist:", error);
    res.status(500).json({ message: error.message });
  }
};

exports.deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Article.findById(id);
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }
    const imagePath = path.join(__dirname, "../", article.image);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }
    await Article.findByIdAndDelete(id);
    res.json({ message: "Article deleted successfully" });
  } catch (error) {
    console.error("Error in deleteArticle:", error);
    res.status(500).json({ message: error.message });
  }
};

exports.updateArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const article = await Article.findById(id);
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }
    article.title = title || article.title;
    article.content = content || article.content;
    if (req.file) {
      const oldImagePath = path.join(__dirname, "../", article.image);
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }
      article.image = `/Uploads/${req.file.filename}`;
    }
    await article.save();
    res.json(article);
  } catch (error) {
    console.error("Error in updateArticle:", error);
    res.status(500).json({ message: error.message });
  }
};

exports.likeArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "userId is required" });
    }

    const article = await Article.findById(id);
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    const hasLiked = article.likedBy.includes(userId);

    if (hasLiked) {
      // Unlike: Remove userId from likedBy and decrement likes
      article.likedBy = article.likedBy.filter((id) => id !== userId);
      article.likes -= 1;
      await article.save();
      res.json({ liked: false, likes: article.likes });
    } else {
      // Like: Add userId to likedBy and increment likes
      article.likedBy.push(userId);
      article.likes += 1;
      await article.save();
      res.json({ liked: true, likes: article.likes });
    }
  } catch (error) {
    console.error("Error in likeArticle:", error);
    res.status(500).json({ message: error.message });
  }
};

exports.saveArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    if (!userId) {
      return res.status(400).json({ message: "userId is required" });
    }
    const article = await Article.findById(id);
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }
    const index = article.savedBy.indexOf(userId);
    if (index === -1) {
      article.savedBy.push(userId);
    } else {
      article.savedBy.splice(index, 1);
    }
    await article.save();
    res.json({ savedBy: article.savedBy });
  } catch (error) {
    console.error("Error in saveArticle:", error);
    res.status(500).json({ message: error.message });
  }
};