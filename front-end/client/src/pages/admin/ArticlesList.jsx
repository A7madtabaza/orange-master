// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function ArticlesList() {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [editingArticle, setEditingArticle] = useState(null);
//   const [formData, setFormData] = useState({
//     title: "",
//     content: "",
//     image: null,
//   });

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get("http://localhost:5000/api/articles")
//       .then((response) => {
//         setArticles(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error(error);
//         setError("Failed to fetch articles");
//         setLoading(false);
//       });
//   }, []);

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this article?")) {
//       try {
//         await axios.delete(`http://localhost:5000/api/articles/${id}`);
//         setArticles(articles.filter((article) => article._id !== id));
//         alert("Article deleted successfully");
//       } catch (error) {
//         console.error(error);
//         alert("Failed to delete article");
//       }
//     }
//   };

//   const handleEdit = (article) => {
//     setEditingArticle(article._id);
//     setFormData({
//       title: article.title,
//       content: article.content,
//       image: null,
//     });
//   };

//   const handleCancelEdit = () => {
//     setEditingArticle(null);
//     setFormData({ title: "", content: "", image: null });
//   };

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
//     if (formData.image) {
//       data.append("image", formData.image);
//     }

//     try {
//       const response = await axios.put(
//         `http://localhost:5000/api/articles/${editingArticle}`,
//         data,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );
//       setArticles(
//         articles.map((article) =>
//           article._id === editingArticle ? response.data : article
//         )
//       );
//       setEditingArticle(null);
//       setFormData({ title: "", content: "", image: null });
//       alert("Article updated successfully");
//     } catch (error) {
//       console.error(error);
//       alert("Failed to update article");
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-red-500">{error}</div>;
//   }

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">Articles List</h1>
//       {editingArticle ? (
//         <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-2xl font-semibold mb-4">Edit Article</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block mb-1">Title</label>
//               <input
//                 type="text"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block mb-1">Content</label>
//               <textarea
//                 name="content"
//                 value={formData.content}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded h-32"
//                 required
//               ></textarea>
//             </div>
//             <div>
//               <label className="block mb-1">Image (Optional)</label>
//               <input
//                 type="file"
//                 name="image"
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//             <div className="flex space-x-4">
//               <button
//                 type="submit"
//                 className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//               >
//                 Save Changes
//               </button>
//               <button
//                 type="button"
//                 onClick={handleCancelEdit}
//                 className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {articles.map((article) => (
//             <div
//               key={article._id}
//               className="bg-white shadow-lg rounded-lg overflow-hidden"
//             >
//               <img
//                 src={`http://localhost:5000${article.image}`}
//                 alt={article.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h2 className="text-xl font-semibold">{article.title}</h2>
//                 <p className="text-gray-600">
//                   {article.content.substring(0, 100)}...
//                 </p>
//                 <div className="flex space-x-4 mt-4">
//                   <button
//                     onClick={() => handleEdit(article)}
//                     className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(article._id)}
//                     className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ArticlesList;


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function ArticlesList() {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [editingArticle, setEditingArticle] = useState(null);
//   const [formData, setFormData] = useState({
//     title: "",
//     content: "",
//     image: null,
//   });

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get("http://localhost:5000/api/articles")
//       .then((response) => {
//         setArticles(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error(error);
//         setError("Failed to fetch articles");
//         setLoading(false);
//       });
//   }, []);

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this article?")) {
//       try {
//         await axios.delete(`http://localhost:5000/api/articles/${id}`);
//         setArticles(articles.filter((article) => article._id !== id));
//         alert("Article deleted successfully");
//       } catch (error) {
//         console.error(error);
//         alert("Failed to delete article");
//       }
//     }
//   };

//   const handleEdit = (article) => {
//     setEditingArticle(article._id);
//     setFormData({
//       title: article.title,
//       content: article.content,
//       image: null,
//     });
//   };

//   const handleCancelEdit = () => {
//     setEditingArticle(null);
//     setFormData({ title: "", content: "", image: null });
//   };

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
//     if (formData.image) {
//       data.append("image", formData.image);
//     }

//     try {
//       const response = await axios.put(
//         `http://localhost:5000/api/articles/${editingArticle}`,
//         data,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );
//       setArticles(
//         articles.map((article) =>
//           article._id === editingArticle ? response.data : article
//         )
//       );
//       setEditingArticle(null);
//       setFormData({ title: "", content: "", image: null });
//       alert("Article updated successfully");
//     } catch (error) {
//       console.error(error);
//       alert("Failed to update article");
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return (
//       <div className="text-red-600 bg-red-100 p-4 rounded-lg">{error}</div>
//     );
//   }

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6 text-green-800">Articles List</h1>
//       {editingArticle ? (
//         <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-2xl font-semibold mb-4 text-green-800">
//             Edit Article
//           </h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block mb-1">Title</label>
//               <input
//                 type="text"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block mb-1">Content</label>
//               <textarea
//                 name="content"
//                 value={formData.content}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded h-32"
//                 required
//               ></textarea>
//             </div>
//             <div>
//               <label className="block mb-1">Image (Optional)</label>
//               <input
//                 type="file"
//                 name="image"
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//             <div className="flex space-x-4">
//               <button
//                 type="submit"
//                 className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//               >
//                 Save Changes
//               </button>
//               <button
//                 type="button"
//                 onClick={handleCancelEdit}
//                 className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {articles.map((article) => (
//             <div
//               key={article._id}
//               className="bg-white shadow-lg rounded-lg overflow-hidden"
//             >
//               <img
//                 src={`http://localhost:5000${article.image}`}
//                 alt={article.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h2 className="text-xl font-semibold">{article.title}</h2>
//                 <p className="text-gray-600">
//                   {article.content.substring(0, 100)}...
//                 </p>
//                 <div className="flex space-x-4 mt-4">
//                   <button
//                     onClick={() => handleEdit(article)}
//                     className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(article._id)}
//                     className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ArticlesList;



// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function ArticlesList() {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [editingArticle, setEditingArticle] = useState(null);
//   const [formData, setFormData] = useState({
//     title: "",
//     content: "",
//     image: null,
//   });

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get("http://localhost:5000/api/articles")
//       .then((response) => {
//         setArticles(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error(error);
//         setError("Failed to fetch articles");
//         setLoading(false);
//       });
//   }, []);

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this article?")) {
//       try {
//         await axios.delete(`http://localhost:5000/api/articles/${id}`);
//         setArticles(articles.filter((article) => article._id !== id));
//         alert("Article deleted successfully");
//       } catch (error) {
//         console.error(error);
//         alert("Failed to delete article");
//       }
//     }
//   };

//   const handleEdit = (article) => {
//     setEditingArticle(article._id);
//     setFormData({
//       title: article.title,
//       content: article.content,
//       image: null,
//     });
//   };

//   const handleCancelEdit = () => {
//     setEditingArticle(null);
//     setFormData({ title: "", content: "", image: null });
//   };

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
//     if (formData.image) {
//       data.append("image", formData.image);
//     }

//     try {
//       const response = await axios.put(
//         `http://localhost:5000/api/articles/${editingArticle}`,
//         data,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );
//       setArticles(
//         articles.map((article) =>
//           article._id === editingArticle ? response.data : article
//         )
//       );
//       setEditingArticle(null);
//       setFormData({ title: "", content: "", image: null });
//       alert("Article updated successfully");
//     } catch (error) {
//       console.error(error);
//       alert("Failed to update article");
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return (
//       <div className="text-red-600 bg-red-100 p-4 rounded-lg">{error}</div>
//     );
//   }

//   return (
//     <div className="p-6 ml-64">
//       <h1 className="text-3xl font-bold mb-6 text-green-800">Articles List</h1>
//       {editingArticle ? (
//         <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-2xl font-semibold mb-4 text-green-800">
//             Edit Article
//           </h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block mb-1">Title</label>
//               <input
//                 type="text"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block mb-1">Content</label>
//               <textarea
//                 name="content"
//                 value={formData.content}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded h-32"
//                 required
//               ></textarea>
//             </div>
//             <div>
//               <label className="block mb-1">Image (Optional)</label>
//               <input
//                 type="file"
//                 name="image"
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//             <div className="flex space-x-4">
//               <button
//                 type="submit"
//                 className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//               >
//                 Save Changes
//               </button>
//               <button
//                 type="button"
//                 onClick={handleCancelEdit}
//                 className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {articles.map((article) => (
//             <div
//               key={article._id}
//               className="bg-white shadow-lg rounded-lg overflow-hidden"
//             >
//               <img
//                 src={`http://localhost:5000${article.image}`}
//                 alt={article.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h2 className="text-xl font-semibold">{article.title}</h2>
//                 <p className="text-gray-600">
//                   {article.content.substring(0, 100)}...
//                 </p>
//                 <div className="flex space-x-4 mt-4">
//                   <button
//                     onClick={() => handleEdit(article)}
//                     className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(article._id)}
//                     className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ArticlesList;



// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function ArticlesList() {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [editingArticle, setEditingArticle] = useState(null);
//   const [formData, setFormData] = useState({
//     title: "",
//     content: "",
//     image: null,
//   });

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get("http://localhost:5000/api/articles")
//       .then((response) => {
//         setArticles(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error(error);
//         setError("Failed to fetch articles");
//         setLoading(false);
//       });
//   }, []);

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this article?")) {
//       try {
//         await axios.delete(`http://localhost:5000/api/articles/${id}`);
//         setArticles(articles.filter((article) => article._id !== id));
//         alert("Article deleted successfully");
//       } catch (error) {
//         console.error(error);
//         alert("Failed to delete article");
//       }
//     }
//   };

//   const handleEdit = (article) => {
//     setEditingArticle(article._id);
//     setFormData({
//       title: article.title,
//       content: article.content,
//       image: null,
//     });
//   };

//   const handleCancelEdit = () => {
//     setEditingArticle(null);
//     setFormData({ title: "", content: "", image: null });
//   };

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
//     if (formData.image) {
//       data.append("image", formData.image);
//     }

//     try {
//       const response = await axios.put(
//         `http://localhost:5000/api/articles/${editingArticle}`,
//         data,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );
//       setArticles(
//         articles.map((article) =>
//           article._id === editingArticle ? response.data : article
//         )
//       );
//       setEditingArticle(null);
//       setFormData({ title: "", content: "", image: null });
//       alert("Article updated successfully");
//     } catch (error) {
//       console.error(error);
//       alert("Failed to update article");
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return (
//       <div className="text-red-600 bg-red-100 p-3 rounded-lg">{error}</div>
//     );
//   }

//   return (
//     <div className="p-4 ml-64">
//       <h1 className="text-2xl font-bold mb-4 text-green-800">Articles List</h1>
//       {editingArticle ? (
//         <div className="mb-6 bg-white p-4 rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold mb-3 text-green-800">
//             Edit Article
//           </h2>
//           <form onSubmit={handleSubmit} className="space-y-3">
//             <div>
//               <label className="block mb-1 text-sm">Title</label>
//               <input
//                 type="text"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded text-sm"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block mb-1 text-sm">Content</label>
//               <textarea
//                 name="content"
//                 value={formData.content}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded h-24 text-sm"
//                 required
//               ></textarea>
//             </div>
//             <div>
//               <label className="block mb-1 text-sm">Image (Optional)</label>
//               <input
//                 type="file"
//                 name="image"
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded text-sm"
//               />
//             </div>
//             <div className="flex space-x-3">
//               <button
//                 type="submit"
//                 className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm"
//               >
//                 Save Changes
//               </button>
//               <button
//                 type="button"
//                 onClick={handleCancelEdit}
//                 className="bg-gray-300 text-gray-800 px-3 py-1 rounded hover:bg-gray-400 text-sm"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {articles.map((article) => (
//             <div
//               key={article._id}
//               className="bg-white shadow-lg rounded-lg overflow-hidden"
//             >
//               <img
//                 src={`http://localhost:5000${article.image}`}
//                 alt={article.title}
//                 className="w-full h-40 object-cover"
//               />
//               <div className="p-3">
//                 <h2 className="text-lg font-semibold">{article.title}</h2>
//                 <p className="text-gray-600 text-sm">
//                   {article.content.substring(0, 80)}...
//                 </p>
//                 <div className="flex space-x-3 mt-3">
//                   <button
//                     onClick={() => handleEdit(article)}
//                     className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(article._id)}
//                     className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ArticlesList;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function ArticlesList() {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [editingArticle, setEditingArticle] = useState(null);
//   const [formData, setFormData] = useState({
//     title: "",
//     content: "",
//     image: null,
//   });

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get("http://localhost:5000/api/articles")
//       .then((response) => {
//         setArticles(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error(error);
//         setError("Failed to fetch articles");
//         setLoading(false);
//       });
//   }, []);

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this article?")) {
//       try {
//         await axios.delete(`http://localhost:5000/api/articles/${id}`);
//         setArticles(articles.filter((article) => article._id !== id));
//         alert("Article deleted successfully");
//       } catch (error) {
//         console.error(error);
//         alert("Failed to delete article");
//       }
//     }
//   };

//   const handleEdit = (article) => {
//     setEditingArticle(article._id);
//     setFormData({
//       title: article.title,
//       content: article.content,
//       image: null,
//     });
//   };

//   const handleCancelEdit = () => {
//     setEditingArticle(null);
//     setFormData({ title: "", content: "", image: null });
//   };

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
//     if (formData.image) {
//       data.append("image", formData.image);
//     }

//     try {
//       const response = await axios.put(
//         `http://localhost:5000/api/articles/${editingArticle}`,
//         data,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );
//       setArticles(
//         articles.map((article) =>
//           article._id === editingArticle ? response.data : article
//         )
//       );
//       setEditingArticle(null);
//       setFormData({ title: "", content: "", image: null });
//       alert("Article updated successfully");
//     } catch (error) {
//       console.error(error);
//       alert("Failed to update article");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center py-8">
//         <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-600"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="bg-red-50 border border-red-300 text-red-800 px-3 py-4 rounded text-center mx-2 my-3">
//         <p className="font-medium">{error}</p>
//         <button
//           onClick={() => window.location.reload()}
//           className="mt-2 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-colors text-sm"
//         >
//           Try Again
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-5xl mx-auto ml-64 p-4 box-border">
//       <h1 className="text-xl font-bold mb-4 text-gray-800">Articles List</h1>

//       {editingArticle ? (
//         <div className="bg-white rounded-lg shadow p-6 mb-6">
//           <h2 className="text-lg font-semibold mb-4 text-gray-800">
//             Edit Article
//           </h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Title
//               </label>
//               <input
//                 type="text"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Content
//               </label>
//               <textarea
//                 name="content"
//                 value={formData.content}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 h-32"
//                 required
//               ></textarea>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Image (Optional)
//               </label>
//               <input
//                 type="file"
//                 name="image"
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//               />
//             </div>
//             <div className="flex space-x-3">
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//               >
//                 Save Changes
//               </button>
//               <button
//                 type="button"
//                 onClick={handleCancelEdit}
//                 className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
//           {articles.map((article) => (
//             <div
//               key={article._id}
//               className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
//             >
//               <div className="h-48 overflow-hidden">
//                 <img
//                   src={`http://localhost:5000${article.image}`}
//                   alt={article.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="p-4">
//                 <h2 className="text-lg font-semibold mb-2 text-gray-800">
//                   {article.title}
//                 </h2>
//                 <p className="text-gray-600 text-sm mb-4">
//                   {article.content.substring(0, 100)}...
//                 </p>
//                 <div className="flex justify-between">
//                   <button
//                     onClick={() => handleEdit(article)}
//                     className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(article._id)}
//                     className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ArticlesList;


import React, { useState, useEffect } from "react";
import axios from "axios";

function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingArticle, setEditingArticle] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: null,
  });

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/api/articles")
      .then((response) => {
        setArticles(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to fetch articles");
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      try {
        await axios.delete(`http://localhost:5000/api/articles/${id}`);
        setArticles(articles.filter((article) => article._id !== id));
        alert("Article deleted successfully");
      } catch (error) {
        console.error(error);
        alert("Failed to delete article");
      }
    }
  };

  const handleEdit = (article) => {
    setEditingArticle(article._id);
    setFormData({
      title: article.title,
      content: article.content,
      image: null,
    });
  };

  const handleCancelEdit = () => {
    setEditingArticle(null);
    setFormData({ title: "", content: "", image: null });
  };

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("content", formData.content);
    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      const response = await axios.put(
        `http://localhost:5000/api/articles/${editingArticle}`,
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setArticles(
        articles.map((article) =>
          article._id === editingArticle ? response.data : article
        )
      );
      setEditingArticle(null);
      setFormData({ title: "", content: "", image: null });
      alert("Article updated successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to update article");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8 mt-16">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-300 text-red-800 px-3 py-4 rounded text-center mx-auto my-16 max-w-md">
        <p className="font-medium">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-2 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-colors text-sm"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="w-full p-6 pt-20 pl-10 pr-10">
      {" "}
      {/* أضفنا هوامش أكبر من الأعلى واليمين واليسار */}
      <div className="max-w-4xl mx-auto">
        {" "}
        {/* تقليل العرض لضمان الوسطية */}
        <h1 className="text-2xl font-bold mb-8 text-center text-gray-800">
          Articles List
        </h1>{" "}
        {/* زيادة الهامش السفلي */}
        {editingArticle ? (
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              Edit Article
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Content
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 h-32"
                  required
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Image (Optional)
                </label>
                <input
                  type="file"
                  name="image"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {" "}
            {/* الحفاظ على نفس تخطيط الشبكة المتجاوبة */}
            {articles.map((article) => (
              <div
                key={article._id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={`http://localhost:5000${article.image}`}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2 text-gray-800 truncate">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {article.content.substring(0, 100)}...
                  </p>
                  <div className="flex justify-between">
                    <button
                      onClick={() => handleEdit(article)}
                      className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(article._id)}
                      className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ArticlesList;