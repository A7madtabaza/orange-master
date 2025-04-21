// import React from "react";
// import { Link } from "react-router-dom";

// const About = () => {
//   return (
//     <>
//       <div className="min-h-screen bg-[#F5F6F5] text-[#0A4C6A]" dir="rtl">
//         {/* Hero Section */}
//         <section className="relative w-full py-20 px-6 overflow-hidden">
//           {/* Background Gradient Accent */}
//           <div className="absolute top-0 right-0 w-full h-1/3 bg-gradient-to-b from-[#0A4C6A] to-transparent opacity-20"></div>

//           {/* Main Content */}
//           <div className="relative z-10 max-w-6xl mx-auto text-center">
//             <h1 className="text-4xl md:text-5xl font-bold text-[#0A4C6A] mb-6">
//               About MediCare
//             </h1>
//             <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
//               At MediCare, we’re revolutionizing how medical information is
//               accessed in emergencies. Our mission is simple: to save lives by
//               making critical health data available with a single scan.
//             </p>
//             {/* Floating Decorative Elements */}
//             <div className="absolute top-10 right-10 w-12 h-12 bg-[#00A896] rounded-full flex items-center justify-center shadow-md opacity-70 animate-spin-slow">
//               <span className="text-white text-xl font-bold">✚</span>
//             </div>
//             <div className="absolute bottom-0 left-10 w-12 h-12 bg-[#FF6F61] rounded-full flex items-center justify-center shadow-md opacity-70 animate-spin-slow">
//               <span className="text-white text-xl font-bold">❤</span>
//             </div>
//           </div>
//         </section>

//         {/* Our Mission Section */}
//         <section className="py-20 bg-white text-[#0A4C6A] relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-full h-2 bg-[#00A896]"></div>
//           <div className="max-w-6xl mx-auto px-6">
//             <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//               Our Mission
//             </h2>
//             <div className="flex flex-col md:flex-row-reverse items-center gap-12">
//               <div className="flex-1">
//                 <video
//                   autoPlay
//                   loop
//                   muted
//                   className="w-full h-auto rounded-xl shadow-md"
//                 >
//                   <source src="/videos/video (3).mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               </div>
//               <div className="flex-1 text-center md:text-right">
//                 <p className="text-lg text-gray-700 mb-6">
//                   We believe everyone deserves peace of mind knowing their
//                   medical history is accessible when it matters most. MediCare’s
//                   QR technology empowers individuals and healthcare providers
//                   with instant, secure access to vital information—anytime,
//                   anywhere.
//                 </p>
//                 <button className="px-8 py-3 bg-[#00A896] text-white font-semibold rounded-full shadow-md hover:bg-[#FF6F61] transition-all duration-300">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Our Team Section (Commented Out) */}
//         {/* <section className="py-20 bg-[#F5F6F5] text-[#0A4C6A] relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-full h-2 bg-[#00A896]"></div>
//           <div className="max-w-6xl mx-auto px-6 text-center">
//             <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Team</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//               {[
//                 {
//                   name: "Dr. Sarah Ahmed",
//                   role: "Founder & CEO",
//                   img: "https://via.placeholder.com/150?text=Sarah",
//                 },
//                 {
//                   name: "John Doe",
//                   role: "Chief Technology Officer",
//                   img: "https://via.placeholder.com/150?text=John",
//                 },
//                 {
//                   name: "Emily Carter",
//                   role: "Head of Design",
//                   img: "https://via.placeholder.com/150?text=Emily",
//                 },
//               ].map((member, index) => (
//                 <div
//                   key={index}
//                   className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
//                 >
//                   <img
//                     src={member.img}
//                     alt={member.name}
//                     className="w-24 h-24 rounded-full mx-auto mb-4"
//                   />
//                   <h3 className="text-xl font-semibold text-[#0A4C6A] mb-2">
//                     {member.name}
//                   </h3>
//                   <p className="text-gray-700">{member.role}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section> */}

