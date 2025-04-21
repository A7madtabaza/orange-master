// import React, { useState } from "react";
// import axios from "axios";

// function AddMedicine() {
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     image: null,
//   });

//   const handleChange = (e) => {
//     if (e.target.name === "image") {
//       setFormData({ ...formData, image: e.target.files[0] });
//     } else {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("description", formData.description);
//     data.append("price", formData.price);
//     data.append("image", formData.image);

//     try {
//       await axios.post("http://localhost:5000/api/medicines/add", data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       alert("تم إضافة الدواء بنجاح");
//       setFormData({ name: "", description: "", price: "", image: null });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-6">إضافة دواء</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block mb-1">اسم الدواء</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />
//         </div>
//         <div>
//           <label className="block mb-1">الوصف</label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           ></textarea>
//         </div>
//         <div>
//           <label className="block mb-1">السعر</label>
//           <input
//             type="number"
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />
//         </div>
//         <div>
//           <label className="block mb-1">صورة الدواء</label>
//           <input
//             type="file"
//             name="image"
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           إضافة
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AddMedicine;
// import React, { useState } from "react";
// import axios from "axios";

// function AddMedicine() {
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     image: null,
//     category: "General",
//     discount: 0,
//     dosage: "",
//     inStock: true,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, files, checked } = e.target;
//     if (type === "file") {
//       setFormData({ ...formData, image: files[0] });
//     } else if (type === "checkbox") {
//       setFormData({ ...formData, inStock: checked });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("description", formData.description);
//     data.append("price", Number(formData.price));
//     data.append("image", formData.image);
//     data.append("category", formData.category);
//     data.append("discount", Number(formData.discount) / 100); // Convert to decimal
//     data.append("dosage", formData.dosage);
//     data.append("inStock", formData.inStock);

//     try {
//       await axios.post("http://localhost:5000/api/medicines/add", data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       alert("تم إضافة الدواء بنجاح");
//       setFormData({
//         name: "",
//         description: "",
//         price: "",
//         image: null,
//         category: "General",
//         discount: 0,
//         dosage: "",
//         inStock: true,
//       });
//     } catch (error) {
//       console.error("Error adding medicine:", error);
//       if (error.response) {
//         console.log("Response data:", error.response.data);
//         console.log("Response status:", error.response.status);
//         console.log("Response headers:", error.response.headers);
//       }
//       alert(
//         "فشل إضافة الدواء: " + (error.response?.data?.message || error.message)
//       );
//     }
//   };

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-6">إضافة دواء</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block mb-1">اسم الدواء</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />
//         </div>
//         <div>
//           <label className="block mb-1">الوصف</label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           ></textarea>
//         </div>
//         <div>
//           <label className="block mb-1">السعر</label>
//           <input
//             type="number"
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//             min="0"
//           />
//         </div>
//         <div>
//           <label className="block mb-1">صورة الدواء</label>
//           <input
//             type="file"
//             name="image"
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//             accept="image/*"
//           />
//         </div>
//         <div>
//           <label className="block mb-1">الفئة</label>
//           <input
//             type="text"
//             name="category"
//             value={formData.category}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           />
//         </div>
//         <div>
//           <label className="block mb-1">الخصم (%)</label>
//           <input
//             type="number"
//             name="discount"
//             value={formData.discount}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             min="0"
//             max="100"
//             step="1"
//             placeholder="أدخل الخصم كنسبة مئوية (0-100)"
//           />
//         </div>
//         <div>
//           <label className="block mb-1">الجرعة</label>
//           <input
//             type="text"
//             name="dosage"
//             value={formData.dosage}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           />
//         </div>
//         <div>
//           <label className="block mb-1">متوفر في المخزون</label>
//           <input
//             type="checkbox"
//             name="inStock"
//             checked={formData.inStock}
//             onChange={handleChange}
//             className="p-2 border rounded"
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           إضافة
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AddMedicine;  




// src/components/AddMedicine.js
// import React, { useState } from "react";
// import axios from "axios";

// function AddMedicine() {
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     image: null,
//     category: "General",
//     discount: 0,
//     dosage: "",
//     inStock: true,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, files, checked } = e.target;
//     if (type === "file") {
//       setFormData({ ...formData, image: files[0] });
//     } else if (type === "checkbox") {
//       setFormData({ ...formData, inStock: checked });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // التحقق من السعر
//     const priceValue = parseFloat(formData.price);
//     if (isNaN(priceValue) || priceValue <= 0) {
//       alert("الرجاء إدخال سعر صالح (رقم موجب)");
//       return;
//     }

//     // التحقق من الخصم
//     const discountValue = parseFloat(formData.discount) || 0;
//     if (discountValue < 0 || discountValue > 100) {
//       alert("الخصم يجب أن يكون بين 0 و 100");
//       return;
//     }

