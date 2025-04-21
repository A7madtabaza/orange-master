// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   QrCode,
//   Shield,
//   Bolt,
//   UserPlus,
//   Heart,
//   ArrowUpCircle,
// } from "lucide-react";

// // Ensure the video path is correct
// const heroVideo = "/videos/hero-video.mp4";

// export default function ModernMedicalHomePage() {
//   const [scrollY, setScrollY] = useState(0);

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

//   const sectionVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   const fadeVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { duration: 1, ease: "easeOut" },
//     },
//   };

//   const slideVariants = {
//     hidden: { opacity: 0, x: -50 }, // Changed from x: 50 to x: -50 for left-to-right animation
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   const heartbeatVariants = {
//     beat: {
//       scale: [1, 1.2, 1],
//       transition: { duration: 0.8, repeat: Infinity },
//     },
//   };

//   return (
//     <div
//       className="font-cairo text-[#1A1A1A] bg-[#F5F5F5] min-h-screen relative"
//       dir="ltr"
//     >
//       {/* Hero Section */}
//       <section
//         id="hero"
//         className="relative min-h-screen flex items-center justify-center"
//       >
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover"
//         >
//           <source src={heroVideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="absolute inset-0 bg-black/60"></div>
//         <div className="relative z-10 text-center px-4">
//           <motion.div
//             className="flex justify-center mb-6"
//             animate={{
//               scale: [1, 1.1, 1],
//               transition: { duration: 2, repeat: Infinity },
//             }}
//           >
//             <QrCode className="h-16 w-16 text-[#4CAF50]" />
//           </motion.div>
//           <motion.h1
//             className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-wide"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             One Code <span className="text-[#4CAF50]">Saves Your Life</span>
//           </motion.h1>
//           <motion.p
//             className="text-lg text-gray-200 mb-8 max-w-md mx-auto"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.2 }}
//           >
//             MediQR provides smart technology to transfer your medical
//             information in seconds.
//           </motion.p>
//         </div>
//       </section>

//       {/* Our Idea Section */}
//       <motion.section
//         id="idea"
//         className="py-20 bg-white relative"
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }} // Adjusted for left-to-right
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
//                 Our Idea at <span className="text-[#4CAF50]">MediQR</span>
//               </h2>
//               <p className="text-gray-600 text-lg mb-6">
//                 At MediQR, we are working on an innovative tech solution that
//                 connects medical information with rapid emergency response.
//                 Through a single QR code, doctors can access your vital medical
//                 data in seconds.
//               </p>
//             </motion.div>
//             <motion.div
//               className="relative flex justify-center"
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <motion.div
//                 animate={{
//                   scale: [1, 1.1, 1],
//                   transition: { duration: 2, repeat: Infinity },
//                 }}
//               >
//                 <QrCode className="h-48 w-48 text-[#4CAF50]" />
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Technology Section */}
//       <motion.section
//         id="tech"
//         className="py-20 bg-[#F5F5F5] relative overflow-hidden"
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <div className="container mx-auto px-4">
//           <motion.div
//             className="text-center mb-12"
//             variants={fadeVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
//               The Technology We <span className="text-[#4CAF50]">Use</span>
//             </h2>
//             <p className="text-gray-600 mt-3 max-w-lg mx-auto text-lg">
//               We rely on advanced QR Code technology to ensure fast and secure
//               information transfer.
//             </p>
//           </motion.div>
//           <div className="flex justify-center">
//             <motion.div
//               className="relative"
//               variants={heartbeatVariants}
//               animate="beat"
//             >
//               <motion.div
//                 className="absolute w-64 h-64 bg-[#4CAF50]/10 rounded-full blur-2xl"
//                 animate={{
//                   scale: [1, 1.2, 1],
//                   transition: { duration: 3, repeat: Infinity },
//                 }}
//               />
//               <QrCode className="h-48 w-48 text-[#4CAF50]" />
//             </motion.div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Benefits Section */}
//       <motion.section
//         id="benefits"
//         className="py-20 bg-white relative"
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <div className="container mx-auto px-4">
//           <motion.div
//             className="text-center mb-12"
//             variants={fadeVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
//               Benefits of <span className="text-[#4CAF50]">MediQR</span>
//             </h2>
//             <p className="text-gray-600 mt-3 max-w-lg mx-auto text-lg">
//               Our solutions provide you with protection and speed in critical
//               moments.
//             </p>
//           </motion.div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: <Heart className="h-10 w-10 text-[#4CAF50]" />,
//                 title: "Instant Rescue",
//                 desc: "Your information is available for emergencies in seconds.",
//               },
//               {
//                 icon: <Shield className="h-10 w-10 text-[#4CAF50]" />,
//                 title: "Data Protection",
//                 desc: "Advanced encryption for your medical data.",
//               },
//               {
//                 icon: <Bolt className="h-10 w-10 text-[#4CAF50]" />,
//                 title: "Rapid Response",
//                 desc: "Immediate response in emergency situations.",
//               },
//             ].map((benefit, idx) => (
//               <motion.div
//                 key={idx}
//                 className="text-center bg-[#F5F5F5] p-6 rounded-lg shadow-lg"
//                 variants={slideVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.2 }}
//               >
//                 <motion.div className="flex justify-center mb-4">
//                   {benefit.icon}
//                 </motion.div>
//                 <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
//                   {benefit.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm">{benefit.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* How It Works Section */}
//       <motion.section
//         id="process"
//         className="py-20 bg-[#F5F5F5] relative"
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <motion.h2
//               className="text-3xl md:text-4xl font-bold text-[#1A1A1A]"
//               variants={sectionVariants}
//             >
//               How <span className="text-[#4CAF50]">MediQR</span> Works
//             </motion.h2>
//             <motion.p
//               className="text-gray-600 mt-3 max-w-lg mx-auto text-lg"
//               variants={sectionVariants}
//             >
//               Three simple steps to protect you.
//             </motion.p>
//           </div>
//           <div className="relative">
//             <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#4CAF50] to-transparent hidden md:block"></div>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {[
//                 {
//                   icon: (
//                     <UserPlus className="h-10 w-10 text-[#4CAF50] inline-block align-middle" />
//                   ),
//                   title: "Collect Data",
//                   desc: "Easily enter your medical information.",
//                 },
//                 {
//                   icon: (
//                     <QrCode className="h-10 w-10 text-[#4CAF50] inline-block align-middle" />
//                   ),
//                   title: "Generate Code",
//                   desc: "Get a personalized QR code.",
//                 },
//                 {
//                   icon: (
//                     <Heart className="h-10 w-10 text-[#4CAF50] inline-block align-middle" />
//                   ),
//                   title: "Instant Rescue",
//                   desc: "Scan the code for quick access to information.",
//                 },
//               ].map((step, idx) => (
//                 <motion.div
//                   key={idx}
//                   className="text-center relative"
//                   variants={sectionVariants}
//                   initial="hidden"
//                   whileInView="visible"
//                   whileHover={{ scale: 1.05 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: idx * 0.2 }}
//                 >
//                   <motion.div
//                     className="absolute top-12 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#4CAF50] rounded-full hidden md:block"
//                     animate={{
//                       scale: [1, 1.3, 1],
//                       transition: { duration: 1.5, repeat: Infinity },
//                     }}
//                   />
//                   <motion.div
//                     className="flex justify-center mb-6"
//                     animate={{
//                       scale: [1, 1.1, 1],
//                       transition: { duration: 1.5, repeat: Infinity },
//                     }}
//                   >
//                     <div className="text-[#4CAF50]">{step.icon}</div>
//                   </motion.div>
//                   <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
//                     {step.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm">{step.desc}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Why Us Section */}
//       <motion.section
//         id="why-us"
//         className="py-20 bg-white relative"
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <div className="container mx-auto px-4">
//           <motion.div
//             className="text-center mb-12"
//             variants={fadeVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
//               Why <span className="text-[#4CAF50]">Us?</span>
//             </h2>
//             <p className="text-gray-600 mt-3 max-w-lg mx-auto text-lg">
//               We manage every detail to ensure the highest levels of security
//               and accuracy.
//             </p>
//           </motion.div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }} // Adjusted for left-to-right
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-4">
//                 Full Control and High Security
//               </h3>
//               <p className="text-gray-600 text-lg">
//                 We create your QR code, ensuring your data is fully protected
//                 and handled with complete confidentiality.
//               </p>
//             </motion.div>
//             <motion.div
//               className="relative flex justify-center"
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <motion.div
//                 animate={{
//                   scale: [1, 1.1, 1],
//                   transition: { duration: 2, repeat: Infinity },
//                 }}
//               >
//                 <Shield className="h-48 w-48 text-[#4CAF50]" />
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Scroll-to-Top Button */}
//       <motion.button
//         onClick={scrollToTop}
//         className={`fixed bottom-6 right-6 bg-[#D32F2F] text-white p-4 rounded-full shadow-lg ${
//           scrollY > 200 ? "opacity-100" : "opacity-0"
//         } transition-opacity duration-300`} // Changed left-6 to right-6 for left-to-right
//         whileHover={{
//           scale: 1.1,
//           boxShadow: "0 5px 15px rgba(211, 47, 47, 0.3)",
//         }}
//         whileTap={{ scale: 0.9 }}
//       >
//         <ArrowUpCircle className="h-6 w-6 inline-block align-middle" />
//       </motion.button>
//     </div>
//   );
// }
// import { useState } from "react";

// export default function MedicalHomepage() {
//   const [activeCategory, setActiveCategory] = useState("Angioplasty");

//   const categories = [
//     {
//       name: "Angioplasty",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="w-6 h-6"
//         >
//           <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
//         </svg>
//       ),
//       title: "Advanced Angioplasty Procedures",
//       description:
//         "Angioplasty is a minimally invasive procedure to open narrowed or blocked blood vessels that supply blood to the heart. Our advanced techniques ensure optimal cardiac blood flow with minimal recovery time.",
//       features: [
//         "State-of-the-art cardiac catheterization lab",
//         "Balloon angioplasty and stent placement",
//         "Treatment for coronary artery disease",
//         "Peripheral angioplasty for limb circulation",
//         "Minimally invasive procedures with short recovery times",
//       ],
//       image: "/api/placeholder/600/400",
//     },
//     {
//       name: "Neurology",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="w-6 h-6"
//         >
//           <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
//           <path d="M21 3v5h-5"></path>
//         </svg>
//       ),
//       title: "Comprehensive Neurological Care",
//       description:
//         "Our neurology department provides expert diagnosis and treatment for disorders of the nervous system, including the brain, spinal cord, and peripheral nerves. We offer both inpatient and outpatient services.",
//       features: [
//         "Advanced neurological diagnostic testing",
//         "Treatment for epilepsy, stroke, and movement disorders",
//         "Headache and pain management",
//         "Neurodegenerative disease management",
//         "Neurological rehabilitation services",
//       ],
//       image: "/api/placeholder/600/400",
//     },
//     {
//       name: "Eye Care",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="w-6 h-6"
//         >
//           <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
//           <circle cx="12" cy="12" r="3"></circle>
//         </svg>
//       ),
//       title: "Complete Vision and Eye Health Services",
//       description:
//         "Our ophthalmology department offers comprehensive eye care services from routine eye exams to specialized treatments for eye diseases and surgical procedures to correct vision problems.",
//       features: [
//         "Comprehensive eye examinations",
//         "Cataract surgery and lens implantation",
//         "Glaucoma diagnosis and management",
//         "Retinal disorder treatments",
//         "Pediatric ophthalmology services",
//       ],
//       image: "/api/placeholder/600/400",
//     },
//     {
//       name: "Cardiology",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="w-6 h-6"
//         >
//           <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
//         </svg>
//       ),
//       title: "Expert Cardiac Care",
//       description:
//         "Our cardiology department provides complete heart care, from prevention and diagnosis to treatment of heart disease. Our cardiologists use the latest techniques to ensure your heart health.",
//       features: [
//         "Comprehensive cardiac evaluation",
//         "Echocardiography and stress testing",
//         "Heart rhythm disorder management",
//         "Coronary care unit with 24/7 monitoring",
//         "Cardiac rehabilitation programs",
//       ],
//       image: "/api/placeholder/600/400",
//     },
//     {
//       name: "Orthopaedics",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="w-6 h-6"
//         >
//           <path d="M8 18h8"></path>
//           <path d="M2 8h20"></path>
//           <rect width="20" height="12" x="2" y="6" rx="2"></rect>
//         </svg>
//       ),
//       title: "Complete Musculoskeletal Care",
//       description:
//         "Our orthopaedic department specializes in diagnosis, treatment, prevention, and rehabilitation of injuries and disorders of the musculoskeletal system, including bones, joints, ligaments, tendons, and muscles.",
//       features: [
//         "Joint replacement surgery",
//         "Sports medicine and injury treatment",
//         "Spine surgery and care",
//         "Treatment for fractures and traumatic injuries",
//         "Physical therapy and rehabilitation",
//       ],
//       image: "/api/placeholder/600/400",
//     },
//     {
//       name: "Endocrinology",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="w-6 h-6"
//         >
//           <circle cx="12" cy="12" r="10"></circle>
//           <path d="m4.9 4.9 14.2 14.2"></path>
//         </svg>
//       ),
//       title: "Specialized Hormone and Metabolic Health",
//       description:
//         "Our endocrinology department specializes in diagnosing and treating hormone-related disorders and metabolic conditions affecting the endocrine glands including the thyroid, pancreas, pituitary, and adrenal glands.",
//       features: [
//         "Diabetes management and education",
//         "Thyroid disorder treatment",
//         "Hormonal imbalance diagnosis and care",
//         "Metabolic disorder management",
//         "Osteoporosis prevention and treatment",
//       ],
//       image: "/api/placeholder/600/400",
//     },
//   ];

//   const currentCategory = categories.find((cat) => cat.name === activeCategory);

//   return (
//     <div className="font-sans text-gray-800">
//       {/* Header */}
//       <header className="bg-white shadow-sm">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex justify-between items-center">
//             <div className="text-2xl font-bold text-blue-600">
//               MediCare Center
//             </div>
//             <nav className="hidden md:flex space-x-6">
//               <a href="#" className="font-medium text-blue-600">
//                 Home
//               </a>
//               <a
//                 href="#"
//                 className="font-medium text-gray-600 hover:text-blue-600"
//               >
//                 Services
//               </a>
//               <a
//                 href="#"
//                 className="font-medium text-gray-600 hover:text-blue-600"
//               >
//                 Doctors
//               </a>
//               <a
//                 href="#"
//                 className="font-medium text-gray-600 hover:text-blue-600"
//               >
//                 About
//               </a>
//               <a
//                 href="#"
//                 className="font-medium text-gray-600 hover:text-blue-600"
//               >
//                 Contact
//               </a>
//             </nav>
//             <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
//               Appointment
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <div className="relative bg-blue-600 text-white py-16">
//         <div
//           className="absolute inset-0 bg-cover bg-center opacity-10"
//           style={{ backgroundImage: "url('/api/placeholder/1200/600')" }}
//         ></div>
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="max-w-3xl">
//             <div className="bg-blue-700 text-white px-4 py-1 inline-block rounded-full text-sm font-medium mb-4">
//               WELCOME TO OUR MEDICAL CENTER
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">
//               Expert Healthcare For Your Family
//             </h1>
//             <p className="text-xl mb-8 text-blue-100">
//               Providing compassionate care and exceptional medical expertise
//               with cutting-edge technology for better health outcomes.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 font-medium">
//                 Book Appointment
//               </button>
//               <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 font-medium">
//                 Our Services
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Categories Navigation */}
//       <section className="bg-white py-8 sticky top-0 z-20 shadow-md">
//         <div className="container mx-auto px-4">
//           <div className="flex overflow-x-auto py-2 gap-2 scrollbar-hide">
//             {categories.map((category) => (
//               <button
//                 key={category.name}
//                 onClick={() => setActiveCategory(category.name)}
//                 className={`flex items-center px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
//                   activeCategory === category.name
//                     ? "bg-blue-600 text-white"
//                     : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                 }`}
//               >
//                 <span
//                   className={`${
//                     activeCategory === category.name
//                       ? "text-white"
//                       : "text-blue-600"
//                   } mr-2`}
//                 >
//                   {category.icon}
//                 </span>
//                 {category.name}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Category Content */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl font-bold mb-4 text-blue-800">
//                 {currentCategory.title}
//               </h2>
//               <p className="text-gray-600 mb-8 text-lg">
//                 {currentCategory.description}
//               </p>

//               <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
//                 <h3 className="text-xl font-semibold mb-4 text-blue-700">
//                   Our Services Include:
//                 </h3>
//                 <ul className="space-y-3">
//                   {currentCategory.features.map((feature, index) => (
//                     <li key={index} className="flex items-start">
//                       <svg
//                         className="w-5 h-5 text-blue-500 mr-3 mt-1"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                       <span className="text-gray-700">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="flex gap-4">
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
//                   Schedule Consultation
//                 </button>
//                 <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium">
//                   Learn More
//                 </button>
//               </div>
//             </div>

//             <div className="rounded-xl overflow-hidden shadow-lg">
//               <img
//                 src={currentCategory.image}
//                 alt={currentCategory.name}
//                 className="w-full h-auto"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4 text-blue-800">
//               Why Choose Our Medical Center
//             </h2>
//             <p className="text-gray-600 max-w-3xl mx-auto">
//               We combine advanced medical technology with compassionate care to
//               provide the best healthcare experience for you and your family.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-blue-50 p-6 rounded-xl">
//               <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-8 w-8 text-blue-600"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold mb-2 text-blue-800">
//                 Expert Specialists
//               </h3>
//               <p className="text-gray-600">
//                 Our team consists of board-certified physicians and specialists
//                 with extensive experience in their respective fields.
//               </p>
//             </div>

//             <div className="bg-blue-50 p-6 rounded-xl">
//               <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-8 w-8 text-blue-600"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold mb-2 text-blue-800">
//                 Advanced Technology
//               </h3>
//               <p className="text-gray-600">
//                 We invest in the latest medical equipment and technologies to
//                 provide accurate diagnoses and effective treatments.
//               </p>
//             </div>

//             <div className="bg-blue-50 p-6 rounded-xl">
//               <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-8 w-8 text-blue-600"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold mb-2 text-blue-800">
//                 Patient-Centered Care
//               </h3>
//               <p className="text-gray-600">
//                 We prioritize your comfort, needs, and preferences while
//                 providing personalized healthcare solutions.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="bg-blue-700 py-12 text-white">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row items-center justify-between">
//             <div className="mb-6 md:mb-0">
//               <h2 className="text-2xl font-bold mb-2">
//                 Need Medical Attention?
//               </h2>
//               <p className="text-blue-100">
//                 Book an appointment with our specialists today.
//               </p>
//             </div>
//             <div className="flex gap-4">
//               <button className="bg-white text-blue-700 px-6 py-3 rounded-lg hover:bg-blue-50 font-medium">
//                 Book Appointment
//               </button>
//               <button className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-900 font-medium">
//                 Contact Us
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-gray-300 py-12">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div>
//               <h3 className="text-xl font-bold mb-4 text-white">
//                 MediCare Center
//               </h3>
//               <p className="mb-4">
//                 Providing quality healthcare services for over 20 years with a
//                 focus on patient comfort and advanced treatment.
//               </p>
//               <div className="flex space-x-4">
//                 <a href="#" className="text-gray-300 hover:text-white">
//                   <svg
//                     className="w-5 h-5"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
//                   </svg>
//                 </a>
//                 <a href="#" className="text-gray-300 hover:text-white">
//                   <svg
//                     className="w-5 h-5"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//                   </svg>
//                 </a>
//                 <a href="#" className="text-gray-300 hover:text-white">
//                   <svg
//                     className="w-5 h-5"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                   </svg>
//                 </a>
//               </div>
//             </div>

//             <div>
//               <h4 className="text-lg font-semibold mb-4 text-white">
//                 Quick Links
//               </h4>
//               <ul className="space-y-2">
//                 <li>
//                   <a href="#" className="hover:text-white">
//                     Home
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white">
//                     About Us
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white">
//                     Services
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white">
//                     Doctors
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white">
//                     Contact
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-lg font-semibold mb-4 text-white">
//                 Our Services
//               </h4>
//               <ul className="space-y-2">
//                 {categories.slice(0, 5).map((category) => (
//                   <li key={category.name}>
//                     <a href="#" className="hover:text-white">
//                       {category.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-lg font-semibold mb-4 text-white">
//                 Contact Information
//               </h4>
//               <ul className="space-y-3">
//                 <li className="flex items-start">
//                   <svg
//                     className="w-5 h-5 mr-2 mt-1"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                   </svg>
//                   <span>123 Medical Plaza, City Center</span>
//                 </li>
//                 <li className="flex items-start">
//                   <svg
//                     className="w-5 h-5 mr-2 mt-1"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                     />
//                   </svg>
//                   <span>+1 (555) 123-4567</span>
//                 </li>
//                 <li className="flex items-start">
//                   <svg
//                     className="w-5 h-5 mr-2 mt-1"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                     />
//                   </svg>
//                   <span>info@medicarecenters.com</span>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="border-t border-gray-700 mt-10 pt-6 text-center">
//             <p>© 2025 MediCare Center. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// import { useState } from "react";
// import {
//   ChevronRight,
//   ChevronLeft,
//   Check,
//   ArrowRight,
//   ChevronUp,
// } from "lucide-react";

// export default function MedicalHomepage() {
//   const [activeTab, setActiveTab] = useState("Angioplasty");

//   const medicalDepartments = [
//     { name: "Angioplasty", icon: <DoctorIcon /> },
//     { name: "Neurology", icon: <NeurologyIcon /> },
//     { name: "Eye Care", icon: <EyeCareIcon /> },
//     { name: "Cardiology", icon: <CardiologyIcon /> },
//     { name: "Orthopaedics", icon: <OrthopaedicsIcon /> },
//   ];

