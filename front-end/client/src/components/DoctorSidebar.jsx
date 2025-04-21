// import React from "react";
// import { HomeIcon, UsersIcon, UserPlusIcon, LogOutIcon } from "lucide-react";
// import { Link, useLocation } from "react-router-dom";

// const DoctorSidebar = () => {
//   const location = useLocation();

//   const menuItems = [
//     {
//       title: "Dashboard",
//       icon: <HomeIcon size={20} />,
//       path: "/doctor/dashboard",
//     },
//     {
//       title: "Patients",
//       icon: <UsersIcon size={20} />,
//       path: "/doctor/patients",
//     },
//     {
//       title: "Add Patient",
//       icon: <UserPlusIcon size={20} />,
//       path: "/doctor/add-patient",
//     },
//   ];

//   const isActive = (path) => {
//     return location.pathname === path;
//   };

//   const handleLogout = () => {
//     // Add your logout logic here
//     console.log("User logged out");
//   };

//   return (
//     <div className="h-screen w-64 bg-[#0A4C6A] text-white p-5 fixed left-0 flex flex-col border-r border-[#00A896]">
//       <div className="mb-10 text-center">
//         <h1 className="text-2xl font-bold">MediCare</h1>
//         <p className="text-[#00A896] mt-2">Doctor Portal</p>
//       </div>

//       <div className="flex flex-col flex-grow">
//         <nav className="space-y-2">
//           {menuItems.map((item) => (
//             <Link
//               to={item.path}
//               key={item.path}
//               className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
//                 isActive(item.path)
//                   ? "bg-[#00A896] text-white shadow-md"
//                   : "hover:bg-[#0a4c6a90]"
//               }`}
//             >
//               {item.icon}
//               <span>{item.title}</span>
//             </Link>
//           ))}
//         </nav>
//       </div>

//       <div className="mt-auto">
//         <button
//           onClick={handleLogout}
//           className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#FF6F61] transition-colors"
//         >
//           <LogOutIcon size={20} />
//           <span>Logout</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DoctorSidebar;
// import React, { useState } from "react";
// import {
//   HomeIcon,
//   UsersIcon,
//   UserPlusIcon,
//   LogOutIcon,
//   MenuIcon,
//   XIcon,
// } from "lucide-react";
// import { Link, useLocation } from "react-router-dom";

// const DoctorSidebar = () => {
//   const location = useLocation();
//   const [isOpen, setIsOpen] = useState(false); // State for mobile sidebar toggle

//   const menuItems = [
//     {
//       title: "Dashboard",
//       icon: <HomeIcon size={20} />,
//       path: "/doctor/dashboard",
//     },
//     {
//       title: "Patients",
//       icon: <UsersIcon size={20} />,
//       path: "/doctor/patients",
//     },
//     {
//       title: "Add Patient",
//       icon: <UserPlusIcon size={20} />,
//       path: "/doctor/add-patient",
//     },
//   ];

//   const isActive = (path) => location.pathname === path;

//   const handleLogout = () => {
//     console.log("User logged out");
//   };

//   return (
//     <>
//       {/* Mobile Toggle Button */}
//       <button
//         className="md:hidden fixed top-4 left-4 z-50 p-2 bg-[#4CAF50] text-white rounded-md"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`h-screen w-64 bg-[#2E7D32] text-white p-5 fixed left-0 flex flex-col font-sans transform transition-transform duration-300 z-40 ${
//           isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
//         }`}
//       >
//         <div className="mb-10 text-center">
//           <h1 className="text-2xl font-bold">MediCare</h1>
//           <p className="text-[#4CAF50] mt-2">Doctor Portal</p>
//         </div>
//         <div className="flex flex-col flex-grow">
//           <nav className="space-y-2">
//             {menuItems.map((item) => (
//               <Link
//                 to={item.path}
//                 key={item.path}
//                 className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
//                   isActive(item.path)
//                     ? "bg-[#4CAF50] text-white shadow-lg"
//                     : "hover:bg-[#FFC107] hover:text-[#1A1A1A]"
//                 }`}
//                 onClick={() => setIsOpen(false)} // Close sidebar on link click (mobile)
//               >
//                 {item.icon}
//                 <span>{item.title}</span>
//               </Link>
//             ))}
//           </nav>
//         </div>
//         <div className="mt-auto">
//           <button
//             onClick={handleLogout}
//             className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#FFC107] hover:text-[#1A1A1A] transition-colors"
//           >
//             <LogOutIcon size={20} />
//             <span>Logout</span>
//           </button>
//         </div>
//       </div>

//       {/* Overlay for mobile when sidebar is open */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 z-30 md:hidden"
//           onClick={() => setIsOpen(false)}
//         ></div>
//       )}
//     </>
//   );
// };

// export default DoctorSidebar;



// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   HomeIcon,
//   UsersIcon,
//   UserPlusIcon,
//   LogOutIcon,
//   MenuIcon,
//   XIcon,
// } from "lucide-react";

// function DoctorSidebar() {
//   const location = useLocation();
//   const [isOpen, setIsOpen] = useState(false);

