// import React, { useState, useEffect } from "react";
// import { SearchIcon, Edit2Icon, Trash2Icon, EyeIcon } from "lucide-react";

// const PatientsTable = () => {
//   const [patients, setPatients] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [editingPatient, setEditingPatient] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     age: "",
//     gender: "",
//     phone: "",
//     diagnosis: "",
//     treatment: "",
//   });
//   const [showDetails, setShowDetails] = useState(null);

//   useEffect(() => {
//     fetchPatients();
//   }, []);

//   const fetchPatients = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/patients");
//       const data = await response.json();
//       if (response.ok) {
//         setPatients(data);
//       }
//     } catch (error) {
//       console.error("Error fetching patients:", error);
//     }
//   };

//   const handleSearch = async (e) => {
//     const term = e.target.value;
//     setSearchTerm(term);
//     if (term.trim() === "") {
//       fetchPatients();
//     } else {
//       try {
//         const response = await fetch(
//           `http://localhost:5000/api/patients/search?term=${term}`
//         );
//         const data = await response.json();
//         if (response.ok) {
//           setPatients(data);
//         }
//       } catch (error) {
//         console.error("Error searching patients:", error);
//       }
//     }
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this patient?")) {
//       try {
//         const response = await fetch(
//           `http://localhost:5000/api/patients/${id}`,
//           {
//             method: "DELETE",
//           }
//         );
//         const data = await response.json();
//         if (response.ok) {
//           setPatients(patients.filter((patient) => patient._id !== id));
//           alert(data.message);
//         } else {
//           alert(data.message);
//         }
//       } catch (error) {
//         console.error("Error deleting patient:", error);
//         alert("An error occurred while deleting");
//       }
//     }
//   };

//   const handleEdit = (patient) => {
//     setEditingPatient(patient._id);
//     setFormData({ ...patient });
//     setShowDetails(null);
//   };

//   const handleSave = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:5000/api/patients/${editingPatient}`,
//         {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );
//       const data = await response.json();
//       if (response.ok) {
//         setPatients(
//           patients.map((p) => (p._id === editingPatient ? data.patient : p))
//         );
//         setEditingPatient(null);
//         alert(data.message);
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       console.error("Error updating patient:", error);
//       alert("An error occurred while saving");
//     }
//   };

//   const handleCancel = () => {
//     setEditingPatient(null);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleShowDetails = (patientId) => {
//     if (showDetails === patientId) {
//       setShowDetails(null);
//     } else {
//       setShowDetails(patientId);
//       setEditingPatient(null);
//     }
//   };

//   return (
//     <div className="p-6 ml-64 min-h-screen bg-gray-100">
//       {" "}
//       {/* Adjusted for left sidebar */}
//       <div className="mb-6">
//         <h1 className="text-3xl font-bold text-[#0A4C6A]">Patients List</h1>
//         <p className="text-gray-600">Manage patient records</p>
//       </div>
//       <div className="bg-white rounded-lg shadow-md p-6">
//         <div className="mb-4 relative">
//           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//             <SearchIcon className="h-5 w-5 text-gray-400" />
//           </div>
//           <input
//             type="text"
//             placeholder="Search for a patient..."
//             className="block w-full pl-10 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//         </div>

