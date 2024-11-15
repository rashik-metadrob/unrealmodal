
// import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react';
import { IoAddOutline } from "react-icons/io5";
import AddCollection from './AddCollection.jsx';
import { useSelector } from 'react-redux';
import LikedProducts from './LikedProducts.jsx';
import { IoMdClose } from "react-icons/io";
import { BsThreeDotsVertical } from 'react-icons/bs';

export default function TailwindModal({ open, setOpen }) {
    const [openAddCollection, setOpenAddCollection] = useState(false);
    const collections = useSelector((state) => state.wishlist.collections);
    const [openProductsPage, setOpenProductsPage] = useState(false)
    //   const [open, setOpen] = useState(true)

    const defaultaCollections = [
        {
            name: 'Travel Essentials',
            image: './travel.png'
        },
        {
            name: 'Upcoming sale',
            image: '/upcoming.png'
        },
        {
            name: 'Liked Products',
            image: './liked.png'
        }
    ]



    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
                transition
                className={` fixed inset-0 bg-gray-500  bg-opacity-75 md:bg-opacity-0 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in`}

            // className="fixed inset-0 bg-gray-500  bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-hidden">
                <div className="flex min-h-full items-end justify-center md:justify-end overflow-y-hidden text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative w-full md:w-[350px] h-[60vh] md:h-screen transform overflow-hidden rounded-[16px] md:rounded-none bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 md:my-0 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className="bg-white p-4 pb-4 pt-1 h-full w-full ">
                            <div className="fixed  w-full pr-8 bg-white pt-5 pb-2 ">
                                <div className="flex w-full justify-between items-center">
                                    <p className='text-[16.04px] font-medium'>Your Wishlists</p>
                                    <div className="md:hidden">
                                        <IoAddOutline size={24} />
                                    </div>
                                    <div className='hidden md:block' >
                                        <IoMdClose size={24} onClick={() => setOpen(false)} />

                                    </div>
                                </div>
                            </div>
                            <div className='mt-16 pb-28 h-[60vh] md:h-full overflow-y-auto hide-scrollbar' >
                                <div className='md:hidden' >
                                    <div className='flex w-full gap-4' >
                                        <div className=' w-1/2' >
                                            <div onClick={() => { setOpenAddCollection(true) }} className='h-[148px] border-2 border-[#C3C2C2] flex justify-center items-center rounded-[8px] border-dashed  mb-2' >
                                                <div className='border p-2 rounded-full bg-[#E7E6E6]' >
                                                    <IoAddOutline size={24} />
                                                </div>
                                            </div>
                                            <p className='text-center text-[12px] font-medium' >Create New</p>
                                        </div>
                                        <div className='w-1/2' >
                                            <div className='h-[148px] border mb-2 border-[#C3C2C2] rounded-[8px]' >
                                                <img src='/travel.png' className='w-full h-full rounded-lg' />
                                            </div>
                                            <p className='text-center text-[12px] font-medium' >Travel Essentials</p>
                                        </div>
                                    </div>
                                    <div className='flex w-full gap-4 mt-4' >
                                        <div className='w-1/2' >
                                            <div className='h-[148px] border mb-2 border-[#C3C2C2] rounded-[8px]' >
                                                <img src='/upcoming.png' className='w-full rounded-lg' />
                                            </div>
                                            <p className='text-center text-[12px] font-medium' >Upcoming Sale</p>
                                        </div>
                                        <div className='w-1/2' >
                                            <div className='h-[148px] border mb-2 border-[#C3C2C2]  rounded-[8px]' >
                                                <img src='/liked.png' className='w-full h-auto rounded-lg' />

                                            </div>
                                            <p className='text-center text-[12px] font-medium' >Liked Products</p>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 mt-4 gap-4 '>
                                        {collections.map((item) => (
                                            <div key={item.id} className='w-full '>
                                                {/* Check if it's a "Create New" button */}
                                                {item?.type === "new" ? (
                                                    <div className='h-[148px] border-2 border-[#C3C2C2] flex justify-center items-center rounded-[8px] border-dashed mb-2'>
                                                        <div className='border p-2 rounded-full bg-[#E7E6E6]'>
                                                            <IoAddOutline size={24} />
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div onClick={() => setOpenProductsPage(true)} className='h-[148px]  mb-2 border-[#C3C2C2] rounded-[8px]'>
                                                        <img src='/liked.png' className='w-full h-auto rounded-lg' />
                                                    </div>
                                                )}
                                                <p className='text-center text-[12px] font-medium'>{item.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='hidden md:block h-full' >
                                    {defaultaCollections.map((item) => {
                                        return (
                                            <div onClick={() => item.name=="Liked Products"&&setOpenProductsPage(true)} className='w-full border cursor-pointer flex mb-2 rounded-lg justify-center items-center' >
                                                <div className='w-4/12 p-1 ' >
                                                    <img src={item.image} className='w-1/2 h-full rounded-sm ' />

                                                </div>
                                                <div className='w-7/12 text-[15px] font-medium ' >
                                                    {item.name}
                                                </div>
                                                <div className='w-1/12 text-[15px] font-medium ' >
                                                    <Menu as="div" className="relative inline-block text-left bg-white">
                                                        <div>
                                                            <MenuButton className="">
                                                                <BsThreeDotsVertical size={18} className="" />                                </MenuButton>
                                                        </div>

                                                        <MenuItems
                                                            transition
                                                            className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                                        >
                                                            <div className="py-1">
                                                                <MenuItem>
                                                                    <p
                                                                        href="#"
                                                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                                    >
                                                                        Edit Name
                                                                    </p>
                                                                </MenuItem>
                                                                <MenuItem>
                                                                    <p
                                                                        href="#"
                                                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                                    >
                                                                        Delete List
                                                                    </p>
                                                                </MenuItem>
                                                            </div>
                                                        </MenuItems>
                                                    </Menu>
                                                </div>

                                            </div>
                                        )
                                    })}
                                    {collections.length!==0 && collections.map((item) => {
                                        return (
                                            <div className='w-full cursor-pointer border flex mb-2 rounded-lg justify-center items-center' >
                                                <div className='w-4/12 p-1 ' >
                                                    <img src='./liked.png' className='w-1/2 h-full rounded-sm ' />

                                                </div>
                                                <div className='w-7/12 text-[15px] font-medium ' >
                                                    {item.name}
                                                </div>
                                                <div className='w-1/12 text-[15px] font-medium ' >
                                                    <Menu as="div" className="relative inline-block text-left bg-white">
                                                        <div>
                                                            <MenuButton className="">
                                                                <BsThreeDotsVertical size={18} className="" />                                </MenuButton>
                                                        </div>

                                                        <MenuItems
                                                            transition
                                                            className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                                        >
                                                            <div className="py-1">
                                                                <MenuItem>
                                                                    <p
                                                                        href="#"
                                                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                                    >
                                                                        Edit Name
                                                                    </p>
                                                                </MenuItem>
                                                                <MenuItem>
                                                                    <p
                                                                        href="#"
                                                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                                    >
                                                                        Delete List
                                                                    </p>
                                                                </MenuItem>
                                                            </div>
                                                        </MenuItems>
                                                    </Menu>
                                                </div>

                                            </div>
                                        )
                                    })}

                                </div>
                                <div className='hidden md:block bg-white shadow-2xl z-10 fixed bottom-0 pb-3 w-full px-5  sm:w-[350px] md:w-full md:pr-7 md:px-0' >

                                    <div className=' mt-5 w-full' >
                                        <button onClick={() => { setOpenAddCollection(true) }} className='text-[15px] w-full py-2 gap-1 flex justify-center items-center text-white rounded-[8px] bg-[#222222] border-black border-[2px]' >
                                            <IoAddOutline size={20} /> Create New List
                                        </button>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </DialogPanel>
                </div>
            </div>
            {openProductsPage && <LikedProducts open={openProductsPage} setOpen={setOpenProductsPage} />}
            {openAddCollection && <AddCollection open={openAddCollection} setOpen={setOpenAddCollection} />}

        </Dialog>
    )
}
