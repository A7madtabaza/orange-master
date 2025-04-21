import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Calendar, User, Clock, ArrowRight, Trash2 } from "lucide-react";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        setLoading(true);
        const userId = localStorage.getItem("userId") || "guest";
        const response = await axios.get(
          `http://localhost:5000/api/articles/wishlist`,
          {
            params: { userId },
          }
        );
        setWishlist(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch wishlist articles");
        setLoading(false);
      }
    };
    fetchWishlist();
  }, []);

  const handleRemoveFromWishlist = async (articleId) => {
    if (
      window.confirm(
        "Are you sure you want to remove this article from your wishlist?"
      )
    ) {
      try {
        const userId = localStorage.getItem("userId") || "guest";
        await axios.post(
          `http://localhost:5000/api/articles/${articleId}/save`,
          { userId }
        );
        setWishlist(wishlist.filter((article) => article._id !== articleId));
        alert("Article removed from wishlist");
      } catch (error) {
        console.error(error);
        alert("Failed to remove article from wishlist");
      }
    }
  };

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

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#F5F5F5]">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-[#4CAF50] rounded-full animate-spin"></div>
          <p className="mt-4 text-[#1A1A1A] font-medium">Loading wishlist...</p>
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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-[#1A1A1A] mb-4">
            My Wishlist
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your saved articles for quick access
          </p>
        </motion.div>
        {wishlist.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              No articles in your wishlist yet
            </p>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {wishlist.map((article) => (
              <motion.div
                key={article._id}
                className="bg-[#FFFFFF] rounded-xl overflow-hidden shadow-md hover:shadow-[#4CAF50]/20 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
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
                  <div className="p-6 md:w-2/3 flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-[#1A1A1A] mb-3 text-left">
                        {article.title}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3 text-left">
                        {article.content.substring(0, 150)}...
                      </p>
                      <div className="flex items-center text-gray-500 text-sm space-x-4 mb-4">
                        <div className="flex items-center mr-3">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>
                            {new Date(article.createdAt).toLocaleDateString()}
                          </span>
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
                    </div>
                    <div className="flex justify-between items-center">
                      <motion.button
                        className="text-[#4CAF50] font-semibold hover:text-[#388E3C] flex items-center"
                        whileHover={{ x: 5 }}
                      >
                        <span>Read Full Article</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </motion.button>
                      <motion.button
                        onClick={() => handleRemoveFromWishlist(article._id)}
                        className="text-[#D32F2F] hover:text-[#B71C1C] flex items-center"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Trash2 className="w-5 h-5 mr-1" />
                        <span>Remove</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
