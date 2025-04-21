// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { ShoppingCart } from "lucide-react";

// const Navbar = ({ cartItems }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   return (
//     <nav
//       className={`fixed w-full z-20 top-0 transition-all duration-300 ${
//         isScrolled
//           ? "bg-[#F5F6F5] bg-opacity-80 backdrop-blur-md shadow-md"
//           : "bg-transparent"
//       }`}
//       dir="rtl"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 flex-row-reverse">
//           {/* Logo */}
//           <div className="flex-shrink-0 flex items-center">
//             <span className="text-[#0A4C6A] font-bold text-xl">MediCare</span>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:block">
//             <div className="mr-10 flex items-center space-x-6">
//               <Link
//                 to="/user/faq"
//                 className="text-[#0A4C6A] hover:text-[#00A896] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
//               >
//                 FAQ
//               </Link>
//               <Link
//                 to="/user/contact"
//                 className="text-[#0A4C6A] hover:text-[#00A896] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
//               >
//                 Contact
//               </Link>
//               <Link
//                 to="/user/pharmacy"
//                 className="text-[#0A4C6A] hover:text-[#00A896] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
//               >
//                 Pharmacy
//               </Link>
//               <Link
//                 to="/user/articles"
//                 className="text-[#0A4C6A] hover:text-[#00A896] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
//               >
//                 Articles
//               </Link>
//               <Link
//                 to="/user/about"
//                 className="text-[#0A4C6A] hover:text-[#00A896] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
//               >
//                 About
//               </Link>
//               <Link
//                 to="/"
//                 className="text-[#0A4C6A] hover:text-[#00A896] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
//               >
//                 Home
//               </Link>
//             </div>
//           </div>

//           {/* Cart and Sign Up Buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Link
//               to="/user/cart"
//               className="relative text-[#0A4C6A] hover:text-[#00A896] transition-colors duration-200"
//             >
//               <ShoppingCart size={20} />
//               {cartItems?.length > 0 && (
//                 <span className="absolute -top-2 -left-2 bg-[#FF6F61] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
//                   {cartItems.reduce((total, item) => total + item.quantity, 0)}
//                 </span>
//               )}
//             </Link>
//             <Link
//               to="/user/register"
//               className="bg-[#00A896] hover:bg-[#FF6F61] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 shadow-sm"
//             >
//               Sign Up
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               type="button"
//               className="inline-flex items-center justify-center p-2 rounded-md text-[#0A4C6A] hover:text-[#00A896] hover:bg-[#F5F6F5] hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#00A896]"
//               aria-controls="mobile-menu"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open menu</span>
//               <svg
//                 className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//               <svg
//                 className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden" id="mobile-menu">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#F5F6F5] bg-opacity-80 backdrop-blur-md shadow-md">
//             <Link
//               to="/user/faq"
//               className="text-[#0A4C6A] hover:text-[#00A896] block px-3 py-2 rounded-md text-base font-medium"
//               onClick={toggleMenu}
//             >
//               FAQ
//             </Link>
//             <Link
//               to="/user/contact"
//               className="text-[#0A4C6A] hover:text-[#00A896] block px-3 py-2 rounded-md text-base font-medium"
//               onClick={toggleMenu}
//             >
//               Contact
//             </Link>
//             <Link
//               to="/user/pharmacy"
//               className="text-[#0A4C6A] hover:text-[#00A896] block px-3 py-2 rounded-md text-base font-medium"
//               onClick={toggleMenu}
//             >
//               Pharmacy
//             </Link>
//             <Link
//               to="/user/articles"
//               className="text-[#0A4C6A] hover:text-[#00A896] block px-3 py-2 rounded-md text-base font-medium"
//               onClick={toggleMenu}
//             >
//               Articles
//             </Link>
//             <Link
//               to="/user/about"
//               className="text-[#0A4C6A] hover:text-[#00A896] block px-3 py-2 rounded-md text-base font-medium"
//               onClick={toggleMenu}
//             >
//               About
//             </Link>
//             <Link
//               to="/"
//               className="text-[#0A4C6A] hover:text-[#00A896] block px-3 py-2 rounded-md text-base font-medium"
//               onClick={toggleMenu}
//             >
//               Home
//             </Link>
//             <Link
//               to="/user/cart"
//               className="text-[#0A4C6A] hover:text-[#00A896] flex items-center px-3 py-2 rounded-md text-base font-medium flex-row-reverse"
//               onClick={toggleMenu}
//             >
//               <ShoppingCart size={20} className="ml-2" />
//               Cart
//               {cartItems?.length > 0 && (
//                 <span className="mr-2 bg-[#FF6F61] text-white text-xs font-bold rounded-full px-2 py-0.5">
//                   {cartItems.reduce((total, item) => total + item.quantity, 0)}
//                 </span>
//               )}
//             </Link>
//             <Link
//               to="/user/register"
//               className="w-full text-right bg-[#00A896] hover:bg-[#FF6F61] text-white px-3 py-2 rounded-md text-base font-medium mt-2 transition-colors duration-200 block"
//               onClick={toggleMenu}
//             >
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { ShoppingCart, Heart } from "lucide-react";