//   return (
//     <div className="w-full bg-white font-sans">
//       {/* Hero Section */}
//       <section className="relative bg-blue-100 py-24">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="flex flex-col md:flex-row items-center">
//             <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
//               <div className="bg-white px-3 py-1 rounded-full inline-block text-blue-500 mb-4 font-medium">
//                 WELCOME TO THE SMART LABORATORY
//               </div>
//               <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
//                 We Also Have A Ton Of Fun In The Process
//               </h1>
//               <div className="flex flex-wrap gap-4">
//                 <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded flex items-center font-medium">
//                   CONTACT US <span className="ml-2">+</span>
//                 </button>
//                 <button className="bg-white hover:bg-gray-100 text-blue-500 border border-blue-500 px-6 py-3 rounded flex items-center font-medium">
//                   READ MORE <span className="ml-2">+</span>
//                 </button>
//               </div>
//             </div>
//             <div className="w-full md:w-1/2 relative">
//               <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg">
//                 <img
//                   src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEBUSEhARFhAQFQ8VFRUVEhcYFhUVFRUWGBUVFRcYHiggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGyslHyYtLSstLS8vMC0uLS0tLSsvLS0tLS8uKy0tLS0tLS0vLS0tLS0tLS0tLS0tLS0tLTUtLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB//EAEYQAAECAwQGBggEAwYHAQAAAAEAAgMEEQUSITETQVFhcZEiMkJSobEGFUNigZLB0RQjU/AzcoJUk6Ky0uEWJGNzg6PxB//EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QALREAAgEDAwIEBQUBAAAAAAAAAAECAxESE0FRITEEUmGRFCIygbFCYnGh4SP/2gAMAwEAAhEDEQA/APcEJUiAEIQgBCEIAQgJUAiEqEAiEqEAiEVSXkAqEl5F4IBUJLwReCAVCS8EXggFQkvBF4IBUJLwReCAVCS8EocNqAEJUIBEJUIBEJUIBEIQgBCEIAQgJUAJEqQoBUKm+Ia5pojuqBXOqAvIKgDyhWwJi5NMQKNCWA8vSX01CAUvO1JVIhACE2+No5o0g7w5oByRN0je8OaNK3vDmgHITdK3vDmjSt7w5qAchN0g7w5hJpG94c1QOKRIYre8OaTSDvDmgHITdI3vDmjSDvDmgHKMp2kHeHNMLxtHNALXeU4RTtUaKICUTB3JRNHYoSkogLImxsKe2Zaf/iolNa7pDiFAayRASoAQkqi8gFQhCAEhSpEBVfDNclXi9EhzgaY6q6ty0lDONq397EBnm1YY73ylRPt6GNT+Sy5krPiREuasb7vSJndPj9lC70lbsHiuffEUTnpcYnQO9JB3hyUZ9IvfXPOcE0gJcWN59vDvnmojbY7ywXMGxQvhjYoQ6I20NqBbTT2gONfoFyz2hQuaP2UB1rraHeB+P3UZtsbVyL27zzULhvPNAdn68G1NNtjauNYD3irDIe880B1LbZBNKj4kAcyh9s0wqPgQRzC5xsEb+ae1jUBveut6T10sdrG7ApGgd3LHqoU1PXSX1zxWexusNNP5VNCcCMEBbFrnYeScLVd3XKsCn1QFgWo/uuTxacXYfmVCPMtYKucAoPW0Lv8Agd4+hXOVaEXZyR0jSnJXSZtttWNt8VMy1I21v7+C59trQ9vgd33V2FNtOvNI1qcu0kJUZx7pm1DtCLrucir8nEJxdSu5Y8vEBWpAfRdLnOxqCJvTw5UWRhtHNSNmW95vMLOaW5rB8FwFJD6/PyUcN9ck+F1h+9S2jDRcQkCVCAkSpEAKKZ6pUqjmOrz8igOMtWSixAdECbodWjgNRpmsSJY03U9A5u7bO88beC6aatXRVGjYL3vOBw4krMi+kvuN+c7z9SvBU8LSnNycnf8Ak91PxFSMVFRXsZcKz5gODHNo518i84YhpFcRXaFStOJEgvuOAvFt7A1FCSB5FakX0gBcHGG280OAN92AcQSP8IWfPWnDiG8+Xa51A2ukeMASQMN5K1OCVLCEuvqxCf8A1znHp/BnC0zX3aVPwqugZZ0XWG/MscwmlgeJFujOFdO+mLiMcajFdHpo1aFsCm6M76sW6CnFyzd79ieIcJY4RtZdTH0tRXUNarRZjZU8BVTzUUMe6GGjogEgPLhjjmRvVaWmYtxzobWXG3i4kDOmOsVwC9Nzy2YSD2uvF/RApQuwBzrQn4KGcPTIYA4UBwIOrdwSWdaMaLeLdCAw9w9qtdaSenIjCL2iqQQCA4YYime8qXDRE6HErS4a4edPNRmFE/TONPGlP8w5pHWu6t7oVw72p17vbVC623gdjCne1Xadr3WqkJBeaKuaQNvj9Qp4UyNqoetXOwc1hApgb1NQHa3BW2xXf2eH/du++48kZVbc0JWMCRiM6Z7ifotGC5l8lzhTRvbnrcR9KrB6xF6E0UOqGR5/vFXnwRsRB22NxrpcU6TcBD7RzY1wbr1V8VHOvgaKIGXL7mtaOkMQ27dGJ1UWPBgCgwCk0A2BCF2TmGNhAOe0EA1F4YZ7FRhT4AOIJFTSueZUsGA2vSBpjkp4T4I9lEwqM/htWZZbHSnh+q5UNpHHonD3mp3447NnbGscFoCegj2MTmPuni04P6MXmPuueNTk750fKVpewTMQxFMa7fB6N29S6Yrc645BWP8AhFuP55yf7Mf9RKfxUxX8LF0bWhoo+7hh/KdhU7LLtP8AtMPmP9C5vwtKTvJdR8VUXSL6D2+h7Kn89+bsmt2v3b1XjWFDY4h0SMSXvaCGtOAhNOOGGJVV9oTbDR0xUjDC7/pStt6YpXSv1ahrxGpZfhaHCNqvX3udLZsjC6YN83HuaM8hllgkteA0wHXQ80eW0oTkwkeKwB6QTH6sTl/tuPJOPpHGAqYzxxw2bt45rvJQccX2OEVNSUrM05WQF2P0X1DHBpocahuW1RSEkHRmh0N90uFatcB2ddOKg9fRq0/EHOnWbndveSWFb8Y+3rW7229rLyXm0KDte3Q9WpX6/K+p10IBrrjRRraAYGmW1W4XWC5uxbTMV9DFLiBWl6q6SB1gvbBpr5ex4Kikn8xbCVIEq0cwSJUiAFHH6p4HyUijmOqeB8kBxlpy8B5JfMsaRqyw/qHksmJKSn9qB4AnyaupjsbQARIfRAr+YBs1FUYjmDOLC/vOC8M/DxlK7ie2FeUY2UjntDJ6pgnhDcfJijMGUy0sQ5YCDE15dha8vooYI0sHFzj0SaYkHZuUWlgh7naaH0gwYNd2QRs3jks/DQ8hr4ifmM2IIVy4xziMAGxIUZrSbxNC4NoMzyUxiEGpgy2ed2IcctifaE1BIFI7QQ4Oro3HInDLf4KpHnGkAfiR1m5QXHIk08V2ScOiiYbz6uQRbhcXOhQ2uOBDbwBAwBpTZRQy1pCG27UAAup0CcK4a9ile29U3y4bdGRxwKZZljNmIkNukd+YRUUyFKu17KrsmrdTlK5EbXaK01mvU3U2qOLaYNKgkAg4NAyIOsruH/8A59KHJ0ccIg+rVl+kHoxAlZV7xEiudgGh101JpsaNVStWOblc5Mz7Af4TzgO7qFPJMiWqz9J+rW3d9hyVN71BEr3XfKf3qKpC9Gn2Pbc0USp2Xa5UwVt9t3RjAiAcBrvb/ePJY0u4tcCQ8UOYYagjitKDEMarWvim7QkaNtRs7Sy2zcUty5DtbStF1jhWuYG4bdynI+ixpYshm6IpvAnAwyDWpwW0qmSSsSSEu6IWsYKvdWgqBXM61e9RzeP/ACkTC/24ON3Kn5mvV40UtgQ9Gz8WTVsB1LmtxcKZ6usu2hTpe0OaQAbubXONS0O7PFTJZY7kxdstjh3WY5hAi1Y8gG7gcDl1ajbyTRZzdUQ41PU2ldLa9jmYiNiaRraAsoYF/FrnY1PVGK4ykQV/KYaE+wGrXgNyruai47l9tiF3ViEjbS7js1p49HHd93Z17M+ysiIYZ/jwYeGXQLeORGzwSOfKAdW6fdixxhT3HLk8W+p3jJpdLF2es9sImrrQrjUy4q3HLIVw3qs2PDBrprZblnCd9v3RdH6OxbstDGlBNHHGJU0LnOFSTWtCM1twnOJwdy+P75K6MODHxFTZnFSsxIAC+2Ye8dZ8SXfeca1q6hzU0ObswUwLaUGMGL3bupy66VZEF7MVc447KjFWWvd+xw3LWnDhGdap5mcc2eswmuk/9cb39/vnko52Vs2M0ATAbljo43uaifcHNdXbDSYLhlXWG1OWwBcY+w2l1XPIJOJLHju7DvK89WpTpu2N/Y70tSavn+TfaLPJrel61vfwn53bvkVJBlJDCjpbAMHVcOrWna3rmBZDf1gMAe2NTP8AUeSlhWUa4RmVrTrHvlusbly+KpeT8G9Kr5/ydRZ0pLtfWDcrShuscK8SSt2XzC5mxZR8N9HPa4EGlDX6b100vmF7KMlKN0reh5KyafV3LgSpAlXU4gkSpEAKOY6p4HyUijmOqeB8kB59a0tHJq2A4tLgAQW0oSBXPDNZTrOmiD+SQaPzewYh4A8KldnNTjxhfrxoac1mRZ+JqicgPsuOk/M/6PRrK30r+znYlizWNGNH8SlYlcnC7kNlU53o/M3vZ3fy+044Em92dlFrRJqIfaP+DlWfEdriP+Ypp/uZrW/avYzI3o9MgXhccQYfRFanpG9nhlQrTnpKISysOCWhwJAoKU1muYUBh12nmVHFlzqYeN3JEox3MucnsjQiyekpDY2WDnkAXX4+AyXQei9iul6uitYXgXWlhvYE41qBQ5bda5WQhmFFa8YlhwqMK01811Fl+kMSJEDHMZiDi2oyFdZK6KzOUm2zpBHHvfK77LlvS2KIzhBq8BorUy8csJcMw9sMty3roRNbW+KeJobwtGTz/wD4cikFzHwnDOhe9pxOwsVWYsGcGAl2PrqbMMx+ai9MEw3anNeNRHNLA8inoMzCF6LJRGCvWvh23WAdp5rNl5sNiOe0vY59KggOGGzKi9yBTIkJp6zQeIB81HG5VK3U8aiTheKEsNSD/CP7qr69NfZcA5wIJ/8AG37KOPYsu9pa6XhFrgQRo20IIoQcMkUbFlO5g+hzh+HcC1rgX5OFR1WrobPdjEoABebgMuo1V5H0el4DLkvCEFhcXFsIBoLiAKkUzoByVuFJtYDRzzexNTupsW+lvU4Wnn36DLOf0Xf9yN/nK85FovqcMi4a94+q9JhwWjANzJOZzOJKgiyUHtQoXxY1c5xudoSx2OPkplzwdVDTKta47eKsuhA5thnLOGNm8KKYN2K8NfcZfdS6aDOg3bE2kW84NmgborjDa7xBXPBcv3OuTexkS8WRa6K2ahQi7Svu1ghwpUNABAwxDsFahQ7FdkyXbrwaW6q6qaiFJCno1SL7duDG0x3EJxmHHB0OA6uHShNNaqY1NmvY2pUt0/f/AApwIksx0QQw7K6wtMSjX1pmDtIVaBazxQaaJU09o4Zhp1n3hzXQsfMw8GSkClSehRuJJ2O2hO9YxR15B39LnEZDYDqA5KqNTlBzpeV+5jwrei6o78ae1GulMK+8OatQvSKNqjOOXdOeOzeFb9ZwMA+ULcsw3VQjrN90JzIsifYkf0Q9w1cArap6Eyo8MjZ6Rx9bieMMbt28c1PD9IHdpsI8YYqgScg7VTDuvB7Ow+6FK2xZM4tika+vEHac7X/MVLT4RVocv2NCzZwvObabA0DyW1B6wWFZNmwoJOiLul1q1xprqSt2D1gusb26nCeN/l7FsJUgSqmASJUiAFHMdU8D5KRRTXUPA+SAqQ5dujF5grd1gZ0XJxbOjkmsVnWNKQ25Uw1LQLnNrdcQDqBwVONEiHOI/wCYjyVTOdSkp97/AGbX4J4UkQ1lQytKON3HLMiiZoKUvOYOtXL4LNiQycyTxJKrOlxsC5aaPQpu1jRjRIQArGZUEHBw27lXfMQDhfJweMnazhqVEw2jYmi6FVCJM5Es3NgE3G1BocajGlFY9FoodNDF94tiGlBQYbfis6JECv8Aok4fix/LE8lcUS7O6ARdTglWiDLiNGnpUBEIaUV2nmpEUQDKnakqdqkRRUEdXbUjq7VLRNeEIYfpTELZSI4udho8idb2hc3Z2LAaHHHHNddbjAYDwQCOhnlg4ELmIBFPioyof+IhDovFcdbcFHAhwTEqCLpB7TgK1w4a1K8KjHlwVxlGTex2U0lbqbECzoRJu11ZPrq31UsKShEHA1BpUOxwK5zQkZOKVjXZXqVzNMeOCt5LYlocl2LMRoZwNoUHabDhRR2tZFdY5Jrbfc3OZu0GUaSeMblMSw7arbl5mHQfmtrhtA8VdabwIDw7gQdSYI1qv09kVIIGbngPIYHCtASwVN1rhUDPM5KyZZj8aNIJGbWHLPXrWD6sjh3Rix2gxHOycQBdwJoaKeFLTIYHGJCI6dQ9ovUqcDVtVz1qkfqpv7NM5pU5dqi+6aNgWZBObGZbKJ4suEMmgfE/dLZMWsKFeIvGG6tBhUUy5q4CKNxGLfpVehO6uYZFIt6IO4K/B6wVGRPQCvQMwtELYSpAlUAJELNtaYe0ijSWUNcDnXaMlG7K5UruxoOitGZCpz02LpDcSdxWfDn2Hd4+KnFDkQeCimn2NODXcxoz3908lSiCJ3T4Lo3Q1E6CtGTmXQYh1eJ+iidJvOxdQYG5NMuoDljIO28knqzjzXTmWTTLIU5o2ZuWn6OygZHBp2X+SvmXQyE5pvNpUbUBuVShZjZ14zbXgpmWg3XUIC8lVdkw05OCmqqB6E2qVAKhNKRUg4pHFIkfkhDNt4Vl3/0/5guPbDIy8l1PpRMthyj3ONBWEK73RGtHiQuWly4ki67CmJpQ1rhxFPELLKh9XfslNLzsPgrsKEp2wFCmVpd3gntij9kLUEsNiDJNOockuDPbT9hSNY3crRs0asEhs46nH4oBIV4dV7hwcVbhTkUe0JG+h81VEm8bCntY8dk/Aqg0GTjtbYZ4sH0U/wCJqP4TKjKoqBwGpZjIxGdfiPsrUKY4c6IQ1JZx1+QHkr0vmFmy8XIUOPCivwDiFQXkqZeTqoQEFKkQFWYs+G/NortGB5hZ0exHDGHE+DvuPsttCw6cWaU5I5x5jQ+uyo20qOYToc+w5gjhiF0NFVmLPhvzYK7RgeYWcJL6Wbzi+6KEN7XZEHgfon3FFHsM5w3/AAd9x9lWdp4XWDi0brw5jFTOS7ouMX2ZdMNIYSrQrTBzbTeFbhzDHZOHCtCtqcX2ZlwkhmiSaJWSEXVoyVTCTHQNyvXUhagM0yg4cENguGTiFo3E0w0BSEeKNhUjbRp1mkcFYMJIYQQCCfYRr5JPxrd/JIZcbAk/DDYOStyDvxrd/JMiTraa+ScZYbAk/DDYEBnWhGEWGYdy8HXc6EYEEYfBVYcluW3oQjQqBGYyWUol1e0SW4hSkICcIKtloGeHHBVok5DHarwFfFZbSKk2JoUuiVWLaw1N5n6BMZEmInUY6m0NujmVjUWxvTe5ddDAxNAq8SahjtV4Yp8KwIrsYj2jm4/ZXoHo9CHWvPO80HIJeb7IWgtzEiWiMmsqd5+gQJaZidWGWg6yLo8cV1kCUYzBrGt4ABTXVcJPuyZpdkYclIRWNaHAEtAqQ6vmr8Jjq9U8SQr1EtF0Ssc27jA1OolSqkBIlSIBUiVIgBCEIARRKhAVZiQhv6zBXbkeYWdGsLuRDwcK+IW2kWJU4vuaU5LszmzZ8w3IfK/70TS+YbmIny1XToWNHhnTWe6RynrSIM6fFtFKLXOsN5ldLRRvl2HNjTxaE05bSGpHeJgi1x3OTv8AZPFrDuHmtZ1nwj7KH8oTDZME+zb8KjyTGpyMqfBmetWd13gj1qzY7wWgbGg/p/4nfdJ6mg9w/M77paryhenwyibUZsdyH3QLUZsdyH3V31JB7h+d33S+pYPcPzu+6WqegvT4ZQNqM7rvBMNrN7h8FpepoH6f+J33ThZEH9Mcz90tU5GVPgyH2uO5zd/soja57rR8Vvts2CPZQ/lB81MyVYMmMHBoTCfIzhwcubUecg34NJStMy7JsT5bviaLrAEUTSe7GqtkcvDsSM81eWt4uLjyH3V6B6OsHXe53Dojwx8VtIWlSiZdWTKsvZ8JnVhtB20qeZxVmiVC2kkc22wQhCoBCEIAQlQgBCEIAQhCAEIQgBCEIAQhCAEIQgBCEIAQhCAEIQgBCEIAQhCAEIQgBCEIAQhCAEIQgBCEIAQhCAEIQgBCEIAQhCA//9k="
//                   alt="Doctor with patient"
//                   className="w-full h-full object-cover rounded-lg opacity-80"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Department Cards */}
//         <div className="container mx-auto px-4 lg:px-8 mt-16">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-blue-800 text-white p-6 rounded-lg">
//               <div className="mb-4 text-4xl">
//                 <NeurologyIcon />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Neurology</h3>
//               <p className="mb-4 text-blue-100">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//               </p>
//               <button className="text-white flex items-center text-sm font-medium mt-4">
//                 READ MORE <span className="ml-1">+</span>
//               </button>
//             </div>
//             <div className="bg-blue-500 text-white p-6 rounded-lg">
//               <div className="mb-4 text-4xl">
//                 <EndocrinologyIcon />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Endocrinology</h3>
//               <p className="mb-4 text-blue-100">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//               </p>
//               <button className="text-white flex items-center text-sm font-medium mt-4">
//                 READ MORE <span className="ml-1">+</span>
//               </button>
//             </div>
//             <div className="bg-blue-800 text-white p-6 rounded-lg">
//               <div className="mb-4 text-4xl">
//                 <AngioplastyIcon />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Angioplasty</h3>
//               <p className="mb-4 text-blue-100">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//               </p>
//               <button className="text-white flex items-center text-sm font-medium mt-4">
//                 READ MORE <span className="ml-1">+</span>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Carousel Navigation */}
//         <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
//           <button className="bg-white rounded-md p-2 shadow-md">
//             <ChevronLeft size={24} />
//           </button>
//         </div>
//         <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
//           <button className="bg-white rounded-md p-2 shadow-md">
//             <ChevronRight size={24} />
//           </button>
//         </div>
//       </section>

