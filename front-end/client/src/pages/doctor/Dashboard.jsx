// import React, { useState, useEffect } from "react";
// import { UsersIcon, UserPlusIcon, UserCheckIcon } from "lucide-react";

// const StatCard = ({ title, value, icon, color }) => {
//   return (
//     <div
//       className={`bg-white rounded-xl shadow-lg p-6 flex items-center transition-transform hover:scale-105 ${color}`}
//     >
//       <div className="p-4 rounded-full mr-4 bg-gradient-to-br from-opacity-20 to-opacity-40">
//         {icon}
//       </div>
//       <div>
//         <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
//         <p className="text-3xl font-bold text-gray-900">{value}</p>
//       </div>
//     </div>
//   );
// };

// const Dashboard = () => {
//   const [stats, setStats] = useState({
//     totalPatients: 0,
//     newPatients: 0,
//     activePatients: 0,
//   });

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/patients");
//         const patients = await response.json();
//         if (response.ok) {
//           const total = patients.length;
//           const newPatients = patients.filter(
//             (p) => new Date(p.createdAt).getMonth() === new Date().getMonth()
//           ).length;
//           const activePatients = patients.filter((p) => p.diagnosis).length;
//           setStats({
//             totalPatients: total,
//             newPatients: newPatients,
//             activePatients: activePatients,
//           });
//         }
//       } catch (error) {
//         console.error("Error fetching stats:", error);
//       }
//     };
//     fetchStats();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 font-cairo">
//       <div className="max-w-6xl mx-auto">
//         {/* <div className="mb-8">
//           <h1 className="text-4xl font-bold text-gray-900">لوحة التحكم</h1>
//           <p className="text-gray-600 mt-2">مرحباً بك مجدداً، د. أحمد</p>
//         </div> */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <StatCard
//             title="إجمالي المرضى"
//             value={stats.totalPatients}
//             icon={<UsersIcon size={28} className="text-blue-600" />}
//             color="hover:shadow-blue-200"
//           />
//           <StatCard
//             title="مرضى جدد (هذا الشهر)"
//             value={stats.newPatients}
//             icon={<UserPlusIcon size={28} className="text-green-600" />}
//             color="hover:shadow-green-200"
//           />
//           <StatCard
//             title="مرضى نشطون"
//             value={stats.activePatients}
//             icon={<UserCheckIcon size={28} className="text-purple-600" />}
//             color="hover:shadow-purple-200"
//           />
//         </div>
//         <div className="mt-10 bg-white rounded-xl shadow-lg p-6">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//             ملخص النشاط
//           </h2>
//           <div className="border-t pt-4">
//             <p className="text-gray-600 leading-relaxed">
//               لقد قمت بإدارة{" "}
//               <span className="font-bold">{stats.totalPatients}</span> مريضاً،
//               وتمت إضافة <span className="font-bold">{stats.newPatients}</span>{" "}
//               مرضى جدد هذا الشهر.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
// import React, { useState, useEffect } from "react";
// import { UsersIcon, UserPlusIcon, UserCheckIcon } from "lucide-react";

// const StatCard = ({ title, value, icon }) => {
//   return (
//     <div className="bg-[#FFFFFF] rounded-2xl shadow-md p-6 flex items-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#4CAF50]/10">
//       <div className="p-4 rounded-full mr-4 bg-[#4CAF50]/10">
//         {React.cloneElement(icon, { className: "text-[#4CAF50] w-8 h-8" })}
//       </div>
//       <div>
//         <h3 className="text-base font-medium text-[#1A1A1A] uppercase tracking-wide">
//           {title}
//         </h3>
//         <p className="text-4xl font-extrabold text-[#1A1A1A] mt-1">{value}</p>
//       </div>
//     </div>
//   );
// };

// const Dashboard = () => {
//   const [stats, setStats] = useState({
//     totalPatients: 0,
//     newPatients: 0,
//     activePatients: 0,
//   });

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/patients");
//         const patients = await response.json();
//         if (response.ok) {
//           const total = patients.length;
//           const newPatients = patients.filter(
//             (p) => new Date(p.createdAt).getMonth() === new Date().getMonth()
//           ).length;
//           const activePatients = patients.filter((p) => p.diagnosis).length;
//           setStats({
//             totalPatients: total,
//             newPatients: newPatients,
//             activePatients: activePatients,
//           });
//         }
//       } catch (error) {
//         console.error("Error fetching stats:", error);
//       }
//     };
//     fetchStats();
//   }, []);

