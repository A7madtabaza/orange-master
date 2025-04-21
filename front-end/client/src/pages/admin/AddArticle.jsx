// import React, { useState } from "react";
// import axios from "axios";

// function AddArticle() {
//   const [formData, setFormData] = useState({
//     title: "",
//     content: "",
//     image: null,
//   });
//   const [error, setError] = useState("");

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
//     data.append("title", formData.title);
//     data.append("content", formData.content);
//     data.append("image", formData.image);

//     try {
//       await axios.post("http://localhost:5000/api/articles/add", data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       alert("تم إضافة المقالة بنجاح");
//       setFormData({ title: "", content: "", image: null });
//       setError("");
//     } catch (error) {
//       setError(error.response?.data?.message || "حدث خطأ أثناء إضافة المقالة");
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-6">إضافة مقالة</h1>
//       {error && <p className="text-red-500 mb-4">{error}</p>}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block mb-1">عنوان المقالة</label>
//           <input
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />
//         </div>
//         <div>
//           <label className="block mb-1">المحتوى</label>
//           <textarea
//             name="content"
//             value={formData.content}
//             onChange={handleChange}
//             className="w-full p-2 border rounded h-32"
//             required
//           ></textarea>
//         </div>
//         <div>
//           <label className="block mb-1">صورة المقالة</label>
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

// export default AddArticle;




import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function AddArticle() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: null,
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
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
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const data = new FormData();
    data.append("title", formData.title);
    data.append("content", formData.content);
    data.append("image", formData.image);

    try {
      await axios.post("http://localhost:5000/api/articles/add", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSuccess("Article added successfully!");
      setFormData({ title: "", content: "", image: null });
      // Reset file input
      document.getElementById("image-input").value = "";
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "An error occurred while adding the article."
      );
      console.error("Error adding article:", error);
    } finally {
      setLoading(false);
    }
  };

  // Animation variants
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
          Add New Article
        </motion.h1>

        <motion.div
          className="bg-white rounded-2xl shadow-lg max-w-lg w-full p-6"
          variants={childVariants}
        >
          {/* Success and Error Messages */}
          {success && (
            <motion.p
              className="text-green-600 bg-green-50 p-3 rounded-lg mb-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {success}
            </motion.p>
          )}
          {error && (
            <motion.p
              className="text-red-600 bg-red-50 p-3 rounded-lg mb-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {error}
            </motion.p>
          )}

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            variants={childVariants}
          >
            {/* Title Input */}
            <div>
              <label className="block mb-1 text-gray-700 text-left">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />
            </div>

            {/* Content Textarea */}
            <div>
              <label className="block mb-1 text-gray-700 text-left">
                Content
              </label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none h-32"
                required
              ></textarea>
            </div>

            {/* Image Input */}
            <div>
              <label className="block mb-1 text-gray-700 text-left">
                Image
              </label>
              <input
                type="file"
                id="image-input"
                name="image"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
                accept="image/*"
              />
            </div>

            {/* Submit Button */}
            <div className="flex space-x-2">
              <motion.button
                type="submit"
                className={`bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                whileHover={{ scale: loading ? 1 : 1.05 }}
                whileTap={{ scale: loading ? 1 : 0.95 }}
                disabled={loading}
              >
                {loading ? "Adding..." : "Add Article"}
              </motion.button>
              <motion.button
                type="button"
                onClick={() =>
                  setFormData({ title: "", content: "", image: null })
                }
                className="bg-gray-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-gray-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Reset
              </motion.button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default AddArticle;