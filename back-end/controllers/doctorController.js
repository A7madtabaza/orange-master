// const Doctor = require("../models/Doctor");

// exports.getPendingDoctors = async (req, res) => {
//   try {
//     const doctors = await Doctor.find({ status: "pending" });
//     res.json(doctors);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.approveDoctor = async (req, res) => {
//   try {
//     const doctor = await Doctor.findByIdAndUpdate(
//       req.params.id,
//       { status: "approved" },
//       { new: true }
//     );
//     res.json(doctor);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.rejectDoctor = async (req, res) => {
//   try {
//     const doctor = await Doctor.findByIdAndUpdate(
//       req.params.id,
//       { status: "rejected" },
//       { new: true }
//     );
//     res.json(doctor);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
// controllers/doctorController.js
// const Doctor = require("../models/Doctor");

// exports.getPendingDoctors = async (req, res) => {
//   try {
//     const pendingDoctors = await Doctor.find({ status: "pending" });
//     res.status(200).json(pendingDoctors);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching pending doctors.", error: error.message });
//   }
// };

// exports.approveDoctor = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const doctor = await Doctor.findByIdAndUpdate(id, { status: "approved" }, { new: true });
//     if (!doctor) return res.status(404).json({ message: "Doctor not found." });
//     res.status(200).json({ message: "Doctor approved successfully." });
//   } catch (error) {
//     res.status(500).json({ message: "Error approving doctor.", error: error.message });
//   }
// };

// exports.rejectDoctor = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const doctor = await Doctor.findByIdAndUpdate(id, { status: "rejected" }, { new: true });
//     if (!doctor) return res.status(404).json({ message: "Doctor not found." });
//     res.status(200).json({ message: "Doctor rejected successfully." });
//   } catch (error) {
//     res.status(500).json({ message: "Error rejecting doctor.", error: error.message });
//   }
// };



// const Doctor = require("../models/Doctor");
// const bcrypt = require("bcryptjs");

// exports.getPendingDoctors = async (req, res) => {
//   try {
//     const pendingDoctors = await Doctor.find({
//       status: "pending",
//       isDeleted: false,
//     });
//     res.status(200).json(pendingDoctors);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "خطأ في جلب طلبات الأطباء.", error: error.message });
//   }
// };

// exports.approveDoctor = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const doctor = await Doctor.findByIdAndUpdate(
//       id,
//       { status: "approved" },
//       { new: true }
//     );
//     if (!doctor) return res.status(404).json({ message: "الطبيب غير موجود." });
//     res.status(200).json({ message: "تمت الموافقة على الطبيب بنجاح." });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "خطأ في الموافقة على الطبيب.", error: error.message });
//   }
// };

// exports.rejectDoctor = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const doctor = await Doctor.findByIdAndUpdate(
//       id,
//       { status: "rejected" },
//       { new: true }
//     );
//     if (!doctor) return res.status(404).json({ message: "الطبيب غير موجود." });
//     res.status(200).json({ message: "تم رفض الطبيب بنجاح." });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "خطأ في رفض الطبيب.", error: error.message });
//   }
// };

// exports.addDoctor = async (req, res) => {
//   const { fullName, email, password, phone, jobNumber, specialization } =
//     req.body;

//   try {
//     // التحقق من وجود البريد الإلكتروني
//     const existingDoctor = await Doctor.findOne({ email });
//     if (existingDoctor) {
//       return res
//         .status(400)
//         .json({ message: "البريد الإلكتروني مستخدم بالفعل." });
//     }