// const Navbar = ({ cartItems, wishlist }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   return (
//     <nav
//       className={`fixed w-full z-50 top-0 transition-all duration-300 ${
//         isScrolled
//           ? "bg-white shadow-lg"
//           : "bg-white bg-opacity-90 backdrop-blur-md"
//       }`}
//       dir="rtl"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 flex-row-reverse">
//           {/* Logo */}
//           <div className="flex-shrink-0 flex items-center">
//             <span className="text-[#4CAF50] font-bold text-xl">MediCare</span>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:block">
//             <div className="mr-10 flex items-center space-x-6">
//               <Link
//                 to="/user/contact"
//                 className="text-[#1A1A1A] hover:text-[#4CAF50] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
//               >
//                 Contact
//               </Link>
//               <Link
//                 to="/user/about"
//                 className="text-[#1A1A1A] hover:text-[#4CAF50] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
//               >
//                 About
//               </Link>
//               <Link
//                 to="/user/articles"
//                 className="text-[#1A1A1A] hover:text-[#4CAF50] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
//               >
//                 Articles
//               </Link>
//               <Link
//                 to="/user/pharmacy"
//                 className="text-[#1A1A1A] hover:text-[#4CAF50] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
//               >
//                 Pharmacy
//               </Link>
//               <Link
//                 to="/user/faq"
//                 className="text-[#1A1A1A] hover:text-[#4CAF50] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
//               >
//                 FAQ
//               </Link>
//               <Link
//                 to="/"
//                 className="text-[#1A1A1A] hover:text-[#4CAF50] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
//               >
//                 Home
//               </Link>
//             </div>
//           </div>