//   const menuItems = [
//     {
//       path: "/doctor/dashboard",
//       name: "Dashboard",
//       icon: <HomeIcon size={18} />,
//     },
//     {
//       path: "/doctor/patients",
//       name: "Patients",
//       icon: <UsersIcon size={18} />,
//     },
//     {
//       path: "/doctor/add-patient",
//       name: "Add Patient",
//       icon: <UserPlusIcon size={18} />,
//     },
//   ];

//   const handleLogout = () => {
//     console.log("User logged out");
//   };

//   return (
//     <>
//       {/* زر التبديل للشاشات الصغيرة */}
//       <button
//         className="md:hidden fixed top-4 left-4 z-50 p-2 bg-green-600 text-white rounded-md"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
//       </button>

//       {/* السايدبار */}
//       <div
//         className={`w-56 h-screen bg-white fixed top-0 left-0 shadow overflow-y-auto z-40 flex flex-col transition-transform duration-300 ${
//           isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
//         }`}
//         style={{ direction: "ltr" }}
//       >
//         <div className="p-4 border-b border-gray-100">
//           <h2 className="text-lg font-bold text-green-700">Doctor Dashboard</h2>
//         </div>

//         <div className="py-2 flex-1">
//           <ul>
//             {menuItems.map((item) => {
//               const isActive = location.pathname === item.path;

//               return (
//                 <li key={item.path}>
//                   <Link
//                     to={item.path}
//                     className={`flex items-center py-3 px-4 transition-colors ${
//                       isActive
//                         ? "bg-green-600 text-white"
//                         : "text-gray-700 hover:bg-gray-100 hover:text-green-600"
//                     }`}
//                     onClick={() => setIsOpen(false)}
//                   >
//                     <span className="mr-3">{item.icon}</span>
//                     <span>{item.name}</span>
//                     {isActive && (
//                       <div className="ml-auto w-2 h-2 bg-white rounded-full" />
//                     )}
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>

//         <div className="mt-auto">
//           <button
//             onClick={handleLogout}
//             className="flex items-center py-3 px-4 w-full text-gray-700 hover:bg-gray-100 hover:text-green-600 border-t border-gray-100"
//           >
//             <span className="mr-3">
//               <LogOutIcon size={18} />
//             </span>
//             <span>Logout</span>
//           </button>

//           <div className="flex items-center p-4 border-t border-gray-100">
//             <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
//               D
//             </div>
//             <div className="ml-3">
//               <p className="font-medium text-gray-800">Doctor</p>
//               <p className="text-sm text-gray-500">doctor@example.com</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* طبقة خلفية عند فتح السايدبار على الشاشات الصغيرة */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 z-30 md:hidden"
//           onClick={() => setIsOpen(false)}
//         ></div>
//       )}
//     </>
//   );
// }

// export default DoctorSidebar;


import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Add useNavigate
import {
  HomeIcon,
  UsersIcon,
  UserPlusIcon,
  LogOutIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";

function DoctorSidebar() {
  const location = useLocation();
  const navigate = useNavigate(); // Hook for navigation
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      path: "/doctor/dashboard",
      name: "Dashboard",
      icon: <HomeIcon size={18} />,
    },
    {
      path: "/doctor/patients",
      name: "Patients",
      icon: <UsersIcon size={18} />,
    },
    {
      path: "/doctor/add-patient",
      name: "Add Patient",
      icon: <UserPlusIcon size={18} />,
    },
  ];

  const handleLogout = () => {
    // Optionally clear authentication data from localStorage
    localStorage.removeItem("userId");
    localStorage.removeItem("userType");

    // Redirect to the login page
    navigate("/user/login");
  };

  return (
    <>
      {/* زر التبديل للشاشات الصغيرة */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-green-600 text-white rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
      </button>

      {/* السايدبار */}
      <div
        className={`w-56 h-screen bg-white fixed top-0 left-0 shadow overflow-y-auto z-40 flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
        style={{ direction: "ltr" }}
      >
        <div className="p-4 border-b border-gray-100">
          <h2 className="text-lg font-bold text-green-700">Doctor Dashboard</h2>
        </div>

        <div className="py-2 flex-1">
          <ul>
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center py-3 px-4 transition-colors ${
                      isActive
                        ? "bg-green-600 text-white"
                        : "text-gray-700 hover:bg-gray-100 hover:text-green-600"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span>{item.name}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-white rounded-full" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-auto">
          <button
            onClick={handleLogout}
            className="flex items-center py-3 px-4 w-full text-gray-700 hover:bg-gray-100 hover:text-green-600 border-t border-gray-100"
          >
            <span className="mr-3">
              <LogOutIcon size={18} />
            </span>
            <span>Logout</span>
          </button>

          <div className="flex items-center p-4 border-t border-gray-100">
            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
              D
            </div>
            <div className="ml-3">
              <p className="font-medium text-gray-800">Doctor</p>
              <p className="text-sm text-gray-500">doctor@example.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* طبقة خلفية عند فتح السايدبار على الشاشات الصغيرة */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}

export default DoctorSidebar;