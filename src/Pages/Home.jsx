import { useNavigate } from "react-router-dom";
import TailwindModal from "../Components/TailwindModal";
import { useState } from "react";
import MyBag from "../Components/MyBag";

const Home = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [openBag, setOpenBag] = useState(false);

    return (
        <>
            <div className=" text-black flex justify-center h-[89vh] items-center" >
                <div>
                    <p>Home</p>
                    <p onClick={() => navigate('/order-confirm')} >Order confirm</p>
                    <p onClick={() => navigate('/secure-payment')} >Secure Payment</p>
                    <p onClick={() => navigate('/secure-payment-2')} >Secure Payment 2</p>
                    <p onClick={()=>setOpen(true)}>Fav</p>
                    <p onClick={()=> setOpenBag(true)} >Bag</p>
                    <p onClick={() => navigate('/product-info')}>Product Info</p>
                    <TailwindModal open={open} setOpen={setOpen} />

                    <MyBag open={openBag} setOpen={setOpenBag} />


                </div>

            </div>
        </>
    );
};

export default Home;