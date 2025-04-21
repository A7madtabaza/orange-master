// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const DoctorApproval = () => {
//   const [doctors, setDoctors] = useState([]);
//   const [error, setError] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [currentDoctorId, setCurrentDoctorId] = useState(null);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     phone: "",
//     jobNumber: "",
//     specialization: "",
//   });

//   useEffect(() => {
//     const fetchPendingDoctors = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:5000/api/doctors/pending",
//           {
//             withCredentials: true,
//           }
//         );
//         setDoctors(response.data);
//       } catch (err) {
//         setError("Failed to fetch pending doctors.");
//         console.error(err);
//       }
//     };
//     fetchPendingDoctors();
//   }, []);

//   const handleAction = async (doctorId, action) => {
//     try {
//       await axios.post(
//         `http://localhost:5000/api/doctors/${action}/${doctorId}`,
//         {},
//         { withCredentials: true }
//       );
//       setDoctors(doctors.filter((doctor) => doctor._id !== doctorId));
//       alert(
//         `Doctor ${action === "approve" ? "approved" : "rejected"} successfully`
//       );
//     } catch (err) {
//       alert("An error occurred while processing the request.");
//       console.error(err);
//     }
//   };

//   const handleAddDoctor = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/api/doctors/add", formData, {
//         withCredentials: true,
//       });
//       setDoctors([
//         ...doctors,
//         { ...formData, _id: Date.now().toString(), status: "pending" },
//       ]);
//       alert("Doctor added successfully");
//       closeModal();
//     } catch (err) {
//       alert(err.response?.data?.message || "Failed to add doctor.");
//       console.error(err);
//     }
//   };

//   const handleUpdateDoctor = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(
//         `http://localhost:5000/api/doctors/update/${currentDoctorId}`,
//         formData,
//         { withCredentials: true }
//       );
//       setDoctors(
//         doctors.map((doctor) =>
//           doctor._id === currentDoctorId ? { ...doctor, ...formData } : doctor
//         )
//       );
//       alert("Doctor details updated successfully");
//       closeModal();
//     } catch (err) {
//       alert(err.response?.data?.message || "Failed to update doctor details.");
//       console.error(err);
//     }
//   };

//   const handleSoftDelete = async (doctorId) => {
//     if (window.confirm("Are you sure you want to delete this doctor?")) {
//       try {
//         await axios.delete(
//           `http://localhost:5000/api/doctors/delete/${doctorId}`,
//           {
//             withCredentials: true,
//           }
//         );
//         setDoctors(doctors.filter((doctor) => doctor._id !== doctorId));
//         alert("Doctor deleted successfully");
//       } catch (err) {
//         alert("Failed to delete doctor.");
//         console.error(err);
//       }
//     }
//   };

//   const openAddModal = () => {
//     setIsEditMode(false);
//     setFormData({
//       fullName: "",
//       email: "",
//       password: "",
//       phone: "",
//       jobNumber: "",
//       specialization: "",
//     });
//     setShowModal(true);
//   };

//   const openEditModal = (doctor) => {
//     setIsEditMode(true);
//     setCurrentDoctorId(doctor._id);
//     setFormData({
//       fullName: doctor.fullName,
//       email: doctor.email,
//       password: "",
//       phone: doctor.phone,
//       jobNumber: doctor.jobNumber,
//       specialization: doctor.specialization,
//     });
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setCurrentDoctorId(null);
//     setFormData({
//       fullName: "",
//       email: "",
//       password: "",
//       phone: "",
//       jobNumber: "",
//       specialization: "",
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <div className="flex justify-between items-center mb-8">
//         <h2 className="text-3xl font-bold text-gray-800">
//           Pending Doctor Requests
//         </h2>
//         <button
//           onClick={openAddModal}
//           className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-md transition-all duration-300"
//           aria-label="Add new doctor"
//         >
//           ➕
//         </button>
//       </div>

//       {error && (
//         <p className="text-red-600 text-center bg-red-100 p-4 rounded-lg mb-6">
//           {error}
//         </p>
//       )}

//       {doctors.length === 0 ? (
//         <p className="text-center text-gray-500 text-lg">No pending requests</p>
//       ) : (
//         <div className="space-y-6">
//           {doctors.map((doctor) => (
//             <div
//               key={doctor._id}
//               className="bg-white p-6 rounded-xl shadow-md flex justify-between items-center border border-gray-200 hover:shadow-lg transition-all duration-300"
//             >
//               <div className="text-left">
//                 <p className="text-gray-800">
//                   <strong>Name:</strong> {doctor.fullName}
//                 </p>
//                 <p className="text-gray-600">
//                   <strong>Email:</strong> {doctor.email}
//                 </p>
//                 <p className="text-gray-600">
//                   <strong>Phone:</strong> {doctor.phone}
//                 </p>
//                 <p className="text-gray-600">
//                   <strong>Job Number:</strong> {doctor.jobNumber}
//                 </p>
//                 <p className="text-gray-600">
//                   <strong>Specialization:</strong> {doctor.specialization}
//                 </p>
//               </div>
//               <div className="flex space-x-3">
//                 <button
//                   onClick={() => handleAction(doctor._id, "approve")}
//                   className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-all duration-300"
//                   aria-label="Approve doctor"
//                 >
//                   ✔️
//                 </button>
//                 <button
//                   onClick={() => handleAction(doctor._id, "reject")}
//                   className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-all duration-300"
//                   aria-label="Reject doctor"
//                 >
//                   ❌
//                 </button>
//                 <button
//                   onClick={() => openEditModal(doctor)}
//                   className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-full transition-all duration-300"
//                   aria-label="Edit doctor"
//                 >
//                   ✏️
//                 </button>
//                 <button
//                   onClick={() => handleSoftDelete(doctor._id)}
//                   className="bg-gray-500 hover:bg-gray-600 text-white p-2 rounded-full transition-all duration-300"
//                   aria-label="Delete doctor"
//                 >
//                   🗑️
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg">
//             <h3 className="text-2xl font-bold text-gray-800 mb-6 text-left">
//               {isEditMode ? "Edit Doctor Details" : "Add New Doctor"}
//             </h3>
//             <form onSubmit={isEditMode ? handleUpdateDoctor : handleAddDoctor}>
//               <div className="space-y-5">
//                 <div>
//                   <label className="block text-gray-700 text-left">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleInputChange}
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 text-left">Email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                     required
//                   />
//                 </div>
//                 {!isEditMode && (
//                   <div>
//                     <label className="block text-gray-700 text-left">
//                       Password
//                     </label>
//                     <input
//                       type="password"
//                       name="password"
//                       value={formData.password}
//                       onChange={handleInputChange}
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                       required
//                     />
//                   </div>
//                 )}
//                 <div>
//                   <label className="block text-gray-700 text-left">Phone</label>
//                   <input
//                     type="text"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 text-left">
//                     Job Number
//                   </label>
//                   <input
//                     type="text"
//                     name="jobNumber"
//                     value={formData.jobNumber}
//                     onChange={handleInputChange}
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 text-left">
//                     Specialization
//                   </label>
//                   <input
//                     type="text"
//                     name="specialization"
//                     value={formData.specialization}
//                     onChange={handleInputChange}
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="flex justify-between mt-8">
//                 <button
//                   type="button"
//                   onClick={closeModal}
//                   className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg transition-all duration-300"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300"
//                 >
//                   {isEditMode ? "Save Changes" : "Add Doctor"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DoctorApproval;


// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { Plus, Check, X, Edit, Trash } from "lucide-react";
// import axios from "axios";

// const DoctorApproval = () => {
//   const [doctors, setDoctors] = useState([]);
//   const [error, setError] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [currentDoctorId, setCurrentDoctorId] = useState(null);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     phone: "",
//     jobNumber: "",
//     specialization: "",
//   });
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const fetchPendingDoctors = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:5000/api/doctors/pending",
//           {
//             withCredentials: true,
//           }
//         );
//         setDoctors(response.data);
//       } catch (err) {
//         setError("Failed to fetch pending doctors.");
//         console.error(err);
//       }
//     };
//     fetchPendingDoctors();
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { root: null, rootMargin: "0px", threshold: 0.1 }
//     );
//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }
//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const handleAction = async (doctorId, action) => {
//     try {
//       await axios.post(
//         `http://localhost:5000/api/doctors/${action}/${doctorId}`,
//         {},
//         { withCredentials: true }
//       );
//       setDoctors(doctors.filter((doctor) => doctor._id !== doctorId));
//       alert(
//         `Doctor ${action === "approve" ? "approved" : "rejected"} successfully`
//       );
//     } catch (err) {
//       alert("An error occurred while processing the request.");
//       console.error(err);
//     }
//   };

