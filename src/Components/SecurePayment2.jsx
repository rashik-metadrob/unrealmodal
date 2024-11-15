import { useEffect } from "react";
import CollectionComponent from "../Components/CollectionComponent";
import PaymentComponent from "../Components/PaymentComponent";
import Navbar from "../Components/Navbar";
import Address from "./Address";

const SecurePayment2 = () => {
  useEffect(() => {
    console.log('call coming');

  }, [])
  return (
    <div className="w-full h-screen">
      {/* <Navbar page={"Secure Payment"} /> */}


      <div className="mx-5" >
        <div className="flex justify-between" >

          <h1 className="">Shipping</h1>
          <h1 className="text-[#3498DB]">Add / Edit</h1>
        </div>
        <Address />
      </div>
      <hr className="my-2 h-3 w-full divide-y divide-gray-300/50 text-nowrap bg-[#f5f5f5]" />
      <div className="mt-2">
        <PaymentComponent add={true} />
      </div>
      <hr className="my-2 h-3 w-full divide-y divide-gray-300/50 text-nowrap bg-[#f5f5f5]" />
      <div className="mt-2 pb-10">
        <CollectionComponent add={true} />
      </div>

    </div>
  );
};

export default SecurePayment2;