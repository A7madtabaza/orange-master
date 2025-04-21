// import React from "react";
// import { Link } from "react-router-dom";

// function Sidebar() {
//   return (
//     <div className="w-64 h-screen bg-gray-800 text-white p-4">
//       <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
//       <ul>
//         <li className="mb-4">
//           <Link to="/admin/statistics" className="hover:text-gray-300">
//             الإحصائيات
//           </Link>
//         </li>
//         <li className="mb-4">
//           <Link to="/admin/doctor-approval" className="hover:text-gray-300">
//             الموافقة على الأطباء
//           </Link>
//         </li>
//         <li className="mb-4">
//           <Link to="/admin/add-medicine" className="hover:text-gray-300">
//             إضافة دواء
//           </Link>
//         </li>
//         <li className="mb-4">
//           <Link to="/admin/medicines" className="hover:text-gray-300">
//             قائمة الأدوية
//           </Link>
//         </li>
//         <li className="mb-4">
//           <Link to="/admin/add-article" className="hover:text-gray-300">
//             إضافة مقالة
//           </Link>
//         </li>
//         <li className="mb-4">
//           <Link to="/admin/articles" className="hover:text-gray-300">
//             قائمة المقالات
//           </Link>
//         </li>
//         <li className="mb-4">
//           <Link to="/admin/comments" className="hover:text-gray-300">
//             إدارة التعليقات
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;


// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// function Sidebar() {
//   const linkVariants = {
//     hover: {
//       scale: 1.05,
//       color: "#D1FAE5",
//       transition: { duration: 0.3 },
//     },
//   };

//   return (
//     <motion.div
//       className="w-64 h-screen bg-green-800 text-white p-6"
//       initial={{ opacity: 0, x: -50 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
//       <ul className="space-y-4">
//         <li>
//           <motion.div whileHover="hover" variants={linkVariants}>
//             <Link to="/admin/statistics" className="hover:text-green-200">
//               Statistics
//             </Link>
//           </motion.div>
//         </li>
//         <li>
//           <motion.div whileHover="hover" variants={linkVariants}>
//             <Link to="/admin/doctor-approval" className="hover:text-green-200">
//               Doctor Approval
//             </Link>
//           </motion.div>
//         </li>
//         <li>
//           <motion.div whileHover="hover" variants={linkVariants}>
//             <Link to="/admin/add-medicine" className="hover:text-green-200">
//               Add Medicine
//             </Link>
//           </motion.div>
//         </li>
//         <li>
//           <motion.div whileHover="hover" variants={linkVariants}>
//             <Link to="/admin/medicines" className="hover:text-green-200">
//               Medicines List
//             </Link>
//           </motion.div>
//         </li>
//         <li>
//           <motion.div whileHover="hover" variants={linkVariants}>
//             <Link to="/admin/add-article" className="hover:text-green-200">
//               Add Article
//             </Link>
//           </motion.div>
//         </li>
//         <li>
//           <motion.div whileHover="hover" variants={linkVariants}>
//             <Link to="/admin/articles" className="hover:text-green-200">
//               Articles List
//             </Link>
//           </motion.div>
//         </li>
//         <li>
//           <motion.div whileHover="hover" variants={linkVariants}>
//             <Link to="/admin/comments" className="hover:text-green-200">
//               Comments Management
//             </Link>
//           </motion.div>
//         </li>
//       </ul>
//     </motion.div>
//   );
// }

// export default Sidebar;



// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// function Sidebar() {
//   const linkVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.3, ease: "easeOut" },
//     },
//     hover: {
//       scale: 1.05,
//       color: "#10B981",
//       backgroundColor: "#F0FDF4",
//       transition: { duration: 0.3 },
//     },
//   };

