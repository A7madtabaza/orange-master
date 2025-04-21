// import React from "react";

// function Header() {
//   return (
//     <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
//       <h1 className="text-xl font-bold">لوحة تحكم الأدمن</h1>
//       <div className="flex items-center space-x-4">
//         <span>مرحبًا، أدمن</span>
//         <button className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded">
//           تسجيل الخروج
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Header;
// import React from "react";
// import { useNavigate } from "react-router-dom";

// function Header() {
//   const navigate = useNavigate(); // للتوجيه

//   const handleLogout = () => {
//     // هنا ممكن نضيف أي منطق لتسجيل الخروج (مثل مسح التوكن أو تحديث الحالة)
//     navigate("/user/login"); // توجيه المستخدم لصفحة تسجيل الدخول
//   };

//   return (
//     <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
//       <h1 className="text-xl font-bold">لوحة تحكم الأدمن</h1>
//       <div className="flex items-center space-x-4">
//         <span>مرحبًا، أدمن</span>
//         <button
//           onClick={handleLogout} // أضفت onClick لتسجيل الخروج
//           className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
//         >
//           تسجيل الخروج
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Header;



// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// function Header() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     navigate("/user/login");
//   };

//   return (
//     <motion.div
//       className="bg-green-600 text-white p-4 flex justify-between items-center"
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h1 className="text-xl font-bold">Admin Dashboard</h1>
//       <div className="flex items-center space-x-4">
//         <span>Welcome, Admin</span>
//         <motion.button
//           onClick={handleLogout}
//           className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-full font-semibold transition-all duration-300"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Logout
//         </motion.button>
//       </div>
//     </motion.div>
//   );
// }

// export default Header;


import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LogOut, User } from "lucide-react";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/user/login");
  };

  return (
    <motion.div
      className="bg-white text-gray-800 p-4 flex justify-between items-center fixed top-0 left-64 right-0 z-40 shadow-sm"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      dir="ltr"
      style={{ direction: "ltr" }}
    >
      <h1 className="text-xl font-bold text-green-700">Dashboard Overview</h1>
      <div className="flex items-center space-x-4">
        <div className="flex items-center bg-green-50 px-4 py-2 rounded-lg">
          <User className="w-5 h-5 text-green-600 mr-2" />
          <span className="text-gray-700 font-medium">Welcome, Admin</span>
        </div>
        <motion.button
          onClick={handleLogout}
          className="bg-white border border-red-500 text-red-500 hover:bg-red-50 px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </motion.button>
      </div>
    </motion.div>
  );
}

export default Header;