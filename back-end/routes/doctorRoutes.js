// const express = require("express");
// const router = express.Router();
// const doctorController = require("../controllers/doctorController");

// router.get("/pending", doctorController.getPendingDoctors);
// router.put("/approve/:id", doctorController.approveDoctor);
// router.put("/reject/:id", doctorController.rejectDoctor);

// module.exports = router;
// routes/doctorRoutes.js
// const express = require("express");
// const router = express.Router();
// const doctorController = require("../controllers/doctorController");

// router.get("/pending", doctorController.getPendingDoctors);
// router.post("/approve/:id", doctorController.approveDoctor); // غيرتها من put إلى post
// router.post("/reject/:id", doctorController.rejectDoctor); // غيرتها من put إلى post

// module.exports = router;



// const express = require("express");
// const router = express.Router();
// const doctorController = require("../controllers/doctorController");

// router.get("/pending", doctorController.getPendingDoctors);
// router.post("/approve/:id", doctorController.approveDoctor);
// router.post("/reject/:id", doctorController.rejectDoctor);
// router.post("/add", doctorController.addDoctor); // إضافة طبيب
// router.put("/update/:id", doctorController.updateDoctor); // تعديل بيانات طبيب
// router.delete("/delete/:id", doctorController.softDeleteDoctor); // حذف ناعم

// module.exports = router;


const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");

router.get("/pending", doctorController.getPendingDoctors);
router.post("/approve/:id", doctorController.approveDoctor);
router.post("/reject/:id", doctorController.rejectDoctor);
router.post("/add", doctorController.addDoctor); // إضافة طبيب
router.put("/update/:id", doctorController.updateDoctor); // تعديل بيانات طبيب
router.delete("/delete/:id", doctorController.softDeleteDoctor); // حذف ناعم
router.post("/restore/:id", doctorController.restoreDoctor); // استرجاع طبيب

module.exports = router;