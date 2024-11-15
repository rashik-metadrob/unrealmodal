import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { BsThreeDotsVertical } from "react-icons/bs"
import { FaAngleLeft } from "react-icons/fa6";
import Product from './Product';
import "./style.css"
import { addCollection, removeCollection, addItem, removeItem } from '../redux/whishlistSlice';
export default function LikedProducts({ open, setOpen }) {
    const [openAddCollection, setOpenAddCollection] = useState(false);
    //const collections = useSelector((state) => state.wishlist.collections);
    const collections = useSelector((state) => state.wishlist.likedProducts);



    //   const [open, setOpen] = useState(true)

    // const collectionData = [];
    const [collectionData, setCollectionData] = useState(collections);


    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
                transition
                className={` fixed inset-0 bg-gray-500  bg-opacity-75 md:bg-opacity-0 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in`}

            //  className="fixed inset-0 bg-gray-500  bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-hidden">
                <div className="flex min-h-full items-end justify-center md:justify-end overflow-y-hidden text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative w-[100vw] h-[60vh] md:h-screen md:w-[350px]  transform overflow-hidden rounded-[16px] md:rounded-none bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 md:my-0 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className="bg-white p-4 pb-4 pt-1 h-full ">
                            <div className="fixed  w-full pr-8 bg-white pt-5 pb-2 ">
                                <div className="flex w-full justify-between items-center">
                                    <p className='text-[16.04px] font-medium flex justify-center items-center'><FaAngleLeft onClick={() => setOpen(false)} className='mr-3' />Liked Products</p>
                                    <div className="">
                                        {/* <BsThreeDotsVertical size={24} /> */}
                                        <Menu as="div" className="relative inline-block text-left">
                                            <div>
                                                <MenuButton className="">
                                                    <BsThreeDotsVertical size={24} className="mx-2" />                                </MenuButton>
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
                            </div>
                            <div className='mt-16 pb-28 h-[60vh] overflow-y-auto hide-scrollbar' >
                                <div className="w-full mt-3 mb-12 gap-2 hide-scrollbar">
                                    {collectionData.length ? collectionData.map((item) => (
                                        <Product
                                            likedProducts={true}
                                            key={item.id}
                                            name={item.name}
                                            color={item.color}
                                            size={item.size}
                                            qty={item.qty}
                                            price={item.price}
                                        />
                                    )) : <div className='w-full h-full md:h-[50vh] flex md:w-[350px] justify-center items-center' >
                                        <p className='text-black' >Item Not found!</p>
                                    </div>}
                                </div>



                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
