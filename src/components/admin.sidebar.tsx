'use client'
import React, { useContext, useState } from 'react';
import { AdminContext } from "@/library/admin.context";
import Link from 'next/link'
import { icons } from '@/library/icons';

const AdminSideBar = () => {
    const { collapseMenu, setCollapseMenu } = useContext(AdminContext)!;
    const { MdCancel, FaUser, FaBox, SiChatbot, FaChevronDown, MdLogout, RiReactjsLine } = icons
    const [dropDown, setDropDown] = useState<boolean>(false)

    return (
        <aside className={collapseMenu ? "hidden" : "z-20 flex-shrink-0 w-[270px] p-2 overflow-y-auto block text-center bg-gray-800 h-full"}>
            <div className="text-gray-100 text-xl">
                <div className="p-2.5 mt-1 flex items-center justify-between">
                    <div className="flex items-center">
                        <RiReactjsLine className='h-12 w-12' />
                        <h1 className="font-bold text-gray-200 text-sm ml-3">Cửa hàng</h1>
                    </div>
                    <MdCancel className="w-5 h-5" onClick={() => {
                        setCollapseMenu(!collapseMenu)
                        console.log(collapseMenu);

                    }} />
                </div>
                <div className="my-2 bg-gray-600 h-[1px]"></div>
            </div>
            <Link className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white {{ request()->route()->uri == 'admin/manage_statistic' ? 'bg-blue-600' : '' }}"
                href="/admin/manage_statistic">
                <FaUser className="w-5 h-5" />
                <span className="text-[15px] ml-4 text-gray-200 font-bold">Người dùng</span>
            </Link>
            <Link className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white {{ request()->route()->uri == 'admin/manage_products' ? 'bg-blue-600' : '' }}"
                href="/admin/manage_products">
                <FaBox className="w-5 h-5" />
                <span className="text-[15px] ml-4 text-gray-200 font-bold">Sản phẩm</span>
            </Link>
            <div className="my-4 bg-gray-600 h-[1px]"></div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <SiChatbot className="w-5 h-5" />
                <div className="flex justify-between w-full items-center" onClick={() => setDropDown(!dropDown)}>
                    <span className="text-[15px] ml-4 text-gray-200 font-bold">Chatbox</span>
                    <span className="text-sm" id="arrow">
                        <FaChevronDown className="w-5 h-5" />
                    </span>
                </div>
            </div>
            <div className={`${dropDown ? '' : 'hidden'} text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold`} id="submenu">
                <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                    Social
                </h1>
                <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                    Personal
                </h1>
                <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                    Friends
                </h1>
            </div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <MdLogout className="w-5 h-5" />
                <span className="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
            </div>
        </aside>

    )
}

export default AdminSideBar;