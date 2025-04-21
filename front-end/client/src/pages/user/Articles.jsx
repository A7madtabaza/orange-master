// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Clock,
//   User,
//   Tag,
//   List,
//   Grid,
//   ArrowLeft,
//   ArrowRight,
//   Calendar,
//   Share2,
//   Heart,
//   AlertCircle,
// } from "lucide-react";

// function ArticlesPage() {
//   const [articles, setArticles] = useState([]);
//   const [comments, setComments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [currentArticleIndex, setCurrentArticleIndex] = useState(null);
//   const [viewMode, setViewMode] = useState("list");
//   const [newComment, setNewComment] = useState("");
//   const [userName, setUserName] = useState("");
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [error, setError] = useState("");
//   const [likes, setLikes] = useState({});
//   const [wishlist, setWishlist] = useState([]);

//   useEffect(() => {
//     const userType = localStorage.getItem("userType");
//     setIsAdmin(userType === "admin");
//   }, []);

//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get("http://localhost:5000/api/articles");
//         setArticles(response.data);
//         const initialLikes = {};
//         response.data.forEach((article) => {
//           initialLikes[article._id] = article.likes || 0;
//         });
//         setLikes(initialLikes);
//         setLoading(false);
//       } catch (error) {
//         console.error(error);
//         setError("Failed to fetch articles");
//         setLoading(false);
//       }
//     };

//     const fetchWishlist = async () => {
//       try {
//         const userId = localStorage.getItem("userId") || "guest";
//         const response = await axios.get(
//           `http://localhost:5000/api/articles/wishlist`,
//           {
//             params: { userId },
//           }
//         );
//         setWishlist(response.data.map((article) => article._id));
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchArticles();
//     fetchWishlist();
//   }, []);

//   useEffect(() => {
//     if (viewMode === "article" && articles[currentArticleIndex]) {
//       axios
//         .get(
//           `http://localhost:5000/api/comments/${articles[currentArticleIndex]._id}`
//         )
//         .then((response) => {
//           setComments(response.data);
//         })
//         .catch((error) => {
//           console.error(error);
//           setError("Failed to fetch comments");
//         });
//     }
//   }, [viewMode, currentArticleIndex, articles]);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   const openArticle = (index) => {
//     setCurrentArticleIndex(index);
//     setViewMode("article");
//     window.scrollTo(0, 0);
//   };

//   const backToList = () => {
//     setViewMode("list");
//     setCurrentArticleIndex(null);
//     setComments([]);
//   };

//   const nextArticle = () => {
//     if (currentArticleIndex < articles.length - 1) {
//       setCurrentArticleIndex(currentArticleIndex + 1);
//       window.scrollTo(0, 0);
//     }
//   };

//   const previousArticle = () => {
//     if (currentArticleIndex > 0) {
//       setCurrentArticleIndex(currentArticleIndex - 1);
//       window.scrollTo(0, 0);
//     }
//   };

//   const handleCommentSubmit = async (e) => {
//     e.preventDefault();
//     if (!userName || !newComment) {
//       setError("Please enter your name and comment");
//       return;
//     }
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/comments/add",
//         {
//           articleId: articles[currentArticleIndex]._id,
//           userName,
//           content: newComment,
//         }
//       );
//       setComments([response.data, ...comments]);
//       setNewComment("");
//       setUserName("");
//       setError("");
//     } catch (error) {
//       console.error(error);
//       setError("Failed to add comment");
//     }
//   };

//   const handleDeleteComment = async (commentId) => {
//     if (window.confirm("Are you sure you want to delete this comment?")) {
//       try {
//         await axios.delete(`http://localhost:5000/api/comments/${commentId}`);
//         setComments(comments.filter((comment) => comment._id !== commentId));
//         alert("Comment soft deleted successfully");
//       } catch (error) {
//         console.error(error);
//         alert("Failed to delete comment");
//       }
//     }
//   };

//   const handleReportComment = async (commentId) => {
//     if (window.confirm("Are you sure you want to report this comment?")) {
//       try {
//         await axios.post(
//           `http://localhost:5000/api/comments/${commentId}/report`
//         );
//         alert("Comment reported successfully");
//       } catch (error) {
//         console.error(error);
//         alert("Failed to report comment");
//       }
//     }
//   };

//   const handleLike = async (articleId) => {
//     try {
//       const response = await axios.post(
//         `http://localhost:5000/api/articles/${articleId}/like`
//       );
//       setLikes((prev) => ({ ...prev, [articleId]: response.data.likes }));
//     } catch (error) {
//       console.error(error);
//       alert("Failed to like article");
//     }
//   };

//   const handleShare = (articleId) => {
//     const url = `${window.location.origin}/user/articles#${articleId}`;
//     navigator.clipboard.writeText(url);
//     alert("Article link copied to clipboard!");
//   };

//   const handleWishlist = async (articleId) => {
//     try {
//       const userId = localStorage.getItem("userId") || "guest";
//       const response = await axios.post(
//         `http://localhost:5000/api/articles/${articleId}/save`,
//         {
//           userId,
//         }
//       );
//       if (response.data.savedBy.includes(userId)) {
//         setWishlist((prev) => [...prev, articleId]);
//         alert("Article added to wishlist");
//       } else {
//         setWishlist((prev) => prev.filter((id) => id !== articleId));
//         alert("Article removed from wishlist");
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Failed to update wishlist");
//     }
//   };

//   const renderArticleView = () => {
//     const article = articles[currentArticleIndex];

//     return (
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="bg-white rounded-2xl shadow-lg overflow-hidden"
//       >
//         <div className="relative h-80">
//           <img
//             src={`http://localhost:5000${article.image}`}
//             alt={article.title}
//             className="w-full h-full object-cover"
//             onError={(e) => {
//               e.target.src = "/api/placeholder/1200/600";
//             }}
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

//           <motion.button
//             onClick={backToList}
//             className="absolute top-6 right-6 bg-white/80 p-2 rounded-full text-green-700 hover:bg-white"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <ArrowLeft className="w-6 h-6" />
//           </motion.button>

//           <div className="absolute bottom-6 right-6 left-6 text-white">
//             <div className="flex items-center mb-3">
//               <Tag className="w-5 h-5 mr-2" />
//               <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">
//                 {article.category || "General Health"}
//               </span>
//             </div>
//             <h1 className="text-3xl md:text-4xl font-bold mb-2">
//               {article.title}
//             </h1>
//             <div className="flex flex-wrap items-center text-sm space-x-4">
//               <div className="flex items-center mr-4">
//                 <Calendar className="w-4 h-4 mr-1" />
//                 <span>{new Date(article.createdAt).toLocaleDateString()}</span>
//               </div>
//               <div className="flex items-center mr-4">
//                 <User className="w-4 h-4 mr-1" />
//                 <span>{article.author || "Medical Team"}</span>
//               </div>
//               <div className="flex items-center mr-4">
//                 <Clock className="w-4 h-4 mr-1" />
//                 <span>10 min read</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="p-8">
//           <div className="prose prose-lg max-w-none">
//             {article.content.split("\n").map((paragraph, idx) => (
//               <p key={idx} className="mb-4 text-gray-700 leading-relaxed">
//                 {paragraph}
//               </p>
//             ))}
//           </div>

