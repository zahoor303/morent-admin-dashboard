// "use client";

// const ThemedIcon = ({ icon: Icon, className }: { icon: React.ElementType; className?: string }) => (
//   <Icon className={className || ''} />
// );

// import Link from "next/link";

// import { useState } from "react";
// import { FaBox, FaChartBar, FaCar, FaUser, FaCarAlt, FaTimes, FaBars, FaSignOutAlt } from "react-icons/fa";
// import { useRouter } from "next/navigation";

// const SideBar = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const router = useRouter();

//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn");
//     router.push("/");
//   };

//   return (
//     <div className="z-50">
//       {/* Mobile Header */}
//       {!sidebarOpen && (
//         <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#121212] to-[#1a1a1a] text-white h-16 w-full fixed top-0 left-0 z-10 md:hidden shadow-xl ">
//           <h1 className="text-xl font-semibold font-[Poppins] tracking-wide">Rental Car</h1>
//           <button
//             onClick={() => setSidebarOpen(true)}
//             className="text-white text-2xl hover:text-blue-400 transition-colors"
//           >
//             <FaBars />
//           </button>
//         </div>
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } md:translate-x-0 transform fixed top-0 left-0 w-64 md:w-64 bg-gradient-to-b from-[#121212] to-[#1a1a1a] text-white h-full transition-transform duration-300 z-30 shadow-2xl`}
//       >
//         <div className="flex justify-between items-center px-4 md:px-6 py-4 md:py-6 border-b border-white/10">
//           <div className="flex items-center gap-2 md:gap-4">
           
//             <Link href="/">
//               <h1 className="text-2xl font-bold font-[Poppins] tracking-wide text-white">
//                 Rental Car
//               </h1>
//             </Link>
//           </div>
//           <button
//             onClick={() => setSidebarOpen(false)}
//             className="text-white/80 hover:text-blue-400 text-xl md:hidden transition-colors"
//           >
//             <FaTimes />
//           </button>
//         </div>

//         <nav className="flex flex-col p-4 gap-4 mt-2 overflow-y-auto">
//           <Link 
//             href="/admin" 
//             className="flex items-center gap-4 hover:bg-white/10 p-3 rounded-xl transition-all duration-300 group"
//           >
//             <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
//               <ThemedIcon icon={FaChartBar} className="w-5 h-5 text-blue-500" />
//             </div>
//             <span className="font-medium tracking-wide text-sm md:text-base">Dashboard</span>
//           </Link>

//           <Link 
//             href="/admin/product" 
//             className="flex items-center gap-4 hover:bg-white/10 p-3 rounded-xl transition-all duration-300 group"
//           >
//             <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
//               <ThemedIcon icon={FaBox} className="w-5 h-5 text-blue-500" />
//             </div>
//             <span className="font-medium tracking-wide">Products</span>
//           </Link>

//           <Link 
//             href="/admin/categories" 
//             className="flex items-center gap-4 hover:bg-white/10 p-3 rounded-xl transition-all duration-300 group"
//           >
//             <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
//               <ThemedIcon icon={FaCar} className="w-5 h-5 text-blue-500" />
//             </div>
//             <span className="font-medium tracking-wide">Car Inventory</span>
//           </Link>

//           <Link 
//             href="/admin/customers" 
//             className="flex items-center gap-4 hover:bg-white/10 p-3 rounded-xl transition-all duration-300 group"
//           >
//             <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
//               <ThemedIcon icon={FaCarAlt} className="w-5 h-5 text-blue-500" />
//             </div>
//             <span className="font-medium tracking-wide">Car Information</span>
//           </Link>

//           <Link 
//             href="/admin/orders" 
//             className="flex items-center gap-4 hover:bg-white/10 p-3 rounded-xl transition-all duration-300 group"
//           >
//             <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
//               <ThemedIcon icon={FaUser} className="w-5 h-5 text-blue-500" />
//             </div>
//             <span className="font-medium tracking-wide">Orders</span>
//           </Link>

//           <button
//             onClick={handleLogout}
//             className="flex items-center gap-4 hover:bg-red-500/10 p-3 rounded-xl transition-all duration-300 group mt-6"
//           >
//             <div className="p-2 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
//               <ThemedIcon icon={FaSignOutAlt} className="w-5 h-5 text-red-400 group-hover:text-red-500" />
//             </div>
//             <span className="font-medium tracking-wide text-red-400 group-hover:text-red-500">
//               Logout
//             </span>
//           </button>
//         </nav>
//       </aside>

//       {/* Overlay */}
//       {sidebarOpen && (
//         <div
//           onClick={() => setSidebarOpen(false)}
//           className="fixed inset-0 bg-black/70 backdrop-blur-sm md:hidden z-20"
//         ></div>
//       )}
//     </div>
//   );
// };

// export default SideBar;








// "use client";

// const ThemedIcon = ({ icon: Icon, className }: { icon: React.ElementType; className?: string }) => (
//   <Icon className={className || ''} />
// );

// import Link from "next/link";
// import { useState } from "react";
// import { FaBox, FaChartBar, FaCar, FaUser, FaCarAlt, FaTimes, FaBars, FaSignOutAlt } from "react-icons/fa";
// import { useRouter } from "next/navigation";

// const SideBar = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const router = useRouter();

//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn");
//     router.push("/");
//   };

//   return (
//     <div className="z-50">
//       {/* Mobile Header */}
//       {!sidebarOpen && (
//         <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white h-16 w-full fixed top-0 left-0 z-10 md:hidden shadow-xl">
//           <h1 className="text-xl font-semibold font-[Poppins] tracking-wide">Rental Car</h1>
//           <button
//             onClick={() => setSidebarOpen(true)}
//             className="text-white text-2xl hover:text-indigo-300 transition-colors"
//           >
//             <FaBars />
//           </button>
//         </div>
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } md:translate-x-0 transform fixed top-0 left-0 w-64 md:w-64 bg-gradient-to-b from-purple-800 to-indigo-800 text-white h-full transition-transform duration-300 z-30 shadow-2xl rounded-l-xl`}
//       >
//         <div className="flex justify-between items-center px-4 md:px-6 py-4 md:py-6 border-b border-white/20">
//           <div className="flex items-center gap-2 md:gap-4">
//             <Link href="/">
//               <h1 className="text-2xl font-bold font-[Poppins] tracking-wide text-white">
//                 Rental Car
//               </h1>
//             </Link>
//           </div>
//           <button
//             onClick={() => setSidebarOpen(false)}
//             className="text-white/80 hover:text-indigo-300 text-xl md:hidden transition-colors"
//           >
//             <FaTimes />
//           </button>
//         </div>

//         <nav className="flex flex-col p-4 gap-4 mt-2 overflow-y-auto">
//           <Link 
//             href="/admin" 
//             className="flex items-center gap-4 hover:bg-white/10 p-3 rounded-xl transition-all duration-300 group"
//           >
//             <div className="p-2 bg-indigo-500/10 rounded-lg group-hover:bg-indigo-500/20 transition-colors">
//               <ThemedIcon icon={FaChartBar} className="w-5 h-5 text-indigo-500" />
//             </div>
//             <span className="font-medium tracking-wide text-sm md:text-base">Dashboard</span>
//           </Link>

//           <Link 
//             href="/admin/product" 
//             className="flex items-center gap-4 hover:bg-white/10 p-3 rounded-xl transition-all duration-300 group"
//           >
//             <div className="p-2 bg-indigo-500/10 rounded-lg group-hover:bg-indigo-500/20 transition-colors">
//               <ThemedIcon icon={FaBox} className="w-5 h-5 text-indigo-500" />
//             </div>
//             <span className="font-medium tracking-wide">Products</span>
//           </Link>

//           <Link 
//             href="/admin/categories" 
//             className="flex items-center gap-4 hover:bg-white/10 p-3 rounded-xl transition-all duration-300 group"
//           >
//             <div className="p-2 bg-indigo-500/10 rounded-lg group-hover:bg-indigo-500/20 transition-colors">
//               <ThemedIcon icon={FaCar} className="w-5 h-5 text-indigo-500" />
//             </div>
//             <span className="font-medium tracking-wide">Car Inventory</span>
//           </Link>

//           <Link 
//             href="/admin/customers" 
//             className="flex items-center gap-4 hover:bg-white/10 p-3 rounded-xl transition-all duration-300 group"
//           >
//             <div className="p-2 bg-indigo-500/10 rounded-lg group-hover:bg-indigo-500/20 transition-colors">
//               <ThemedIcon icon={FaCarAlt} className="w-5 h-5 text-indigo-500" />
//             </div>
//             <span className="font-medium tracking-wide">Car Information</span>
//           </Link>

//           <Link 
//             href="/admin/orders" 
//             className="flex items-center gap-4 hover:bg-white/10 p-3 rounded-xl transition-all duration-300 group"
//           >
//             <div className="p-2 bg-indigo-500/10 rounded-lg group-hover:bg-indigo-500/20 transition-colors">
//               <ThemedIcon icon={FaUser} className="w-5 h-5 text-indigo-500" />
//             </div>
//             <span className="font-medium tracking-wide">Orders</span>
//           </Link>

//           <button
//             onClick={handleLogout}
//             className="flex items-center gap-4 hover:bg-red-500/10 p-3 rounded-xl transition-all duration-300 group mt-6"
//           >
//             <div className="p-2 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
//               <ThemedIcon icon={FaSignOutAlt} className="w-5 h-5 text-red-400 group-hover:text-red-500" />
//             </div>
//             <span className="font-medium tracking-wide text-red-400 group-hover:text-red-500">
//               Logout
//             </span>
//           </button>
//         </nav>
//       </aside>

//       {/* Overlay */}
//       {sidebarOpen && (
//         <div
//           onClick={() => setSidebarOpen(false)}
//           className="fixed inset-0 bg-black/70 backdrop-blur-sm md:hidden z-20"
//         ></div>
//       )}
//     </div>
//   );
// };

// export default SideBar;

'use client';

const ThemedIcon = ({ icon: Icon, className }: { icon: React.ElementType; className?: string }) => (
  <Icon className={className || ''} />
);

import Link from "next/link";
import { useState } from "react";
import { FaBox, FaChartBar, FaCar, FaUser, FaCarAlt, FaTimes, FaBars, FaSignOutAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

const SideBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/");
  };

  return (
    <div className="z-50">
      {/* Mobile Header */}
      {!sidebarOpen && (
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white h-16 w-full fixed top-0 left-0 z-10 md:hidden shadow-xl">
          <h1 className="text-xl font-semibold font-[Poppins] tracking-wide">Rental Car</h1>
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-white text-2xl hover:text-blue-300 transition-colors"
          >
            <FaBars />
          </button>
        </div>
      )}

      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transform fixed top-0 left-0 w-64 md:w-64 bg-gradient-to-b from-[#f0f4f8] to-[#c9d8e0] text-gray-800 h-full transition-transform duration-300 z-30 shadow-xl rounded-l-xl`}
      >
        <div className="flex justify-between items-center px-4 md:px-6 py-4 md:py-6 border-b border-gray-300">
          <div className="flex items-center gap-2 md:gap-4">
            <Link href="/">
              <h1 className="text-2xl font-bold font-[Poppins] tracking-wide text-blue-800">
                Rental Car
              </h1>
            </Link>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-700/80 hover:text-blue-500 text-xl md:hidden transition-colors"
          >
            <FaTimes />
          </button>
        </div>

        <nav className="flex flex-col p-4 gap-4 mt-2 overflow-y-auto">
          <Link 
            href="/admin" 
            className="flex items-center gap-4 hover:bg-blue-100 p-3 rounded-xl transition-all duration-300 group"
          >
            <div className="p-2 bg-blue-200 rounded-lg group-hover:bg-blue-300 transition-colors">
              <ThemedIcon icon={FaChartBar} className="w-5 h-5 text-blue-600" />
            </div>
            <span className="font-medium tracking-wide text-sm md:text-base">Dashboard</span>
          </Link>

          <Link 
            href="/admin/product" 
            className="flex items-center gap-4 hover:bg-blue-100 p-3 rounded-xl transition-all duration-300 group"
          >
            <div className="p-2 bg-blue-200 rounded-lg group-hover:bg-blue-300 transition-colors">
              <ThemedIcon icon={FaBox} className="w-5 h-5 text-blue-600" />
            </div>
            <span className="font-medium tracking-wide">Products</span>
          </Link>

          <Link 
            href="/admin/categories" 
            className="flex items-center gap-4 hover:bg-blue-100 p-3 rounded-xl transition-all duration-300 group"
          >
            <div className="p-2 bg-blue-200 rounded-lg group-hover:bg-blue-300 transition-colors">
              <ThemedIcon icon={FaCar} className="w-5 h-5 text-blue-600" />
            </div>
            <span className="font-medium tracking-wide">Car Inventory</span>
          </Link>

          <Link 
            href="/admin/customers" 
            className="flex items-center gap-4 hover:bg-blue-100 p-3 rounded-xl transition-all duration-300 group"
          >
            <div className="p-2 bg-blue-200 rounded-lg group-hover:bg-blue-300 transition-colors">
              <ThemedIcon icon={FaCarAlt} className="w-5 h-5 text-blue-600" />
            </div>
            <span className="font-medium tracking-wide">Car Information</span>
          </Link>

          <Link 
            href="/admin/orders" 
            className="flex items-center gap-4 hover:bg-blue-100 p-3 rounded-xl transition-all duration-300 group"
          >
            <div className="p-2 bg-blue-200 rounded-lg group-hover:bg-blue-300 transition-colors">
              <ThemedIcon icon={FaUser} className="w-5 h-5 text-blue-600" />
            </div>
            <span className="font-medium tracking-wide">Orders</span>
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center gap-4 hover:bg-red-100 p-3 rounded-xl transition-all duration-300 group mt-6"
          >
            <div className="p-2 bg-red-200 rounded-lg group-hover:bg-red-300 transition-colors">
              <ThemedIcon icon={FaSignOutAlt} className="w-5 h-5 text-red-500 group-hover:text-red-600" />
            </div>
            <span className="font-medium tracking-wide text-red-500 group-hover:text-red-600">
              Logout
            </span>
          </button>
        </nav>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm md:hidden z-20"
        ></div>
      )}
    </div>
  );
};

export default SideBar;