//   const handleAddDoctor = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/api/doctors/add", formData, {
//         withCredentials: true,
//       });
//       setDoctors([
//         ...doctors,
//         { ...formData, _id: Date.now().toString(), status: "pending" },
//       ]);
//       alert("Doctor added successfully");
//       closeModal();
//     } catch (err) {
//       alert(err.response?.data?.message || "Failed to add doctor.");
//       console.error(err);
//     }
//   };

//   const handleUpdateDoctor = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(
//         `http://localhost:5000/api/doctors/update/${currentDoctorId}`,
//         formData,
//         { withCredentials: true }
//       );
//       setDoctors(
//         doctors.map((doctor) =>
//           doctor._id === currentDoctorId ? { ...doctor, ...formData } : doctor
//         )
//       );
//       alert("Doctor details updated successfully");
//       closeModal();
//     } catch (err) {
//       alert(err.response?.data?.message || "Failed to update doctor details.");
//       console.error(err);
//     }
//   };

//   const handleSoftDelete = async (doctorId) => {
//     if (window.confirm("Are you sure you want to delete this doctor?")) {
//       try {
//         await axios.delete(
//           `http://localhost:5000/api/doctors/delete/${doctorId}`,
//           {
//             withCredentials: true,
//           }
//         );
//         setDoctors(doctors.filter((doctor) => doctor._id !== doctorId));
//         alert("Doctor deleted successfully");
//       } catch (err) {
//         alert("Failed to delete doctor.");
//         console.error(err);
//       }
//     }
//   };

//   const openAddModal = () => {
//     setIsEditMode(false);
//     setFormData({
//       fullName: "",
//       email: "",
//       password: "",
//       phone: "",
//       jobNumber: "",
//       specialization: "",
//     });
//     setShowModal(true);
//   };

//   const openEditModal = (doctor) => {
//     setIsEditMode(true);
//     setCurrentDoctorId(doctor._id);
//     setFormData({
//       fullName: doctor.fullName,
//       email: doctor.email,
//       password: "",
//       phone: doctor.phone,
//       jobNumber: doctor.jobNumber,
//       specialization: doctor.specialization,
//     });
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setCurrentDoctorId(null);
//     setFormData({
//       fullName: "",
//       email: "",
//       password: "",
//       phone: "",
//       jobNumber: "",
//       specialization: "",
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const sectionVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, staggerChildren: 0.2 },
//     },
//   };

//   const childVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   };

//   const iconVariants = {
//     animate: {
//       y: [-5, 5],
//       transition: {
//         y: { repeat: Infinity, repeatType: "reverse", duration: 1.5 },
//       },
//     },
//   };

//   return (
//     <motion.div
//       ref={sectionRef}
//       className="font-sans text-gray-800 min-h-screen bg-white py-20 px-6"
//       initial="hidden"
//       animate={isVisible ? "visible" : "hidden"}
//       variants={sectionVariants}
//     >
//       <div className="container mx-auto max-w-6xl">
//         <motion.div
//           className="flex justify-between items-center mb-16"
//           variants={childVariants}
//         >
//           <h2 className="text-4xl font-bold text-green-800">
//             Pending Doctor Requests
//           </h2>
//           <motion.button
//             onClick={openAddModal}
//             className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-md transition-all duration-300"
//             aria-label="Add new doctor"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Plus className="w-6 h-6" />
//           </motion.button>
//         </motion.div>

//         {error && (
//           <motion.p
//             className="text-red-600 text-center bg-red-100 p-4 rounded-lg mb-8"
//             variants={childVariants}
//           >
//             {error}
//           </motion.p>
//         )}

//         {doctors.length === 0 ? (
//           <motion.p
//             className="text-center text-gray-600 text-lg"
//             variants={childVariants}
//           >
//             No pending requests
//           </motion.p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {doctors.map((doctor) => (
//               <motion.div
//                 key={doctor._id}
//                 className="bg-white p-6 rounded-2xl shadow-lg flex justify-between items-center border border-gray-200"
//                 variants={childVariants}
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
//                 }}
//               >
//                 <div className="text-left">
//                   <p className="text-gray-800">
//                     <strong>Name:</strong> {doctor.fullName}
//                   </p>
//                   <p className="text-gray-600">
//                     <strong>Email:</strong> {doctor.email}
//                   </p>
//                   <p className="text-gray-600">
//                     <strong>Phone:</strong> {doctor.phone}
//                   </p>
//                   <p className="text-gray-600">
//                     <strong>Job Number:</strong> {doctor.jobNumber}
//                   </p>
//                   <p className="text-gray-600">
//                     <strong>Specialization:</strong> {doctor.specialization}
//                   </p>
//                 </div>
//                 <div className="flex space-x-3">
//                   <motion.button
//                     onClick={() => handleAction(doctor._id, "approve")}
//                     className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-all duration-300"
//                     aria-label="Approve doctor"
//                     variants={iconVariants}
//                     animate="animate"
//                   >
//                     <Check className="w-5 h-5" />
//                   </motion.button>
//                   <motion.button
//                     onClick={() => handleAction(doctor._id, "reject")}
//                     className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-all duration-300"
//                     aria-label="Reject doctor"
//                     variants={iconVariants}
//                     animate="animate"
//                   >
//                     <X className="w-5 h-5" />
//                   </motion.button>
//                   <motion.button
//                     onClick={() => openEditModal(doctor)}
//                     className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-full transition-all duration-300"
//                     aria-label="Edit doctor"
//                     variants={iconVariants}
//                     animate="animate"
//                   >
//                     <Edit className="w-5 h-5" />
//                   </motion.button>
//                   <motion.button
//                     onClick={() => handleSoftDelete(doctor._id)}
//                     className="bg-gray-500 hover:bg-gray-600 text-white p-2 rounded-full transition-all duration-300"
//                     aria-label="Delete doctor"
//                     variants={iconVariants}
//                     animate="animate"
//                   >
//                     <Trash className="w-5 h-5" />
//                   </motion.button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         )}

//         {showModal && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg"
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               <h3 className="text-2xl font-bold text-green-800 mb-6 text-left">
//                 {isEditMode ? "Edit Doctor Details" : "Add New Doctor"}
//               </h3>
//               <form
//                 onSubmit={isEditMode ? handleUpdateDoctor : handleAddDoctor}
//               >
//                 <div className="space-y-5">
//                   <div>
//                     <label className="block text-gray-700 text-left">
//                       Full Name
//                     </label>
//                     <input
//                       type="text"
//                       name="fullName"
//                       value={formData.fullName}
//                       onChange={handleInputChange}
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-700 text-left">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
//                       required
//                     />
//                   </div>
//                   {!isEditMode && (
//                     <div>
//                       <label className="block text-gray-700 text-left">
//                         Password
//                       </label>
//                       <input
//                         type="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleInputChange}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
//                         required
//                       />
//                     </div>
//                   )}
//                   <div>
//                     <label className="block text-gray-700 text-left">
//                       Phone
//                     </label>
//                     <input
//                       type="text"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleInputChange}
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-700 text-left">
//                       Job Number
//                     </label>
//                     <input
//                       type="text"
//                       name="jobNumber"
//                       value={formData.jobNumber}
//                       onChange={handleInputChange}
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-700 text-left">
//                       Specialization
//                     </label>
//                     <input
//                       type="text"
//                       name="specialization"
//                       value={formData.specialization}
//                       onChange={handleInputChange}
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="flex justify-between mt-8">
//                   <motion.button
//                     type="button"
//                     onClick={closeModal}
//                     className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-full transition-all duration-300"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Cancel
//                   </motion.button>
//                   <motion.button
//                     type="submit"
//                     className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition-all duration-300"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     {isEditMode ? "Save Changes" : "Add Doctor"}
//                   </motion.button>
//                 </div>
//               </form>
//             </motion.div>
//           </motion.div>
//         )}
//       </div>
//     </motion.div>
//   );
// };