//         {/* Call to Action Section */}
//         <section className="py-20 bg-white text-[#0A4C6A] relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-full h-2 bg-[#00A896]"></div>
//           <div className="max-w-4xl mx-auto px-6 text-center">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               Join the MediCare Movement
//             </h2>
//             <p className="text-lg text-gray-700 mb-8">
//               Be part of a community dedicated to safety, innovation, and care.
//               Sign up today and take the first step toward a healthier, more
//               secure future.
//             </p>
//             <Link
//               to="/signup"
//               className="px-10 py-4 bg-[#00A896] text-white font-semibold rounded-full shadow-md hover:bg-[#FF6F61] transition-all duration-300"
//             >
//               Sign Up Now
//             </Link>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default About;
// import React from "react";
// import { Link } from "react-router-dom";

// const About = () => {
//   return (
//     <div className="font-sans min-h-screen bg-gray-50">
//       {/* Hero Section - Modern Full Width Design */}
//       <section className="relative bg-indigo-600 text-white overflow-hidden">
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute -right-20 -top-20 w-64 h-64 bg-indigo-400 rounded-full"></div>
//           <div className="absolute right-40 top-40 w-32 h-32 bg-indigo-300 rounded-full"></div>
//           <div className="absolute -left-20 bottom-10 w-48 h-48 bg-indigo-400 rounded-full"></div>
//         </div>

//         <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32">
//           <div className="flex flex-col md:flex-row items-center gap-12">
//             <div className="md:w-1/2 text-center md:text-left">
//               <h1 className="text-4xl md:text-5xl font-bold mb-6">
//                 About MediCare
//               </h1>
//               <p className="text-lg md:text-xl text-indigo-100 mb-8">
//                 At MediCare, we're revolutionizing how medical information is
//                 accessed in emergencies. Our mission is simple: to save lives by
//                 making critical health data available with a single scan.
//               </p>
//               <div className="flex flex-wrap gap-4 justify-center md:justify-start">
//                 <Link
//                   to="/services"
//                   className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-md shadow-md hover:bg-indigo-50 transition-all duration-300"
//                 >
//                   Our Services
//                 </Link>
//                 <Link
//                   to="/signup"
//                   className="px-8 py-3 bg-indigo-700 text-white border border-indigo-200 font-semibold rounded-md shadow-md hover:bg-indigo-800 transition-all duration-300"
//                 >
//                   Get Started
//                 </Link>
//               </div>
//             </div>
//             <div className="md:w-1/2 flex justify-center">
//               <div className="w-64 h-64 relative">
//                 <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full animate-pulse"></div>
//                 <div className="absolute inset-4 bg-white/20 rounded-full"></div>
//                 <div className="absolute inset-10 bg-white/20 rounded-full flex items-center justify-center">
//                   <span className="text-white text-7xl font-light">+</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Vision Section */}
//       <section className="py-20 px-6 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex flex-col md:flex-row items-center gap-16">
//             <div className="md:w-1/2">
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//                 Our Vision
//               </h2>
//               <div className="h-1 w-20 bg-indigo-600 mb-8"></div>
//               <p className="text-lg text-gray-700 mb-6">
//                 We believe everyone deserves peace of mind knowing their medical
//                 history is accessible when it matters most. Our vision is a
//                 world where no one suffers due to lack of immediate access to
//                 their critical health information.
//               </p>
//               <p className="text-lg text-gray-700 mb-8">
//                 MediCare's QR technology empowers individuals and healthcare
//                 providers with instant, secure access to vital
//                 information—anytime, anywhere, breaking down barriers to quality
//                 emergency care.
//               </p>
//               <Link
//                 to="/learn-more"
//                 className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-all duration-300"
//               >
//                 Learn more about our technology
//                 <svg
//                   className="ml-2 w-5 h-5"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M14 5l7 7m0 0l-7 7m7-7H3"
//                   ></path>
//                 </svg>
//               </Link>
//             </div>
//             <div className="md:w-1/2">
//               <div className="bg-gray-100 p-4 rounded-2xl shadow-lg">
//                 <video controls className="w-full h-auto rounded-xl">
//                   <source src="/videos/video (3).mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Key Features Section */}
//       <section className="py-20 px-6 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
//             Why Choose MediCare
//           </h2>
//           <div className="h-1 w-20 bg-indigo-600 mx-auto mb-16"></div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: "🔒",
//                 title: "Privacy First",
//                 description:
//                   "Your medical data is fully encrypted and secure, with you controlling who can access it and when.",
//               },
//               {
//                 icon: "⚡",
//                 title: "Instant Access",
//                 description:
//                   "Emergency responders can access your critical information in seconds when every moment counts.",
//               },
//               {
//                 icon: "🌐",
//                 title: "Universal Compatibility",
//                 description:
//                   "Works with healthcare systems worldwide, eliminating barriers to emergency care no matter where you are.",
//               },
//             ].map((feature, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border-t-4 border-indigo-600"
//               >
//                 <div className="text-4xl mb-4">{feature.icon}</div>
//                 <h3 className="text-xl font-bold text-gray-800 mb-3">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section className="py-20 px-6 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
//             How MediCare Works
//           </h2>
//           <div className="h-1 w-20 bg-indigo-600 mx-auto mb-16"></div>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             {[
//               {
//                 number: "01",
//                 title: "Create Profile",
//                 description:
//                   "Sign up and add your medical information, emergency contacts, and preferences.",
//               },
//               {
//                 number: "02",
//                 title: "Get Your QR Code",
//                 description:
//                   "Receive your unique MediCare QR code to place on your phone, ID card, or wearables.",
//               },
//               {
//                 number: "03",
//                 title: "Stay Updated",
//                 description:
//                   "Keep your information current with our easy-to-use dashboard and mobile app.",
//               },
//               {
//                 number: "04",
//                 title: "Emergency Access",
//                 description:
//                   "In emergencies, medical professionals can scan your code for instant information access.",
//               },
//             ].map((step, index) => (
//               <div key={index} className="relative">
//                 <div className="bg-indigo-600 text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mb-4">
//                   {step.number}
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-800 mb-3">
//                   {step.title}
//                 </h3>
//                 <p className="text-gray-600">{step.description}</p>