//       {/* Health Checkup Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="flex flex-col md:flex-row items-center gap-12">
//             <div className="w-full md:w-1/2">
//               <div className="grid grid-cols-2 gap-4 relative">
//                 <div className="col-span-2 row-span-1">
//                   <img
//                     src="/api/placeholder/400/250"
//                     alt="Medical professional"
//                     className="w-full h-full object-cover rounded-lg"
//                   />
//                 </div>
//                 <div className="absolute bottom-0 right-0 w-3/5 h-1/2">
//                   <img
//                     src="/api/placeholder/250/150"
//                     alt="Medical checkup"
//                     className="w-full h-full object-cover rounded-lg border-4 border-white"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="w-full md:w-1/2">
//               <div className="bg-blue-100 text-blue-500 px-4 py-1 rounded-full inline-block mb-4">
//                 HEALTH EQUITY
//               </div>
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
//                 Protect Your Health With Simple Checkup.
//               </h2>
//               <div className="space-y-6">
//                 <div>
//                   <div className="flex items-start gap-2 mb-2">
//                     <div className="mt-1 bg-blue-100 rounded-full p-1">
//                       <Check size={16} className="text-blue-500" />
//                     </div>
//                     <h3 className="text-lg font-medium text-blue-500">
//                       Medical Best Treatment
//                     </h3>
//                   </div>
//                   <p className="text-gray-600 pl-8">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
//                     elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
//                     leo.
//                   </p>
//                 </div>
//                 <div>
//                   <div className="flex items-start gap-2 mb-2">
//                     <div className="mt-1 bg-blue-100 rounded-full p-1">
//                       <Check size={16} className="text-blue-500" />
//                     </div>
//                     <h3 className="text-lg font-medium text-blue-500">
//                       We Take Care Of Your Health
//                     </h3>
//                   </div>
//                   <p className="text-gray-600 pl-8">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
//                     elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
//                     leo.
//                   </p>
//                 </div>
//               </div>
//               <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded flex items-center font-medium mt-8">
//                 READ MORE <ArrowRight size={18} className="ml-2" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Department Tabs Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4 lg:px-8">
//           {/* Department tabs in center of page */}
//           <div className="flex items-center justify-center mb-12">
//             <div className="flex flex-nowrap overflow-x-auto pb-4 gap-2 md:gap-4">
//               {medicalDepartments.map((dept) => (
//                 <button
//                   key={dept.name}
//                   onClick={() => setActiveTab(dept.name)}
//                   className={`flex flex-col items-center p-4 min-w-[120px] rounded-md transition-colors ${
//                     activeTab === dept.name
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                   }`}
//                 >
//                   <div className="text-2xl mb-2">{dept.icon}</div>
//                   <span className="text-sm font-medium">{dept.name}</span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Tab content with image and text */}
//           <div className="flex flex-col md:flex-row items-stretch gap-8">
//             <div className="w-full md:w-1/2">
//               <img
//                 src="/api/placeholder/500/400"
//                 alt="Doctor working"
//                 className="w-full h-full object-cover rounded-lg"
//               />
//             </div>
//             <div className="w-full md:w-1/2">
//               <h2 className="text-3xl font-bold text-gray-800 mb-6">
//                 Reason To Reject Following Drawbacks Service
//               </h2>
//               <p className="text-gray-600 mb-6">
//                 It is a long established fact that a reader will be distracted
//                 by the readable content of a page.
//               </p>
//               <div className="space-y-4">
//                 {[1, 2, 3, 4, 5, 6].map((item) => (
//                   <div key={item} className="flex items-start gap-2">
//                     <div className="mt-1 text-blue-500">
//                       <Check size={18} />
//                     </div>
//                     <p className="text-gray-600">
//                       {item % 2 === 0
//                         ? "It is a long established fact that a reader simply dummy text its layout."
//                         : "Aliquam fermentum eros vestibulum, viverra erat rutrum, tincidunt felis."}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//               <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded flex items-center font-medium mt-8">
//                 READ MORE <ArrowRight size={18} className="ml-2" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Back to Top Button */}
//       <div className="fixed bottom-4 right-4">
//         <button className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md shadow-lg">
//           <ChevronUp size={24} />
//         </button>
//       </div>
//     </div>
//   );
// }

// // Icon Components
// function DoctorIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="w-6 h-6"
//     >
//       <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
//       <circle cx="9" cy="7" r="4"></circle>
//       <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
//       <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
//     </svg>
//   );
// }

// function NeurologyIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="w-6 h-6"
//     >
//       <path d="M12 2a8 8 0 0 0-8 8v12"></path>
//       <path d="M20 10a8 8 0 0 0-8-8"></path>
//       <path d="M12 11.5V20"></path>
//       <path d="M8 16h8"></path>
//     </svg>
//   );
// }

// function EyeCareIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="w-6 h-6"
//     >
//       <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
//       <circle cx="12" cy="12" r="3"></circle>
//     </svg>
//   );
// }

// function CardiologyIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="w-6 h-6"
//     >
//       <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
//     </svg>
//   );
// }

// function OrthopaedicsIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="w-6 h-6"
//     >
//       <path d="M8 2v4"></path>
//       <path d="M16 2v4"></path>
//       <path d="M8 22v-4"></path>
//       <path d="M16 22v-4"></path>
//       <rect width="16" height="8" x="4" y="8" rx="2"></rect>
//     </svg>
//   );
// }

// function EndocrinologyIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="w-6 h-6"
//     >
//       <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
//       <path d="M6.5 2h11"></path>
//       <path d="M6.5 22h11"></path>
//       <path d="M2 12h3"></path>
//       <path d="M19 12h3"></path>
//     </svg>
//   );
// }

// function AngioplastyIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="w-6 h-6"
//     >
//       <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
//       <circle cx="9" cy="9" r="4"></circle>
//       <path d="M14 5l4 4"></path>
//       <path d="M18 9v12"></path>
//       <path d="M22 19c0-3.87-3.13-7-7-7"></path>
//     </svg>
//   );
// }





// import { useState } from "react";
// import {
//   ChevronRight,
//   ChevronLeft,
//   Check,
//   ArrowRight,
//   ChevronUp,
// } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function MedicalHomepage() {
//   const [activeTab, setActiveTab] = useState("Angioedema");
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const heroSlides = [
//     "",
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(
//       (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
//     );
//   };

//   const medicalDepartments = [
//     {
//       name: "Angioedema",
//       icon: <AngioedemaIcon />,
//       title: "Angioedema: Managing Swelling",
//       description:
//         "Our specialists provide expert care for angioedema, ensuring rapid relief and long-term management.",
//       image:
//         "",
//       cta: "Learn More About Angioedema",
//     },
//     {
//       name: "Hepatology",
//       icon: <HepatologyIcon />,
//       title: "Hepatology: Liver Health Experts",
//       description:
//         "We offer comprehensive care for liver conditions, from diagnosis to advanced treatments.",
//       image:
//         "",
//       cta: "Explore Hepatology Services",
//     },
//     {
//       name: "Endocrinology",
//       icon: <EndocrinologyIcon />,
//       title: "Endocrinology: Hormonal Balance",
//       description:
//         "Our endocrinologists provide personalized care for hormonal disorders, helping you thrive.",
//       image:
//         ""
//     },
//   ];

//   return (
//     <div className="w-full bg-gray-50 font-sans">
//       {/* Hero Section */}
//       <section className="relative">
//         {/* Background Image Slider */}
//         <div className="absolute inset-0 z-0 h-full">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentSlide}
//               className="absolute inset-0"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <img
//                 src={heroSlides[currentSlide]}
//                 alt={`Slide ${currentSlide + 1}`}
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         <div className="relative z-10">
//           {/* Hero Content */}
//           <div className="container mx-auto px-4 lg:px-8 flex flex-col items-center text-center py-16">
//             <div className="bg-white px-4 py-1 rounded-md text-blue-500 text-sm font-medium mb-8">
//               WELCOME TO THE SMART LABORATORY
//             </div>
//             <h1 className="text-4xl md:text-6xl font-bold text-white mb-12 max-w-4xl">
//               We Also Have A Ton Of Fun In The Process
//             </h1>
//             <div className="flex flex-wrap justify-center gap-4">
//               <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded flex items-center font-medium">
//                 CONTACT US <span className="ml-2">+</span>
//               </button>
//               <button className="bg-white hover:bg-gray-100 text-blue-500 px-6 py-3 rounded flex items-center font-medium">
//                 READ MORE <span className="ml-2">+</span>
//               </button>
//             </div>
//           </div>

//           {/* Specialty Cards */}
//           <div className="container mx-auto px-4 lg:px-8 pb-16">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <div className="bg-blue-800 text-white p-6 rounded-lg">
//                 <div className="flex items-center mb-4">
//                   <div className="text-4xl mr-3">
//                     <HepatologyIcon />
//                   </div>
//                   <h3 className="text-xl font-semibold">Hepatology</h3>
//                 </div>
//                 <p className="mb-4 text-blue-100">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 </p>
//                 <button className="text-white flex items-center text-sm font-medium mt-4">
//                   READ MORE <span className="ml-1">+</span>
//                 </button>
//               </div>
//               <div className="bg-blue-500 text-white p-6 rounded-lg">
//                 <div className="flex items-center mb-4">
//                   <div className="text-4xl mr-3">
//                     <EndocrinologyIcon />
//                   </div>
//                   <h3 className="text-xl font-semibold">Endocrinology</h3>
//                 </div>
//                 <p className="mb-4 text-blue-100">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 </p>
//                 <button className="text-white flex items-center text-sm font-medium mt-4">
//                   READ MORE <span className="ml-1">+</span>
//                 </button>
//               </div>
//               <div className="bg-blue-800 text-white p-6 rounded-lg">
//                 <div className="flex items-center mb-4">
//                   <div className="text-4xl mr-3">
//                     <AngioedemaIcon />
//                   </div>
//                   <h3 className="text-xl font-semibold">Angioedema</h3>
//                 </div>
//                 <p className="mb-4 text-blue-100">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 </p>
//                 <button className="text-white flex items-center text-sm font-medium mt-4">
//                   READ MORE <span className="ml-1">+</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Carousel Navigation */}
//         <div className="absolute top-1/2 left-2 transform -translate-y-1/2 z-20">
//           <button
//             onClick={prevSlide}
//             className="bg-white rounded-md p-2 shadow-md"
//           >
//             <ChevronLeft size={24} />
//           </button>
//         </div>
//         <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-20">
//           <button
//             onClick={nextSlide}
//             className="bg-white rounded-md p-2 shadow-md"
//           >
//             <ChevronRight size={24} />
//           </button>
//         </div>
//       </section>

//       {/* Health Checkup Section */}
//       <section className="relative -mt-32 bg-white">
//         <div className="container mx-auto px-4 lg:px-8 py-16">
//           <div className="flex flex-col md:flex-row items-center gap-12">
//             <div className="w-full md:w-1/2">
//               <img
//                 src=""
//                 alt="Doctor caring for patient"
//                 className="w-full h-full object-cover rounded-xl shadow-lg"
//               />
//             </div>
//             <div className="w-full md:w-1/2">
//               <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full inline-block mb-4">
//                 YOUR WELLNESS MATTERS
//               </div>
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
//                 Simple Checkups, Lifelong Health
//               </h2>
//               <div className="space-y-6">
//                 <div>
//                   <div className="flex items-start gap-2 mb-2">
//                     <div className="mt-1 bg-blue-100 rounded-full p-1">
//                       <Check size={16} className="text-blue-600" />
//                     </div>
//                     <h3 className="text-lg font-medium text-blue-600">
//                       Compassionate Care
//                     </h3>
//                   </div>
//                   <p className="text-gray-600 pl-8">
//                     Our team provides personalized treatment with empathy and
//                     expertise, ensuring you feel supported every step of the
//                     way.
//                   </p>
//                 </div>
//                 <div>
//                   <div className="flex items-start gap-2 mb-2">
//                     <div className="mt-1 bg-blue-100 rounded-full p-1">
//                       <Check size={16} className="text-blue-600" />
//                     </div>
//                     <h3 className="text-lg font-medium text-blue-600">
//                       Trusted Expertise
//                     </h3>
//                   </div>
//                   <p className="text-gray-600 pl-8">
//                     With cutting-edge technology and experienced specialists, we
//                     prioritize your health and well-being.
//                   </p>
//                 </div>
//               </div>
//               <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center font-medium mt-8">
//                 Book a Checkup <ArrowRight size={18} className="ml-2" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Department Tabs Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4 lg:px-8">
//           {/* Tabs */}
//           <div className="flex items-center justify-center mb-12">
//             <div className="flex flex-nowrap overflow-x-auto pb-4 gap-4">
//               {medicalDepartments.map((dept) => (
//                 <motion.button
//                   key={dept.name}
//                   onClick={() => setActiveTab(dept.name)}
//                   className={`flex flex-col items-center p-6 min-w-[140px] rounded-xl transition-colors ${
//                     activeTab === dept.name
//                       ? "bg-blue-600 text-white shadow-lg"
//                       : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
//                   }`}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <div className="text-3xl mb-2">{dept.icon}</div>
//                   <span className="text-sm font-medium">{dept.name}</span>
//                 </motion.button>
//               ))}
//             </div>
//           </div>

//           {/* Dynamic Tab Content */}
//           <AnimatePresence mode="wait">
//             {medicalDepartments
//               .filter((dept) => dept.name === activeTab)
//               .map((dept) => (
//                 <motion.div
//                   key={dept.name}
//                   className="flex flex-col md:flex-row items-stretch gap-8"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <div className="w-full md:w-1/2">
//                     <img
//                       src={dept.image}
//                       alt={`${dept.name} service`}
//                       className="w-full h-full object-cover rounded-xl shadow-lg"
//                     />
//                   </div>
//                   <div className="w-full md:w-1/2">
//                     <h2 className="text-3xl font-bold text-gray-800 mb-6">
//                       {dept.title}
//                     </h2>
//                     <p className="text-gray-600 mb-6">{dept.description}</p>
//                     <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center font-medium">
//                       {dept.cta} <ArrowRight size={18} className="ml-2" />
//                     </button>
//                   </div>
//                 </motion.div>
//               ))}
//           </AnimatePresence>
//         </div>
//       </section>

//       {/* Back to Top Button */}
//       <div className="fixed bottom-4 right-4">
//         <button
//           className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg"
//           title="Back to Top"
//         >
//           <ChevronUp size={24} />
//         </button>
//       </div>
//     </div>
//   );
// }

// // Icon Components
// function HepatologyIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="w-6 h-6"
//     >
//       <path d="M12 2a8 8 0 0 0-8 8v12"></path>
//       <path d="M20 10a8 8 0 0 0-8-8"></path>
//       <path d="M12 11.5V20"></path>
//       <path d="M8 16h8"></path>
//     </svg>
//   );
// }

// function EndocrinologyIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="w-6 h-6"
//     >
//       <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
//       <path d="M6.5 2h11"></path>
//       <path d="M6.5 22h11"></path>
//       <path d="M2 12h3"></path>
//       <path d="M19 12h3"></path>
//     </svg>
//   );
// }

// function AngioedemaIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="w-6 h-6"
//     >
//       <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
//       <circle cx="9" cy="9" r="4"></circle>
//       <path d="M14 5l4 4"></path>
//       <path d="M18 9v12"></path>
//       <path d="M22 19c0-3.87-3.13-7-7-7"></path>
//     </svg>
//   );
// }



// import { useState } from "react";
// import {
//   ChevronRight,
//   ChevronLeft,
//   Check,
//   ArrowRight,
//   ChevronUp,
// } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function MedicalHomepage() {
//   const [activeTab, setActiveTab] = useState("Angioedema");
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const heroSlides = [
//     "https://mf.b37mrtl.ru/media/pics/2021.08/article/610e6fa84c59b759507c31fb.JPG", // Placeholder image
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(
//       (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
//     );
//   };

//   const medicalDepartments = [
//     {
//       name: "Angioedema",
//       icon: <AngioedemaIcon />,
//       title: "Angioedema: Managing Swelling",
//       description:
//         "Our specialists provide expert care for angioedema, ensuring rapid relief and long-term management.",
//       image:
//         "https://mf.b37mrtl.ru/media/pics/2021.08/article/610e6fa84c59b759507c31fb.JPG", // Placeholder image
//       cta: "Learn More About Angioedema",
//     },
//     {
//       name: "Hepatology",
//       icon: <HepatologyIcon />,
//       title: "Hepatology: Liver Health Experts",
//       description:
//         "We offer comprehensive care for liver conditions, from diagnosis to advanced treatments.",
//       image:
//         "https://mf.b37mrtl.ru/media/pics/2021.08/article/610e6fa84c59b759507c31fb.JPG", // Placeholder image
//       cta: "Explore Hepatology Services",
//     },
//     {
//       name: "Endocrinology",
//       icon: <EndocrinologyIcon />,
//       title: "Endocrinology: Hormonal Balance",
//       description:
//         "Our endocrinologists provide personalized care for hormonal disorders, helping you thrive.",
//       image:
//         "https://mf.b37mrtl.ru/media/pics/2021.08/article/610e6fa84c59b759507c31fb.JPG", // Placeholder image
//       cta: "Discover Endocrinology Care", // Added missing CTA
//     },
//   ];

//   return (
//     <div className="w-full bg-gray-50 font-sans">
//       {/* Hero Section */}
//       <section className="relative">
//         {/* Background Image Slider */}
//         <div className="absolute inset-0 z-0 h-full">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentSlide}
//               className="absolute inset-0"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <img
//                 src={heroSlides[currentSlide]}
//                 alt={`Slide ${currentSlide + 1}`}
//                 className="w-full h-full object-cover"
//               />
//               {/* Transparent Black Overlay */}
//               <div className="absolute inset-0 bg-black/60" />
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         <div className="relative z-10">
//           {/* Hero Content */}
//           <div className="container mx-auto px-4 lg:px-8 flex flex-col items-center text-center py-16 md:py-20">
//             <div className="bg-white px-4 py-1 rounded-md text-[#4CAF50] text-sm font-medium mb-8">
//               WELCOME TO THE SMART LABORATORY
//             </div>
//             <h1 className="text-4xl md:text-6xl font-bold text-[#FFFFFF] mb-12 max-w-4xl">
//               We Also Have A Ton Of Fun In The Process
//             </h1>
//             <div className="flex flex-wrap justify-center gap-4">
//               <button className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white px-6 py-3 rounded flex items-center font-medium">
//                 CONTACT US <span className="ml-2">+</span>
//               </button>
//               <button className="bg-[#FFFFFF] hover:bg-gray-100 text-[#4CAF50] px-6 py-3 rounded flex items-center font-medium">
//                 READ MORE <span className="ml-2">+</span>
//               </button>
//             </div>
//           </div>

//           {/* Specialty Cards */}
//           <div className="container mx-auto px-4 lg:px-8 pb-16">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <div className="bg-[#4CAF50] text-white p-6 rounded-lg">
//                 <div className="flex items-center mb-4">
//                   <div className="text-4xl mr-3">
//                     <HepatologyIcon />
//                   </div>
//                   <h3 className="text-xl font-semibold">Hepatology</h3>
//                 </div>
//                 <p className="mb-4 text-[#FFFFFF]/90">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 </p>
//                 <button className="text-white flex items-center text-sm font-medium mt-4">
//                   READ MORE <span className="ml-1">+</span>
//                 </button>
//               </div>
//               <div className="bg-[#4CAF50] text-white p-6 rounded-lg">
//                 <div className="flex items-center mb-4">
//                   <div className="text-4xl mr-3">
//                     <EndocrinologyIcon />
//                   </div>
//                   <h3 className="text-xl font-semibold">Endocrinology</h3>
//                 </div>
//                 <p className="mb-4 text-[#FFFFFF]/90">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 </p>
//                 <button className="text-white flex items-center text-sm font-medium mt-4">
//                   READ MORE <span className="ml-1">+</span>
//                 </button>
//               </div>
//               <div className="bg-[#4CAF50] text-white p-6 rounded-lg">
//                 <div className="flex items-center mb-4">
//                   <div className="text-4xl mr-3">
//                     <AngioedemaIcon />
//                   </div>
//                   <h3 className="text-xl font-semibold">Angioedema</h3>
//                 </div>
//                 <p className="mb-4 text-[#FFFFFF]/90">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 </p>
//                 <button className="text-white flex items-center text-sm font-medium mt-4">
//                   READ MORE <span className="ml-1">+</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Carousel Navigation */}
//         <div className="absolute top-1/2 left-2 transform -translate-y-1/2 z-20">
//           <button
//             onClick={prevSlide}
//             className="bg-white rounded-md p-2 shadow-md"
//             aria-label="Previous Slide"
//           >
//             <ChevronLeft size={24} />
//           </button>
//         </div>
//         <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-20">
//           <button
//             onClick={nextSlide}
//             className="bg-white rounded-md p-2 shadow-md"
//             aria-label="Next Slide"
//           >
//             <ChevronRight size={24} />
//           </button>
//         </div>
//       </section>

//       {/* Health Checkup Section */}
//       <section className="relative -mt-32 bg-white">
//         <div className="container mx-auto px-4 lg:px-8 py-16">
//           <div className="flex flex-col md:flex-row items-center gap-12">
//             <div className="w-full md:w-1/2">
//               <img
//                 src="https://mf.b37mrtl.ru/media/pics/2021.08/article/610e6fa84c59b759507c31fb.JPG" // Placeholder image
//                 alt="Doctor caring for patient"
//                 className="w-full h-full object-cover rounded-xl shadow-lg"
//               />
//             </div>
//             <div className="w-full md:w-1/2">
//               <div className="bg-[#4CAF50]/10 text-[#4CAF50] px-4 py-1 rounded-full inline-block mb-4">
//                 YOUR WELLNESS MATTERS
//               </div>
//               <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
//                 Simple Checkups, Lifelong Health
//               </h2>
//               <div className="space-y-6">
//                 <div>
//                   <div className="flex items-start gap-2 mb-2">
//                     <div className="mt-1 bg-[#4CAF50]/10 rounded-full p-1">
//                       <Check size={16} className="text-[#4CAF50]" />
//                     </div>
//                     <h3 className="text-lg font-medium text-[#4CAF50]">
//                       Compassionate Care
//                     </h3>
//                   </div>
//                   <p className="text-[#606060] pl-8">
//                     Our team provides personalized treatment with empathy and
//                     expertise, ensuring you feel supported every step of the
//                     way.
//                   </p>
//                 </div>
//                 <div>
//                   <div className="flex items-start gap-2 mb-2">
//                     <div className="mt-1 bg-[#4CAF50]/10 rounded-full p-1">
//                       <Check size={16} className="text-[#4CAF50]" />
//                     </div>
//                     <h3 className="text-lg font-medium text-[#4CAF50]">
//                       Trusted Expertise
//                     </h3>
//                   </div>
//                   <p className="text-[#606060] pl-8">
//                     With cutting-edge technology and experienced specialists, we
//                     prioritize your health and well-being.
//                   </p>
//                 </div>
//               </div>
//               <button className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white px-6 py-3 rounded-full flex items-center font-medium mt-8">
//                 Book a Checkup <ArrowRight size={18} className="ml-2" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Department Tabs Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4 lg:px-8">
//           {/* Tabs */}
//           <div className="flex items-center justify-center mb-12">
//             <div className="flex flex-nowrap overflow-x-auto pb-4 gap-4">
//               {medicalDepartments.map((dept) => (
//                 <motion.button
//                   key={dept.name}
//                   onClick={() => setActiveTab(dept.name)}
//                   className={`flex flex-col items-center p-6 min-w-[140px] rounded-xl transition-colors ${
//                     activeTab === dept.name
//                       ? "bg-[#4CAF50] text-white shadow-lg"
//                       : "bg-white text-[#1A1A1A] hover:bg-gray-100 shadow-md"
//                   }`}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <div className="text-3xl mb-2">{dept.icon}</div>
//                   <span className="text-sm font-medium">{dept.name}</span>
//                 </motion.button>
//               ))}
//             </div>
//           </div>

//           {/* Dynamic Tab Content */}
//           <AnimatePresence mode="wait">
//             {medicalDepartments
//               .filter((dept) => dept.name === activeTab)
//               .map((dept) => (
//                 <motion.div
//                   key={dept.name}
//                   className="flex flex-col md:flex-row items-stretch gap-8"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <div className="w-full md:w-1/2">
//                     <img
//                       src={dept.image}
//                       alt={`${dept.name} service`}
//                       className="w-full h-full object-cover rounded-xl shadow-lg"
//                     />
//                   </div>
//                   <div className="w-full md:w-1/2">
//                     <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">
//                       {dept.title}
//                     </h2>
//                     <p className="text-[#606060] mb-6">{dept.description}</p>
//                     <button className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white px-6 py-3 rounded-full flex items-center font-medium">
//                       {dept.cta} <ArrowRight size={18} className="ml-2" />
//                     </button>
//                   </div>
//                 </motion.div>
//               ))}
//           </AnimatePresence>
//         </div>
//       </section>

//       {/* Back to Top Button */}
//       <div className="fixed bottom-4 right-4">
//         <button
//           className="bg-[#D32F2F] hover:bg-[#D32F2F]/90 text-white p-3 rounded-full shadow-lg"
//           title="Back to Top"
//           aria-label="Back to Top"
//         >
//           <ChevronUp size={24} />
//         </button>
//       </div>
//     </div>
//   );
// }

// // Icon Components
// function HepatologyIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="w-6 h-6"
//     >
//       <path d="M12 2a8 8 0 0 0-8 8v12"></path>
//       <path d="M20 10a8 8 0 0 0-8-8"></path>
//       <path d="M12 11.5V20"></path>
//       <path d="M8 16h8"></path>
//     </svg>
//   );
// }

// function EndocrinologyIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="w-6 h-6"
//     >
//       <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
//       <path d="M6.5 2h11"></path>
//       <path d="M6.5 22h11"></path>
//       <path d="M2 12h3"></path>
//       <path d="M19 12h3"></path>
//     </svg>
//   );
// }

// function AngioedemaIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="w-6 h-6"
//     >
//       <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
//       <circle cx="9" cy="9" r="4"></circle>
//       <path d="M14 5l4 4"></path>
//       <path d="M18 9v12"></path>
//       <path d="M22 19c0-3.87-3.13-7-7-7"></path>
//     </svg>
//   );
// }


















// import { useState } from "react";
// import {
//   ChevronRight,
//   ChevronLeft,
//   Check,
//   ArrowRight,
//   ChevronUp,
// } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function MedicalHomepage() {
//   const [activeTab, setActiveTab] = useState("Angioedema");
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const heroSlides = [
//     "https://mf.b37mrtl.ru/media/pics/2021.08/article/610e6fa84c59b759507c31fb.JPG",
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(
//       (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
//     );
//   };

//   const medicalDepartments = [
//     {
//       name: "Angioedema",
//       icon: <AngioedemaIcon />,
//       title: "Angioedema: Managing Swelling",
//       description:
//         "Our specialists provide expert care for angioedema, ensuring rapid relief and long-term management.",
//       image:
//         "https://mf.b37mrtl.ru/media/pics/2021.08/article/610e6fa84c59b759507c31fb.JPG",
//       cta: "Learn More About Angioedema",
//     },
//     {
//       name: "Hepatology",
//       icon: <HepatologyIcon />,
//       title: "Hepatology: Liver Health Experts",
//       description:
//         "We offer comprehensive care for liver conditions, from diagnosis to advanced treatments.",
//       image:
//         "https://mf.b37mrtl.ru/media/pics/2021.08/article/610e6fa84c59b759507c31fb.JPG",
//       cta: "Explore Hepatology Services",
//     },
//     {
//       name: "Endocrinology",
//       icon: <EndocrinologyIcon />,
//       title: "Endocrinology: Hormonal Balance",
//       description:
//         "Our endocrinologists provide personalized care for hormonal disorders, helping you thrive.",
//       image:
//         "https://mf.b37mrtl.ru/media/pics/2021.08/article/610e6fa84c59b759507c31fb.JPG",
//       cta: "Discover Endocrinology Care",
//     },
//   ];

//   return (
//     <div className="w-full bg-gray-50 font-sans">
//       {/* Hero Section */}
//       <section className="relative mb-16">
//         {/* Background Image Slider */}
//         <div className="absolute inset-0 z-0 h-full">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentSlide}
//               className="absolute inset-0"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <img
//                 src={heroSlides[currentSlide]}
//                 alt={`Slide ${currentSlide + 1}`}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black/60" />
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         <div className="relative z-10">
//           {/* Hero Content */}
//           <div className="container mx-auto px-4 lg:px-8 flex flex-col items-center text-center py-16 md:py-20">
//             <div className="bg-white px-4 py-1 rounded-md text-[#4CAF50] text-sm font-medium mb-8">
//               WELCOME TO THE SMART LABORATORY
//             </div>
//             <h1 className="text-4xl md:text-6xl font-bold text-[#FFFFFF] mb-12 max-w-4xl">
//               We Also Have A Ton Of Fun In The Process
//             </h1>
//             <div className="flex flex-wrap justify-center gap-4">
//               <button className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white px-6 py-3 rounded flex items-center font-medium">
//                 CONTACT US <span className="ml-2">+</span>
//               </button>
//               <button className="bg-[#FFFFFF] hover:bg-gray-100 text-[#4CAF50] px-6 py-3 rounded flex items-center font-medium">
//                 READ MORE <span className="ml-2">+</span>
//               </button>
//             </div>
//           </div>

//           {/* Specialty Cards */}
//           <div className="container mx-auto px-4 lg:px-8 pb-16">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <div className="bg-[#4CAF50] text-white p-6 rounded-lg">
//                 <div className="flex items-center mb-4">
//                   <div className="text-4xl mr-3">
//                     <HepatologyIcon />
//                   </div>
//                   <h3 className="text-xl font-semibold">Hepatology</h3>
//                 </div>
//                 <p className="mb-4 text-[#FFFFFF]/90">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 </p>
//                 <button className="text-white flex items-center text-sm font-medium mt-4">
//                   READ MORE <span className="ml-1">+</span>
//                 </button>
//               </div>
//               <div className="bg-[#4CAF50] text-white p-6 rounded-lg">
//                 <div className="flex items-center mb-4">
//                   <div className="text-4xl mr-3">
//                     <EndocrinologyIcon />
//                   </div>
//                   <h3 className="text-xl font-semibold">Endocrinology</h3>
//                 </div>
//                 <p className="mb-4 text-[#FFFFFF]/90">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 </p>
//                 <button className="text-white flex items-center text-sm font-medium mt-4">
//                   READ MORE <span className="ml-1">+</span>
//                 </button>
//               </div>
//               <div className="bg-[#4CAF50] text-white p-6 rounded-lg">
//                 <div className="flex items-center mb-4">
//                   <div className="text-4xl mr-3">
//                     <AngioedemaIcon />
//                   </div>
//                   <h3 className="text-xl font-semibold">Angioedema</h3>
//                 </div>
//                 <p className="mb-4 text-[#FFFFFF]/90">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 </p>
//                 <button className="text-white flex items-center text-sm font-medium mt-4">
//                   READ MORE <span className="ml-1">+</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Carousel Navigation */}
//         <div className="absolute top-1/2 left-2 transform -translate-y-1/2 z-20">
//           <button
//             onClick={prevSlide}
//             className="bg-white rounded-md p-2 shadow-md"
//             aria-label="Previous Slide"
//           >
//             <ChevronLeft size={24} />
//           </button>
//         </div>
//         <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-20">
//           <button
//             onClick={nextSlide}
//             className="bg-white rounded-md p-2 shadow-md"
//             aria-label="Next Slide"
//           >
//             <ChevronRight size={24} />
//           </button>
//         </div>
//       </section>

//       {/* Health Checkup Section */}
//       <section className="relative -mt-16 mt-8 bg-white mb-16">
//         <div className="container mx-auto px-4 lg:px-8 py-20">
//           <div className="flex flex-col md:flex-row items-center gap-12">
//             <div className="w-full md:w-1/2">
//               <img
//                 src="https://mf.b37mrtl.ru/media/pics/2021.08/article/610e6fa84c59b759507c31fb.JPG"
//                 alt="Doctor caring for patient"
//                 className="w-full h-full object-cover rounded-xl shadow-lg"
//               />
//             </div>
//             <div className="w-full md:w-1/2">
//               <div className="bg-[#4CAF50]/10 text-[#4CAF50] px-4 py-1 rounded-full inline-block mb-4">
//                 YOUR WELLNESS MATTERS
//               </div>
//               <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
//                 Simple Checkups, Lifelong Health
//               </h2>
//               <div className="space-y-6">
//                 <div>
//                   <div className="flex items-start gap-2 mb-2">
//                     <div className="mt-1 bg-[#4CAF50]/10 rounded-full p-1">
//                       <Check size={16} className="text-[#4CAF50]" />
//                     </div>
//                     <h3 className="text-lg font-medium text-[#4CAF50]">
//                       Compassionate Care
//                     </h3>
//                   </div>
//                   <p className="text-[#606060] pl-8">
//                     Our team provides personalized treatment with empathy and
//                     expertise, ensuring you feel supported every step of the
//                     way.
//                   </p>
//                 </div>
//                 <div>
//                   <div className="flex items-start gap-2 mb-2">
//                     <div className="mt-1 bg-[#4CAF50]/10 rounded-full p-1">
//                       <Check size={16} className="text-[#4CAF50]" />
//                     </div>
//                     <h3 className="text-lg font-medium text-[#4CAF50]">
//                       Trusted Expertise
//                     </h3>
//                   </div>
//                   <p className="text-[#606060] pl-8">
//                     With cutting-edge technology and experienced specialists, we
//                     prioritize your health and well-being.
//                   </p>
//                 </div>
//               </div>
//               <button className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white px-6 py-3 rounded-full flex items-center font-medium mt-8">
//                 Book a Checkup <ArrowRight size={18} className="ml-2" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Department Tabs Section */}
//       <section className="py-20 bg-gray-50 pb-20">
//         <div className="container mx-auto px-4 lg:px-8">
//           {/* Tabs */}
//           <div className="flex items-center justify-center mb-12">
//             <div className="flex flex-nowrap overflow-x-auto pb-4 gap-4">
//               {medicalDepartments.map((dept) => (
//                 <motion.button
//                   key={dept.name}
//                   onClick={() => setActiveTab(dept.name)}
//                   className={`flex flex-col items-center p-6 min-w-[140px] rounded-xl transition-colors ${
//                     activeTab === dept.name
//                       ? "bg-[#4CAF50] text-white shadow-lg"
//                       : "bg-white text-[#1A1A1A] hover:bg-gray-100 shadow-md"
//                   }`}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <div className="text-3xl mb-2">{dept.icon}</div>
//                   <span className="text-sm font-medium">{dept.name}</span>
//                 </motion.button>
//               ))}
//             </div>
//           </div>

//           {/* Dynamic Tab Content */}
//           <AnimatePresence mode="wait">
//             {medicalDepartments
//               .filter((dept) => dept.name === activeTab)
//               .map((dept) => (
//                 <motion.div
//                   key={dept.name}
//                   className="flex flex-col md:flex-row items-stretch gap-8"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <div className="w-full md:w-1/2">
//                     <img
//                       src={dept.image}
//                       alt={`${dept.name} service`}
//                       className="w-full h-full object-cover rounded-xl shadow-lg"
//                     />
//                   </div>
//                   <div className="w-full md:w-1/2">
//                     <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">
//                       {dept.title}
//                     </h2>
//                     <p className="text-[#606060] mb-6">{dept.description}</p>
//                     <button className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white px-6 py-3 rounded-full flex items-center font-medium">
//                       {dept.cta} <ArrowRight size={18} className="ml-2" />
//                     </button>
//                   </div>
//                 </motion.div>
//               ))}
//           </AnimatePresence>
//         </div>
//       </section>

//       {/* Back to Top Button */}
//       <div className="fixed bottom-4 right-4">
//         <button
//           className="bg-[#D32F2F] hover:bg-[#D32F2F]/90 text-white p-3 rounded-full shadow-lg"
//           title="Back to Top"
//           aria-label="Back to Top"
//         >
//           <ChevronUp size={24} />
//         </button>
//       </div>
//     </div>
//   );
// }

// // Icon Components
// function HepatologyIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="w-6 h-6"
//     >
//       <path d="M12 2a8 8 0 0 0-8 8v12"></path>
//       <path d="M20 10a8 8 0 0 0-8-8"></path>
//       <path d="M12 11.5V20"></path>
//       <path d="M8 16h8"></path>
//     </svg>
//   );
// }

// function EndocrinologyIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="w-6 h-6"
//     >
//       <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
//       <path d="M6.5 2h11"></path>
//       <path d="M6.5 22h11"></path>
//       <path d="M2 12h3"></path>
//       <path d="M19 12h3"></path>
//     </svg>
//   );
// }

// function AngioedemaIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="w-6 h-6"
//     >
//       <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
//       <circle cx="9" cy="9" r="4"></circle>
//       <path d="M14 5l4 4"></path>
//       <path d="M18 9v12"></path>
//       <path d="M22 19c0-3.87-3.13-7-7-7"></path>
//     </svg>
//   );
// }














// import { useState } from "react";
// import {
//   ChevronRight,
//   ChevronLeft,
//   Check,
//   ArrowRight,
//   ChevronUp,
// } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const Index = () => {
//   const [activeTab, setActiveTab] = useState("Angioedema");
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const heroSlides = [
//     "https://mf.b37mrtl.ru/media/pics/2021.08/article/610e6fa84c59b759507c31fb.JPG",
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(
//       (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
//     );
//   };

//   const medicalDepartments = [
//     {
//       name: "Angioedema",
//       icon: <AngioedemaIcon />,
//       title: "Angioedema: Managing Swelling",
//       description:
//         "Our specialists provide expert care for angioedema, ensuring rapid relief and long-term management.",
//       image:
//         "https://mf.b37mrtl.ru/media/pics/2021.08/article/610e6fa84c59b759507c31fb.JPG",
//       cta: "Learn More About Angioedema",
//     },
//     {
//       name: "Hepatology",
//       icon: <HepatologyIcon />,
//       title: "Hepatology: Liver Health Experts",
//       description:
//         "We offer comprehensive care for liver conditions, from diagnosis to advanced treatments.",
//       image:
//         "https://mf.b37mrtl.ru/media/pics/2021.08/article/610e6fa84c59b759507c31fb.JPG",
//       cta: "Explore Hepatology Services",
//     },
//     {
//       name: "Endocrinology",
//       icon: <EndocrinologyIcon />,
//       title: "Endocrinology: Hormonal Balance",
//       description:
//         "Our endocrinologists provide personalized care for hormonal disorders, helping you thrive.",
//       image:
//         "https://mf.b37mrtl.ru/media/pics/2021.08/article/610e6fa84c59b759507c31fb.JPG",
//       cta: "Discover Endocrinology Care",
//     },
//   ];

//   return (
//     <div className="w-full bg-gray-50 font-sans">
//       {/* Hero Section */}
//       <section className="relative mb-32">
//         {/* Background Image Slider */}
//         <div className="absolute inset-0 z-0 h-full">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentSlide}
//               className="absolute inset-0"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <img
//                 src={heroSlides[currentSlide]}
//                 alt={`Slide ${currentSlide + 1}`}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black/60" />
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         <div className="relative z-10">
//           {/* Hero Content */}
//           <div className="container mx-auto px-4 lg:px-8 flex flex-col items-center text-center py-16 md:py-20">
//             <div className="bg-white px-4 py-1 rounded-md text-green-600 text-sm font-medium mb-8">
//               WELCOME TO THE SMART LABORATORY
//             </div>
//             <h1 className="text-4xl md:text-6xl font-bold text-white mb-12 max-w-4xl">
//               We Also Have A Ton Of Fun In The Process
//             </h1>
//             <div className="flex flex-wrap justify-center gap-4">
//               <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded flex items-center font-medium">
//                 CONTACT US <span className="ml-2">+</span>
//               </button>
//               <button className="bg-white hover:bg-gray-100 text-green-600 px-6 py-3 rounded flex items-center font-medium">
//                 READ MORE <span className="ml-2">+</span>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Specialty Cards - Positioned to Straddle the Hero Section Boundary */}
//         <div className="absolute bottom-0 left-0 right-0 z-15 translate-y-1/2">
//           <div className="container mx-auto px-4 lg:px-8">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <div className="bg-green-600 text-white p-4 rounded-lg shadow-lg">
//                 <div className="flex items-center mb-3">
//                   <div className="text-3xl mr-2">
//                     <HepatologyIcon />
//                   </div>
//                   <h3 className="text-lg font-semibold">Hepatology</h3>
//                 </div>
//                 <p className="mb-3 text-white/90 text-sm">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 </p>
//                 <button className="text-white flex items-center text-xs font-medium mt-3">
//                   READ MORE <span className="ml-1">+</span>
//                 </button>
//               </div>
//               <div className="bg-green-600 text-white p-4 rounded-lg shadow-lg">
//                 <div className="flex items-center mb-3">
//                   <div className="text-3xl mr-2">
//                     <EndocrinologyIcon />
//                   </div>
//                   <h3 className="text-lg font-semibold">Endocrinology</h3>
//                 </div>
//                 <p className="mb-3 text-white/90 text-sm">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 </p>
//                 <button className="text-white flex items-center text-xs font-medium mt-3">
//                   READ MORE <span className="ml-1">+</span>
//                 </button>
//               </div>
//               <div className="bg-green-600 text-white p-4 rounded-lg shadow-lg">
//                 <div className="flex items-center mb-3">
//                   <div className="text-3xl mr-2">
//                     <AngioedemaIcon />
//                   </div>
//                   <h3 className="text-lg font-semibold">Angioedema</h3>
//                 </div>
//                 <p className="mb-3 text-white/90 text-sm">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 </p>
//                 <button className="text-white flex items-center text-xs font-medium mt-3">
//                   READ MORE <span className="ml-1">+</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Carousel Navigation */}
//         <div className="absolute top-1/2 left-2 transform -translate-y-1/2 z-20">
//           <button
//             onClick={prevSlide}
//             className="bg-white rounded-md p-2 shadow-md"
//             aria-label="Previous Slide"
//           >
//             <ChevronLeft size={24} />
//           </button>
//         </div>
//         <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-20">
//           <button
//             onClick={nextSlide}
//             className="bg-white rounded-md p-2 shadow-md"
//             aria-label="Next Slide"
//           >
//             <ChevronRight size={24} />
//           </button>
//         </div>
//       </section>

//       {/* Health Checkup Section */}
//       <section className="relative -mt-8 mt-8 bg-white mb-16">
//         <div className="container mx-auto px-4 lg:px-8 py-20">
//           <div className="flex flex-col md:flex-row items-center gap-12">
//             <div className="w-full md:w-1/2">
//               <img
//                 src="https://mf.b37mrtl.ru/media/pics/2021.08/article/610e6fa84c59b759507c31fb.JPG"
//                 alt="Doctor caring for patient"
//                 className="w-full h-full object-cover rounded-xl shadow-lg"
//               />
//             </div>
//             <div className="w-full md:w-1/2">
//               <div className="bg-green-100 text-green-600 px-4 py-1 rounded-full inline-block mb-4">
//                 YOUR WELLNESS MATTERS
//               </div>
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//                 Simple Checkups, Lifelong Health
//               </h2>
//               <div className="space-y-6">
//                 <div>
//                   <div className="flex items-start gap-2 mb-2">
//                     <div className="mt-1 bg-green-100 rounded-full p-1">
//                       <Check size={16} className="text-green-600" />
//                     </div>
//                     <h3 className="text-lg font-medium text-green-600">
//                       Compassionate Care
//                     </h3>
//                   </div>
//                   <p className="text-gray-600 pl-8">
//                     Our team provides personalized treatment with empathy and
//                     expertise, ensuring you feel supported every step of the
//                     way.
//                   </p>
//                 </div>
//                 <div>
//                   <div className="flex items-start gap-2 mb-2">
//                     <div className="mt-1 bg-green-100 rounded-full p-1">
//                       <Check size={16} className="text-green-600" />
//                     </div>
//                     <h3 className="text-lg font-medium text-green-600">
//                       Trusted Expertise
//                     </h3>
//                   </div>
//                   <p className="text-gray-600 pl-8">
//                     With cutting-edge technology and experienced specialists, we
//                     prioritize your health and well-being.
//                   </p>
//                 </div>
//               </div>
//               <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full flex items-center font-medium mt-8">
//                 Book a Checkup <ArrowRight size={18} className="ml-2" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Department Tabs Section */}
//       <section className="py-20 bg-gray-50 pb-20">
//         <div className="container mx-auto px-4 lg:px-8">
//           {/* Tabs */}
//           <div className="flex items-center justify-center mb-12">
//             <div className="flex flex-nowrap overflow-x-auto pb-4 gap-4">
//               {medicalDepartments.map((dept) => (
//                 <motion.button
//                   key={dept.name}
//                   onClick={() => setActiveTab(dept.name)}
//                   className={`flex flex-col items-center p-6 min-w-[140px] rounded-xl transition-colors ${
//                     activeTab === dept.name
//                       ? "bg-green-600 text-white shadow-lg"
//                       : "bg-white text-gray-900 hover:bg-gray-100 shadow-md"
//                   }`}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <div className="text-3xl mb-2">{dept.icon}</div>
//                   <span className="text-sm font-medium">{dept.name}</span>
//                 </motion.button>
//               ))}
//             </div>
//           </div>

//           {/* Dynamic Tab Content */}
//           <AnimatePresence mode="wait">
//             {medicalDepartments
//               .filter((dept) => dept.name === activeTab)
//               .map((dept) => (
//                 <motion.div
//                   key={dept.name}
//                   className="flex flex-col md:flex-row items-stretch gap-8"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <div className="w-full md:w-1/2">
//                     <img
//                       src={dept.image}
//                       alt={`${dept.name} service`}
//                       className="w-full h-full object-cover rounded-xl shadow-lg"
//                     />
//                   </div>
//                   <div className="w-full md:w-1/2">
//                     <h2 className="text-3xl font-bold text-gray-900 mb-6">
//                       {dept.title}
//                     </h2>
//                     <p className="text-gray-600 mb-6">{dept.description}</p>
//                     <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full flex items-center font-medium">
//                       {dept.cta} <ArrowRight size={18} className="ml-2" />
//                     </button>
//                   </div>
//                 </motion.div>
//               ))}
//           </AnimatePresence>
//         </div>
//       </section>

//       {/* Back to Top Button */}
//       <div className="fixed bottom-4 right-4">
//         <button
//           className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg"
//           title="Back to Top"
//           aria-label="Back to Top"
//         >
//           <ChevronUp size={24} />
//         </button>
//       </div>
//     </div>
//   );
// };

// // Icon Components
// function HepatologyIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="w-6 h-6"
//     >
//       <path d="M12 2a8 8 0 0 0-8 8v12"></path>
//       <path d="M20 10a8 8 0 0 0-8-8"></path>
//       <path d="M12 11.5V20"></path>
//       <path d="M8 16h8"></path>
//     </svg>
//   );
// }

// function EndocrinologyIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="w-6 h-6"
//     >
//       <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
//       <path d="M6.5 2h11"></path>
//       <path d="M6.5 22h11"></path>
//       <path d="M2 12h3"></path>
//       <path d="M19 12h3"></path>
//     </svg>
//   );
// }

// function AngioedemaIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="w-6 h-6"
//     >
//       <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
//       <circle cx="9" cy="9" r="4"></circle>
//       <path d="M14 5l4 4"></path>
//       <path d="M18 9v12"></path>
//       <path d="M22 19c0-3.87-3.13-7-7-7"></path>
//     </svg>
//   );
// }

// export default Index;




// import React, { useState, useEffect, useRef } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Heart,
//   Pill,
//   Microscope,
//   Stethoscope,
// } from "lucide-react";

// export default function MedicalHomePage() {
//   // State for slider
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoplay, setIsAutoplay] = useState(true);
//   const autoplayRef = useRef(null);

//   // State for active category
//   const [activeCategory, setActiveCategory] = useState(0);

//   // Slider images
//   const sliderImages = [
//     {
//       url: "/api/placeholder/1200/500",
//       title: "رعاية صحية متكاملة",
//       desc: "نقدم خدمات طبية بأعلى معايير الجودة",
//     },
//     {
//       url: "/api/placeholder/1200/500",
//       title: "الوصفات الطبية",
//       desc: "إدارة وتجديد وصفاتك الطبية بسهولة",
//     },
//     {
//       url: "/api/placeholder/1200/500",
//       title: "استشارات طبية",
//       desc: "تواصل مع أفضل الأطباء المتخصصين",
//     },
//   ];

//   // Categories data
//   const categories = [
//     {
//       icon: <Pill className="w-12 h-12 text-emerald-600 mb-4 mx-auto" />,
//       title: "الأدوية",
//       content:
//         "استعرض مجموعة متنوعة من الأدوية المتاحة في صيدليتنا. يمكنك البحث حسب الاسم أو الفئة أو الأعراض.",
//     },
//     {
//       icon: <Heart className="w-12 h-12 text-emerald-600 mb-4 mx-auto" />,
//       title: "الرعاية الصحية",
//       content:
//         "اكتشف خدمات الرعاية الصحية المتكاملة التي نقدمها لك ولعائلتك، من الفحوصات الدورية إلى متابعة الحالات المزمنة.",
//     },
//     {
//       icon: <Microscope className="w-12 h-12 text-emerald-600 mb-4 mx-auto" />,
//       title: "المستحضرات الطبية",
//       content:
//         "مجموعة متكاملة من المستحضرات الطبية والتجميلية عالية الجودة لتلبية احتياجاتك اليومية.",
//     },
//     {
//       icon: <Stethoscope className="w-12 h-12 text-emerald-600 mb-4 mx-auto" />,
//       title: "الأجهزة الطبية",
//       content:
//         "توفير أحدث الأجهزة الطبية للمنزل والعيادات والمستشفيات مع خدمة الصيانة والدعم الفني.",
//     },
//   ];

//   // Autoplay slide function
//   useEffect(() => {
//     if (isAutoplay) {
//       autoplayRef.current = setInterval(() => {
//         nextSlide();
//       }, 5000);
//     }
//     return () => {
//       if (autoplayRef.current) {
//         clearInterval(autoplayRef.current);
//       }
//     };
//   }, [currentSlide, isAutoplay]);

//   // Slide control functions
//   const nextSlide = () => {
//     setCurrentSlide((prev) =>
//       prev === sliderImages.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) =>
//       prev === 0 ? sliderImages.length - 1 : prev - 1
//     );
//   };

//   // Animation when components mount
//   const [isVisible, setIsVisible] = useState({
//     hero: false,
//     about: false,
//     categories: false,
//     tips: false,
//   });

//   useEffect(() => {
//     setIsVisible({
//       hero: true,
//       about: true,
//       categories: true,
//       tips: true,
//     });
//   }, []);

//   return (
//     <div className="w-full min-h-screen bg-emerald-50 overflow-x-hidden font-sans">
//       {/* Hero Section with Slider */}
//       <section
//         className={`relative h-screen overflow-hidden transition-all duration-1000 ease-in-out ${
//           isVisible.hero
//             ? "opacity-100 translate-y-0"
//             : "opacity-0 translate-y-10"
//         }`}
//       >
//         <div className="absolute inset-0 flex">
//           {sliderImages.map((slide, index) => (
//             <div
//               key={index}
//               className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
//                 index === currentSlide ? "opacity-100" : "opacity-0"
//               }`}
//             >
//               <img
//                 src={slide.url}
//                 alt={`Slide ${index + 1}`}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/70 to-emerald-600/40 flex items-center">
//                 <div className="container mx-auto px-6 md:px-12 text-right">
//                   <div className="max-w-xl ml-auto">
//                     <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 opacity-0 animate-[fadeInRight_1s_forwards_0.3s]">
//                       {slide.title}
//                     </h1>
//                     <p className="text-xl text-white mb-8 opacity-0 animate-[fadeInRight_1s_forwards_0.6s]">
//                       {slide.desc}
//                     </p>
//                     <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 opacity-0 animate-[fadeInUp_1s_forwards_0.9s]">
//                       اكتشف المزيد
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Slider Controls */}
//         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10">
//           <button
//             onClick={prevSlide}
//             className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-3 transition-all duration-300"
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>
//           <div className="flex items-center space-x-2">
//             {sliderImages.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentSlide(index)}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   index === currentSlide ? "bg-white scale-125" : "bg-white/50"
//                 }`}
//               />
//             ))}
//           </div>
//           <button
//             onClick={nextSlide}
//             className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-3 transition-all duration-300"
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>
//         </div>
//       </section>

//       {/* About Section with Video */}
//       <section
//         className={`py-20 relative overflow-hidden transition-all duration-1000 ease-in-out ${
//           isVisible.about
//             ? "opacity-100 translate-y-0"
//             : "opacity-0 translate-y-10"
//         }`}
//       >
//         <div className="container mx-auto px-6 md:px-12">
//           <div className="flex flex-col md:flex-row items-center gap-12">
//             <div className="w-full md:w-1/2 order-2 md:order-1">
//               <div className="bg-white p-8 rounded-3xl shadow-xl transform rotate-2 hover:rotate-0 transition-all duration-500">
//                 <h2 className="text-3xl font-bold text-emerald-800 mb-6 text-right">
//                   من نحن
//                 </h2>
//                 <p className="text-lg text-gray-700 mb-6 text-right leading-relaxed">
//                   نحن موقع طبي متكامل يهدف إلى تقديم خدمات صحية شاملة للمرضى
//                   والمهتمين بالصحة. نسعى جاهدين لتوفير معلومات موثوقة ودقيقة حول
//                   مختلف الحالات الطبية والأدوية والعلاجات المتاحة.
//                 </p>
//                 <p className="text-lg text-gray-700 text-right leading-relaxed">
//                   يضم فريقنا نخبة من الأطباء والصيادلة المتخصصين الذين يعملون
//                   معًا لتقديم أفضل المشورة والدعم لك ولعائلتك في رحلتكم نحو صحة
//                   أفضل.
//                 </p>
//               </div>
//             </div>
//             <div className="w-full md:w-1/2 order-1 md:order-2">
//               <div className="relative">
//                 {/* Custom shaped video container */}
//                 <div className="absolute -inset-4 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full transform -rotate-6 animate-pulse"></div>
//                 <div className="relative aspect-video rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-500 clip-path-pentagon">
//                   <iframe
//                     className="w-full h-full"
//                     src="https://www.youtube.com/embed/TXpgh5Y66s8"
//                     title="YouTube video player"
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                     referrerPolicy="strict-origin-when-cross-origin"
//                     allowFullScreen
//                   ></iframe>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Background decoration */}
//         <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-100 rounded-full opacity-50"></div>
//         <div className="absolute top-12 right-12 w-32 h-32 bg-emerald-200 rounded-full opacity-30"></div>
//       </section>

//       {/* Categories Section */}
//       <section
//         className={`py-20 bg-gradient-to-b from-white to-emerald-50 relative transition-all duration-1000 ease-in-out ${
//           isVisible.categories
//             ? "opacity-100 translate-y-0"
//             : "opacity-0 translate-y-10"
//         }`}
//       >
//         <div className="container mx-auto px-6 md:px-12">
//           <h2 className="text-3xl font-bold text-center text-emerald-800 mb-16">
//             خدماتنا الصيدلانية
//           </h2>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
//             {categories.map((category, index) => (
//               <div
//                 key={index}
//                 onClick={() => setActiveCategory(index)}
//                 className={`cursor-pointer bg-white rounded-2xl p-6 text-center shadow-md transform transition-all duration-500 hover:-translate-y-2 ${
//                   activeCategory === index
//                     ? "ring-2 ring-emerald-500 shadow-xl"
//                     : ""
//                 }`}
//               >
//                 <div className="animate-[fadeIn_1s_forwards]">
//                   {category.icon}
//                   <h3 className="text-xl font-semibold text-emerald-700">
//                     {category.title}
//                   </h3>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="bg-white rounded-3xl p-8 shadow-lg overflow-hidden relative">
//             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-300 to-emerald-500"></div>
//             <div className="min-h-64 animate-[fadeIn_0.5s_forwards]">
//               <h3 className="text-2xl font-bold text-emerald-700 mb-4 text-right">
//                 {categories[activeCategory].title}
//               </h3>
//               <p className="text-gray-700 text-lg text-right">
//                 {categories[activeCategory].content}
//               </p>

//               <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {[1, 2, 3].map((item) => (
//                   <div key={item} className="relative overflow-hidden group">
//                     <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-2xl opacity-70 group-hover:opacity-100 blur transition-all duration-500"></div>
//                     <div className="relative bg-white rounded-xl overflow-hidden aspect-video">
//                       <img
//                         src={`/api/placeholder/400/${300 + item * 20}`}
//                         alt={`${categories[activeCategory].title} image ${item}`}
//                         className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700"
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="text-center mt-8">
//                 <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
//                   عرض المزيد
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Decorative elements */}
//         <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full opacity-50 -translate-y-1/2 translate-x-1/3"></div>
//         <div className="absolute bottom-12 left-12 w-24 h-24 bg-emerald-200 rounded-full opacity-40"></div>
//       </section>

//       {/* Health Tips Section */}
//       <section
//         className={`py-20 bg-white relative transition-all duration-1000 ease-in-out ${
//           isVisible.tips
//             ? "opacity-100 translate-y-0"
//             : "opacity-0 translate-y-10"
//         }`}
//       >
//         <div className="container mx-auto px-6 md:px-12">
//           <h2 className="text-3xl font-bold text-center text-emerald-800 mb-16">
//             نصائح صحية موسمية
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "نصائح للوقاية من نزلات البرد",
//                 img: "/api/placeholder/400/300",
//               },
//               {
//                 title: "فوائد ممارسة الرياضة يومياً",
//                 img: "/api/placeholder/400/300",
//               },
//               {
//                 title: "نظام غذائي صحي لصحة القلب",
//                 img: "/api/placeholder/400/300",
//               },
//               {
//                 title: "الحفاظ على صحة الجهاز المناعي",
//                 img: "/api/placeholder/400/300",
//               },
//               {
//                 title: "أهمية شرب كمية كافية من الماء",
//                 img: "/api/placeholder/400/300",
//               },
//               {
//                 title: "النوم الصحي وتأثيره على الصحة العامة",
//                 img: "/api/placeholder/400/300",
//               },
//             ].map((tip, index) => (
//               <div
//                 key={index}
//                 className="bg-emerald-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
//               >
//                 <div className="relative hexagon-clip overflow-hidden aspect-video">
//                   <img
//                     src={tip.img}
//                     alt={tip.title}
//                     className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-emerald-700 mb-3 text-right">
//                     {tip.title}
//                   </h3>
//                   <p className="text-gray-600 text-right">
//                     نصائح وإرشادات مهمة للحفاظ على صحتك ووقايتك من الأمراض
//                     الشائعة.
//                   </p>
//                   <div className="mt-4 text-right">
//                     <a
//                       href="#"
//                       className="text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1 text-sm font-medium"
//                     >
//                       اقرأ المزيد
//                       <ChevronLeft className="w-4 h-4" />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <button className="bg-transparent border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white font-medium py-3 px-8 rounded-lg transition-all duration-300">
//               جميع النصائح الصحية
//             </button>
//           </div>
//         </div>

//         {/* Decorative elements */}
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-50 rounded-full opacity-60 translate-y-1/2 translate-x-1/3"></div>
//       </section>

//       {/* Custom CSS for shapes */}
//       <style jsx>{`
//         @keyframes fadeInRight {
//           from {
//             opacity: 0;
//             transform: translateX(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }

//         .clip-path-pentagon {
//           clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 100%, 0% 100%);
//         }

//         .hexagon-clip {
//           clip-path: polygon(
//             5% 0%,
//             95% 0%,
//             100% 50%,
//             95% 100%,
//             5% 100%,
//             0% 50%
//           );
//         }
//       `}</style>
//     </div>
//   );
// }





// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Heart,
//   Pill,
//   Microscope,
//   Stethoscope,
//   Play,
//   ArrowRight,
//   Check,
// } from "lucide-react";

// export default function MedicalHomePage() {
//   const [activeCategory, setActiveCategory] = useState(0);
//   const [isVisible, setIsVisible] = useState({
//     hero: false,
//     about: false,
//     categories: false,
//     tips: false,
//   });
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef(null);
//   const heroVideoRef = useRef(null);
//   const aboutRef = useRef(null);
//   const categoriesRef = useRef(null);
//   const tipsRef = useRef(null);

//   const toggleVideoPlay = (videoReference) => {
//     const videoElement = videoReference.current;
//     if (videoElement) {
//       if (isPlaying) {
//         videoElement.pause();
//       } else {
//         videoElement.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   const categories = [
//     {
//       icon: <Pill className="w-8 h-8 text-teal-600" />,
//       title: "Medications",
//       content:
//         "Explore our wide range of prescription and over-the-counter medications tailored to your needs.",
//       images: [
//         "/api/placeholder/400/300",
//         "/api/placeholder/400/300",
//         "/api/placeholder/400/300",
//       ],
//     },
//     {
//       icon: <Heart className="w-8 h-8 text-teal-600" />,
//       title: "Healthcare Services",
//       content:
//         "Comprehensive services including check-ups, consultations, and personalized care plans.",
//       images: [
//         "/api/placeholder/400/300",
//         "/api/placeholder/400/300",
//         "/api/placeholder/400/300",
//       ],
//     },
//     {
//       icon: <Microscope className="w-8 h-8 text-teal-600" />,
//       title: "Medical Products",
//       content:
//         "High-quality medical and wellness products for daily health and beauty needs.",
//       images: [
//         "/api/placeholder/400/300",
//         "/api/placeholder/400/300",
//         "/api/placeholder/400/300",
//       ],
//     },
//     {
//       icon: <Stethoscope className="w-8 h-8 text-teal-600" />,
//       title: "Medical Equipment",
//       content:
//         "Advanced medical equipment for home and clinical use with reliable support.",
//       images: [
//         "/api/placeholder/400/300",
//         "/api/placeholder/400/300",
//         "/api/placeholder/400/300",
//       ],
//     },
//   ];

//   const healthTips = [
//     { title: "Cold Prevention Tips", img: "/api/placeholder/400/300" },
//     { title: "Benefits of Daily Exercise", img: "/api/placeholder/400/300" },
//     { title: "Heart-Healthy Diet", img: "/api/placeholder/400/300" },
//     { title: "Boosting Your Immune System", img: "/api/placeholder/400/300" },
//     { title: "Importance of Hydration", img: "/api/placeholder/400/300" },
//     { title: "Quality Sleep & Health", img: "/api/placeholder/400/300" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const isInViewport = (element) => {
//         if (!element.current) return false;
//         const rect = element.current.getBoundingClientRect();
//         return (
//           rect.top <=
//           (window.innerHeight || document.documentElement.clientHeight) * 0.9
//         );
//       };

//       setIsVisible({
//         hero: true,
//         about: isInViewport(aboutRef),
//         categories: isInViewport(categoriesRef),
//         tips: isInViewport(tipsRef),
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     if (heroVideoRef.current) {
//       heroVideoRef.current.play().catch((e) => {
//         console.log("Auto-play prevented:", e);
//       });
//     }

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Animation variants
//   const sectionVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: (i) => ({
//       opacity: 1,
//       scale: 1,
//       transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
//     }),
//   };

//   return (
//     <div className="w-full min-h-screen bg-gray-100 font-sans text-gray-800">
//       {/* Hero Section */}
//       <motion.section
//         initial="hidden"
//         animate={isVisible.hero ? "visible" : "hidden"}
//         variants={sectionVariants}
//         className="relative min-h-[80vh] md:min-h-screen"
//       >
//         <div className="absolute inset-0">
//           <video
//             ref={heroVideoRef}
//             loop
//             muted
//             autoPlay
//             playsInline
//             className="w-full h-full object-cover"
//             poster="/api/placeholder/1920/1080"
//           >
//             <source src="/videos/hero-video.mp4" type="video/mp4" />
//           </video>
//           <div className="absolute inset-0 bg-gradient-to-r from-teal-900/60  bg-teal-600/50"></div>
//         </div>
//         <div className="absolute bottom-0 left-0 w-full">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 1440 320"
//             className="w-full h-auto text-gray-100"
//           >
//             <path
//               fill="currentColor"
//               d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,128C672,107,768,117,864,149.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//             ></path>
//           </svg>
//         </div>
//       </motion.section>

//       {/* About Section */}
//       <motion.section
//         ref={aboutRef}
//         initial="hidden"
//         animate={isVisible.about ? "visible" : "hidden"}
//         variants={sectionVariants}
//         className="py-16 md:py-24 bg-white"
//       >
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row items-center gap-12">
//             <motion.div
//               className="w-full md:w-1/2"
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-6">
//                 About Us
//               </h2>
//               <p className="text-lg text-gray-600 mb-6 leading-relaxed">
//                 We are a leading medical platform committed to delivering
//                 exceptional healthcare services. Our mission is to empower
//                 patients and health enthusiasts with reliable information and
//                 top-quality care.
//               </p>
//               <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//                 With a team of expert doctors and pharmacists, we provide
//                 personalized support to help you achieve optimal health and
//                 wellness.
//               </p>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-teal-600 text-white font-medium py-3 px-6 rounded-lg flex items-center space-x-2 hover:bg-teal-700 transition-colors"
//               >
//                 <span>Learn More</span>
//                 <ArrowRight className="w-5 h-5" />
//               </motion.button>
//             </motion.div>
//             <motion.div
//               className="w-full md:w-1/2 relative"
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             >
//               <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
//                 <video
//                   ref={videoRef}
//                   loop
//                   muted
//                   poster="/api/placeholder/800/500"
//                   className="w-full h-full object-cover"
//                 >
//                   {/* Add your video source here */}
//                 </video>
//                 <button
//                   onClick={() => toggleVideoPlay(videoRef)}
//                   className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl"
//                 >
//                   <motion.div
//                     whileHover={{ scale: 1.2 }}
//                     className="bg-white/90 rounded-full p-4"
//                   >
//                     <Play
//                       className="w-8 h-8 text-teal-600"
//                       fill="currentColor"
//                     />
//                   </motion.div>
//                 </button>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Categories Section */}
//       <motion.section
//         ref={categoriesRef}
//         initial="hidden"
//         animate={isVisible.categories ? "visible" : "hidden"}
//         variants={sectionVariants}
//         className="py-16 md:py-24 bg-gray-50"
//       >
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.h2
//             className="text-3xl md:text-4xl font-bold text-teal-800 text-center mb-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6 }}
//           >
//             Our Services
//           </motion.h2>
//           <motion.p
//             className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Discover our comprehensive range of healthcare services designed to
//             meet your needs.
//           </motion.p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
//             {categories.map((category, index) => (
//               <motion.div
//                 key={index}
//                 custom={index}
//                 initial="hidden"
//                 animate="visible"
//                 variants={cardVariants}
//                 onClick={() => setActiveCategory(index)}
//                 className={`bg-white p-6 rounded-xl shadow-md cursor-pointer hover:shadow-lg transition-shadow ${
//                   activeCategory === index ? "border-2 border-teal-600" : ""
//                 }`}
//               >
//                 <div className="flex justify-center mb-4">{category.icon}</div>
//                 <h3 className="text-lg font-semibold text-teal-800 text-center">
//                   {category.title}
//                 </h3>
//               </motion.div>
//             ))}
//           </div>
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeCategory}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.4 }}
//               className="bg-white p-8 rounded-xl shadow-lg"
//             >
//               <div className="flex items-center mb-6">
//                 <div className="mr-4">{categories[activeCategory].icon}</div>
//                 <h3 className="text-2xl font-bold text-teal-800">
//                   {categories[activeCategory].title}
//                 </h3>
//               </div>
//               <p className="text-gray-600 mb-8">
//                 {categories[activeCategory].content}
//               </p>
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//                 {categories[activeCategory].images.map((img, idx) => (
//                   <motion.div
//                     key={idx}
//                     custom={idx}
//                     initial="hidden"
//                     animate="visible"
//                     variants={cardVariants}
//                     className="relative rounded-lg overflow-hidden shadow-md"
//                   >
//                     <img
//                       src={img}
//                       alt={`${categories[activeCategory].title} ${idx + 1}`}
//                       className="w-full h-40 object-cover"
//                     />
//                     <div className="p-4 bg-white">
//                       <p className="text-sm text-gray-600">Service {idx + 1}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//               <div className="text-center mt-8">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-teal-600 text-white font-medium py-3 px-6 rounded-lg flex items-center space-x-2 mx-auto hover:bg-teal-700 transition-colors"
//                 >
//                   <span>Explore {categories[activeCategory].title}</span>
//                   <ArrowRight className="w-5 h-5" />
//                 </motion.button>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </motion.section>

//       {/* Health Tips Section */}
//       <motion.section
//         ref={tipsRef}
//         initial="hidden"
//         animate={isVisible.tips ? "visible" : "hidden"}
//         variants={sectionVariants}
//         className="py-16 md:py-24 bg-white"
//       >
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.h2
//             className="text-3xl md:text-4xl font-bold text-teal-800 text-center mb-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6 }}
//           >
//             Health Tips
//           </motion.h2>
//           <motion.p
//             className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Stay healthy with our expert tips for every season.
//           </motion.p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {healthTips.map((tip, index) => (
//               <motion.div
//                 key={index}
//                 custom={index}
//                 initial="hidden"
//                 animate="visible"
//                 variants={cardVariants}
//                 className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
//               >
//                 <img
//                   src={tip.img}
//                   alt={tip.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-lg font-semibold text-teal-800 mb-2">
//                     {tip.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm mb-4">
//                     Practical advice to enhance your well-being.
//                   </p>
//                   <div className="flex justify-between items-center">
//                     <motion.a
//                       href="#"
//                       whileHover={{ x: 5 }}
//                       className="text-teal-600 hover:text-teal-700 font-medium flex items-center gap-1"
//                     >
//                       Read More
//                       <ArrowRight className="w-4 h-4" />
//                     </motion.a>
//                     <span className="text-xs text-gray-500">5 min read</span>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//           <div className="text-center mt-12">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-teal-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-teal-700 transition-colors"
//             >
//               View All Tips
//             </motion.button>
//           </div>
//         </div>
//       </motion.section>

//       {/* Global Styles */}
//       <style jsx global>{`
//         html,
//         body {
//           overflow-x: hidden;
//           margin: 0;
//           padding: 0;
//         }
//         .container {
//           max-width: 1200px;
//         }
//         @media (max-width: 640px) {
//           .container {
//             padding-left: 1rem;
//             padding-right: 1rem;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }




// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Heart,
//   Pill,
//   Microscope,
//   Stethoscope,
//   Play,
//   ArrowRight,
//   Check,
// } from "lucide-react";

// export default function MedicalHomePage() {
//   const [activeCategory, setActiveCategory] = useState(0);
//   const [isVisible, setIsVisible] = useState({
//     hero: false,
//     about: false,
//     categories: false,
//     tips: false,
//   });
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef(null);
//   const heroVideoRef = useRef(null);
//   const aboutRef = useRef(null);
//   const categoriesRef = useRef(null);
//   const tipsRef = useRef(null);

//   const toggleVideoPlay = (videoReference) => {
//     const videoElement = videoReference.current;
//     if (videoElement) {
//       if (isPlaying) {
//         videoElement.pause();
//       } else {
//         videoElement.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   const categories = [
//     {
//       icon: <Pill className="w-8 h-8 text-teal-600" />,
//       title: "Medications",
//       content:
//         "Explore our wide range of prescription and over-the-counter medications tailored to your needs.",
//       images: [
//         "/api/placeholder/400/300",
//         "/api/placeholder/400/300",
//         "/api/placeholder/400/300",
//       ],
//     },
//     {
//       icon: <Heart className="w-8 h-8 text-teal-600" />,
//       title: "Healthcare Services",
//       content:
//         "Comprehensive services including check-ups, consultations, and personalized care plans.",
//       images: [
//         "/api/placeholder/400/300",
//         "/api/placeholder/400/300",
//         "/api/placeholder/400/300",
//       ],
//     },
//     {
//       icon: <Microscope className="w-8 h-8 text-teal-600" />,
//       title: "Medical Products",
//       content:
//         "High-quality medical and wellness products for daily health and beauty needs.",
//       images: [
//         "/api/placeholder/400/300",
//         "/api/placeholder/400/300",
//         "/api/placeholder/400/300",
//       ],
//     },
//     {
//       icon: <Stethoscope className="w-8 h-8 text-teal-600" />,
//       title: "Medical Equipment",
//       content:
//         "Advanced medical equipment for home and clinical use with reliable support.",
//       images: [
//         "/api/placeholder/400/300",
//         "/api/placeholder/400/300",
//         "/api/placeholder/400/300",
//       ],
//     },
//   ];

//   const healthTips = [
//     { title: "Cold Prevention Tips", img: "/api/placeholder/400/300" },
//     { title: "Benefits of Daily Exercise", img: "/api/placeholder/400/300" },
//     { title: "Heart-Healthy Diet", img: "/api/placeholder/400/300" },
//     { title: "Boosting Your Immune System", img: "/api/placeholder/400/300" },
//     { title: "Importance of Hydration", img: "/api/placeholder/400/300" },
//     { title: "Quality Sleep & Health", img: "/api/placeholder/400/300" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const isInViewport = (element) => {
//         if (!element.current) return false;
//         const rect = element.current.getBoundingClientRect();
//         return (
//           rect.top <=
//           (window.innerHeight || document.documentElement.clientHeight) * 0.9
//         );
//       };

//       setIsVisible({
//         hero: true,
//         about: isInViewport(aboutRef),
//         categories: isInViewport(categoriesRef),
//         tips: isInViewport(tipsRef),
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     if (heroVideoRef.current) {
//       heroVideoRef.current.play().catch((e) => {
//         console.log("Auto-play prevented:", e);
//       });
//     }

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Animation variants
//   const sectionVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: (i) => ({
//       opacity: 1,
//       scale: 1,
//       transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
//     }),
//   };

//   return (
//     <div className="w-full min-h-screen bg-gray-100 font-sans text-gray-800">
//       {/* Hero Section */}
//       <motion.section
//         initial="hidden"
//         animate={isVisible.hero ? "visible" : "hidden"}
//         variants={sectionVariants}
//         className="relative min-h-[90vh] w-full"
//       >
//         <div className="absolute inset-0 z-0">
//           <video
//             ref={heroVideoRef}
//             loop
//             muted
//             autoPlay
//             playsInline
//             className="w-full h-full object-cover"
//             poster="/api/placeholder/1920/1080"
//           >
//             <source src="/videos/hero-video.mp4" type="video/mp4" />
//           </video>

//         </div>
//       </motion.section>

//       {/* About Section */}
//       <motion.section
//         ref={aboutRef}
//         initial="hidden"
//         animate={isVisible.about ? "visible" : "hidden"}
//         variants={sectionVariants}
//         className="py-16 md:py-24 bg-white"
//       >
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row items-center gap-12">
//             <motion.div
//               className="w-full md:w-1/2"
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-6">
//                 About Us
//               </h2>
//               <p className="text-lg text-gray-600 mb-6 leading-relaxed">
//                 We are a leading medical platform committed to delivering
//                 exceptional healthcare services. Our mission is to empower
//                 patients and health enthusiasts with reliable information and
//                 top-quality care.
//               </p>
//               <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//                 With a team of expert doctors and pharmacists, we provide
//                 personalized support to help you achieve optimal health and
//                 wellness.
//               </p>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-teal-600 text-white font-medium py-3 px-6 rounded-lg flex items-center space-x-2 hover:bg-teal-700 transition-colors"
//               >
//                 <span>Learn More</span>
//                 <ArrowRight className="w-5 h-5" />
//               </motion.button>
//             </motion.div>
//             <motion.div
//               className="w-full md:w-1/2 relative"
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             >
//               <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
//                 <video
//                   ref={videoRef}
//                   loop
//                   muted
//                   poster="/api/placeholder/800/500"
//                   className="w-full h-full object-cover"
//                 >
//                   {/* Add your video source here */}
//                 </video>
//                 <button
//                   onClick={() => toggleVideoPlay(videoRef)}
//                   className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl"
//                 >
//                   <motion.div
//                     whileHover={{ scale: 1.2 }}
//                     className="bg-white/90 rounded-full p-4"
//                   >
//                     <Play
//                       className="w-8 h-8 text-teal-600"
//                       fill="currentColor"
//                     />
//                   </motion.div>
//                 </button>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Categories Section */}
//       <motion.section
//         ref={categoriesRef}
//         initial="hidden"
//         animate={isVisible.categories ? "visible" : "hidden"}
//         variants={sectionVariants}
//         className="py-16 md:py-24 bg-gray-50"
//       >
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.h2
//             className="text-3xl md:text-4xl font-bold text-teal-800 text-center mb-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6 }}
//           >
//             Our Services
//           </motion.h2>
//           <motion.p
//             className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Discover our comprehensive range of healthcare services designed to
//             meet your needs.
//           </motion.p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
//             {categories.map((category, index) => (
//               <motion.div
//                 key={index}
//                 custom={index}
//                 initial="hidden"
//                 animate="visible"
//                 variants={cardVariants}
//                 onClick={() => setActiveCategory(index)}
//                 className={`bg-white p-6 rounded-xl shadow-md cursor-pointer hover:shadow-lg transition-shadow ${
//                   activeCategory === index ? "border-2 border-teal-600" : ""
//                 }`}
//               >
//                 <div className="flex justify-center mb-4">{category.icon}</div>
//                 <h3 className="text-lg font-semibold text-teal-800 text-center">
//                   {category.title}
//                 </h3>
//               </motion.div>
//             ))}
//           </div>
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeCategory}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.4 }}
//               className="bg-white p-8 rounded-xl shadow-lg"
//             >
//               <div className="flex items-center mb-6">
//                 <div className="mr-4">{categories[activeCategory].icon}</div>
//                 <h3 className="text-2xl font-bold text-teal-800">
//                   {categories[activeCategory].title}
//                 </h3>
//               </div>
//               <p className="text-gray-600 mb-8">
//                 {categories[activeCategory].content}
//               </p>
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//                 {categories[activeCategory].images.map((img, idx) => (
//                   <motion.div
//                     key={idx}
//                     custom={idx}
//                     initial="hidden"
//                     animate="visible"
//                     variants={cardVariants}
//                     className="relative rounded-lg overflow-hidden shadow-md"
//                   >
//                     <img
//                       src={img}
//                       alt={`${categories[activeCategory].title} ${idx + 1}`}
//                       className="w-full h-40 object-cover"
//                     />
//                     <div className="p-4 bg-white">
//                       <p className="text-sm text-gray-600">Service {idx + 1}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//               <div className="text-center mt-8">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-teal-600 text-white font-medium py-3 px-6 rounded-lg flex items-center space-x-2 mx-auto hover:bg-teal-700 transition-colors"
//                 >
//                   <span>Explore {categories[activeCategory].title}</span>
//                   <ArrowRight className="w-5 h-5" />
//                 </motion.button>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </motion.section>

