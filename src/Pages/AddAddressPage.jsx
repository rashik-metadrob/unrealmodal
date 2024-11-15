import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import BillingInformationComponent from "../Components/BillingInformationComponent";
import Navbar from "../Components/Navbar";
import RecipentsInformationComponent from "../Components/RecipentsInformationComponent";
import ShippingAddressComponent from "../Components/ShippingAddressComponent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";

const AddAddressPage = ({ home }) => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(true)
  return (
    // <div className="w-full min-h-screen">
    //   <Navbar page={"Add Address"} />
    //   {/* First part */}
    //   <div>
    //     <RecipentsInformationComponent />
    //   </div>

    //   {/* Second part */}
    //   <div className="mt-[40px]">
    //     <ShippingAddressComponent />
    //   </div>

    //   {/* Third part */}
    //   <div className="mt-[40px]">
    //     <BillingInformationComponent />
    //   </div>
    // </div>
    <div className="w-full min-h-screen">
      
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
                <div className="md:hidden" >
                  <Navbar page={"Add Address"} />
                </div>
                <div className="hidden md:block">
                  <p className="text-[16.04px] font-medium flex justify-start m-4 items-center">
                    <FaAngleLeft
                      onClick={() => { navigate('/secure-payment') }}
                      className="mr-3 cursor-pointer"
                    />
                    Add Address
                  </p>
                </div>
                <div className=" h-full w-full border overflow-y-auto overflow-hidden">
                  <div className="" >
                    <RecipentsInformationComponent />
                  </div>

                  {/* Second part */}
                  <div className="mt-[40px] ">
                    <ShippingAddressComponent />
                  </div>

                  {/* Third part */}
                  <div className="mt-[40px] md:mb-20 ">
                    <BillingInformationComponent />
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

export default AddAddressPage;