//                 {index < 3 && (
//                   <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-indigo-200 -z-10 transform -translate-x-6"></div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action Section */}
//       <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-500 text-white">
//         <div className="max-w-4xl mx-auto px-6 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Join the MediCare Movement
//           </h2>
//           <p className="text-xl text-indigo-50 mb-8 max-w-2xl mx-auto">
//             Be part of a community dedicated to safety, innovation, and care.
//             Sign up today and take the first step toward a healthier, more
//             secure future.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               to="/signup"
//               className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-indigo-50 transition-all duration-300"
//             >
//               Sign Up Now
//             </Link>
//             <Link
//               to="/contact"
//               className="px-8 py-4 bg-indigo-800 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-900 transition-all duration-300"
//             >
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;


// import React from "react";
// import { Link } from "react-router-dom";

// const About = () => {
//   return (
//     <>
//       <div className="min-h-screen bg-[#F5F5F5] text-[#1A1A1A]" dir="ltr">
//         {/* Intro Section (Replacing Hero) */}
//         <section className="py-16 bg-[#FFFFFF] text-[#1A1A1A] relative">
//           <div className="max-w-5xl mx-auto px-6 text-center">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
//               About MediCare
//             </h1>
//             <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               At MediCare, we’re revolutionizing how medical information is
//               accessed in emergencies. Our mission is to save lives by making
//               critical health data available with a single scan.
//             </p>
//             <div className="mt-8">
//               <span className="block w-24 h-1 bg-[#4CAF50] rounded-full mx-auto"></span>
//             </div>
//           </div>
//         </section>