// export default DoctorApproval;



// import React, { useState, useEffect } from "react";
// import { Check, X, Edit, Trash } from "lucide-react";
// import axios from "axios";

// const DoctorApproval = () => {
//   const [doctors, setDoctors] = useState([]);
//   const [error, setError] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [currentDoctorId, setCurrentDoctorId] = useState(null);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     phone: "",
//     jobNumber: "",
//     specialization: "",
//   });

//   useEffect(() => {
//     const fetchDoctors = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:5000/api/doctors/all",
//           {
//             withCredentials: true,
//           }
//         );
//         setDoctors(response.data);
//       } catch (err) {
//         setError("Failed to fetch doctors.");
//         console.error(err);
//       }
//     };
//     fetchDoctors();
//   }, []);

//   const handleAction = async (doctorId, action) => {
//     try {
//       await axios.post(
//         `http://localhost:5000/api/doctors/${action}/${doctorId}`,
//         {},
//         { withCredentials: true }
//       );

//       // Update the doctor's status in the state instead of removing them
//       setDoctors(
//         doctors.map((doctor) =>
//           doctor._id === doctorId
//             ? {
//                 ...doctor,
//                 status: action === "approve" ? "approved" : "rejected",
//               }
//             : doctor
//         )
//       );

//       alert(
//         `Doctor ${action === "approve" ? "approved" : "rejected"} successfully`
//       );
//     } catch (err) {
//       alert("An error occurred while processing the request.");
//       console.error(err);
//     }
//   };

//   const handleAddDoctor = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/doctors/add",
//         formData,
//         {
//           withCredentials: true,
//         }
//       );

//       // Add the new doctor to the list with pending status
//       setDoctors([
//         ...doctors,
//         {
//           ...formData,
//           _id: response.data._id || Date.now().toString(),
//           status: "pending",
//         },
//       ]);

//       alert("Doctor added successfully");
//       closeModal();
//     } catch (err) {
//       alert(err.response?.data?.message || "Failed to add doctor.");
//       console.error(err);
//     }
//   };

//   const handleUpdateDoctor = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(
//         `http://localhost:5000/api/doctors/update/${currentDoctorId}`,
//         formData,
//         { withCredentials: true }
//       );

//       setDoctors(
//         doctors.map((doctor) =>
//           doctor._id === currentDoctorId ? { ...doctor, ...formData } : doctor
//         )
//       );

//       alert("Doctor details updated successfully");
//       closeModal();
//     } catch (err) {
//       alert(err.response?.data?.message || "Failed to update doctor details.");
//       console.error(err);
//     }
//   };

//   const handleSoftDelete = async (doctorId) => {
//     if (window.confirm("Are you sure you want to delete this doctor?")) {
//       try {
//         await axios.delete(
//           `http://localhost:5000/api/doctors/delete/${doctorId}`,
//           {
//             withCredentials: true,
//           }
//         );

//         // Mark the doctor as deleted instead of removing them
//         setDoctors(
//           doctors.map((doctor) =>
//             doctor._id === doctorId ? { ...doctor, status: "deleted" } : doctor
//           )
//         );

//         alert("Doctor deleted successfully");
//       } catch (err) {
//         alert("Failed to delete doctor.");
//         console.error(err);
//       }
//     }
//   };

//   const openAddModal = () => {
//     setIsEditMode(false);
//     setFormData({
//       fullName: "",
//       email: "",
//       password: "",
//       phone: "",
//       jobNumber: "",
//       specialization: "",
//     });
//     setShowModal(true);
//   };

//   const openEditModal = (doctor) => {
//     setIsEditMode(true);
//     setCurrentDoctorId(doctor._id);
//     setFormData({
//       fullName: doctor.fullName,
//       email: doctor.email,
//       password: "",
//       phone: doctor.phone,
//       jobNumber: doctor.jobNumber,
//       specialization: doctor.specialization,
//     });
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setCurrentDoctorId(null);
//     setFormData({
//       fullName: "",
//       email: "",
//       password: "",
//       phone: "",
//       jobNumber: "",
//       specialization: "",
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Helper function to get status badge
//   const getStatusBadge = (status) => {
//     const statusStyles = {
//       pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
//       approved: "bg-green-100 text-green-800 border-green-200",
//       rejected: "bg-red-100 text-red-800 border-red-200",
//       deleted: "bg-gray-100 text-gray-800 border-gray-200",
//     };

//     return (
//       <span
//         className={`px-2 py-1 rounded-full text-xs font-medium border ${
//           statusStyles[status] || statusStyles.pending
//         }`}
//       >
//         {status.charAt(0).toUpperCase() + status.slice(1)}
//       </span>
//     );
//   };

//   return (
//     <div className="bg-gray-50 p-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold text-green-700">Doctor Approval</h2>
//           <button
//             onClick={openAddModal}
//             className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2 transition-colors"
//           >
//             <span>Add Doctor</span>
//           </button>
//         </div>

//         {error && (
//           <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded mb-6">
//             {error}
//           </div>
//         )}

//         <div className="bg-white shadow rounded-lg overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-green-600 text-white">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-sm font-medium">
//                     Name
//                   </th>
//                   <th className="px-6 py-3 text-left text-sm font-medium">
//                     Contact
//                   </th>
//                   <th className="px-6 py-3 text-left text-sm font-medium">
//                     Job Details
//                   </th>
//                   <th className="px-6 py-3 text-left text-sm font-medium">
//                     Status
//                   </th>
//                   <th className="px-6 py-3 text-left text-sm font-medium">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {doctors.length === 0 ? (
//                   <tr>
//                     <td
//                       colSpan="5"
//                       className="px-6 py-4 text-center text-gray-500"
//                     >
//                       No doctors found
//                     </td>
//                   </tr>
//                 ) : (
//                   doctors.map((doctor) => (
//                     <tr key={doctor._id} className="hover:bg-gray-50">
//                       <td className="px-6 py-4">
//                         <div className="font-medium text-gray-900">
//                           {doctor.fullName}
//                         </div>
//                       </td>
//                       <td className="px-6 py-4">
//                         <div className="text-gray-600">{doctor.email}</div>
//                         <div className="text-gray-600">{doctor.phone}</div>
//                       </td>
//                       <td className="px-6 py-4">
//                         <div className="text-gray-600">
//                           <span className="font-medium">Job #:</span>{" "}
//                           {doctor.jobNumber}
//                         </div>
//                         <div className="text-gray-600">
//                           <span className="font-medium">Specialization:</span>{" "}
//                           {doctor.specialization}
//                         </div>
//                       </td>
//                       <td className="px-6 py-4">
//                         {getStatusBadge(doctor.status || "pending")}
//                       </td>
//                       <td className="px-6 py-4">
//                         <div className="flex space-x-2">
//                           {doctor.status !== "approved" &&
//                             doctor.status !== "deleted" && (
//                               <button
//                                 onClick={() =>
//                                   handleAction(doctor._id, "approve")
//                                 }
//                                 className="bg-green-500 hover:bg-green-600 text-white p-1.5 rounded transition-colors"
//                                 title="Approve"
//                               >
//                                 <Check className="w-4 h-4" />
//                               </button>
//                             )}

//                           {doctor.status !== "rejected" &&
//                             doctor.status !== "deleted" && (
//                               <button
//                                 onClick={() =>
//                                   handleAction(doctor._id, "reject")
//                                 }
//                                 className="bg-red-500 hover:bg-red-600 text-white p-1.5 rounded transition-colors"
//                                 title="Reject"
//                               >
//                                 <X className="w-4 h-4" />
//                               </button>
//                             )}

//                           {doctor.status !== "deleted" && (
//                             <>
//                               <button
//                                 onClick={() => openEditModal(doctor)}
//                                 className="bg-blue-500 hover:bg-blue-600 text-white p-1.5 rounded transition-colors"
//                                 title="Edit"
//                               >
//                                 <Edit className="w-4 h-4" />
//                               </button>

