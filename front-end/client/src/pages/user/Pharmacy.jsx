// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { ShoppingCart, Search, Filter, X } from "lucide-react";


// const Pharmacy = ({ addToCart }) => {
//   const [medicines, setMedicines] = useState([]);
//   const [activeCategory, setActiveCategory] = useState("all");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedMedicine, setSelectedMedicine] = useState(null);
//   const itemsPerPage = 3;

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/medicines")
//       .then((response) => setMedicines(response.data))
//       .catch((error) => console.error("خطأ في جلب الأدوية:", error));
//   }, []);

//   const categories = ["all", ...new Set(medicines.map((med) => med.category))];

//   const filteredMedications = medicines
//     .filter((med) =>
//       activeCategory === "all" ? true : med.category === activeCategory
//     )
//     .filter((med) =>
//       med.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//   const totalPages = Math.ceil(filteredMedications.length / itemsPerPage);
//   const paginatedMedications = filteredMedications.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const openProductPopup = (medicine) => {
//     setSelectedMedicine(medicine);
//   };

//   const closeProductPopup = () => {
//     setSelectedMedicine(null);
//   };

//   const handlePageChange = (page) => {
//     if (page > 0 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   return (
//     <>
  
//       <div className="min-h-screen bg-[#F5F6F5] font-sans" dir="rtl">
//         <div className="container mx-auto px-4 pt-8">
//           <div className="bg-white p-6 rounded-lg shadow-md mb-8 border-r-4 border-[#00A896] transition-all duration-300">
//             <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
//               <div className="relative w-full sm:w-2/3">
//                 <input
//                   type="text"
//                   placeholder="ابحث عن الأدوية بالاسم..."
//                   className="w-full bg-gray-50 rounded-md py-3 px-5 pr-12 focus:outline-none focus:ring-2 focus:ring-[#00A896] text-[#0A4C6A] text-sm shadow-sm transition-all duration-300"
//                   value={searchQuery}
//                   onChange={(e) => {
//                     setSearchQuery(e.target.value);
//                     setCurrentPage(1);
//                   }}
//                 />
//                 <Search
//                   className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#0A4C6A] opacity-70 hover:opacity-100 transition-opacity duration-300"
//                   size={20}
//                 />
//               </div>
//               <div className="flex items-center space-x-3 space-x-reverse">
//                 <Filter size={20} className="text-[#0A4C6A] opacity-70" />
//                 <span className="text-sm text-[#0A4C6A] font-medium">
//                   التصنيف:
//                 </span>
//                 <select
//                   className="bg-gray-50 rounded-md py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#00A896] border-none text-[#0A4C6A] shadow-sm"
//                   value={activeCategory}
//                   onChange={(e) => {
//                     setActiveCategory(e.target.value);
//                     setCurrentPage(1);
//                   }}
//                 >
//                   {categories.map((category) => (
//                     <option key={category} value={category}>
//                       {category === "all" ? "جميع الأدوية" : category}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//           </div>

//           <main>
//             <h2 className="text-3xl font-bold text-[#0A4C6A] mb-8 text-center relative">
//               {activeCategory === "all"
//                 ? "المنتجات المتوفرة"
//                 : `تصنيف: ${activeCategory}`}
//               <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#00A896] rounded-full opacity-80"></span>
//             </h2>