//       {/* Health Tips Section */}
//       <motion.section
//         ref={tipsRef}
//         initial="hidden"
//         animate={isVisible.tips ? "visible" : "hidden"}
//         variants={sectionVariants}
//         className="py-16 md:py-24 bg-white"
//       >
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.h2
//             className="text-3xl md:text-4xl font-bold text-teal-800 text-center mb-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6 }}
//           >
//             Health Tips
//           </motion.h2>
//           <motion.p
//             className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Stay healthy with our expert tips for every season.
//           </motion.p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {healthTips.map((tip, index) => (
//               <motion.div
//                 key={index}
//                 custom={index}
//                 initial="hidden"
//                 animate="visible"
//                 variants={cardVariants}
//                 className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
//               >
//                 <img
//                   src={tip.img}
//                   alt={tip.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-lg font-semibold text-teal-800 mb-2">
//                     {tip.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm mb-4">
//                     Practical advice to enhance your well-being.
//                   </p>
//                   <div className="flex justify-between items-center">
//                     <motion.a
//                       href="#"
//                       whileHover={{ x: 5 }}
//                       className="text-teal-600 hover:text-teal-700 font-medium flex items-center gap-1"
//                     >
//                       Read More
//                       <ArrowRight className="w-4 h-4" />
//                     </motion.a>
//                     <span className="text-xs text-gray-500">5 min read</span>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//           <div className="text-center mt-12">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-teal-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-teal-700 transition-colors"
//             >
//               View All Tips
//             </motion.button>
//           </div>
//         </div>
//       </motion.section>