//           {/* Cart, Wishlist, and Sign Up Buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Link
//               to="/user/wishlist"
//               className="relative text-[#666666] hover:text-[#4CAF50] transition-colors duration-200"
//             >
//               <Heart size={20} />
//               {wishlist?.length > 0 && (
//                 <span className="absolute -top-2 -left-2 bg-[#D32F2F] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
//                   {wishlist.length}
//                 </span>
//               )}
//             </Link>
//             <Link
//               to="/user/cart"
//               className="relative text-[#666666] hover:text-[#4CAF50] transition-colors duration-200"
//             >
//               <ShoppingCart size={20} />
//               {cartItems?.length > 0 && (
//                 <span className="absolute -top-2 -left-2 bg-[#D32F2F] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
//                   {cartItems.reduce((total, item) => total + item.quantity, 0)}
//                 </span>
//               )}
//             </Link>
//             <Link
//               to="/user/register"
//               className="bg-[#4CAF50] hover:bg-[#3d8b40] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 shadow-md"
//             >
//               Sign Up
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               type="button"
//               className="inline-flex items-center justify-center p-2 rounded-md text-[#1A1A1A] hover:text-[#4CAF50] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#4CAF50]"
//               aria-controls="mobile-menu"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open menu</span>
//               <svg
//                 className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//               <svg
//                 className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden" id="mobile-menu">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
//             <Link
//               to="/"
//               className="text-[#1A1A1A] hover:text-[#4CAF50] hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
//               onClick={toggleMenu}
//             >
//               Home
//             </Link>
//             <Link
//               to="/user/faq"
//               className="text-[#1A1A1A] hover:text-[#4CAF50] hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
//               onClick={toggleMenu}
//             >
//               FAQ
//             </Link>
//             <Link
//               to="/user/pharmacy"
//               className="text-[#1A1A1A] hover:text-[#4CAF50] hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
//               onClick={toggleMenu}
//             >
//               Pharmacy
//             </Link>
//             <Link
//               to="/user/articles"
//               className="text-[#1A1A1A] hover:text-[#4CAF50] hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
//               onClick={toggleMenu}
//             >
//               Articles
//             </Link>
//             <Link
//               to="/user/about"
//               className="text-[#1A1A1A] hover:text-[#4CAF50] hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
//               onClick={toggleMenu}
//             >
//               About
//             </Link>
//             <Link
//               to="/user/contact"
//               className="text-[#1A1A1A] hover:text-[#4CAF50] hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
//               onClick={toggleMenu}
//             >
//               Contact
//             </Link>
//             <Link
//               to="/user/wishlist"
//               className="text-[#1A1A1A] hover:text-[#4CAF50] hover:bg-gray-50 flex items-center px-3 py-2 rounded-md text-base font-medium flex-row-reverse"
//               onClick={toggleMenu}
//             >
//               <Heart size={20} className="ml-2" />
//               Wishlist
//               {wishlist?.length > 0 && (
//                 <span className="mr-2 bg-[#D32F2F] text-white text-xs font-bold rounded-full px-2 py-0.5">
//                   {wishlist.length}
//                 </span>
//               )}
//             </Link>
//             <Link
//               to="/user/cart"
//               className="text-[#1A1A1A] hover:text-[#4CAF50] hover:bg-gray-50 flex items-center px-3 py-2 rounded-md text-base font-medium flex-row-reverse"
//               onClick={toggleMenu}
//             >
//               <ShoppingCart size={20} className="ml-2" />
//               Cart
//               {cartItems?.length > 0 && (
//                 <span className="mr-2 bg-[#D32F2F] text-white text-xs font-bold rounded-full px-2 py-0.5">
//                   {cartItems.reduce((total, item) => total + item.quantity, 0)}
//                 </span>
//               )}
//             </Link>
//             <Link
//               to="/user/register"
//               className="w-full text-right bg-[#4CAF50] hover:bg-[#3d8b40] text-white px-3 py-2 rounded-md text-base mt-2 transition-colors duration-200 block shadow-md"
//               onClick={toggleMenu}
//             >
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { ShoppingCart, Heart } from "lucide-react";

// const Navbar = ({ cartItems, wishlist }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   const menuVariants = {
//     hidden: { opacity: 0, y: -20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
//     exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
//   };