//   return (
//     <div
//       dir="ltr"
//       className="min-h-screen bg-gradient-to-br from-[#F5F5F5] to-[#E8F5E9] p-8 font-sans overflow-x-hidden"
//     >
//       <div className="max-w-7xl mx-auto md:ml-64">
//         {/* Header Section */}
//         <div className="mb-10 flex items-center justify-between">
//           <div>
//             <h1 className="text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
//               Welcome, Dr. Ahmed
//             </h1>
//             <p className="text-gray-500 mt-3 text-lg">
//               Your healthcare dashboard at a glance
//             </p>
//           </div>
//           <div className="hidden md:block">
//             <div className="bg-[#4CAF50]/10 px-4 py-2 rounded-full text-[#4CAF50] font-medium">
//               Last updated: {new Date().toLocaleTimeString()}
//             </div>
//           </div>
//         </div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           <StatCard
//             title="Total Patients"
//             value={stats.totalPatients}
//             icon={<UsersIcon />}
//           />
//           <StatCard
//             title="New Patients"
//             value={stats.newPatients}
//             icon={<UserPlusIcon />}
//           />
//           <StatCard
//             title="Active Patients"
//             value={stats.activePatients}
//             icon={<UserCheckIcon />}
//           />
//         </div>

//         {/* Activity Summary */}
//         <div className="mt-12 bg-[#FFFFFF] rounded-2xl shadow-md p-8 transition-all duration-300 hover:shadow-[#4CAF50]/10">
//           <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-6">
//             Your Activity Overview
//           </h2>
//           <div className="flex flex-col md:flex-row gap-6">
//             <div className="flex-1">
//               <p className="text-gray-600 leading-relaxed">
//                 You’ve managed{" "}
//                 <span className="font-bold text-[#4CAF50]">
//                   {stats.totalPatients}
//                 </span>{" "}
//                 patients in total, with{" "}
//                 <span className="font-bold text-[#4CAF50]">
//                   {stats.newPatients}
//                 </span>{" "}
//                 new patients added this month.
//               </p>
//             </div>
//             <div className="flex-1 grid grid-cols-2 gap-4">
//               <div className="bg-[#4CAF50]/5 p-4 rounded-lg text-center">
//                 <p className="text-[#4CAF50] font-bold text-2xl">
//                   {stats.activePatients}
//                 </p>
//                 <p className="text-gray-600 text-sm">Active Cases</p>
//               </div>
//               <div className="bg-[#4CAF50]/5 p-4 rounded-lg text-center">
//                 <p className="text-[#4CAF50] font-bold text-2xl">
//                   {stats.newPatients}
//                 </p>
//                 <p className="text-gray-600 text-sm">New Admissions</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState, useEffect } from "react";
import { UsersIcon, UserPlusIcon, UserCheckIcon } from "lucide-react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// تسجيل مكونات Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const StatCard = ({ title, value, icon }) => {
  return (
    <div className="bg-[#FFFFFF] rounded-2xl shadow-md p-6 flex items-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#4CAF50]/10">
      <div className="p-4 rounded-full mr-4 bg-[#4CAF50]/10">
        {React.cloneElement(icon, { className: "text-[#4CAF50] w-8 h-8" })}
      </div>
      <div>
        <h3 className="text-base font-medium text-[#1A1A1A] uppercase tracking-wide">
          {title}
        </h3>
        <p className="text-4xl font-extrabold text-[#1A1A1A] mt-1">{value}</p>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalPatients: 0,
    newPatients: 0,
    activePatients: 0,
  });

  // بيانات افتراضية للرسم البياني
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "New Patients",
        data: [10, 15, 8, 20, 12, stats.newPatients || 5], // استخدام stats.newPatients للشهر الحالي
        borderColor: "#4CAF50",
        backgroundColor: "#4CAF50",
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#1A1A1A",
        },
      },
      title: {
        display: true,
        text: "New Patients Over Time",
        color: "#1A1A1A",
        font: {
          size: 16,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#1A1A1A",
        },
      },
      y: {
        ticks: {
          color: "#1A1A1A",
        },
        beginAtZero: true,
      },
    },
  };

  // useEffect(() => {
  //   const fetchStats = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5000/api/patients");
  //       const patients = await response.json();
  //       if (response.ok) {
  //         const total = patients.length;
  //         const newPatients = patients.filter(
  //           (p) => new Date(p.createdAt).getMonth() === new Date().getMonth()
  //         ).length;
  //         const activePatients = patients.filter((p) => p.diagnosis).length;
  //         setStats({
  //           totalPatients: total,
  //           newPatients: newPatients,
  //           activePatients: activePatients,
  //         });
  //       }
  //     } catch (error) {
  //       console.error("Error fetching stats:", error);
  //     }
  //   };
  //   fetchStats();
  // }, []);