//       {/* Global Styles */}
//       <style jsx global>{`
//         html,
//         body {
//           overflow-x: hidden;
//           margin: 0;
//           padding: 0;
//         }
//         .container {
//           max-width: 1200px;
//         }
//         @media (max-width: 640px) {
//           .container {
//             padding-left: 1rem;
//             padding-right: 1rem;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }



// import { useState, useEffect, useRef } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   CheckCircle,
//   Pill,
//   Clipboard,
//   QrCode,
//   Activity,
//   Smartphone,
// } from "lucide-react";

// export default function ImprovedMedicalHomepage() {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [visibleSections, setVisibleSections] = useState({
//     hero: false,
//     services: false,
//     steps: false,
//     pharmacy: false,
//     resources: false,
//   });

//   const sectionsRef = {
//     hero: useRef(null),
//     services: useRef(null),
//     steps: useRef(null),
//     pharmacy: useRef(null),
//     resources: useRef(null),
//   };

//   const heroSlides = [
//     {
//       title: "Modern Healthcare",
//       subtitle: "Advanced medical solutions for optimal wellbeing",
//       image:
//         "https://media.gettyimages.com/id/1365176115/photo/future-medical-innovations.jpg?s=612x612&w=gi&k=20&c=z7XWA4f01ri7dtXnh3JeRmUNzU12Jsl8uSbuMoOU86M=",
//       btnText: "Learn More",
//     },
//     {
//       title: "Personalized Care",
//       subtitle: "Health solutions tailored to your unique needs",
//       image: "https://ideyalabs.com/images/resource/health-about.webp",
//       btnText: "Discover Services",
//     },
//     {
//       title: "Medical Innovation",
//       subtitle: "Leading-edge technology for better health outcomes",
//       image:
//         "https://www.philips.com/c-dam/corporate/newscenter/global/standard/resources/healthcare/2022/10-healthcare-technology-trends/healthcare-technology-trends-for-2022.jpg",
//       btnText: "Explore",
//     },
//   ];

//   const services = [
//     {
//       title: "Preventive Care",
//       icon: <Activity className="w-12 h-12 text-green-500" />,
//       description:
//         "Comprehensive health assessments and preventive programs designed to keep you at your best health",
//     },
//     {
//       title: "Digital Records",
//       icon: <Clipboard className="w-12 h-12 text-green-500" />,
//       description:
//         "Secure electronic health records that ensure your medical history is always accessible and up-to-date",
//     },
//     {
//       title: "Smart Prescriptions",
//       icon: <QrCode className="w-12 h-12 text-green-500" />,
//       description:
//         "QR-enabled prescriptions for easy medication tracking and management with your pharmacist",
//     },
//   ];

//   const processSteps = [
//     {
//       title: "Initial Assessment",
//       description:
//         "Your doctor collects and digitally records your medical history and current symptoms",
//       icon: <Clipboard className="w-10 h-10 text-white" />,
//       position: "right",
//     },
//     {
//       title: "Digital Diagnosis",
//       description:
//         "Medical information is analyzed using our advanced healthcare platform",
//       icon: <Activity className="w-10 h-10 text-white" />,
//       position: "left",
//     },
//     {
//       title: "QR Treatment Plan",
//       description:
//         "A personalized treatment plan is generated with QR codes for easy medication tracking",
//       icon: <QrCode className="w-10 h-10 text-white" />,
//       position: "right",
//     },
//     {
//       title: "Mobile Monitoring",
//       description:
//         "Track your progress and medication schedule through our mobile application",
//       icon: <Smartphone className="w-10 h-10 text-white" />,
//       position: "left",
//     },
//   ];

//   const medicines = [
//     {
//       name: "Advanced Pain Relief",
//       category: "Pain Management",
//       description:
//         "Fast-acting formula for effective relief from moderate to severe pain",
//       image: "/api/placeholder/500/300",
//     },
//     {
//       name: "Immune Support Plus",
//       category: "Immunity",
//       description:
//         "Comprehensive blend of vitamins and minerals to strengthen your immune system",
//       image: "/api/placeholder/500/300",
//     },
//     {
//       name: "Sleep Well Formula",
//       category: "Sleep Aid",
//       description:
//         "Natural ingredients to help you achieve restful, rejuvenating sleep",
//       image: "/api/placeholder/500/300",
//     },
//   ];

//   const resources = [
//     {
//       title: "Health Library",
//       description:
//         "Access our extensive collection of medical articles and resources written by healthcare professionals",
//       icon: <Clipboard className="w-8 h-8 text-green-500" />,
//     },
//     {
//       title: "Medical Calculator",
//       description:
//         "Interactive tools to help you calculate health metrics and medication dosages",
//       icon: <Activity className="w-8 h-8 text-green-500" />,
//     },
//     {
//       title: "Wellness Tracker",
//       description:
//         "Monitor your health progress with our comprehensive wellness tracking tools",
//       icon: <CheckCircle className="w-8 h-8 text-green-500" />,
//     },
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveSlide((prev) => (prev + 1) % heroSlides.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [heroSlides.length]);

//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.1,
//     };

//     const observerCallback = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const sectionId = entry.target.id;
//           setVisibleSections((prev) => ({ ...prev, [sectionId]: true }));
//         }
//       });
//     };

//     const observer = new IntersectionObserver(
//       observerCallback,
//       observerOptions
//     );

//     Object.entries(sectionsRef).forEach(([key, ref]) => {
//       if (ref.current) {
//         observer.observe(ref.current);
//       }
//     });

//     return () => {
//       Object.values(sectionsRef).forEach((ref) => {
//         if (ref.current) {
//           observer.unobserve(ref.current);
//         }
//       });
//     };
//   }, []);

//   const nextSlide = () => {
//     setActiveSlide((prev) => (prev + 1) % heroSlides.length);
//   };

//   const prevSlide = () => {
//     setActiveSlide(
//       (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
//     );
//   };

//   // Text animation component
//   const AnimatedText = ({ text, delay = 0, className = "" }) => {
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//       const timer = setTimeout(() => {
//         setIsVisible(true);
//       }, delay);

//       return () => clearTimeout(timer);
//     }, [delay]);

//     return (
//       <div className={`overflow-hidden ${className}`}>
//         <div
//           className={`transform transition-transform duration-1000 ease-out ${
//             isVisible
//               ? "translate-y-0 opacity-100"
//               : "translate-y-full opacity-0"
//           }`}
//         >
//           {text}
//         </div>
//       </div>
//     );
//   };

//   // Letter animation for headings
//   const AnimatedLetters = ({ text, staggerDelay = 30, className = "" }) => {
//     return (
//       <h2 className={className}>
//         {text.split("").map((letter, index) => (
//           <span
//             key={index}
//             className="inline-block animate-bounce"
//             style={{
//               animationDelay: `${index * staggerDelay}ms`,
//               animationDuration: "1s",
//               animationIterationCount: 1,
//             }}
//           >
//             {letter === " " ? "\u00A0" : letter}
//           </span>
//         ))}
//       </h2>
//     );
//   };

//   return (
//     <div className="font-sans text-gray-800 min-h-screen bg-white overflow-x-hidden">
//       {/* Hero Section with Slider */}
//       <section
//         id="hero"
//         ref={sectionsRef.hero}
//         className="relative h-screen overflow-hidden"
//       >
//         {/* Slider */}
//         <div className="absolute inset-0">
//           {heroSlides.map((slide, index) => (
//             <div
//               key={index}
//               className={`absolute inset-0 transition-opacity duration-1000 ${
//                 activeSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
//               }`}
//             >
//               {/* <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-transparent z-10"></div> */}
//               <img
//                 src={slide.image}
//                 alt={slide.title}
//                 className="w-full h-full object-cover object-center"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Content */}
//         <div className="relative z-20 h-full flex items-center px-6">
//           <div className="container mx-auto max-w-6xl">
//             <div className="max-w-2xl">
//               {heroSlides.map((slide, index) => (
//                 <div
//                   key={index}
//                   className={`transition-opacity duration-1000 ${
//                     activeSlide === index ? "opacity-100" : "opacity-0 absolute"
//                   }`}
//                 >
//                   <AnimatedText
//                     text={
//                       <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
//                         {slide.title}
//                       </h1>
//                     }
//                     delay={200}
//                     className="mb-4"
//                   />
//                   <AnimatedText
//                     text={
//                       <p className="text-xl text-green-50 mb-8">
//                         {slide.subtitle}
//                       </p>
//                     }
//                     delay={400}
//                     className="mb-8"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Slider Controls */}
//         <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center space-x-2">
//           {heroSlides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 activeSlide === index ? "bg-green-500 w-8" : "bg-white/50"
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>

//         <button
//           onClick={prevSlide}
//           className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300"
//           aria-label="Previous slide"
//         >
//           <ChevronLeft className="w-6 h-6" />
//         </button>

//         <button
//           onClick={nextSlide}
//           className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300"
//           aria-label="Next slide"
//         >
//           <ChevronRight className="w-6 h-6" />
//         </button>
//       </section>

//       {/* Services Section - Partially Overlapping Hero */}
//       <section
//         id="services"
//         ref={sectionsRef.services}
//         className="relative -mt-24 px-6 pb-20 pt-4 z-20"
//       >
//         <div className="container mx-auto max-w-6xl">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className={`bg-white p-8 rounded-2xl shadow-xl transition-all duration-1000 delay-${
//                   index * 200
//                 } h-96 ${
//                   visibleSections.services
//                     ? "opacity-100 translate-y-0"
//                     : "opacity-0 translate-y-10"
//                 }`}
//               >
//                 <div className="mb-6 p-4 bg-green-100 inline-block rounded-xl">
//                   {service.icon}
//                 </div>
//                 <h3 className="text-2xl font-bold text-green-700 mb-3">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-600">{service.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Process Steps Section */}
//       <section
//         id="steps"
//         ref={sectionsRef.steps}
//         className="py-20 px-6 bg-white"
//       >
//         <div className="container mx-auto max-w-5xl">
//           <div
//             className={`text-center mb-16 transition-all duration-1000 ${
//               visibleSections.steps
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-10"
//             }`}
//           >
//             <AnimatedLetters
//               text="How Our System Works"
//               className="text-4xl font-bold text-green-800 mb-4"
//               staggerDelay={50}
//             />
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Our digital healthcare platform streamlines your medical journey
//             </p>
//           </div>

//           <div className="relative">
//             {/* Center Line */}
//             <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-green-200 transform -translate-x-1/2"></div>

//             {/* Steps */}
//             <div className="relative z-10">
//               {processSteps.map((step, index) => (
//                 <div
//                   key={index}
//                   className={`flex items-center mb-20 last:mb-0 ${
//                     step.position === "left" ? "flex-row-reverse" : ""
//                   }`}
//                 >
//                   {/* Content */}
//                   <div
//                     className={`w-5/12 ${
//                       step.position === "left" ? "text-right pr-12" : "pl-12"
//                     } transition-all duration-1000 ${
//                       visibleSections.steps
//                         ? "opacity-100 translate-x-0"
//                         : step.position === "left"
//                         ? "opacity-0 translate-x-24"
//                         : "opacity-0 -translate-x-24"
//                     }`}
//                     style={{ transitionDelay: `${index * 200}ms` }}
//                   >
//                     <h3 className="text-2xl font-bold text-green-700 mb-2">
//                       {step.title}
//                     </h3>
//                     <p className="text-gray-600">{step.description}</p>
//                   </div>

//                   {/* Icon */}
//                   <div className="w-2/12 flex justify-center">
//                     <div
//                       className={`w-16 h-16 rounded-full bg-green-500 flex items-center justify-center transition-all duration-1000 ${
//                         visibleSections.steps
//                           ? "opacity-100 scale-100"
//                           : "opacity-0 scale-50"
//                       }`}
//                       style={{ transitionDelay: `${index * 200 + 300}ms` }}
//                     >
//                       {step.icon}
//                     </div>
//                   </div>