//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("description", formData.description);
//     data.append("price", priceValue); // إرسال السعر كرقم
//     data.append("image", formData.image);
//     data.append("category", formData.category);
//     data.append("discount", discountValue / 100); // تحويل الخصم إلى نسبة (0-1)
//     data.append("dosage", formData.dosage);
//     data.append("inStock", formData.inStock.toString()); // إرسال Boolean كنص

//     try {
//       await axios.post("http://localhost:5000/api/medicines/add", data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       alert("تم إضافة الدواء بنجاح");
//       setFormData({
//         name: "",
//         description: "",
//         price: "",
//         image: null,
//         category: "General",
//         discount: 0,
//         dosage: "",
//         inStock: true,
//       });
//     } catch (error) {
//       console.error("Error adding medicine:", error);
//       if (error.response) {
//         console.log("Response data:", error.response.data);
//         console.log("Response status:", error.response.status);
//       }
//       alert(
//         "فشل إضافة الدواء: " + (error.response?.data?.message || error.message)
//       );
//     }
//   };

//   return (
//     <div className="p-6 max-w-lg mx-auto">
//       <h1 className="text-3xl font-bold mb-6">إضافة دواء</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block mb-1">اسم الدواء</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />
//         </div>
//         <div>
//           <label className="block mb-1">الوصف</label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           ></textarea>
//         </div>
//         <div>
//           <label className="block mb-1">السعر</label>
//           <input
//             type="number"
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//             min="0"
//             step="0.01" // السماح بالأرقام العشرية
//             placeholder="مثال: 8.75"
//           />
//         </div>
//         <div>
//           <label className="block mb-1">صورة الدواء</label>
//           <input
//             type="file"
//             name="image"
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//             accept="image/*"
//           />
//         </div>
//         <div>
//           <label className="block mb-1">الفئة</label>
//           <input
//             type="text"
//             name="category"
//             value={formData.category}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             placeholder="مثال: General"
//           />
//         </div>
//         <div>
//           <label className="block mb-1">الخصم (%)</label>
//           <input
//             type="number"
//             name="discount"
//             value={formData.discount}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             min="0"
//             max="100"
//             step="1"
//             placeholder="أدخل الخصم كنسبة مئوية (0-100)"
//           />
//         </div>
//         <div>
//           <label className="block mb-1">الجرعة</label>
//           <input
//             type="text"
//             name="dosage"
//             value={formData.dosage}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             placeholder="مثال: قرص واحد يوميًا"
//           />
//         </div>
//         <div>
//           <label className="block mb-1">متوفر في المخزون</label>
//           <input
//             type="checkbox"
//             name="inStock"
//             checked={formData.inStock}
//             onChange={handleChange}
//             className="p-2"
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           إضافة
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AddMedicine;



// import React, { useState } from "react";
// import axios from "axios";

// function AddMedicine() {
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     image: null,
//     category: "General",
//     discount: 0,
//     dosage: "",
//     inStock: true,
//     type: "Medicine",
//   });

//   const handleChange = (e) => {
//     const { name, value, type, files, checked } = e.target;
//     if (type === "file") {
//       setFormData({ ...formData, image: files[0] });
//     } else if (type === "checkbox") {
//       setFormData({ ...formData, inStock: checked });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // التحقق من السعر
//     const priceValue = parseFloat(formData.price);
//     if (isNaN(priceValue) || priceValue <= 0) {
//       alert("الرجاء إدخال سعر صالح (رقم موجب)");
//       return;
//     }

//     // التحقق من الخصم
//     const discountValue = parseFloat(formData.discount) || 0;
//     if (discountValue < 0 || discountValue > 100) {
//       alert("الخصم يجب أن يكون بين 0 و 100");
//       return;
//     }

//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("description", formData.description);
//     data.append("price", priceValue);
//     data.append("image", formData.image);
//     data.append("category", formData.category);
//     data.append("discount", discountValue / 100);
//     data.append("dosage", formData.dosage);
//     data.append("inStock", formData.inStock.toString());
//     data.append("type", formData.type);

//     try {
//       await axios.post("http://localhost:5000/api/medicines/add", data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       alert("تم إضافة العنصر بنجاح");
//       setFormData({
//         name: "",
//         description: "",
//         price: "",
//         image: null,
//         category: "General",
//         discount: 0,
//         dosage: "",
//         inStock: true,
//         type: "Medicine",
//       });
//     } catch (error) {
//       console.error("Error adding item:", error);
//       if (error.response) {
//         console.log("Response data:", error.response.data);
//         console.log("Response status:", error.response.status);
//       }
//       alert(
//         "فشل إضافة العنصر: " + (error.response?.data?.message || error.message)
//       );
//     }
//   };