//   return (
//     <nav
//       className={`fixed w-full z-50 top-0 transition-all duration-300 font-sans ${
//         isScrolled
//           ? "bg-gradient-to-r from-[#4CAF50]/10 to-white shadow-md"
//           : "bg-gradient-to-r from-white to-gray-50 bg-opacity-90 backdrop-blur-md"
//       }`}
//       dir="ltr"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 flex-row">
//           {/* Logo */}
//           <div className="flex-shrink-0 flex items-center">
//             <span className="text-[#4CAF50] font-bold text-2xl tracking-tight">
//               MediCare
//             </span>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-center space-x-6">
//               {[
//                 { to: "/", label: "Home" },
//                 { to: "/user/faq", label: "FAQ" },
//                 { to: "/user/pharmacy", label: "Pharmacy" },
//                 { to: "/user/articles", label: "Articles" },
//                 { to: "/user/about", label: "About" },
//                 { to: "/user/contact", label: "Contact" },
//               ].map((link) => (
//                 <Link
//                   key={link.to}
//                   to={link.to}
//                   className="relative text-[#1A1A1A] hover:text-[#4CAF50] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 group"
//                 >
//                   {link.label}
//                   <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#4CAF50] transition-all duration-300 group-hover:w-full"></span>
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Cart, Wishlist, and Sign Up Buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Link
//               to="/user/wishlist"
//               className="relative text-[#666666] hover:text-[#4CAF50] transition-all duration-300 group"
//             >
//               <motion.div
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Heart size={20} />
//                 {wishlist?.length > 0 && (
//                   <span className="absolute -top-2 -right-2 bg-[#D32F2F] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse shadow-sm">
//                     {wishlist.length}
//                   </span>
//                 )}
//               </motion.div>
//             </Link>
//             <Link
//               to="/user/cart"
//               className="relative text-[#666666] hover:text-[#4CAF50] transition-all duration-300 group"
//             >
//               <motion.div
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <ShoppingCart size={20} />
//                 {cartItems?.length > 0 && (
//                   <span className="absolute -top-2 -right-2 bg-[#D32F2F] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse shadow-sm">
//                     {cartItems.reduce(
//                       (total, item) => total + item.quantity,
//                       0
//                     )}
//                   </span>
//                 )}
//               </motion.div>
//             </Link>
//             <Link
//               to="/user/register"
//               className="bg-gradient-to-r from-[#4CAF50] to-[#388E3C] hover:from-[#388E3C] hover:to-[#2E7D32] text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg"
//             >
//               Sign Up
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               type="button"
//               className="inline-flex items-center justify-center p-2 rounded-md text-[#1A1A1A] hover:text-[#4CAF50] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#4CAF50]"
//               aria-controls="mobile-menu"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open menu</span>
//               <svg
//                 className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//               <svg
//                 className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             className="md:hidden"
//             id="mobile-menu"
//             variants={menuVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//           >
//             <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-gradient-to-b from-white to-gray-50 shadow-lg">
//               {[
//                 { to: "/", label: "Home" },
//                 { to: "/user/faq", label: "FAQ" },
//                 { to: "/user/pharmacy", label: "Pharmacy" },
//                 { to: "/user/articles", label: "Articles" },
//                 { to: "/user/about", label: "About" },
//                 { to: "/user/contact", label: "Contact" },
//               ].map((link) => (
//                 <Link
//                   key={link.to}
//                   to={link.to}
//                   className="text-[#1A1A1A] hover:text-[#4CAF50] hover:bg-gray-100 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200"
//                   onClick={toggleMenu}
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//               <Link
//                 to="/user/wishlist"
//                 className="text-[#1A1A1A] hover:text-[#4CAF50] hover:bg-gray-100 flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-200"
//                 onClick={toggleMenu}
//               >
//                 <Heart size={24} className="mr-3" />
//                 Wishlist
//                 {wishlist?.length > 0 && (
//                   <span className="ml-3 bg-[#D32F2F] text-white text-xs font-bold rounded-full px-2 py-0.5 animate-pulse">
//                     {wishlist.length}
//                   </span>
//                 )}
//               </Link>
//               <Link
//                 to="/user/cart"
//                 className="text-[#1A1A1A] hover:text-[#4CAF50] hover:bg-gray-100 flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-200"
//                 onClick={toggleMenu}
//               >
//                 <ShoppingCart size={24} className="mr-3" />
//                 Cart
//                 {cartItems?.length > 0 && (
//                   <span className="ml-3 bg-[#D32F2F] text-white text-xs font-bold rounded-full px-2 py-0.5 animate-pulse">
//                     {cartItems.reduce(
//                       (total, item) => total + item.quantity,
//                       0
//                     )}
//                   </span>
//                 )}
//               </Link>
//               <Link
//                 to="/user/register"
//                 className="w-full text-left bg-gradient-to-r from-[#4CAF50] to-[#388E3C] hover:from-[#388E3C] hover:to-[#2E7D32] text-white px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg mt-2 block"
//                 onClick={toggleMenu}
//               >
//                 Sign Up
//               </Link>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Heart } from "lucide-react";

