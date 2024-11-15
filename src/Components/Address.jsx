import { FaAngleRight } from "react-icons/fa6";

const Address = () => {
    return (
        <>
            <div className='my-3 bg-[#F5F5F5] flex p-3 rounded-[4px]' >
                <div className='w-11/12 ' >
                    <p className='text-[14px] ' >Arpit Mishra</p>
                    <p className='text-[14px] mt-0.5' >orders@banuelson.com</p>
                    <p className='text-[14px] mt-0.5' >+91 0987654322</p>
                    <div className='mt-2.5' >
                        <p className='text-[14px]' >MI road</p>
                        <p className='text-[14px]' >Jaipur, India</p>

                    </div>
                </div>
                <div className='w-1/12 flex justify-center items-center' >
                    <FaAngleRight size={23} />
                </div>
            </div>
        </>
    )
}

export default Address