//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Name
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Age
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Gender
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Phone
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Diagnosis
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {patients.map((patient) => (
//                 <React.Fragment key={patient._id}>
//                   <tr>
//                     {editingPatient === patient._id ? (
//                       <>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <input
//                             type="text"
//                             name="name"
//                             className="border rounded p-1 w-full"
//                             value={formData.name}
//                             onChange={handleChange}
//                           />
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <input
//                             type="number"
//                             name="age"
//                             className="border rounded p-1 w-full"
//                             value={formData.age}
//                             onChange={handleChange}
//                           />
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <select
//                             name="gender"
//                             className="border rounded p-1 w-full"
//                             value={formData.gender}
//                             onChange={handleChange}
//                           >
//                             <option value="Male">Male</option>
//                             <option value="Female">Female</option>
//                           </select>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <input
//                             type="text"
//                             name="phone"
//                             className="border rounded p-1 w-full"
//                             value={formData.phone}
//                             onChange={handleChange}
//                           />
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <input
//                             type="text"
//                             name="diagnosis"
//                             className="border rounded p-1 w-full"
//                             value={formData.diagnosis}
//                             onChange={handleChange}
//                           />
//                           <textarea
//                             name="treatment"
//                             className="border rounded p-1 w-full mt-2"
//                             value={formData.treatment || ""}
//                             onChange={handleChange}
//                             placeholder="Enter treatment"
//                             rows="2"
//                           />
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
//                           <button
//                             onClick={handleSave}
//                             className="text-green-600 hover:text-green-900 mr-3"
//                           >
//                             Save
//                           </button>
//                           <button
//                             onClick={handleCancel}
//                             className="text-gray-600 hover:text-gray-900"
//                           >
//                             Cancel
//                           </button>
//                         </td>
//                       </>
//                     ) : (
//                       <>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           {patient.name}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           {patient.age}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           {patient.gender}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           {patient.phone}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           {patient.diagnosis || "Not specified"}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
//                           <button
//                             onClick={() => handleEdit(patient)}
//                             className="text-blue-600 hover:text-blue-900 mr-3"
//                           >
//                             <Edit2Icon size={18} />
//                           </button>
//                           <button
//                             onClick={() => handleDelete(patient._id)}
//                             className="text-red-600 hover:text-red-900 mr-3"
//                           >
//                             <Trash2Icon size={18} />
//                           </button>
//                           <button
//                             onClick={() => handleShowDetails(patient._id)}
//                             className="text-green-600 hover:text-green-900"
//                           >
//                             <EyeIcon size={18} />
//                           </button>
//                         </td>
//                       </>
//                     )}
//                   </tr>
//                   {showDetails === patient._id && (
//                     <tr>
//                       <td colSpan="6" className="px-6 py-4">
//                         <div className="bg-gray-100 p-4 rounded-md">
//                           <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                             Case Details
//                           </h3>
//                           <p>
//                             <strong>Diagnosis:</strong>{" "}
//                             {patient.diagnosis || "Not specified"}
//                           </p>
//                           <p>
//                             <strong>Treatment:</strong>{" "}
//                             {patient.treatment || "Not specified"}
//                           </p>
//                         </div>
//                       </td>
//                     </tr>
//                   )}
//                 </React.Fragment>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PatientsTable;
// import React, { useState, useEffect } from "react";
// import {
//   SearchIcon,
//   Edit2Icon,
//   Trash2Icon,
//   EyeIcon,
//   ChevronLeftIcon,
//   ChevronRightIcon,
// } from "lucide-react";

// const PatientsTable = () => {
//   const [patients, setPatients] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [editingPatient, setEditingPatient] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     age: "",
//     gender: "",
//     phone: "",
//     diagnosis: "",
//     treatment: "",
//   });
//   const [showDetails, setShowDetails] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const patientsPerPage = 5; // Number of patients per page

//   useEffect(() => {
//     fetchPatients();
//   }, []);

//   const fetchPatients = async () => {
//     setIsLoading(true);
//     try {
//       const response = await fetch("http://localhost:5000/api/patients");
//       const data = await response.json();
//       if (response.ok) {
//         setPatients(data);
//       }
//     } catch (error) {
//       console.error("Error fetching patients:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSearch = async (e) => {
//     const term = e.target.value;
//     setSearchTerm(term);
//     setCurrentPage(1); // Reset to first page on search
//     if (term.trim() === "") {
//       fetchPatients();
//     } else {
//       try {
//         const response = await fetch(
//           `http://localhost:5000/api/patients/search?term=${term}`
//         );
//         const data = await response.json();
//         if (response.ok) {
//           setPatients(data);
//         }
//       } catch (error) {
//         console.error("Error searching patients:", error);
//       }
//     }
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this patient?")) {
//       try {
//         const response = await fetch(
//           `http://localhost:5000/api/patients/${id}`,
//           { method: "DELETE" }
//         );
//         const data = await response.json();
//         if (response.ok) {
//           setPatients(patients.filter((patient) => patient._id !== id));
//           alert(data.message);
//         } else {
//           alert(data.message);
//         }
//       } catch (error) {
//         console.error("Error deleting patient:", error);
//         alert("An error occurred while deleting");
//       }
//     }
//   };

//   const handleEdit = (patient) => {
//     setEditingPatient(patient._id);
//     setFormData({ ...patient });
//     setShowDetails(null);
//   };

//   const handleSave = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:5000/api/patients/${editingPatient}`,
//         {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );
//       const data = await response.json();
//       if (response.ok) {
//         setPatients(
//           patients.map((p) => (p._id === editingPatient ? data.patient : p))
//         );
//         setEditingPatient(null);
//         alert(data.message);
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       console.error("Error updating patient:", error);
//       alert("An error occurred while saving");
//     }
//   };

//   const handleCancel = () => {
//     setEditingPatient(null);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleShowDetails = (patientId) => {
//     if (showDetails === patientId) {
//       setShowDetails(null);
//     } else {
//       setShowDetails(patientId);
//       setEditingPatient(null);
//     }
//   };

//   // Pagination Logic
//   const totalPages = Math.ceil(patients.length / patientsPerPage);
//   const startIndex = (currentPage - 1) * patientsPerPage;
//   const currentPatients = patients.slice(
//     startIndex,
//     startIndex + patientsPerPage
//   );

//   const handlePageChange = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   return (
//     <div className="p-6 md:ml-64 min-h-screen bg-[#F5F5F5] font-sans">
//       <div className="mb-6">
//         <h1 className="text-3xl font-bold text-[#1A1A1A]">Patients List</h1>
//         <p className="text-gray-600 mt-2">Manage patient records</p>
//       </div>
//       <div className="bg-[#FFFFFF] rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-[#4CAF50]/20">
//         <div className="mb-6 relative">
//           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//             <SearchIcon className="h-5 w-5 text-gray-400" />
//           </div>
//           <input
//             type="text"
//             placeholder="Search for a patient..."
//             className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#4CAF50] focus:border-[#4CAF50] placeholder-gray-500 transition-colors duration-200"
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//         </div>

//         {/* Desktop Table View */}
//         <div className="hidden md:block">
//           <table className="w-full divide-y divide-gray-200">
//             <thead className="bg-[#F5F5F5]">
//               <tr>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
//                   Name
//                 </th>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
//                   Age
//                 </th>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
//                   Gender
//                 </th>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
//                   Phone
//                 </th>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
//                   Diagnosis
//                 </th>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {isLoading ? (
//                 <tr>
//                   <td
//                     colSpan="6"
//                     className="px-4 py-4 text-center text-gray-600"
//                   >
//                     <svg
//                       className="animate-spin h-5 w-5 text-[#4CAF50] mx-auto"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                       ></circle>
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8v8H4z"
//                       ></path>
//                     </svg>
//                     Loading...
//                   </td>
//                 </tr>
//               ) : currentPatients.length === 0 ? (
//                 <tr>
//                   <td
//                     colSpan="6"
//                     className="px-4 py-4 text-center text-gray-600"
//                   >
//                     No patients found.
//                   </td>
//                 </tr>
//               ) : (
//                 currentPatients.map((patient) => (
//                   <React.Fragment key={patient._id}>
//                     <tr className="hover:bg-[#FFC107]/10 transition-colors duration-200">
//                       {editingPatient === patient._id ? (
//                         <>
//                           <td className="px-4 py-4 whitespace-nowrap">
//                             <input
//                               type="text"
//                               name="name"
//                               className="border border-gray-300 rounded-md p-2 w-full focus:ring-[#4CAF50] focus:border-[#4CAF50] placeholder-gray-500"
//                               value={formData.name}
//                               onChange={handleChange}
//                             />
//                           </td>
//                           <td className="px-4 py-4 whitespace-nowrap">
//                             <input
//                               type="number"
//                               name="age"
//                               className="border border-gray-300 rounded-md p-2 w-full focus:ring-[#4CAF50] focus:border-[#4CAF50] placeholder-gray-500"
//                               value={formData.age}
//                               onChange={handleChange}
//                             />
//                           </td>
//                           <td className="px-4 py-4 whitespace-nowrap">
//                             <select
//                               name="gender"
//                               className="border border-gray-300 rounded-md p-2 w-full focus:ring-[#4CAF50] focus:border-[#4CAF50]"
//                               value={formData.gender}
//                               onChange={handleChange}
//                             >
//                               <option value="Male">Male</option>
//                               <option value="Female">Female</option>
//                             </select>
//                           </td>
//                           <td className="px-4 py-4 whitespace-nowrap">
//                             <input
//                               type="text"
//                               name="phone"
//                               className="border border-gray-300 rounded-md p-2 w-full focus:ring-[#4CAF50] focus:border-[#4CAF50] placeholder-gray-500"
//                               value={formData.phone}
//                               onChange={handleChange}
//                             />
//                           </td>
//                           <td className="px-4 py-4 whitespace-nowrap">
//                             <input
//                               type="text"
//                               name="diagnosis"
//                               className="border border-gray-300 rounded-md p-2 w-full focus:ring-[#4CAF50] focus:border-[#4CAF50] placeholder-gray-500"
//                               value={formData.diagnosis}
//                               onChange={handleChange}
//                             />
//                             <textarea
//                               name="treatment"
//                               className="border border-gray-300 rounded-md p-2 w-full mt-2 focus:ring-[#4CAF50] focus:border-[#4CAF50] placeholder-gray-500"
//                               value={formData.treatment || ""}
//                               onChange={handleChange}
//                               placeholder="Enter treatment"
//                               rows="2"
//                             />
//                           </td>
//                           <td className="px-4 py-4 whitespace-nowrap text-left text-sm font-medium space-x-2">
//                             <button
//                               onClick={handleSave}
//                               className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#4CAF50] hover:bg-[#388E3C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4CAF50]"
//                             >
//                               Save
//                             </button>
//                             <button
//                               onClick={handleCancel}
//                               className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm font-medium rounded-md text-gray-600 hover:bg-[#FFC107] hover:text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4CAF50]"
//                             >
//                               Cancel
//                             </button>
//                           </td>
//                         </>
//                       ) : (
//                         <>
//                           <td className="px-4 py-4 whitespace-nowrap text-[#1A1A1A] font-medium">
//                             {patient.name}
//                           </td>
//                           <td className="px-4 py-4 whitespace-nowrap text-[#1A1A1A]">
//                             {patient.age}
//                           </td>
//                           <td className="px-4 py-4 whitespace-nowrap text-[#1A1A1A]">
//                             {patient.gender}
//                           </td>
//                           <td className="px-4 py-4 whitespace-nowrap text-[#1A1A1A]">
//                             {patient.phone}
//                           </td>
//                           <td className="px-4 py-4 whitespace-nowrap text-[#1A1A1A]">
//                             {patient.diagnosis || "Not specified"}
//                           </td>
//                           <td className="px-4 py-4 whitespace-nowrap text-left text-sm font-medium space-x-2">
//                             <button
//                               onClick={() => handleEdit(patient)}
//                               className="text-[#4CAF50] hover:text-[#388E3C] transition-colors duration-200"
//                               title="Edit"
//                             >
//                               <Edit2Icon size={18} />
//                             </button>
//                             <button
//                               onClick={() => handleDelete(patient._id)}
//                               className="text-[#D32F2F] hover:text-[#B71C1C] transition-colors duration-200"
//                               title="Delete"
//                             >
//                               <Trash2Icon size={18} />
//                             </button>
//                             <button
//                               onClick={() => handleShowDetails(patient._id)}
//                               className="text-[#4CAF50] hover:text-[#388E3C] transition-colors duration-200"
//                               title="View Details"
//                             >
//                               <EyeIcon size={18} />
//                             </button>
//                           </td>
//                         </>
//                       )}
//                     </tr>
//                     {showDetails === patient._id && (
//                       <tr>
//                         <td
//                           colSpan="6"
//                           className="px-4 py-4 bg-[#F5F5F5] rounded-md transition-all duration-200"
//                         >
//                           <div className="p-4 border border-[#4CAF50]/20 rounded-md">
//                             <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
//                               Case Details
//                             </h3>
//                             <p className="text-gray-600">
//                               <strong className="text-[#1A1A1A]">
//                                 Diagnosis:
//                               </strong>{" "}
//                               {patient.diagnosis || "Not specified"}
//                             </p>
//                             <p className="text-gray-600 mt-1">
//                               <strong className="text-[#1A1A1A]">
//                                 Treatment:
//                               </strong>{" "}
//                               {patient.treatment || "Not specified"}
//                             </p>
//                           </div>
//                         </td>
//                       </tr>
//                     )}
//                   </React.Fragment>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Mobile Card View */}
//         <div className="block md:hidden space-y-4">
//           {isLoading ? (
//             <div className="text-center text-gray-600">
//               <svg
//                 className="animate-spin h-5 w-5 text-[#4CAF50] mx-auto"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//               >
//                 <circle
//                   className="opacity-25"
//                   cx="12"
//                   cy="12"
//                   r="10"
//                   stroke="currentColor"
//                   strokeWidth="4"
//                 ></circle>
//                 <path
//                   className="opacity-75"
//                   fill="currentColor"
//                   d="M4 12a8 8 0 018-8v8H4z"
//                 ></path>
//               </svg>
//               Loading...
//             </div>
//           ) : currentPatients.length === 0 ? (
//             <p className="text-center text-gray-600">No patients found.</p>
//           ) : (
//             currentPatients.map((patient) => (
//               <div
//                 key={patient._id}
//                 className="bg-white rounded-lg shadow-md p-4 hover:shadow-[#4CAF50]/20 transition-all duration-200"
//               >
//                 {editingPatient === patient._id ? (
//                   <div className="space-y-3">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">
//                         Name
//                       </label>
//                       <input
//                         type="text"
//                         name="name"
//                         className="border border-gray-300 rounded-md p-2 w-full focus:ring-[#4CAF50] focus:border-[#4CAF50] placeholder-gray-500"
//                         value={formData.name}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">
//                         Age
//                       </label>
//                       <input
//                         type="number"
//                         name="age"
//                         className="border border-gray-300 rounded-md p-2 w-full focus:ring-[#4CAF50] focus:border-[#4CAF50] placeholder-gray-500"
//                         value={formData.age}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">
//                         Gender
//                       </label>
//                       <select
//                         name="gender"
//                         className="border border-gray-300 rounded-md p-2 w-full focus:ring-[#4CAF50] focus:border-[#4CAF50]"
//                         value={formData.gender}
//                         onChange={handleChange}
//                       >
//                         <option value="Male">Male</option>
//                         <option value="Female">Female</option>
//                       </select>
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">
//                         Phone
//                       </label>
//                       <input
//                         type="text"
//                         name="phone"
//                         className="border border-gray-300 rounded-md p-2 w-full focus:ring-[#4CAF50] focus:border-[#4CAF50] placeholder-gray-500"
//                         value={formData.phone}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">
//                         Diagnosis
//                       </label>
//                       <input
//                         type="text"
//                         name="diagnosis"
//                         className="border border-gray-300 rounded-md p-2 w-full focus:ring-[#4CAF50] focus:border-[#4CAF50] placeholder-gray-500"
//                         value={formData.diagnosis}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">
//                         Treatment
//                       </label>
//                       <textarea
//                         name="treatment"
//                         className="border border-gray-300 rounded-md p-2 w-full focus:ring-[#4CAF50] focus:border-[#4CAF50] placeholder-gray-500"
//                         value={formData.treatment || ""}
//                         onChange={handleChange}
//                         placeholder="Enter treatment"
//                         rows="2"
//                       />
//                     </div>
//                     <div className="flex justify-end space-x-2">
//                       <button
//                         onClick={handleSave}
//                         className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#4CAF50] hover:bg-[#388E3C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4CAF50]"
//                       >
//                         Save
//                       </button>
//                       <button
//                         onClick={handleCancel}
//                         className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm font-medium rounded-md text-gray-600 hover:bg-[#FFC107] hover:text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4CAF50]"
//                       >
//                         Cancel
//                       </button>
//                     </div>
//                   </div>
//                 ) : (
//                   <>
//                     <div className="flex justify-between items-center">
//                       <h3 className="text-lg font-medium text-[#1A1A1A]">
//                         {patient.name}
//                       </h3>
//                       <div className="space-x-2 flex">
//                         <button
//                           onClick={() => handleEdit(patient)}
//                           className="text-[#4CAF50] hover:text-[#388E3C]"
//                         >
//                           <Edit2Icon size={18} />
//                         </button>
//                         <button
//                           onClick={() => handleDelete(patient._id)}
//                           className="text-[#D32F2F] hover:text-[#B71C1C]"
//                         >
//                           <Trash2Icon size={18} />
//                         </button>
//                         <button
//                           onClick={() => handleShowDetails(patient._id)}
//                           className="text-[#4CAF50] hover:text-[#388E3C]"
//                         >
//                           <EyeIcon size={18} />
//                         </button>
//                       </div>
//                     </div>
//                     <p className="text-gray-600 mt-1">
//                       <strong>Age:</strong> {patient.age}
//                     </p>
//                     <p className="text-gray-600">
//                       <strong>Gender:</strong> {patient.gender}
//                     </p>
//                     <p className="text-gray-600">
//                       <strong>Phone:</strong> {patient.phone}
//                     </p>
//                     <p className="text-gray-600">
//                       <strong>Diagnosis:</strong>{" "}
//                       {patient.diagnosis || "Not specified"}
//                     </p>
//                     {showDetails === patient._id && (
//                       <div className="mt-2 p-3 bg-[#F5F5F5] rounded-md border border-[#4CAF50]/20">
//                         <h4 className="text-md font-semibold text-[#1A1A1A] mb-1">
//                           Case Details
//                         </h4>
//                         <p className="text-gray-600">
//                           <strong className="text-[#1A1A1A]">Diagnosis:</strong>{" "}
//                           {patient.diagnosis || "Not specified"}
//                         </p>
//                         <p className="text-gray-600 mt-1">
//                           <strong className="text-[#1A1A1A]">Treatment:</strong>{" "}
//                           {patient.treatment || "Not specified"}
//                         </p>
//                       </div>
//                     )}
//                   </>
//                 )}
//               </div>
//             ))
//           )}
//         </div>

//         {/* Pagination */}
//         {totalPages > 1 && (
//           <div className="mt-6 flex justify-center items-center space-x-2">
//             <button
//               onClick={() => handlePageChange(currentPage - 1)}
//               disabled={currentPage === 1}
//               className={`p-2 rounded-md ${
//                 currentPage === 1
//                   ? "text-gray-400 cursor-not-allowed"
//                   : "text-[#4CAF50] hover:bg-[#4CAF50]/10"
//               }`}
//             >
//               <ChevronLeftIcon size={20} />
//             </button>
//             {[...Array(totalPages)].map((_, index) => {
//               const page = index + 1;
//               return (
//                 <button
//                   key={page}
//                   onClick={() => handlePageChange(page)}
//                   className={`px-3 py-1 rounded-md ${
//                     currentPage === page
//                       ? "bg-[#4CAF50] text-white"
//                       : "text-[#4CAF50] hover:bg-[#4CAF50]/10"
//                   }`}
//                 >
//                   {page}
//                 </button>
//               );
//             })}
//             <button
//               onClick={() => handlePageChange(currentPage + 1)}
//               disabled={currentPage === totalPages}
//               className={`p-2 rounded-md ${
//                 currentPage === totalPages
//                   ? "text-gray-400 cursor-not-allowed"
//                   : "text-[#4CAF50] hover:bg-[#4CAF50]/10"
//               }`}
//             >
//               <ChevronRightIcon size={20} />
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PatientsTable;
// import React, { useState, useEffect } from "react";
// import {
//   SearchIcon,
//   Edit2Icon,
//   Trash2Icon,
//   EyeIcon,
//   ChevronLeftIcon,
//   ChevronRightIcon,
//   XIcon,
// } from "lucide-react";

// const PatientsTable = () => {
//   const [patients, setPatients] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [editingPatient, setEditingPatient] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     age: "",
//     gender: "",
//     phone: "",
//     diagnosis: "",
//     treatment: "",
//   });
//   const [showDetails, setShowDetails] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const patientsPerPage = 5; // Number of patients per page

//   useEffect(() => {
//     fetchPatients();
//   }, []);

//   const fetchPatients = async () => {
//     setIsLoading(true);
//     try {
//       const response = await fetch("http://localhost:5000/api/patients");
//       const data = await response.json();
//       if (response.ok) {
//         setPatients(data);
//       }
//     } catch (error) {
//       console.error("Error fetching patients:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSearch = async (e) => {
//     const term = e.target.value;
//     setSearchTerm(term);
//     setCurrentPage(1);
//     if (term.trim() === "") {
//       fetchPatients();
//     } else {
//       try {
//         const response = await fetch(
//           `http://localhost:5000/api/patients/search?term=${term}`
//         );
//         const data = await response.json();
//         if (response.ok) {
//           setPatients(data);
//         }
//       } catch (error) {
//         console.error("Error searching patients:", error);
//       }
//     }
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this patient?")) {
//       try {
//         const response = await fetch(
//           `http://localhost:5000/api/patients/${id}`,
//           { method: "DELETE" }
//         );
//         const data = await response.json();
//         if (response.ok) {
//           setPatients(patients.filter((patient) => patient._id !== id));
//           alert(data.message);
//         } else {
//           alert(data.message);
//         }
//       } catch (error) {
//         console.error("Error deleting patient:", error);
//         alert("An error occurred while deleting");
//       }
//     }
//   };

//   const handleEdit = (patient) => {
//     setEditingPatient(patient._id);
//     setFormData({ ...patient });
//     setShowDetails(null);
//   };

//   const handleSave = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:5000/api/patients/${editingPatient}`,
//         {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );
//       const data = await response.json();
//       if (response.ok) {
//         setPatients(
//           patients.map((p) => (p._id === editingPatient ? data.patient : p))
//         );
//         setEditingPatient(null);
//         alert(data.message);
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       console.error("Error updating patient:", error);
//       alert("An error occurred while saving");
//     }
//   };

//   const handleCancel = () => {
//     setEditingPatient(null);
//     setFormData({
//       name: "",
//       age: "",
//       gender: "",
//       phone: "",
//       diagnosis: "",
//       treatment: "",
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleShowDetails = (patientId) => {
//     if (showDetails === patientId) {
//       setShowDetails(null);
//     } else {
//       setShowDetails(patientId);
//       setEditingPatient(null);
//     }
//   };

//   // Pagination Logic
//   const totalPages = Math.ceil(patients.length / patientsPerPage);
//   const startIndex = (currentPage - 1) * patientsPerPage;
//   const currentPatients = patients.slice(
//     startIndex,
//     startIndex + patientsPerPage
//   );

//   const handlePageChange = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   return (
//     <div className="p-6 md:ml-64 min-h-screen bg-[#F5F5F5] font-sans">
//       <div className="mb-6">
//         <h1 className="text-3xl font-bold text-[#1A1A1A]">Patients List</h1>
//         <p className="text-gray-600 mt-2">Manage patient records</p>
//       </div>
//       <div className="bg-[#FFFFFF] rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-[#4CAF50]/20">
//         <div className="mb-6 relative">
//           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//             <SearchIcon className="h-5 w-5 text-gray-400" />
//           </div>
//           <input
//             type="text"
//             placeholder="Search for a patient..."
//             className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#4CAF50] focus:border-[#4CAF50] placeholder-gray-500 transition-colors duration-200"
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//         </div>

//         {/* Desktop Table View */}
//         <div className="hidden md:block">
//           <table className="w-full divide-y divide-gray-200">
//             <thead className="bg-[#F5F5F5]">
//               <tr>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
//                   Name
//                 </th>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
//                   Age
//                 </th>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
//                   Gender
//                 </th>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
//                   Phone
//                 </th>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
//                   Diagnosis
//                 </th>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {isLoading ? (
//                 <tr>
//                   <td
//                     colSpan="6"
//                     className="px-4 py-4 text-center text-gray-600"
//                   >
//                     <svg
//                       className="animate-spin h-5 w-5 text-[#4CAF50] mx-auto"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                       ></circle>
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8v8H4z"
//                       ></path>
//                     </svg>
//                     Loading...
//                   </td>
//                 </tr>
//               ) : currentPatients.length === 0 ? (
//                 <tr>
//                   <td
//                     colSpan="6"
//                     className="px-4 py-4 text-center text-gray-600"
//                   >
//                     No patients found.
//                   </td>
//                 </tr>
//               ) : (
//                 currentPatients.map((patient) => (
//                   <React.Fragment key={patient._id}>
//                     <tr className="hover:bg-[#FFC107]/10 transition-colors duration-200">
//                       <td className="px-4 py-4 whitespace-nowrap text-[#1A1A1A] font-medium">
//                         {patient.name}
//                       </td>
//                       <td className="px-4 py-4 whitespace-nowrap text-[#1A1A1A]">
//                         {patient.age}
//                       </td>
//                       <td className="px-4 py-4 whitespace-nowrap text-[#1A1A1A]">
//                         {patient.gender}
//                       </td>
//                       <td className="px-4 py-4 whitespace-nowrap text-[#1A1A1A]">
//                         {patient.phone}
//                       </td>
//                       <td className="px-4 py-4 whitespace-nowrap text-[#1A1A1A]">
//                         {patient.diagnosis || "Not specified"}
//                       </td>
//                       <td className="px-4 py-4 whitespace-nowrap text-left text-sm font-medium space-x-2">
//                         <button
//                           onClick={() => handleEdit(patient)}
//                           className="text-[#4CAF50] hover:text-[#388E3C] transition-colors duration-200"
//                           title="Edit"
//                         >
//                           <Edit2Icon size={18} />
//                         </button>
//                         <button
//                           onClick={() => handleDelete(patient._id)}
//                           className="text-[#D32F2F] hover:text-[#B71C1C] transition-colors duration-200"
//                           title="Delete"
//                         >
//                           <Trash2Icon size={18} />
//                         </button>
//                         <button
//                           onClick={() => handleShowDetails(patient._id)}
//                           className="text-[#4CAF50] hover:text-[#388E3C] transition-colors duration-200"
//                           title="View Details"
//                         >
//                           <EyeIcon size={18} />
//                         </button>
//                       </td>
//                     </tr>
//                     {showDetails === patient._id && (
//                       <tr>
//                         <td
//                           colSpan="6"
//                           className="px-4 py-4 bg-[#F5F5F5] rounded-md transition-all duration-200"
//                         >
//                           <div className="p-4 border border-[#4CAF50]/20 rounded-md">
//                             <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
//                               Case Details
//                             </h3>
//                             <p className="text-gray-600">
//                               <strong className="text-[#1A1A1A]">
//                                 Diagnosis:
//                               </strong>{" "}
//                               {patient.diagnosis || "Not specified"}
//                             </p>
//                             <p className="text-gray-600 mt-1">
//                               <strong className="text-[#1A1A1A]">
//                                 Treatment:
//                               </strong>{" "}
//                               {patient.treatment || "Not specified"}
//                             </p>
//                           </div>
//                         </td>
//                       </tr>
//                     )}
//                   </React.Fragment>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Mobile Card View */}
//         <div className="block md:hidden space-y-4">
//           {isLoading ? (
//             <div className="text-center text-gray-600">
//               <svg
//                 className="animate-spin h-5 w-5 text-[#4CAF50] mx-auto"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//               >
//                 <circle
//                   className="opacity-25"
//                   cx="12"
//                   cy="12"
//                   r="10"
//                   stroke="currentColor"
//                   strokeWidth="4"
//                 ></circle>
//                 <path
//                   className="opacity-75"
//                   fill="currentColor"
//                   d="M4 12a8 8 0 018-8v8H4z"
//                 ></path>
//               </svg>
//               Loading...
//             </div>
//           ) : currentPatients.length === 0 ? (
//             <p className="text-center text-gray-600">No patients found.</p>
//           ) : (
//             currentPatients.map((patient) => (
//               <div
//                 key={patient._id}
//                 className="bg-white rounded-lg shadow-md p-4 hover:shadow-[#4CAF50]/20 transition-all duration-200"
//               >
//                 <div className="flex justify-between items-center">
//                   <h3 className="text-lg font-medium text-[#1A1A1A]">
//                     {patient.name}
//                   </h3>
//                   <div className="space-x-2 flex">
//                     <button
//                       onClick={() => handleEdit(patient)}
//                       className="text-[#4CAF50] hover:text-[#388E3C]"
//                     >
//                       <Edit2Icon size={18} />
//                     </button>
//                     <button
//                       onClick={() => handleDelete(patient._id)}
//                       className="text-[#D32F2F] hover:text-[#B71C1C]"
//                     >
//                       <Trash2Icon size={18} />
//                     </button>
//                     <button
//                       onClick={() => handleShowDetails(patient._id)}
//                       className="text-[#4CAF50] hover:text-[#388E3C]"
//                     >
//                       <EyeIcon size={18} />
//                     </button>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 mt-1">
//                   <strong>Age:</strong> {patient.age}
//                 </p>
//                 <p className="text-gray-600">
//                   <strong>Gender:</strong> {patient.gender}
//                 </p>
//                 <p className="text-gray-600">
//                   <strong>Phone:</strong> {patient.phone}
//                 </p>
//                 <p className="text-gray-600">
//                   <strong>Diagnosis:</strong>{" "}
//                   {patient.diagnosis || "Not specified"}
//                 </p>
//                 {showDetails === patient._id && (
//                   <div className="mt-2 p-3 bg-[#F5F5F5] rounded-md border border-[#4CAF50]/20">
//                     <h4 className="text-md font-semibold text-[#1A1A1A] mb-1">
//                       Case Details
//                     </h4>
//                     <p className="text-gray-600">
//                       <strong className="text-[#1A1A1A]">Diagnosis:</strong>{" "}
//                       {patient.diagnosis || "Not specified"}
//                     </p>
//                     <p className="text-gray-600 mt-1">
//                       <strong className="text-[#1A1A1A]">Treatment:</strong>{" "}
//                       {patient.treatment || "Not specified"}
//                     </p>
//                   </div>
//                 )}
//               </div>
//             ))
//           )}
//         </div>

//         {/* Edit Patient Modal */}
//         {editingPatient && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-[#FFFFFF] rounded-xl shadow-lg p-6 w-full max-w-md relative">
//               <button
//                 onClick={handleCancel}
//                 className="absolute top-3 right-3 text-gray-600 hover:text-[#D32F2F]"
//               >
//                 <XIcon size={24} />
//               </button>
//               <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">
//                 Edit Patient
//               </h2>
//               <form className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     className="border border-gray-300 rounded-md p-2 w-full focus:ring-[#4CAF50] focus:border-[#4CAF50] placeholder-gray-500"
//                     value={formData.name}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Age
//                   </label>
//                   <input
//                     type="number"
//                     name="age"
//                     className="border border-gray-300 rounded-md p-2 w-full focus:ring-[#4CAF50] focus:border-[#4CAF50] placeholder-gray-500"
//                     value={formData.age}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Gender
//                   </label>
//                   <select
//                     name="gender"
//                     className="border border-gray-300 rounded-md p-2 w-full focus:ring-[#4CAF50] focus:border-[#4CAF50]"
//                     value={formData.gender}
//                     onChange={handleChange}
//                   >
//                     <option value="Male">Male</option>
//                     <option value="Female">Female</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Phone
//                   </label>
//                   <input
//                     type="text"
//                     name="phone"
//                     className="border border-gray-300 rounded-md p-2 w-full focus:ring-[#4CAF50] focus:border-[#4CAF50] placeholder-gray-500"
//                     value={formData.phone}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Diagnosis
//                   </label>
//                   <input
//                     type="text"
//                     name="diagnosis"
//                     className="border border-gray-300 rounded-md p-2 w-full focus:ring-[#4CAF50] focus:border-[#4CAF50] placeholder-gray-500"
//                     value={formData.diagnosis}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Treatment
//                   </label>
//                   <textarea
//                     name="treatment"
//                     className="border border-gray-300 rounded-md p-2 w-full focus:ring-[#4CAF50] focus:border-[#4CAF50] placeholder-gray-500"
//                     value={formData.treatment || ""}
//                     onChange={handleChange}
//                     placeholder="Enter treatment"
//                     rows="3"
//                   />
//                 </div>
//                 <div className="flex justify-end space-x-2">
//                   <button
//                     type="button"
//                     onClick={handleSave}
//                     className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#4CAF50] hover:bg-[#388E3C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4CAF50]"
//                   >
//                     Save
//                   </button>
//                   <button
//                     type="button"
//                     onClick={handleCancel}
//                     className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-600 hover:bg-[#FFC107] hover:text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4CAF50]"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}

//         {/* Pagination */}
//         {totalPages > 1 && (
//           <div className="mt-6 flex justify-center items-center space-x-2">
//             <button
//               onClick={() => handlePageChange(currentPage - 1)}
//               disabled={currentPage === 1}
//               className={`p-2 rounded-md ${
//                 currentPage === 1
//                   ? "text-gray-400 cursor-not-allowed"
//                   : "text-[#4CAF50] hover:bg-[#4CAF50]/10"
//               }`}
//             >
//               <ChevronLeftIcon size={20} />
//             </button>
//             {[...Array(totalPages)].map((_, index) => {
//               const page = index + 1;
//               return (
//                 <button
//                   key={page}
//                   onClick={() => handlePageChange(page)}
//                   className={`px-3 py-1 rounded-md ${
//                     currentPage === page
//                       ? "bg-[#4CAF50] text-white"
//                       : "text-[#4CAF50] hover:bg-[#4CAF50]/10"
//                   }`}
//                 >
//                   {page}
//                 </button>
//               );
//             })}
//             <button
//               onClick={() => handlePageChange(currentPage + 1)}
//               disabled={currentPage === totalPages}
//               className={`p-2 rounded-md ${
//                 currentPage === totalPages
//                   ? "text-gray-400 cursor-not-allowed"
//                   : "text-[#4CAF50] hover:bg-[#4CAF50]/10"
//               }`}
//             >
//               <ChevronRightIcon size={20} />
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PatientsTable;




// import React, { useState, useEffect } from "react";
// import {
//   SearchIcon,
//   Edit2Icon,
//   Trash2Icon,
//   EyeIcon,
//   ChevronLeftIcon,
//   ChevronRightIcon,
//   XIcon,
// } from "lucide-react";

// const PatientsTable = () => {
//   const [patients, setPatients] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [editingPatient, setEditingPatient] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     age: "",
//     gender: "",
//     phone: "",
//     diagnosis: "",
//     treatment: "",
//   });
//   const [showDetails, setShowDetails] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const patientsPerPage = 5;

//   useEffect(() => {
//     fetchPatients();
//   }, []);

//   const fetchPatients = async () => {
//     setIsLoading(true);
//     try {
//       const response = await fetch("http://localhost:5000/api/patients");
//       const data = await response.json();
//       if (response.ok) {
//         setPatients(data);
//       }
//     } catch (error) {
//       console.error("Error fetching patients:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSearch = async (e) => {
//     const term = e.target.value;
//     setSearchTerm(term);
//     setCurrentPage(1);
//     if (term.trim() === "") {
//       fetchPatients();
//     } else {
//       try {
//         const response = await fetch(
//           `http://localhost:5000/api/patients/search?term=${term}`
//         );
//         const data = await response.json();
//         if (response.ok) {
//           setPatients(data);
//         }
//       } catch (error) {
//         console.error("Error searching patients:", error);
//       }
//     }
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this patient?")) {
//       try {
//         const response = await fetch(
//           `http://localhost:5000/api/patients/${id}`,
//           { method: "DELETE" }
//         );
//         const data = await response.json();
//         if (response.ok) {
//           setPatients(patients.filter((patient) => patient._id !== id));
//           alert(data.message);
//         } else {
//           alert(data.message);
//         }
//       } catch (error) {
//         console.error("Error deleting patient:", error);
//         alert("An error occurred while deleting");
//       }
//     }
//   };

//   const handleEdit = (patient) => {
//     setEditingPatient(patient._id);
//     setFormData({ ...patient });
//     setShowDetails(null);
//   };

//   const handleSave = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:5000/api/patients/${editingPatient}`,
//         {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );
//       const data = await response.json();
//       if (response.ok) {
//         setPatients(
//           patients.map((p) => (p._id === editingPatient ? data.patient : p))
//         );
//         setEditingPatient(null);
//         alert(data.message);
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       console.error("Error updating patient:", error);
//       alert("An error occurred while saving");
//     }
//   };

//   const handleCancel = () => {
//     setEditingPatient(null);
//     setFormData({
//       name: "",
//       age: "",
//       gender: "",
//       phone: "",
//       diagnosis: "",
//       treatment: "",
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleShowDetails = (patientId) => {
//     if (showDetails === patientId) {
//       setShowDetails(null);
//     } else {
//       setShowDetails(patientId);
//       setEditingPatient(null);
//     }
//   };

//   // Pagination Logic
//   const totalPages = Math.ceil(patients.length / patientsPerPage);
//   const startIndex = (currentPage - 1) * patientsPerPage;
//   const currentPatients = patients.slice(
//     startIndex,
//     startIndex + patientsPerPage
//   );

//   const handlePageChange = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   return (
//     <div className="p-6 md:ml-56 min-h-screen bg-[#F5F5F5] font-sans" dir="ltr">
//       <div className="mb-6">
//         <h1 className="text-3xl font-bold text-[#1A1A1A] text-left">
//           Patients List
//         </h1>
//         <p className="text-gray-600 mt-2 text-left">Manage patient records</p>
//       </div>
//       <div className="bg-[#FFFFFF] rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-[#4CAF50]/20">
//         <div className="mb-6 relative">
//           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//             <SearchIcon className="h-5 w-5 text-gray-400" />
//           </div>
//           <input
//             type="text"
//             placeholder="Search for a patient..."
//             className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#4CAF50] focus:border-[#4CAF50] placeholder-gray-500 transition-colors duration-200 text-left"
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//         </div>

//         {/* Desktop Table View */}
//         <div className="hidden md:block">
//           <table className="w-full divide-y divide-gray-200">
//             <thead className="bg-[#F5F5F5]">
//               <tr>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
//                   Name
//                 </th>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
//                   Age
//                 </th>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
//                   Gender
//                 </th>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
//                   Phone
//                 </th>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
//                   Diagnosis
//                 </th>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {isLoading ? (
//                 <tr>
//                   <td
//                     colSpan="6"
//                     className="px-4 py-4 text-center text-gray-600"
//                   >
//                     <svg
//                       className="animate-spin h-5 w-5 text-[#4CAF50] mx-auto"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                       ></circle>
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8v8H4z"
//                       ></path>
//                     </svg>
//                     Loading...
//                   </td>
//                 </tr>
//               ) : currentPatients.length === 0 ? (
//                 <tr>
//                   <td
//                     colSpan="6"
//                     className="px-4 py-4 text-center text-gray-600"
//                   >
//                     No patients found.
//                   </td>
//                 </tr>
//               ) : (
//                 currentPatients.map((patient) => (
//                   <React.Fragment key={patient._id}>
//                     <tr className="hover:bg-[#FFC107]/10 transition-colors duration-200">
//                       <td className="px-4 py-4 whitespace-nowrap text-[#1A1A1A] font-medium text-left">
//                         {patient.name}
//                       </td>
//                       <td className="px-4 py-4 whitespace-nowrap text-[#1A1A1A] text-left">
//                         {patient.age}
//                       </td>
//                       <td className="px-4 py-4 whitespace-nowrap text-[#1A1A1A] text-left">
//                         {patient.gender}
//                       </td>
//                       <td className="px-4 py-4 whitespace-nowrap text-[#1A1A1A] text-left">
//                         {patient.phone}
//                       </td>
//                       <td className="px-4 py-4 whitespace-nowrap text-[#1A1A1A] text-left">
//                         {patient.diagnosis || "Not specified"}
//                       </td>
//                       <td className="px-4 py-4 whitespace-nowrap text-left text-sm font-medium space-x-2">
//                         <button
//                           onClick={() => handleEdit(patient)}
//                           className="text-[#4CAF50] hover:text-[#388E3C] transition-colors duration-200"
//                           title="Edit"
//                         >
//                           <Edit2Icon size={18} />
//                         </button>
//                         <button
//                           onClick={() => handleDelete(patient._id)}
//                           className="text-[#D32F2F] hover:text-[#B71C1C] transition-colors duration-200"
//                           title="Delete"
//                         >
//                           <Trash2Icon size={18} />
//                         </button>
//                         <button
//                           onClick={() => handleShowDetails(patient._id)}
//                           className="text-[#4CAF50] hover:text-[#388E3C] transition-colors duration-200"
//                           title="View Details"
//                         >
//                           <EyeIcon size={18} />
//                         </button>
//                       </td>
//                     </tr>
//                     {showDetails === patient._id && (
//                       <tr>
//                         <td
//                           colSpan="6"
//                           className="px-4 py-4 bg-[#F5F5F5] rounded-md transition-all duration-200"
//                         >
//                           <div className="p-4 border border-[#4CAF50]/20 rounded-md text-left">
//                             <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
//                               Case Details
//                             </h3>
//                             <p className="text-gray-600">
//                               <strong className="text-[#1A1A1A]">
//                                 Diagnosis:
//                               </strong>{" "}
//                               {patient.diagnosis || "Not specified"}
//                             </p>
//                             <p className="text-gray-600 mt-1">
//                               <strong className="text-[#1A1A1A]">
//                                 Treatment:
//                               </strong>{" "}
//                               {patient.treatment || "Not specified"}
//                             </p>
//                           </div>
//                         </td>
//                       </tr>
//                     )}
//                   </React.Fragment>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Mobile Card View */}
//         <div className="block md:hidden space-y-4">
//           {isLoading ? (
//             <div className="text-center text-gray-600">
//               <svg
//                 className="animate-spin h-5 w-5 text-[#4CAF50] mx-auto"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//               >
//                 <circle
//                   className="opacity-25"
//                   cx="12"
//                   cy="12"
//                   r="10"
//                   stroke="currentColor"
//                   strokeWidth="4"
//                 ></circle>
//                 <path
//                   className="opacity-75"
//                   fill="currentColor"
//                   d="M4 12a8 8 0 018-8v8H4z"
//                 ></path>
//               </svg>
//               Loading...
//             </div>
//           ) : currentPatients.length === 0 ? (
//             <p className="text-center text-gray-600">No patients found.</p>
//           ) : (
//             currentPatients.map((patient) => (
//               <div
//                 key={patient._id}
//                 className="bg-white rounded-lg shadow-md p-4 hover:shadow-[#4CAF50]/20 transition-all duration-200"
//               >
//                 <div className="flex justify-between items-center">
//                   <h3 className="text-lg font-medium text-[#1A1A1A]">
//                     {patient.name}
//                   </h3>
//                   <div className="space-x-2 flex">
//                     <button
//                       onClick={() => handleEdit(patient)}
//                       className="text-[#4CAF50] hover:text-[#388E3C]"
//                     >
//                       <Edit2Icon size={18} />
//                     </button>
//                     <button
//                       onClick={() => handleDelete(patient._id)}
//                       className="text-[#D32F2F] hover:text-[#B71C1C]"
//                     >
//                       <Trash2Icon size={18} />
//                     </button>
//                     <button
//                       onClick={() => handleShowDetails(patient._id)}
//                       className="text-[#4CAF50] hover:text-[#388E3C]"
//                     >
//                       <EyeIcon size={18} />
//                     </button>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 mt-1 text-left">
//                   <strong>Age:</strong> {patient.age}
//                 </p>
//                 <p className="text-gray-600 text-left">
//                   <strong>Gender:</strong> {patient.gender}
//                 </p>
//                 <p className="text-gray-600 text-left">
//                   <strong>Phone:</strong> {patient.phone}
//                 </p>
//                 <p className="text-gray-600 text-left">
//                   <strong>Diagnosis:</strong>{" "}
//                   {patient.diagnosis || "Not specified"}
//                 </p>
//                 {showDetails === patient._id && (
//                   <div className="mt-2 p-3 bg-[#F5F5F5] rounded-md border border-[#4CAF50]/20 text-left">
//                     <h4 className="text-md font-semibold text-[#1A1A1A] mb-1">
//                       Case Details
//                     </h4>
//                     <p className="text-gray-600">
//                       <strong className="text-[#1A1A1A]">Diagnosis:</strong>{" "}
//                       {patient.diagnosis || "Not specified"}
//                     </p>
//                     <p className="text-gray-600 mt-1">
//                       <strong className="text-[#1A1A1A]">Treatment:</strong>{" "}
//                       {patient.treatment || "Not specified"}
//                     </p>
//                   </div>
//                 )}
//               </div>
//             ))
//           )}
//         </div>

//         {/* Edit Patient Modal */}
//         {editingPatient && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-[#FFFFFF] rounded-xl shadow-lg p-6 w-full max-w-md relative">
//               <button
//                 onClick={handleCancel}
//                 className="absolute top-3 right-3 text-gray-600 hover:text-[#D32F2F]"
//               >
//                 <XIcon size={24} />
//               </button>
//               <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4 text-left">
//                 Edit Patient
//               </h2>
//               <form className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 text-left">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     className="border border-gray-300 rounded-md p-2 w-full focus:ring-[#4CAF50] focus:border-[#4CAF50] placeholder-gray-500 text-left"
//                     value={formData.name}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 text-left">
//                     Age
//                   </label>
//                   <input
//                     type="number"
//                     name="age"
//                     className="border border-gray-300 rounded-md p-2 w-full focus:ring-[#4CAF50] focus:border-[#4CAF50] placeholder-gray-500 text-left"
//                     value={formData.age}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 text-left">
//                     Gender
//                   </label>
//                   <select
//                     name="gender"
//                     className="border border-gray-300 rounded-md p-2 w-full focus:ring-[#4CAF50] focus:border-[#4CAF50] text-left"
//                     value={formData.gender}
//                     onChange={handleChange}
//                   >
//                     <option value="Male">Male</option>
//                     <option value="Female">Female</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 text-left">
//                     Phone
//                   </label>
//                   <input
//                     type="text"
//                     name="phone"
//                     className="border border-gray-300 rounded-md p-2 w-full focus:ring-[#4CAF50] focus:border-[#4CAF50] placeholder-gray-500 text-left"
//                     value={formData.phone}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 text-left">
//                     Diagnosis
//                   </label>
//                   <input
//                     type="text"
//                     name="diagnosis"
//                     className="border border-gray-300 rounded-md p-2 w-full focus:ring-[#4CAF50] focus:border-[#4CAF50] placeholder-gray-500 text-left"
//                     value={formData.diagnosis}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 text-left">
//                     Treatment
//                   </label>
//                   <textarea
//                     name="treatment"
//                     className="border border-gray-300 rounded-md p-2 w-full focus:ring-[#4CAF50] focus:border-[#4CAF50] placeholder-gray-500 text-left"
//                     value={formData.treatment || ""}
//                     onChange={handleChange}
//                     placeholder="Enter treatment"
//                     rows="3"
//                   />
//                 </div>
//                 <div className="flex justify-end space-x-2">
//                   <button
//                     type="button"
//                     onClick={handleSave}
//                     className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#4CAF50] hover:bg-[#388E3C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4CAF50]"
//                   >
//                     Save
//                   </button>
//                   <button
//                     type="button"
//                     onClick={handleCancel}
//                     className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-600 hover:bg-[#FFC107] hover:text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4CAF50]"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}

//         {/* Pagination */}
//         {totalPages > 1 && (
//           <div className="mt-6 flex justify-center items-center space-x-2">
//             <button
//               onClick={() => handlePageChange(currentPage - 1)}
//               disabled={currentPage === 1}
//               className={`p-2 rounded-md ${
//                 currentPage === 1
//                   ? "text-gray-400 cursor-not-allowed"
//                   : "text-[#4CAF50] hover:bg-[#4CAF50]/10"
//               }`}
//             >
//               <ChevronLeftIcon size={20} />
//             </button>
//             {[...Array(totalPages)].map((_, index) => {
//               const page = index + 1;
//               return (
//                 <button
//                   key={page}
//                   onClick={() => handlePageChange(page)}
//                   className={`px-3 py-1 rounded-md ${
//                     currentPage === page
//                       ? "bg-[#4CAF50] text-white"
//                       : "text-[#4CAF50] hover:bg-[#4CAF50]/10"
//                   }`}
//                 >
//                   {page}
//                 </button>
//               );
//             })}
//             <button
//               onClick={() => handlePageChange(currentPage + 1)}
//               disabled={currentPage === totalPages}
//               className={`p-2 rounded-md ${
//                 currentPage === totalPages
//                   ? "text-gray-400 cursor-not-allowed"
//                   : "text-[#4CAF50] hover:bg-[#4CAF50]/10"
//               }`}
//             >
//               <ChevronRightIcon size={20} />
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PatientsTable;



import React, { useState, useEffect } from "react";
import {
  SearchIcon,
  Edit2Icon,
  Trash2Icon,
  EyeIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XIcon,
} from "lucide-react";
import { ToastContainer, toast } from "react-toastify"; // Import react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import the styles for react-toastify

const PatientsTable = () => {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingPatient, setEditingPatient] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    diagnosis: "",
    treatment: "",
  });
  const [showDetails, setShowDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false); // State for delete confirmation modal
  const [patientToDelete, setPatientToDelete] = useState(null); // Track patient to delete
  const patientsPerPage = 5;

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/patients");
      const data = await response.json();
      if (response.ok) {
        setPatients(data);
      }
    } catch (error) {
      console.error("Error fetching patients:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    setCurrentPage(1);
    if (term.trim() === "") {
      fetchPatients();
    } else {
      try {
        const response = await fetch(
          `http://localhost:5000/api/patients/search?term=${term}`
        );
        const data = await response.json();
        if (response.ok) {
          setPatients(data);
        }
      } catch (error) {
        console.error("Error searching patients:", error);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/patients/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (response.ok) {
        setPatients(patients.filter((patient) => patient._id !== id));
        toast.success(data.message); // Replace alert with toast.success
      } else {
        toast.error(data.message); // Replace alert with toast.error
      }
    } catch (error) {
      console.error("Error deleting patient:", error);
      toast.error("An error occurred while deleting"); // Replace alert with toast.error
    }
  };

  const handleDeleteClick = (id) => {
    // Show the confirmation modal instead of window.confirm
    setPatientToDelete(id);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    handleDelete(patientToDelete);
    setShowDeleteConfirm(false);
    setPatientToDelete(null);
  };

  const cancelDelete = () => {
    setShowDeleteConfirm(false);
    setPatientToDelete(null);
  };

  const handleEdit = (patient) => {
    setEditingPatient(patient._id);
    setFormData({ ...patient });
    setShowDetails(null);
  };

  const handleSave = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/patients/${editingPatient}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (response.ok) {
        setPatients(
          patients.map((p) => (p._id === editingPatient ? data.patient : p))
        );
        setEditingPatient(null);
        toast.success(data.message); // Replace alert with toast.success
      } else {
        toast.error(data.message); // Replace alert with toast.error
      }
    } catch (error) {
      console.error("Error updating patient:", error);
      toast.error("An error occurred while saving"); // Replace alert with toast.error
    }
  };

  const handleCancel = () => {
    setEditingPatient(null);
    setFormData({
      name: "",
      age: "",
      gender: "",
      phone: "",
      diagnosis: "",
      treatment: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleShowDetails = (patientId) => {
    if (showDetails === patientId) {
      setShowDetails(null);
    } else {
      setShowDetails(patientId);
      setEditingPatient(null);
    }
  };

  // Pagination Logic
  const totalPages = Math.ceil(patients.length / patientsPerPage);
  const startIndex = (currentPage - 1) * patientsPerPage;
  const currentPatients = patients.slice(
    startIndex,
    startIndex + patientsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-6 md:ml-56 min-h-screen bg-[#F5F5F5] font-sans" dir="ltr">
      {/* Add ToastContainer to render the notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#1A1A1A] text-left">
          Patients List
        </h1>
        <p className="text-gray-600 mt-2 text-left">Manage patient records</p>
      </div>
      <div className="bg-[#FFFFFF] rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-[#4CAF50]/20">
        <div className="mb-6 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search for a patient..."
            className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#4CAF50] focus:border-[#4CAF50] placeholder-gray-500 transition-colors duration-200 text-left"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-[#F5F5F5]">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Age
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Gender
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Diagnosis
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {isLoading ? (
                <tr>
                  <td
                    colSpan="6"
                    className="px-4 py-4 text-center text-gray-600"
                  >
                    <svg
                      className="animate-spin h-5 w-5 text-[#4CAF50] mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                    Loading...
                  </td>
                </tr>
              ) : currentPatients.length === 0 ? (
                <tr>
                  <td
                    colSpan="6"
                    className="px-4 py-4 text-center text-gray-600"
                  >
                    No patients found.
                  </td>
                </tr>
              ) : (
                currentPatients.map((patient) => (
                  <React.Fragment key={patient._id}>
                    <tr className="hover:bg-[#FFC107]/10 transition-colors duration-200">
                      <td className="px-4 py-4 whitespace-nowrap text-[#1A1A1A] font-medium text-left">
                        {patient.name}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-[#1A1A1A] text-left">
                        {patient.age}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-[#1A1A1A] text-left">
                        {patient.gender}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-[#1A1A1A] text-left">
                        {patient.phone}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-[#1A1A1A] text-left">
                        {patient.diagnosis || "Not specified"}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-left text-sm font-medium space-x-2">
                        <button
                          onClick={() => handleEdit(patient)}
                          className="text-[#4CAF50] hover:text-[#388E3C] transition-colors duration-200"
                          title="Edit"
                        >
                          <Edit2Icon size={18} />
                        </button>
                        <button
                          onClick={() => handleDeleteClick(patient._id)} // Show confirmation modal
                          className="text-[#D32F2F] hover:text-[#B71C1C] transition-colors duration-200"
                          title="Delete"
                        >
                          <Trash2Icon size={18} />
                        </button>
                        <button
                          onClick={() => handleShowDetails(patient._id)}
                          className="text-[#4CAF50] hover:text-[#388E3C] transition-colors duration-200"
                          title="View Details"
                        >
                          <EyeIcon size={18} />
                        </button>
                      </td>
                    </tr>
                    {showDetails === patient._id && (
                      <tr>
                        <td
                          colSpan="6"
                          className="px-4 py-4 bg-[#F5F5F5] rounded-md transition-all duration-200"
                        >
                          <div className="p-4 border border-[#4CAF50]/20 rounded-md text-left">
                            <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
                              Case Details
                            </h3>
                            <p className="text-gray-600">
                              <strong className="text-[#1A1A1A]">
                                Diagnosis:
                              </strong>{" "}
                              {patient.diagnosis || "Not specified"}
                            </p>
                            <p className="text-gray-600 mt-1">
                              <strong className="text-[#1A1A1A]">
                                Treatment:
                              </strong>{" "}
                              {patient.treatment || "Not specified"}
                            </p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="block md:hidden space-y-4">
          {isLoading ? (
            <div className="text-center text-gray-600">
              <svg
                className="animate-spin h-5 w-5 text-[#4CAF50] mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              Loading...
            </div>
          ) : currentPatients.length === 0 ? (
            <p className="text-center text-gray-600">No patients found.</p>
          ) : (
            currentPatients.map((patient) => (
              <div
                key={patient._id}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-[#4CAF50]/20 transition-all duration-200"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-[#1A1A1A]">
                    {patient.name}
                  </h3>
                  <div className="space-x-2 flex">
                    <button
                      onClick={() => handleEdit(patient)}
                      className="text-[#4CAF50] hover:text-[#388E3C]"
                    >
                      <Edit2Icon size={18} />
                    </button>
                    <button
                      onClick={() => handleDeleteClick(patient._id)} // Show confirmation modal
                      className="text-[#D32F2F] hover:text-[#B71C1C]"
                    >
                      <Trash2Icon size={18} />
                    </button>
                    <button
                      onClick={() => handleShowDetails(patient._id)}
                      className="text-[#4CAF50] hover:text-[#388E3C]"
                    >
                      <EyeIcon size={18} />
                    </button>
                  </div>
                </div>
                <p className="text-gray-600 mt-1 text-left">
                  <strong>Age:</strong> {patient.age}
                </p>
                <p className="text-gray-600 text-left">
                  <strong>Gender:</strong> {patient.gender}
                </p>
                <p className="text-gray-600 text-left">
                  <strong>Phone:</strong> {patient.phone}
                </p>
                <p className="text-gray-600 text-left">
                  <strong>Diagnosis:</strong>{" "}
                  {patient.diagnosis || "Not specified"}
                </p>
                {showDetails === patient._id && (
                  <div className="mt-2 p-3 bg-[#F5F5F5] rounded-md border border-[#4CAF50]/20 text-left">
                    <h4 className="text-md font-semibold text-[#1A1A1A] mb-1">
                      Case Details
                    </h4>
                    <p className="text-gray-600">
                      <strong className="text-[#1A1A1A]">Diagnosis:</strong>{" "}
                      {patient.diagnosis || "Not specified"}
                    </p>
                    <p className="text-gray-600 mt-1">
                      <strong className="text-[#1A1A1A]">Treatment:</strong>{" "}
                      {patient.treatment || "Not specified"}
                    </p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Delete Confirmation Modal */}
        {showDeleteConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-[#FFFFFF] rounded-xl shadow-lg p-6 w-full max-w-sm relative">
              <button
                onClick={cancelDelete}
                className="absolute top-3 right-3 text-gray-600 hover:text-[#D32F2F]"
              >
                <XIcon size={24} />
              </button>
              <h2 className="text-xl font-bold text-[#1A1A1A] mb-4 text-left">
                Confirm Deletion
              </h2>
              <p className="text-gray-600 mb-6 text-left">
                Are you sure you want to delete this patient? This action cannot
                be undone.
              </p>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={confirmDelete}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#D32F2F] hover:bg-[#B71C1C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D32F2F]"
                >
                  Delete
                </button>
                <button
                  onClick={cancelDelete}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-600 hover:bg-[#FFC107] hover:text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4CAF50]"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Edit Patient Modal */}
        {editingPatient && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-[#FFFFFF] rounded-xl shadow-lg p-6 w-full max-w-md relative">
              <button
                onClick={handleCancel}
                className="absolute top-3 right-3 text-gray-600 hover:text-[#D32F2F]"
              >
                <XIcon size={24} />
              </button>
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4 text-left">
                Edit Patient
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 text-left">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="border border-gray-300 rounded-md p-2 w-full focus:ring-[#4CAF50] focus:border-[#4CAF50] placeholder-gray-500 text-left"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 text-left">
                    Age
                  </label>
                  <input
                    type="number"
                    name="age"
                    className="border border-gray-300 rounded-md p-2 w-full focus:ring-[#4CAF50] focus:border-[#4CAF50] placeholder-gray-500 text-left"
                    value={formData.age}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 text-left">
                    Gender
                  </label>
                  <select
                    name="gender"
                    className="border border-gray-300 rounded-md p-2 w-full focus:ring-[#4CAF50] focus:border-[#4CAF50] text-left"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 text-left">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    className="border border-gray-300 rounded-md p-2 w-full focus:ring-[#4CAF50] focus:border-[#4CAF50] placeholder-gray-500 text-left"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 text-left">
                    Diagnosis
                  </label>
                  <input
                    type="text"
                    name="diagnosis"
                    className="border border-gray-300 rounded-md p-2 w-full focus:ring-[#4CAF50] focus:border-[#4CAF50] placeholder-gray-500 text-left"
                    value={formData.diagnosis}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 text-left">
                    Treatment
                  </label>
                  <textarea
                    name="treatment"
                    className="border border-gray-300 rounded-md p-2 w-full focus:ring-[#4CAF50] focus:border-[#4CAF50] placeholder-gray-500 text-left"
                    value={formData.treatment || ""}
                    onChange={handleChange}
                    placeholder="Enter treatment"
                    rows="3"
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={handleSave}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#4CAF50] hover:bg-[#388E3C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4CAF50]"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-600 hover:bg-[#FFC107] hover:text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4CAF50]"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-6 flex justify-center items-center space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 rounded-md ${
                currentPage === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-[#4CAF50] hover:bg-[#4CAF50]/10"
              }`}
            >
              <ChevronLeftIcon size={20} />
            </button>
            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-1 rounded-md ${
                    currentPage === page
                      ? "bg-[#4CAF50] text-white"
                      : "text-[#4CAF50] hover:bg-[#4CAF50]/10"
                  }`}
                >
                  {page}
                </button>
              );
            })}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-md ${
                currentPage === totalPages
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-[#4CAF50] hover:bg-[#4CAF50]/10"
              }`}
            >
              <ChevronRightIcon size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientsTable;