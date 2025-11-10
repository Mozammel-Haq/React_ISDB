// import '@tailwindplus/elements';
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   return (
//     <ul className="flex flex-col decoration-0 text-xl font-bold text-gray-600 py-10 w-96 bg-emerald-100">
//       <el-dropdown class="inline-block">
//         <button
//           className="inline-flex w-full justify-center text-xl font-bold gap-x-1.5 rounded-md hover:bg-amber-50 px-10 py-2 text-sm font-semibold text-gray-600 inset-ring-1 inset-ring-white/5"
//         >
//           Roles
//           <svg
//             viewBox="0 0 20 20"
//             fill="currentColor"
//             aria-hidden="true"
//             className="-mr-1 size-5 text-gray-400"
//           >
//             <path
//               fillRule="evenodd"
//               clipRule="evenodd"
//               d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
//             />
//           </svg>
//         </button>

//         <el-menu
//           anchor="bottom end"
//           popover
//           class="w-56 origin-top-right rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
//         >
//           <div className="py-1">
//             <Link
//               to="/role"
//               className="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden"
//             >
//               Role List
//             </Link>
//             <Link
//               to="/role/create"
//               className="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden"
//             >
//               Create a Role
//             </Link>
//           </div>
//         </el-menu>
//       </el-dropdown>
//       <el-dropdown class="inline-block">
//         <button
//           className="inline-flex  text-xl font-bold w-full justify-center gap-x-1.5 rounded-md hover:bg-amber-50 px-10 py-2 text-sm font-semibold text-gray-600 inset-ring-1 inset-ring-white/5"
//         >
//           Customers
//           <svg
//             viewBox="0 0 20 20"
//             fill="currentColor"
//             aria-hidden="true"
//             className="-mr-1 size-5 text-gray-400"
//           >
//             <path
//               fillRule="evenodd"
//               clipRule="evenodd"
//               d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
//             />
//           </svg>
//         </button>

//         <el-menu
//           anchor="bottom end"
//           popover
//           class="w-56 origin-top-right rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
//         >
//           <div className="py-1">
//             <Link
//               to="/customer"
//               className="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden"
//             >
//               Customer List
//             </Link>
//             <Link
//               to="/customer/create"
//               className="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden"
//             >
//               New Customer
//             </Link>
//           </div>
//         </el-menu>
//       </el-dropdown>
//     </ul>
//   );
// };

// export default Sidebar;

import React, {useState} from "react";
import { Link } from 'react-router-dom';
// react icons
import {GoHome, GoProjectSymlink, GoSidebarCollapse} from "react-icons/go";
import {IoIosArrowDown, IoIosSearch} from "react-icons/io";
import {CiCalendar, CiLogout} from "react-icons/ci";
import {FiBarChart, FiPieChart} from "react-icons/fi";
import {IoNotificationsOutline, IoSettingsOutline} from "react-icons/io5";
import {BsThreeDots} from "react-icons/bs";
import {RiAccountCircleLine} from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";

const Sidebar = () => {
    const [isCollapse1, setIsCollapse1] = useState(true)
    const [isDropdownOpen, setIsDropdownOpen] = useState(true)

    return (
        <aside className={`bg-white boxShadow dark:bg-slate-900 rounded-md transition-all duration-300 ease`}>
            <div className={`mt-5 ${isCollapse1 ? "px-[20px]" : "px-[10px]"} transition-all duration-300 ease-in-out`}>
                {
                    isCollapse1 ? (
                        <div className="flex items-center justify-between">
                            <img src="https://i.ibb.co/ZHYQ04D/footer-logo.png" alt="logo"
                                 className="w-[130px] cursor-pointer"/>
                            <div className="relative group">
                                <GoSidebarCollapse className="text-[1.5rem] dark:text-[#abc2d3] text-gray-600 cursor-pointer"
                                                   onClick={() => setIsCollapse1(false)}/>

                                {/* tooltip */}
                                <div
                                    className={`absolute -top-1 right-[-115px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                    <p className="text-[0.9rem] w-max dark:bg-slate-800 dark:text-[#abc2d3] bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                        Collapse
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <img src="https://i.ibb.co/0BZfPq6/darklogo.png" alt="logo"
                             className="w-[50px] mx-auto cursor-pointer"
                             onClick={() => setIsCollapse1(!isCollapse1)}/>
                    )
                }

                {/* search bar */}
                {
                    isCollapse1 ? (
                        <div className="relative mt-5">
                            <input
                                className="px-4 py-2 dark:border-slate-700 dark:bg-transparent dark:text-[#abc2d3] dark:placeholder:text-slate-500 border border-border rounded-md w-full pl-[40px] outline-none focus:border-[#3B9DF8]"
                                placeholder="Search..."/>
                            <IoIosSearch
                                className="absolute top-[9px] left-2 text-[1.5rem] text-[#adadad]"/>
                        </div>
                    ) : (
                        <div className="w-full relative group">
                            <IoIosSearch
                                className="text-[2rem] dark:hover:bg-slate-800/50 dark:text-[#abc2d3] mx-auto text-gray-500 mt-2 p-[5px] rounded-md hover:bg-gray-100 cursor-pointer w-full"/>

                            {/* tooltip */}
                            <div
                                className={`${isCollapse1 ? "hidden" : "inline"} absolute top-0 right-[-85px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                <p className="text-[0.9rem] w-max dark:bg-slate-800 dark:text-[#abc2d3] bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                    Search
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>

            {/* general section */}
            <div className={`mt-6 ${isCollapse1 ? "px-[20px]" : "px-[10px]"} transition-all duration-300 ease-in-out`}>

                <div className="mt-3 flex flex-col gap-[5px]">
                    <div
                        className={`${isCollapse1 ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] dark:hover:bg-slate-800/50 rounded-md cursor-pointer transition-all duration-200 relative group`}>
                        <div className="flex items-center gap-[8px]">
                            <GoHome className="text-[1.3rem] dark:text-[#abc2d3] text-gray-500"/>
                            <Link to="/" className={`${isCollapse1 ? "inline" : "hidden"} text-[1rem] font-[400] text-gray-500 dark:text-[#abc2d3]`}>Home</Link>
                        </div>

                        {/* tooltip */}
                        <div
                            className={`${isCollapse1 ? "hidden" : "inline"} absolute top-0 right-[-80px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                            <Link to='/' className="text-[0.9rem] w-max dark:bg-slate-800 dark:text-[#abc2d3] bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                Home
                            </Link>
                        </div>
                    </div>

                    <div
                        className={`${isCollapse1 && "justify-center"} ${isDropdownOpen && "bg-gray-50 dark:bg-slate-800"}  flex w-full hover:bg-gray-50 p-[5px] dark:hover:bg-slate-800/50 rounded-md cursor-pointer transition-all duration-200 relative group flex-col`}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        <div
                            className={`${isCollapse1 ? " justify-between" : "justify-center"} flex items-center gap-[8px  w-full`}>
                            <div className="flex items-center gap-[8px]">
                                <IoIosPeople className="text-[1.3rem] dark:text-[#abc2d3] text-gray-500"/>
                                <Link to='/customer' className={`${isCollapse1 ? "inline" : "hidden"} text-[1rem] font-[400] text-gray-500 dark:text-[#abc2d3]`}>
                                  Customers
                                </Link>
                            </div>

                            <IoIosArrowDown
                                className={`${isDropdownOpen ? "rotate-[180deg]" : "rotate-0"} ${isCollapse1 ? "inline" : "hidden"} transition-all duration-300 text-[1rem] text-gray-500`}/>
                        </div>

                        {
                            !isCollapse1 && (
                                <>
                                    {/* hover projects dropdown */}
                                    <ul className="translate-y-[20px] opacity-0 z-[-1] group-hover:translate-y-0 group-hover:opacity-100 dark:bg-slate-900 dark:text-[#abc2d3] group-hover:z-30 absolute top-0 left-[70px] bg-white boxShadow transition-all duration-300 p-[8px] rounded-md flex flex-col gap-[3px] text-[1rem] text-gray-500">
                                        <li className="hover:bg-gray-50 dark:hover:bg-slate-800/50 px-[20px] py-[5px] rounded-md">
                                        <Link 
                                        to="/customer"
                                        >
                                          Customer List
                                        </Link>
                                        </li>
                                        <li className="hover:bg-gray-50 dark:hover:bg-slate-800/50 px-[20px] py-[5px] rounded-md">
                                        <Link 
                                        to="/customer/add"
                                        >
                                          Add Customer
                                        </Link>
                                        </li>
                                    </ul>
                                </>
                            )
                        }
                    </div>

                    {/* active projects dropdown */}
                    <ul className={`${isDropdownOpen ? "h-auto my-3 opacity-100 z-[1]" : "opacity-0 z-[-1] h-0"} ${isCollapse1 ? "inline" : "hidden"} transition-all duration-300 list-disc marker:text-blue-400 ml-[35px] flex flex-col gap-[3px] text-[1rem] dark:text-[#abc2d3] text-gray-500`}>
                        <li className="hover:bg-gray-50 dark:hover:bg-slate-800/50 px-[20px] py-[5px] rounded-md">
                                        <Link 
                                        to="/customer"
                                        >
                                          Customer List
                                        </Link>
                                        </li>
                                        <li className="hover:bg-gray-50 dark:hover:bg-slate-800/50 px-[20px] py-[5px] rounded-md">
                                        <Link 
                                        to="/customer/add"
                                        >
                                          Add Customer
                                        </Link>
                                        </li>
                    </ul>

                </div>
            </div>

            {/* setting section */}
            <div
                className={`${isCollapse1 ? "px-[20px]" : "px-[10px]"} mt-6 dark:border-slate-700 border-t border-gray-200  transition-all duration-300 ease-in-out`}>

                <div className="mt-3 flex flex-col gap-[5px]">
                    <div
                        className={`${isCollapse1 ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] dark:hover:bg-slate-800/50 rounded-md cursor-pointer transition-all duration-200 relative group`}>
                        <div className="flex items-center gap-[8px]">
                            <IoNotificationsOutline className="text-[1.3rem] dark:text-[#abc2d3] text-gray-500"/>
                            <p className={`${isCollapse1 ? "inline" : "hidden"} text-[1rem] font-[400] text-gray-500 dark:text-[#abc2d3]`}>Notification</p>
                        </div>

                        {/* tooltip */}
                        <div
                            className={`${isCollapse1 ? "hidden" : "inline"} absolute top-0 right-[-98px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                            <p className="text-[0.9rem] w-max dark:bg-slate-800 dark:text-[#abc2d3] bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                Activity
                            </p>
                        </div>
                    </div>

                    <div
                        className={`${isCollapse1 ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] dark:hover:bg-slate-800/50 rounded-md cursor-pointer transition-all duration-200 relative group`}>
                        <div className="flex items-center gap-[8px]">
                            <IoSettingsOutline className="text-[1.3rem] dark:text-[#abc2d3] text-gray-500"/>
                            <p className={`${isCollapse1 ? "inline" : "hidden"} text-[1rem] font-[400] text-gray-500 dark:text-[#abc2d3]`}>Setting</p>
                        </div>

                        {/* tooltip */}
                        <div
                            className={`${isCollapse1 ? "hidden" : "inline"} absolute top-0 right-[-96px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                            <p className="text-[0.9rem] w-max dark:bg-slate-800 dark:text-[#abc2d3] bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                Setting
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* profile section */}
            <div
                className={`${isCollapse1 ? "justify-between" : "justify-center"} bg-gray-100 py-3 px-[20px] flex items-center mt-10 dark:bg-slate-800 rounded-b-md`}>
                <div className="flex items-center gap-[10px]">
                    <img
                        src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1724478146~exp=1724481746~hmac=7de91a5b9271ecb4309974122ae6f47d71c01f7fff840c69755f781a03d9e340&w=996"
                        alt="avatar" className="w-[30px] h-[30px] cursor-pointer rounded-full object-cover"/>
                    <h3 className={`${isCollapse1 ? "inline" : "hidden"} dark:text-[#abc2d3] text-[0.9rem] text-gray-800 font-[500]`}>Mozammel Haq</h3>
                </div>

                <div className={`${isCollapse1 ? "inline" : "hidden"} relative group`}>
                    <BsThreeDots className="text-[1.2rem] dark:text-[#abc2d3] text-gray-500 cursor-pointer"/>

                    <ul className="translate-y-[20px] opacity-0 z-[-1] group-hover:translate-y-0 group-hover:opacity-100 dark:bg-slate-900 group-hover:z-30 absolute top-0 left-[30px] bg-white boxShadow transition-all duration-300 p-[8px] rounded-md flex flex-col gap-[3px]">
                        <li className="flex items-center dark:text-[#abc2d3] dark:hover:bg-slate-800/50 gap-[7px] text-[0.9rem] text-gray-600 hover:bg-gray-50 px-[8px] py-[4px] rounded-md cursor-pointer">
                            <RiAccountCircleLine/>
                            Profile
                        </li>
                        <li className="flex items-center dark:text-[#abc2d3] dark:hover:bg-slate-800/50 gap-[7px] text-[0.9rem] text-red-500 hover:bg-gray-50 px-[8px] py-[4px] rounded-md cursor-pointer">
                            <CiLogout/>
                            Logout
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
                    