// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // function MedicinesList() {
// //   const [medicines, setMedicines] = useState([]);

// //   useEffect(() => {
// //     axios
// //       .get("http://localhost:5000/api/medicines")
// //       .then((response) => setMedicines(response.data))
// //       .catch((error) => console.error(error));
// //   }, []);

// //   return (
// //     <div>
// //       <h1 className="text-3xl font-bold mb-6">قائمة الأدوية</h1>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// //         {medicines.map((medicine) => (
// //           <div
// //             key={medicine._id}
// //             className="bg-white shadow-lg rounded-lg overflow-hidden"
// //           >
// //             <img
// //               src={`http://localhost:5000${medicine.image}`}
// //               alt={medicine.name}
// //               className="w-full h-48 object-cover"
// //             />
// //             <div className="p-4">
// //               <h2 className="text-xl font-semibold">{medicine.name}</h2>
// //               <p className="text-gray-600">{medicine.description}</p>
// //               <p className="text-lg font-bold mt-2">{medicine.price} ريال</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default MedicinesList;
 


// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // function MedicinesList() {
// //   const [medicines, setMedicines] = useState([]);

// //   useEffect(() => {
// //     axios
// //       .get("http://localhost:5000/api/medicines")
// //       .then((response) => setMedicines(response.data))
// //       .catch((error) => console.error(error));
// //   }, []);

// //   return (
// //     <div className="p-6">
// //       <h1 className="text-3xl font-bold mb-6">قائمة الأدوية والمعدات الطبية</h1>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// //         {medicines.map((item) => (
// //           <div
// //             key={item._id}
// //             className="bg-white shadow-lg rounded-lg overflow-hidden"
// //           >
// //             <img
// //               src={`http://localhost:5000${item.image}`}
// //               alt={item.name}
// //               className="w-full h-48 object-cover"
// //             />
// //             <div className="p-4">
// //               <h2 className="text-xl font-semibold">{item.name}</h2>
// //               <p className="text-gray-600">{item.description}</p>
// //               <p className="text-lg font-bold mt-2">{item.price} ريال</p>
// //               <p className="text-sm text-gray-500">
// //                 النوع: {item.type === "Medicine" ? "دواء" : "معدة طبية"}
// //               </p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default MedicinesList;




// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function MedicinesList() {
//   const [medicines, setMedicines] = useState([]);
//   const [editItem, setEditItem] = useState(null);
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

//   // Fetch medicines
//   useEffect(() => {
//     fetchMedicines();
//   }, []);

//   const fetchMedicines = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/medicines");
//       setMedicines(response.data);
//     } catch (error) {
//       console.error("Error fetching medicines:", error);
//     }
//   };

//   // Handle edit
//   const handleEdit = (item) => {
//     setEditItem(item);
//     setFormData({
//       name: item.name,
//       description: item.description,
//       price: item.price,
//       image: null,
//       category: item.category,
//       discount: item.discount * 100, // Convert to percentage
//       dosage: item.dosage || "",
//       inStock: item.inStock,
//       type: item.type,
//     });
//   };

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

//   const handleUpdate = async (e) => {
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
//     if (formData.image) data.append("image", formData.image);
//     data.append("category", formData.category);
//     data.append("discount", discountValue / 100);
//     if (formData.type === "Medicine") data.append("dosage", formData.dosage);
//     data.append("inStock", formData.inStock.toString());
//     data.append("type", formData.type);

//     try {
//       await axios.put(
//         `http://localhost:5000/api/medicines/${editItem._id}`,
//         data,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );
//       alert("Item updated successfully");
//       setEditItem(null);
//       fetchMedicines();
//     } catch (error) {
//       console.error("Error updating item:", error);
//       alert(
//         "Failed to update item: " +
//           (error.response?.data?.message || error.message)
//       );
//     }
//   };

