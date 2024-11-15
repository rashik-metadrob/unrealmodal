// import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { HiGlobeAsiaAustralia } from "react-icons/hi2";
import { PiDotsThreeOutlineFill } from "react-icons/pi"
import {
    FaTwitter,
    FaFacebookF,
    FaRedditAlien,
    FaWhatsapp,
    FaCopy,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import closeBtn from "/Group 1.svg";
import telegram from "/telegram.png"
import facebook from "/facebook.png"
import gmail from "/gmail.png"
import { MdContentCopy, MdOutlineDevices } from "react-icons/md";
import { BsFullscreen, BsQrCodeScan } from "react-icons/bs";

export default function ShareModal({ open, setOpen }) {
    console.log("open:", open, "setOpen", setOpen);

    const [copySuccess, setCopySuccess] = useState("");

    const copyToClipboard = () => {
        navigator.clipboard.writeText(
            "https://example.com/product/social-share-modal"
        );
        setCopySuccess("Copied!");
        setTimeout(() => setCopySuccess(""), 2000); // Clear message after 2 seconds
    };

    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 996);
    // --------------- Handle Screen for mobile & desktop ------------------

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 996);
        };

        window.addEventListener("resize", handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);



    return (
        <>
            {isDesktop?<Dialog open={open} onClose={setOpen} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500  bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-hidden">
                    <div className="relative flex min-h-full items-end justify-center overflow-y-hidden text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative w-full h-[47vh]  transform  rounded-t-2xl  bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:rounded-[4px] data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                        >
                            <span class="hidden md:block absolute top-0 z-[900] right-0 transform translate-x-1/2 -translate-y-1/2 text-white text-xs font-semibold px-2 py-1 rounded-full">
                                <img onClick={() => setOpen(false)}
                                    src={closeBtn}
                                    alt=""
                                    className="cursor-pointer"
                                />
                            </span>
                            {/* Modal Content */}
                            <div className="text-center p-[32px] font-roboto">
                                <h2 className="text-[24px] font-medium mb-2 text-start">
                                    Share this Product
                                </h2>
                                <p className="text-sm text-[#888] mb-6 text-start">
                                    If you like this product, share it with your friends.
                                </p>

                                {/* Share Icons */}
                                <div className="flex justify-between space-x-6 mb-6 mt-8">
                                    <div className="flex flex-col items-center">
                                        <div className="w-[64px] h-[64px] p-5 rounded-full bg-gray-200">
                                            <FaTwitter size={24} className="text-black" />
                                        </div>
                                        <p className="text-sm text-[#888] mt-2">Twitter</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="w-[64px] h-[64px] p-5 rounded-full bg-gray-200">
                                            <FaFacebookF size={24} className="text-black" />
                                        </div>
                                        <p className="text-sm text-[#888] mt-2">Facebook</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="w-[64px] h-[64px] p-5 rounded-full bg-gray-200">
                                            <FaRedditAlien size={24} className="text-black" />
                                        </div>
                                        <p className="text-sm text-[#888] mt-2">Reddit</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="w-[64px] h-[64px] p-5 rounded-full bg-gray-200">
                                            <FaWhatsapp size={24} className="text-black" />
                                        </div>
                                        <p className="text-sm text-[#888] mt-2">WhatsApp</p>
                                    </div>
                                </div>

                                {/* Share Link with Copy Icon */}
                                <div className="relative flex items-center justify-center mb-6 border border-gray-300 rounded-lg p-3">
                                    <input
                                        type="text"
                                        value="https://example.com/product/social-share-modal"
                                        readOnly
                                        className="text-sm text-gray-500 outline-none border-none focus:ring-0 flex-grow focus:outline-none"
                                    />
                                    <button
                                        onClick={copyToClipboard}
                                        className="ml-2 text-gray-600 hover:text-gray-800"
                                    >
                                        <FaCopy size={20} />
                                    </button>
                                    {copySuccess && (
                                        <span className="text-xs text-green-500 absolute top-16">
                                            {copySuccess}
                                        </span>
                                    )}
                                </div>
                                {/* Copy Success Message */}
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>:<div
                className={`fixed inset-0 bottom-0 flex items-end right-0 left-0 transition-transform transform w-full duration-300 bg-black bg-opacity-10 backdrop-blur-xs bg-overlay-bg z-50 ${open ? "translate-y-0" : "translate-y-full"
                    }`}
                onClick={setOpen}
            >
                <div
                    className="bg-black text-white rounded-tl-[24px] rounded-tr-[24px] shadow-lg w-full h-[465px]"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="text-md font-medium py-8 px-6 flex items-center gap-4 border-b border-[#f9f9f9]">
                        <div className="bg-white p-4 max-w-fit rounded-md">
                            <HiGlobeAsiaAustralia className="text-black" size={40} />
                        </div>
                        <span className="w-[250px] overflow-hidden">
                            https://gitex.metadrob.com/product/brown suit...
                        </span>
                    </div>

                    <div className="text-lg font-semibold py-8 px-6 flex items-center gap-4 border-b border-[#f5f5f5]">
                        <ul className="flex items-center justify-between w-full">
                            <li className="flex flex-col items-center">
                                <img
                                    src={gmail}
                                    alt="share on gmail"
                                    className="w-10 h-10 bg-white rounded-full p-1"
                                />
                                <p className="pt-2 text-sm font-normal">Gmail</p>
                            </li>
                            <li className="flex flex-col items-center">
                                <img
                                    src={telegram}
                                    alt="share on telegram"
                                    className="w-10 h-10 bg-white rounded-full p-1"
                                />
                                <p className="pt-2 text-sm font-normal">Telegram</p>
                            </li>
                            <li className="flex flex-col items-center">
                                <img
                                    src={facebook}
                                    alt="share on facebook"
                                    className="w-10 h-10 bg-white rounded-full p-1"
                                />
                                <p className="pt-2 text-sm font-normal">News Feed</p>
                            </li>
                            <li className="flex flex-col items-center">
                                <PiDotsThreeOutlineFill size={35} />
                                <p className="pt-2 text-sm font-normal">More</p>
                            </li>
                        </ul>
                    </div>
                    <div className="text-lg font-semibold py-8 px-6 flex items-center gap-4 ">
                        <ul className="flex items-center justify-between w-full">
                            <li className="flex flex-col items-center">
                                <MdContentCopy size={20} />
                                <p className="pt-2 text-sm font-normal text-center">Copy</p>
                            </li>
                            <li className="flex flex-col items-center">
                                <BsFullscreen size={20} />
                                <p className="pt-2 text-sm font-normal text-center">
                                    Long Screenshot
                                </p>
                            </li>
                            <li className="flex flex-col items-center">
                                <MdOutlineDevices size={20} />
                                <p className="pt-2 text-sm font-normal text-center">
                                    Send to devices
                                </p>
                            </li>
                            <li className="flex flex-col items-center">
                                <BsQrCodeScan size={20} />
                                <p className="pt-2 text-sm font-normal text-center">
                                    QR Code
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>}</>
    );
}