
// import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react';
import { IoAddOutline } from "react-icons/io5";
import AddCollection from './AddCollection';
import { useSelector } from 'react-redux';
import { BsThreeDotsVertical } from "react-icons/bs"
import { FaAngleLeft } from "react-icons/fa6";
import Collections from './Collections';
import Product from './Product';
import { useNavigate } from "react-router-dom"
import MyBag from './MyBag';
export default function NotificationModal({ open, setOpen, image, message }) {
    // useEffect(()=>{
    //     setTimeout(()=>{

    //         setOpen
    //     },1000)
    // })



    const navigate = useNavigate()
    const [openBag, setOpenBag] = useState(false)

    const switchModals = () =>{
        setOpen(false);
        setOpenBag(true)
    }

    return (
        <>
            {open && <Dialog open={open} onClose={setOpen} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 md:bg-opacity-0 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-hidden">
                    <div className="flex min-h-full items-start md:items-end justify-center md:justify-end overflow-y-hidden text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative w-full md:w-1/3 h-14 my-7 mx-20 md:mx-auto transform overflow-hidden rounded-[30px] bg-white text-left shadow-xl transition-all  data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8  sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 sm:w-full"
                        >
                            <div className="bg-white p-1 h-full w-full flex justify-center items-center">
                                <div className=' flex justify-between items-center w-full gap-2 px-2' >
                                    <img src={image} className='w-14 h-10 rounded-[20px]' />
                                    <p className='text-[15.5px] md:text-[14px]' >{message}</p>

                                    <div className='hidden md:block' >
                                        <div onClick={switchModals} className='flex bg-black cursor-pointer px-5 py-3 rounded-[30px] justify-center items-center' >
                                            <p className='text-bold text-white text-[14px]' >View Now</p>

                                        </div>

                                    </div>
                                </div>

                            </div>

                        </DialogPanel>
                    </div>
                </div>
            </Dialog>}
            {openBag && <MyBag open={openBag} setOpen={setOpenBag} />}
        </>
    )
}