//           <div className="border-t border-gray-200 pt-6 mt-12">
//             <div className="flex justify-between items-center">
//               <div className="flex space-x-4">
//                 <motion.button
//                   onClick={() => handleLike(article._id)}
//                   className="flex items-center text-gray-500 hover:text-green-600"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <Heart className="w-5 h-5 mr-1" />
//                   <span>Like ({likes[article._id] || 0})</span>
//                 </motion.button>
//                 <motion.button
//                   onClick={() => handleShare(article._id)}
//                   className="flex items-center text-gray-500 hover:text-green-600"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <Share2 className="w-5 h-5 mr-1" />
//                   <span>Share</span>
//                 </motion.button>
//                 <motion.button
//                   onClick={() => handleWishlist(article._id)}
//                   className="flex items-center text-gray-500 hover:text-green-600"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <Heart className="w-5 h-5 mr-1" />
//                   <span>
//                     {wishlist.includes(article._id)
//                       ? "Remove from Wishlist"
//                       : "Add to Wishlist"}
//                   </span>
//                 </motion.button>
//               </div>

//               <div className="flex items-center">
//                 <motion.button
//                   onClick={previousArticle}
//                   disabled={currentArticleIndex === 0}
//                   className={`p-2 rounded-full mr-2 ${
//                     currentArticleIndex === 0
//                       ? "bg-gray-200 text-gray-400 cursor-not-allowed"
//                       : "bg-green-100 text-green-600 hover:bg-green-200"
//                   }`}
//                   whileHover={currentArticleIndex !== 0 ? { scale: 1.1 } : {}}
//                   whileTap={currentArticleIndex !== 0 ? { scale: 0.9 } : {}}
//                 >
//                   <ChevronLeft className="w-5 h-5" />
//                 </motion.button>

//                 <motion.button
//                   onClick={nextArticle}
//                   disabled={currentArticleIndex === articles.length - 1}
//                   className={`p-2 rounded-full ${
//                     currentArticleIndex === articles.length - 1
//                       ? "bg-gray-200 text-gray-400 cursor-not-allowed"
//                       : "bg-green-100 text-green-600 hover:bg-green-200"
//                   }`}
//                   whileHover={
//                     currentArticleIndex !== articles.length - 1
//                       ? { scale: 1.1 }
//                       : {}
//                   }
//                   whileTap={
//                     currentArticleIndex !== articles.length - 1
//                       ? { scale: 0.9 }
//                       : {}
//                   }
//                 >
//                   <ChevronRight className="w-5 h-5" />
//                 </motion.button>
//               </div>
//             </div>
//           </div>

//           <div className="mt-12 border-t border-gray-200 pt-8">
//             <h3 className="text-2xl font-bold text-green-700 mb-6">Comments</h3>

//             {error && <p className="text-red-500 mb-4">{error}</p>}

//             <div className="bg-gray-50 p-6 rounded-xl">
//               <h4 className="text-lg font-medium text-gray-700 mb-4">
//                 Add Your Comment
//               </h4>
//               <form onSubmit={handleCommentSubmit}>
//                 <input
//                   type="text"
//                   value={userName}
//                   onChange={(e) => setUserName(e.target.value)}
//                   className="w-full p-2 border rounded mb-4"
//                   placeholder="Your Name"
//                   required
//                 />
//                 <textarea
//                   value={newComment}
//                   onChange={(e) => setNewComment(e.target.value)}
//                   className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                   rows="4"
//                   placeholder="Write your comment here..."
//                   required
//                 ></textarea>
//                 <div className="mt-4 flex justify-end">
//                   <motion.button
//                     type="submit"
//                     className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Submit
//                   </motion.button>
//                 </div>
//               </form>
//             </div>

//             <div className="mt-8 space-y-6">
//               {comments.length === 0 ? (
//                 <p className="text-gray-600">No comments yet</p>
//               ) : (
//                 comments.map((comment) => (
//                   <div
//                     key={comment._id}
//                     className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm"
//                   >
//                     <div className="flex items-start">
//                       <div className="bg-green-100 text-green-700 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">
//                         {comment.userName.charAt(0).toUpperCase()}
//                       </div>
//                       <div className="flex-1">
//                         <div className="flex justify-between items-center mb-2">
//                           <h5 className="font-semibold text-gray-800">
//                             {comment.userName}
//                           </h5>
//                           <span className="text-xs text-gray-500">
//                             {new Date(comment.createdAt).toLocaleDateString()}
//                           </span>
//                         </div>
//                         <p className="text-gray-600">{comment.content}</p>
//                         <div className="flex space-x-4 mt-2">
//                           {isAdmin && (
//                             <button
//                               onClick={() => handleDeleteComment(comment._id)}
//                               className="text-red-500 hover:text-red-600 text-sm"
//                             >
//                               Delete
//                             </button>
//                           )}
//                           <button
//                             onClick={() => handleReportComment(comment._id)}
//                             className="text-orange-500 hover:text-orange-600 text-sm flex items-center"
//                           >
//                             <AlertCircle className="w-4 h-4 mr-1" />
//                             Report
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))
//               )}
//             </div>
//           </div>