//             {paginatedMedications.length === 0 ? (
//               <div className="text-center py-16">
//                 <p className="text-gray-700 text-lg font-medium">
//                   لا توجد أدوية متاحة حاليًا
//                 </p>
//                 <p className="text-gray-500 text-sm mt-2">
//                   حاول تعديل البحث أو اختيار تصنيف آخر
//                 </p>
//               </div>
//             ) : (
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {paginatedMedications.map((med) => (
//                   <div
//                     key={med._id}
//                     className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
//                     onClick={() => openProductPopup(med)}
//                   >
//                     {med.discount && (
//                       <div className="absolute top-0 left-0 bg-[#FF6F61] text-white text-xs font-semibold px-3 py-1 rounded-br-lg">
//                         خصم
//                       </div>
//                     )}

//                     <div className="relative mb-4">
//                       <img
//                         src={`http://localhost:5000${med.image}`}
//                         alt={med.name}
//                         className="w-48 h-48 object-contain mx-auto transition-transform duration-300 group-hover:scale-105"
//                       />
//                     </div>

//                     <h3 className="text-lg font-semibold text-[#0A4C6A] mb-2 px-4">
//                       {med.name}
//                     </h3>
//                     <p className="text-gray-600 text-sm mb-3 px-4 line-clamp-2 leading-relaxed">
//                       {med.description}
//                     </p>
//                     <div className="text-[#0A4C6A] font-medium px-4 pb-4">
//                       {med.discount ? (
//                         <>
//                           <span className="line-through text-gray-500 mr-2">
//                             {med.price} ريال
//                           </span>
//                           <span>
//                             {(med.price * (1 - med.discount)).toFixed(2)} ريال
//                           </span>
//                         </>
//                       ) : (
//                         <span>{med.price} ريال</span>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {totalPages > 1 && (
//               <div className="flex justify-center mt-12">
//                 <button
//                   onClick={() => handlePageChange(currentPage - 1)}
//                   disabled={currentPage === 1}
//                   className="mx-1 px-4 py-2 bg-gray-200 text-[#0A4C6A] rounded-full disabled:opacity-50"
//                 >
//                   &lt;
//                 </button>
//                 {[...Array(totalPages)].map((_, index) => (
//                   <button
//                     key={index + 1}
//                     onClick={() => handlePageChange(index + 1)}
//                     className={`mx-1 px-4 py-2 rounded-full ${
//                       currentPage === index + 1
//                         ? "bg-[#00A896] text-white"
//                         : "bg-gray-200 text-[#0A4C6A]"
//                     }`}
//                   >
//                     {index + 1}
//                   </button>
//                 ))}
//                 <button
//                   onClick={() => handlePageChange(currentPage + 1)}
//                   disabled={currentPage === totalPages}
//                   className="mx-1 px-4 py-2 bg-gray-200 text-[#0A4C6A] rounded-full disabled:opacity-50"
//                 >
//                   &gt;
//                 </button>
//               </div>
//             )}
//           </main>
//         </div>
//       </div>

//       {selectedMedicine && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
//             <div className="p-6">
//               <div className="flex justify-between items-start mb-4">
//                 <h2 className="text-2xl font-bold text-[#0A4C6A]">
//                   {selectedMedicine.name}
//                 </h2>
//                 <button
//                   onClick={closeProductPopup}
//                   className="text-gray-500 hover:text-[#FF6F61]"
//                 >
//                   <X size={24} />
//                 </button>
//               </div>

//               <div className="mb-6 flex justify-center">
//                 <img
//                   src={`http://localhost:5000${selectedMedicine.image}`}
//                   alt={selectedMedicine.name}
//                   className="max-h-64 object-contain"
//                 />
//               </div>

//               <div className="mb-6">
//                 <h3 className="text-lg font-semibold text-[#0A4C6A] mb-2">
//                   الوصف الكامل:
//                 </h3>
//                 <p className="text-gray-700">{selectedMedicine.description}</p>
//               </div>

//               <div className="grid grid-cols-2 gap-4 mb-6">
//                 <div>
//                   <h4 className="text-sm font-medium text-gray-500">
//                     التصنيف:
//                   </h4>
//                   <p className="text-[#0A4C6A]">{selectedMedicine.category}</p>
//                 </div>
//                 <div>
//                   <h4 className="text-sm font-medium text-gray-500">الجرعة:</h4>
//                   <p className="text-[#0A4C6A]">
//                     {selectedMedicine.dosage || "غير محدد"}
//                   </p>
//                 </div>
//                 <div>
//                   <h4 className="text-sm font-medium text-gray-500">السعر:</h4>
//                   <p className="text-[#0A4C6A] font-bold">
//                     {selectedMedicine.discount ? (
//                       <>
//                         <span className="line-through text-gray-500 mr-2">
//                           {selectedMedicine.price} ريال
//                         </span>
//                         <span>
//                           {(
//                             selectedMedicine.price *
//                             (1 - selectedMedicine.discount)
//                           ).toFixed(2)}{" "}
//                           ريال
//                         </span>
//                       </>
//                     ) : (
//                       <span>{selectedMedicine.price} ريال</span>
//                     )}
//                   </p>
//                 </div>
//                 <div>
//                   <h4 className="text-sm font-medium text-gray-500">التوفر:</h4>
//                   <p className="text-[#00A896] font-medium">متوفر</p>
//                 </div>
//               </div>

//               <button
//                 className="w-full bg-[#00A896] text-white py-3 rounded-lg hover:bg-[#0A4C6A] transition-colors flex items-center justify-center gap-2"
//                 onClick={() => {
//                   addToCart(selectedMedicine);
//                   closeProductPopup();
//                 }}
//               >
//                 <ShoppingCart size={20} />
//                 أضف إلى السلة
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Pharmacy;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { ShoppingCart, Search, X, ArrowUpCircle } from "lucide-react";

// const Pharmacy = ({ addToCart }) => {
//   const [medicines, setMedicines] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedMedicine, setSelectedMedicine] = useState(null);
//   const [scrollY, setScrollY] = useState(0);
//   const itemsPerPage = 3;

//   // Fetch medicines from API
//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/medicines")
//       .then((response) => setMedicines(response.data))
//       .catch((error) => console.error("Error fetching medicines:", error));
//   }, []);

//   // Logic for scroll-to-top button
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   // Filter medicines based on search
//   const filteredMedications = medicines.filter((med) =>
//     med.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const totalPages = Math.ceil(filteredMedications.length / itemsPerPage);
//   const paginatedMedications = filteredMedications.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const openProductPopup = (medicine) => {
//     setSelectedMedicine(medicine);
//   };

//   const closeProductPopup = () => {
//     setSelectedMedicine(null);
//   };

//   const handlePageChange = (page) => {
//     if (page > 0 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   return (
//     <>
//       <div className="min-h-screen bg-[#F5F5F5] font-sans" dir="ltr">
//         <div className="container mx-auto px-4 pt-8">
//           {/* Hero Section with Background Image and Search Bar */}
//           <section
//             className="relative bg-cover bg-center rounded-lg shadow-lg py-24 px-8 mb-8 text-center mt-15"
//             style={{
//               backgroundImage:
//                 "url('https://cdn.elheddaf.com/data/images/article/thumbs/large-%D9%85%D9%8F%D8%AE%D8%AA%D8%B5%D9%91%D9%88%D9%86-%D9%8A%D8%AD%D8%B0%D8%B1%D9%88%D9%86-%D8%A7%D9%84%D9%85%D8%B6%D8%A7%D8%AF%D8%A7%D8%AA-%D8%A7%D9%84%D8%AD%D9%8A%D9%88%D9%8A%D8%A9-%D8%AA%D8%B6%D8%B9%D9%81-%D8%A7%D9%84%D9%85%D9%86%D8%A7%D8%B9%D8%A9-%D9%88%D8%AA%D8%B3%D8%A8%D8%A8-%D8%A7%D9%84%D8%B3%D8%B1%D8%B7%D8%A7%D9%86-8de2a.jpg')",
//               backgroundColor: "rgba(0, 0, 0, 0.4)", // Dark overlay for better readability
//               backgroundBlendMode: "overlay",
//             }}
//           >
//             <div className="relative z-10">
//               <h1 className="text-4xl font-bold text-white mb-4">
//                 Welcome to Your Online Pharmacy
//               </h1>
//               <p className="text-gray-200 text-lg mb-8">
//                 Get all your medical needs easily and quickly
//               </p>
//               {/* Search Bar Inside Hero Section */}
//               <div className="flex justify-center">
//                 <div className="relative w-full max-w-lg">
//                   <input
//                     type="text"
//                     placeholder="Search for medicines by name..."
//                     className="w-full bg-white rounded-full py-3 px-5 pl-12 focus:outline-none focus:ring-2 focus:ring-[#4CAF50] text-[#1A1A1A] text-sm shadow-sm transition-all duration-300"
//                     value={searchQuery}
//                     onChange={(e) => {
//                       setSearchQuery(e.target.value);
//                       setCurrentPage(1);
//                     }}
//                   />
//                   <Search
//                     className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#4CAF50] opacity-70 hover:opacity-100 transition-opacity duration-300"
//                     size={20}
//                   />
//                 </div>
//               </div>
//             </div>
//           </section>

//           <main>
//             <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8 text-center relative">
//               Available Products
//               <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#4CAF50] rounded-full opacity-80"></span>
//             </h2>

//             {paginatedMedications.length === 0 ? (
//               <div className="text-center py-16">
//                 <p className="text-gray-700 text-lg font-medium">
//                   No medicines available at the moment
//                 </p>
//                 <p className="text-gray-500 text-sm mt-2">
//                   Try adjusting your search
//                 </p>
//               </div>
//             ) : (
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {paginatedMedications.map((med) => (
//                   <div
//                     key={med._id}
//                     className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
//                     onClick={() => openProductPopup(med)}
//                   >
//                     {med.discount && (
//                       <div className="absolute top-0 right-0 bg-[#4CAF50] text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
//                         Discount
//                       </div>
//                     )}

//                     <div className="relative mb-4">
//                       <img
//                         src={`http://localhost:5000${med.image}`}
//                         alt={med.name}
//                         className="w-48 h-48 object-contain mx-auto transition-transform duration-300 group-hover:scale-105"
//                       />
//                     </div>

//                     <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2 px-4">
//                       {med.name}
//                     </h3>
//                     <p className="text-gray-600 text-sm mb-3 px-4 line-clamp-2 leading-relaxed">
//                       {med.description}
//                     </p>
//                     <div className="text-[#1A1A1A] font-medium px-4 pb-4">
//                       {med.discount ? (
//                         <>
//                           <span className="line-through text-gray-500 mr-2">
//                             {med.price} JOD
//                           </span>
//                           <span>
//                             {(med.price * (1 - med.discount)).toFixed(2)} JOD
//                           </span>
//                         </>
//                       ) : (
//                         <span>{med.price} JOD</span>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {totalPages > 1 && (
//               <div className="flex justify-center mt-12">
//                 <button
//                   onClick={() => handlePageChange(currentPage - 1)}
//                   disabled={currentPage === 1}
//                   className="mx-1 px-4 py-2 bg-gray-200 text-[#1A1A1A] rounded-full disabled:opacity-50"
//                 >
//                   &lt;
//                 </button>
//                 {[...Array(totalPages)].map((_, index) => (
//                   <button
//                     key={index + 1}
//                     onClick={() => handlePageChange(index + 1)}
//                     className={`mx-1 px-4 py-2 rounded-full ${
//                       currentPage === index + 1
//                         ? "bg-[#4CAF50] text-white"
//                         : "bg-gray-200 text-[#1A1A1A]"
//                     }`}
//                   >
//                     {index + 1}
//                   </button>
//                 ))}
//                 <button
//                   onClick={() => handlePageChange(currentPage + 1)}
//                   disabled={currentPage === totalPages}
//                   className="mx-1 px-4 py-2 bg-gray-200 text-[#1A1A1A] rounded-full disabled:opacity-50"
//                 >
//                   &gt;
//                 </button>
//               </div>
//             )}
//           </main>

//           {/* Scroll-to-Top Button */}
//           <button
//             onClick={scrollToTop}
//             className={`fixed bottom-6 right-6 bg-[#4CAF50] text-white p-4 rounded-full shadow-lg ${
//               scrollY > 200 ? "opacity-100" : "opacity-0"
//             } transition-opacity duration-300 hover:scale-110 hover:shadow-lg`}
//           >
//             <ArrowUpCircle className="h-6 w-6 inline-block align-middle" />
//           </button>
//         </div>
//       </div>

//       {/* Product Popup */}
//       {selectedMedicine && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
//             <div className="p-6">
//               <div className="flex justify-between items-start mb-4">
//                 <h2 className="text-2xl font-bold text-[#1A1A1A]">
//                   {selectedMedicine.name}
//                 </h2>
//                 <button
//                   onClick={closeProductPopup}
//                   className="text-gray-500 hover:text-[#4CAF50]"
//                 >
//                   <X size={24} />
//                 </button>
//               </div>

//               <div className="mb-6 flex justify-center">
//                 <img
//                   src={`http://localhost:5000${selectedMedicine.image}`}
//                   alt={selectedMedicine.name}
//                   className="max-h-64 object-contain"
//                 />
//               </div>

//               <div className="mb-6">
//                 <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
//                   Full Description:
//                 </h3>
//                 <p className="text-gray-700">{selectedMedicine.description}</p>
//               </div>

//               <div className="grid grid-cols-2 gap-4 mb-6">
//                 <div>
//                   <h4 className="text-sm font-medium text-gray-500">
//                     Category:
//                   </h4>
//                   <p className="text-[#1A1A1A]">{selectedMedicine.category}</p>
//                 </div>
//                 <div>
//                   <h4 className="text-sm font-medium text-gray-500">Dosage:</h4>
//                   <p className="text-[#1A1A1A]">
//                     {selectedMedicine.dosage || "Not specified"}
//                   </p>
//                 </div>
//                 <div>
//                   <h4 className="text-sm font-medium text-gray-500">Price:</h4>
//                   <p className="text-[#1A1A1A] font-bold">
//                     {selectedMedicine.discount ? (
//                       <>
//                         <span className="line-through text-gray-500 mr-2">
//                           {selectedMedicine.price} JOD
//                         </span>
//                         <span>
//                           {(
//                             selectedMedicine.price *
//                             (1 - selectedMedicine.discount)
//                           ).toFixed(2)}{" "}
//                           JOD
//                         </span>
//                       </>
//                     ) : (
//                       <span>{selectedMedicine.price} JOD</span>
//                     )}
//                   </p>
//                 </div>
//                 <div>
//                   <h4 className="text-sm font-medium text-gray-500">
//                     Availability:
//                   </h4>
//                   <p className="text-[#4CAF50] font-medium">Available</p>
//                 </div>
//               </div>

//               <button
//                 className="w-full bg-[#4CAF50] text-white py-3 rounded-lg hover:bg-[#3d8b40] transition-colors flex items-center justify-center gap-2"
//                 onClick={() => {
//                   addToCart(selectedMedicine);
//                   closeProductPopup();
//                 }}
//               >
//                 <ShoppingCart size={20} />
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Pharmacy;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { ShoppingCart, Search, X, ArrowUpCircle } from "lucide-react";

// const Pharmacy = ({ addToCart }) => {
//   const [medicines, setMedicines] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedMedicine, setSelectedMedicine] = useState(null);
//   const [scrollY, setScrollY] = useState(0);
//   const itemsPerPage = 8;

//   // Fetch medicines from API
//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/medicines")
//       .then((response) => setMedicines(response.data))
//       .catch((error) => console.error("Error fetching medicines:", error));
//   }, []);

//   // Logic for scroll-to-top button
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   // Filter medicines based on search
//   const filteredMedications = medicines.filter((med) =>
//     med.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const totalPages = Math.ceil(filteredMedications.length / itemsPerPage);
//   const paginatedMedications = filteredMedications.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const openProductPopup = (medicine) => {
//     setSelectedMedicine(medicine);
//   };

//   const closeProductPopup = () => {
//     setSelectedMedicine(null);
//   };

//   const handlePageChange = (page) => {
//     if (page > 0 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen font-sans">
//       {/* Hero section with banner */}
//       <section className="relative">
//         <div className="container mx-auto px-4 pt-8">
//           <div className="bg-white rounded-lg overflow-hidden shadow-md">
//             <div className="relative h-64 md:h-80 bg-gray-200">
//               <img
//                 src="/api/placeholder/1200/400"
//                 alt="Medical supplies banner"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-r from-[#4CAF50]/80 to-transparent flex items-center">
//                 <div className="p-8 max-w-lg">
//                   <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
//                     Face Mask And Non Contact Thermometer
//                   </h1>
//                   <p className="text-white/90 mb-6">
//                     Essential protection equipment for health safety and
//                     monitoring
//                   </p>
//                   <button className="bg-white text-[#4CAF50] px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition">
//                     Shop Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Products highlights section */}
//       <section className="py-12">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {/* Product highlight 1 */}
//             <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
//               <div className="flex p-4">
//                 <div className="flex-1">
//                   <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
//                     Best in class
//                   </p>
//                   <h3 className="font-bold text-lg text-gray-800 mb-2">
//                     Healthcare Product
//                   </h3>
//                   <a
//                     href="#"
//                     className="inline-block border border-gray-300 text-sm text-gray-700 px-3 py-1 rounded hover:bg-gray-50 transition"
//                   >
//                     Shop Now
//                   </a>
//                 </div>
//                 <div className="w-1/3">
//                   <img
//                     src="/api/placeholder/120/120"
//                     alt="Medical equipment"
//                     className="object-contain h-24"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Product highlight 2 */}
//             <div className="bg-[#4CAF50] text-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
//               <div className="p-4">
//                 <h3 className="font-bold text-xl mb-2">30% OFF</h3>
//                 <p className="text-sm text-white/80 mb-4">
//                   Premium quality collection of essential health care products.
//                   Save now while supplies last.
//                 </p>
//               </div>
//             </div>

//             {/* Product highlight 3 */}
//             <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
//               <div className="flex p-4">
//                 <div className="flex-1">
//                   <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
//                     Save up to 25% off
//                   </p>
//                   <h3 className="font-bold text-lg text-gray-800 mb-2">
//                     Healthcare Product
//                   </h3>
//                   <a
//                     href="#"
//                     className="inline-block border border-gray-300 text-sm text-gray-700 px-3 py-1 rounded hover:bg-gray-50 transition"
//                   >
//                     Shop Now
//                   </a>
//                 </div>
//                 <div className="w-1/3">
//                   <img
//                     src="/api/placeholder/120/120"
//                     alt="Health supplies"
//                     className="object-contain h-24"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Search and Featured Products */}
//       <section className="py-8">
//         <div className="container mx-auto px-4">
//           {/* Search bar */}
//           <div className="mb-8 max-w-lg mx-auto">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search products..."
//                 className="w-full bg-white border border-gray-300 rounded-full py-3 px-5 pl-12 focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
//                 value={searchQuery}
//                 onChange={(e) => {
//                   setSearchQuery(e.target.value);
//                   setCurrentPage(1);
//                 }}
//               />
//               <Search
//                 className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
//                 size={20}
//               />
//             </div>
//           </div>

//           {/* Featured Products Heading */}
//           <div className="text-center mb-8">
//             <h2 className="text-2xl font-bold text-gray-800 relative inline-block">
//               Feature Products
//               <span className="absolute -bottom-2 left-0 right-0 mx-auto w-16 h-1 bg-[#4CAF50] rounded-full"></span>
//             </h2>
//           </div>

//           {/* Products Grid */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
//             {filteredMedications.length === 0 ? (
//               <div className="col-span-4 text-center py-12">
//                 <p className="text-gray-500">
//                   No products found matching your search.
//                 </p>
//               </div>
//             ) : (
//               paginatedMedications.map((med) => (
//                 <div
//                   key={med._id}
//                   className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer overflow-hidden"
//                   onClick={() => openProductPopup(med)}
//                 >
//                   {med.discount > 0 && (
//                     <div className="bg-[#4CAF50] text-white text-xs font-medium px-2 py-1 absolute right-0 top-0">
//                       Sale
//                     </div>
//                   )}
//                   <div className="p-4 flex items-center justify-center">
//                     <img
//                       src={`http://localhost:5000${med.image}`}
//                       alt={med.name}
//                       className="h-32 object-contain mx-auto"
//                     />
//                   </div>
//                   <div className="p-4 text-center border-t border-gray-100">
//                     <h3 className="text-sm font-medium text-gray-800 mb-1 line-clamp-1">
//                       {med.name}
//                     </h3>
//                     <p className="text-[#4CAF50] font-medium">
//                       {med.discount > 0 ? (
//                         <>
//                           <span className="line-through text-gray-400 text-xs mr-1">
//                             {med.price} JOD
//                           </span>
//                           <span>
//                             {(med.price * (1 - med.discount)).toFixed(2)} JOD
//                           </span>
//                         </>
//                       ) : (
//                         <span>{med.price} JOD</span>
//                       )}
//                     </p>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>

//           {/* Pagination */}
//           {totalPages > 1 && (
//             <div className="flex justify-center mt-8">
//               <button
//                 onClick={() => handlePageChange(currentPage - 1)}
//                 disabled={currentPage === 1}
//                 className="mx-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-full disabled:opacity-50"
//               >
//                 &lt;
//               </button>
//               {[...Array(totalPages)].map((_, index) => (
//                 <button
//                   key={index + 1}
//                   onClick={() => handlePageChange(index + 1)}
//                   className={`mx-1 px-4 py-2 rounded-full ${
//                     currentPage === index + 1
//                       ? "bg-[#4CAF50] text-white"
//                       : "bg-gray-200 text-gray-800"
//                   }`}
//                 >
//                   {index + 1}
//                 </button>
//               ))}
//               <button
//                 onClick={() => handlePageChange(currentPage + 1)}
//                 disabled={currentPage === totalPages}
//                 className="mx-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-full disabled:opacity-50"
//               >
//                 &gt;
//               </button>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Scroll-to-Top Button */}
//       <button
//         onClick={scrollToTop}
//         className={`fixed bottom-6 right-6 bg-[#4CAF50] text-white p-3 rounded-full shadow-lg ${
//           scrollY > 200 ? "opacity-100" : "opacity-0"
//         } transition-opacity duration-300 hover:scale-110`}
//       >
//         <ArrowUpCircle className="h-6 w-6" />
//       </button>

//       {/* Product Popup */}
//       {selectedMedicine && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
//             <div className="p-6">
//               <div className="flex justify-between items-start mb-4">
//                 <h2 className="text-2xl font-bold text-gray-800">
//                   {selectedMedicine.name}
//                 </h2>
//                 <button
//                   onClick={closeProductPopup}
//                   className="text-gray-500 hover:text-[#4CAF50]"
//                 >
//                   <X size={24} />
//                 </button>
//               </div>

//               <div className="mb-6 flex justify-center">
//                 <img
//                   src={`http://localhost:5000${selectedMedicine.image}`}
//                   alt={selectedMedicine.name}
//                   className="max-h-64 object-contain"
//                 />
//               </div>

//               <div className="mb-6">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                   Description:
//                 </h3>
//                 <p className="text-gray-700">{selectedMedicine.description}</p>
//               </div>

//               <div className="grid grid-cols-2 gap-4 mb-6">
//                 <div>
//                   <h4 className="text-sm font-medium text-gray-500">
//                     Category:
//                   </h4>
//                   <p className="text-gray-800">{selectedMedicine.category}</p>
//                 </div>
//                 <div>
//                   <h4 className="text-sm font-medium text-gray-500">
//                     Availability:
//                   </h4>
//                   <p className="text-[#4CAF50] font-medium">In Stock</p>
//                 </div>
//                 <div>
//                   <h4 className="text-sm font-medium text-gray-500">Price:</h4>
//                   <p className="text-gray-800 font-bold">
//                     {selectedMedicine.discount > 0 ? (
//                       <>
//                         <span className="line-through text-gray-500 mr-2">
//                           {selectedMedicine.price} JOD
//                         </span>
//                         <span>
//                           {(
//                             selectedMedicine.price *
//                             (1 - selectedMedicine.discount)
//                           ).toFixed(2)}{" "}
//                           JOD
//                         </span>
//                       </>
//                     ) : (
//                       <span>{selectedMedicine.price} JOD</span>
//                     )}
//                   </p>
//                 </div>
//               </div>

//               <button
//                 className="w-full bg-[#4CAF50] text-white py-3 rounded-lg hover:bg-[#3d8b40] transition-colors flex items-center justify-center gap-2"
//                 onClick={() => {
//                   addToCart(selectedMedicine);
//                   closeProductPopup();
//                 }}
//               >
//                 <ShoppingCart size={20} />
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Pharmacy;



import React, { useState, useEffect } from "react";
import axios from "axios";
import { ShoppingCart, Search, X, ArrowUpCircle } from "lucide-react";

const Pharmacy = ({ addToCart }) => {
  const [medicines, setMedicines] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState(""); // "" for all, "Medicine" or "Medical Equipment"
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const itemsPerPage = 8;

  // Fetch medicines based on search and filter
  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const params = {};
        if (searchQuery) params.search = searchQuery;
        if (filterType) params.type = filterType;
        const response = await axios.get(
          "http://localhost:5000/api/medicines",
          { params }
        );
        setMedicines(response.data);
        setCurrentPage(1); // Reset to first page on new search/filter
      } catch (error) {
        console.error("Error fetching medicines:", error);
      }
    };
    fetchMedicines();
  }, [searchQuery, filterType]);

  // Scroll-to-top logic
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Pagination
  const totalPages = Math.ceil(medicines.length / itemsPerPage);
  const paginatedMedications = medicines.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const openProductPopup = (medicine) => {
    setSelectedMedicine(medicine);
  };

  const closeProductPopup = () => {
    setSelectedMedicine(null);
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Hero section with banner */}
      <section className="relative">
        <div className="container mx-auto px-4 pt-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative h-64 md:h-80 bg-gray-200">
              <img
                src="https://as2.ftcdn.net/jpg/01/97/32/75/1000_F_197327562_uPpQ7QhNyCmFBxkxv1XKefE5kLx2LfK5.jpg"
                alt="Medical supplies banner"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#4CAF50]/80 to-transparent flex items-center">
                <div className="p-8 max-w-lg">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Face Mask And Non Contact Thermometer
                  </h1>
                  <p className="text-white/90 mb-6">
                    Essential protection equipment for health safety and
                    monitoring
                  </p>
                  <button
                    onClick={() => setFilterType("Medical Equipment")}
                    className="bg-white text-[#4CAF50] px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition"
                  >
                    Medical Equipment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products highlights section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Product highlight 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="flex p-4">
                <div className="flex-1">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                    Best in class
                  </p>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">
                    Medicines
                  </h3>
                  <button
                    onClick={() => setFilterType("Medicine")}
                    className="inline-block border border-gray-300 text-sm text-gray-700 px-3 py-1 rounded hover:bg-gray-50 transition"
                  >
                    Shop Now
                  </button>
                </div>
                <div className="w-1/3">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="Medicines"
                    className="object-contain h-24"
                  />
                </div>
              </div>
            </div>

            {/* Product highlight 2 */}
            <div className="bg-[#4CAF50] text-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">30% OFF</h3>
                <p className="text-sm text-white/80 mb-4">
                  Premium quality collection of essential health care products.
                  Save now while supplies last.
                </p>
              </div>
            </div>

            {/* Product highlight 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="flex p-4">
                <div className="flex-1">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                    Save up to 25% off
                  </p>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">
                    Medical Equipment
                  </h3>
                  <button
                    onClick={() => setFilterType("Medical Equipment")}
                    className="inline-block border border-gray-300 text-sm text-gray-700 px-3 py-1 rounded hover:bg-gray-50 transition"
                  >
                    Shop Now
                  </button>
                </div>
                <div className="w-1/3">
                  <img
                    src="https://www.2heartsmedical.com/wp-content/uploads/2022/05/medical-supplies-img.jpg"
                    alt="Medical equipment"
                    className="object-contain h-24"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Featured Products */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="mb-8 flex justify-center space-x-4">
            <button
              onClick={() => setFilterType("")}
              className={`px-4 py-2 rounded-md ${
                filterType === ""
                  ? "bg-[#4CAF50] text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setFilterType("Medicine")}
              className={`px-4 py-2 rounded-md ${
                filterType === "Medicine"
                  ? "bg-[#4CAF50] text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Medicines
            </button>
            <button
              onClick={() => setFilterType("Medical Equipment")}
              className={`px-4 py-2 rounded-md ${
                filterType === "Medical Equipment"
                  ? "bg-[#4CAF50] text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Medical Equipment
            </button>
          </div>

          {/* Search bar */}
          <div className="mb-8 max-w-lg mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-white border border-gray-300 rounded-full py-3 px-5 pl-12 focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
          </div>

          {/* Featured Products Heading */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 relative inline-block">
              Feature Products
              <span className="absolute -bottom-2 left-0 right-0 mx-auto w-16 h-1 bg-[#4CAF50] rounded-full"></span>
            </h2>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {medicines.length === 0 ? (
              <div className="col-span-4 text-center py-12">
                <p className="text-gray-500">
                  No products found matching your criteria.
                </p>
              </div>
            ) : (
              paginatedMedications.map((med) => (
                <div
                  key={med._id}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer overflow-hidden"
                  onClick={() => openProductPopup(med)}
                >
                  {med.discount > 0 && (
                    <div className="bg-[#4CAF50] text-white text-xs font-medium px-2 py-1 absolute right-0 top-0">
                      Sale
                    </div>
                  )}
                  <div className="p-4 flex items-center justify-center">
                    <img
                      src={`http://localhost:5000${med.image}`}
                      alt={med.name}
                      className="h-32 object-contain mx-auto"
                    />
                  </div>
                  <div className="p-4 text-center border-t border-gray-100">
                    <h3 className="text-sm font-medium text-gray-800 mb-1 line-clamp-1">
                      {med.name}
                    </h3>
                    <p className="text-[#4CAF50] font-medium">
                      {med.discount > 0 ? (
                        <>
                          <span className="line-through text-gray-400 text-xs mr-1">
                            {med.price} JOD
                          </span>
                          <span>
                            {(med.price * (1 - med.discount)).toFixed(2)} JOD
                          </span>
                        </>
                      ) : (
                        <span>{med.price} JOD</span>
                      )}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="mx-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-full disabled:opacity-50"
              >
                &lt;
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`mx-1 px-4 py-2 rounded-full ${
                    currentPage === index + 1
                      ? "bg-[#4CAF50] text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="mx-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-full disabled:opacity-50"
              >
                &gt;
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Scroll-to-Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 bg-[#4CAF50] text-white p-3 rounded-full shadow-lg ${
          scrollY > 200 ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300 hover:scale-110`}
      >
        <ArrowUpCircle className="h-6 w-6" />
      </button>

      {/* Product Popup */}
      {selectedMedicine && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  {selectedMedicine.name}
                </h2>
                <button
                  onClick={closeProductPopup}
                  className="text-gray-500 hover:text-[#4CAF50]"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="mb-6 flex justify-center">
                <img
                  src={`http://localhost:5000${selectedMedicine.image}`}
                  alt={selectedMedicine.name}
                  className="max-h-64 object-contain"
                />
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Description:
                </h3>
                <p className="text-gray-700">{selectedMedicine.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Category:
                  </h4>
                  <p className="text-gray-800">{selectedMedicine.category}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Availability:
                  </h4>
                  <p className="text-[#4CAF50] font-medium">In Stock</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Price:</h4>
                  <p className="text-gray-800 font-bold">
                    {selectedMedicine.discount > 0 ? (
                      <>
                        <span className="line-through text-gray-500 mr-2">
                          {selectedMedicine.price} JOD
                        </span>
                        <span>
                          {(
                            selectedMedicine.price *
                            (1 - selectedMedicine.discount)
                          ).toFixed(2)}{" "}
                          JOD
                        </span>
                      </>
                    ) : (
                      <span>{selectedMedicine.price} JOD</span>
                    )}
                  </p>
                </div>
              </div>

              <button
                className="w-full bg-[#4CAF50] text-white py-3 rounded-lg hover:bg-[#3d8b40] transition-colors flex items-center justify-center gap-2"
                onClick={() => {
                  addToCart(selectedMedicine);
                  closeProductPopup();
                }}
              >
                <ShoppingCart size={20} />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pharmacy;