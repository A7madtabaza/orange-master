// const mongoose = require("mongoose");

// const medicineSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
//   image: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("Medicine", medicineSchema);
// const mongoose = require("mongoose");

// const medicineSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
//   image: { type: String, required: true },
//   category: { type: String, default: "General" },
//   discount: { type: Number, default: 0 }, // قيمة بين 0 و 1 (0-100%)
//   dosage: { type: String }, // جرعة الدواء (اختياري)
//   inStock: { type: Boolean, default: true },
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("Medicine", medicineSchema);


// models/Medicine.js
// const mongoose = require("mongoose");

// const medicineSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
//   image: { type: String, required: true },
//   category: { type: String, default: "General" },
//   discount: { type: Number, default: 0 }, // قيمة بين 0 و 1 (0-100%)
//   dosage: { type: String }, // جرعة الدواء (اختياري)
//   inStock: { type: Boolean, default: true },
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("Medicine", medicineSchema);



const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, default: "General" },
  discount: { type: Number, default: 0 }, // قيمة بين 0 و 1 (0-100%)
  dosage: { type: String }, // جرعة الدواء (اختياري للأدوية، غير مطلوب للمعدات)
  inStock: { type: Boolean, default: true },
  type: {
    type: String,
    enum: ["Medicine", "Medical Equipment"],
    default: "Medicine",
  }, // نوع العنصر
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Medicine", medicineSchema);