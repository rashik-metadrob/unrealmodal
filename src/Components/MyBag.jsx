import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaAngleLeft } from "react-icons/fa6";
import Collections from "./Collections";
import Product from "./Product";
import { useNavigate } from "react-router-dom";

export default function MyBag({ open, setOpen }) {
  const [openAddCollection, setOpenAddCollection] = useState(false);
  const collections = useSelector((state) => state.wishlist.collections);
  const navigate = useNavigate();

  const [collectionData, setCollectionData] = useState([
    {
      id: 1,
      name: "Men's Regular Fit Th...",
      color: "Bronze Yellow",
      size: "37",
      quantity: "1",
      price: "10,899",
    },
    {
      id: 2,
      name: "Men's Regular Fit Th...",
      color: "Bronze Yellow",
      size: "38",
      quantity: "1",
      price: "10,899",
    },
    {
      id: 3,
      name: "Men's Regular Fit Th...",
      color: "Bronze Yellow",
      size: "40",
      quantity: "1",
      price: "10,899",
    },
    {
      id: 4,
      name: "Men's Regular Fit Th...",
      color: "Bronze Yellow",
      size: "42",
      quantity: "1",
      price: "10,899",
    },
  ]);

  const handleDeleteProduct = (productId) => {
    setCollectionData((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  const handleQuantityChange = (productId, newQuantity) => {
    setCollectionData((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, quantity: newQuantity } : product // Change qty to quantity
      )
    );
  };

  // Calculate total quantity and total price
  const calculateTotals = () => {
    const totalQuantity = collectionData.reduce((total, item) => total + parseInt(item.quantity), 0);
    const totalPrice = collectionData.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/,/g, '')); // Remove all commas
      const quantity = parseInt(item.quantity); // Ensure quantity is a number
      return total + price * quantity; // Accumulate the total price
    }, 0).toFixed(2); // Ensure fixed to 2 decimal places

    return { totalQuantity, totalPrice }; // Return both values
  };

  const handleNavigation = () => {
    const { totalPrice, totalQuantity } = calculateTotals(); // Call the function to get totals
    console.log(totalPrice, totalQuantity, "Total price and quantity");
    navigate("/secure-payment", { state: { totalPrice} }); // Pass totals to the next route
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
      <DialogBackdrop
        transition
        className={` fixed inset-0 bg-gray-500  bg-opacity-75 md:bg-opacity-0 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in`}

        // className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-hidden">
        <div className="flex min-h-full items-end justify-center md:justify-end overflow-y-hidden text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative w-full md:w-[350px] h-[60vh] md:h-screen transform overflow-hidden rounded-[16px] md:rounded-none bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 md:my-0 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white p-4 pb-4 pt-1 h-full w-full ">
              <div className="fixed w-full pr-8 bg-white pt-5 pb-2 ">
                <div className="flex w-full justify-between items-center">
                  <p className="text-[16.04px] font-medium flex justify-center items-center">
                    <FaAngleLeft
                      onClick={() => setOpen(false)}
                      className="mr-3"
                    />
                    My Bag
                  </p>
                  <div>
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <MenuButton className="">
                          <BsThreeDotsVertical size={24} className="mx-2" />{" "}
                        </MenuButton>
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

              <div className="mt-16 md:mt-10 pb-28 h-[60vh] md:h-full w-full mx-auto overflow-y-auto hide-scrollbar">
                <div className="w-full mt-3 mb-12 gap-2 hide-scrollbar">
                  {collectionData.map((item) => (
                    <Product
                      bag={true}
                      key={item.id}
                      {...item}
                      onDelete={() => handleDeleteProduct(item.id)}
                      onQuantityChange={(newQuantity) =>
                        handleQuantityChange(item.id, newQuantity)
                      }
                      initialQty={item.quantity} // Correct the prop name to 'quantity'
                    />
                  ))}
                </div>
                <div className="bg-white shadow-2xl z-10 fixed bottom-0 pb-3 pr-7 w-full ">
                  <button
                    onClick={handleNavigation} // Call the function directly
                    className="w-full border py-3 text-white bg-black rounded-lg mt-6"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}