//                   {/* Empty Space for Alignment */}
//                   <div className="w-5/12"></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Pharmacy Section */}
//       <section
//         id="pharmacy"
//         ref={sectionsRef.pharmacy}
//         className="py-20 px-6 bg-green-50"
//       >
//         <div className="container mx-auto max-w-6xl">
//           <div
//             className={`text-center mb-16 transition-all duration-1000 ${
//               visibleSections.pharmacy
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-10"
//             }`}
//           >
//             <AnimatedLetters
//               text="Our Pharmacy"
//               className="text-4xl font-bold text-green-800 mb-4"
//               staggerDelay={80}
//             />
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Quality medical products for your health and wellbeing
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {medicines.map((medicine, index) => (
//               <div
//                 key={index}
//                 className={`transition-all duration-1000 delay-${index * 200} ${
//                   visibleSections.pharmacy
//                     ? "opacity-100 translate-y-0"
//                     : "opacity-0 translate-y-10"
//                 }`}
//               >
//                 <div className="rounded-2xl overflow-hidden bg-white shadow-lg h-full transform transition-transform hover:scale-105 duration-500">
//                   <div className="relative">
//                     <img
//                       src={medicine.image}
//                       alt={medicine.name}
//                       className="w-full h-48 object-cover"
//                     />
//                     <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
//                       {medicine.category}
//                     </div>
//                     <div className="absolute -bottom-8 right-4">
//                       <div className="bg-green-600 text-white p-4 rounded-full shadow-lg">
//                         <Pill className="w-6 h-6" />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="p-6 pt-10">
//                     <h3 className="text-xl font-bold text-gray-800 mb-3">
//                       {medicine.name}
//                     </h3>
//                     <p className="text-gray-600">{medicine.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Resources Section (Custom Section) */}
//       <section
//         id="resources"
//         ref={sectionsRef.resources}
//         className="py-20 px-6 bg-white"
//       >
//         <div className="container mx-auto max-w-6xl">
//           <div
//             className={`text-center mb-16 transition-all duration-1000 ${
//               visibleSections.resources
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-10"
//             }`}
//           >
//             <AnimatedLetters
//               text="Health Resources"
//               className="text-4xl font-bold text-green-800 mb-4"
//               staggerDelay={70}
//             />
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Tools and information to help you take control of your health
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {resources.map((resource, index) => (
//               <div
//                 key={index}
//                 className={`bg-green-50 p-8 rounded-2xl border-t-4 border-green-500 transition-all duration-1000 delay-${
//                   index * 200
//                 } transform hover:shadow-xl hover:-translate-y-2 ${
//                   visibleSections.resources
//                     ? "opacity-100 translate-y-0"
//                     : "opacity-0 translate-y-10"
//                 }`}
//               >
//                 <div className="mb-6">{resource.icon}</div>
//                 <h3 className="text-xl font-bold text-green-700 mb-3">
//                   {resource.title}
//                 </h3>
//                 <p className="text-gray-600">{resource.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Newsletter Section */}
//       <section className="py-16 px-6 bg-gradient-to-r from-green-600 to-green-800 text-white">
//         <div className="container mx-auto max-w-4xl text-center">
//           <h2 className="text-3xl font-bold mb-6">
//             Stay Informed About Health Innovations
//           </h2>
//           <p className="text-lg mb-8 opacity-90">
//             Subscribe to our newsletter for the latest medical research and
//             health tips
//           </p>
//           <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
//             <input
//               type="email"
//               placeholder="Your email address"
//               className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none"
//             />
//             <button className="bg-white text-green-700 hover:bg-green-100 px-6 py-3 rounded-lg font-medium transition-colors duration-300">
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// } 


// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ChevronLeft,
//   ChevronRight,
//   CheckCircle,
//   Pill,
//   Clipboard,
//   QrCode,
//   Activity,
// } from "lucide-react";

// export default function ImprovedMedicalHomepage() {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [visibleSections, setVisibleSections] = useState({
//     hero: false,
//     services: false,
//     steps: false,
//     pharmacy: false,
//     resources: false,
//   });

//   const sectionsRef = {
//     hero: useRef(null),
//     services: useRef(null),
//     steps: useRef(null),
//     pharmacy: useRef(null),
//     resources: useRef(null),
//   };

//   const heroSlides = [
//     {
//       title: "Modern Healthcare",
//       subtitle: "Advanced medical solutions for optimal wellbeing",
//       image:
//         "https://media.gettyimages.com/id/1365176115/photo/future-medical-innovations.jpg?s=612x612&w=gi&k=20&c=z7XWA4f01ri7dtXnh3JeRmUNzU12Jsl8uSbuMoOU86M=",
//       btnText: "Learn More",
//     },
//     {
//       title: "Personalized Care",
//       subtitle: "Health solutions tailored to your unique needs",
//       image: "https://ideyalabs.com/images/resource/health-about.webp",
//       btnText: "Discover Services",
//     },
//     {
//       title: "Medical Innovation",
//       subtitle: "Leading-edge technology for better health outcomes",
//       image:
//         "https://www.philips.com/c-dam/corporate/newscenter/global/standard/resources/healthcare/2022/10-healthcare-technology-trends/healthcare-technology-trends-for-2022.jpg",
//       btnText: "Explore",
//     },
//   ];

//   const services = [
//     {
//       title: "Preventive Care",
//       icon: <Activity className="w-12 h-12 text-green-500" />,
//       description:
//         "Comprehensive health assessments and preventive programs designed to keep you at your best health",
//     },
//     {
//       title: "Digital Records",
//       icon: <Clipboard className="w-12 h-12 text-green-500" />,
//       description:
//         "Secure electronic health records that ensure your medical history is always accessible and up-to-date",
//     },
//     {
//       title: "Smart Prescriptions",
//       icon: <QrCode className="w-12 h-12 text-green-500" />,
//       description:
//         "QR-enabled prescriptions for easy medication tracking and management with your pharmacist",
//     },
//   ];

//   const processSteps = [
//     {
//       title: "Initial Assessment",
//       description:
//         "Your doctor collects and digitally records your medical history and current symptoms",
//       icon: <Clipboard className="w-10 h-10 text-white" />,
//       position: "right",
//     },
//     {
//       title: "Digital Diagnosis",
//       description:
//         "Medical information is analyzed using our advanced healthcare platform",
//       icon: <Activity className="w-10 h-10 text-white" />,
//       position: "left",
//     },
//     {
//       title: "QR Treatment Plan",
//       description:
//         "A personalized treatment plan is generated with QR codes for easy medication tracking",
//       icon: <QrCode className="w-10 h-10 text-white" />,
//       position: "right",
//     },
//     {
//       title: "Progress Tracking",
//       description:
//         "Monitor your health progress through our secure web platform",
//       icon: <CheckCircle className="w-10 h-10 text-white" />,
//       position: "left",
//     },
//   ];

//   const medicines = [
//     {
//       name: "Advanced Pain Relief",
//       category: "Pain Management",
//       description:
//         "Fast-acting formula for effective relief from moderate to severe pain",
//       image: "/api/placeholder/500/300",
//     },
//     {
//       name: "Immune Support Plus",
//       category: "Immunity",
//       description:
//         "Comprehensive blend of vitamins and minerals to strengthen your immune system",
//       image: "/api/placeholder/500/300",
//     },
//     {
//       name: "Sleep Well Formula",
//       category: "Sleep Aid",
//       description:
//         "Natural ingredients to help you achieve restful, rejuvenating sleep",
//       image: "/api/placeholder/500/300",
//     },
//   ];

//   const resources = [
//     {
//       title: "Health Library",
//       description:
//         "Access our extensive collection of medical articles and resources written by healthcare professionals",
//       icon: <Clipboard className="w-8 h-8 text-green-500" />,
//     },
//     {
//       title: "Medical Calculator",
//       description:
//         "Interactive tools to help you calculate health metrics and medication dosages",
//       icon: <Activity className="w-8 h-8 text-green-500" />,
//     },
//     {
//       title: "Wellness Tracker",
//       description:
//         "Monitor your health progress with our comprehensive wellness tracking tools",
//       icon: <CheckCircle className="w-8 h-8 text-green-500" />,
//     },
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveSlide((prev) => (prev + 1) % heroSlides.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [heroSlides.length]);

//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.1,
//     };

//     const observerCallback = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const sectionId = entry.target.id;
//           setVisibleSections((prev) => ({ ...prev, [sectionId]: true }));
//         }
//       });
//     };

//     const observer = new IntersectionObserver(
//       observerCallback,
//       observerOptions
//     );

//     Object.entries(sectionsRef).forEach(([key, ref]) => {
//       if (ref.current) {
//         observer.observe(ref.current);
//       }
//     });

//     return () => {
//       Object.values(sectionsRef).forEach((ref) => {
//         if (ref.current) {
//           observer.unobserve(ref.current);
//         }
//       });
//     };
//   }, []);

//   const nextSlide = () => {
//     setActiveSlide((prev) => (prev + 1) % heroSlides.length);
//   };

//   const prevSlide = () => {
//     setActiveSlide(
//       (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
//     );
//   };

//   // Text animation component
//   const AnimatedText = ({ text, delay = 0, className = "" }) => {
//     return (
//       <motion.div
//         className={`overflow-hidden ${className}`}
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, delay, ease: "easeOut" }}
//         whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.3 } }}
//       >
//         {text}
//       </motion.div>
//     );
//   };

//   // Letter animation for headings with wave effect
//   const AnimatedLetters = ({ text, staggerDelay = 50, className = "" }) => {
//     return (
//       <motion.h2
//         className={className}
//         dir="ltr"
//         initial="hidden"
//         animate="visible"
//         variants={{
//           hidden: { opacity: 0 },
//           visible: {
//             opacity: 1,
//             transition: {
//               staggerChildren: staggerDelay / 1000,
//             },
//           },
//         }}
//       >
//         {text.split("").map((letter, index) => (
//           <motion.span
//             key={index}
//             variants={{
//               hidden: { opacity: 0, y: 30 },
//               visible: {
//                 opacity: 1,
//                 y: [0, -10, 0],
//                 transition: {
//                   duration: 0.6,
//                   ease: "easeOut",
//                   repeat: Infinity,
//                   repeatDelay: 1.5,
//                 },
//               },
//             }}
//             className="inline-block"
//           >
//             {letter === " " ? "\u00A0" : letter}
//           </motion.span>
//         ))}
//       </motion.h2>
//     );
//   };

//   // Section animation variants
//   const sectionVariants = {
//     hero: {
//       hidden: { opacity: 0, scale: 0.9 },
//       visible: {
//         opacity: 1,
//         scale: 1,
//         transition: { duration: 1, ease: "easeOut" },
//       },
//     },
//     services: {
//       hidden: { opacity: 0, x: 100 },
//       visible: {
//         opacity: 1,
//         x: 0,
//         transition: { duration: 0.8, staggerChildren: 0.2 },
//       },
//     },
//     steps: {
//       hidden: { opacity: 0, y: 50 },
//       visible: {
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.8, staggerChildren: 0.3 },
//       },
//     },
//     pharmacy: {
//       hidden: { opacity: 0, scale: 0.9 },
//       visible: {
//         opacity: 1,
//         scale: 1,
//         transition: { duration: 0.8, staggerChildren: 0.2 },
//       },
//     },
//     resources: {
//       hidden: { opacity: 0, x: -100 },
//       visible: {
//         opacity: 1,
//         x: 0,
//         transition: { duration: 0.8, staggerChildren: 0.2 },
//       },
//     },
//   };

//   // Child animation variants
//   const childVariants = {
//     hidden: { opacity: 0, y: 20, skewX: 10 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       skewX: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   };

//   // Dynamic icon animation
//   const iconVariants = {
//     animate: {
//       y: [-5, 5],
//       rotate: [0, 5, -5, 0],
//       transition: {
//         y: { repeat: Infinity, repeatType: "reverse", duration: 1.5 },
//         rotate: { repeat: Infinity, duration: 2 },
//       },
//     },
//   };

//   return (
//     <div className="font-sans text-gray-800 min-h-screen bg-white w-full box-border overflow-x-hidden">
//       {/* Hero Section with Slider */}
//       <motion.section
//         id="hero"
//         ref={sectionsRef.hero}
//         className="relative h-screen w-full"
//         initial="hidden"
//         animate={visibleSections.hero ? "visible" : "hidden"}
//         variants={sectionVariants.hero}
//       >
//         {/* Slider */}
//         <div className="absolute inset-0 w-full">
//           <AnimatePresence>
//             {heroSlides.map(
//               (slide, index) =>
//                 activeSlide === index && (
//                   <motion.div
//                     key={index}
//                     className="absolute inset-0 w-full"
//                     initial={{ opacity: 0, scale: 1.1 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.9 }}
//                     transition={{ duration: 1 }}
//                   >
//                     <img
//                       src={slide.image}
//                       alt={slide.title}
//                       className="w-full h-full object-cover object-center"
//                     />
//                   </motion.div>
//                 )
//             )}
//           </AnimatePresence>
//         </div>

//         {/* Content - Centered */}
//         <div className="relative z-20 h-full flex items-center justify-center px-6 w-full">
//           <div className="container mx-auto max-w-6xl w-full text-center">
//             <div className="max-w-2xl mx-auto">
//               <AnimatePresence>
//                 {heroSlides.map(
//                   (slide, index) =>
//                     activeSlide === index && (
//                       <motion.div
//                         key={index}
//                         initial={{ opacity: 0, y: 50 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -50 }}
//                         transition={{ duration: 0.8 }}
//                       >
//                         <AnimatedText
//                           text={
//                             <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
//                               {slide.title}
//                             </h1>
//                           }
//                           delay={0.2}
//                           className="mb-4"
//                         />
//                         <AnimatedText
//                           text={
//                             <p className="text-xl text-green-50 mb-8 drop-shadow-md">
//                               {slide.subtitle}
//                             </p>
//                           }
//                           delay={0.4}
//                           className="mb-8"
//                         />
//                       </motion.div>
//                     )
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>

//         {/* Slider Controls */}
//         <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center space-x-2">
//           {heroSlides.map((_, index) => (
//             <motion.button
//               key={index}
//               onClick={() => setActiveSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 activeSlide === index ? "bg-green-500 w-8" : "bg-white/50"
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//               whileHover={{ scale: 1.2 }}
//               animate={{
//                 scale: [1, 1.1, 1],
//                 transition: { repeat: Infinity, duration: 1 },
//               }}
//             />
//           ))}
//         </div>

//         <motion.button
//           onClick={prevSlide}
//           className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300"
//           aria-label="Previous slide"
//           whileHover={{ scale: 1.1 }}
//           animate={{
//             x: [-5, 5],
//             transition: {
//               repeat: Infinity,
//               repeatType: "reverse",
//               duration: 1,
//             },
//           }}
//         >
//           <ChevronLeft className="w-6 h-6" />
//         </motion.button>

//         <motion.button
//           onClick={nextSlide}
//           className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300"
//           aria-label="Next slide"
//           whileHover={{ scale: 1.1 }}
//           animate={{
//             x: [5, -5],
//             transition: {
//               repeat: Infinity,
//               repeatType: "reverse",
//               duration: 1,
//             },
//           }}
//         >
//           <ChevronRight className="w-6 h-6" />
//         </motion.button>
//       </motion.section>

//       {/* Services Section */}
//       <motion.section
//         id="services"
//         ref={sectionsRef.services}
//         className="relative -mt-24 px-6 pb-20 pt-4 z-20 w-full"
//         initial="hidden"
//         animate={visibleSections.services ? "visible" : "hidden"}
//         variants={sectionVariants.services}
//       >
//         <div className="container mx-auto max-w-6xl w-full">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white p-8 rounded-2xl shadow-xl h-96 w-full"
//                 variants={childVariants}
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow:
//                     "0px 10px 20px rgba(0, 0, 0, 0.1), 0 0 20px rgba(34, 197, 94, 0.3)",
//                 }}
//               >
//                 <motion.div
//                   className="mb-6 p-4 bg-green-100 inline-block rounded-xl"
//                   variants={iconVariants}
//                   animate="animate"
//                 >
//                   {service.icon}
//                 </motion.div>
//                 <h3 className="text-2xl font-bold text-green-700 mb-3">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-600">{service.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* How Our System Works Section */}
//       <motion.section
//         id="steps"
//         ref={sectionsRef.steps}
//         className="py-20 px-6 bg-white w-full"
//         initial="hidden"
//         animate={visibleSections.steps ? "visible" : "hidden"}
//         variants={sectionVariants.steps}
//       >
//         <div className="container mx-auto max-w-5xl w-full">
//           <motion.div className="text-center mb-16" variants={childVariants}>
//             <AnimatedLetters
//               text="How Our System Works"
//               className="text-4xl font-bold text-green-800 mb-4"
//               staggerDelay={50}
//             />
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Our digital healthcare platform streamlines your medical journey
//             </p>
//           </motion.div>

//           <div className="relative w-full">
//             <motion.div
//               className="absolute left-1/2 top-0 bottom-0 w-1 bg-green-200 transform -translate-x-1/2"
//               initial={{ height: 0 }}
//               animate={{ height: "100%", scaleY: [1, 1.05, 1] }}
//               transition={{
//                 height: { duration: 1.5, ease: "easeOut" },
//                 scaleY: { repeat: Infinity, duration: 2 },
//               }}
//             ></motion.div>

//             <div className="relative z-10 w-full">
//               {processSteps.map((step, index) => (
//                 <motion.div
//                   key={index}
//                   className={`flex items-center mb-20 last:mb-0 ${
//                     step.position === "left" ? "flex-row-reverse" : ""
//                   } w-full`}
//                   variants={childVariants}
//                 >
//                   <motion.div
//                     className={`w-5/12 ${
//                       step.position === "left" ? "text-right pr-12" : "pl-12"
//                     }`}
//                     variants={childVariants}
//                   >
//                     <h3 className="text-2xl font-bold text-green-700 mb-2">
//                       {step.title}
//                     </h3>
//                     <p className="text-gray-600">{step.description}</p>
//                   </motion.div>

//                   <motion.div
//                     className="w-2/12 flex justify-center"
//                     variants={iconVariants}
//                     animate="animate"
//                   >
//                     <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
//                       {step.icon}
//                     </div>
//                   </motion.div>

//                   <div className="w-5/12"></div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Our Pharmacy Section */}
//       <motion.section
//         id="pharmacy"
//         ref={sectionsRef.pharmacy}
//         className="py-20 px-6 bg-green-50 w-full"
//         initial="hidden"
//         animate={visibleSections.pharmacy ? "visible" : "hidden"}
//         variants={sectionVariants.pharmacy}
//       >
//         <div className="container mx-auto max-w-6xl w-full">
//           <motion.div className="text-center mb-16" variants={childVariants}>
//             <AnimatedLetters
//               text="Our Pharmacy"
//               className="text-4xl font-bold text-green-800 mb-4"
//               staggerDelay={80}
//             />
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Quality medical products for your health and wellbeing
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
//             {medicines.map((medicine, index) => (
//               <motion.div
//                 key={index}
//                 className="rounded-2xl overflow-hidden bg-white shadow-lg h-full w-full"
//                 variants={childVariants}
//                 whileHover={{ scale: 1.05 }}
//                 animate={{
//                   y: [-5, 5],
//                   scale: [1, 1.02, 1],
//                   transition: {
//                     y: { repeat: Infinity, repeatType: "reverse", duration: 2 },
//                     scale: { repeat: Infinity, duration: 1.5 },
//                   },
//                 }}
//               >
//                 <div className="relative">
//                   <img
//                     src={medicine.image}
//                     alt={medicine.name}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
//                     {medicine.category}
//                   </div>
//                   <motion.div
//                     className="absolute -bottom-8 right-4"
//                     animate={{ rotate: [0, 360] }}
//                     transition={{
//                       duration: 4,
//                       repeat: Infinity,
//                       ease: "linear",
//                     }}
//                   >
//                     <div className="bg-green-600 text-white p-4 rounded-full shadow-lg">
//                       <Pill className="w-6 h-6" />
//                     </div>
//                   </motion.div>
//                 </div>
//                 <div className="p-6 pt-10">
//                   <h3 className="text-xl font-bold text-gray-800 mb-3">
//                     {medicine.name}
//                   </h3>
//                   <p className="text-gray-600">{medicine.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* Health Resources Section */}
//       <motion.section
//         id="resources"
//         ref={sectionsRef.resources}
//         className="py-20 px-6 bg-white w-full"
//         initial="hidden"
//         animate={visibleSections.resources ? "visible" : "hidden"}
//         variants={sectionVariants.resources}
//       >
//         <div className="container mx-auto max-w-6xl w-full">
//           <motion.div className="text-center mb-16" variants={childVariants}>
//             <AnimatedLetters
//               text="Health Resources"
//               className="text-4xl font-bold text-green-800 mb-4"
//               staggerDelay={70}
//             />
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Tools and information to help you take control of your health
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
//             {resources.map((resource, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-green-50 p-8 rounded-2xl border-t-4 border-green-500 w-full"
//                 variants={childVariants}
//                 whileHover={{
//                   y: -5,
//                   boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
//                 }}
//                 animate={{
//                   skewX: [-2, 2, 0],
//                   transition: { repeat: Infinity, duration: 3 },
//                 }}
//               >
//                 <motion.div
//                   className="mb-6"
//                   variants={iconVariants}
//                   animate="animate"
//                 >
//                   {resource.icon}
//                 </motion.div>
//                 <h3 className="text-xl font-bold text-green-700 mb-3">
//                   {resource.title}
//                 </h3>
//                 <p className="text-gray-600">{resource.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* Our Commitment Section - Simple, No Animation */}
//       <section className="py-20 px-6 bg-green-600 text-white w-full">
//         <div className="container mx-auto max-w-6xl w-full">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-white mb-4">
//               Our Commitment
//             </h2>
//             <p className="text-lg text-white/80 max-w-2xl mx-auto">
//               We are dedicated to providing exceptional healthcare services.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
//             <div className="p-6">
//               <h3 className="text-xl font-bold text-white mb-2">
//                 Quality Care
//               </h3>
//               <p className="text-white/80">
//                 Ensuring the highest standards in all our services.
//               </p>
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
//               <p className="text-white/80">
//                 Using the latest technology for better health outcomes.
//               </p>
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-bold text-white mb-2">
//                 Patient Focus
//               </h3>
//               <p className="text-white/80">
//                 Prioritizing your needs with personalized care.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }




// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ChevronLeft,
//   ChevronRight,
//   CheckCircle,
//   Pill,
//   Clipboard,
//   QrCode,
//   Activity,
// } from "lucide-react";

// export default function ImprovedMedicalHomepage() {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [visibleSections, setVisibleSections] = useState({
//     hero: false,
//     services: false,
//     about: false, // New section for video + text
//     pharmacy: false,
//     steps: false, // Moved How Our System Works
//   });

//   const sectionsRef = {
//     hero: useRef(null),
//     services: useRef(null),
//     about: useRef(null), // New section
//     pharmacy: useRef(null),
//     steps: useRef(null), // Moved How Our System Works
//   };

//   const heroSlides = [
//     {
//       title: "Modern Healthcare",
//       subtitle: "Advanced medical solutions for optimal wellbeing",
//       image:
//         "https://media.gettyimages.com/id/1365176115/photo/future-medical-innovations.jpg?s=612x612&w=gi&k=20&c=z7XWA4f01ri7dtXnh3JeRmUNzU12Jsl8uSbuMoOU86M=",
//       btnText: "Learn More",
//     },
//     {
//       title: "Personalized Care",
//       subtitle: "Health solutions tailored to your unique needs",
//       image: "https://ideyalabs.com/images/resource/health-about.webp",
//       btnText: "Discover Services",
//     },
//     {
//       title: "Medical Innovation",
//       subtitle: "Leading-edge technology for better health outcomes",
//       image:
//         "https://www.philips.com/c-dam/corporate/newscenter/global/standard/resources/healthcare/2022/10-healthcare-technology-trends/healthcare-technology-trends-for-2022.jpg",
//       btnText: "Explore",
//     },
//   ];

//   const services = [
//     {
//       title: "Preventive Care",
//       icon: <Activity className="w-12 h-12 text-green-500" />,
//       description:
//         "Comprehensive health assessments and preventive programs designed to keep you at your best health",
//     },
//     {
//       title: "Digital Records",
//       icon: <Clipboard className="w-12 h-12 text-green-500" />,
//       description:
//         "Secure electronic health records that ensure your medical history is always accessible and up-to-date",
//     },
//     {
//       title: "Smart Prescriptions",
//       icon: <QrCode className="w-12 h-12 text-green-500" />,
//       description:
//         "QR-enabled prescriptions for easy medication tracking and management with your pharmacist",
//     },
//   ];

//   const processSteps = [
//     {
//       title: "Initial Assessment",
//       description:
//         "Your doctor collects and digitally records your medical history and current symptoms",
//       icon: <Clipboard className="w-10 h-10 text-white" />,
//       position: "right",
//     },
//     {
//       title: "Digital Diagnosis",
//       description:
//         "Medical information is analyzed using our advanced healthcare platform",
//       icon: <Activity className="w-10 h-10 text-white" />,
//       position: "left",
//     },
//     {
//       title: "QR Treatment Plan",
//       description:
//         "A personalized treatment plan is generated with QR codes for easy medication tracking",
//       icon: <QrCode className="w-10 h-10 text-white" />,
//       position: "right",
//     },
//     {
//       title: "Progress Tracking",
//       description:
//         "Monitor your health progress through our secure web platform",
//       icon: <CheckCircle className="w-10 h-10 text-white" />,
//       position: "left",
//     },
//   ];

//   const medicines = [
//     {
//       name: "Advanced Pain Relief",
//       category: "Pain Management",
//       description:
//         "Fast-acting formula for effective relief from moderate to severe pain",
//       image: "/api/placeholder/500/300",
//     },
//     {
//       name: "Immune Support Plus",
//       category: "Immunity",
//       description:
//         "Comprehensive blend of vitamins and minerals to strengthen your immune system",
//       image: "/api/placeholder/500/300",
//     },
//     {
//       name: "Sleep Well Formula",
//       category: "Sleep Aid",
//       description:
//         "Natural ingredients to help you achieve restful, rejuvenating sleep",
//       image: "/api/placeholder/500/300",
//     },
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveSlide((prev) => (prev + 1) % heroSlides.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [heroSlides.length]);

//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.1,
//     };

//     const observerCallback = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const sectionId = entry.target.id;
//           setVisibleSections((prev) => ({ ...prev, [sectionId]: true }));
//         }
//       });
//     };

//     const observer = new IntersectionObserver(
//       observerCallback,
//       observerOptions
//     );

//     Object.entries(sectionsRef).forEach(([key, ref]) => {
//       if (ref.current) {
//         observer.observe(ref.current);
//       }
//     });

//     return () => {
//       Object.values(sectionsRef).forEach((ref) => {
//         if (ref.current) {
//           observer.unobserve(ref.current);
//         }
//       });
//     };
//   }, []);

//   const nextSlide = () => {
//     setActiveSlide((prev) => (prev + 1) % heroSlides.length);
//   };

//   const prevSlide = () => {
//     setActiveSlide(
//       (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
//     );
//   };

//   // Text animation component
//   const AnimatedText = ({ text, delay = 0, className = "" }) => {
//     return (
//       <motion.div
//         className={`overflow-hidden ${className}`}
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, delay, ease: "easeOut" }}
//         whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.3 } }}
//       >
//         {text}
//       </motion.div>
//     );
//   };

//   // Letter animation for headings with wave effect
//   const AnimatedLetters = ({ text, staggerDelay = 50, className = "" }) => {
//     return (
//       <motion.h2
//         className={className}
//         dir="ltr"
//         initial="hidden"
//         animate="visible"
//         variants={{
//           hidden: { opacity: 0 },
//           visible: {
//             opacity: 1,
//             transition: {
//               staggerChildren: staggerDelay / 1000,
//             },
//           },
//         }}
//       >
//         {text.split("").map((letter, index) => (
//           <motion.span
//             key={index}
//             variants={{
//               hidden: { opacity: 0, y: 30 },
//               visible: {
//                 opacity: 1,
//                 y: [0, -10, 0],
//                 transition: {
//                   duration: 0.6,
//                   ease: "easeOut",
//                   repeat: Infinity,
//                   repeatDelay: 1.5,
//                 },
//               },
//             }}
//             className="inline-block"
//           >
//             {letter === " " ? "\u00A0" : letter}
//           </motion.span>
//         ))}
//       </motion.h2>
//     );
//   };

//   // Section animation variants
//   const sectionVariants = {
//     hero: {
//       hidden: { opacity: 0, scale: 0.9 },
//       visible: {
//         opacity: 1,
//         scale: 1,
//         transition: { duration: 1, ease: "easeOut" },
//       },
//     },
//     services: {
//       hidden: { opacity: 0, x: 100 },
//       visible: {
//         opacity: 1,
//         x: 0,
//         transition: { duration: 0.8, staggerChildren: 0.2 },
//       },
//     },
//     about: {
//       hidden: { opacity: 0, y: 50 },
//       visible: {
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.8, staggerChildren: 0.3 },
//       },
//     },
//     pharmacy: {
//       hidden: { opacity: 0, scale: 0.9 },
//       visible: {
//         opacity: 1,
//         scale: 1,
//         transition: { duration: 0.8, staggerChildren: 0.2 },
//       },
//     },
//     steps: {
//       hidden: { opacity: 0, x: -100 },
//       visible: {
//         opacity: 1,
//         x: 0,
//         transition: { duration: 0.8, staggerChildren: 0.2 },
//       },
//     },
//   };

//   // Child animation variants
//   const childVariants = {
//     hidden: { opacity: 0, y: 20, skewX: 10 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       skewX: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   };

//   // Dynamic icon animation
//   const iconVariants = {
//     animate: {
//       y: [-5, 5],
//       rotate: [0, 5, -5, 0],
//       transition: {
//         y: { repeat: Infinity, repeatType: "reverse", duration: 1.5 },
//         rotate: { repeat: Infinity, duration: 2 },
//       },
//     },
//   };

//   return (
//     <div className="font-sans text-gray-800 min-h-screen bg-white w-full box-border overflow-x-hidden">
//       {/* Hero Section with Slider */}
//       <motion.section
//         id="hero"
//         ref={sectionsRef.hero}
//         className="relative h-screen w-full"
//         initial="hidden"
//         animate={visibleSections.hero ? "visible" : "hidden"}
//         variants={sectionVariants.hero}
//       >
//         <div className="absolute inset-0 w-full">
//           <AnimatePresence>
//             {heroSlides.map(
//               (slide, index) =>
//                 activeSlide === index && (
//                   <motion.div
//                     key={index}
//                     className="absolute inset-0 w-full"
//                     initial={{ opacity: 0, scale: 1.1 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.9 }}
//                     transition={{ duration: 1 }}
//                   >
//                     <img
//                       src={slide.image}
//                       alt={slide.title}
//                       className="w-full h-full object-cover object-center"
//                     />
//                   </motion.div>
//                 )
//             )}
//           </AnimatePresence>
//         </div>

//         <div className="relative z-20 h-full flex items-center justify-center px-6 w-full">
//           <div className="container mx-auto max-w-6xl w-full text-center">
//             <div className="max-w-2xl mx-auto">
//               <AnimatePresence>
//                 {heroSlides.map(
//                   (slide, index) =>
//                     activeSlide === index && (
//                       <motion.div
//                         key={index}
//                         initial={{ opacity: 0, y: 50 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -50 }}
//                         transition={{ duration: 0.8 }}
//                       >
//                         <AnimatedText
//                           text={
//                             <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
//                               {slide.title}
//                             </h1>
//                           }
//                           delay={0.2}
//                           className="mb-4"
//                         />
//                         <AnimatedText
//                           text={
//                             <p className="text-xl text-green-50 mb-8 drop-shadow-md">
//                               {slide.subtitle}
//                             </p>
//                           }
//                           delay={0.4}
//                           className="mb-8"
//                         />
//                       </motion.div>
//                     )
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>

//         <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center space-x-2">
//           {heroSlides.map((_, index) => (
//             <motion.button
//               key={index}
//               onClick={() => setActiveSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 activeSlide === index ? "bg-green-500 w-8" : "bg-white/50"
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//               whileHover={{ scale: 1.2 }}
//               animate={{
//                 scale: [1, 1.1, 1],
//                 transition: { repeat: Infinity, duration: 1 },
//               }}
//             />
//           ))}
//         </div>

//         <motion.button
//           onClick={prevSlide}
//           className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300"
//           aria-label="Previous slide"
//           whileHover={{ scale: 1.1 }}
//           animate={{
//             x: [-5, 5],
//             transition: {
//               repeat: Infinity,
//               repeatType: "reverse",
//               duration: 1,
//             },
//           }}
//         >
//           <ChevronLeft className="w-6 h-6" />
//         </motion.button>

//         <motion.button
//           onClick={nextSlide}
//           className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300"
//           aria-label="Next slide"
//           whileHover={{ scale: 1.1 }}
//           animate={{
//             x: [5, -5],
//             transition: {
//               repeat: Infinity,
//               repeatType: "reverse",
//               duration: 1,
//             },
//           }}
//         >
//           <ChevronRight className="w-6 h-6" />
//         </motion.button>
//       </motion.section>

//       {/* Services Section */}
//       <motion.section
//         id="services"
//         ref={sectionsRef.services}
//         className="relative -mt-24 px-6 pb-20 pt-4 z-20 w-full"
//         initial="hidden"
//         animate={visibleSections.services ? "visible" : "hidden"}
//         variants={sectionVariants.services}
//       >
//         <div className="container mx-auto max-w-6xl w-full">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white p-8 rounded-2xl shadow-xl h-96 w-full"
//                 variants={childVariants}
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow:
//                     "0px 10px 20px rgba(0, 0, 0, 0.1), 0 0 20px rgba(34, 197, 94, 0.3)",
//                 }}
//               >
//                 <motion.div
//                   className="mb-6 p-4 bg-green-100 inline-block rounded-xl"
//                   variants={iconVariants}
//                   animate="animate"
//                 >
//                   {service.icon}
//                 </motion.div>
//                 <h3 className="text-2xl font-bold text-green-700 mb-3">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-600">{service.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* About Section with Video and Text */}
//       <motion.section
//         id="about"
//         ref={sectionsRef.about}
//         className="py-20 px-6 bg-white w-full"
//         initial="hidden"
//         animate={visibleSections.about ? "visible" : "hidden"}
//         variants={sectionVariants.about}
//       >
//         <div className="container mx-auto max-w-6xl w-full">
//           <motion.div className="text-center mb-16" variants={childVariants}>
//             <AnimatedLetters
//               text="Our Mission"
//               className="text-4xl font-bold text-green-800 mb-4"
//               staggerDelay={50}
//             />
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Learn more about our commitment to modern healthcare
//             </p>
//           </motion.div>

//           <div className="flex flex-col md:flex-row items-center gap-8 w-full">
//             {/* Video */}
//             <motion.div
//               className="w-full md:w-1/2"
//               variants={childVariants}
//               whileHover={{ scale: 1.02 }}
//             >
//               <div className="relative rounded-xl overflow-hidden shadow-xl">
//                 <video
//                   className="w-full h-64 md:h-96 object-cover"
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                 >
//                   <source
//                     src="https://assets.mixkit.co/videos/preview/mixkit-doctor-talking-to-a-patient-in-a-hospital-ward-1022-large.mp4"
//                     type="video/mp4"
//                   />
//                   Your browser does not support the video tag.
//                 </video>
//                 <div className="absolute inset-0 bg-green-500/20 pointer-events-none"></div>
//               </div>
//             </motion.div>

