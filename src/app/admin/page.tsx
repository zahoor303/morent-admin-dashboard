// "use client";

// import { useEffect, useState } from "react";
// import { FaBox, FaMoneyBillWave, FaShoppingCart, FaUsers } from "react-icons/fa";
// import { client } from "@/sanity/lib/client";
// import CarAnalyticsGraph from "@/components/CarAnalytics";

// const ThemedIcon = ({ icon: Icon, className }: { icon: React.ElementType; className?: string }) => (
//   <Icon className={className || ''} />
// );

// export default function Dashboard() {
//   const [totalProducts, setTotalProducts] = useState<number>(0);
//   const [, setTotalStock] = useState<number>(0);
//   const [, setTotalAmount] = useState<number>(0);
//   const [, setTotalOrders] = useState<number>(0);
//   const [, setCompletedOrders] = useState<number>(0);
//   const [, setPendingOrders] = useState<number>(0);
//   const [, setDeliveredOrders] = useState<number>(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const productQuery = `*[_type == "product"]{
//           priceperday,
//           fuelCapicity,
//         }`;

//         const productsData = await client.fetch(productQuery);
//         setTotalProducts(productsData.length);
//         setTotalStock(
//           productsData.reduce((acc: number, product: { stock: number }) => acc + product.stock, 9876)
//         );
//         setTotalAmount(
//           productsData.reduce(
//             (acc: number, product: { price: number; stock: number }) =>
//               acc + product.price * product.stock,
//             0
//           )
//         );

//         const ordersQuery = `*[_type == "order"]{
//           status
//         }`;

//         const ordersData = await client.fetch(ordersQuery);
//         setTotalOrders(ordersData.length);
//         setCompletedOrders(
//           ordersData.filter((order: { status: string }) => order.status === "completed").length
//         );
//         setPendingOrders(
//           ordersData.filter((order: { status: string }) => order.status === "pending").length
//         );
//         setDeliveredOrders(
//           ordersData.filter((order: { status: string }) => order.status === "delivered").length
//         );
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="min-h-screen bg-white p-4 md:ml-64">
//       <h1 className="text-3xl md:text-4xl font-bold text-black mb-6 md:mb-8 font-[Poppins]">Business Overview</h1>

//       <div className="bg-blue-900 rounded-xl p-6 md:p-8 shadow-lg relative">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">

//           {/* Total Products Card */}
//           <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 transition-transform duration-300 hover:scale-105 flex items-center justify-between">
//             <div>
//               <p className="text-black font-medium mb-1 text-sm sm:text-base">Total Products</p>
//               <p className="text-2xl sm:text-3xl font-bold text-black">{totalProducts}</p>
//             </div>
//             <div className="bg-blue-600 p-3 sm:p-4 rounded-full">
//               <ThemedIcon icon={FaBox} className="text-2xl sm:text-3xl text-white" />
//             </div>
//           </div>

//           {/* Total Stock Card */}
//           <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 transition-transform duration-300 hover:scale-105 flex items-center justify-between">
//             <div>
//               <p className="text-black font-medium mb-1 text-sm sm:text-base">Total Stock</p>
//               <p className="text-2xl sm:text-3xl font-bold text-black">{8488}</p>
//             </div>
//             <div className="bg-blue-600 p-3 sm:p-4 rounded-full">
//               <ThemedIcon icon={FaShoppingCart} className="text-2xl sm:text-3xl text-white" />
//             </div>
//           </div>

//           {/* Total Amount Card */}
//           <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 transition-transform duration-300 hover:scale-105 flex items-center justify-between">
//             <div>
//               <p className="text-black font-medium mb-1 text-sm sm:text-base">Total Sales</p>
//               <p className="text-2xl sm:text-3xl font-bold text-black">${7654}</p>
//             </div>
//             <div className="bg-blue-600 p-3 sm:p-4 rounded-full">
//               <ThemedIcon icon={FaMoneyBillWave} className="text-2xl sm:text-3xl text-white" />
//             </div>
//           </div>

//           {/* Total Orders Card */}
//           <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 transition-transform duration-300 hover:scale-105 flex items-center justify-between">
//             <div>
//               <p className="text-black font-medium mb-1 text-sm sm:text-base">Total Orders</p>
//               <p className="text-2xl sm:text-3xl font-bold text-black">{70}</p>
//             </div>
//             <div className="bg-blue-600 p-3 sm:p-4 rounded-full">
//               <ThemedIcon icon={FaUsers} className="text-2xl sm:text-3xl text-white" />
//             </div>
//           </div>

//         </div>

//         <br />
//         <CarAnalyticsGraph />
//       </div>
//     </div>
//   );
// }