//         {/* Our Mission Section */}
//         <section className="py-20 bg-[#F5F5F5] text-[#1A1A1A] relative">
//           <div className="max-w-6xl mx-auto px-6">
//             <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
//               Our Mission
//               <span className="absolute bottom-[-0.5rem] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#4CAF50] rounded-full"></span>
//             </h2>
//             <div className="flex flex-col md:flex-row items-center gap-12 bg-[#FFFFFF] p-8 rounded-xl shadow-lg">
//               <div className="flex-1">
//                 <video
//                   autoPlay
//                   loop
//                   muted
//                   className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
//                 >
//                   <source src="/videos/video (3).mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               </div>
//               <div className="flex-1 text-left">
//                 <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-4">
//                   Empowering Health Access
//                 </h3>
//                 <p className="text-lg text-gray-600 mb-6 leading-relaxed">
//                   We believe everyone deserves peace of mind knowing their
//                   medical history is accessible when it matters most. MediCare’s
//                   QR technology empowers individuals and healthcare providers
//                   with instant, secure access to vital information—anytime,
//                   anywhere.
//                 </p>
//                 <button className="px-8 py-3 bg-[#4CAF50] text-white font-semibold rounded-lg shadow-lg hover:bg-[#3d8b40] transition-all duration-300">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Call to Action Section */}
//         <section className="py-20 bg-[#FFFFFF] text-[#1A1A1A] relative">
//           <div className="max-w-4xl mx-auto px-6 text-center">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
//               Join the MediCare Movement
//             </h2>
//             <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//               Be part of a community dedicated to safety, innovation, and care.
//               Sign up today and take the first step toward a healthier, more
//               secure future.
//             </p>
//             <Link
//               to="/signup"
//               className="inline-block px-10 py-4 bg-[#FFC107] text-[#1A1A1A] font-semibold rounded-lg shadow-lg hover:bg-[#e0a800] transition-all duration-300 transform hover:scale-105"
//             >
//               Sign Up Now
//             </Link>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default About;





// import React from "react";
// import { Link } from "react-router-dom";

// const About = () => {
//   return (
//     <>
//       <div className="min-h-screen bg-[#F5F5F5] text-[#1A1A1A]" dir="ltr">
//         {/* Intro Section with Curved Decoration */}
//         <section className="py-20 bg-[#FFFFFF] text-[#1A1A1A] relative overflow-hidden">
//           <div className="absolute top-0 left-0 w-full h-16 bg-[#4CAF50] opacity-10 rounded-br-full"></div>
//           <div className="absolute bottom-0 right-0 w-full h-16 bg-[#FFC107] opacity-10 rounded-tl-full"></div>

//           <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
//             <div className="inline-block bg-[#4CAF50] text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
//               ABOUT US
//             </div>
//             <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
//               About <span className="text-[#4CAF50]">MediCare</span>
//             </h1>
//             <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               At MediCare, we're revolutionizing how medical information is
//               accessed in emergencies. Our mission is to save lives by making
//               critical health data available with a single scan.
//             </p>
//             <div className="mt-10">
//               <span className="inline-block w-24 h-1 bg-[#4CAF50] rounded-full mx-auto"></span>
//             </div>
//           </div>
//         </section>

//         {/* Our Mission Section with Card Effect */}
//         <section className="py-24 bg-[#F5F5F5] text-[#1A1A1A] relative">
//           <div className="absolute top-0 left-0 w-24 h-24 bg-[#4CAF50] opacity-5 rounded-br-full"></div>
//           <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#FFC107] opacity-5 rounded-tl-full"></div>

//           <div className="max-w-6xl mx-auto px-6">
//             <div className="text-center mb-16">
//               <span className="inline-block bg-[#F5F5F5] border border-[#4CAF50] text-[#4CAF50] px-4 py-1 rounded-full text-sm font-medium mb-4">
//                 OUR PURPOSE
//               </span>
//               <h2 className="text-3xl md:text-5xl font-bold relative inline-block">
//                 Our Mission
//                 <span className="absolute bottom-[-0.8rem] left-0 w-full h-1 bg-[#4CAF50] rounded-full"></span>
//               </h2>
//             </div>

//             <div className="flex flex-col md:flex-row items-center gap-12 bg-[#FFFFFF] p-8 md:p-12 rounded-2xl shadow-xl relative overflow-hidden">
//               <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#4CAF50] to-[#FFC107]"></div>

//               <div className="flex-1 relative">
//                 <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#4CAF50] opacity-10 rounded-full"></div>
//                 <video
//                   autoPlay
//                   loop
//                   muted
//                   className="w-full h-auto rounded-xl shadow-xl transform hover:scale-102 transition-transform duration-300 relative z-10"
//                 >
//                   <source src="/videos/video (3).mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               </div>