//                               <button
//                                 onClick={() => handleSoftDelete(doctor._id)}
//                                 className="bg-gray-500 hover:bg-gray-600 text-white p-1.5 rounded transition-colors"
//                                 title="Delete"
//                               >
//                                 <Trash className="w-4 h-4" />
//                               </button>
//                             </>
//                           )}
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
//             <h3 className="text-xl font-bold text-green-700 mb-4">
//               {isEditMode ? "Edit Doctor Details" : "Add New Doctor"}
//             </h3>
//             <form onSubmit={isEditMode ? handleUpdateDoctor : handleAddDoctor}>
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-gray-700 text-sm font-medium mb-1">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleInputChange}
//                     className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:outline-none"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 text-sm font-medium mb-1">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:outline-none"
//                     required
//                   />
//                 </div>
//                 {!isEditMode && (
//                   <div>
//                     <label className="block text-gray-700 text-sm font-medium mb-1">
//                       Password
//                     </label>
//                     <input
//                       type="password"
//                       name="password"
//                       value={formData.password}
//                       onChange={handleInputChange}
//                       className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:outline-none"
//                       required
//                     />
//                   </div>
//                 )}
//                 <div>
//                   <label className="block text-gray-700 text-sm font-medium mb-1">
//                     Phone
//                   </label>
//                   <input
//                     type="text"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:outline-none"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 text-sm font-medium mb-1">
//                     Job Number
//                   </label>
//                   <input
//                     type="text"
//                     name="jobNumber"
//                     value={formData.jobNumber}
//                     onChange={handleInputChange}
//                     className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:outline-none"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 text-sm font-medium mb-1">
//                     Specialization
//                   </label>
//                   <input
//                     type="text"
//                     name="specialization"
//                     value={formData.specialization}
//                     onChange={handleInputChange}
//                     className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:outline-none"
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="flex justify-end gap-3 mt-6">
//                 <button
//                   type="button"
//                   onClick={closeModal}
//                   className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded transition-colors"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors"
//                 >
//                   {isEditMode ? "Save Changes" : "Add Doctor"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DoctorApproval;


// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { Plus, Check, X, Edit, Trash, RotateCcw } from "lucide-react";
// import axios from "axios";

// const DoctorApproval = () => {
//   const [doctors, setDoctors] = useState([]);
//   const [error, setError] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [currentDoctorId, setCurrentDoctorId] = useState(null);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     phone: "",
//     jobNumber: "",
//     specialization: "",
//   });
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const fetchPendingDoctors = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:5000/api/doctors/pending",
//           {
//             withCredentials: true,
//           }
//         );
//         console.log("Fetched doctors:", response.data); // للتأكد من البيانات اللي بتيجي
//         setDoctors(response.data);
//       } catch (err) {
//         setError("Failed to fetch pending doctors.");
//         console.error(err);
//       }
//     };
//     fetchPendingDoctors();
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { root: null, rootMargin: "0px", threshold: 0.1 }
//     );
//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }
//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const handleAction = async (doctorId, action) => {
//     try {
//       await axios.post(
//         `http://localhost:5000/api/doctors/${action}/${doctorId}`,
//         {},
//         { withCredentials: true }
//       );
//       setDoctors(
//         doctors.map((doctor) =>
//           doctor._id === doctorId
//             ? {
//                 ...doctor,
//                 status: action === "approve" ? "approved" : "rejected",
//               }
//             : doctor
//         )
//       );
//       alert(
//         `Doctor ${action === "approve" ? "approved" : "rejected"} successfully`
//       );
//     } catch (err) {
//       alert("An error occurred while processing the request.");
//       console.error(err);
//     }
//   };

//   const handleAddDoctor = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/doctors/add",
//         formData,
//         {
//           withCredentials: true,
//         }
//       );
//       const newDoctor = response.data.doctor; // الـ Backend بيرجّع الطبيب الجديد
//       console.log("Added doctor:", newDoctor); // للتأكد من الـ ID
//       setDoctors([
//         ...doctors,
//         { ...newDoctor, status: "pending", isDeleted: false },
//       ]);
//       alert("Doctor added successfully");
//       closeModal();
//     } catch (err) {
//       alert(err.response?.data?.message || "Failed to add doctor.");
//       console.error(err);
//     }
//   };

//   const handleUpdateDoctor = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(
//         `http://localhost:5000/api/doctors/update/${currentDoctorId}`,
//         formData,
//         { withCredentials: true }
//       );
//       setDoctors(
//         doctors.map((doctor) =>
//           doctor._id === currentDoctorId ? { ...doctor, ...formData } : doctor
//         )
//       );
//       alert("Doctor details updated successfully");
//       closeModal();
//     } catch (err) {
//       alert(err.response?.data?.message || "Failed to update doctor details.");
//       console.error(err);
//     }
//   };

//   const handleSoftDelete = async (doctorId) => {
//     if (window.confirm("Are you sure you want to delete this doctor?")) {
//       try {
//         await axios.delete(
//           `http://localhost:5000/api/doctors/delete/${doctorId}`,
//           {
//             withCredentials: true,
//           }
//         );
//         setDoctors(
//           doctors.map((doctor) =>
//             doctor._id === doctorId ? { ...doctor, isDeleted: true } : doctor
//           )
//         );
//         alert("Doctor deleted successfully");
//       } catch (err) {
//         alert("Failed to delete doctor.");
//         console.error(err);
//       }
//     }
//   };

//   const handleRestore = async (doctorId) => {
//     if (window.confirm("Are you sure you want to restore this doctor?")) {
//       try {
//         await axios.post(
//           `http://localhost:5000/api/doctors/restore/${doctorId}`,
//           {},
//           { withCredentials: true }
//         );
//         setDoctors(
//           doctors.map((doctor) =>
//             doctor._id === doctorId
//               ? { ...doctor, isDeleted: false, status: "pending" }
//               : doctor
//           )
//         );
//         alert("Doctor restored successfully");
//       } catch (err) {
//         alert("Failed to restore doctor.");
//         console.error(err);
//       }
//     }
//   };

//   const openAddModal = () => {
//     setIsEditMode(false);
//     setFormData({
//       fullName: "",
//       email: "",
//       password: "",
//       phone: "",
//       jobNumber: "",
//       specialization: "",
//     });
//     setShowModal(true);
//   };

//   const openEditModal = (doctor) => {
//     setIsEditMode(true);
//     setCurrentDoctorId(doctor._id);
//     setFormData({
//       fullName: doctor.fullName,
//       email: doctor.email,
//       password: "",
//       phone: doctor.phone,
//       jobNumber: doctor.jobNumber,
//       specialization: doctor.specialization,
//     });
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setCurrentDoctorId(null);
//     setFormData({
//       fullName: "",
//       email: "",
//       password: "",
//       phone: "",
//       jobNumber: "",
//       specialization: "",
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const sectionVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, staggerChildren: 0.2 },
//     },
//   };

//   const childVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   };

//   const iconVariants = {
//     animate: {
//       y: [-5, 5],
//       transition: {
//         y: { repeat: Infinity, repeatType: "reverse", duration: 1.5 },
//       },
//     },
//   };

//   const getStatusColor = (status, isDeleted) => {
//     if (isDeleted) return "text-gray-500";
//     switch (status) {
//       case "approved":
//         return "text-green-600";
//       case "rejected":
//         return "text-red-600";
//       case "pending":
//       default:
//         return "text-yellow-600";
//     }
//   };

//   return (
//     <motion.div
//       ref={sectionRef}
//       className="font-sans text-gray-800 min-h-screen bg-white py-20 px-6"
//       initial="hidden"
//       animate={isVisible ? "visible" : "hidden"}
//       variants={sectionVariants}
//     >
//       <div className="container mx-auto max-w-6xl">
//         <motion.div
//           className="flex justify-between items-center mb-16"
//           variants={childVariants}
//         >
//           <h2 className="text-4xl font-bold text-green-800">
//             Pending Doctor Requests
//           </h2>
//           <motion.button
//             onClick={openAddModal}
//             className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-md transition-all duration-300"
//             aria-label="Add new doctor"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Plus className="w-6 h-6" />
//           </motion.button>
//         </motion.div>

//         {error && (
//           <motion.p
//             className="text-red-600 text-center bg-red-100 p-4 rounded-lg mb-8"
//             variants={childVariants}
//           >
//             {error}
//           </motion.p>
//         )}

//         {doctors.length === 0 ? (
//           <motion.p
//             className="text-center text-gray-600 text-lg"
//             variants={childVariants}
//           >
//             No pending requests
//           </motion.p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {doctors.map((doctor) => {
//               const isDisabled = doctor.isDeleted; // تعديل الشرط: الأزرار هتتعطل بس لو الطبيب محذوف