//   return (
//     <div className="p-6 max-w-lg mx-auto">
//       <h1 className="text-3xl font-bold mb-6">إضافة دواء أو معدة طبية</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block mb-1">اسم العنصر</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />
//         </div>
//         <div>
//           <label className="block mb-1">الوصف</label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           ></textarea>
//         </div>
//         <div>
//           <label className="block mb-1">السعر</label>
//           <input
//             type="number"
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//             min="0"
//             step="0.01"
//             placeholder="مثال: 8.75"
//           />
//         </div>
//         <div>
//           <label className="block mb-1">صورة العنصر</label>
//           <input
//             type="file"
//             name="image"
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//             accept="image/*"
//           />
//         </div>
//         <div>
//           <label className="block mb-1">الفئة</label>
//           <input
//             type="text"
//             name="category"
//             value={formData.category}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             placeholder="مثال: General, Diagnostic, Mobility"
//           />
//         </div>
//         <div>
//           <label className="block mb-1">الخصم (%)</label>
//           <input
//             type="number"
//             name="discount"
//             value={formData.discount}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             min="0"
//             max="100"
//             step="1"
//             placeholder="أدخل الخصم كنسبة مئوية (0-100)"
//           />
//         </div>
//         <div>
//           <label className="block mb-1">الجرعة (للأدوية فقط)</label>
//           <input
//             type="text"
//             name="dosage"
//             value={formData.dosage}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             placeholder="مثال: قرص واحد يوميًا"
//             disabled={formData.type === "Medical Equipment"}
//           />
//         </div>
//         <div>
//           <label className="block mb-1">النوع</label>
//           <select
//             name="type"
//             value={formData.type}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           >
//             <option value="Medicine">دواء</option>
//             <option value="Medical Equipment">معدة طبية</option>
//           </select>
//         </div>
//         <div>
//           <label className="block mb-1">متوفر في المخزون</label>
//           <input
//             type="checkbox"
//             name="inStock"
//             checked={formData.inStock}
//             onChange={handleChange}
//             className="p-2"
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           إضافة
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AddMedicine;





// import React, { useState, useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import axios from "axios";

// function AddMedicine() {
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     image: null,
//     category: "General",
//     discount: 0,
//     dosage: "",
//     inStock: true,
//     type: "Medicine",
//   });
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

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

//   const handleChange = (e) => {
//     const { name, value, type, files, checked } = e.target;
//     if (type === "file") {
//       setFormData({ ...formData, image: files[0] });
//     } else if (type === "checkbox") {
//       setFormData({ ...formData, inStock: checked });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const priceValue = parseFloat(formData.price);
//     if (isNaN(priceValue) || priceValue <= 0) {
//       alert("Please enter a valid positive price");
//       return;
//     }
//     const discountValue = parseFloat(formData.discount) || 0;
//     if (discountValue < 0 || discountValue > 100) {
//       alert("Discount must be between 0 and 100");
//       return;
//     }

//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("description", formData.description);
//     data.append("price", priceValue);
//     data.append("image", formData.image);
//     data.append("category", formData.category);
//     data.append("discount", discountValue / 100);
//     data.append("dosage", formData.dosage);
//     data.append("inStock", formData.inStock.toString());
//     data.append("type", formData.type);

//     try {
//       await axios.post("http://localhost:5000/api/medicines/add", data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       alert("Item added successfully");
//       setFormData({
//         name: "",
//         description: "",
//         price: "",
//         image: null,
//         category: "General",
//         discount: 0,
//         dosage: "",
//         inStock: true,
//         type: "Medicine",
//       });
//     } catch (error) {
//       console.error("Error adding item:", error);
//       alert(
//         "Failed to add item: " +
//           (error.response?.data?.message || error.message)
//       );
//     }
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