//     // تشفير كلمة المرور
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const doctor = new Doctor({
//       fullName,
//       email,
//       password: hashedPassword,
//       phone,
//       jobNumber,
//       specialization,
//       status: "pending",
//     });

//     await doctor.save();
//     res.status(201).json({ message: "تم إضافة الطبيب بنجاح." });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "خطأ في إضافة الطبيب.", error: error.message });
//   }
// };

// exports.updateDoctor = async (req, res) => {
//   const { id } = req.params;
//   const { fullName, email, phone, jobNumber, specialization } = req.body;

//   try {
//     const doctor = await Doctor.findById(id);
//     if (!doctor) {
//       return res.status(404).json({ message: "الطبيب غير موجود." });
//     }

//     // التحقق من البريد الإلكتروني لو تغير
//     if (email && email !== doctor.email) {
//       const existingDoctor = await Doctor.findOne({ email });
//       if (existingDoctor) {
//         return res
//           .status(400)
//           .json({ message: "البريد الإلكتروني مستخدم بالفعل." });
//       }
//     }

//     // تحديث الحقول
//     doctor.fullName = fullName || doctor.fullName;
//     doctor.email = email || doctor.email;
//     doctor.phone = phone || doctor.phone;
//     doctor.jobNumber = jobNumber || doctor.jobNumber;
//     doctor.specialization = specialization || doctor.specialization;

//     await doctor.save();
//     res.status(200).json({ message: "تم تعديل بيانات الطبيب بنجاح." });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "خطأ في تعديل بيانات الطبيب.", error: error.message });
//   }
// };

// exports.softDeleteDoctor = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const doctor = await Doctor.findByIdAndUpdate(
//       id,
//       { isDeleted: true },
//       { new: true }
//     );
//     if (!doctor) {
//       return res.status(404).json({ message: "الطبيب غير موجود." });
//     }
//     res.status(200).json({ message: "تم حذف الطبيب بنجاح." });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "خطأ في حذف الطبيب.", error: error.message });
//   }
// };



const Doctor = require("../models/Doctor");
const bcrypt = require("bcryptjs");

exports.getPendingDoctors = async (req, res) => {
  try {
    const pendingDoctors = await Doctor.find({
      status: "pending",
      isDeleted: false,
    });
    res.status(200).json(pendingDoctors);
  } catch (error) {
    res
      .status(500)
      .json({ message: "خطأ في جلب طلبات الأطباء.", error: error.message });
  }
};

exports.approveDoctor = async (req, res) => {
  const { id } = req.params;

  try {
    const doctor = await Doctor.findByIdAndUpdate(
      id,
      { status: "approved" },
      { new: true }
    );
    if (!doctor) return res.status(404).json({ message: "الطبيب غير موجود." });
    res.status(200).json({ message: "تمت الموافقة على الطبيب بنجاح." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "خطأ في الموافقة على الطبيب.", error: error.message });
  }
};

exports.rejectDoctor = async (req, res) => {
  const { id } = req.params;

  try {
    const doctor = await Doctor.findByIdAndUpdate(
      id,
      { status: "rejected" },
      { new: true }
    );
    if (!doctor) return res.status(404).json({ message: "الطبيب غير موجود." });
    res.status(200).json({ message: "تم رفض الطبيب بنجاح." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "خطأ في رفض الطبيب.", error: error.message });
  }
};

exports.addDoctor = async (req, res) => {
  const { fullName, email, password, phone, jobNumber, specialization } =
    req.body;

  try {
    // التحقق من وجود البريد الإلكتروني
    const existingDoctor = await Doctor.findOne({ email });
    if (existingDoctor) {
      return res
        .status(400)
        .json({ message: "البريد الإلكتروني مستخدم بالفعل." });
    }

    // تشفير كلمة المرور
    const hashedPassword = await bcrypt.hash(password, 10);

    const doctor = new Doctor({
      fullName,
      email,
      password: hashedPassword,
      phone,
      jobNumber,
      specialization,
      status: "pending",
    });

    await doctor.save();
    res.status(201).json({ message: "تم إضافة الطبيب بنجاح.", doctor });
  } catch (error) {
    res
      .status(500)
      .json({ message: "خطأ في إضافة الطبيب.", error: error.message });
  }
};

exports.updateDoctor = async (req, res) => {
  const { id } = req.params;
  const { fullName, email, phone, jobNumber, specialization } = req.body;

  try {
    const doctor = await Doctor.findById(id);
    if (!doctor) {
      return res.status(404).json({ message: "الطبيب غير موجود." });
    }

    // التحقق من البريد الإلكتروني لو تغير
    if (email && email !== doctor.email) {
      const existingDoctor = await Doctor.findOne({ email });
      if (existingDoctor) {
        return res
          .status(400)
          .json({ message: "البريد الإلكتروني مستخدم بالفعل." });
      }
    }

    // تحديث الحقول
    doctor.fullName = fullName || doctor.fullName;
    doctor.email = email || doctor.email;
    doctor.phone = phone || doctor.phone;
    doctor.jobNumber = jobNumber || doctor.jobNumber;
    doctor.specialization = specialization || doctor.specialization;

    await doctor.save();
    res.status(200).json({ message: "تم تعديل بيانات الطبيب بنجاح." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "خطأ في تعديل بيانات الطبيب.", error: error.message });
  }
};

exports.softDeleteDoctor = async (req, res) => {
  const { id } = req.params;

  try {
    const doctor = await Doctor.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true }
    );
    if (!doctor) {
      return res.status(404).json({ message: "الطبيب غير موجود." });
    }
    res.status(200).json({ message: "تم حذف الطبيب بنجاح." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "خطأ في حذف الطبيب.", error: error.message });
  }
};

exports.restoreDoctor = async (req, res) => {
  const { id } = req.params;

  try {
    const doctor = await Doctor.findByIdAndUpdate(
      id,
      { isDeleted: false, status: "pending" },
      { new: true }
    );
    if (!doctor) {
      return res.status(404).json({ message: "الطبيب غير موجود." });
    }
    res.status(200).json({ message: "تم استرجاع الطبيب بنجاح." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "خطأ في استرجاع الطبيب.", error: error.message });
  }
};