useEffect(() => {
  const fetchStats = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/patients");
      const patients = await response.json();
      if (response.ok) {
        const total = patients.length;
        const newPatients = patients.filter(
          (p) => new Date(p.createdAt).getMonth() === new Date().getMonth()
        ).length;
        const activePatients = patients.filter((p) => p.diagnosis).length;

        // تجميع بيانات الرسم البياني
        const monthlyData = Array(6).fill(0);
        patients.forEach((p) => {
          const monthDiff =
            new Date().getMonth() - new Date(p.createdAt).getMonth();
          if (monthDiff >= 0 && monthDiff < 6) {
            monthlyData[5 - monthDiff]++;
          }
        });

        setStats({
          totalPatients: total,
          newPatients: newPatients,
          activePatients: activePatients,
          chartData: monthlyData, // يمكن تمريرها لحالة منفصلة
        });
      }
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };
  fetchStats();
}, []);
  return (
    <div
      dir="ltr"
      className="min-h-screen bg-gradient-to-br from-[#F5F5F5] to-[#E8F5E9] p-8 font-sans overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto md:ml-64">
        {/* Header Section */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
              Welcome, Dr. Ahmed
            </h1>
            <p className="text-gray-500 mt-3 text-lg">
              Your healthcare dashboard at a glance
            </p>
          </div>
          <div className="hidden md:block">
            <div className="bg-[#4CAF50]/10 px-4 py-2 rounded-full text-[#4CAF50] font-medium">
              Last updated: {new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard
            title="Total Patients"
            value={stats.totalPatients}
            icon={<UsersIcon />}
          />
          <StatCard
            title="New Patients"
            value={stats.newPatients}
            icon={<UserPlusIcon />}
          />
          <StatCard
            title="Active Patients"
            value={stats.activePatients}
            icon={<UserCheckIcon />}
          />
        </div>

        {/* Activity Summary */}
        <div className="mt-12 bg-[#FFFFFF] rounded-2xl shadow-md p-8 transition-all duration-300 hover:shadow-[#4CAF50]/10">
          <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-6">
            Your Activity Overview
          </h2>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Text and Mini Stats */}
            <div className="flex-1">
              <p className="text-gray-600 leading-relaxed mb-6">
                You’ve managed{" "}
                <span className="font-bold text-[#4CAF50]">
                  {stats.totalPatients}
                </span>{" "}
                patients in total, with{" "}
                <span className="font-bold text-[#4CAF50]">
                  {stats.newPatients}
                </span>{" "}
                new patients added this month.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#4CAF50]/5 p-4 rounded-lg text-center">
                  <p className="text-[#4CAF50] font-bold text-2xl">
                    {stats.activePatients}
                  </p>
                  <p className="text-gray-600 text-sm">Active Cases</p>
                </div>
                <div className="bg-[#4CAF50]/5 p-4 rounded-lg text-center">
                  <p className="text-[#4CAF50] font-bold text-2xl">
                    {stats.newPatients}
                  </p>
                  <p className="text-gray-600 text-sm">New Admissions</p>
                </div>
              </div>
            </div>
            {/* Chart */}
            <div className="flex-1 bg-[#F5F5F5] p-6 rounded-xl">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;