const Navbar = ({ cartItems, wishlist, isAuthenticated, handleLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-all duration-300 font-sans ${
        isScrolled
          ? "bg-gradient-to-r from-[#4CAF50]/10 to-white shadow-md"
          : "bg-gradient-to-r from-white to-gray-50 bg-opacity-90 backdrop-blur-md"
      }`}
      dir="ltr"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 flex-row">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-[#4CAF50] font-bold text-2xl tracking-tight">
              MediCare
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {[
                { to: "/", label: "Home" },
                { to: "/user/faq", label: "FAQ" },
                { to: "/user/pharmacy", label: "Pharmacy" },
                { to: "/user/articles", label: "Articles" },
                { to: "/user/about", label: "About" },
                { to: "/user/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="relative text-[#1A1A1A] hover:text-[#4CAF50] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 group"
                >
                  {link.label}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#4CAF50] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Cart, Wishlist, and Sign Up/Logout Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/user/wishlist"
              className="relative text-[#666666] hover:text-[#4CAF50] transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart size={20} />
                {wishlist?.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#D32F2F] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse shadow-sm">
                    {wishlist.length}
                  </span>
                )}
              </motion.div>
            </Link>
            <Link
              to="/user/cart"
              className="relative text-[#666666] hover:text-[#4CAF50] transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingCart size={20} />
                {cartItems?.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#D32F2F] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse shadow-sm">
                    {cartItems.reduce(
                      (total, item) => total + item.quantity,
                      0
                    )}
                  </span>
                )}
              </motion.div>
            </Link>
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="bg-gradient-to-r from-[#D32F2F] to-[#B71C1C] hover:from-[#B71C1C] hover:to-[#9C1717] text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/user/register"
                className="bg-gradient-to-r from-[#4CAF50] to-[#388E3C] hover:from-[#388E3C] hover:to-[#2E7D32] text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Sign Up
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[#1A1A1A] hover:text-[#4CAF50] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#4CAF50]"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden"
            id="mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-gradient-to-b from-white to-gray-50 shadow-lg">
              {[
                { to: "/", label: "Home" },
                { to: "/user/faq", label: "FAQ" },
                { to: "/user/pharmacy", label: "Pharmacy" },
                { to: "/user/articles", label: "Articles" },
                { to: "/user/about", label: "About" },
                { to: "/user/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-[#1A1A1A] hover:text-[#4CAF50] hover:bg-gray-100 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200"
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/user/wishlist"
                className="text-[#1A1A1A] hover:text-[#4CAF50] hover:bg-gray-100 flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-200"
                onClick={toggleMenu}
              >
                <Heart size={24} className="mr-3" />
                Wishlist
                {wishlist?.length > 0 && (
                  <span className="ml-3 bg-[#D32F2F] text-white text-xs font-bold rounded-full px-2 py-0.5 animate-pulse">
                    {wishlist.length}
                  </span>
                )}
              </Link>
              <Link
                to="/user/cart"
                className="text-[#1A1A1A] hover:text-[#4CAF50] hover:bg-gray-100 flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-200"
                onClick={toggleMenu}
              >
                <ShoppingCart size={24} className="mr-3" />
                Cart
                {cartItems?.length > 0 && (
                  <span className="ml-3 bg-[#D32F2F] text-white text-xs font-bold rounded-full px-2 py-0.5 animate-pulse">
                    {cartItems.reduce(
                      (total, item) => total + item.quantity,
                      0
                    )}
                  </span>
                )}
              </Link>
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                  className="w-full text-left bg-gradient-to-r from-[#D32F2F] to-[#B71C1C] hover:from-[#B71C1C] hover:to-[#9C1717] text-white px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg mt-2 block"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/user/register"
                  className="w-full text-left bg-gradient-to-r from-[#4CAF50] to-[#388E3C] hover:from-[#388E3C] hover:to-[#2E7D32] text-white px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg mt-2 block"
                  onClick={toggleMenu}
                >
                  Sign Up
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;