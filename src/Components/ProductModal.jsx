
// import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
// import { useState } from 'react';
import { IoAddOutline } from "react-icons/io5";
import AddCollection from './AddCollection';
import { useDispatch, useSelector } from 'react-redux';
import { BsThreeDotsVertical } from "react-icons/bs"
import { FaAngleLeft } from "react-icons/fa6";
import Collections from './Collections';
// import Product from './Product';
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import ProductImg from "/suit.jpg";
import ProductSecondImg from "/travel.png";
import { FaStar, FaHeart } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { IoClose } from 'react-icons/io5';
import { motion } from "framer-motion";
// import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
// import MyBag from "./MyBag.jsx";
import NotificationModal from './NotificationModal';
import { addCollection, removeCollection, addItem, removeItem } from '../redux/whishlistSlice';
import ShareModal from './ShareModal';

export default function ProductModal({ open, setOpen }) {
    const [openAddCollection, setOpenAddCollection] = useState(false);
    const collections = useSelector((state) => state.wishlist.collections);
    const liked = useSelector((state) => state.wishlist.liked);
    const navigate = useNavigate()
    const [modalType, setModalType] = useState(false);
    const [product, setProduct] = useState("");
    const [imgIndex, setImgIndex] = useState(0);
    const [expanded, setExpanded] = useState(true); // State to handle expansion

    const [added, setAdded] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false);

    // --------------- share modal Functionality ------------------------
    const [OpenShareModal, setOpenShareModal] = useState(false);

    const toggleShareModal = () => {
        setOpenShareModal(!OpenShareModal);
    };

    const item = {
        id: 1,
        quantity: "1",
        name: "Bronze Yellow Men's Regular Fit Three Piece Suit",
        brand: "Raymond’s",
        price: 10899,
        oldPrice: 14899,
        ratings: 32,
        images: [
          ProductImg, // First image
          ProductSecondImg,
          ProductImg,
        ],
        colors: ["#8C3E44", "#E54242", "#34C4CD", "#1B32A9"],
        sizes: [32, 34, 36, 38],
        material: "Tuxedo",
        fitType: "Regular Fit",
        style: "Open front",
        origin: "India",
        description:
          "Welcome to Ovalista, the premier virtual showroom designed to elevate your online retail experience. Meticulously crafted, Ovalista combines cutting-edge 3D modeling with intuitive navigation to create a visually stunning and user-friendly environment.",
      }
    // useEffect(() => {
    //     if (added) {
    //         setTimeout(()=>{
    //             setOpen(false);
    //         },500)
    //     }
    // }, [added]);

    const handleCloseAndOpenNext = () => {
        // Close the first modal
        console.log("checkinggg222322");

        setAdded(true);

    };

    useEffect(() => {
        // Once the `open` state changes to `false`, set `added` to `true`.
        setTimeout(() => {
            if (added) {
                setOpen(true);
                setAdded(false);

            }
        }, 2000)
    }, [added]);

    const products = {
        id: 1,
        name: "Bronze Yellow Men's Regular Fit Three Piece Suit",
        brand: "Raymond’s",
        price: 10899,
        oldPrice: 14899,
        ratings: 32,
        images: [
            ProductImg, // First image
            ProductSecondImg,
            ProductImg,
        ],
        colors: ["#8C3E44", "#E54242", "#34C4CD", "#1B32A9"],
        sizes: [32, 34, 36, 38],
        material: "Tuxedo",
        fitType: "Regular Fit",
        style: "Open front",
        origin: "India",
        description:
            "Welcome to Ovalista, the premier virtual showroom designed to elevate your online retail experience. Meticulously crafted, Ovalista combines cutting-edge 3D modeling with intuitive navigation to create a visually stunning and user-friendly environment.",
    };

    useEffect(() => {
      
            setExpanded(true);
        
    }, [open])

    useEffect(() => {
        console.log('HEOOOOOOOOO')
        setProduct(products);

        return (() => {
            setOpen(false);
            setExpanded(false)
        })
    }, []);

    // ------------------ handle Favorite item ------------------

    const dispatch = useDispatch();
    const wishlist = useSelector((state) => state.wishlist.likedProducts);

    const alreadyFavorite = wishlist?.some(
        (wishlistItem) => wishlistItem.id === item.id
    );

    useEffect(() => {
        if (!liked) {
            setIsFavorite(false)
        } else {
            setIsFavorite(true)
        }
    }, [liked])

    // Use useEffect to update the local state based on the wishlist
    useEffect(() => {
        setIsFavorite(alreadyFavorite);
    }, [alreadyFavorite]);

    const handleToggleFavorite = () => {
        setIsFavorite(!isFavorite);
        // Here you can also add/remove the item from the wishlist
        if (!alreadyFavorite) {
            // Add to wishlist logic
            dispatch(addItem(item));
            console.log("Item added to wishlist");
        } else {
            // Remove from wishlist logic
            dispatch(removeItem(item));
            console.log("Item removed from wishlist");
        }
    };

    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
                transition
                className={` fixed inset-0 bg-gray-500  bg-opacity-75 md:bg-opacity-0 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in`}
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-hidden">
                <div className={`flex min-h-full items-end ${expanded ? 'md:justify-end' : 'justify-center'} justify-center  overflow-y-hidden text-center sm:items-center sm:p-0`}>
                    <DialogPanel
                        transition
                        className={`${'md:w-[350px]'} relative transform overflow-hidden  text-left shadow-xl transition-all  data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in  sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 sm:w-full
                        ${expanded ? 'h-[100vh] translate-y-0 rounded-[0px] md:pb-10' : 'rounded-[16px] h-auto md:text-white md:border-[2px] border-white border-opacity-50 '} 
                        ${expanded ? 'animate-expandModal' : ''}
                        `}
                    ><div
                        className={`w-full bg-white cursor-pointer items-center justify-end py-2 px-5 ${expanded
                            ? "flex"
                            : "hidden"}`}
                        onClick={() => setOpen(false)}
                    >
                            <IoClose size={24} />
                        </div>
                        <div className={`${expanded ? 'bg-white' : 'bg-white md:backdrop-blur-[28px] md:bg-opacity-15'} p-4 pb-20 pt-4 h-full w-full `}>


                            {/* <div className='mt-16 pb-28 h-[60vh] w-full mx-auto overflow-y-auto hide-scrollbar' >
                                <div className="w-full mt-3 mb-12 gap-2 hide-scrollbar">
                                    {collectionData.map((item) => (
                                        <Product
                                            bag={true}
                                            key={item.id}
                                            name={item.name}
                                            color={item.color}
                                            size={item.size}
                                            qty={item.qty}
                                            price={item.price}
                                        />
                                    ))}
                                </div>
                                <div className='bg-white shadow-2xl z-10  fixed bottom-0 pb-3 pr-7  w-full '>
                                    <button onClick={handleNavigation} className='w-full border  py-3 text-white bg-black rounded-lg mt-6' >Checkout</button>
                                </div>
                        



                            </div> */}
                            <div className=''>
                                <div className="absolute z-50 w-[40.8px] h-[20px] bg-gradient-to-r from-gray-200 to bg-yellow-50 m-3 flex justify-center items-center ">
                                    <span className="text-black text-[11.2px] font-semibold">
                                        !New
                                    </span>
                                </div>
                                <div className={`absolute top-6 right-6 ${expanded && "top-[5rem]"} z-50`}>
                                    <div onClick={handleToggleFavorite} className="rounded-full cursor-pointer bg-[#8d8d8d] bg-opacity-70 w-10 h-10 flex justify-center items-center">
                                        <FaHeart color={isFavorite ? "red" : "white"} />
                                    </div>
                                    <div onClick={toggleShareModal} className="rounded-full cursor-pointer bg-[#8d8d8d] bg-opacity-70 w-10 h-10 mt-2 flex justify-center items-center">
                                        <IoIosShareAlt color="white" size={25} />
                                    </div>
                                </div>
                                <div className="">
                                    <img
                                        src={products.images[imgIndex]}
                                        alt="Product"
                                        className="object-cover w-full  rounded-md h-[214.4px]"
                                    />
                                </div>
                                {/* <div className="flex justify-center items-center gap-1 mt-2">
                                    <div
                                        className={`rounded-full w-3 h-3 ${imgIndex === 0
                                            ? "bg-gradient-to-r from-[#16F6FE] to-[#AB00FF]"
                                            : "bg-gray-200"
                                            }`}
                                        onClick={() => handleImageChange(0)}
                                    ></div>
                                    <div
                                        className={`rounded-full w-3 h-3 ${imgIndex === 1
                                            ? "bg-gradient-to-r from-[#16F6FE] to-[#AB00FF]"
                                            : "bg-gray-200"
                                            }`}
                                        onClick={() => handleImageChange(1)}
                                    ></div>
                                    <div
                                        className={`rounded-full w-3 h-3 ${imgIndex === 2
                                            ? "bg-gradient-to-r from-[#16F6FE] to-[#AB00FF]"
                                            : "bg-gray-200"
                                            }`}
                                        onClick={() => handleImageChange(2)}
                                    ></div>
                                </div> */}

                            </div>
                            <div className=' mt-4 h-full overflow-y-auto hide-scrollbar' >
                                <p className='font-semibold text-[15.46px]' >Bronze Yellow Men's Regular Fit Three Piece Suit, Coat Pant...</p>
                                <p className={`${expanded ? 'text-[#565656]' : 'md:text-[#E5E5E5]'} font-normal mt-2 text-[13.53px] text-[#565656] `} >There might be minor color variation between actual product and image...</p>
                                {expanded && (<div
                                    className="mt-3"
                                >
                                    <p className="text-[#565656] font-medium text-[11.2px] ">
                                        Raymond’s
                                    </p>
                                    <div className='flex gap-1.5 mt-2 items-center ' >
                                        <div className='flex gap-1 ' >
                                            {Array(5).fill(<FaStar color="#FFC403" />)}
                                        </div>
                                        <p className="text-xs ml-2 text-[11.2px]">32 ratings</p>
                                    </div>
                                </div>)}
                                <div className="flex gap-2 mt-2 items-center  md:flex-row-reverse md:justify-end">
                                    <del className={`${expanded ? 'text-[#565656]' : 'md:text-[#E5E5E5]'} text-[#565656] text-[15.46px]`}>
                                        ₹14,899
                                    </del>
                                    <p className={`${expanded ? 'text-black' : 'md:text-white'} font-semibold text-black text-[19.32px]`}>
                                        ₹10,899
                                    </p>
                                </div>
                                {/* New Description */}
                                {expanded && (
                                    <div className="mt-2.5  pb-60">
                                        <hr className='text-[#E6E6E6] mt-3' />

                                        <p className="font-medium mt-2 text-black text-[11.2px]">
                                            Select Color
                                        </p>
                                        <div className="flex mt-2 gap-2.5">
                                            {["#8C3E44", "#E54242", "#34C4CD", "#1B32A9"].map(
                                                (color, index) => (
                                                    <div key={index}>
                                                        <div
                                                            className="rounded-[4.8px] w-[32px] h-[32px]"
                                                            style={{ backgroundColor: color }}
                                                        ></div>
                                                        <p className="text-[11.2px] text-[#565656] text-center">
                                                            {["Brown", "Red", "Cyan", "Blue"][index]}
                                                        </p>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                        <hr className='text-[#E6E6E6] mt-3' />

                                        <p className="font-medium mt-2 text-black text-[11.2px]">
                                            Select Size
                                        </p>
                                        <div className="flex mt-2 gap-2.5">
                                            {[32, 34, 36, 38].map((size, index) => (
                                                <div key={index}>
                                                    <div className="rounded-[4.8px] w-[33.6px] h-[32px] border border-[#565656] flex justify-center items-center">
                                                        <p className="text-[11.2px]">{size}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <hr className='text-[#E6E6E6] mt-3' />

                                        <p className="font-medium mt-2 text-black text-[12.8px]">
                                            About Product
                                        </p>
                                        <div className="flex mt-1.5 gap-2">
                                            <p className="text-[11.2px] font-normal text-[#565656]">
                                                Welcome to Ovalista, the premier virtual showroom designed to
                                                elevate your online retail experience. Meticulously crafted,
                                                Ovalista combines cutting-edge 3D modeling with intuitive
                                                navigation to create a visually stunning and user-friendly
                                                environment.
                                            </p>
                                        </div>
                                        <hr className='text-[#E6E6E6] mt-3' />

                                        <p className="font-medium mt-2 text-black text-[12.8px]">
                                            Product Specification
                                        </p>
                                        <div className='  mt-1.5' >
                                            <div className="flex gap-2 mt-1">
                                                <p className='w-1/2  text-[11.2px] text-[#565656]' >Material composition: <span className='text-[#222222] font-semibold' >Tuxedo</span></p>
                                                <p className='w-1/2  text-[11.2px] text-[#565656]' >Fit type: <span className='text-[#222222] font-semibold' >Regular Fit</span></p>
                                            </div>
                                            <div className="flex gap-2 mt-1">
                                                <p className='w-1/2  text-[11.2px] text-[#565656]' >Style: <span className='text-[#222222] font-semibold' >Open front</span></p>
                                                <p className='w-1/2  text-[11.2px] text-[#565656]' >Country of Origin: <span className='text-[#222222] font-semibold' >India</span></p>
                                            </div>
                                        </div>




                                    </div>
                                )}

                            </div>
                            <div className={`${expanded ? 'bg-white' : 'md:bg-transparent'} shadow-2xl z-10 flex justify-between pt-6 gap-2 fixed bottom-0 pb-3 pr-7  w-full `}>
                                <button onClick={handleCloseAndOpenNext} className='w-1/2  text-[13.53px]  py-2.5 text-white bg-[#222222] rounded-[7.73px] ' >Add to Bag</button>
                                {expanded ?
                                    <button onClick={() => { setOpen(false); setExpanded(false); navigate('/secure-payment') }} className='w-1/2 border text-[13.53px]  border-[#989898] font-normal  py-2.5 text-[#000000] bg-whte rounded-[7.73px] ' >Buy Now</button> :
                                    <button onClick={() => setExpanded(!expanded)} className='w-1/2 border text-[13.53px]  border-[#989898] md:border-[2px] md:border-[white] font-normal  py-2.5 text-[#000000] bg-whte rounded-[7.73px] ' >More Info</button>

                                }
                            </div>


                        </div>

                    </DialogPanel>
                    <NotificationModal open={added} setOpen={setAdded} image={ProductImg} message="Added to the bag" />
                    {OpenShareModal && (
                        <>
                       
                        <ShareModal
                            open={OpenShareModal}
                            setOpen={setOpenShareModal}
                            toggleShareModal={toggleShareModal}
                            />
                            </>
                    )}
                </div>
            </div>
        </Dialog>
    )
}