//             {/* Text */}
//             <motion.div className="w-full md:w-1/2" variants={childVariants}>
//               <h3 className="text-3xl font-bold text-green-700 mb-4">
//                 Transforming Healthcare for a Better Future
//               </h3>
//               <p className="text-gray-600 mb-6">
//                 Our platform is designed to revolutionize the way you manage
//                 your health. By integrating advanced technology with
//                 personalized care, we empower you to take control of your
//                 wellbeing. From secure digital records to smart prescriptions,
//                 we provide a seamless healthcare experience tailored to your
//                 needs.
//               </p>
//               <motion.button
//                 className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-all duration-300"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Learn More
//               </motion.button>
//             </motion.div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Our Pharmacy Section */}
//       <motion.section
//         id="pharmacy"
//         ref={sectionsRef.pharmacy}
//         className="py-20 px-6 bg-green-50 w-full"
//         initial="hidden"
//         animate={visibleSections.pharmacy ? "visible" : "hidden"}
//         variants={sectionVariants.pharmacy}
//       >
//         <div className="container mx-auto max-w-6xl w-full">
//           <motion.div className="text-center mb-16" variants={childVariants}>
//             <AnimatedLetters
//               text="Our Pharmacy"
//               className="text-4xl font-bold text-green-800 mb-4"
//               staggerDelay={80}
//             />
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Quality medical products for your health and wellbeing
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
//             {medicines.map((medicine, index) => (
//               <motion.div
//                 key={index}
//                 className="rounded-2xl overflow-hidden bg-white shadow-lg h-full w-full"
//                 variants={childVariants}
//                 whileHover={{ scale: 1.05 }}
//                 animate={{
//                   y: [-5, 5],
//                   scale: [1, 1.02, 1],
//                   transition: {
//                     y: { repeat: Infinity, repeatType: "reverse", duration: 2 },
//                     scale: { repeat: Infinity, duration: 1.5 },
//                   },
//                 }}
//               >
//                 <div className="relative">
//                   <img
//                     src={medicine.image}
//                     alt={medicine.name}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
//                     {medicine.category}
//                   </div>
//                   <motion.div
//                     className="absolute -bottom-8 right-4"
//                     animate={{ rotate: [0, 360] }}
//                     transition={{
//                       duration: 4,
//                       repeat: Infinity,
//                       ease: "linear",
//                     }}
//                   >
//                     <div className="bg-green-600 text-white p-4 rounded-full shadow-lg">
//                       <Pill className="w-6 h-6" />
//                     </div>
//                   </motion.div>
//                 </div>
//                 <div className="p-6 pt-10">
//                   <h3 className="text-xl font-bold text-gray-800 mb-3">
//                     {medicine.name}
//                   </h3>
//                   <p className="text-gray-600">{medicine.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* How Our System Works Section (Moved) */}
//       <motion.section
//         id="steps"
//         ref={sectionsRef.steps}
//         className="py-20 px-6 bg-white w-full"
//         initial="hidden"
//         animate={visibleSections.steps ? "visible" : "hidden"}
//         variants={sectionVariants.steps}
//       >
//         <div className="container mx-auto max-w-5xl w-full">
//           <motion.div className="text-center mb-16" variants={childVariants}>
//             <AnimatedLetters
//               text="How Our System Works"
//               className="text-4xl font-bold text-green-800 mb-4"
//               staggerDelay={50}
//             />
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Our digital healthcare platform streamlines your medical journey
//             </p>
//           </motion.div>

//           <div className="relative w-full">
//             <motion.div
//               className="absolute left-1/2 top-0 bottom-0 w-1 bg-green-200 transform -translate-x-1/2"
//               initial={{ height: 0 }}
//               animate={{ height: "100%", scaleY: [1, 1.05, 1] }}
//               transition={{
//                 height: { duration: 1.5, ease: "easeOut" },
//                 scaleY: { repeat: Infinity, duration: 2 },
//               }}
//             ></motion.div>

//             <div className="relative z-10 w-full">
//               {processSteps.map((step, index) => (
//                 <motion.div
//                   key={index}
//                   className={`flex items-center mb-20 last:mb-0 ${
//                     step.position === "left" ? "flex-row-reverse" : ""
//                   } w-full`}
//                   variants={childVariants}
//                 >
//                   <motion.div
//                     className={`w-5/12 ${
//                       step.position === "left" ? "text-right pr-12" : "pl-12"
//                     }`}
//                     variants={childVariants}
//                   >
//                     <h3 className="text-2xl font-bold text-green-700 mb-2">
//                       {step.title}
//                     </h3>
//                     <p className="text-gray-600">{step.description}</p>
//                   </motion.div>

//                   <motion.div
//                     className="w-2/12 flex justify-center"
//                     variants={iconVariants}
//                     animate="animate"
//                   >
//                     <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
//                       {step.icon}
//                     </div>
//                   </motion.div>

//                   <div className="w-5/12"></div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Our Commitment Section - Simple, No Animation */}
//       <section className="py-20 px-6 bg-green-600 text-white w-full">
//         <div className="container mx-auto max-w-6xl w-full">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-white mb-4">
//               Our Commitment
//             </h2>
//             <p className="text-lg text-white/80 max-w-2xl mx-auto">
//               We are dedicated to providing exceptional healthcare services.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
//             <div className="p-6">
//               <h3 className="text-xl font-bold text-white mb-2">
//                 Quality Care
//               </h3>
//               <p className="text-white/80">
//                 Ensuring the highest standards in all our services.
//               </p>
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
//               <p className="text-white/80">
//                 Using the latest technology for better health outcomes.
//               </p>
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-bold text-white mb-2">
//                 Patient Focus
//               </h3>
//               <p className="text-white/80">
//                 Prioritizing your needs with personalized care.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }



// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ChevronLeft,
//   ChevronRight,
//   CheckCircle,
//   Pill,
//   Clipboard,
//   QrCode,
//   Activity,
// } from "lucide-react";

// export default function ImprovedMedicalHomepage() {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [visibleSections, setVisibleSections] = useState({
//     hero: false,
//     services: false,
//     about: false,
//     pharmacy: false,
//     steps: false,
//   });

//   const sectionsRef = {
//     hero: useRef(null),
//     services: useRef(null),
//     about: useRef(null),
//     pharmacy: useRef(null),
//     steps: useRef(null),
//   };

//   const heroSlides = [
//     {
//       title: "Modern Healthcare",
//       subtitle: "Advanced medical solutions for optimal wellbeing",
//       image:
//         "https://media.istockphoto.com/id/1365176115/photo/future-medical-innovations.jpg?s=612x612&w=0&k=20&c=JCOPWBa3I_62mbJihkb64vwdz2owy-QPebAvvZoZCKM=",
//       btnText: "Learn More",
//     },
//     {
//       title: "Personalized Care",
//       subtitle: "Health solutions tailored to your unique needs",
//       image: "https://ideyalabs.com/images/resource/health-about.webp",
//       btnText: "Discover Services",
//     },
//     {
//       title: "Medical Innovation",
//       subtitle: "Leading-edge technology for better health outcomes",
//       image:
//         "https://www.philips.com/c-dam/corporate/newscenter/global/standard/resources/healthcare/2022/10-healthcare-technology-trends/healthcare-technology-trends-for-2022.jpg",
//       btnText: "Explore",
//     },
//   ];

//   const services = [
//     {
//       title: "Preventive Care",
//       icon: <Activity className="w-12 h-12 text-green-500" />,
//       description:
//         "Comprehensive health assessments and preventive programs designed to keep you at your best health",
//     },
//     {
//       title: "Digital Records",
//       icon: <Clipboard className="w-12 h-12 text-green-500" />,
//       description:
//         "Secure electronic health records that ensure your medical history is always accessible and up-to-date",
//     },
//     {
//       title: "Smart Prescriptions",
//       icon: <QrCode className="w-12 h-12 text-green-500" />,
//       description:
//         "QR-enabled prescriptions for easy medication tracking and management with your pharmacist",
//     },
//   ];

//   const processSteps = [
//     {
//       title: "Initial Assessment",
//       description:
//         "Your doctor collects and digitally records your medical history and current symptoms",
//       icon: <Clipboard className="w-10 h-10 text-white" />,
//       position: "right",
//     },
//     {
//       title: "Digital Diagnosis",
//       description:
//         "Medical information is analyzed using our advanced healthcare platform",
//       icon: <Activity className="w-10 h-10 text-white" />,
//       position: "left",
//     },
//     {
//       title: "QR Treatment Plan",
//       description:
//         "A personalized treatment plan is generated with QR codes for easy medication tracking",
//       icon: <QrCode className="w-10 h-10 text-white" />,
//       position: "right",
//     },
//     {
//       title: "Progress Tracking",
//       description:
//         "Monitor your health progress through our secure web platform",
//       icon: <CheckCircle className="w-10 h-10 text-white" />,
//       position: "left",
//     },
//   ];

//   const medicines = [
//     {
//       name: "Advanced Pain Relief",
//       category: "Pain Management",
//       description:
//         "Fast-acting formula for effective relief from moderate to severe pain",
//       image: "/api/placeholder/500/300",
//     },
//     {
//       name: "Immune Support Plus",
//       category: "Immunity",
//       description:
//         "Comprehensive blend of vitamins and minerals to strengthen your immune system",
//       image: "/api/placeholder/500/300",
//     },
//     {
//       name: "Sleep Well Formula",
//       category: "Sleep Aid",
//       description:
//         "Natural ingredients to help you achieve restful, rejuvenating sleep",
//       image: "/api/placeholder/500/300",
//     },
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveSlide((prev) => (prev + 1) % heroSlides.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [heroSlides.length]);

//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.1,
//     };

//     const observerCallback = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const sectionId = entry.target.id;
//           setVisibleSections((prev) => ({ ...prev, [sectionId]: true }));
//         }
//       });
//     };

//     const observer = new IntersectionObserver(
//       observerCallback,
//       observerOptions
//     );

//     Object.entries(sectionsRef).forEach(([key, ref]) => {
//       if (ref.current) {
//         observer.observe(ref.current);
//       }
//     });

//     return () => {
//       Object.values(sectionsRef).forEach((ref) => {
//         if (ref.current) {
//           observer.unobserve(ref.current);
//         }
//       });
//     };
//   }, []);

//   const nextSlide = () => {
//     setActiveSlide((prev) => (prev + 1) % heroSlides.length);
//   };

//   const prevSlide = () => {
//     setActiveSlide(
//       (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
//     );
//   };

//   // Text animation component
//   const AnimatedText = ({ text, delay = 0, className = "" }) => {
//     return (
//       <motion.div
//         className={`overflow-hidden ${className}`}
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, delay, ease: "easeOut" }}
//         whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.3 } }}
//       >
//         {text}
//       </motion.div>
//     );
//   };

//   // Letter animation for headings with wave effect
//   const AnimatedLetters = ({ text, staggerDelay = 50, className = "" }) => {
//     return (
//       <motion.h2
//         className={className}
//         dir="ltr"
//         initial="hidden"
//         animate="visible"
//         variants={{
//           hidden: { opacity: 0 },
//           visible: {
//             opacity: 1,
//             transition: {
//               staggerChildren: staggerDelay / 1000,
//             },
//           },
//         }}
//       >
//         {text.split("").map((letter, index) => (
//           <motion.span
//             key={index}
//             variants={{
//               hidden: { opacity: 0, y: 30 },
//               visible: {
//                 opacity: 1,
//                 y: [0, -10, 0],
//                 transition: {
//                   duration: 0.6,
//                   ease: "easeOut",
//                   repeat: Infinity,
//                   repeatDelay: 1.5,
//                 },
//               },
//             }}
//             className="inline-block"
//           >
//             {letter === " " ? "\u00A0" : letter}
//           </motion.span>
//         ))}
//       </motion.h2>
//     );
//   };

//   // Section animation variants
//   const sectionVariants = {
//     hero: {
//       hidden: { opacity: 0, scale: 0.9 },
//       visible: {
//         opacity: 1,
//         scale: 1,
//         transition: { duration: 1, ease: "easeOut" },
//       },
//     },
//     services: {
//       hidden: { opacity: 0, x: 100 },
//       visible: {
//         opacity: 1,
//         x: 0,
//         transition: { duration: 0.8, staggerChildren: 0.2 },
//       },
//     },
//     about: {
//       hidden: { opacity: 0, y: 50 },
//       visible: {
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.8, staggerChildren: 0.3 },
//       },
//     },
//     pharmacy: {
//       hidden: { opacity: 0, scale: 0.9 },
//       visible: {
//         opacity: 1,
//         scale: 1,
//         transition: { duration: 0.8, staggerChildren: 0.2 },
//       },
//     },
//     steps: {
//       hidden: { opacity: 0, x: -100 },
//       visible: {
//         opacity: 1,
//         x: 0,
//         transition: { duration: 0.8, staggerChildren: 0.2 },
//       },
//     },
//   };

//   // Child animation variants
//   const childVariants = {
//     hidden: { opacity: 0, y: 20, skewX: 10 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       skewX: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   };

//   // Dynamic icon animation
//   const iconVariants = {
//     animate: {
//       y: [-5, 5],
//       rotate: [0, 5, -5, 0],
//       transition: {
//         y: { repeat: Infinity, repeatType: "reverse", duration: 1.5 },
//         rotate: { repeat: Infinity, duration: 2 },
//       },
//     },
//   };

//   return (
//     <div className="font-sans text-gray-800 min-h-screen bg-white w-full box-border overflow-x-hidden">
//       {/* Hero Section with Slider */}
//       <motion.section
//         id="hero"
//         ref={sectionsRef.hero}
//         className="relative h-screen w-full"
//         initial="hidden"
//         animate={visibleSections.hero ? "visible" : "hidden"}
//         variants={sectionVariants.hero}
//       >
//         <div className="absolute inset-0 w-full">
//           <AnimatePresence>
//             {heroSlides.map(
//               (slide, index) =>
//                 activeSlide === index && (
//                   <motion.div
//                     key={index}
//                     className="absolute inset-0 w-full"
//                     initial={{ opacity: 0, scale: 1.1 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.9 }}
//                     transition={{ duration: 1 }}
//                   >
//                     <img
//                       src={slide.image}
//                       alt={slide.title}
//                       className="w-full h-full object-cover object-center"
//                     />
//                   </motion.div>
//                 )
//             )}
//           </AnimatePresence>
//         </div>

//         <div className="relative z-20 h-full flex items-center justify-center px-6 w-full">
//           <div className="container mx-auto max-w-6xl w-full text-center">
//             <div className="max-w-2xl mx-auto">
//               <AnimatePresence>
//                 {heroSlides.map(
//                   (slide, index) =>
//                     activeSlide === index && (
//                       <motion.div
//                         key={index}
//                         initial={{ opacity: 0, y: 50 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -50 }}
//                         transition={{ duration: 0.8 }}
//                       >
//                         <AnimatedText
//                           text={
//                             <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
//                               {slide.title}
//                             </h1>
//                           }
//                           delay={0.2}
//                           className="mb-4"
//                         />
//                         <AnimatedText
//                           text={
//                             <p className="text-xl text-green-50 mb-8 drop-shadow-md">
//                               {slide.subtitle}
//                             </p>
//                           }
//                           delay={0.4}
//                           className="mb-8"
//                         />
//                       </motion.div>
//                     )
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>

//         <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center space-x-2">
//           {heroSlides.map((_, index) => (
//             <motion.button
//               key={index}
//               onClick={() => setActiveSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 activeSlide === index ? "bg-green-500 w-8" : "bg-white/50"
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//               whileHover={{ scale: 1.2 }}
//               animate={{
//                 scale: [1, 1.1, 1],
//                 transition: { repeat: Infinity, duration: 1 },
//               }}
//             />
//           ))}
//         </div>

//         <motion.button
//           onClick={prevSlide}
//           className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300"
//           aria-label="Previous slide"
//           whileHover={{ scale: 1.1 }}
//           animate={{
//             x: [-5, 5],
//             transition: {
//               repeat: Infinity,
//               repeatType: "reverse",
//               duration: 1,
//             },
//           }}
//         >
//           <ChevronLeft className="w-6 h-6" />
//         </motion.button>

//         <motion.button
//           onClick={nextSlide}
//           className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300"
//           aria-label="Next slide"
//           whileHover={{ scale: 1.1 }}
//           animate={{
//             x: [5, -5],
//             transition: {
//               repeat: Infinity,
//               repeatType: "reverse",
//               duration: 1,
//             },
//           }}
//         >
//           <ChevronRight className="w-6 h-6" />
//         </motion.button>
//       </motion.section>

//       {/* Services Section */}
//       <motion.section
//         id="services"
//         ref={sectionsRef.services}
//         className="relative -mt-24 px-6 pb-20 pt-4 z-20 w-full"
//         initial="hidden"
//         animate={visibleSections.services ? "visible" : "hidden"}
//         variants={sectionVariants.services}
//       >
//         <div className="container mx-auto max-w-6xl w-full">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white p-8 rounded-2xl shadow-xl h-96 w-full"
//                 variants={childVariants}
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow:
//                     "0px 10px 20px rgba(0, 0, 0, 0.1), 0 0 20px rgba(34, 197, 94, 0.3)",
//                 }}
//               >
//                 <motion.div
//                   className="mb-6 p-4 bg-green-100 inline-block rounded-xl"
//                   variants={iconVariants}
//                   animate="animate"
//                 >
//                   {service.icon}
//                 </motion.div>
//                 <h3 className="text-2xl font-bold text-green-700 mb-3">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-600">{service.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* About Section with Video and Text */}
//       <motion.section
//         id="about"
//         ref={sectionsRef.about}
//         className="py-20 px-6 bg-white w-full"
//         initial="hidden"
//         animate={visibleSections.about ? "visible" : "hidden"}
//         variants={sectionVariants.about}
//       >
//         <div className="container mx-auto max-w-6xl w-full">
//           <motion.div className="text-center mb-16" variants={childVariants}>
//             <AnimatedLetters
//               text="Our Mission"
//               className="text-4xl font-bold text-green-800 mb-4"
//               staggerDelay={50}
//             />
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Learn more about our commitment to modern healthcare
//             </p>
//           </motion.div>

//           <div className="flex flex-col md:flex-row items-center gap-8 w-full">
//             {/* Video with Wavy Shape */}
//             <motion.div
//               className="w-full md:w-1/2"
//               variants={childVariants}
//               whileHover={{
//                 scale: 1.02,
//                 transition: { duration: 0.3 },
//               }}
//             >
//               <div
//                 className="relative rounded-xl overflow-hidden shadow-xl"
//                 style={{
//                   clipPath:
//                     "polygon(0% 15%, 5% 10%, 10% 5%, 20% 0%, 35% 5%, 50% 0%, 65% 5%, 80% 0%, 90% 5%, 95% 10%, 100% 15%, 98% 40%, 100% 65%, 95% 85%, 90% 95%, 80% 100%, 65% 95%, 50% 100%, 35% 95%, 20% 100%, 10% 95%, 5% 90%, 0% 85%, 2% 60%, 0% 40%)",
//                 }}
//               >
//                 <video
//                   className="w-full h-64 md:h-96 object-cover"
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   controls // Added for testing
//                 >
//                   <source src="/videos/hero-video.mp4" type="video/mp4" />
//                   Your browser does not support the video tag. Please ensure the
//                   video file exists at /videos/hero-video.mp4.
//                 </video>
//                 <div className="absolute inset-0 bg-green-500/20 pointer-events-none"></div>
//               </div>
//             </motion.div>

//             {/* Text */}
//             <motion.div className="w-full md:w-1/2" variants={childVariants}>
//               <h3 className="text-3xl font-bold text-green-700 mb-4">
//                 Transforming Healthcare for a Better Future
//               </h3>
//               <p className="text-gray-600 mb-6">
//                 Our platform is designed to revolutionize the way you manage
//                 your health. By integrating advanced technology with
//                 personalized care, we empower you to take control of your
//                 wellbeing. From secure digital records to smart prescriptions,
//                 we provide a seamless healthcare experience tailored to your
//                 needs.
//               </p>
//               <motion.button
//                 className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-all duration-300"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Learn More
//               </motion.button>
//             </motion.div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Our Pharmacy Section */}
//       <motion.section
//         id="pharmacy"
//         ref={sectionsRef.pharmacy}
//         className="py-20 px-6 bg-green-50 w-full"
//         initial="hidden"
//         animate={visibleSections.pharmacy ? "visible" : "hidden"}
//         variants={sectionVariants.pharmacy}
//       >
//         <div className="container mx-auto max-w-6xl w-full">
//           <motion.div className="text-center mb-16" variants={childVariants}>
//             <AnimatedLetters
//               text="Our Pharmacy"
//               className="text-4xl font-bold text-green-800 mb-4"
//               staggerDelay={80}
//             />
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Quality medical products for your health and wellbeing
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
//             {medicines.map((medicine, index) => (
//               <motion.div
//                 key={index}
//                 className="rounded-2xl overflow-hidden bg-white shadow-lg h-full w-full"
//                 variants={childVariants}
//                 whileHover={{ scale: 1.05 }}
//                 animate={{
//                   y: [-5, 5],
//                   scale: [1, 1.02, 1],
//                   transition: {
//                     y: { repeat: Infinity, repeatType: "reverse", duration: 2 },
//                     scale: { repeat: Infinity, duration: 1.5 },
//                   },
//                 }}
//               >
//                 <div className="relative">
//                   <img
//                     src={medicine.image}
//                     alt={medicine.name}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
//                     {medicine.category}
//                   </div>
//                   <motion.div
//                     className="absolute -bottom-8 right-4"
//                     animate={{ rotate: [0, 360] }}
//                     transition={{
//                       duration: 4,
//                       repeat: Infinity,
//                       ease: "linear",
//                     }}
//                   >
//                     <div className="bg-green-600 text-white p-4 rounded-full shadow-lg">
//                       <Pill className="w-6 h-6" />
//                     </div>
//                   </motion.div>
//                 </div>
//                 <div className="p-6 pt-10">
//                   <h3 className="text-xl font-bold text-gray-800 mb-3">
//                     {medicine.name}
//                   </h3>
//                   <p className="text-gray-600">{medicine.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* How Our System Works Section */}
//       <motion.section
//         id="steps"
//         ref={sectionsRef.steps}
//         className="py-20 px-6 bg-white w-full"
//         initial="hidden"
//         animate={visibleSections.steps ? "visible" : "hidden"}
//         variants={sectionVariants.steps}
//       >
//         <div className="container mx-auto max-w-5xl w-full">
//           <motion.div className="text-center mb-16" variants={childVariants}>
//             <AnimatedLetters
//               text="How Our System Works"
//               className="text-4xl font-bold text-green-800 mb-4"
//               staggerDelay={50}
//             />
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Our digital healthcare platform streamlines your medical journey
//             </p>
//           </motion.div>

//           <div className="relative w-full">
//             <motion.div
//               className="absolute left-1/2 top-0 bottom-0 w-1 bg-green-200 transform -translate-x-1/2"
//               initial={{ height: 0 }}
//               animate={{ height: "100%", scaleY: [1, 1.05, 1] }}
//               transition={{
//                 height: { duration: 1.5, ease: "easeOut" },
//                 scaleY: { repeat: Infinity, duration: 2 },
//               }}
//             ></motion.div>

//             <div className="relative z-10 w-full">
//               {processSteps.map((step, index) => (
//                 <motion.div
//                   key={index}
//                   className={`flex items-center mb-20 last:mb-0 ${
//                     step.position === "left" ? "flex-row-reverse" : ""
//                   } w-full`}
//                   variants={childVariants}
//                 >
//                   <motion.div
//                     className={`w-5/12 ${
//                       step.position === "left" ? "text-right pr-12" : "pl-12"
//                     }`}
//                     variants={childVariants}
//                   >
//                     <h3 className="text-2xl font-bold text-green-700 mb-2">
//                       {step.title}
//                     </h3>
//                     <p className="text-gray-600">{step.description}</p>
//                   </motion.div>

//                   <motion.div
//                     className="w-2/12 flex justify-center"
//                     variants={iconVariants}
//                     animate="animate"
//                   >
//                     <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
//                       {step.icon}
//                     </div>
//                   </motion.div>

//                   <div className="w-5/12"></div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Our Commitment Section */}
//       <section className="py-20 px-6 bg-green-600 text-white w-full">
//         <div className="container mx-auto max-w-6xl w-full">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-white mb-4">
//               Our Commitment
//             </h2>
//             <p className="text-lg text-white/80 max-w-2xl mx-auto">
//               We are dedicated to providing exceptional healthcare services.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
//             <div className="p-6">
//               <h3 className="text-xl font-bold text-white mb-2">
//                 Quality Care
//               </h3>
//               <p className="text-white/80">
//                 Ensuring the highest standards in all our services.
//               </p>
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
//               <p className="text-white/80">
//                 Using the latest technology for better health outcomes.
//               </p>
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-bold text-white mb-2">
//                 Patient Focus
//               </h3>
//               <p className="text-white/80">
//                 Prioritizing your needs with personalized care.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }



// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ChevronLeft,
//   ChevronRight,
//   CheckCircle,
//   Pill,
//   Clipboard,
//   QrCode,
//   Activity,
// } from "lucide-react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// export default function ImprovedMedicalHomepage() {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [visibleSections, setVisibleSections] = useState({
//     hero: false,
//     services: false,
//     about: false,
//     pharmacy: false,
//     steps: false,
//   });
//   const [medicines, setMedicines] = useState([]);

//   const sectionsRef = {
//     hero: useRef(null),
//     services: useRef(null),
//     about: useRef(null),
//     pharmacy: useRef(null),
//     steps: useRef(null),
//   };

//   const heroSlides = [
//     {
//       title: "Modern Healthcare",
//       subtitle: "Advanced medical solutions for optimal wellbeing",
//       image:
//         "https://media.istockphoto.com/id/1365176115/photo/future-medical-innovations.jpg?s=612x612&w=0&k=20&c=JCOPWBa3I_62mbJihkb64vwdz2owy-QPebAvvZoZCKM=",
//       btnText: "Learn More",
//     },
//     {
//       title: "Personalized Care",
//       subtitle: "Health solutions tailored to your unique needs",
//       image: "https://ideyalabs.com/images/resource/health-about.webp",
//       btnText: "Discover Services",
//     },
//     {
//       title: "Medical Innovation",
//       subtitle: "Leading-edge technology for better health outcomes",
//       image:
//         "https://www.philips.com/c-dam/corporate/newscenter/global/standard/resources/healthcare/2022/10-healthcare-technology-trends/healthcare-technology-trends-for-2022.jpg",
//       btnText: "Explore",
//     },
//   ];

//   const services = [
//     {
//       title: "Preventive Care",
//       icon: <Activity className="w-12 h-12 text-green-500" />,
//       description:
//         "Comprehensive health assessments and preventive programs designed to keep you at your best health",
//     },
//     {
//       title: "Digital Records",
//       icon: <Clipboard className="w-12 h-12 text-green-500" />,
//       description:
//         "Secure electronic health records that ensure your medical history is always accessible and up-to-date",
//     },
//     {
//       title: "Smart Prescriptions",
//       icon: <QrCode className="w-12 h-12 text-green-500" />,
//       description:
//         "QR-enabled prescriptions for easy medication tracking and management with your pharmacist",
//     },
//   ];

//   const processSteps = [
//     {
//       title: "Initial Assessment",
//       description:
//         "Your doctor collects and digitally records your medical history and current symptoms",
//       icon: <Clipboard className="w-10 h-10 text-white" />,
//       position: "right",
//     },
//     {
//       title: "Digital Diagnosis",
//       description:
//         "Medical information is analyzed using our advanced healthcare platform",
//       icon: <Activity className="w-10 h-10 text-white" />,
//       position: "left",
//     },
//     {
//       title: "QR Treatment Plan",
//       description:
//         "A personalized treatment plan is generated with QR codes for easy medication tracking",
//       icon: <QrCode className="w-10 h-10 text-white" />,
//       position: "right",
//     },
//     {
//       title: "Progress Tracking",
//       description:
//         "Monitor your health progress through our secure web platform",
//       icon: <CheckCircle className="w-10 h-10 text-white" />,
//       position: "left",
//     },
//   ];

//   // Fetch medicines from database
//   useEffect(() => {
//     const fetchMedicines = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/medicines");
//         setMedicines(response.data.slice(0, 3)); // Take first 3 items
//       } catch (error) {
//         console.error("Error fetching medicines:", error);
//       }
//     };
//     fetchMedicines();
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveSlide((prev) => (prev + 1) % heroSlides.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [heroSlides.length]);

//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.1,
//     };

//     const observerCallback = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const sectionId = entry.target.id;
//           setVisibleSections((prev) => ({ ...prev, [sectionId]: true }));
//         }
//       });
//     };

//     const observer = new IntersectionObserver(
//       observerCallback,
//       observerOptions
//     );

//     Object.entries(sectionsRef).forEach(([key, ref]) => {
//       if (ref.current) {
//         observer.observe(ref.current);
//       }
//     });

