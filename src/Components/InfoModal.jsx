
// import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';
import { IoAddOutline } from "react-icons/io5";
import AddCollection from './AddCollection.jsx';
import { useSelector } from 'react-redux';
import LikedProducts from './LikedProducts.jsx';

export default function InfoModal({ open, setOpen }) {
    const [openAddCollection, setOpenAddCollection] = useState(false);
    const collections = useSelector((state) => state.wishlist.collections);
    const [openProductsPage, setOpenProductsPage] = useState(false)
    //   const [open, setOpen] = useState(true)

    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
    {/* Backdrop */}
    <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 md:bg-opacity-10 transition-opacity pointer-events-none"
        aria-hidden="true"
    />

    {/* Modal Content */}
    <div className="fixed inset-0 z-10 w-screen overflow-y-hidden">
        <div className="flex min-h-full items-end justify-center overflow-y-hidden text-center sm:items-center sm:p-0">
            <DialogPanel
                transition
                className="relative w-full h-[35vh] bg-opacity-15 border-[2px] border-white border-opacity-[50%] transform overflow-hidden rounded-[16px] backdrop-blur-[28px] text-left shadow-xl transition-all pointer-events-auto data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
                {/* Modal Content */}
                <div className="p-4 pb-4 pt-1 h-full w-full text-center flex items-center">
                    <div className="mx-10 text-white">
                        <h1 className="text-[24px] md:text-[32px] font-semibold">ARMANI</h1>
                        <p className="text-[14px] md:text-[18px] mt-3">
                            Explore Armani’s Winter 2024 collection—virtually at your fingertips!
                        </p>
                        <button
                            onClick={() => setOpen(false)}
                            onTouchStart={() => setOpen(false)} // Add touch support
                            className="w-full text-[14px] rounded-[4px] bg-[#222222] hover:bg-[#282828] text-white mt-4 mx-3 py-3"
                        >
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </DialogPanel>
        </div>
    </div>
</Dialog>
    )
}