//               return (
//                 <motion.div
//                   key={doctor._id}
//                   className="bg-white p-6 rounded-2xl shadow-lg flex justify-between items-center border border-gray-200"
//                   variants={childVariants}
//                   whileHover={{
//                     scale: 1.05,
//                     boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
//                   }}
//                 >
//                   <div className="text-left">
//                     <p className="text-gray-800">
//                       <strong>Name:</strong> {doctor.fullName}
//                     </p>
//                     <p className="text-gray-600">
//                       <strong>Email:</strong> {doctor.email}
//                     </p>
//                     <p className="text-gray-600">
//                       <strong>Phone:</strong> {doctor.phone}
//                     </p>
//                     <p className="text-gray-600">
//                       <strong>Job Number:</strong> {doctor.jobNumber}
//                     </p>
//                     <p className="text-gray-600">
//                       <strong>Specialization:</strong> {doctor.specialization}
//                     </p>
//                     <p
//                       className={getStatusColor(
//                         doctor.status,
//                         doctor.isDeleted
//                       )}
//                     >
//                       <strong>Status:</strong>{" "}
//                       {doctor.isDeleted
//                         ? "Deleted"
//                         : doctor.status.charAt(0).toUpperCase() +
//                           doctor.status.slice(1)}
//                     </p>
//                   </div>
//                   <div className="flex space-x-3">
//                     {doctor.isDeleted ? (
//                       <motion.button
//                         onClick={() => handleRestore(doctor._id)}
//                         className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition-all duration-300"
//                         aria-label="Restore doctor"
//                         variants={iconVariants}
//                         animate="animate"
//                       >
//                         <RotateCcw className="w-5 h-5" />
//                       </motion.button>
//                     ) : (
//                       <>
//                         <motion.button
//                           onClick={() => handleAction(doctor._id, "approve")}
//                           className={`p-2 rounded-full transition-all duration-300 ${
//                             isDisabled
//                               ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                               : "bg-green-500 hover:bg-green-600 text-white"
//                           }`}
//                           aria-label="Approve doctor"
//                           variants={iconVariants}
//                           animate="animate"
//                           disabled={isDisabled}
//                         >
//                           <Check className="w-5 h-5" />
//                         </motion.button>
//                         <motion.button
//                           onClick={() => handleAction(doctor._id, "reject")}
//                           className={`p-2 rounded-full transition-all duration-300 ${
//                             isDisabled
//                               ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                               : "bg-red-500 hover:bg-red-600 text-white"
//                           }`}
//                           aria-label="Reject doctor"
//                           variants={iconVariants}
//                           animate="animate"
//                           disabled={isDisabled}
//                         >
//                           <X className="w-5 h-5" />
//                         </motion.button>
//                         <motion.button
//                           onClick={() => openEditModal(doctor)}
//                           className={`p-2 rounded-full transition-all duration-300 ${
//                             isDisabled
//                               ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                               : "bg-yellow-500 hover:bg-yellow-600 text-white"
//                           }`}
//                           aria-label="Edit doctor"
//                           variants={iconVariants}
//                           animate="animate"
//                           disabled={isDisabled}
//                         >
//                           <Edit className="w-5 h-5" />
//                         </motion.button>
//                         <motion.button
//                           onClick={() => handleSoftDelete(doctor._id)}
//                           className={`p-2 rounded-full transition-all duration-300 ${
//                             isDisabled
//                               ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                               : "bg-gray-500 hover:bg-gray-600 text-white"
//                           }`}
//                           aria-label="Delete doctor"
//                           variants={iconVariants}
//                           animate="animate"
//                           disabled={isDisabled}
//                         >
//                           <Trash className="w-5 h-5" />
//                         </motion.button>
//                       </>
//                     )}
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         )}

//         {showModal && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg"
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               <h3 className="text-2xl font-bold text-green-800 mb-6 text-left">
//                 {isEditMode ? "Edit Doctor Details" : "Add New Doctor"}
//               </h3>
//               <form
//                 onSubmit={isEditMode ? handleUpdateDoctor : handleAddDoctor}
//               >
//                 <div className="space-y-5">
//                   <div>
//                     <label className="block text-gray-700 text-left">
//                       Full Name
//                     </label>
//                     <input
//                       type="text"
//                       name="fullName"
//                       value={formData.fullName}
//                       onChange={handleInputChange}
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-700 text-left">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
//                       required
//                     />
//                   </div>
//                   {!isEditMode && (
//                     <div>
//                       <label className="block text-gray-700 text-left">
//                         Password
//                       </label>
//                       <input
//                         type="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleInputChange}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
//                         required
//                       />
//                     </div>
//                   )}
//                   <div>
//                     <label className="block text-gray-700 text-left">
//                       Phone
//                     </label>
//                     <input
//                       type="text"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleInputChange}
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-700 text-left">
//                       Job Number
//                     </label>
//                     <input
//                       type="text"
//                       name="jobNumber"
//                       value={formData.jobNumber}
//                       onChange={handleInputChange}
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-700 text-left">
//                       Specialization
//                     </label>
//                     <input
//                       type="text"
//                       name="specialization"
//                       value={formData.specialization}
//                       onChange={handleInputChange}
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="flex justify-between mt-8">
//                   <motion.button
//                     type="button"
//                     onClick={closeModal}
//                     className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-full transition-all duration-300"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Cancel
//                   </motion.button>
//                   <motion.button
//                     type="submit"
//                     className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition-all duration-300"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     {isEditMode ? "Save Changes" : "Add Doctor"}
//                   </motion.button>
//                 </div>
//               </form>
//             </motion.div>
//           </motion.div>
//         )}
//       </div>
//     </motion.div>
//   );
// };

// export default DoctorApproval;















// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { Plus, Check, X, Edit, Trash, RotateCcw, Search } from "lucide-react";
// import axios from "axios";