//           <div className="mt-12 border-t border-gray-200 pt-8">
//             <h3 className="text-2xl font-bold text-green-700 mb-6">
//               Related Articles
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {articles.slice(0, 2).map(
//                 (relatedArticle, idx) =>
//                   idx !== currentArticleIndex && (
//                     <motion.div
//                       key={idx}
//                       className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
//                       whileHover={{ y: -5 }}
//                       onClick={() => openArticle(idx)}
//                     >
//                       <div className="flex flex-col sm:flex-row h-full">
//                         <div className="sm:w-1/3">
//                           <img
//                             src={`http://localhost:5000${relatedArticle.image}`}
//                             alt={relatedArticle.title}
//                             className="w-full h-full object-cover"
//                             onError={(e) => {
//                               e.target.src = "/api/placeholder/400/320";
//                             }}
//                           />
//                         </div>
//                         <div className="p-4 sm:w-2/3">
//                           <h4 className="font-bold text-green-700 mb-2 line-clamp-2">
//                             {relatedArticle.title}
//                           </h4>
//                           <p className="text-sm text-gray-600 line-clamp-2">
//                             {relatedArticle.content.substring(0, 100)}...
//                           </p>
//                         </div>
//                       </div>
//                     </motion.div>
//                   )
//               )}
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     );
//   };

//   const renderListArticleItem = (article, index) => {
//     return (
//       <motion.div
//         key={article._id || index}
//         className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
//         variants={itemVariants}
//         whileHover={{ y: -5 }}
//         onClick={() => openArticle(index)}
//       >
//         <div className="flex flex-col md:flex-row h-full">
//           <div className="md:w-1/3 relative">
//             <img
//               src={`http://localhost:5000${article.image}`}
//               alt={article.title}
//               className="w-full h-full object-cover"
//               style={{ minHeight: "200px" }}
//               onError={(e) => {
//                 e.target.src = "/api/placeholder/400/320";
//               }}
//             />
//             <div className="absolute top-2 right-2">
//               <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
//                 {article.category || "General Health"}
//               </div>
//             </div>
//           </div>
//           <div className="p-6 md:w-2/3">
//             <h2 className="text-xl font-bold text-green-700 mb-3">
//               {article.title}
//             </h2>
//             <p className="text-gray-600 mb-4 line-clamp-3">
//               {article.content.substring(0, 150)}...
//             </p>
//             <div className="flex items-center text-gray-500 text-sm space-x-4 mb-4">
//               <div className="flex items-center mr-3">
//                 <Calendar className="w-4 h-4 mr-1" />
//                 <span>{new Date(article.createdAt).toLocaleDateString()}</span>
//               </div>
//               <div className="flex items-center mr-3">
//                 <User className="w-4 h-4 mr-1" />
//                 <span>{article.author || "Medical Team"}</span>
//               </div>
//               <div className="flex items-center">
//                 <Clock className="w-4 h-4 mr-1" />
//                 <span>10 min read</span>
//               </div>
//             </div>
//             <motion.button
//               className="text-green-600 font-semibold hover:text-green-700 flex items-center"
//               whileHover={{ x: 5 }}
//             >
//               <span>Read Full Article</span>
//               <ArrowRight className="w-4 h-4 ml-1" />
//             </motion.button>
//           </div>
//         </div>
//       </motion.div>
//     );
//   };

//   const renderGridArticleItem = (article, index) => {
//     return (
//       <motion.div
//         key={article._id || index}
//         className="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
//         variants={itemVariants}
//         whileHover={{ scale: 1.02 }}
//         onClick={() => openArticle(index)}
//       >
//         <div className="relative">
//           <img
//             src={`http://localhost:5000${article.image}`}
//             alt={article.title}
//             className="w-full h-56 object-cover"
//             onError={(e) => {
//               e.target.src = "/api/placeholder/400/320";
//             }}
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
//           <div className="absolute bottom-4 left-4 right-4">
//             <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block">
//               {article.category || "General Health"}
//             </div>
//           </div>
//         </div>
//         <div className="p-6">
//           <h2 className="text-xl font-bold text-green-700 mb-3 line-clamp-2">
//             {article.title}
//           </h2>
//           <p className="text-gray-600 mb-4 line-clamp-3">
//             {article.content.substring(0, 120)}...
//           </p>
//           <div className="flex items-center text-gray-500 text-sm space-x-4">
//             <div className="flex items-center mr-3">
//               <Clock className="w-4 h-4 mr-1" />
//               <span>{new Date(article.createdAt).toLocaleDateString()}</span>
//             </div>
//             <div className="flex items-center">
//               <User className="w-4 h-4 mr-1" />
//               <span>{article.author || "Medical Team"}</span>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     );
//   };

//   const renderArticlesListView = () => {
//     return (
//       <>
//         <div className="flex justify-between items-center mb-8">
//           <h2 className="text-2xl font-bold text-green-800">All Articles</h2>
//           <div className="flex items-center space-x-2 bg-white rounded-lg shadow-sm">
//             <motion.button
//               onClick={() => setViewMode("list")}
//               className={`p-2 rounded-l-lg ${
//                 viewMode === "list"
//                   ? "bg-green-500 text-white"
//                   : "bg-white text-green-600 hover:bg-green-100"
//               }`}
//               whileHover={viewMode !== "list" ? { scale: 1.1 } : {}}
//               whileTap={viewMode !== "list" ? { scale: 0.9 } : {}}
//             >
//               <List className="w-5 h-5" />
//             </motion.button>
//             <motion.button
//               onClick={() => setViewMode("grid")}
//               className={`p-2 rounded-r-lg ${
//                 viewMode === "grid"
//                   ? "bg-green-500 text-white"
//                   : "bg-white text-green-600 hover:bg-green-100"
//               }`}
//               whileHover={viewMode !== "grid" ? { scale: 1.1 } : {}}
//               whileTap={viewMode !== "grid" ? { scale: 0.9 } : {}}
//             >
//               <Grid className="w-5 h-5" />
//             </motion.button>
//           </div>
//         </div>
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className={
//             viewMode === "list"
//               ? "space-y-6"
//               : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//           }
//         >
//           {articles.map((article, index) =>
//             viewMode === "list"
//               ? renderListArticleItem(article, index)
//               : renderGridArticleItem(article, index)
//           )}
//         </motion.div>
//       </>
//     );
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex justify-center items-center bg-green-50">
//         <div className="flex flex-col items-center">
//           <div className="w-16 h-16 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
//           <p className="mt-4 text-green-700 font-medium">Loading articles...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="text-red-500 text-center py-12">{error}</div>;
//   }

//   return (
//     <div className="min-h-screen bg-green-50 py-12 px-6">
//       <div className="container mx-auto max-w-6xl">
//         {viewMode === "article" ? (
//           renderArticleView()
//         ) : (
//           <>
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="text-center mb-12"
//             >
//               <h1 className="text-4xl font-bold text-green-800 mb-4">
//                 Medical Articles
//               </h1>
//               <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//                 Explore the latest articles and helpful medical information from
//                 our team of experts
//               </p>
//             </motion.div>
//             {articles.length === 0 ? (
//               <div className="text-center py-12">
//                 <p className="text-xl text-gray-600">
//                   No articles available at the moment
//                 </p>
//               </div>
//             ) : (
//               renderArticlesListView()
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ArticlesPage;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Clock,
//   User,
//   Tag,
//   List,
//   Grid,
//   ArrowLeft,
//   ArrowRight,
//   Calendar,
//   Share2,
//   Heart,
//   AlertCircle,
// } from "lucide-react";

// function ArticlesPage({ setWishlist }) {
//   const [articles, setArticles] = useState([]);
//   const [comments, setComments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [currentArticleIndex, setCurrentArticleIndex] = useState(null);
//   const [viewMode, setViewMode] = useState("list");
//   const [newComment, setNewComment] = useState("");
//   const [userName, setUserName] = useState("");
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [error, setError] = useState("");
//   const [likes, setLikes] = useState({});
//   const [localWishlist, setLocalWishlist] = useState([]);

//   useEffect(() => {
//     const userType = localStorage.getItem("userType");
//     setIsAdmin(userType === "admin");
//   }, []);

//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get("http://localhost:5000/api/articles");
//         setArticles(response.data);
//         const initialLikes = {};
//         response.data.forEach((article) => {
//           initialLikes[article._id] = article.likes || 0;
//         });
//         setLikes(initialLikes);
//         setLoading(false);
//       } catch (error) {
//         console.error(error);
//         setError("Failed to fetch articles");
//         setLoading(false);
//       }
//     };

//     const fetchWishlist = async () => {
//       try {
//         const userId = localStorage.getItem("userId") || "guest";
//         const response = await axios.get(
//           `http://localhost:5000/api/articles/wishlist`,
//           {
//             params: { userId },
//           }
//         );
//         setLocalWishlist(response.data.map((article) => article._id));
//         setWishlist(response.data);
//       } catch (error) {
//         console.error("Error fetching wishlist:", error);
//       }
//     };

//     fetchArticles();
//     fetchWishlist();
//   }, [setWishlist]);

//   useEffect(() => {
//     if (viewMode === "article" && articles[currentArticleIndex]) {
//       axios
//         .get(
//           `http://localhost:5000/api/comments/${articles[currentArticleIndex]._id}`
//         )
//         .then((response) => {
//           setComments(response.data);
//         })
//         .catch((error) => {
//           console.error(error);
//           setError("Failed to fetch comments");
//         });
//     }
//   }, [viewMode, currentArticleIndex, articles]);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   const openArticle = (index) => {
//     setCurrentArticleIndex(index);
//     setViewMode("article");
//     window.scrollTo(0, 0);
//   };

//   const backToList = () => {
//     setViewMode("list");
//     setCurrentArticleIndex(null);
//     setComments([]);
//   };

//   const nextArticle = () => {
//     if (currentArticleIndex < articles.length - 1) {
//       setCurrentArticleIndex(currentArticleIndex + 1);
//       window.scrollTo(0, 0);
//     }
//   };

//   const previousArticle = () => {
//     if (currentArticleIndex > 0) {
//       setCurrentArticleIndex(currentArticleIndex - 1);
//       window.scrollTo(0, 0);
//     }
//   };

//   const handleCommentSubmit = async (e) => {
//     e.preventDefault();
//     if (!userName || !newComment) {
//       setError("Please enter your name and comment");
//       return;
//     }
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/comments/add",
//         {
//           articleId: articles[currentArticleIndex]._id,
//           userName,
//           content: newComment,
//         }
//       );
//       setComments([response.data, ...comments]);
//       setNewComment("");
//       setUserName("");
//       setError("");
//     } catch (error) {
//       console.error(error);
//       setError("Failed to add comment");
//     }
//   };

//   const handleDeleteComment = async (commentId) => {
//     if (window.confirm("Are you sure you want to delete this comment?")) {
//       try {
//         await axios.delete(`http://localhost:5000/api/comments/${commentId}`);
//         setComments(comments.filter((comment) => comment._id !== commentId));
//         alert("Comment soft deleted successfully");
//       } catch (error) {
//         console.error(error);
//         alert("Failed to delete comment");
//       }
//     }
//   };

//   const handleReportComment = async (commentId) => {
//     if (window.confirm("Are you sure you want to report this comment?")) {
//       try {
//         await axios.post(
//           `http://localhost:5000/api/comments/${commentId}/report`
//         );
//         alert("Comment reported successfully");
//       } catch (error) {
//         console.error(error);
//         alert("Failed to report comment");
//       }
//     }
//   };

//   const handleLike = async (articleId) => {
//     try {
//       const response = await axios.post(
//         `http://localhost:5000/api/articles/${articleId}/like`
//       );
//       setLikes((prev) => ({ ...prev, [articleId]: response.data.likes }));
//     } catch (error) {
//       console.error(error);
//       alert("Failed to like article");
//     }
//   };

//   const handleShare = (articleId) => {
//     const url = `${window.location.origin}/user/articles#${articleId}`;
//     navigator.clipboard.writeText(url);
//     alert("Article link copied to clipboard!");
//   };

//   const handleWishlist = async (articleId) => {
//     try {
//       const userId = localStorage.getItem("userId") || "guest";
//       const article = articles.find((a) => a._id === articleId);

//       const isInWishlist = localWishlist.includes(articleId);
//       setLocalWishlist((prev) =>
//         isInWishlist
//           ? prev.filter((id) => id !== articleId)
//           : [...prev, articleId]
//       );
//       setWishlist((prev) =>
//         isInWishlist
//           ? prev.filter((item) => item._id !== articleId)
//           : [...prev, article]
//       );

//       await axios.post(`http://localhost:5000/api/articles/${articleId}/save`, {
//         userId,
//       });

//       alert(
//         isInWishlist
//           ? "Article removed from wishlist"
//           : "Article added to wishlist"
//       );
//     } catch (error) {
//       console.error("Error updating wishlist:", error);
//       setLocalWishlist((prev) =>
//         prev.includes(articleId)
//           ? prev.filter((id) => id !== articleId)
//           : [...prev, articleId]
//       );
//       setWishlist((prev) =>
//         prev.some((item) => item._id === articleId)
//           ? prev
//           : [...prev, articles.find((a) => a._id === articleId)]
//       );
//       alert("Failed to update wishlist");
//     }
//   };

//   const renderArticleView = () => {
//     const article = articles[currentArticleIndex];

//     return (
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="bg-[#FFFFFF] rounded-2xl shadow-md overflow-hidden"
//       >
//         <div className="relative h-80">
//           <img
//             src={`http://localhost:5000${article.image}`}
//             alt={article.title}
//             className="w-full h-full object-cover"
//             onError={(e) => {
//               e.target.src = "/api/placeholder/1200/600";
//             }}
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

//           <motion.button
//             onClick={backToList}
//             className="absolute top-6 right-6 bg-white/80 p-2 rounded-full text-[#4CAF50] hover:bg-white"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <ArrowLeft className="w-6 h-6" />
//           </motion.button>

//           <div className="absolute bottom-6 right-6 left-6 text-white">
//             <div className="flex items-center mb-3">
//               <Tag className="w-5 h-5 mr-2" />
//               <span className="bg-[#4CAF50] text-white text-sm px-3 py-1 rounded-full">
//                 {article.category || "General Health"}
//               </span>
//             </div>
//             <h1 className="text-3xl md:text-4xl font-bold mb-2">
//               {article.title}
//             </h1>
//             <div className="flex flex-wrap items-center text-sm space-x-4">
//               <div className="flex items-center mr-4">
//                 <Calendar className="w-4 h-4 mr-1" />
//                 <span>{new Date(article.createdAt).toLocaleDateString()}</span>
//               </div>
//               <div className="flex items-center mr-4">
//                 <User className="w-4 h-4 mr-1" />
//                 <span>{article.author || "Medical Team"}</span>
//               </div>
//               <div className="flex items-center mr-4">
//                 <Clock className="w-4 h-4 mr-1" />
//                 <span>10 min read</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="p-8">
//           <div className="prose prose-lg max-w-none">
//             {article.content.split("\n").map((paragraph, idx) => (
//               <p
//                 key={idx}
//                 className="mb-4 text-gray-700 leading-relaxed text-left"
//               >
//                 {paragraph}
//               </p>
//             ))}
//           </div>

//           <div className="border-t border-gray-200 pt-6 mt-12">
//             <div className="flex justify-between items-center">
//               <div className="flex space-x-4">
//                 <motion.button
//                   onClick={() => handleLike(article._id)}
//                   className="flex items-center text-gray-500 hover:text-[#4CAF50]"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <Heart className="w-5 h-5 mr-1" />
//                   <span>Like ({likes[article._id] || 0})</span>
//                 </motion.button>
//                 <motion.button
//                   onClick={() => handleShare(article._id)}
//                   className="flex items-center text-gray-500 hover:text-[#4CAF50]"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <Share2 className="w-5 h-5 mr-1" />
//                   <span>Share</span>
//                 </motion.button>
//                 <motion.button
//                   onClick={() => handleWishlist(article._id)}
//                   className="flex items-center text-gray-500 hover:text-[#4CAF50]"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <Heart className="w-5 h-5 mr-1" />
//                   <span>
//                     {localWishlist.includes(article._id)
//                       ? "Remove from Wishlist"
//                       : "Add to Wishlist"}
//                   </span>
//                 </motion.button>
//               </div>

//               <div className="flex items-center">
//                 <motion.button
//                   onClick={previousArticle}
//                   disabled={currentArticleIndex === 0}
//                   className={`p-2 rounded-full mr-2 ${
//                     currentArticleIndex === 0
//                       ? "bg-gray-200 text-gray-400 cursor-not-allowed"
//                       : "bg-gray-100 text-[#4CAF50] hover:bg-gray-200"
//                   }`}
//                   whileHover={currentArticleIndex !== 0 ? { scale: 1.1 } : {}}
//                   whileTap={currentArticleIndex !== 0 ? { scale: 0.9 } : {}}
//                 >
//                   <ChevronLeft className="w-5 h-5" />
//                 </motion.button>

//                 <motion.button
//                   onClick={nextArticle}
//                   disabled={currentArticleIndex === articles.length - 1}
//                   className={`p-2 rounded-full ${
//                     currentArticleIndex === articles.length - 1
//                       ? "bg-gray-200 text-gray-400 cursor-not-allowed"
//                       : "bg-gray-100 text-[#4CAF50] hover:bg-gray-200"
//                   }`}
//                   whileHover={
//                     currentArticleIndex !== articles.length - 1
//                       ? { scale: 1.1 }
//                       : {}
//                   }
//                   whileTap={
//                     currentArticleIndex !== articles.length - 1
//                       ? { scale: 0.9 }
//                       : {}
//                   }
//                 >
//                   <ChevronRight className="w-5 h-5" />
//                 </motion.button>
//               </div>
//             </div>
//           </div>

//           <div className="mt-12 border-t border-gray-200 pt-8">
//             <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6 text-left">
//               Comments
//             </h3>

//             {error && <p className="text-[#D32F2F] mb-4">{error}</p>}

//             <div className="bg-gray-50 p-6 rounded-xl">
//               <h4 className="text-lg font-medium text-[#1A1A1A] mb-4 text-left">
//                 Add Your Comment
//               </h4>
//               <form onSubmit={handleCommentSubmit}>
//                 <input
//                   type="text"
//                   value={userName}
//                   onChange={(e) => setUserName(e.target.value)}
//                   className="w-full p-2 border rounded mb-4 text-left"
//                   placeholder="Your Name"
//                   required
//                 />
//                 <textarea
//                   value={newComment}
//                   onChange={(e) => setNewComment(e.target.value)}
//                   className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent text-left"
//                   rows="4"
//                   placeholder="Write your comment here..."
//                   required
//                 ></textarea>
//                 <div className="mt-4 flex justify-end">
//                   <motion.button
//                     type="submit"
//                     className="bg-[#4CAF50] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#388E3C] transition-all duration-300"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Submit
//                   </motion.button>
//                 </div>
//               </form>
//             </div>

//             <div className="mt-8 space-y-6">
//               {comments.length === 0 ? (
//                 <p className="text-gray-600">No comments yet</p>
//               ) : (
//                 comments.map((comment) => (
//                   <div
//                     key={comment._id}
//                     className="bg-[#FFFFFF] p-4 rounded-lg border border-gray-100 shadow-sm"
//                   >
//                     <div className="flex items-start">
//                       <div className="bg-gray-100 text-[#4CAF50] rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">
//                         {comment.userName.charAt(0).toUpperCase()}
//                       </div>
//                       <div className="flex-1">
//                         <div className="flex justify-between items-center mb-2">
//                           <h5 className="font-semibold text-[#1A1A1A]">
//                             {comment.userName}
//                           </h5>
//                           <span className="text-xs text-gray-500">
//                             {new Date(comment.createdAt).toLocaleDateString()}
//                           </span>
//                         </div>
//                         <p className="text-gray-600 text-left">
//                           {comment.content}
//                         </p>
//                         <div className="flex space-x-4 mt-2">
//                           {isAdmin && (
//                             <button
//                               onClick={() => handleDeleteComment(comment._id)}
//                               className="text-[#D32F2F] hover:text-[#B71C1C] text-sm"
//                             >
//                               Delete
//                             </button>
//                           )}
//                           <button
//                             onClick={() => handleReportComment(comment._id)}
//                             className="text-[#F57C00] hover:text-[#EF6C00] text-sm flex items-center"
//                           >
//                             <AlertCircle className="w-4 h-4 mr-1" />
//                             Report
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))
//               )}
//             </div>
//           </div>