//   return (
//     <motion.div
//       ref={sectionRef}
//       className="font-sans text-gray-800 min-h-screen bg-white py-20 px-6"
//       initial="hidden"
//       animate={isVisible ? "visible" : "hidden"}
//       variants={sectionVariants}
//     >
//       <div className="container mx-auto max-w-6xl">
//         <motion.h1
//           className="text-4xl font-bold text-green-800 mb-6 text-left"
//           variants={childVariants}
//         >
//           Add Medicine or Medical Equipment
//         </motion.h1>
//         <motion.form
//           onSubmit={handleSubmit}
//           className="space-y-6 bg-white p-8 rounded-2xl shadow-lg max-w-lg"
//           variants={childVariants}
//         >
//           <div>
//             <label className="block text-gray-700 mb-1 text-left">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 mb-1 text-left">
//               Description
//             </label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
//               required
//             ></textarea>
//           </div>
//           <div>
//             <label className="block text-gray-700 mb-1 text-left">Price</label>
//             <input
//               type="number"
//               name="price"
//               value={formData.price}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
//               required
//               min="0"
//               step="0.01"
//               placeholder="e.g., 8.75"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 mb-1 text-left">Image</label>
//             <input
//               type="file"
//               name="image"
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg"
//               required
//               accept="image/*"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 mb-1 text-left">
//               Category
//             </label>
//             <input
//               type="text"
//               name="category"
//               value={formData.category}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
//               placeholder="e.g., General, Diagnostic, Mobility"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 mb-1 text-left">
//               Discount (%)
//             </label>
//             <input
//               type="number"
//               name="discount"
//               value={formData.discount}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
//               min="0"
//               max="100"
//               step="1"
//               placeholder="Enter discount as percentage (0-100)"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 mb-1 text-left">
//               Dosage (for Medicines only)
//             </label>
//             <input
//               type="text"
//               name="dosage"
//               value={formData.dosage}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
//               placeholder="e.g., One tablet daily"
//               disabled={formData.type === "Medical Equipment"}
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 mb-1 text-left">Type</label>
//             <select
//               name="type"
//               value={formData.type}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
//             >
//               <option value="Medicine">Medicine</option>
//               <option value="Medical Equipment">Medical Equipment</option>
//             </select>
//           </div>
//           <div>
//             <label className="block text-gray-700 mb-1 text-left">
//               In Stock
//             </label>
//             <input
//               type="checkbox"
//               name="inStock"
//               checked={formData.inStock}
//               onChange={handleChange}
//               className="h-5 w-5 text-green-500"
//             />
//           </div>
//           <motion.button
//             type="submit"
//             className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition-all duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Add Item
//           </motion.button>
//         </motion.form>
//       </div>
//     </motion.div>
//   );
// }

// export default AddMedicine;




import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

function AddMedicine() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: null,
    category: "General",
    discount: 0,
    dosage: "",
    inStock: true,
    type: "Medicine",
  });
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;
    if (type === "file") {
      setFormData({ ...formData, image: files[0] });
    } else if (type === "checkbox") {
      setFormData({ ...formData, inStock: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const priceValue = parseFloat(formData.price);
    if (isNaN(priceValue) || priceValue <= 0) {
      alert("Please enter a valid positive price");
      return;
    }
    const discountValue = parseFloat(formData.discount) || 0;
    if (discountValue < 0 || discountValue > 100) {
      alert("Discount must be between 0 and 100");
      return;
    }

    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("price", priceValue);
    data.append("image", formData.image);
    data.append("category", formData.category);
    data.append("discount", discountValue / 100);
    data.append("dosage", formData.dosage);
    data.append("inStock", formData.inStock.toString());
    data.append("type", formData.type);

    try {
      await axios.post("http://localhost:5000/api/medicines/add", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Item added successfully");
      setFormData({
        name: "",
        description: "",
        price: "",
        image: null,
        category: "General",
        discount: 0,
        dosage: "",
        inStock: true,
        type: "Medicine",
      });
    } catch (error) {
      console.error("Error adding item:", error);
      alert(
        "Failed to add item: " +
          (error.response?.data?.message || error.message)
      );
    }
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

  return (
    <motion.div
      ref={sectionRef}
      className="font-sans text-gray-800 min-h-screen bg-white py-20 px-6"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={sectionVariants}
      dir="ltr" // Set direction to LTR for English content
    >
      <div className="container mx-100 max-w-6xl">
        <motion.h1
          className="text-4xl font-bold text-green-800 mb-6"
          variants={childVariants}
        >
          Add Medicine or Medical Equipment
        </motion.h1>
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-8 rounded-2xl shadow-lg max-w-lg"
          variants={childVariants}
        >
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
              min="0"
              step="0.01"
              placeholder="e.g., 8.75"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Image</label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
              accept="image/*"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="e.g., General, Diagnostic, Mobility"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Discount (%)</label>
            <input
              type="number"
              name="discount"
              value={formData.discount}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              min="0"
              max="100"
              step="1"
              placeholder="Enter discount as percentage (0-100)"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">
              Dosage (for Medicines only)
            </label>
            <input
              type="text"
              name="dosage"
              value={formData.dosage}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="e.g., One tablet daily"
              disabled={formData.type === "Medical Equipment"}
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            >
              <option value="Medicine">Medicine</option>
              <option value="Medical Equipment">Medical Equipment</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-1">In Stock</label>
            <input
              type="checkbox"
              name="inStock"
              checked={formData.inStock}
              onChange={handleChange}
              className="h-5 w-5 text-green-500"
            />
          </div>
          <motion.button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Add Item
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
}

export default AddMedicine;