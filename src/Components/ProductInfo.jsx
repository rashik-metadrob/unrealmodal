import { useEffect, useState } from "react";
import ProductImg from "/image-19.png";
import ProductSecondImg from "/travel.png";
import { FaStar, FaHeart } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { motion } from "framer-motion";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import MyBag from "./MyBag";

import { useNavigate } from "react-router-dom";
import SecurePayment from "../Pages/SecurePaymentPage";
const ProductInfo = ({ open, setOpen }) => {
    // if(!open){
    //     return 
    // }
    useEffect(()=>{
        setOpen(true)
    },[])
    const navigate = useNavigate()
    const [modalType, setModalType] = useState(false);
    const [product, setProduct] = useState("");
    const [imgIndex, setImgIndex] = useState(0);
    const totalPrice = 10899
    const modalVariants = {
        hidden: { opacity: 0, y: "100vh" }, // Starts from below the screen
        visible: { opacity: 1, y: 0, transition: { duration: 1 } }, // Visible state (on entry)
        exit: { opacity: 0, y: "-100vh", transition: { duration: 1 } }, // Moves up off the screen
    };
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
        console.log('HEOOOOOOOOO')
        setProduct(products);
    }, []);
    const handleImageChange = (index) => {
        setImgIndex(index);
    };
    const [openCart, setOpenCart] = useState(false);
    const [visible,setVisible] = useState(false)
    const handle = () => {
        setOpenCart(true);
    };
    
    // useEffect(() => {
    //     if (openCart) {
    //         setOpen(false);
    //     }
    // }, [openCart]);
    return (        
        <>
            {modalType ? (
                <Dialog open={open} onClose={setOpen} className={`${visible?"hidden":'block'}relative z-10`}>
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                    />

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
                            <DialogPanel
                                transition
                                className="relative transform overflow-hidden rounded-lg w-full bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                            >
                                <div className="bg-white pb-4 pt-5 sm:p-6 sm:pb-4 ">


                                    
                                    <div className="relative flex min-h-screen  pb-20 flex-col justify-center sm:py-12">
                                        <div className="relative bg-white h-full w-full sm:max-w-lg sm:rounded-lg sm:px-10 sm:mx-auto min-h-screen sm:min-h-auto z-50 sm:h-auto">
                                            <motion.div
                                                className={` ${visible?"hidden":'block'} relative mx-auto max-w-md p-3  bg-white  rounded-lg sm:max-w-lg sm:h-auto min-h-[214.4px] sm:rounded-lg sm:px-10 sm:mx-auto sm:min-h-auto`}
                                                variants={modalVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                            >
                                                <div className="absolute z-50 w-[40.8px] h-[20px] bg-gradient-to-r from-gray-200 to bg-yellow-50 m-3 flex justify-center items-center ">
                                                    <span className="text-black text-[11.2px] font-semibold">
                                                        !New
                                                    </span>
                                                </div>
                                                <div className="absolute top-5 right-4 z-50">
                                                    <div className="rounded-full bg-gray-200 w-10 h-10 flex justify-center items-center">
                                                        <FaHeart color="red" />
                                                    </div>
                                                    <div className="rounded-full bg-gray-200 w-10 h-10 mt-2 flex justify-center items-center">
                                                        <IoIosShareAlt color="white" size={25} />
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <img
                                                        src={product.images[imgIndex]}
                                                        alt="Product"
                                                        className="object-cover w-full  rounded-md h-[214.4px]"
                                                    />
                                                </div>
                                                <div className="flex justify-center items-center gap-1 mt-2">
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
                                                </div>
                                            </motion.div>

                                            {/* Product Details */}
                                            <motion.div
                                                className="w-full"
                                                variants={modalVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                            >
                                                <p className="font-semibold m-3 mt-0 mb-0 text-[16px]">
                                                    Bronze Yellow Men's Regular Fit Three Piece Suit, Coat Pant...
                                                </p>
                                                <p className="text-gray-500 ml-3 mt-2 font-medium text-[11.2px]">
                                                    Raymond’s
                                                </p>
                                            </motion.div>

                                            <motion.div
                                                className="flex gap-1 ml-3 mt-3 w-[200.2px] h[20px]"
                                                variants={modalVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                            >
                                                {Array(5).fill(<FaStar color="#FFC403" />)}
                                                <p className="text-xs ml-2 text-[11.2px]">32 ratings</p>
                                            </motion.div>
                                            <motion.div
                                                className="flex gap-2 ml-3 mt-2"
                                                variants={modalVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                            >
                                                <p className="font-semibold text-black text-[19.2px]">₹10,899</p>
                                                <del className="mt-3 text-gray-500 font-medium text-[12.8px]">
                                                    ₹14,899
                                                </del>
                                            </motion.div>
                                            <motion.hr
                                                className="bg-gray-300 ml-3 mr-3 mt-3"
                                                variants={modalVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                            ></motion.hr>

                                            {/* Color Selection */}
                                            <motion.div
                                                variants={modalVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                            >
                                                <p className="font-medium ml-3 mt-2 text-black text-[11.2px]">
                                                    Select Color
                                                </p>
                                                <div className="flex ml-3 mt-1 gap-2">
                                                    {["#8C3E44", "#E54242", "#34C4CD", "#1B32A9"].map(
                                                        (color, index) => (
                                                            <div key={index}>
                                                                <div
                                                                    className="rounded-sm w-[32px] h-[32px]"
                                                                    style={{ backgroundColor: color }}
                                                                ></div>
                                                                <p className="text-[11.2px]">
                                                                    {["Brown", "Red", "Cyan", "Blue"][index]}
                                                                </p>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </motion.div>
                                            <motion.hr
                                                className="bg-gray-300 ml-3 mr-3 mt-3"
                                                variants={modalVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                            ></motion.hr>

                                            {/* Size Selection */}
                                            <motion.div
                                                variants={modalVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                            >
                                                <p className="ml-3 mt-2 font-semibold text-black text-[11.2px]">
                                                    Select Size
                                                </p>
                                                <div className="flex ml-3 mt-1 gap-2">
                                                    {[32, 34, 36, 38].map((size, index) => (
                                                        <div key={index}>
                                                            <div className="rounded-sm w-[33.6px] h-[32px] border flex justify-center items-center">
                                                                <p className="text-[11.2px]">{size}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                            <motion.hr
                                                className="bg-gray-300 ml-3 mr-3 mt-3"
                                                variants={modalVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                            ></motion.hr>

                                            {/* About Product */}
                                            <motion.div
                                                variants={modalVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                            >
                                                <p className="text-[12.8px] ml-3 mt-2 font-medium text-black">
                                                    About Product
                                                </p>
                                                <div className="flex ml-3 mt-1 gap-2">
                                                    <p className="text-[11.2px] font-normal">
                                                        Welcome to Ovalista, the premier virtual showroom designed to
                                                        elevate your online retail experience. Meticulously crafted,
                                                        Ovalista combines cutting-edge 3D modeling with intuitive
                                                        navigation to create a visually stunning and user-friendly
                                                        environment.
                                                    </p>
                                                </div>
                                            </motion.div>
                                            <motion.hr
                                                className="bg-gray-300 ml-3 mr-3 mt-3"
                                                variants={modalVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                            ></motion.hr>

                                            {/* Product Specifications */}
                                            <motion.div
                                                variants={modalVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                            >
                                                <p className="text-[12.8px] ml-3 mt-2 font-medium text-black">
                                                    Product Specifications
                                                </p>
                                                <div className="flex ml-3 mt-2 gap-2">
                                                    <div className="flex gap-1 w-[200px]">
                                                        <p className="text-xs font-medium text-[11.2px]">
                                                            Material composition:
                                                        </p>
                                                        <p className="text-xs font-bold text-[11.2px]">Tuxedo</p>
                                                    </div>
                                                    <div className="flex gap-1 w-[200px]">
                                                        <p className="text-xs font-medium text-[11.2px]">Fit type:</p>
                                                        <p className="text-xs font-bold text-[11.2px]">Regular Fit</p>
                                                    </div>
                                                </div>
                                                <div className="flex ml-3 mt-1 gap-2">
                                                    <div className="flex gap-1 w-[200px]">
                                                        <p className="text-xs font-medium text-[11.2px]">Style:</p>
                                                        <p className="text-xs font-bold text-[11.2px]">Open front</p>
                                                    </div>
                                                    <div className="flex gap-1 w-[200px]">
                                                        <p className="text-xs font-medium text-[11.2px]">
                                                            Country of Origin:
                                                        </p>
                                                        <p className="text-xs font-bold text-[11.2px]">India</p>
                                                    </div>
                                                </div>
                                            </motion.div>

                                            {/* Footer Buttons */}
                                            <div className="border bg-white z-10 fixed px-5 bottom-1 w-full">
                                                <div className="mt-5 w-full flex gap-2">
                                                    <button  className="text-[11.2px] h-[39.6px] flex justify-center items-center w-full font-semibold text-black rounded-md border border-black hover:bg-gradient-to-l">
                                                        Add to Bag
                                                    </button>
                                                    <button onClick={()=>navigate('/secure-payment',{ state: { totalPrice} })} className="text-[11.2px]  flex justify-center items-center w-full font-semibold text-white bg-black rounded-md hover:bg-gray-200">
                                                        Buy Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </Dialog>
            ) : (
                <>

                    <div
                        className={` ${openCart ? "hidden" : "flex flex-col justify-center items-end border bg-slate-50 sm:pt-12 overflow-y-hidden"} `}
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className=" bg-white absolute bottom-14  ring-1 ring-gray-900/5 w-full  sm:max-w-lg  sm:rounded-lg sm:px-10 sm:mx-auto  sm:min-h-auto z-50 sm:h-auto">
                            <div className="relative mx-auto max-w-md p-3 bg-white ring-1 ring-gray-900/5   rounded-lg  sm:max-w-lg sm:h-auto min-h-[214.4px] sm:rounded-lg sm:px-10 sm:mx-auto sm:min-h-auto  ">
                                <div className="absolute top-5 right-4 z-50  ">
                                    <div className="rounded-full  bg-gray-200 w-10 h-10  flex justify-center items-center">
                                        <FaHeart color="red" />
                                    </div>
                                    <div className="rounded-full bg-gray-200 w-10 h-10 mt-2 flex justify-center items-center">
                                        <IoIosShareAlt color="white" size={25} />
                                    </div>
                                </div>

                                <img
                                    src={ProductImg}
                                    alt=""
                                    className="object-cover rounded-md  h-[214.4px] w-full"
                                />
                                {/* <div className="flex justify-center items-center gap-1 mt-2">
                  <div className="rounded-full w-3 h-3 bg-gradient-to-r from-[#16F6FE] to bg-[#AB00FF]"></div>
                  <div className="rounded-full w-3 h-3 bg-gray-200"></div>
                  <div className="rounded-full w-3 h-3 bg-gray-200"></div>
                </div> */}
                            </div>

                            <div className="w-full ">
                                <p className="font-semibold m-3 mt-0 mb-0 text-[16px]">
                                    Bronze Yellow Men's Regular Fit Three Piece Suit, Coat Pant...
                                </p>
                            </div>
                            <div className="flex ml-3 mt-1 gap-2">
                                <p className="text-[11.2px] font-normal">
                                    There might be minor color variation between actual product
                                    and image...
                                </p>
                            </div>
                            <div className="flex gap-2 ml-3 mt-2">
                                <del className="mt-1 text-gray-500 font-medium text-[12.8px]">
                                    ₹14,899
                                </del>
                                <p className="font-semibold text-black text-[19.2px]">
                                    ₹10,899
                                </p>
                            </div>

                            <div className="border bg-white z-10 fixed px-5 bottom-1 w-full">
                                <div className=" mt-5 w-full flex  justify-center gap-2 items-center">
                                    <button onClick={()=>handle()} className="text-[13.53px] w-1/2 h-[36px]  rounded-[8px] bg-black text-white cursor-pointer">
                                        Add To Bagsww
                                    </button>
                                    <button
                                        className="text-[13.53px]  w-1/2 h-[36px]  rounded-[8px] border-black border-[1px] cursor-pointer"
                                        onClick={() => setModalType(true)}
                                    >
                                        More Infosss
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <MyBag open={openCart} setOpen={setOpenCart} />
           

                </>
            )}
        </>
    );
};

export default ProductInfo