//   return (
//     <motion.div
//       dir="ltr"
//       className="w-64 h-screen bg-white text-gray-900 p-6 fixed top-0 left-0 shadow-lg overflow-y-auto z-50"
//       initial={{ opacity: 0, x: -50 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.5 }}
//       style={{ direction: "ltr" }}
//     >
//       <h2 className="text-2xl font-bold mb-6 text-left !text-gray-900">
//         Admin Dashboard
//       </h2>
//       <ul className="space-y-4">
//         <li>
//           <motion.div
//             variants={linkVariants}
//             initial="hidden"
//             animate="visible"
//             whileHover="hover"
//             transition={{ delay: 0.1 }}
//           >
//             <Link
//               to="/admin/statistics"
//               className="text-left block py-1 px-2 rounded !text-gray-900"
//             >
//               Statistics
//             </Link>
//           </motion.div>
//         </li>
//         <li>
//           <motion.div
//             variants={linkVariants}
//             initial="hidden"
//             animate="visible"
//             whileHover="hover"
//             transition={{ delay: 0.2 }}
//           >
//             <Link
//               to="/admin/doctor-approval"
//               className="text-left block py-1 px-2 rounded !text-gray-900"
//             >
//               Doctor Approval
//             </Link>
//           </motion.div>
//         </li>
//         <li>
//           <motion.div
//             variants={linkVariants}
//             initial="hidden"
//             animate="visible"
//             whileHover="hover"
//             transition={{ delay: 0.3 }}
//           >
//             <Link
//               to="/admin/add-medicine"
//               className="text-left block py-1 px-2 rounded !text-gray-900"
//             >
//               Add Medicine
//             </Link>
//           </motion.div>
//         </li>
//         <li>
//           <motion.div
//             variants={linkVariants}
//             initial="hidden"
//             animate="visible"
//             whileHover="hover"
//             transition={{ delay: 0.4 }}
//           >
//             <Link
//               to="/admin/medicines"
//               className="text-left block py-1 px-2 rounded !text-gray-900"
//             >
//               Medicines List
//             </Link>
//           </motion.div>
//         </li>
//         <li>
//           <motion.div
//             variants={linkVariants}
//             initial="hidden"
//             animate="visible"
//             whileHover="hover"
//             transition={{ delay: 0.5 }}
//           >
//             <Link
//               to="/admin/add-article"
//               className="text-left block py-1 px-2 rounded !text-gray-900"
//             >
//               Add Article
//             </Link>
//           </motion.div>
//         </li>
//         <li>
//           <motion.div
//             variants={linkVariants}
//             initial="hidden"
//             animate="visible"
//             whileHover="hover"
//             transition={{ delay: 0.6 }}
//           >
//             <Link
//               to="/admin/articles"
//               className="text-left block py-1 px-2 rounded !text-gray-900"
//             >
//               Articles List
//             </Link>
//           </motion.div>
//         </li>
//         <li>
//           <motion.div
//             variants={linkVariants}
//             initial="hidden"
//             animate="visible"
//             whileHover="hover"
//             transition={{ delay: 0.7 }}
//           >
//             <Link
//               to="/admin/comments"
//               className="text-left block py-1 px-2 rounded !text-gray-900"
//             >
//               Comments Management
//             </Link>
//           </motion.div>
//         </li>
//       </ul>
//     </motion.div>
//   );
// }

// export default Sidebar;


// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   BarChart2,
//   UserCheck,
//   PlusCircle,
//   List,
//   FileText,
//   FilePlus,
//   MessageSquare,
//   Home,
// } from "lucide-react";

// function Sidebar() {
//   const location = useLocation();

//   const menuItems = [
//     { path: "/admin/dashboard", name: "Dashboard", icon: <Home size={18} /> },
//     {
//       path: "/admin/statistics",
//       name: "Statistics",
//       icon: <BarChart2 size={18} />,
//     },
//     {
//       path: "/admin/doctor-approval",
//       name: "Doctor Approval",
//       icon: <UserCheck size={18} />,
//     },
//     {
//       path: "/admin/add-medicine",
//       name: "Add Medicine",
//       icon: <PlusCircle size={18} />,
//     },
//     {
//       path: "/admin/medicines",
//       name: "Medicines List",
//       icon: <List size={18} />,
//     },
//     {
//       path: "/admin/add-article",
//       name: "Add Article",
//       icon: <FilePlus size={18} />,
//     },
//     {
//       path: "/admin/articles",
//       name: "Articles List",
//       icon: <FileText size={18} />,
//     },
//     {
//       path: "/admin/comments",
//       name: "Comments Management",
//       icon: <MessageSquare size={18} />,
//     },
//   ];