'use client';

import { useEffect, useState } from "react";
import { FaBox, FaMoneyBillWave, FaShoppingCart, FaUsers } from "react-icons/fa";
import { client } from "@/sanity/lib/client";
import CarAnalyticsGraph from "@/components/CarAnalytics";

const ThemedIcon = ({ icon: Icon, className }: { icon: React.ElementType; className?: string }) => (
  <Icon className={className || ''} />
);

export default function Dashboard() {
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [, setTotalStock] = useState<number>(0);
  const [, setTotalAmount] = useState<number>(0);
  const [, setTotalOrders] = useState<number>(0);
  const [, setCompletedOrders] = useState<number>(0);
  const [, setPendingOrders] = useState<number>(0);
  const [, setDeliveredOrders] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productQuery = `*[_type == "product"]{
          priceperday,
          fuelCapicity,
        }`;

        const productsData = await client.fetch(productQuery);
        setTotalProducts(productsData.length);
        setTotalStock(
          productsData.reduce((acc: number, product: { stock: number }) => acc + product.stock, 9876)
        );
        setTotalAmount(
          productsData.reduce(
            (acc: number, product: { price: number; stock: number }) =>
              acc + product.price * product.stock,
            0
          )
        );

        const ordersQuery = `*[_type == "order"]{
          status
        }`;

        const ordersData = await client.fetch(ordersQuery);
        setTotalOrders(ordersData.length);
        setCompletedOrders(
          ordersData.filter((order: { status: string }) => order.status === "completed").length
        );
        setPendingOrders(
          ordersData.filter((order: { status: string }) => order.status === "pending").length
        );
        setDeliveredOrders(
          ordersData.filter((order: { status: string }) => order.status === "delivered").length
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#f0f8ff] to-[#e0f7fa] p-6 md:ml-64">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6 md:mb-8 font-[Poppins]">RentalCar Overview</h1>

      <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg relative border border-blue-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">

          {/* Total Products Card */}
          <div className="bg-gradient-to-r from-blue-300 to-blue-400 rounded-xl shadow-lg p-6 hover:scale-105 transition-all duration-300 flex items-center justify-between border border-blue-100">
            <div>
              <p className="text-blue-700 font-medium mb-1 text-sm sm:text-base">Total Products</p>
              <p className="text-2xl sm:text-3xl font-bold text-blue-700">{totalProducts}</p>
            </div>
            <div className="bg-white p-3 sm:p-4 rounded-full">
              <ThemedIcon icon={FaBox} className="text-2xl sm:text-3xl text-blue-600" />
            </div>
          </div>

          {/* Total Stock Card */}
          <div className="bg-gradient-to-r from-green-300 to-green-400 rounded-xl shadow-lg p-6 hover:scale-105 transition-all duration-300 flex items-center justify-between border border-green-100">
            <div>
              <p className="text-green-700 font-medium mb-1 text-sm sm:text-base">Total Stock</p>
              <p className="text-2xl sm:text-3xl font-bold text-green-700">{8488}</p>
            </div>
            <div className="bg-white p-3 sm:p-4 rounded-full">
              <ThemedIcon icon={FaShoppingCart} className="text-2xl sm:text-3xl text-green-600" />
            </div>
          </div>

          {/* Total Amount Card */}
          <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-xl shadow-lg p-6 hover:scale-105 transition-all duration-300 flex items-center justify-between border border-yellow-100">
            <div>
              <p className="text-yellow-700 font-medium mb-1 text-sm sm:text-base">Total Sales</p>
              <p className="text-2xl sm:text-3xl font-bold text-yellow-700">${7654}</p>
            </div>
            <div className="bg-white p-3 sm:p-4 rounded-full">
              <ThemedIcon icon={FaMoneyBillWave} className="text-2xl sm:text-3xl text-yellow-600" />
            </div>
          </div>

          {/* Total Orders Card */}
          <div className="bg-gradient-to-r from-indigo-300 to-indigo-400 rounded-xl shadow-lg p-6 hover:scale-105 transition-all duration-300 flex items-center justify-between border border-indigo-100">
            <div>
              <p className="text-indigo-700 font-medium mb-1 text-sm sm:text-base">Total Orders</p>
              <p className="text-2xl sm:text-3xl font-bold text-indigo-700">{70}</p>
            </div>
            <div className="bg-white p-3 sm:p-4 rounded-full">
              <ThemedIcon icon={FaUsers} className="text-2xl sm:text-3xl text-indigo-600" />
            </div>
          </div>

        </div>

        <br />
        <CarAnalyticsGraph />
      </div>
    </div>
  );
}
