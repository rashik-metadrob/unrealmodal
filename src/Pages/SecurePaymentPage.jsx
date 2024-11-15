import { useEffect, useState } from "react";
import CollectionComponent from "../Components/CollectionComponent";
import PaymentComponent from "../Components/PaymentComponent";
import ShippingComponent from "../Components/ShippingComponent";
import Navbar from "../Components/Navbar";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { IoAddOutline } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const SecurePayment = ({ home }) => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(true)
  useEffect(() => {
    console.log('call coming');
  }, [])
  return (
    <div className="w-full h-screen">

      {home ? <>
        <Dialog open={true} onClose={setOpen} className="relative  z-10">
          <DialogBackdrop
            transition
            className={` fixed inset-0 bg-gray-500  bg-opacity-75 md:bg-opacity-0 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in`}

          // className="fixed inset-0 bg-gray-500  bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
          />

          <div className="fixed inset-0 z-10 w-screen overflow-y-hidden">
            <div className="flex min-h-full items-end justify-center md:justify-end overflow-y-hidden text-center sm:items-center sm:p-0">
              <DialogPanel
                transition
                className="relative w-full md:w-[350px] h-screen md:h-screen transform overflow-hidden  md:rounded-none bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 md:my-0 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
              >
                <div className=" h-full w-full overflow-y-auto">
                  <div className="md:hidden" >
                    <Navbar page={"Secure Payment"} />
                  </div>
                  <div className="hidden md:block border-b">
                    <p className="text-[16.04px] font-medium flex justify-start m-4 items-center">
                      <FaAngleLeft
                        onClick={() => { navigate('/') }}
                        className="mr-3 cursor-pointer"
                      />
                      Secure Payment
                    </p>
                  </div>
                  <div>
                    <ShippingComponent />
                  </div>

                  <div className="mt-2">
                    <PaymentComponent />
                  </div>

                  <div className="mt-2">
                    <CollectionComponent />
                  </div>
                </div>

              </DialogPanel>
            </div>
          </div>

        </Dialog>


      </> : <>
        <div>
          <ShippingComponent />
        </div>

        <div className="mt-2">
          <PaymentComponent />
        </div>

        <div className="mt-2">
          <CollectionComponent />
        </div>
      </>}



    </div>
  );
};

export default SecurePayment;