//   // Handle delete
//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this item?")) {
//       try {
//         await axios.delete(`http://localhost:5000/api/medicines/${id}`);
//         alert("Item deleted successfully");
//         fetchMedicines();
//       } catch (error) {
//         console.error("Error deleting item:", error);
//         alert(
//           "Failed to delete item: " +
//             (error.response?.data?.message || error.message)
//         );
//       }
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">
//         Medicines and Medical Equipment List
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {medicines.map((item) => (
//           <div
//             key={item._id}
//             className="bg-white shadow-lg rounded-lg overflow-hidden"
//           >
//             <img
//               src={`http://localhost:5000${item.image}`}
//               alt={item.name}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-xl font-semibold">{item.name}</h2>
//               <p className="text-gray-600">{item.description}</p>
//               <p className="text-lg font-bold mt-2">{item.price} JOD</p>
//               <p className="text-sm text-gray-500">
//                 Type:{" "}
//                 {item.type === "Medicine" ? "Medicine" : "Medical Equipment"}
//               </p>
//               <div className="mt-4 flex space-x-2">
//                 <button
//                   onClick={() => handleEdit(item)}
//                   className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(item._id)}
//                   className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Edit Modal */}
//       {editItem && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg max-w-lg w-full p-6">
//             <h2 className="text-2xl font-bold mb-4">Edit Item</h2>
//             <form onSubmit={handleUpdate} className="space-y-4">
//               <div>
//                 <label className="block mb-1">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1">Description</label>
//                 <textarea
//                   name="description"
//                   value={formData.description}
//                   onChange={handleChange}
//                   className="w-full p-2 border rounded"
//                   required
//                 ></textarea>
//               </div>
//               <div>
//                 <label className="block mb-1">Price</label>
//                 <input
//                   type="number"
//                   name="price"
//                   value={formData.price}
//                   onChange={handleChange}
//                   className="w-full p-2 border rounded"
//                   required
//                   min="0"
//                   step="0.01"
//                   placeholder="e.g., 8.75"
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1">Image (optional)</label>
//                 <input
//                   type="file"
//                   name="image"
//                   onChange={handleChange}
//                   className="w-full p-2 border rounded"
//                   accept="image/*"
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1">Category</label>
//                 <input
//                   type="text"
//                   name="category"
//                   value={formData.category}
//                   onChange={handleChange}
//                   className="w-full p-2 border rounded"
//                   placeholder="e.g., General, Diagnostic, Mobility"
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1">Discount (%)</label>
//                 <input
//                   type="number"
//                   name="discount"
//                   value={formData.discount}
//                   onChange={handleChange}
//                   className="w-full p-2 border rounded"
//                   min="0"
//                   max="100"
//                   step="1"
//                   placeholder="Enter discount as percentage (0-100)"
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1">
//                   Dosage (for Medicines only)
//                 </label>
//                 <input
//                   type="text"
//                   name="dosage"
//                   value={formData.dosage}
//                   onChange={handleChange}
//                   className="w-full p-2 border rounded"
//                   placeholder="e.g., One tablet daily"
//                   disabled={formData.type === "Medical Equipment"}
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1">Type</label>
//                 <select
//                   name="type"
//                   value={formData.type}
//                   onChange={handleChange}
//                   className="w-full p-2 border rounded"
//                 >
//                   <option value="Medicine">Medicine</option>
//                   <option value="Medical Equipment">Medical Equipment</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block mb-1">In Stock</label>
//                 <input
//                   type="checkbox"
//                   name="inStock"
//                   checked={formData.inStock}
//                   onChange={handleChange}
//                   className="p-2"
//                 />
//               </div>
//               <div className="flex space-x-2">
//                 <button
//                   type="submit"
//                   className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                 >
//                   Update
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setEditItem(null)}
//                   className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default MedicinesList;




import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Edit, Trash } from "lucide-react";
import axios from "axios";

function MedicinesList() {
  const [medicines, setMedicines] = useState([]);
  const [editItem, setEditItem] = useState(null);
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
    fetchMedicines();
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

  const fetchMedicines = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/medicines");
      setMedicines(response.data);
    } catch (error) {
      console.error("Error fetching medicines:", error);
    }
  };

  const handleEdit = (item) => {
    setEditItem(item);
    setFormData({
      name: item.name,
      description: item.description,
      price: item.price,
      image: null,
      category: item.category,
      discount: item.discount * 100, // Convert to percentage
      dosage: item.dosage || "",
      inStock: item.inStock,
      type: item.type,
    });
  };

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

  const handleUpdate = async (e) => {
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
    if (formData.image) data.append("image", formData.image);
    data.append("category", formData.category);
    data.append("discount", discountValue / 100);
    if (formData.type === "Medicine") data.append("dosage", formData.dosage);
    data.append("inStock", formData.inStock.toString());
    data.append("type", formData.type);

    try {
      await axios.put(
        `http://localhost:5000/api/medicines/${editItem._id}`,
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      alert("Item updated successfully");
      setEditItem(null);
      fetchMedicines();
    } catch (error) {
      console.error("Error updating item:", error);
      alert(
        "Failed to update item: " +
          (error.response?.data?.message || error.message)
      );
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await axios.delete(`http://localhost:5000/api/medicines/${id}`);
        alert("Item deleted successfully");
        fetchMedicines();
      } catch (error) {
        console.error("Error deleting item:", error);
        alert(
          "Failed to delete item: " +
            (error.response?.data?.message || error.message)
        );
      }
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

  const iconVariants = {
    animate: {
      y: [-5, 5],
      transition: {
        y: { repeat: Infinity, repeatType: "reverse", duration: 1.5 },
      },
    },
  };

  return (
    <motion.div
      ref={sectionRef}
      className="font-sans text-gray-800 min-h-screen bg-white py-20 px-6 ml-64"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={sectionVariants}
      dir="ltr"
      style={{ direction: "ltr" }}
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h1
          className="text-4xl font-bold text-green-800 mb-6 text-left"
          variants={childVariants}
        >
          Medicines and Medical Equipment List
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={childVariants}
        >
          {medicines.map((item) => (
            <motion.div
              key={item._id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden"
              variants={childVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={`http://localhost:5000${item.image}`}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  {item.name}
                </h2>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-lg font-bold mt-2 text-gray-900">
                  {item.price} JOD
                </p>
                <p className="text-sm text-gray-600">
                  Type:{" "}
                  {item.type === "Medicine" ? "Medicine" : "Medical Equipment"}
                </p>
                <div className="flex space-x-4 mt-4">
                  <motion.button
                    onClick={() => handleEdit(item)}
                    className="bg-green-500 text-white p-2 rounded-full transition-all duration-300"
                    aria-label="Edit item"
                    variants={iconVariants}
                    animate="animate"
                  >
                    <Edit className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-500 text-white p-2 rounded-full transition-all duration-300"
                    aria-label="Delete item"
                    variants={iconVariants}
                    animate="animate"
                  >
                    <Trash className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {editItem && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-lg w-full p-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-green-800 mb-4 text-left">
                Edit Item
              </h2>
              <form onSubmit={handleUpdate} className="space-y-4">
                <div>
                  <label className="block mb-1 text-gray-700 text-left">
                    Name
                  </label>
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
                  <label className="block mb-1 text-gray-700 text-left">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                    required
                  ></textarea>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700 text-left">
                    Price
                  </label>
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
                  <label className="block mb-1 text-gray-700 text-left">
                    Image (optional)
                  </label>
                  <input
                    type="file"
                    name="image"
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    accept="image/*"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-gray-700 text-left">
                    Category
                  </label>
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
                  <label className="block mb-1 text-gray-700 text-left">
                    Discount (%)
                  </label>
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
                  <label className="block mb-1 text-gray-700 text-left">
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
                  <label className="block mb-1 text-gray-700 text-left">
                    Type
                  </label>
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
                  <label className="block mb-1 text-gray-700 text-left">
                    In Stock
                  </label>
                  <input
                    type="checkbox"
                    name="inStock"
                    checked={formData.inStock}
                    onChange={handleChange}
                    className="h-5 w-5 text-green-500"
                  />
                </div>
                <div className="flex space-x-2">
                  <motion.button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Update
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={() => setEditItem(null)}
                    className="bg-gray-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-gray-600 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Cancel
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default MedicinesList;