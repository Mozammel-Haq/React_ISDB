import  { useState } from "react";
import { Link } from 'react-router-dom';
import { GoHome, GoSidebarCollapse } from "react-icons/go";
import { IoIosArrowDown, IoIosSearch, IoIosPeople } from "react-icons/io";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { RiAccountCircleLine } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";

const Sidebar = () => {
    const [isCollapse1, setIsCollapse1] = useState(true);
    const [isCustomerDropdownOpen, setIsCustomerDropdownOpen] = useState(true);
    const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(true);

    return (
        <aside className={`bg-white boxShadow dark:bg-slate-900 rounded-md transition-all duration-300 ease`}>
            <div className={`mt-5 ${isCollapse1 ? "px-[20px]" : "px-[10px]"} transition-all duration-300 ease-in-out`}>
                {
                    isCollapse1 ? (
                        <div className="flex items-center justify-between">
                            <img src="https://i.ibb.co/ZHYQ04D/footer-logo.png" alt="logo"
                                className="w-[130px] cursor-pointer" />
                            <div className="relative group">
                                <GoSidebarCollapse
                                    className="text-[1.5rem] dark:text-[#abc2d3] text-gray-600 cursor-pointer"
                                    onClick={() => setIsCollapse1(false)} />
                                <div className={`absolute -top-1 right-[-115px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                    <p className="text-[0.9rem] w-max dark:bg-slate-800 dark:text-[#abc2d3] bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                        Collapse
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <img src="https://i.ibb.co/0BZfPq6/darklogo.png" alt="logo"
                            className="w-[50px] mx-auto cursor-pointer"
                            onClick={() => setIsCollapse1(!isCollapse1)} />
                    )
                }

                {/* search bar */}
                {
                    isCollapse1 ? (
                        <div className="relative mt-5">
                            <input
                                className="px-4 py-2 dark:border-slate-700 dark:bg-transparent dark:text-[#abc2d3] dark:placeholder:text-slate-500 border border-border rounded-md w-full pl-[40px] outline-none focus:border-[#3B9DF8]"
                                placeholder="Search..." />
                            <IoIosSearch className="absolute top-[9px] left-2 text-[1.5rem] text-[#adadad]" />
                        </div>
                    ) : (
                        <div className="w-full relative group">
                            <IoIosSearch
                                className="text-[2rem] dark:hover:bg-slate-800/50 dark:text-[#abc2d3] mx-auto text-gray-500 mt-2 p-[5px] rounded-md hover:bg-gray-100 cursor-pointer w-full" />
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

                    {/* Home */}
                    <div className={`${isCollapse1 ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] dark:hover:bg-slate-800/50 rounded-md cursor-pointer transition-all duration-200 relative group`}>
                        <div className="flex items-center gap-[8px]">
                            <GoHome className="text-[1.3rem] dark:text-[#abc2d3] text-gray-500" />
                            <Link to="/" className={`${isCollapse1 ? "inline" : "hidden"} text-[1rem] font-[400] text-gray-500 dark:text-[#abc2d3]`}>Home</Link>
                        </div>
                        <div className={`${isCollapse1 ? "hidden" : "inline"} absolute top-0 right-[-80px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                            <Link to='/' className="text-[0.9rem] w-max dark:bg-slate-800 dark:text-[#abc2d3] bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                Home
                            </Link>
                        </div>
                    </div>

                    {/* Customers dropdown */}
                    <div
                        className={`${isCollapse1 && "justify-center"} ${isCustomerDropdownOpen && "bg-gray-50 dark:bg-slate-800"}  flex w-full hover:bg-gray-50 p-[5px] dark:hover:bg-slate-800/50 rounded-md cursor-pointer transition-all duration-200 relative group flex-col`}
                        onClick={() => setIsCustomerDropdownOpen(!isCustomerDropdownOpen)}>
                        <div className={`${isCollapse1 ? " justify-between" : "justify-center"} flex items-center gap-[8px] w-full`}>
                            <div className="flex items-center gap-[8px]">
                                <IoIosPeople className="text-[1.3rem] dark:text-[#abc2d3] text-gray-500" />
                                <Link to='/customer' className={`${isCollapse1 ? "inline" : "hidden"} text-[1rem] font-[400] text-gray-500 dark:text-[#abc2d3]`}>
                                    Customers
                                </Link>
                            </div>
                            <IoIosArrowDown
                                className={`${isCustomerDropdownOpen ? "rotate-[180deg]" : "rotate-0"} ${isCollapse1 ? "inline" : "hidden"} transition-all duration-300 text-[1rem] text-gray-500`} />
                        </div>

                        {/* Expanded list (when sidebar open) */}
                        <ul className={`${isCustomerDropdownOpen ? "h-auto my-3 opacity-100 z-[1]" : "opacity-0 z-[-1] h-0"} ${isCollapse1 ? "inline" : "hidden"} transition-all duration-300 list-disc marker:text-blue-400 ml-[35px] flex flex-col gap-[3px] text-[1rem] dark:text-[#abc2d3] text-gray-500`}>
                            <li className="hover:bg-gray-50 dark:hover:bg-slate-800/50 px-[20px] py-[5px] rounded-md">
                                <Link to="/customer">Customer List</Link>
                            </li>
                            <li className="hover:bg-gray-50 dark:hover:bg-slate-800/50 px-[20px] py-[5px] rounded-md">
                                <Link to="/customer/add">Add Customer</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Roles dropdown */}
                    <div
                        className={`${isCollapse1 && "justify-center"} ${isRoleDropdownOpen && "bg-gray-50 dark:bg-slate-800"}  flex w-full hover:bg-gray-50 p-[5px] dark:hover:bg-slate-800/50 rounded-md cursor-pointer transition-all duration-200 relative group flex-col`}
                        onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}>
                        <div className={`${isCollapse1 ? " justify-between" : "justify-center"} flex items-center gap-[8px] w-full`}>
                            <div className="flex items-center gap-[8px]">
                                <IoIosPeople className="text-[1.3rem] dark:text-[#abc2d3] text-gray-500" />
                                <Link to='/role' className={`${isCollapse1 ? "inline" : "hidden"} text-[1rem] font-[400] text-gray-500 dark:text-[#abc2d3]`}>
                                    Roles
                                </Link>
                            </div>
                            <IoIosArrowDown
                                className={`${isRoleDropdownOpen ? "rotate-[180deg]" : "rotate-0"} ${isCollapse1 ? "inline" : "hidden"} transition-all duration-300 text-[1rem] text-gray-500`} />
                        </div>

                        <ul className={`${isRoleDropdownOpen ? "h-auto my-3 opacity-100 z-[1]" : "opacity-0 z-[-1] h-0"} ${isCollapse1 ? "inline" : "hidden"} transition-all duration-300 list-disc marker:text-blue-400 ml-[35px] flex flex-col gap-[3px] text-[1rem] dark:text-[#abc2d3] text-gray-500`}>
                            <li className="hover:bg-gray-50 dark:hover:bg-slate-800/50 px-[20px] py-[5px] rounded-md">
                                <Link to="/role">Role List</Link>
                            </li>
                            <li className="hover:bg-gray-50 dark:hover:bg-slate-800/50 px-[20px] py-[5px] rounded-md">
                                <Link to="/role/add">Add New Role</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