// const DoctorApproval = () => {
//   const [doctors, setDoctors] = useState([]);
//   const [filteredDoctors, setFilteredDoctors] = useState([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [showModal, setShowModal] = useState(false);
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [currentDoctorId, setCurrentDoctorId] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filterStatus, setFilterStatus] = useState("all");
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     phone: "",
//     jobNumber: "",
//     specialization: "",
//   });
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const fetchPendingDoctors = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get(
//           "http://localhost:5000/api/doctors/pending",
//           {
//             withCredentials: true,
//           }
//         );
//         setDoctors(response.data);
//         setFilteredDoctors(response.data);
//       } catch (err) {
//         setError("Failed to fetch doctor requests. Please try again later.");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPendingDoctors();
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { root: null, rootMargin: "0px", threshold: 0.1 }
//     );
//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }
//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     // Filter doctors based on search term and status
//     const results = doctors.filter((doctor) => {
//       const matchesSearch =
//         doctor.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         doctor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase());

//       const matchesStatus =
//         filterStatus === "all" ||
//         (filterStatus === "deleted" && doctor.isDeleted) ||
//         (!doctor.isDeleted && doctor.status === filterStatus);

//       return matchesSearch && matchesStatus;
//     });
//     setFilteredDoctors(results);
//   }, [searchTerm, filterStatus, doctors]);

//   const handleAction = async (doctorId, action) => {
//     try {
//       await axios.post(
//         `http://localhost:5000/api/doctors/${action}/${doctorId}`,
//         {},
//         { withCredentials: true }
//       );
//       setDoctors(
//         doctors.map((doctor) =>
//           doctor._id === doctorId
//             ? {
//                 ...doctor,
//                 status: action === "approve" ? "approved" : "rejected",
//               }
//             : doctor
//         )
//       );

//       // Toast notification instead of alert
//       const toastMessage =
//         action === "approve"
//           ? "Doctor request approved successfully"
//           : "Doctor request rejected successfully";
//       showToast(toastMessage, "success");
//     } catch (err) {
//       showToast("An error occurred while processing the request", "error");
//       console.error(err);
//     }
//   };

//   const handleAddDoctor = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/doctors/add",
//         formData,
//         {
//           withCredentials: true,
//         }
//       );
//       const newDoctor = response.data.doctor;
//       setDoctors([
//         ...doctors,
//         { ...newDoctor, status: "pending", isDeleted: false },
//       ]);
//       showToast("Doctor added successfully", "success");
//       closeModal();
//     } catch (err) {
//       showToast(err.response?.data?.message || "Failed to add doctor", "error");
//       console.error(err);
//     }
//   };

//   const handleUpdateDoctor = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(
//         `http://localhost:5000/api/doctors/update/${currentDoctorId}`,
//         formData,
//         { withCredentials: true }
//       );
//       setDoctors(
//         doctors.map((doctor) =>
//           doctor._id === currentDoctorId ? { ...doctor, ...formData } : doctor
//         )
//       );
//       showToast("Doctor details updated successfully", "success");
//       closeModal();
//     } catch (err) {
//       showToast(
//         err.response?.data?.message || "Failed to update doctor details",
//         "error"
//       );
//       console.error(err);
//     }
//   };

//   const handleSoftDelete = async (doctorId) => {
//     if (window.confirm("Are you sure you want to delete this doctor?")) {
//       try {
//         await axios.delete(
//           `http://localhost:5000/api/doctors/delete/${doctorId}`,
//           {
//             withCredentials: true,
//           }
//         );
//         setDoctors(
//           doctors.map((doctor) =>
//             doctor._id === doctorId ? { ...doctor, isDeleted: true } : doctor
//           )
//         );
//         showToast("Doctor deleted successfully", "success");
//       } catch (err) {
//         showToast("Failed to delete doctor", "error");
//         console.error(err);
//       }
//     }
//   };

//   const handleRestore = async (doctorId) => {
//     if (window.confirm("Are you sure you want to restore this doctor?")) {
//       try {
//         await axios.post(
//           `http://localhost:5000/api/doctors/restore/${doctorId}`,
//           {},
//           { withCredentials: true }
//         );
//         setDoctors(
//           doctors.map((doctor) =>
//             doctor._id === doctorId
//               ? { ...doctor, isDeleted: false, status: "pending" }
//               : doctor
//           )
//         );
//         showToast("Doctor restored successfully", "success");
//       } catch (err) {
//         showToast("Failed to restore doctor", "error");
//         console.error(err);
//       }
//     }
//   };

//   // Simple toast implementation - in production use a proper toast library
//   const showToast = (message, type = "info") => {
//     const toast = document.createElement("div");
//     toast.className = `fixed bottom-4 right-4 py-3 px-6 rounded-lg shadow-lg z-50 ${
//       type === "success"
//         ? "bg-green-500 text-white"
//         : type === "error"
//         ? "bg-red-500 text-white"
//         : "bg-blue-500 text-white"
//     }`;
//     toast.innerText = message;
//     document.body.appendChild(toast);

//     setTimeout(() => {
//       toast.classList.add("opacity-0", "transition-opacity", "duration-500");
//       setTimeout(() => document.body.removeChild(toast), 500);
//     }, 3000);
//   };

//   const openAddModal = () => {
//     setIsEditMode(false);
//     setFormData({
//       fullName: "",
//       email: "",
//       password: "",
//       phone: "",
//       jobNumber: "",
//       specialization: "",
//     });
//     setShowModal(true);
//   };

//   const openEditModal = (doctor) => {
//     setIsEditMode(true);
//     setCurrentDoctorId(doctor._id);
//     setFormData({
//       fullName: doctor.fullName,
//       email: doctor.email,
//       password: "",
//       phone: doctor.phone,
//       jobNumber: doctor.jobNumber,
//       specialization: doctor.specialization,
//     });
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setCurrentDoctorId(null);
//     setFormData({
//       fullName: "",
//       email: "",
//       password: "",
//       phone: "",
//       jobNumber: "",
//       specialization: "",
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const sectionVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, staggerChildren: 0.2 },
//     },
//   };

//   const childVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   };

//   const getStatusColor = (status, isDeleted) => {
//     if (isDeleted) return "text-gray-500";
//     switch (status) {
//       case "approved":
//         return "text-green-600";
//       case "rejected":
//         return "text-red-600";
//       case "pending":
//       default:
//         return "text-yellow-600";
//     }
//   };

//   const getStatusBadge = (status, isDeleted) => {
//     if (isDeleted) {
//       return (
//         <span className="px-2 py-1 text-xs rounded-full bg-gray-200 text-gray-700">
//           Deleted
//         </span>
//       );
//     }

//     switch (status) {
//       case "approved":
//         return (
//           <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
//             Approved
//           </span>
//         );
//       case "rejected":
//         return (
//           <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">
//             Rejected
//           </span>
//         );
//       case "pending":
//       default:
//         return (
//           <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
//             Pending
//           </span>
//         );
//     }
//   };

//   return (
//     <motion.div
//       ref={sectionRef}
//       className="font-sans text-gray-800 min-h-screen bg-gray-50 py-10 px-4 md:px-6 lg:py-20"
//       initial="hidden"
//       animate={isVisible ? "visible" : "hidden"}
//       variants={sectionVariants}
//     >
//       <div className="container mx-auto max-w-6xl">
//         <motion.div
//           className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-16"
//           variants={childVariants}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4 md:mb-0">
//             Doctor Approval Requests
//           </h2>
//           <motion.button
//             onClick={openAddModal}
//             className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-300 flex items-center"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Plus className="w-5 h-5 mr-2" />
//             Add New Doctor
//           </motion.button>
//         </motion.div>

//         {/* Search and Filter Bar */}
//         <motion.div
//           className="mb-8 p-4 bg-white rounded-xl shadow-md flex flex-col md:flex-row gap-4"
//           variants={childVariants}
//         >
//           <div className="relative flex-grow">
//             <input
//               type="text"
//               placeholder="Search for a doctor..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
//             />
//             <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
//           </div>
//           <select
//             value={filterStatus}
//             onChange={(e) => setFilterStatus(e.target.value)}
//             className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none bg-white"
//           >
//             <option value="all">All Statuses</option>
//             <option value="pending">Pending</option>
//             <option value="approved">Approved</option>
//             <option value="rejected">Rejected</option>
//             <option value="deleted">Deleted</option>
//           </select>
//         </motion.div>

//         {error && (
//           <motion.div
//             className="text-white text-center bg-red-500 p-4 rounded-lg mb-8"
//             variants={childVariants}
//           >
//             {error}
//           </motion.div>
//         )}

