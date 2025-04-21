// const express = require("express");
// const router = express.Router();
// const medicineController = require("../controllers/medicineController");

// router.post(
//   "/add",
//   medicineController.uploadMedicineImage,
//   medicineController.addMedicine
// );
// router.get("/", medicineController.getMedicines);

// module.exports = router;
// routes/medicineRoutes.js - مسارات الأدوية المعدلة
const express = require("express");
const router = express.Router();
const medicineController = require("../controllers/medicineController");

// إضافة دواء جديد
router.post(
  "/add",
  medicineController.uploadMedicineImage,
  medicineController.addMedicine
);

// الحصول على جميع الأدوية (مع دعم المرشحات)
router.get("/", medicineController.getMedicines);

// الحصول على الأدوية ذات الخصومات
router.get("/discounted", medicineController.getDiscountedMedicines);

// الحصول على الأدوية حسب الفئة
router.get("/category/:category", medicineController.getMedicinesByCategory);

// الحصول على دواء محدد بالمعرف
router.get("/:id", medicineController.getMedicineById);

// تحديث دواء
router.put(
  "/:id",
  medicineController.uploadMedicineImage,
  medicineController.updateMedicine
);

// حذف دواء
router.delete("/:id", medicineController.deleteMedicine);

module.exports = router;