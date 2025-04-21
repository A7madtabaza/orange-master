// const Medicine = require("../models/Medicine");
// const multer = require("multer");
// const path = require("path");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });
// const upload = multer({ storage });

// exports.uploadMedicineImage = upload.single("image");

// exports.addMedicine = async (req, res) => {
//   try {
//     const { name, description, price } = req.body;
//     const image = req.file ? `/uploads/${req.file.filename}` : "";
//     const medicine = new Medicine({ name, description, price, image });
//     await medicine.save();
//     res.status(201).json(medicine);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.getMedicines = async (req, res) => {
//   try {
//     const medicines = await Medicine.find();
//     res.json(medicines);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
// const Medicine = require("../models/Medicine");
// const multer = require("multer");
// const path = require("path");

// // إعداد تخزين الصور
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({
//   storage,
//   fileFilter: (req, file, cb) => {
//     // التحقق من نوع الملف
//     const fileTypes = /jpeg|jpg|png|gif/;
//     const extname = fileTypes.test(
//       path.extname(file.originalname).toLowerCase()
//     );
//     const mimetype = fileTypes.test(file.mimetype);

//     if (extname && mimetype) {
//       return cb(null, true);
//     } else {
//       cb(new Error("Only image files are allowed!"));
//     }
//   },
// });

// exports.uploadMedicineImage = upload.single("image");

// exports.addMedicine = async (req, res) => {
//   try {
//     const { name, description, price, category, discount, dosage, inStock } =
//       req.body;
//     const image = req.file ? `/uploads/${req.file.filename}` : "";

//     // تحويل السعر إلى رقم
//     const numericPrice = parseFloat(price);

//     // تحويل الخصم إلى رقم (إذا تم توفيره)
//     const numericDiscount = discount ? parseFloat(discount) : 0;

//     // التحقق من البيانات
//     if (isNaN(numericPrice) || numericPrice <= 0) {
//       return res
//         .status(400)
//         .json({ message: "السعر يجب أن يكون رقماً موجباً" });
//     }

//     if (numericDiscount < 0 || numericDiscount > 1) {
//       return res.status(400).json({ message: "الخصم يجب أن يكون بين 0 و 1" });
//     }

//     const medicine = new Medicine({
//       name,
//       description,
//       price: numericPrice,
//       image,
//       category: category || "General",
//       discount: numericDiscount,
//       dosage,
//       inStock: inStock === undefined ? true : inStock,
//     });

//     await medicine.save();
//     res.status(201).json(medicine);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.getMedicines = async (req, res) => {
//   try {
//     let query = {};
//     const { search, category, minPrice, maxPrice, inStock } = req.query;

//     // تطبيق المرشحات إذا تم توفيرها
//     if (search) {
//       query.name = { $regex: search, $options: "i" };
//     }

//     if (category) {
//       query.category = category;
//     }

//     if (minPrice !== undefined || maxPrice !== undefined) {
//       query.price = {};
//       if (minPrice !== undefined) {
//         query.price.$gte = parseFloat(minPrice);
//       }
//       if (maxPrice !== undefined) {
//         query.price.$lte = parseFloat(maxPrice);
//       }
//     }

//     if (inStock !== undefined) {
//       query.inStock = inStock === "true";
//     }

//     const medicines = await Medicine.find(query);
//     res.json(medicines);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.getMedicinesByCategory = async (req, res) => {
//   try {
//     const { category } = req.params;
//     const medicines = await Medicine.find({ category });
//     res.json(medicines);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.getDiscountedMedicines = async (req, res) => {
//   try {
//     const medicines = await Medicine.find({ discount: { $gt: 0 } });
//     res.json(medicines);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.getMedicineById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const medicine = await Medicine.findById(id);

//     if (!medicine) {
//       return res.status(404).json({ message: "الدواء غير موجود" });
//     }

//     res.json(medicine);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.updateMedicine = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, description, price, category, discount, dosage, inStock } =
//       req.body;

//     const updateData = {
//       ...(name && { name }),
//       ...(description && { description }),
//       ...(price && { price: parseFloat(price) }),
//       ...(category && { category }),
//       ...(discount !== undefined && { discount: parseFloat(discount) }),
//       ...(dosage && { dosage }),
//       ...(inStock !== undefined && { inStock }),
//     };

//     if (req.file) {
//       updateData.image = `/uploads/${req.file.filename}`;
//     }

//     const medicine = await Medicine.findByIdAndUpdate(id, updateData, {
//       new: true,
//     });

//     if (!medicine) {
//       return res.status(404).json({ message: "الدواء غير موجود" });
//     }

//     res.json(medicine);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.deleteMedicine = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const medicine = await Medicine.findByIdAndDelete(id);

//     if (!medicine) {
//       return res.status(404).json({ message: "الدواء غير موجود" });
//     }

//     res.json({ message: "تم حذف الدواء بنجاح" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };




// controllers/medicineController.js
// const Medicine = require("../models/Medicine");
// const multer = require("multer");
// const path = require("path");

// // إعداد تخزين الصور
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({
//   storage,
//   fileFilter: (req, file, cb) => {
//     const fileTypes = /jpeg|jpg|png|gif/;
//     const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
//     const mimetype = fileTypes.test(file.mimetype);

//     if (extname && mimetype) {
//       return cb(null, true);
//     } else {
//       cb(new Error("Only image files are allowed!"));
//     }
//   },
// });

// exports.uploadMedicineImage = upload.single("image");

// exports.addMedicine = async (req, res) => {
//   try {
//     const { name, description, price, category, discount, dosage, inStock } = req.body;
//     const image = req.file ? `/uploads/${req.file.filename}` : "";

//     // تسجيل البيانات المستلمة للتحقق
//     console.log("Received data:", { name, description, price, category, discount, dosage, inStock });

//     // تحويل السعر إلى رقم
//     const numericPrice = parseFloat(price);
//     if (isNaN(numericPrice) || numericPrice <= 0) {
//       return res.status(400).json({ message: "السعر يجب أن يكون رقماً موجباً" });
//     }

//     // تحويل الخصم إلى رقم
//     const numericDiscount = discount ? parseFloat(discount) : 0;
//     if (numericDiscount < 0 || numericDiscount > 1) {
//       return res.status(400).json({ message: "الخصم يجب أن يكون بين 0 و 1" });
//     }

//     // تحويل inStock إلى Boolean
//     const isInStock = inStock === "true" || inStock === true;

//     const medicine = new Medicine({
//       name,
//       description,
//       price: numericPrice,
//       image,
//       category: category || "General",
//       discount: numericDiscount,
//       dosage,
//       inStock: isInStock,
//     });

//     await medicine.save();
//     res.status(201).json({ message: "تم إضافة الدواء بنجاح", medicine });
//   } catch (error) {
//     console.error("Error adding medicine:", error);
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.getMedicines = async (req, res) => {
//   try {
//     let query = {};
//     const { search, category, minPrice, maxPrice, inStock } = req.query;

//     if (search) {
//       query.name = { $regex: search, $options: "i" };
//     }

//     if (category) {
//       query.category = category;
//     }

//     if (minPrice !== undefined || maxPrice !== undefined) {
//       query.price = {};
//       if (minPrice !== undefined) {
//         query.price.$gte = parseFloat(minPrice);
//       }
//       if (maxPrice !== undefined) {
//         query.price.$lte = parseFloat(maxPrice);
//       }
//     }

//     if (inStock !== undefined) {
//       query.inStock = inStock === "true";
//     }

//     const medicines = await Medicine.find(query);
//     res.json(medicines);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.getMedicinesByCategory = async (req, res) => {
//   try {
//     const { category } = req.params;
//     const medicines = await Medicine.find({ category });
//     res.json(medicines);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.getDiscountedMedicines = async (req, res) => {
//   try {
//     const medicines = await Medicine.find({ discount: { $gt: 0 } });
//     res.json(medicines);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.getMedicineById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const medicine = await Medicine.findById(id);

//     if (!medicine) {
//       return res.status(404).json({ message: "الدواء غير موجود" });
//     }

//     res.json(medicine);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.updateMedicine = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, description, price, category, discount, dosage, inStock } = req.body;

//     const updateData = {
//       ...(name && { name }),
//       ...(description && { description }),
//       ...(price && { price: parseFloat(price) }),
//       ...(category && { category }),
//       ...(discount !== undefined && { discount: parseFloat(discount) }),
//       ...(dosage && { dosage }),
//       ...(inStock !== undefined && { inStock: inStock === "true" || inStock === true }),
//     };

//     if (req.file) {
//       updateData.image = `/uploads/${req.file.filename}`;
//     }

//     const medicine = await Medicine.findByIdAndUpdate(id, updateData, {
//       new: true,
//     });

//     if (!medicine) {
//       return res.status(404).json({ message: "الدواء غير موجود" });
//     }

//     res.json(medicine);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.deleteMedicine = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const medicine = await Medicine.findByIdAndDelete(id);

//     if (!medicine) {
//       return res.status(404).json({ message: "الدواء غير موجود" });
//     }

//     res.json({ message: "تم حذف الدواء بنجاح" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };





// const Medicine = require("../models/Medicine");
// const multer = require("multer");
// const path = require("path");

// // إعداد تخزين الصور
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({
//   storage,
//   fileFilter: (req, file, cb) => {
//     const fileTypes = /jpeg|jpg|png|gif/;
//     const extname = fileTypes.test(
//       path.extname(file.originalname).toLowerCase()
//     );
//     const mimetype = fileTypes.test(file.mimetype);

//     if (extname && mimetype) {
//       return cb(null, true);
//     } else {
//       cb(new Error("Only image files are allowed!"));
//     }
//   },
// });

// exports.uploadMedicineImage = upload.single("image");

// exports.addMedicine = async (req, res) => {
//   try {
//     const {
//       name,
//       description,
//       price,
//       category,
//       discount,
//       dosage,
//       inStock,
//       type,
//     } = req.body;
//     const image = req.file ? `/uploads/${req.file.filename}` : "";

//     // تسجيل البيانات المستلمة للتحقق
//     console.log("Received data:", {
//       name,
//       description,
//       price,
//       category,
//       discount,
//       dosage,
//       inStock,
//       type,
//     });

//     // تحويل السعر إلى رقم
//     const numericPrice = parseFloat(price);
//     if (isNaN(numericPrice) || numericPrice <= 0) {
//       return res
//         .status(400)
//         .json({ message: "السعر يجب أن يكون رقماً موجباً" });
//     }

//     // تحويل الخصم إلى رقم
//     const numericDiscount = discount ? parseFloat(discount) : 0;
//     if (numericDiscount < 0 || numericDiscount > 1) {
//       return res.status(400).json({ message: "الخصم يجب أن يكون بين 0 و 1" });
//     }

//     // تحويل inStock إلى Boolean
//     const isInStock = inStock === "true" || inStock === true;

//     // التحقق من نوع العنصر
//     if (!["Medicine", "Medical Equipment"].includes(type)) {
//       return res
//         .status(400)
//         .json({
//           message: "النوع يجب أن يكون 'Medicine' أو 'Medical Equipment'",
//         });
//     }

//     const medicine = new Medicine({
//       name,
//       description,
//       price: numericPrice,
//       image,
//       category: category || "General",
//       discount: numericDiscount,
//       dosage: type === "Medicine" ? dosage : undefined, // لا يتم حفظ الجرعة للمعدات
//       inStock: isInStock,
//       type,
//     });

//     await medicine.save();
//     res.status(201).json({ message: "تم إضافة العنصر بنجاح", medicine });
//   } catch (error) {
//     console.error("Error adding item:", error);
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.getMedicines = async (req, res) => {
//   try {
//     let query = {};
//     const { search, category, minPrice, maxPrice, inStock, type } = req.query;

//     if (search) {
//       query.name = { $regex: search, $options: "i" };
//     }

//     if (category) {
//       query.category = category;
//     }

//     if (minPrice !== undefined || maxPrice !== undefined) {
//       query.price = {};
//       if (minPrice !== undefined) {
//         query.price.$gte = parseFloat(minPrice);
//       }
//       if (maxPrice !== undefined) {
//         query.price.$lte = parseFloat(maxPrice);
//       }
//     }

//     if (inStock !== undefined) {
//       query.inStock = inStock === "true";
//     }

//     if (type) {
//       query.type = type;
//     }

//     const medicines = await Medicine.find(query);
//     res.json(medicines);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.getMedicinesByCategory = async (req, res) => {
//   try {
//     const { category } = req.params;
//     const medicines = await Medicine.find({ category });
//     res.json(medicines);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.getDiscountedMedicines = async (req, res) => {
//   try {
//     const medicines = await Medicine.find({ discount: { $gt: 0 } });
//     res.json(medicines);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.getMedicineById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const medicine = await Medicine.findById(id);

//     if (!medicine) {
//       return res.status(404).json({ message: "العنصر غير موجود" });
//     }

//     res.json(medicine);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.updateMedicine = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const {
//       name,
//       description,
//       price,
//       category,
//       discount,
//       dosage,
//       inStock,
//       type,
//     } = req.body;

//     const updateData = {
//       ...(name && { name }),
//       ...(description && { description }),
//       ...(price && { price: parseFloat(price) }),
//       ...(category && { category }),
//       ...(discount !== undefined && { discount: parseFloat(discount) }),
//       ...(dosage && { dosage: type === "Medicine" ? dosage : undefined }),
//       ...(inStock !== undefined && {
//         inStock: inStock === "true" || inStock === true,
//       }),
//       ...(type && { type }),
//     };

//     if (req.file) {
//       updateData.image = `/uploads/${req.file.filename}`;
//     }

//     const medicine = await Medicine.findByIdAndUpdate(id, updateData, {
//       new: true,
//     });

//     if (!medicine) {
//       return res.status(404).json({ message: "العنصر غير موجود" });
//     }

//     res.json(medicine);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.deleteMedicine = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const medicine = await Medicine.findByIdAndDelete(id);

//     if (!medicine) {
//       return res.status(404).json({ message: "العنصر غير موجود" });
//     }

//     res.json({ message: "تم حذف العنصر بنجاح" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


const Medicine = require("../models/Medicine");
const multer = require("multer");
const path = require("path");

// إعداد تخزين الصور
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const extname = fileTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = fileTypes.test(file.mimetype);

    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb(new Error("Only image files are allowed!"));
    }
  },
});

exports.uploadMedicineImage = upload.single("image");

exports.addMedicine = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      discount,
      dosage,
      inStock,
      type,
    } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : "";

    console.log("Received data:", {
      name,
      description,
      price,
      category,
      discount,
      dosage,
      inStock,
      type,
    });

    const numericPrice = parseFloat(price);
    if (isNaN(numericPrice) || numericPrice <= 0) {
      return res
        .status(400)
        .json({ message: "Price must be a positive number" });
    }

    const numericDiscount = discount ? parseFloat(discount) : 0;
    if (numericDiscount < 0 || numericDiscount > 1) {
      return res
        .status(400)
        .json({ message: "Discount must be between 0 and 1" });
    }

    const isInStock = inStock === "true" || inStock === true;

    if (!["Medicine", "Medical Equipment"].includes(type)) {
      return res
        .status(400)
        .json({ message: "Type must be 'Medicine' or 'Medical Equipment'" });
    }

    const medicine = new Medicine({
      name,
      description,
      price: numericPrice,
      image,
      category: category || "General",
      discount: numericDiscount,
      dosage: type === "Medicine" ? dosage : undefined,
      inStock: isInStock,
      type,
    });

    await medicine.save();
    res.status(201).json({ message: "Item added successfully", medicine });
  } catch (error) {
    console.error("Error adding item:", error);
    res.status(500).json({ message: error.message });
  }
};

exports.getMedicines = async (req, res) => {
  try {
    let query = {};
    const { search, category, minPrice, maxPrice, inStock, type } = req.query;

    if (search) {
      query.name = { $regex: search, $options: "i" };
    }

    if (category) {
      query.category = category;
    }

    if (minPrice !== undefined || maxPrice !== undefined) {
      query.price = {};
      if (minPrice !== undefined) {
        query.price.$gte = parseFloat(minPrice);
      }
      if (maxPrice !== undefined) {
        query.price.$lte = parseFloat(maxPrice);
      }
    }

    if (inStock !== undefined) {
      query.inStock = inStock === "true";
    }

    if (type) {
      query.type = type;
    }

    const medicines = await Medicine.find(query);
    res.json(medicines);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMedicinesByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const medicines = await Medicine.find({ category });
    res.json(medicines);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getDiscountedMedicines = async (req, res) => {
  try {
    const medicines = await Medicine.find({ discount: { $gt: 0 } });
    res.json(medicines);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMedicineById = async (req, res) => {
  try {
    const { id } = req.params;
    const medicine = await Medicine.findById(id);

    if (!medicine) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.json(medicine);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateMedicine = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      description,
      price,
      category,
      discount,
      dosage,
      inStock,
      type,
    } = req.body;

    const updateData = {
      ...(name && { name }),
      ...(description && { description }),
      ...(price && { price: parseFloat(price) }),
      ...(category && { category }),
      ...(discount !== undefined && { discount: parseFloat(discount) }),
      ...(dosage && { dosage: type === "Medicine" ? dosage : undefined }),
      ...(inStock !== undefined && {
        inStock: inStock === "true" || inStock === true,
      }),
      ...(type && { type }),
    };

    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
    }

    const medicine = await Medicine.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!medicine) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.json(medicine);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteMedicine = async (req, res) => {
  try {
    const { id } = req.params;
    const medicine = await Medicine.findByIdAndDelete(id);

    if (!medicine) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};