//         {loading ? (
//           <motion.div
//             className="flex justify-center items-center h-64"
//             variants={childVariants}
//           >
//             <div className="w-16 h-16 border-t-4 border-green-500 border-solid rounded-full animate-spin"></div>
//           </motion.div>
//         ) : filteredDoctors.length === 0 ? (
//           <motion.div
//             className="text-center py-16 bg-white rounded-xl shadow-md"
//             variants={childVariants}
//           >
//             <p className="text-gray-600 text-lg">
//               No matching doctor requests found
//             </p>
//           </motion.div>
//         ) : (
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {filteredDoctors.map((doctor) => (
//               <motion.div
//                 key={doctor._id}
//                 className="bg-white p-6 rounded-xl shadow-md border-l-4 hover:shadow-lg transition-all duration-300"
//                 style={{
//                   borderLeftColor: doctor.isDeleted
//                     ? "#9CA3AF"
//                     : doctor.status === "approved"
//                     ? "#10B981"
//                     : doctor.status === "rejected"
//                     ? "#EF4444"
//                     : "#F59E0B",
//                 }}
//                 variants={childVariants}
//               >
//                 <div className="flex justify-between mb-4">
//                   <h3 className="text-xl font-semibold text-gray-800">
//                     {doctor.fullName}
//                   </h3>
//                   {getStatusBadge(doctor.status, doctor.isDeleted)}
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mb-6">
//                   <div>
//                     <p className="text-sm text-gray-500">Email</p>
//                     <p className="text-gray-700">{doctor.email}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Phone</p>
//                     <p className="text-gray-700">{doctor.phone}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Job Number</p>
//                     <p className="text-gray-700">{doctor.jobNumber}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Specialization</p>
//                     <p className="text-gray-700">{doctor.specialization}</p>
//                   </div>
//                 </div>

//                 <div className="flex flex-wrap justify-end gap-2 mt-4">
//                   {doctor.isDeleted ? (
//                     <motion.button
//                       onClick={() => handleRestore(doctor._id)}
//                       className="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm transition-all duration-300"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <RotateCcw className="w-4 h-4 mr-1" />
//                       Restore
//                     </motion.button>
//                   ) : (
//                     <>
//                       {doctor.status === "pending" && (
//                         <>
//                           <motion.button
//                             onClick={() => handleAction(doctor._id, "approve")}
//                             className="flex items-center bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-lg text-sm transition-all duration-300"
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                           >
//                             <Check className="w-4 h-4 mr-1" />
//                             Approve
//                           </motion.button>
//                           <motion.button
//                             onClick={() => handleAction(doctor._id, "reject")}
//                             className="flex items-center bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm transition-all duration-300"
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                           >
//                             <X className="w-4 h-4 mr-1" />
//                             Reject
//                           </motion.button>
//                         </>
//                       )}
//                       <motion.button
//                         onClick={() => openEditModal(doctor)}
//                         className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1.5 rounded-lg text-sm transition-all duration-300"
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         <Edit className="w-4 h-4 mr-1" />
//                         Edit
//                       </motion.button>
//                       {/* Fixed: Allow delete regardless of status */}
//                       <motion.button
//                         onClick={() => handleSoftDelete(doctor._id)}
//                         className="flex items-center bg-gray-500 hover:bg-gray-600 text-white px-3 py-1.5 rounded-lg text-sm transition-all duration-300"
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         <Trash className="w-4 h-4 mr-1" />
//                         Delete
//                       </motion.button>
//                     </>
//                   )}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         )}

//         {/* Modal for Adding/Editing Doctors */}
//         {showModal && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//             <motion.div
//               className="bg-white p-6 md:p-8 rounded-xl shadow-2xl w-full max-w-lg"
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               <h3 className="text-2xl font-bold text-green-800 mb-6">
//                 {isEditMode ? "Edit Doctor Details" : "Add New Doctor"}
//               </h3>
//               <form
//                 onSubmit={isEditMode ? handleUpdateDoctor : handleAddDoctor}
//                 className="space-y-5"
//               >
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="md:col-span-2">
//                     <label className="block text-gray-700 mb-1">
//                       Full Name
//                     </label>
//                     <input
//                       type="text"
//                       name="fullName"
//                       value={formData.fullName}
//                       onChange={handleInputChange}
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
//                       required
//                     />
//                   </div>
//                   <div className="md:col-span-2">
//                     <label className="block text-gray-700 mb-1">
//                       Email Address
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
//                       required
//                     />
//                   </div>
//                   {!isEditMode && (
//                     <div className="md:col-span-2">
//                       <label className="block text-gray-700 mb-1">
//                         Password
//                       </label>
//                       <input
//                         type="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleInputChange}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
//                         required
//                       />
//                     </div>
//                   )}
//                   <div>
//                     <label className="block text-gray-700 mb-1">
//                       Phone Number
//                     </label>
//                     <input
//                       type="text"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleInputChange}
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-700 mb-1">
//                       Job Number
//                     </label>
//                     <input
//                       type="text"
//                       name="jobNumber"
//                       value={formData.jobNumber}
//                       onChange={handleInputChange}
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
//                       required
//                     />
//                   </div>
//                   <div className="md:col-span-2">
//                     <label className="block text-gray-700 mb-1">
//                       Specialization
//                     </label>
//                     <input
//                       type="text"
//                       name="specialization"
//                       value={formData.specialization}
//                       onChange={handleInputChange}
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="flex justify-between mt-8">
//                   <motion.button
//                     type="button"
//                     onClick={closeModal}
//                     className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-5 py-2 rounded-lg transition-all duration-300"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Cancel
//                   </motion.button>
//                   <motion.button
//                     type="submit"
//                     className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg transition-all duration-300"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     {isEditMode ? "Save Changes" : "Add Doctor"}
//                   </motion.button>
//                 </div>
//               </form>
//             </motion.div>
//           </div>
//         )}
//       </div>
//     </motion.div>
//   );
// };

// export default DoctorApproval;





import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Plus, Check, X, Edit, Trash, RotateCcw, Search, ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";

const DoctorApproval = () => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentDoctorId, setCurrentDoctorId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    jobNumber: "",
    specialization: "",
  });
  const [currentPage, setCurrentPage] = useState(1); // الصفحة الحالية
  const [doctorsPerPage] = useState(10); // عدد الأطباء في كل صفحة
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchPendingDoctors = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "http://localhost:5000/api/doctors/pending",
          {
            withCredentials: true,
          }
        );
        setDoctors(response.data);
        setFilteredDoctors(response.data);
      } catch (err) {
        setError("Failed to fetch doctor requests. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPendingDoctors();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Filter doctors based on search term and status
    const results = doctors.filter((doctor) => {
      const matchesSearch =
        doctor.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        filterStatus === "all" ||
        (filterStatus === "deleted" && doctor.isDeleted) ||
        (!doctor.isDeleted && doctor.status === filterStatus);

      return matchesSearch && matchesStatus;
    });
    setFilteredDoctors(results);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchTerm, filterStatus, doctors]);

  const handleAction = async (doctorId, action) => {
    try {
      await axios.post(
        `http://localhost:5000/api/doctors/${action}/${doctorId}`,
        {},
        { withCredentials: true }
      );
      setDoctors(
        doctors.map((doctor) =>
          doctor._id === doctorId
            ? {
                ...doctor,
                status: action === "approve" ? "approved" : "rejected",
              }
            : doctor
        )
      );
      
      const toastMessage = action === "approve" 
        ? "Doctor request approved successfully"
        : "Doctor request rejected successfully";
      showToast(toastMessage, "success");
    } catch (err) {
      showToast("An error occurred while processing the request", "error");
      console.error(err);    }
  };

  const handleAddDoctor = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/doctors/add",
        formData,
        {
          withCredentials: true,
        }
      );
      const newDoctor = response.data.doctor;
      setDoctors([
        ...doctors,
        { ...newDoctor, status: "pending", isDeleted: false },
      ]);
      showToast("Doctor added successfully", "success");
      closeModal();
    } catch (err) {
      showToast(err.response?.data?.message || "Failed to add doctor", "error");
      console.error(err);
    }
  };

  const handleUpdateDoctor = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:5000/api/doctors/update/${currentDoctorId}`,
        formData,
        { withCredentials: true }
      );
      setDoctors(
        doctors.map((doctor) =>
          doctor._id === currentDoctorId ? { ...doctor, ...formData } : doctor
        )
      );
      showToast("Doctor details updated successfully", "success");
      closeModal();
    } catch (err) {
      showToast(err.response?.data?.message || "Failed to update doctor details", "error");
      console.error(err);
    }
  };

  const handleSoftDelete = async (doctorId) => {
    if (window.confirm("Are you sure you want to delete this doctor?")) {
      try {
        await axios.delete(
          `http://localhost:5000/api/doctors/delete/${doctorId}`,
          {
            withCredentials: true,
          }
        );
        setDoctors(
          doctors.map((doctor) =>
            doctor._id === doctorId ? { ...doctor, isDeleted: true } : doctor
          )
        );
        showToast("Doctor deleted successfully", "success");
      } catch (err) {
        showToast("Failed to delete doctor", "error");
        console.error(err);
      }
    }
  };

  const handleRestore = async (doctorId) => {
    if (window.confirm("Are you sure you want to restore this doctor?")) {
      try {
        await axios.post(
          `http://localhost:5000/api/doctors/restore/${doctorId}`,
          {},
          { withCredentials: true }
        );
        setDoctors(
          doctors.map((doctor) =>
            doctor._id === doctorId
              ? { ...doctor, isDeleted: false, status: "pending" }
              : doctor
          )
        );
        showToast("Doctor restored successfully", "success");
      } catch (err) {
        showToast("Failed to restore doctor", "error");
        console.error(err);
      }
    }
  };

  const showToast = (message, type = "info") => {
    const toast = document.createElement("div");
    toast.className = `fixed bottom-4 right-4 py-3 px-6 rounded-lg shadow-lg z-50 ${
      type === "success" 
        ? "bg-green-500 text-white" 
        : type === "error" 
          ? "bg-red-500 text-white" 
          : "bg-blue-500 text-white"
    }`;
    toast.innerText = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.classList.add("opacity-0", "transition-opacity", "duration-500");
      setTimeout(() => document.body.removeChild(toast), 500);
    }, 3000);
  };

  const openAddModal = () => {
    setIsEditMode(false);
    setFormData({
      fullName: "",
      email: "",
      password: "",
      phone: "",
      jobNumber: "",
      specialization: "",
    });
    setShowModal(true);
  };

  const openEditModal = (doctor) => {
    setIsEditMode(true);
    setCurrentDoctorId(doctor._id);
    setFormData({
      fullName: doctor.fullName,
      email: doctor.email,
      password: "",
      phone: doctor.phone,
      jobNumber: doctor.jobNumber,
      specialization: doctor.specialization,
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentDoctorId(null);
    setFormData({
      fullName: "",
      email: "",
      password: "",
      phone: "",
      jobNumber: "",
      specialization: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const getStatusColor = (status, isDeleted) => {
    if (isDeleted) return "text-gray-500";
    switch (status) {
      case "approved":
        return "text-green-600";
      case "rejected":
        return "text-red-600";
      case "pending":
      default:
        return "text-yellow-600";
    }
  };

  const getStatusBadge = (status, isDeleted) => {
    if (isDeleted) {
      return <span className="px-2 py-1 text-xs rounded-full bg-gray-200 text-gray-700">Deleted</span>;
    }
    
    switch (status) {
      case "approved":
        return <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Approved</span>;
      case "rejected":
        return <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">Rejected</span>;
      case "pending":
      default:
        return <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">Pending</span>;
    }
  };

  // Pagination logic
  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = filteredDoctors.slice(indexOfFirstDoctor, indexOfLastDoctor);
  const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top when changing pages
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Generate page numbers to display
  const pageNumbers = [];
  const maxPagesToShow = 5; // Maximum number of page buttons to show at once
  const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <motion.div
      ref={sectionRef}
      className="font-sans text-gray-800 min-h-screen bg-gray-50 py-10 px-4 md:px-6 lg:py-20"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-16"
          variants={childVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4 md:mb-0">
            Doctor Approval Requests
          </h2>
          <motion.button
            onClick={openAddModal}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-300 flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plus className="w-5 h-5 mr-2" />
            Add New Doctor
          </motion.button>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          className="mb-8 p-4 bg-white rounded-xl shadow-md flex flex-col md:flex-row gap-4"
          variants={childVariants}
        >
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search for a doctor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none bg-white"
          >
            <option value="all">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
            <option value="deleted">Deleted</option>
          </select>
        </motion.div>

        {error && (
          <motion.div
            className="text-white text-center bg-red-500 p-4 rounded-lg mb-8"
            variants={childVariants}
          >
            {error}
          </motion.div>
        )}

        {loading ? (
          <motion.div 
            className="flex justify-center items-center h-64"
            variants={childVariants}
          >
            <div className="w-16 h-16 border-t-4 border-green-500 border-solid rounded-full animate-spin"></div>
          </motion.div>
        ) : filteredDoctors.length === 0 ? (
          <motion.div
            className="text-center py-16 bg-white rounded-xl shadow-md"
            variants={childVariants}
          >
            <p className="text-gray-600 text-lg">No matching doctor requests found</p>
          </motion.div>
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {currentDoctors.map((doctor) => (
                <motion.div
                  key={doctor._id}
                  className="bg-white p-6 rounded-xl shadow-md border-l-4 hover:shadow-lg transition-all duration-300"
                  style={{ 
                    borderLeftColor: doctor.isDeleted 
                      ? '#9CA3AF' 
                      : doctor.status === 'approved' 
                        ? '#10B981' 
                        : doctor.status === 'rejected' 
                          ? '#EF4444' 
                          : '#F59E0B'
                  }}
                  variants={childVariants}
                >
                  <div className="flex justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {doctor.fullName}
                    </h3>
                    {getStatusBadge(doctor.status, doctor.isDeleted)}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mb-6">
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-gray-700">{doctor.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="text-gray-700">{doctor.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Job Number</p>
                      <p className="text-gray-700">{doctor.jobNumber}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Specialization</p>
                      <p className="text-gray-700">{doctor.specialization}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap justify-end gap-2 mt-4">
                    {doctor.isDeleted ? (
                      <motion.button
                        onClick={() => handleRestore(doctor._id)}
                        className="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <RotateCcw className="w-4 h-4 mr-1" />
                        Restore
                      </motion.button>
                    ) : (
                      <>
                        {doctor.status === "pending" && (
                          <>
                            <motion.button
                              onClick={() => handleAction(doctor._id, "approve")}
                              className="flex items-center bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-lg text-sm transition-all duration-300"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Check className="w-4 h-4 mr-1" />
                              Approve
                            </motion.button>
                            <motion.button
                              onClick={() => handleAction(doctor._id, "reject")}
                              className="flex items-center bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm transition-all duration-300"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <X className="w-4 h-4 mr-1" />
                              Reject
                            </motion.button>
                          </>
                        )}
                        <motion.button
                          onClick={() => openEditModal(doctor)}
                          className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1.5 rounded-lg text-sm transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Edit className="w-4 h-4 mr-1" />
                          Edit
                        </motion.button>
                        <motion.button
                          onClick={() => handleSoftDelete(doctor._id)}
                          className="flex items-center bg-gray-500 hover:bg-gray-600 text-white px-3 py-1.5 rounded-lg text-sm transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Trash className="w-4 h-4 mr-1" />
                          Delete
                        </motion.button>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <motion.div
                className="flex flex-col items-center mt-8"
                variants={childVariants}
              >
                <div className="flex items-center space-x-2 mb-4">
                  <motion.button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-lg flex items-center ${
                      currentPage === 1
                        ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                        : "bg-green-500 hover:bg-green-600 text-white"
                    }`}
                    whileHover={{ scale: currentPage === 1 ? 1 : 1.05 }}
                    whileTap={{ scale: currentPage === 1 ? 1 : 0.95 }}
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Previous
                  </motion.button>

                  {startPage > 1 && (
                    <>
                      <motion.button
                        onClick={() => paginate(1)}
                        className="p-2 px-4 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        1
                      </motion.button>
                      {startPage > 2 && <span className="p-2">...</span>}
                    </>
                  )}

                  {pageNumbers.map((number) => (
                    <motion.button
                      key={number}
                      onClick={() => paginate(number)}
                      className={`p-2 px-4 rounded-lg ${
                        currentPage === number
                          ? "bg-green-500 text-white"
                          : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {number}
                    </motion.button>
                  ))}

                  {endPage < totalPages && (
                    <>
                      {endPage < totalPages - 1 && <span className="p-2">...</span>}
                      <motion.button
                        onClick={() => paginate(totalPages)}
                        className="p-2 px-4 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {totalPages}
                      </motion.button>
                    </>
                  )}

                  <motion.button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded-lg flex items-center ${
                      currentPage === totalPages
                        ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                        : "bg-green-500 hover:bg-green-600 text-white"
                    }`}
                    whileHover={{ scale: currentPage === totalPages ? 1 : 1.05 }}
                    whileTap={{ scale: currentPage === totalPages ? 1 : 0.95 }}
                  >
                    Next
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>

                <p className="text-gray-600 text-sm">
                  Showing {indexOfFirstDoctor + 1} to{" "}
                  {Math.min(indexOfLastDoctor, filteredDoctors.length)} of{" "}
                  {filteredDoctors.length} doctors
                </p>
              </motion.div>
            )}
          </>
        )}

        {/* Modal for Adding/Editing Doctors */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div
              className="bg-white p-6 md:p-8 rounded-xl shadow-2xl w-full max-w-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-green-800 mb-6">
                {isEditMode ? "Edit Doctor Details" : "Add New Doctor"}
              </h3>
              <form
                onSubmit={isEditMode ? handleUpdateDoctor : handleAddDoctor}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                      required
                    />
                  </div>
                  {!isEditMode && (
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 mb-1">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                        required
                      />
                    </div>
                  )}
                  <div>
                    <label className="block text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">
                      Job Number
                    </label>
                    <input
                      type="text"
                      name="jobNumber"
                      value={formData.jobNumber}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-1">
                      Specialization
                    </label>
                    <input
                      type="text"
                      name="specialization"
                      value={formData.specialization}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-between mt-8">
                  <motion.button
                    type="button"
                    onClick={closeModal}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-5 py-2 rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isEditMode ? "Save Changes" : "Add Doctor"}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default DoctorApproval;