//           <div className="mt-12 border-t border-gray-200 pt-8">
//             <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6 text-left">
//               Related Articles
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {articles.slice(0, 2).map(
//                 (relatedArticle, idx) =>
//                   idx !== currentArticleIndex && (
//                     <motion.div
//                       key={idx}
//                       className="bg-[#FFFFFF] rounded-xl overflow-hidden shadow-md hover:shadow-[#4CAF50]/20 transition-all duration-300 border border-gray-100"
//                       whileHover={{ y: -5 }}
//                       onClick={() => openArticle(idx)}
//                     >
//                       <div className="flex flex-col sm:flex-row h-full">
//                         <div className="sm:w-1/3">
//                           <img
//                             src={`http://localhost:5000${relatedArticle.image}`}
//                             alt={relatedArticle.title}
//                             className="w-full h-full object-cover"
//                             onError={(e) => {
//                               e.target.src = "/api/placeholder/400/320";
//                             }}
//                           />
//                         </div>
//                         <div className="p-4 sm:w-2/3">
//                           <h4 className="font-bold text-[#1A1A1A] mb-2 line-clamp-2 text-left">
//                             {relatedArticle.title}
//                           </h4>
//                           <p className="text-sm text-gray-600 line-clamp-2 text-left">
//                             {relatedArticle.content.substring(0, 100)}...
//                           </p>
//                         </div>
//                       </div>
//                     </motion.div>
//                   )
//               )}
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     );
//   };

//   const renderListArticleItem = (article, index) => {
//     return (
//       <motion.div
//         key={article._id || index}
//         className="bg-[#FFFFFF] rounded-xl overflow-hidden shadow-md hover:shadow-[#4CAF50]/20 transition-all duration-300 cursor-pointer"
//         variants={itemVariants}
//         whileHover={{ y: -5 }}
//         onClick={() => openArticle(index)}
//       >
//         <div className="flex flex-col md:flex-row h-full">
//           <div className="md:w-1/3 relative">
//             <img
//               src={`http://localhost:5000${article.image}`}
//               alt={article.title}
//               className="w-full h-full object-cover"
//               style={{ minHeight: "200px" }}
//               onError={(e) => {
//                 e.target.src = "/api/placeholder/400/320";
//               }}
//             />
//             <div className="absolute top-2 right-2">
//               <div className="bg-[#4CAF50] text-white text-xs font-bold px-3 py-1 rounded-full">
//                 {article.category || "General Health"}
//               </div>
//             </div>
//           </div>
//           <div className="p-6 md:w-2/3">
//             <h2 className="text-xl font-bold text-[#1A1A1A] mb-3 text-left">
//               {article.title}
//             </h2>
//             <p className="text-gray-600 mb-4 line-clamp-3 text-left">
//               {article.content.substring(0, 150)}...
//             </p>
//             <div className="flex items-center text-gray-500 text-sm space-x-4 mb-4">
//               <div className="flex items-center mr-3">
//                 <Calendar className="w-4 h-4 mr-1" />
//                 <span>{new Date(article.createdAt).toLocaleDateString()}</span>
//               </div>
//               <div className="flex items-center mr-3">
//                 <User className="w-4 h-4 mr-1" />
//                 <span>{article.author || "Medical Team"}</span>
//               </div>
//               <div className="flex items-center">
//                 <Clock className="w-4 h-4 mr-1" />
//                 <span>10 min read</span>
//               </div>
//             </div>
//             <motion.button
//               className="text-[#4CAF50] font-semibold hover:text-[#388E3C] flex items-center"
//               whileHover={{ x: 5 }}
//             >
//               <span>Read Full Article</span>
//               <ArrowRight className="w-4 h-4 ml-1" />
//             </motion.button>
//           </div>
//         </div>
//       </motion.div>
//     );
//   };

//   const renderGridArticleItem = (article, index) => {
//     return (
//       <motion.div
//         key={article._id || index}
//         className="bg-[#FFFFFF] rounded-2xl overflow-hidden shadow-md hover:shadow-[#4CAF50]/20 transition-all duration-300 cursor-pointer"
//         variants={itemVariants}
//         whileHover={{ scale: 1.02 }}
//         onClick={() => openArticle(index)}
//       >
//         <div className="relative">
//           <img
//             src={`http://localhost:5000${article.image}`}
//             alt={article.title}
//             className="w-full h-56 object-cover"
//             onError={(e) => {
//               e.target.src = "/api/placeholder/400/320";
//             }}
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
//           <div className="absolute bottom-4 left-4 right-4">
//             <div className="bg-[#4CAF50] text-white text-xs font-bold px-3 py-1 rounded-full inline-block">
//               {article.category || "General Health"}
//             </div>
//           </div>
//         </div>
//         <div className="p-6">
//           <h2 className="text-xl font-bold text-[#1A1A1A] mb-3 line-clamp-2 text-left">
//             {article.title}
//           </h2>
//           <p className="text-gray-600 mb-4 line-clamp-3 text-left">
//             {article.content.substring(0, 120)}...
//           </p>
//           <div className="flex items-center text-gray-500 text-sm space-x-4">
//             <div className="flex items-center mr-3">
//               <Calendar className="w-4 h-4 mr-1" />
//               <span>{new Date(article.createdAt).toLocaleDateString()}</span>
//             </div>
//             <div className="flex items-center">
//               <User className="w-4 h-4 mr-1" />
//               <span>{article.author || "Medical Team"}</span>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     );
//   };

//   const renderArticlesListView = () => {
//     return (
//       <>
//         <div className="flex justify-between items-center mb-8">
//           <h2 className="text-2xl font-bold text-[#1A1A1A] text-left">
//             All Articles
//           </h2>
//           <div className="flex items-center space-x-2 bg-[#FFFFFF] rounded-lg shadow-sm">
//             <motion.button
//               onClick={() => setViewMode("list")}
//               className={`p-2 rounded-l-lg ${
//                 viewMode === "list"
//                   ? "bg-[#4CAF50] text-white"
//                   : "bg-[#FFFFFF] text-[#4CAF50] hover:bg-gray-100"
//               }`}
//               whileHover={viewMode !== "list" ? { scale: 1.1 } : {}}
//               whileTap={viewMode !== "list" ? { scale: 0.9 } : {}}
//             >
//               <List className="w-5 h-5" />
//             </motion.button>
//             <motion.button
//               onClick={() => setViewMode("grid")}
//               className={`p-2 rounded-r-lg ${
//                 viewMode === "grid"
//                   ? "bg-[#4CAF50] text-white"
//                   : "bg-[#FFFFFF] text-[#4CAF50] hover:bg-gray-100"
//               }`}
//               whileHover={viewMode !== "grid" ? { scale: 1.1 } : {}}
//               whileTap={viewMode !== "grid" ? { scale: 0.9 } : {}}
//             >
//               <Grid className="w-5 h-5" />
//             </motion.button>
//           </div>
//         </div>
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className={
//             viewMode === "list"
//               ? "space-y-6"
//               : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//           }
//         >
//           {articles.map((article, index) =>
//             viewMode === "list"
//               ? renderListArticleItem(article, index)
//               : renderGridArticleItem(article, index)
//           )}
//         </motion.div>
//       </>
//     );
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex justify-center items-center bg-[#F5F5F5]">
//         <div className="flex flex-col items-center">
//           <div className="w-16 h-16 border-4 border-gray-200 border-t-[#4CAF50] rounded-full animate-spin"></div>
//           <p className="mt-4 text-[#1A1A1A] font-medium">Loading articles...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="text-[#D32F2F] text-center py-12">{error}</div>;
//   }

//   return (
//     <div className="min-h-screen bg-[#F5F5F5] pt-20 pb-12 px-6" dir="ltr">
//       <div className="container mx-auto max-w-6xl">
//         {viewMode === "article" ? (
//           renderArticleView()
//         ) : (
//           <>
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="text-center mb-12"
//             >
//               <h1 className="text-4xl font-bold text-[#1A1A1A] mb-4">
//                 Medical Articles
//               </h1>
//               <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//                 Explore the latest articles and helpful medical information from
//                 our team of experts
//               </p>
//             </motion.div>
//             {articles.length === 0 ? (
//               <div className="text-center py-12">
//                 <p className="text-xl text-gray-600">
//                   No articles available at the moment
//                 </p>
//               </div>
//             ) : (
//               renderArticlesListView()
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ArticlesPage;




import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  User,
  Tag,
  List,
  Grid,
  ArrowLeft,
  ArrowRight,
  Calendar,
  Share2,
  Heart,
  AlertCircle,
} from "lucide-react";

function ArticlesPage({ setWishlist }) {
  const [articles, setArticles] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentArticleIndex, setCurrentArticleIndex] = useState(null);
  const [viewMode, setViewMode] = useState("list");
  const [newComment, setNewComment] = useState("");
  const [userName, setUserName] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState("");
  const [likes, setLikes] = useState({});
  const [hasLiked, setHasLiked] = useState({});
  const [localWishlist, setLocalWishlist] = useState([]);

  useEffect(() => {
    const userType = localStorage.getItem("userType");
    setIsAdmin(userType === "admin");
  }, []);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const userId = localStorage.getItem("userId") || "guest";
        const response = await axios.get("http://localhost:5000/api/articles");
        setArticles(response.data);

        const initialLikes = {};
        const initialHasLiked = {};
        response.data.forEach((article) => {
          initialLikes[article._id] = article.likes || 0;
          initialHasLiked[article._id] =
            article.likedBy?.includes(userId) || false;
        });
        setLikes(initialLikes);
        setHasLiked(initialHasLiked);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch articles");
        setLoading(false);
      }
    };

    const fetchWishlist = async () => {
      try {
        const userId = localStorage.getItem("userId") || "guest";
        const response = await axios.get(
          `http://localhost:5000/api/articles/wishlist`,
          {
            params: { userId },
          }
        );
        setLocalWishlist(response.data.map((article) => article._id));
        setWishlist(response.data);
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      }
    };

    fetchArticles();
    fetchWishlist();
  }, [setWishlist]);

  useEffect(() => {
    if (viewMode === "article" && articles[currentArticleIndex]) {
      axios
        .get(
          `http://localhost:5000/api/comments/${articles[currentArticleIndex]._id}`
        )
        .then((response) => {
          setComments(response.data);
        })
        .catch((error) => {
          console.error(error);
          setError("Failed to fetch comments");
        });
    }
  }, [viewMode, currentArticleIndex, articles]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const openArticle = (index) => {
    setCurrentArticleIndex(index);
    setViewMode("article");
    window.scrollTo(0, 0);
  };

  const backToList = () => {
    setViewMode("list");
    setCurrentArticleIndex(null);
    setComments([]);
  };

  const nextArticle = () => {
    if (currentArticleIndex < articles.length - 1) {
      setCurrentArticleIndex(currentArticleIndex + 1);
      window.scrollTo(0, 0);
    }
  };

  const previousArticle = () => {
    if (currentArticleIndex > 0) {
      setCurrentArticleIndex(currentArticleIndex - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!userName || !newComment) {
      setError("Please enter your name and comment");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/comments/add",
        {
          articleId: articles[currentArticleIndex]._id,
          userName,
          content: newComment,
        }
      );
      setComments([response.data, ...comments]);
      setNewComment("");
      setUserName("");
      setError("");
    } catch (error) {
      console.error(error);
      setError("Failed to add comment");
    }
  };

  const handleDeleteComment = async (commentId) => {
    if (window.confirm("Are you sure you want to delete this comment?")) {
      try {
        await axios.delete(`http://localhost:5000/api/comments/${commentId}`);
        setComments(comments.filter((comment) => comment._id !== commentId));
        alert("Comment soft deleted successfully");
      } catch (error) {
        console.error(error);
        alert("Failed to delete comment");
      }
    }
  };

  const handleReportComment = async (commentId) => {
    if (window.confirm("Are you sure you want to report this comment?")) {
      try {
        await axios.post(
          `http://localhost:5000/api/comments/${commentId}/report`
        );
        alert("Comment reported successfully");
      } catch (error) {
        console.error(error);
        alert("Failed to report comment");
      }
    }
  };

  const handleLike = async (articleId) => {
    try {
      const userId = localStorage.getItem("userId") || "guest";
      const response = await axios.post(
        `http://localhost:5000/api/articles/${articleId}/like`,
        { userId }
      );

      setLikes((prev) => ({ ...prev, [articleId]: response.data.likes }));
      setHasLiked((prev) => ({ ...prev, [articleId]: response.data.liked }));
    } catch (error) {
      console.error(error);
      alert("Failed to update like status");
    }
  };

  const handleShare = (articleId) => {
    const url = `${window.location.origin}/user/articles#${articleId}`;
    navigator.clipboard.writeText(url);
    alert("Article link copied to clipboard!");
  };

  const handleWishlist = async (articleId) => {
    try {
      const userId = localStorage.getItem("userId") || "guest";
      const article = articles.find((a) => a._id === articleId);

      const isInWishlist = localWishlist.includes(articleId);
      setLocalWishlist((prev) =>
        isInWishlist
          ? prev.filter((id) => id !== articleId)
          : [...prev, articleId]
      );
      setWishlist((prev) =>
        isInWishlist
          ? prev.filter((item) => item._id !== articleId)
          : [...prev, article]
      );

      await axios.post(`http://localhost:5000/api/articles/${articleId}/save`, {
        userId,
      });

      alert(
        isInWishlist
          ? "Article removed from wishlist"
          : "Article added to wishlist"
      );
    } catch (error) {
      console.error("Error updating wishlist:", error);
      setLocalWishlist((prev) =>
        prev.includes(articleId)
          ? prev.filter((id) => id !== articleId)
          : [...prev, articleId]
      );
      setWishlist((prev) =>
        prev.some((item) => item._id === articleId)
          ? prev
          : [...prev, articles.find((a) => a._id === articleId)]
      );
      alert("Failed to update wishlist");
    }
  };

  const renderArticleView = () => {
    const article = articles[currentArticleIndex];

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-[#FFFFFF] rounded-2xl shadow-md overflow-hidden"
      >
        <div className="relative h-80">
          <img
            src={`http://localhost:5000${article.image}`}
            alt={article.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "/api/placeholder/1200/600";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

          <motion.button
            onClick={backToList}
            className="absolute top-6 right-6 bg-white/80 p-2 rounded-full text-[#4CAF50] hover:bg-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowLeft className="w-6 h-6" />
          </motion.button>

          <div className="absolute bottom-6 right-6 left-6 text-white">
            <div className="flex items-center mb-3">
              <Tag className="w-5 h-5 mr-2" />
              <span className="bg-[#4CAF50] text-white text-sm px-3 py-1 rounded-full">
                {article.category || "General Health"}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center text-sm space-x-4">
              <div className="flex items-center mr-4">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{new Date(article.createdAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center mr-4">
                <User className="w-4 h-4 mr-1" />
                <span>{article.author || "Medical Team"}</span>
              </div>
              <div className="flex items-center mr-4">
                <Clock className="w-4 h-4 mr-1" />
                <span>10 min read</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="prose prose-lg max-w-none">
            {article.content.split("\n").map((paragraph, idx) => (
              <p
                key={idx}
                className="mb-4 text-gray-700 leading-relaxed text-left"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-6 mt-12">
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <motion.button
                  onClick={() => handleLike(article._id)}
                  className="flex items-center text-gray-500 hover:text-[#4CAF50]"
                  whileHover={{ scale: 1.05 }}
                >
                  <Heart
                    className={`w-5 h-5 mr-1 ${
                      hasLiked[article._id] ? "fill-current" : ""
                    }`}
                  />
                  <span>
                    {hasLiked[article._id] ? "Unlike" : "Like"} (
                    {likes[article._id] || 0})
                  </span>
                </motion.button>
                <motion.button
                  onClick={() => handleShare(article._id)}
                  className="flex items-center text-gray-500 hover:text-[#4CAF50]"
                  whileHover={{ scale: 1.05 }}
                >
                  <Share2 className="w-5 h-5 mr-1" />
                  <span>Share</span>
                </motion.button>
                <motion.button
                  onClick={() => handleWishlist(article._id)}
                  className="flex items-center text-gray-500 hover:text-[#4CAF50]"
                  whileHover={{ scale: 1.05 }}
                >
                  <Heart className="w-5 h-5 mr-1" />
                  <span>
                    {localWishlist.includes(article._id)
                      ? "Remove from Wishlist"
                      : "Add to Wishlist"}
                  </span>
                </motion.button>
              </div>

              <div className="flex items-center">
                <motion.button
                  onClick={previousArticle}
                  disabled={currentArticleIndex === 0}
                  className={`p-2 rounded-full mr-2 ${
                    currentArticleIndex === 0
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-gray-100 text-[#4CAF50] hover:bg-gray-200"
                  }`}
                  whileHover={currentArticleIndex !== 0 ? { scale: 1.1 } : {}}
                  whileTap={currentArticleIndex !== 0 ? { scale: 0.9 } : {}}
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>

                <motion.button
                  onClick={nextArticle}
                  disabled={currentArticleIndex === articles.length - 1}
                  className={`p-2 rounded-full ${
                    currentArticleIndex === articles.length - 1
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-gray-100 text-[#4CAF50] hover:bg-gray-200"
                  }`}
                  whileHover={
                    currentArticleIndex !== articles.length - 1
                      ? { scale: 1.1 }
                      : {}
                  }
                  whileTap={
                    currentArticleIndex !== articles.length - 1
                      ? { scale: 0.9 }
                      : {}
                  }
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-200 pt-8">
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6 text-left">
              Comments
            </h3>

            {error && <p className="text-[#D32F2F] mb-4">{error}</p>}

            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="text-lg font-medium text-[#1A1A1A] mb-4 text-left">
                Add Your Comment
              </h4>
              <form onSubmit={handleCommentSubmit}>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full p-2 border rounded mb-4 text-left"
                  placeholder="Your Name"
                  required
                />
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent text-left"
                  rows="4"
                  placeholder="Write your comment here..."
                  required
                ></textarea>
                <div className="mt-4 flex justify-end">
                  <motion.button
                    type="submit"
                    className="bg-[#4CAF50] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#388E3C] transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Submit
                  </motion.button>
                </div>
              </form>
            </div>

            <div className="mt-8 space-y-6">
              {comments.length === 0 ? (
                <p className="text-gray-600">No comments yet</p>
              ) : (
                comments.map((comment) => (
                  <div
                    key={comment._id}
                    className="bg-[#FFFFFF] p-4 rounded-lg border border-gray-100 shadow-sm"
                  >
                    <div className="flex items-start">
                      <div className="bg-gray-100 text-[#4CAF50] rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">
                        {comment.userName.charAt(0).toUpperCase()}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <h5 className="font-semibold text-[#1A1A1A]">
                            {comment.userName}
                          </h5>
                          <span className="text-xs text-gray-500">
                            {new Date(comment.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-gray-600 text-left">
                          {comment.content}
                        </p>
                        <div className="flex space-x-4 mt-2">
                          {isAdmin && (
                            <button
                              onClick={() => handleDeleteComment(comment._id)}
                              className="text-[#D32F2F] hover:text-[#B71C1C] text-sm"
                            >
                              Delete
                            </button>
                          )}
                          <button
                            onClick={() => handleReportComment(comment._id)}
                            className="text-[#F57C00] hover:text-[#EF6C00] text-sm flex items-center"
                          >
                            <AlertCircle className="w-4 h-4 mr-1" />
                            Report
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="mt-12 border-t border-gray-200 pt-8">
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6 text-left">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.slice(0, 2).map(
                (relatedArticle, idx) =>
                  idx !== currentArticleIndex && (
                    <motion.div
                      key={idx}
                      className="bg-[#FFFFFF] rounded-xl overflow-hidden shadow-md hover:shadow-[#4CAF50]/20 transition-all duration-300 border border-gray-100"
                      whileHover={{ y: -5 }}
                      onClick={() => openArticle(idx)}
                    >
                      <div className="flex flex-col sm:flex-row h-full">
                        <div className="sm:w-1/3">
                          <img
                            src={`http://localhost:5000${relatedArticle.image}`}
                            alt={relatedArticle.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.src = "/api/placeholder/400/320";
                            }}
                          />
                        </div>
                        <div className="p-4 sm:w-2/3">
                          <h4 className="font-bold text-[#1A1A1A] mb-2 line-clamp-2 text-left">
                            {relatedArticle.title}
                          </h4>
                          <p className="text-sm text-gray-600 line-clamp-2 text-left">
                            {relatedArticle.content.substring(0, 100)}...
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const renderListArticleItem = (article, index) => {
    return (
      <motion.div
        key={article._id || index}
        className="bg-[#FFFFFF] rounded-xl overflow-hidden shadow-md hover:shadow-[#4CAF50]/20 transition-all duration-300 cursor-pointer"
        variants={itemVariants}
        whileHover={{ y: -5 }}
        onClick={() => openArticle(index)}
      >
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-1/3 relative">
            <img
              src={`http://localhost:5000${article.image}`}
              alt={article.title}
              className="w-full h-full object-cover"
              style={{ minHeight: "200px" }}
              onError={(e) => {
                e.target.src = "/api/placeholder/400/320";
              }}
            />
            <div className="absolute top-2 right-2">
              <div className="bg-[#4CAF50] text-white text-xs font-bold px-3 py-1 rounded-full">
                {article.category || "General Health"}
              </div>
            </div>
          </div>
          <div className="p-6 md:w-2/3">
            <h2 className="text-xl font-bold text-[#1A1A1A] mb-3 text-left">
              {article.title}
            </h2>
            <p className="text-gray-600 mb-4 line-clamp-3 text-left">
              {article.content.substring(0, 150)}...
            </p>
            <div className="flex items-center text-gray-500 text-sm space-x-4 mb-4">
              <div className="flex items-center mr-3">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{new Date(article.createdAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center mr-3">
                <User className="w-4 h-4 mr-1" />
                <span>{article.author || "Medical Team"}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>10 min read</span>
              </div>
            </div>
            <motion.button
              className="text-[#4CAF50] font-semibold hover:text-[#388E3C] flex items-center"
              whileHover={{ x: 5 }}
            >
              <span>Read Full Article</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  };

  const renderGridArticleItem = (article, index) => {
    return (
      <motion.div
        key={article._id || index}
        className="bg-[#FFFFFF] rounded-2xl overflow-hidden shadow-md hover:shadow-[#4CAF50]/20 transition-all duration-300 cursor-pointer"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        onClick={() => openArticle(index)}
      >
        <div className="relative">
          <img
            src={`http://localhost:5000${article.image}`}
            alt={article.title}
            className="w-full h-56 object-cover"
            onError={(e) => {
              e.target.src = "/api/placeholder/400/320";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-[#4CAF50] text-white text-xs font-bold px-3 py-1 rounded-full inline-block">
              {article.category || "General Health"}
            </div>
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-3 line-clamp-2 text-left">
            {article.title}
          </h2>
          <p className="text-gray-600 mb-4 line-clamp-3 text-left">
            {article.content.substring(0, 120)}...
          </p>
          <div className="flex items-center text-gray-500 text-sm space-x-4">
            <div className="flex items-center mr-3">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{new Date(article.createdAt).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              <span>{article.author || "Medical Team"}</span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const renderArticlesListView = () => {
    return (
      <>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-[#1A1A1A] text-left">
            All Articles
          </h2>
          <div className="flex items-center space-x-2 bg-[#FFFFFF] rounded-lg shadow-sm">
            <motion.button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-l-lg ${
                viewMode === "list"
                  ? "bg-[#4CAF50] text-white"
                  : "bg-[#FFFFFF] text-[#4CAF50] hover:bg-gray-100"
              }`}
              whileHover={viewMode !== "list" ? { scale: 1.1 } : {}}
              whileTap={viewMode !== "list" ? { scale: 0.9 } : {}}
            >
              <List className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-r-lg ${
                viewMode === "grid"
                  ? "bg-[#4CAF50] text-white"
                  : "bg-[#FFFFFF] text-[#4CAF50] hover:bg-gray-100"
              }`}
              whileHover={viewMode !== "grid" ? { scale: 1.1 } : {}}
              whileTap={viewMode !== "grid" ? { scale: 0.9 } : {}}
            >
              <Grid className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={
            viewMode === "list"
              ? "space-y-6"
              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          }
        >
          {articles.map((article, index) =>
            viewMode === "list"
              ? renderListArticleItem(article, index)
              : renderGridArticleItem(article, index)
          )}
        </motion.div>
      </>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#F5F5F5]">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-[#4CAF50] rounded-full animate-spin"></div>
          <p className="mt-4 text-[#1A1A1A] font-medium">Loading articles...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-[#D32F2F] text-center py-12">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5] pt-20 pb-12 px-6" dir="ltr">
      <div className="container mx-auto max-w-6xl">
        {viewMode === "article" ? (
          renderArticleView()
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl font-bold text-[#1A1A1A] mb-4">
                Medical Articles
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore the latest articles and helpful medical information from
                our team of experts
              </p>
            </motion.div>
            {articles.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">
                  No articles available at the moment
                </p>
              </div>
            ) : (
              renderArticlesListView()
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default ArticlesPage;