//   const linkVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.3, ease: "easeOut" },
//     },
//     hover: {
//       scale: 1.02,
//       transition: { duration: 0.2 },
//     },
//   };

//   return (
//     <motion.div
//       dir="ltr"
//       className="w-64 h-screen bg-white text-gray-800 fixed top-0 left-0 shadow-lg overflow-y-auto z-50 flex flex-col"
//       initial={{ opacity: 0, x: -50 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.5 }}
//       style={{ direction: "ltr" }}
//     >
//       <div className="p-6 border-b border-gray-100">
//         <h2 className="text-xl font-bold text-green-700">Admin Dashboard</h2>
//       </div>

//       <div className="p-4 flex-1">
//         <ul className="space-y-1">
//           {menuItems.map((item, index) => {
//             const isActive = location.pathname === item.path;

//             return (
//               <li key={item.path}>
//                 <motion.div
//                   variants={linkVariants}
//                   initial="hidden"
//                   animate="visible"
//                   whileHover="hover"
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   <Link
//                     to={item.path}
//                     className={`flex items-center py-2 px-3 rounded-lg transition-all duration-200 ${
//                       isActive
//                         ? "bg-green-500 text-white font-medium"
//                         : "text-gray-700 hover:bg-green-50 hover:text-green-600"
//                     }`}
//                   >
//                     <span className="mr-3">{item.icon}</span>
//                     <span>{item.name}</span>
//                     {isActive && (
//                       <motion.div
//                         className="ml-auto w-1 h-1 bg-white rounded-full"
//                         layoutId="active-indicator"
//                       />
//                     )}
//                   </Link>
//                 </motion.div>
//               </li>
//             );
//           })}
//         </ul>
//       </div>

//       <div className="p-4 border-t border-gray-100">
//         <div className="flex items-center text-sm">
//           <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
//             A
//           </div>
//           <div className="ml-3">
//             <p className="font-medium text-gray-800">Admin User</p>
//             <p className="text-xs text-gray-500">admin@example.com</p>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default Sidebar;


// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   BarChart2,
//   UserCheck,
//   PlusCircle,
//   List,
//   FileText,
//   FilePlus,
//   MessageSquare,
//   Home,
// } from "lucide-react";

// function Sidebar() {
//   const location = useLocation();

//   const menuItems = [
//     { path: "/admin/dashboard", name: "Dashboard", icon: <Home size={16} /> },
//     {
//       path: "/admin/statistics",
//       name: "Statistics",
//       icon: <BarChart2 size={16} />,
//     },
//     {
//       path: "/admin/doctor-approval",
//       name: "Doctor Approval",
//       icon: <UserCheck size={16} />,
//     },
//     {
//       path: "/admin/add-medicine",
//       name: "Add Medicine",
//       icon: <PlusCircle size={16} />,
//     },
//     {
//       path: "/admin/medicines",
//       name: "Medicines List",
//       icon: <List size={16} />,
//     },
//     {
//       path: "/admin/add-article",
//       name: "Add Article",
//       icon: <FilePlus size={16} />,
//     },
//     {
//       path: "/admin/articles",
//       name: "Articles List",
//       icon: <FileText size={16} />,
//     },
//     {
//       path: "/admin/comments",
//       name: "Comments Management",
//       icon: <MessageSquare size={16} />,
//     },
//   ];

//   const linkVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.3, ease: "easeOut" },
//     },
//     hover: {
//       scale: 1.02,
//       transition: { duration: 0.2 },
//     },
//   };