//     return () => {
//       Object.values(sectionsRef).forEach((ref) => {
//         if (ref.current) {
//           observer.unobserve(ref.current);
//         }
//       });
//     };
//   }, []);

//   const nextSlide = () => {
//     setActiveSlide((prev) => (prev + 1) % heroSlides.length);
//   };

//   const prevSlide = () => {
//     setActiveSlide(
//       (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
//     );
//   };

//   // Text animation component
//   const AnimatedText = ({ text, delay = 0, className = "" }) => {
//     return (
//       <motion.div
//         className={`overflow-hidden ${className}`}
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, delay, ease: "easeOut" }}
//         whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.3 } }}
//       >
//         {text}
//       </motion.div>
//     );
//   };

//   // Letter animation for headings with wave effect
//   const AnimatedLetters = ({ text, staggerDelay = 50, className = "" }) => {
//     return (
//       <motion.h2
//         className={className}
//         dir="ltr"
//         initial="hidden"
//         animate="visible"
//         variants={{
//           hidden: { opacity: 0 },
//           visible: {
//             opacity: 1,
//             transition: {
//               staggerChildren: staggerDelay / 1000,
//             },
//           },
//         }}
//       >
//         {text.split("").map((letter, index) => (
//           <motion.span
//             key={index}
//             variants={{
//               hidden: { opacity: 0, y: 30 },
//               visible: {
//                 opacity: 1,
//                 y: [0, -10, 0],
//                 transition: {
//                   duration: 0.6,
//                   ease: "easeOut",
//                   repeat: Infinity,
//                   repeatDelay: 1.5,
//                 },
//               },
//             }}
//             className="inline-block"
//           >
//             {letter === " " ? "\u00A0" : letter}
//           </motion.span>
//         ))}
//       </motion.h2>
//     );
//   };

//   // Section animation variants
//   const sectionVariants = {
//     hero: {
//       hidden: { opacity: 0, scale: 0.9 },
//       visible: {
//         opacity: 1,
//         scale: 1,
//         transition: { duration: 1, ease: "easeOut" },
//       },
//     },
//     services: {
//       hidden: { opacity: 0, x: 100 },
//       visible: {
//         opacity: 1,
//         x: 0,
//         transition: { duration: 0.8, staggerChildren: 0.2 },
//       },
//     },
//     about: {
//       hidden: { opacity: 0, y: 50 },
//       visible: {
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.8, staggerChildren: 0.3 },
//       },
//     },
//     pharmacy: {
//       hidden: { opacity: 0, scale: 0.9 },
//       visible: {
//         opacity: 1,
//         scale: 1,
//         transition: { duration: 0.8, staggerChildren: 0.2 },
//       },
//     },
//     steps: {
//       hidden: { opacity: 0, x: -100 },
//       visible: {
//         opacity: 1,
//         x: 0,
//         transition: { duration: 0.8, staggerChildren: 0.2 },
//       },
//     },
//   };

//   // Child animation variants
//   const childVariants = {
//     hidden: { opacity: 0, y: 20, skewX: 10 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       skewX: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   };

//   // Dynamic icon animation
//   const iconVariants = {
//     animate: {
//       y: [-5, 5],
//       rotate: [0, 5, -5, 0],
//       transition: {
//         y: { repeat: Infinity, repeatType: "reverse", duration: 1.5 },
//         rotate: { repeat: Infinity, duration: 2 },
//       },
//     },
//   };

//   return (
//     <div className="font-sans text-gray-800 min-h-screen bg-white w-full box-border overflow-x-hidden">
//       {/* Hero Section with Slider */}
//       <motion.section
//         id="hero"
//         ref={sectionsRef.hero}
//         className="relative h-screen w-full"
//         initial="hidden"
//         animate={visibleSections.hero ? "visible" : "hidden"}
//         variants={sectionVariants.hero}
//       >
//         <div className="absolute inset-0 w-full">
//           <AnimatePresence>
//             {heroSlides.map(
//               (slide, index) =>
//                 activeSlide === index && (
//                   <motion.div
//                     key={index}
//                     className="absolute inset-0 w-full"
//                     initial={{ opacity: 0, scale: 1.1 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.9 }}
//                     transition={{ duration: 1 }}
//                   >
//                     <img
//                       src={slide.image}
//                       alt={slide.title}
//                       className="w-full h-full object-cover object-center"
//                     />
//                   </motion.div>
//                 )
//             )}
//           </AnimatePresence>
//         </div>

//         <div className="relative z-20 h-full flex items-center justify-center px-6 w-full">
//           <div className="container mx-auto max-w-6xl w-full text-center">
//             <div className="max-w-2xl mx-auto">
//               <AnimatePresence>
//                 {heroSlides.map(
//                   (slide, index) =>
//                     activeSlide === index && (
//                       <motion.div
//                         key={index}
//                         initial={{ opacity: 0, y: 50 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -50 }}
//                         transition={{ duration: 0.8 }}
//                       >
//                         <AnimatedText
//                           text={
//                             <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
//                               {slide.title}
//                             </h1>
//                           }
//                           delay={0.2}
//                           className="mb-4"
//                         />
//                         <AnimatedText
//                           text={
//                             <p className="text-xl text-green-50 mb-8 drop-shadow-md">
//                               {slide.subtitle}
//                             </p>
//                           }
//                           delay={0.4}
//                           className="mb-8"
//                         />
//                       </motion.div>
//                     )
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>

//         <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center space-x-2">
//           {heroSlides.map((_, index) => (
//             <motion.button
//               key={index}
//               onClick={() => setActiveSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 activeSlide === index ? "bg-green-500 w-8" : "bg-white/50"
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//               whileHover={{ scale: 1.2 }}
//               animate={{
//                 scale: [1, 1.1, 1],
//                 transition: { repeat: Infinity, duration: 1 },
//               }}
//             />
//           ))}
//         </div>

//         <motion.button
//           onClick={prevSlide}
//           className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300"
//           aria-label="Previous slide"
//           whileHover={{ scale: 1.1 }}
//           animate={{
//             x: [-5, 5],
//             transition: {
//               repeat: Infinity,
//               repeatType: "reverse",
//               duration: 1,
//             },
//           }}
//         >
//           <ChevronLeft className="w-6 h-6" />
//         </motion.button>

//         <motion.button
//           onClick={nextSlide}
//           className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300"
//           aria-label="Next slide"
//           whileHover={{ scale: 1.1 }}
//           animate={{
//             x: [5, -5],
//             transition: {
//               repeat: Infinity,
//               repeatType: "reverse",
//               duration: 1,
//             },
//           }}
//         >
//           <ChevronRight className="w-6 h-6" />
//         </motion.button>
//       </motion.section>

//       {/* Services Section */}
//       <motion.section
//         id="services"
//         ref={sectionsRef.services}
//         className="relative -mt-24 px-6 pb-20 pt-4 z-20 w-full"
//         initial="hidden"
//         animate={visibleSections.services ? "visible" : "hidden"}
//         variants={sectionVariants.services}
//       >
//         <div className="container mx-auto max-w-6xl w-full">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white p-8 rounded-2xl shadow-xl h-96 w-full"
//                 variants={childVariants}
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow:
//                     "0px 10px 20px rgba(0, 0, 0, 0.1), 0 0 20px rgba(34, 197, 94, 0.3)",
//                 }}
//               >
//                 <motion.div
//                   className="mb-6 p-4 bg-green-100 inline-block rounded-xl"
//                   variants={iconVariants}
//                   animate="animate"
//                 >
//                   {service.icon}
//                 </motion.div>
//                 <h3 className="text-2xl font-bold text-green-700 mb-3">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-600">{service.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* About Section with Video and Text */}
//       <motion.section
//         id="about"
//         ref={sectionsRef.about}
//         className="py-20 px-6 bg-white w-full"
//         initial="hidden"
//         animate={visibleSections.about ? "visible" : "hidden"}
//         variants={sectionVariants.about}
//       >
//         <div className="container mx-auto max-w-6xl w-full">
//           <motion.div className="text-center mb-16" variants={childVariants}>
//             <AnimatedLetters
//               text="Our Mission"
//               className="text-4xl font-bold text-green-800 mb-4"
//               staggerDelay={50}
//             />
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Learn more about our commitment to modern healthcare
//             </p>
//           </motion.div>

//           <div className="flex flex-col md:flex-row items-center gap-8 w-full">
//             {/* Video with Wavy Shape */}
//             <motion.div
//               className="w-full md:w-1/2"
//               variants={childVariants}
//               whileHover={{
//                 scale: 1.02,
//                 transition: { duration: 0.3 },
//               }}
//             >
//               <div
//                 className="relative rounded-xl overflow-hidden shadow-xl"
//                 style={{
//                   clipPath:
//                     "polygon(0% 15%, 5% 10%, 10% 5%, 20% 0%, 35% 5%, 50% 0%, 65% 5%, 80% 0%, 90% 5%, 95% 10%, 100% 15%, 98% 40%, 100% 65%, 95% 85%, 90% 95%, 80% 100%, 65% 95%, 50% 100%, 35% 95%, 20% 100%, 10% 95%, 5% 90%, 0% 85%, 2% 60%, 0% 40%)",
//                 }}
//               >
//                 <video
//                   className="w-full h-64 md:h-96 object-cover"
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   controls
//                 >
//                   <source src="/videos/hero-video.mp4" type="video/mp4" />
//                   Your browser does not support the video tag. Please ensure the
//                   video file exists at /videos/hero-video.mp4.
//                 </video>
//                 <div className="absolute inset-0 bg-green-500/20 pointer-events-none"></div>
//               </div>
//             </motion.div>

//             {/* Text */}
//             <motion.div className="w-full md:w-1/2" variants={childVariants}>
//               <h3 className="text-3xl font-bold text-green-700 mb-4">
//                 Transforming Healthcare for a Better Future
//               </h3>
//               <p className="text-gray-600 mb-6">
//                 Our platform is designed to revolutionize the way you manage
//                 your health. By integrating advanced technology with
//                 personalized care, we empower you to take control of your
//                 wellbeing. From secure digital records to smart prescriptions,
//                 we provide a seamless healthcare experience tailored to your
//                 needs.
//               </p>
//               <motion.button
//                 className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-all duration-300"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Learn More
//               </motion.button>
//             </motion.div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Our Pharmacy Section */}
//       <motion.section
//         id="pharmacy"
//         ref={sectionsRef.pharmacy}
//         className="py-20 px-6 bg-green-50 w-full"
//         initial="hidden"
//         animate={visibleSections.pharmacy ? "visible" : "hidden"}
//         variants={sectionVariants.pharmacy}
//       >
//         <div className="container mx-auto max-w-6xl w-full">
//           <motion.div className="text-center mb-16" variants={childVariants}>
//             <AnimatedLetters
//               text="Our Pharmacy"
//               className="text-4xl font-bold text-green-800 mb-4"
//               staggerDelay={80}
//             />
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Quality medical products for your health and wellbeing
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
//             {medicines.map((medicine, index) => (
//               <Link to="/pharmacy" key={index}>
//                 <motion.div
//                   className="rounded-2xl overflow-hidden bg-white shadow-lg h-full w-full cursor-pointer"
//                   variants={childVariants}
//                   whileHover={{ scale: 1.05 }}
//                   animate={{
//                     y: [-5, 5],
//                     scale: [1, 1.02, 1],
//                     transition: {
//                       y: {
//                         repeat: Infinity,
//                         repeatType: "reverse",
//                         duration: 2,
//                       },
//                       scale: { repeat: Infinity, duration: 1.5 },
//                     },
//                   }}
//                 >
//                   <div className="relative">
//                     <img
//                       src={`http://localhost:5000${medicine.image}`}
//                       alt={medicine.name}
//                       className="w-full h-48 object-cover"
//                     />
//                     <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
//                       {medicine.category}
//                     </div>
//                     <motion.div
//                       className="absolute -bottom-8 right-4"
//                       animate={{ rotate: [0, 360] }}
//                       transition={{
//                         duration: 4,
//                         repeat: Infinity,
//                         ease: "linear",
//                       }}
//                     >
//                       <div className="bg-green-600 text-white p-4 rounded-full shadow-lg">
//                         <Pill className="w-6 h-6" />
//                       </div>
//                     </motion.div>
//                   </div>
//                   <div className="p-6 pt-10">
//                     <h3 className="text-xl font-bold text-gray-800 mb-3">
//                       {medicine.name}
//                     </h3>
//                     <p className="text-gray-600">{medicine.description}</p>
//                   </div>
//                 </motion.div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* How Our System Works Section */}
//       <motion.section
//         id="steps"
//         ref={sectionsRef.steps}
//         className="py-20 px-6 bg-white w-full"
//         initial="hidden"
//         animate={visibleSections.steps ? "visible" : "hidden"}
//         variants={sectionVariants.steps}
//       >
//         <div className="container mx-auto max-w-5xl w-full">
//           <motion.div className="text-center mb-16" variants={childVariants}>
//             <AnimatedLetters
//               text="How Our System Works"
//               className="text-4xl font-bold text-green-800 mb-4"
//               staggerDelay={50}
//             />
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Our digital healthcare platform streamlines your medical journey
//             </p>
//           </motion.div>

//           <div className="relative w-full">
//             <motion.div
//               className="absolute left-1/2 top-0 bottom-0 w-1 bg-green-200 transform -translate-x-1/2"
//               initial={{ height: 0 }}
//               animate={{ height: "100%", scaleY: [1, 1.05, 1] }}
//               transition={{
//                 height: { duration: 1.5, ease: "easeOut" },
//                 scaleY: { repeat: Infinity, duration: 2 },
//               }}
//             ></motion.div>

//             <div className="relative z-10 w-full">
//               {processSteps.map((step, index) => (
//                 <motion.div
//                   key={index}
//                   className={`flex items-center mb-20 last:mb-0 ${
//                     step.position === "left" ? "flex-row-reverse" : ""
//                   } w-full`}
//                   variants={childVariants}
//                 >
//                   <motion.div
//                     className={`w-5/12 ${
//                       step.position === "left" ? "text-right pr-12" : "pl-12"
//                     }`}
//                     variants={childVariants}
//                   >
//                     <h3 className="text-2xl font-bold text-green-700 mb-2">
//                       {step.title}
//                     </h3>
//                     <p className="text-gray-600">{step.description}</p>
//                   </motion.div>

//                   <motion.div
//                     className="w-2/12 flex justify-center"
//                     variants={iconVariants}
//                     animate="animate"
//                   >
//                     <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
//                       {step.icon}
//                     </div>
//                   </motion.div>

//                   <div className="w-5/12"></div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Our Commitment Section */}
//       <section className="py-20 px-6 bg-green-600 text-white w-full">
//         <div className="container mx-auto max-w-6xl w-full">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-white mb-4">
//               Our Commitment
//             </h2>
//             <p className="text-lg text-white/80 max-w-2xl mx-auto">
//               We are dedicated to providing exceptional healthcare services.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
//             <div className="p-6">
//               <h3 className="text-xl font-bold text-white mb-2">
//                 Quality Care
//               </h3>
//               <p className="text-white/80">
//                 Ensuring the highest standards in all our services.
//               </p>
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
//               <p className="text-white/80">
//                 Using the latest technology for better health outcomes.
//               </p>
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-bold text-white mb-2">
//                 Patient Focus
//               </h3>
//               <p className="text-white/80">
//                 Prioritizing your needs with personalized care.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }




import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Pill,
  Clipboard,
  QrCode,
  Activity,
} from "lucide-react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ImprovedMedicalHomepage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    services: false,
    about: false,
    pharmacy: false,
    steps: false,
  });
  const [medicines, setMedicines] = useState([]);

  const sectionsRef = {
    hero: useRef(null),
    services: useRef(null),
    about: useRef(null),
    pharmacy: useRef(null),
    steps: useRef(null),
  };

  const heroSlides = [
    {
      title: "Modern Healthcare",
      subtitle: "Advanced medical solutions for optimal wellbeing",
      image:
        "https://media.istockphoto.com/id/1365176115/photo/future-medical-innovations.jpg?s=612x612&w=0&k=20&c=JCOPWBa3I_62mbJihkb64vwdz2owy-QPebAvvZoZCKM=",
      btnText: "Learn More",
    },
    {
      title: "Personalized Care",
      subtitle: "Health solutions tailored to your unique needs",
      image: "https://ideyalabs.com/images/resource/health-about.webp",
      btnText: "Discover Services",
    },
    {
      title: "Medical Innovation",
      subtitle: "Leading-edge technology for better health outcomes",
      image:
        "https://www.philips.com/c-dam/corporate/newscenter/global/standard/resources/healthcare/2022/10-healthcare-technology-trends/healthcare-technology-trends-for-2022.jpg",
      btnText: "Explore",
    },
  ];

  const services = [
    {
      title: "Preventive Care",
      icon: <Activity className="w-12 h-12 text-green-500" />,
      description:
        "Comprehensive health assessments and preventive programs designed to keep you at your best health",
    },
    {
      title: "Digital Records",
      icon: <Clipboard className="w-12 h-12 text-green-500" />,
      description:
        "Secure electronic health records that ensure your medical history is always accessible and up-to-date",
    },
    {
      title: "Smart Prescriptions",
      icon: <QrCode className="w-12 h-12 text-green-500" />,
      description:
        "QR-enabled prescriptions for easy medication tracking and management with your pharmacist",
    },
  ];

  const processSteps = [
    {
      title: "Initial Assessment",
      description:
        "Your doctor collects and digitally records your medical history and current symptoms",
      icon: <Clipboard className="w-10 h-10 text-white" />,
      position: "right",
    },
    {
      title: "Digital Diagnosis",
      description:
        "Medical information is analyzed using our advanced healthcare platform",
      icon: <Activity className="w-10 h-10 text-white" />,
      position: "left",
    },
    {
      title: "QR Treatment Plan",
      description:
        "A personalized treatment plan is generated with QR codes for easy medication tracking",
      icon: <QrCode className="w-10 h-10 text-white" />,
      position: "right",
    },
    {
      title: "Progress Tracking",
      description:
        "Monitor your health progress through our secure web platform",
      icon: <CheckCircle className="w-10 h-10 text-white" />,
      position: "left",
    },
  ];

  // Fetch medicines from database
  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/medicines");
        setMedicines(response.data.slice(0, 3)); // Take first 3 items
      } catch (error) {
        console.error("Error fetching medicines:", error);
      }
    };
    fetchMedicines();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setVisibleSections((prev) => ({ ...prev, [sectionId]: true }));
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    Object.entries(sectionsRef).forEach(([key, ref]) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionsRef).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  // Text animation component
  const AnimatedText = ({ text, delay = 0, className = "" }) => {
    return (
      <motion.div
        className={`overflow-hidden ${className}`}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
        whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.3 } }}
      >
        {text}
      </motion.div>
    );
  };

  // Letter animation for headings with wave effect
  const AnimatedLetters = ({ text, staggerDelay = 50, className = "" }) => {
    return (
      <motion.h2
        className={className}
        dir="ltr"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: staggerDelay / 1000,
            },
          },
        }}
      >
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: [0, -10, 0],
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                  repeat: Infinity,
                  repeatDelay: 1.5,
                },
              },
            }}
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.h2>
    );
  };

  // Section animation variants
  const sectionVariants = {
    hero: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1, ease: "easeOut" },
      },
    },
    services: {
      hidden: { opacity: 0, x: 100 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, staggerChildren: 0.2 },
      },
    },
    about: {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, staggerChildren: 0.3 },
      },
    },
    pharmacy: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, staggerChildren: 0.2 },
      },
    },
    steps: {
      hidden: { opacity: 0, x: -100 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, staggerChildren: 0.2 },
      },
    },
  };

  // Child animation variants
  const childVariants = {
    hidden: { opacity: 0, y: 20, skewX: 10 },
    visible: {
      opacity: 1,
      y: 0,
      skewX: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Dynamic icon animation
  const iconVariants = {
    animate: {
      y: [-5, 5],
      rotate: [0, 5, -5, 0],
      transition: {
        y: { repeat: Infinity, repeatType: "reverse", duration: 1.5 },
        rotate: { repeat: Infinity, duration: 2 },
      },
    },
  };

  return (
    <div className="font-sans text-gray-800 min-h-screen bg-white w-full box-border overflow-x-hidden">
      {/* Hero Section with Slider */}
      <motion.section
        id="hero"
        ref={sectionsRef.hero}
        className="relative h-screen w-full"
        initial="hidden"
        animate={visibleSections.hero ? "visible" : "hidden"}
        variants={sectionVariants.hero}
      >
        <div className="absolute inset-0 w-full">
          <AnimatePresence>
            {heroSlides.map(
              (slide, index) =>
                activeSlide === index && (
                  <motion.div
                    key={index}
                    className="absolute inset-0 w-full"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 1 }}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>

        <div className="relative z-20 h-full flex items-center justify-center px-6 w-full">
          <div className="container mx-auto max-w-6xl w-full text-center">
            <div className="max-w-2xl mx-auto">
              <AnimatePresence>
                {heroSlides.map(
                  (slide, index) =>
                    activeSlide === index && (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.8 }}
                      >
                        <AnimatedText
                          text={
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                              {slide.title}
                            </h1>
                          }
                          delay={0.2}
                          className="mb-4"
                        />
                        <AnimatedText
                          text={
                            <p className="text-xl text-green-50 mb-8 drop-shadow-md">
                              {slide.subtitle}
                            </p>
                          }
                          delay={0.4}
                          className="mb-8"
                        />
                      </motion.div>
                    )
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center space-x-2">
          {heroSlides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSlide === index ? "bg-green-500 w-8" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              animate={{
                scale: [1, 1.1, 1],
                transition: { repeat: Infinity, duration: 1 },
              }}
            />
          ))}
        </div>

        <motion.button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300"
          aria-label="Previous slide"
          whileHover={{ scale: 1.1 }}
          animate={{
            x: [-5, 5],
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
            },
          }}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        <motion.button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300"
          aria-label="Next slide"
          whileHover={{ scale: 1.1 }}
          animate={{
            x: [5, -5],
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
            },
          }}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        ref={sectionsRef.services}
        className="relative -mt-24 px-6 pb-20 pt-4 z-20 w-full"
        initial="hidden"
        animate={visibleSections.services ? "visible" : "hidden"}
        variants={sectionVariants.services}
      >
        <div className="container mx-auto max-w-6xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl h-96 w-full"
                variants={childVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0px 10px 20px rgba(0, 0, 0, 0.1), 0 0 20px rgba(34, 197, 94, 0.3)",
                }}
              >
                <motion.div
                  className="mb-6 p-4 bg-green-100 inline-block rounded-xl"
                  variants={iconVariants}
                  animate="animate"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-green-700 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Section with Video and Text */}
      <motion.section
        id="about"
        ref={sectionsRef.about}
        className="py-20 px-6 bg-white w-full"
        initial="hidden"
        animate={visibleSections.about ? "visible" : "hidden"}
        variants={sectionVariants.about}
      >
        <div className="container mx-auto max-w-6xl w-full">
          <motion.div className="text-center mb-16" variants={childVariants}>
            <AnimatedLetters
              text="Our Mission"
              className="text-4xl font-bold text-green-800 mb-4"
              staggerDelay={50}
            />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn more about our commitment to modern healthcare
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center gap-8 w-full">
            {/* Video with Wavy Shape */}
            <motion.div
              className="w-full md:w-1/2"
              variants={childVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <div
                className="relative rounded-xl overflow-hidden shadow-xl"
                style={{
                  clipPath:
                    "polygon(0% 15%, 5% 10%, 10% 5%, 20% 0%, 35% 5%, 50% 0%, 65% 5%, 80% 0%, 90% 5%, 95% 10%, 100% 15%, 98% 40%, 100% 65%, 95% 85%, 90% 95%, 80% 100%, 65% 95%, 50% 100%, 35% 95%, 20% 100%, 10% 95%, 5% 90%, 0% 85%, 2% 60%, 0% 40%)",
                }}
              >
                <video
                  className="w-full h-64 md:h-96 object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                >
                  <source src="/videos/hero-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag. Please ensure the
                  video file exists at /videos/hero-video.mp4.
                </video>
                <div className="absolute inset-0 bg-green-500/20 pointer-events-none"></div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div className="w-full md:w-1/2" variants={childVariants}>
              <h3 className="text-3xl font-bold text-green-700 mb-4">
                Transforming Healthcare for a Better Future
              </h3>
              <p className="text-gray-600 mb-6">
                Our platform is designed to revolutionize the way you manage
                your health. By integrating advanced technology with
                personalized care, we empower you to take control of your
                wellbeing. From secure digital records to smart prescriptions,
                we provide a seamless healthcare experience tailored to your
                needs.
              </p>
              <motion.button
                className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Pharmacy Section */}
      <motion.section
        id="pharmacy"
        ref={sectionsRef.pharmacy}
        className="py-20 px-6 bg-green-50 w-full"
        initial="hidden"
        animate={visibleSections.pharmacy ? "visible" : "hidden"}
        variants={sectionVariants.pharmacy}
      >
        <div className="container mx-auto max-w-6xl w-full">
          <motion.div className="text-center mb-16" variants={childVariants}>
            <AnimatedLetters
              text="Our Pharmacy"
              className="text-4xl font-bold text-green-800 mb-4"
              staggerDelay={80}
            />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quality medical products for your health and wellbeing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {medicines.map((medicine, index) => (
              <motion.div
                key={index}
                className="rounded-2xl overflow-hidden bg-white shadow-lg h-full w-full"
                variants={childVariants}
                whileHover={{ scale: 1.05 }}
                animate={{
                  y: [-5, 5],
                  scale: [1, 1.02, 1],
                  transition: {
                    y: { repeat: Infinity, repeatType: "reverse", duration: 2 },
                    scale: { repeat: Infinity, duration: 1.5 },
                  },
                }}
              >
                <div className="relative">
                  <img
                    src={`http://localhost:5000${medicine.image}`}
                    alt={medicine.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {medicine.category}
                  </div>
                  <motion.div
                    className="absolute -bottom-8 right-4"
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div className="bg-green-600 text-white p-4 rounded-full shadow-lg">
                      <Pill className="w-6 h-6" />
                    </div>
                  </motion.div>
                </div>
                <div className="p-6 pt-10">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {medicine.name}
                  </h3>
                  <p className="text-gray-600">{medicine.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/user/pharmacy">
              <motion.button
                className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Products
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* How Our System Works Section */}
      <motion.section
        id="steps"
        ref={sectionsRef.steps}
        className="py-20 px-6 bg-white w-full"
        initial="hidden"
        animate={visibleSections.steps ? "visible" : "hidden"}
        variants={sectionVariants.steps}
      >
        <div className="container mx-auto max-w-5xl w-full">
          <motion.div className="text-center mb-16" variants={childVariants}>
            <AnimatedLetters
              text="How Our System Works"
              className="text-4xl font-bold text-green-800 mb-4"
              staggerDelay={50}
            />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our digital healthcare platform streamlines your medical journey
            </p>
          </motion.div>

          <div className="relative w-full">
            <motion.div
              className="absolute left-1/2 top-0 bottom-0 w-1 bg-green-200 transform -translate-x-1/2"
              initial={{ height: 0 }}
              animate={{ height: "100%", scaleY: [1, 1.05, 1] }}
              transition={{
                height: { duration: 1.5, ease: "easeOut" },
                scaleY: { repeat: Infinity, duration: 2 },
              }}
            ></motion.div>

            <div className="relative z-10 w-full">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center mb-20 last:mb-0 ${
                    step.position === "left" ? "flex-row-reverse" : ""
                  } w-full`}
                  variants={childVariants}
                >
                  <motion.div
                    className={`w-5/12 ${
                      step.position === "left" ? "text-right pr-12" : "pl-12"
                    }`}
                    variants={childVariants}
                  >
                    <h3 className="text-2xl font-bold text-green-700 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </motion.div>

                  <motion.div
                    className="w-2/12 flex justify-center"
                    variants={iconVariants}
                    animate="animate"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
                      {step.icon}
                    </div>
                  </motion.div>

                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Our Commitment Section */}
      <section className="py-20 px-6 bg-green-600 text-white w-full">
        <div className="container mx-auto max-w-6xl w-full">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Commitment
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              We are dedicated to providing exceptional healthcare services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Quality Care
              </h3>
              <p className="text-white/80">
                Ensuring the highest standards in all our services.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
              <p className="text-white/80">
                Using the latest technology for better health outcomes.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Patient Focus
              </h3>
              <p className="text-white/80">
                Prioritizing your needs with personalized care.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}