//               <div className="flex-1 text-left">
//                 <div className="inline-block px-3 py-1 bg-green-100 text-[#4CAF50] rounded-full text-xs font-medium mb-4">
//                   EMPOWERING ACCESS
//                 </div>
//                 <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6">
//                   Empowering Health Access
//                 </h3>
//                 <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//                   We believe everyone deserves peace of mind knowing their
//                   medical history is accessible when it matters most. MediCare's
//                   QR technology empowers individuals and healthcare providers
//                   with instant, secure access to vital information—anytime,
//                   anywhere.
//                 </p>
//                 <button className="px-8 py-4 bg-[#4CAF50] text-white font-semibold rounded-lg shadow-lg hover:bg-[#3d8b40] transition-all duration-300 relative overflow-hidden group">
//                   <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Call to Action Section with Enhanced Design */}
//         <section className="py-24 bg-[#FFFFFF] text-[#1A1A1A] relative overflow-hidden">
//           <div className="absolute top-0 left-0 w-full h-full">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-[#4CAF50] opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
//             <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FFC107] opacity-5 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
//           </div>

//           <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
//             <div className="inline-block px-4 py-1 bg-yellow-100 text-[#FFC107] rounded-full text-sm font-medium mb-6">
//               JOIN US
//             </div>
//             <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
//               Join the <span className="text-[#4CAF50]">MediCare</span> Movement
//             </h2>
//             <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
//               Be part of a community dedicated to safety, innovation, and care.
//               Sign up today and take the first step toward a healthier, more
//               secure future.
//             </p>
//             <div className="relative inline-block">
//               <div className="absolute inset-0 bg-[#FFC107] blur-md opacity-30 rounded-lg transform scale-110"></div>
//               <Link
//                 to="/signup"
//                 className="relative inline-block px-10 py-4 bg-[#FFC107] text-[#1A1A1A] font-semibold rounded-lg shadow-lg hover:bg-[#e0a800] transition-all duration-300 transform hover:scale-105"
//               >
//                 Sign Up Now
//               </Link>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default About;



import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="min-h-screen bg-[#F5F5F5] text-[#1A1A1A]" dir="ltr">
        {/* Intro Section - Simplified */}
        <section className="py-16 bg-[#FFFFFF] text-[#1A1A1A]">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              About MediCare
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At MediCare, we're revolutionizing how medical information is
              accessed in emergencies. Our mission is to save lives by making
              critical health data available with a single scan.
            </p>
            <div className="mt-8">
              <span className="block w-24 h-1 bg-[#4CAF50] rounded-full mx-auto"></span>
            </div>
          </div>
        </section>

        {/* Our Mission Section - Refined Layout */}
        <section className="py-20 bg-[#F5F5F5] text-[#1A1A1A]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
              Our Mission
              <span className="absolute bottom-[-0.5rem] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#4CAF50] rounded-full"></span>
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-12 bg-[#FFFFFF] p-10 rounded-xl shadow-md">
              <div className="flex-1">
                <video
                  autoPlay
                  loop
                  muted
                  className="w-full h-auto rounded-lg shadow-md transition-transform duration-300"
                >
                  <source src="/videos/video (3).mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-4">
                  Empowering Health Access
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We believe everyone deserves peace of mind knowing their
                  medical history is accessible when it matters most. MediCare's
                  QR technology empowers individuals and healthcare providers
                  with instant, secure access to vital information—anytime,
                  anywhere.
                </p>
                <button className="px-8 py-3 bg-[#4CAF50] text-white font-semibold rounded-lg shadow-md hover:bg-[#3d8b40] transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section - Clean Design */}
        <section className="py-20 bg-[#FFFFFF] text-[#1A1A1A]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Join the MediCare Movement
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Be part of a community dedicated to safety, innovation, and care.
              Sign up today and take the first step toward a healthier, more
              secure future.
            </p>
            <Link
              to="/signup"
              className="inline-block px-10 py-4 bg-[#FFC107] text-[#1A1A1A] font-semibold rounded-lg shadow-md hover:bg-[#e0a800] transition-colors duration-300"
            >
              Sign Up Now
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;