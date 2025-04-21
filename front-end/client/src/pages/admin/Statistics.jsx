// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Statistics() {
//   const [stats, setStats] = useState({ doctors: 0, medicines: 0, articles: 0 });

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const [doctorsRes, medicinesRes, articlesRes] = await Promise.all([
//           axios.get("http://localhost:5000/api/doctors/pending"),
//           axios.get("http://localhost:5000/api/medicines"),
//           axios.get("http://localhost:5000/api/articles"),
//         ]);
//         setStats({
//           doctors: doctorsRes.data.length,
//           medicines: medicinesRes.data.length,
//           articles: articlesRes.data.length,
//         });
//       } catch (error) {
//         console.error("Error fetching stats:", error);
//       }
//     };
//     fetchStats();
//   }, []);

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-6">الإحصائيات</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="bg-blue-100 p-4 rounded-lg">
//           <h3 className="text-lg font-semibold">عدد الأطباء المعلقين</h3>
//           <p className="text-2xl">{stats.doctors}</p>
//         </div>
//         <div className="bg-green-100 p-4 rounded-lg">
//           <h3 className="text-lg font-semibold">عدد الأدوية</h3>
//           <p className="text-2xl">{stats.medicines}</p>
//         </div>
//         <div className="bg-yellow-100 p-4 rounded-lg">
//           <h3 className="text-lg font-semibold">عدد المقالات</h3>
//           <p className="text-2xl">{stats.articles}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Statistics;




// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import axios from "axios";

// function Statistics() {
//   const [stats, setStats] = useState({ doctors: 0, medicines: 0, articles: 0 });
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const [doctorsRes, medicinesRes, articlesRes] = await Promise.all([
//           axios.get("http://localhost:5000/api/doctors/pending"),
//           axios.get("http://localhost:5000/api/medicines"),
//           axios.get("http://localhost:5000/api/articles"),
//         ]);
//         setStats({
//           doctors: doctorsRes.data.length,
//           medicines: medicinesRes.data.length,
//           articles: articlesRes.data.length,
//         });
//       } catch (error) {
//         console.error("Error fetching stats:", error);
//       }
//     };
//     fetchStats();
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
//           Statistics
//         </motion.h1>
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-3 gap-8"
//           variants={childVariants}
//         >
//           <motion.div
//             className="bg-green-50 p-6 rounded-2xl shadow-lg"
//             variants={childVariants}
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <h3 className="text-lg font-semibold text-green-800 mb-2">
//               Pending Doctors
//             </h3>
//             <p className="text-2xl font-bold text-gray-800">{stats.doctors}</p>
//           </motion.div>
//           <motion.div
//             className="bg-green-50 p-6 rounded-2xl shadow-lg"
//             variants={childVariants}
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <h3 className="text-lg font-semibold text-green-800 mb-2">
//               Medicines
//             </h3>
//             <p className="text-2xl font-bold text-gray-800">
//               {stats.medicines}
//             </p>
//           </motion.div>
//           <motion.div
//             className="bg-green-50 p-6 rounded-2xl shadow-lg"
//             variants={childVariants}
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <h3 className="text-lg font-semibold text-green-800 mb-2">
//               Articles
//             </h3>
//             <p className="text-2xl font-bold text-gray-800">{stats.articles}</p>
//           </motion.div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// }

// export default Statistics;






// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import axios from "axios";

// function Statistics() {
//   const [stats, setStats] = useState({ doctors: 0, medicines: 0, articles: 0 });
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const [doctorsRes, medicinesRes, articlesRes] = await Promise.all([
//           axios.get("http://localhost:5000/api/doctors/pending"),
//           axios.get("http://localhost:5000/api/medicines"),
//           axios.get("http://localhost:5000/api/articles"),
//         ]);
//         setStats({
//           doctors: doctorsRes.data.length,
//           medicines: medicinesRes.data.length,
//           articles: articlesRes.data.length,
//         });
//       } catch (error) {
//         console.error("Error fetching stats:", error);
//       }
//     };
//     fetchStats();
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
//       className="font-sans text-gray-800 min-h-screen bg-white py-20 px-6 ml-64"
//       initial="hidden"
//       animate={isVisible ? "visible" : "hidden"}
//       variants={sectionVariants}
//       dir="ltr"
//       style={{ direction: "ltr" }}
//     >
//       <div className="container mx-auto max-w-6xl">
//         <motion.h1
//           className="text-4xl font-bold text-green-800 mb-6 text-left"
//           variants={childVariants}
//         >
//           Dashboard Statistics
//         </motion.h1>
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
//           variants={childVariants}
//         >
//           <motion.div
//             className="bg-white shadow-lg rounded-2xl p-6 text-center border border-gray-200"
//             variants={childVariants}
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <h3 className="text-xl font-semibold text-gray-900">
//               Pending Doctors
//             </h3>
//             <p className="text-4xl font-bold text-green-500 mt-2">
//               {stats.doctors}
//             </p>
//           </motion.div>
//           <motion.div
//             className="bg-white shadow-lg rounded-2xl p-6 text-center border border-gray-200"
//             variants={childVariants}
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <h3 className="text-xl font-semibold text-gray-900">Medicines</h3>
//             <p className="text-4xl font-bold text-green-500 mt-2">
//               {stats.medicines}
//             </p>
//           </motion.div>
//           <motion.div
//             className="bg-white shadow-lg rounded-2xl p-6 text-center border border-gray-200"
//             variants={childVariants}
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <h3 className="text-xl font-semibold text-gray-900">Articles</h3>
//             <p className="text-4xl font-bold text-green-500 mt-2">
//               {stats.articles}
//             </p>
//           </motion.div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// }

// export default Statistics;




import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import axios from "axios";
import { Users, Pill, FileText, RefreshCw } from "lucide-react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Statistics = () => {
  const [stats, setStats] = useState({ doctors: 0, medicines: 0, articles: 0 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  // Counter states for animated numbers
  const [doctorCount, setDoctorCount] = useState(0);
  const [medicineCount, setMedicineCount] = useState(0);
  const [articleCount, setArticleCount] = useState(0);

  // Fetch statistics from the API
  const fetchStats = async () => {
    setLoading(true);
    setError(null);
    try {
      const [doctorsRes, medicinesRes, articlesRes] = await Promise.all([
        axios.get("http://localhost:5000/api/doctors/pending", {
          withCredentials: true,
        }),
        axios.get("http://localhost:5000/api/medicines", {
          withCredentials: true,
        }),
        axios.get("http://localhost:5000/api/articles", {
          withCredentials: true,
        }),
      ]);
      const newStats = {
        doctors: doctorsRes.data.length,
        medicines: medicinesRes.data.length,
        articles: articlesRes.data.length,
      };
      setStats(newStats);

      // Start counter animation
      controls.start("visible");

      // Animate counters
      animateCounter(0, newStats.doctors, 1000, setDoctorCount);
      animateCounter(0, newStats.medicines, 1000, setMedicineCount);
      animateCounter(0, newStats.articles, 1000, setArticleCount);
    } catch (error) {
      console.error("Error fetching stats:", error);
      setError("Failed to fetch statistics. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Function to animate counter from start to end value
  const animateCounter = (start, end, duration, setCount) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      setCount(value);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  };

  useEffect(() => {
    fetchStats();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start("visible");
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
  }, [controls]);

  // Animation variants for the section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  // Animation variants for child elements
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Animation for the cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  // Data for the Bar Chart
  const chartData = {
    labels: ["Pending Doctors", "Medicines", "Articles"],
    datasets: [
      {
        label: "Count",
        data: [stats.doctors, stats.medicines, stats.articles],
        backgroundColor: [
          "rgba(34, 197, 94, 0.6)", // Green for Doctors
          "rgba(34, 197, 94, 0.6)", // Green for Medicines
          "rgba(34, 197, 94, 0.6)", // Green for Articles
        ],
        borderColor: [
          "rgba(34, 197, 94, 1)",
          "rgba(34, 197, 94, 1)",
          "rgba(34, 197, 94, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Options for the Bar Chart
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend since we only have one dataset
      },
      title: {
        display: true,
        text: "Platform Statistics Overview",
        font: {
          size: 18,
          weight: "bold",
        },
        color: "#15803d", // Green color for title
        padding: {
          bottom: 30,
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
        padding: 10,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Count",
          font: {
            size: 14,
          },
          color: "#15803d",
        },
        ticks: {
          stepSize: 1, // Ensure whole numbers
          color: "#6b7280",
        },
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Categories",
          font: {
            size: 14,
          },
          color: "#15803d",
        },
        ticks: {
          color: "#6b7280",
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <motion.div
      ref={sectionRef}
      className="font-sans text-gray-800 min-h-screen py-20 px-6 ml-64 bg-gradient-to-br from-green-50 via-white to-green-100"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={sectionVariants}
      dir="ltr"
      style={{ direction: "ltr" }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <motion.div className="mb-12 text-left" variants={childVariants}>
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-2">
            Dashboard Statistics
          </h1>
          <p className="text-lg text-gray-600">
            Get a quick overview of your platform's key metrics
          </p>
          <motion.button
            onClick={fetchStats}
            className="mt-4 flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
          >
            <RefreshCw
              className={`w-5 h-5 mr-2 ${loading ? "animate-spin" : ""}`}
            />
            {loading ? "Refreshing..." : "Refresh Stats"}
          </motion.button>
        </motion.div>

        {/* Error Message */}
        {error && (
          <motion.div
            className="mb-8 p-4 bg-red-100 text-red-700 rounded-lg text-center"
            variants={childVariants}
          >
            {error}
          </motion.div>
        )}

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12"
          variants={childVariants}
        >
          {/* Pending Doctors Card */}
          <motion.div
            className="relative bg-white shadow-xl rounded-2xl p-8 text-center border-t-4 border-green-500 overflow-hidden"
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.15)",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-300"></div>
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Pending Doctors
            </h3>
            <motion.p
              className="text-5xl font-bold text-green-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {doctorCount}
            </motion.p>
          </motion.div>

          {/* Medicines Card */}
          <motion.div
            className="relative bg-white shadow-xl rounded-2xl p-8 text-center border-t-4 border-green-500 overflow-hidden"
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.15)",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-300"></div>
            <div className="flex justify-center mb-4">
              <Pill className="w-12 h-12 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Medicines
            </h3>
            <motion.p
              className="text-5xl font-bold text-green-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {medicineCount}
            </motion.p>
          </motion.div>

          {/* Articles Card */}
          <motion.div
            className="relative bg-white shadow-xl rounded-2xl p-8 text-center border-t-4 border-green-500 overflow-hidden"
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.15)",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-300"></div>
            <div className="flex justify-center mb-4">
              <FileText className="w-12 h-12 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Articles
            </h3>
            <motion.p
              className="text-5xl font-bold text-green-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {articleCount}
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Bar Chart */}
        <motion.div
          className="bg-white rounded-2xl p-6 shadow-md mb-12"
          variants={childVariants}
        >
          <Bar data={chartData} options={chartOptions} />
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          className="mt-12 text-center bg-white rounded-2xl p-6 shadow-md"
          variants={childVariants}
        >
          <p className="text-gray-600">
            These statistics are updated in real-time. Use the refresh button to
            get the latest data.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Statistics;