//   return (
//     <motion.div
//       dir="ltr"
//       className="w-64 h-screen bg-white text-gray-800 fixed top-0 left-0 shadow-lg overflow-y-auto z-50 flex flex-col"
//       initial={{ opacity: 0, x: -50 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.5 }}
//       style={{ direction: "ltr" }}
//     >
//       <div className="p-4 border-b border-gray-100">
//         <h2 className="text-lg font-bold text-green-700">Admin Dashboard</h2>
//       </div>

//       <div className="p-3 flex-1">
//         <ul className="space-y-0.5">
//           {menuItems.map((item, index) => {
//             const isActive = location.pathname === item.path;

//             return (
//               <li key={item.path}>
//                 <motion.div
//                   variants={linkVariants}
//                   initial="hidden"
//                   animate="visible"
//                   whileHover="hover"
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   <Link
//                     to={item.path}
//                     className={`flex items-center py-2 px-3 rounded-lg transition-all duration-200 text-sm ${
//                       isActive
//                         ? "bg-green-500 text-white font-medium"
//                         : "text-gray-700 hover:bg-green-50 hover:text-green-600"
//                     }`}
//                   >
//                     <span className="mr-2">{item.icon}</span>
//                     <span>{item.name}</span>
//                     {isActive && (
//                       <motion.div
//                         className="ml-auto w-1 h-1 bg-white rounded-full"
//                         layoutId="active-indicator"
//                       />
//                     )}
//                   </Link>
//                 </motion.div>
//               </li>
//             );
//           })}
//         </ul>
//       </div>

//       <div className="p-3 border-t border-gray-100">
//         <div className="flex items-center text-sm">
//           <div className="flex-shrink-0 h-7 w-7 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
//             A
//           </div>
//           <div className="ml-2">
//             <p className="font-medium text-gray-800">Admin User</p>
//             <p className="text-xs text-gray-500">admin@example.com</p>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default Sidebar;


import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BarChart2,
  UserCheck,
  PlusCircle,
  List,
  FileText,
  FilePlus,
  MessageSquare,
  Home,
} from "lucide-react";

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    
    {
      path: "/admin/statistics",
      name: "Statistics",
      icon: <BarChart2 size={18} />,
    },
    {
      path: "/admin/doctor-approval",
      name: "Doctor Approval",
      icon: <UserCheck size={18} />,
    },
    {
      path: "/admin/add-medicine",
      name: "Add Medicine",
      icon: <PlusCircle size={18} />,
    },
    {
      path: "/admin/medicines",
      name: "Medicines List",
      icon: <List size={18} />,
    },
    {
      path: "/admin/add-article",
      name: "Add Article",
      icon: <FilePlus size={18} />,
    },
    {
      path: "/admin/articles",
      name: "Articles List",
      icon: <FileText size={18} />,
    },
    {
      path: "/admin/comments",
      name: "Comments Management",
      icon: <MessageSquare size={18} />,
    },
  ];

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      dir="ltr"
      className="w-64 h-screen bg-white text-gray-800 fixed top-0 left-0 shadow-lg overflow-y-auto z-50 flex flex-col"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      style={{ direction: "ltr" }}
    >
      <div className="p-5 border-b border-gray-100">
        <h2 className="text-xl font-bold text-green-700">Admin Dashboard</h2>
      </div>

      <div className="p-4 flex-1">
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;

            return (
              <li key={item.path}>
                <motion.div
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center py-3 px-4 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-green-600 text-white font-medium"
                        : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span>{item.name}</span>
                    {isActive && (
                      <motion.div
                        className="ml-auto w-2 h-2 bg-white rounded-full"
                        layoutId="active-indicator"
                      />
                    )}
                  </Link>
                </motion.div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-9 w-9 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
            A
          </div>
          <div className="ml-3">
            <p className="font-medium text-gray-800">Admin User</p>
            <p className="text-sm text-gray-500">admin@example.com</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Sidebar;