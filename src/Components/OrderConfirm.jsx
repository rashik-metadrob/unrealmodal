import { useEffect, useState } from 'react'
import "./style.css"
import { FaCircleCheck } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import deliveryIcon from "/Icons/delivery.png"
import Collections from './Collections';
import Address from './Address';
import { useLocation, useNavigate } from 'react-router-dom';
import { ring2 } from 'ldrs'


// Default values shown

function OrderConfirm() {
    const location = useLocation();
    const { totalAmount } = location.state || { totalAmount: 0 };
    console.log(totalAmount, "totalAmount in order confirm collection");
    
    ring2.register()

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    
    })
    const navigate = useNavigate()
    const collectionData = [
        {
            id: 1,
            name: "Men's Regular Fit Th...",
            color: "Bronze Yellow",
            size: "37",
            qty: "1",
            price: "10,899",
        },
        {
            id: 2,
            name: "Men's Regular Fit Th...",
            color: "Bronze Yellow",
            size: "37",
            qty: "1",
            price: "10,899",
        },
        {
            id: 2,
            name: "Men's Regular Fit Th...",
            color: "Bronze Yellow",
            size: "37",
            qty: "1",
            price: "10,899",
        },
    ];
    const handleBackToShopping = () =>{
        localStorage.removeItem("totalPrice")
        navigate("/")

    }
    return (
        <>
            {loading ? <div className='w-full h-[85vh] flex justify-center items-center' >
                <div className='' >
                    <div className='flex justify-center' >
                        <l-ring-2
                            size="40"
                            stroke="5"
                            stroke-length="0.25"
                            bg-opacity="0.1"
                            speed="0.8"
                            color="green"
                        ></l-ring-2>
                    </div>
                    <p className='text-sm font-semibold mt-3' >Confirming your order</p>
                </div>
            </div> : <div className='w-full confirmContain sm:hide-scrollbar-y' >
                <div className='w-full sm:w-[350px] sm:hide-scrollbar-y  mx-auto' >
                    {/* Hieght should be full  */}
                    <div className='bg-FFFFFF h-full  sm:overflow-hidden pb-32  mx-5 ' >
                        {/* <div className='py-2' >
                            <p className='text-center' >Order Confirmation</p>
                        </div> */}
                        <div className=' flex mt-2' >
                            <div className='w-1/4' >
                                <FaCircleCheck className='w-[60px] h-[60px]' color='3CAF47' />
                            </div>
                            <div className='w-3/4' >
                                <p className='text-[18px]' >Thank you!</p>
                                <p className='text-[16px]  w-full'>Your order #BE12345 has been placed.</p>
                            </div>

                        </div>
                        <div className=' text-[14px] py-4' >
                            <p>We sent an email to orders@banuelson.com with your order confirmation and bill. </p>

                        </div>
                        <div className=' text-[14px] py-2' >
                            <p>Time placed: 17/02/2020 12:45 CEST</p>

                        </div>
                        <div className='' >
                            <p className=' text-[15px] mt-4'>Shipping </p>
                            <Address />
                        </div>
                        <div className='' >
                            <p className=' text-[15px] mt-4'>Billing </p>
                            <Address />
                        </div>
                        <div className='' >
                            <p className=' text-[15px] mt-4'>Order Items </p>
                            <div className='mt-2 flex rounded-[4px]  justify-center items-center' >
                                <div className='w-1/2 flex justify-start items-center' >
                                    <p className='text-[12px]' >2 items</p>

                                </div>
                                <div className='w-1/2 bg-[#FFF9DB] text-[#495057]' >
                                    <p className='text-[12px] p-1 py-1.5' >Arrives by April 3 to April 9th</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className='border mt-3'> */}
                        <div className="w-full mt-3 flex gap-2  hide-scrollbar">
                            {collectionData.map((item) => (
                                <Collections
                                    key={item.id}
                                    name={item.name}
                                    color={item.color}
                                    size={item.size}
                                    qty={item.qty}
                                    price={item.price}
                                />
                            ))}
                        </div>

                        {/* </div> */}
                        <div className=' mt-3 pb-12' >
                            <p className='text-[15px]' >Order Summery</p>
                            <div className='text-[13px] mt-1 flex justify-between' >
                                <p>Subtotal</p>
                                <p>${totalAmount}</p>
                            </div>
                            <div className='text-[13px] mt-2 flex justify-between' >
                                <p>Shipping</p>
                                <p>$0,00</p>
                            </div>
                            <hr className='mt-3' />
                        </div>



                    </div>
                    <div className=' bg-white shadow-2xl z-10 fixed px-5 bottom-0 pb-3 w-full sm:w-[350px]' >
                        <div className='text-[16px] mt-3 flex justify-between' >
                            <p>Total</p>
                            <p>${totalAmount}</p>
                        </div>
                        <div className=' mt-5 w-full' >
                            <button onClick={() =>handleBackToShopping()} className='text-[17px] w-full py-3 rounded-[4px] border-black border-[2px]' >
                                Back to Shopping
                            </button>

                        </div>
                    </div>


                </div>
            </div>}

        </>
    )
}

export default OrderConfirm
