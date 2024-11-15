import { BsThreeDotsVertical } from "react-icons/bs";
import "./style.css";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { useState } from "react";
import { removeItem,setLiked, } from "../redux/whishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductImg from "/suit.jpg";
import ProductSecondImg from "/travel.png";

const Product = ({ bag, name, color, size, price, quantity, onQuantityChange, likedProducts }) => {
  const dispatch = useDispatch();
  // console.log(bag, name, color, size, price, quantity, onQuantityChange);
  
  const liked = useSelector((state) => state.wishlist.liked);

  const [isHidden, setIsHidden] = useState(false);
  const [qty, setQty] = useState(1);

  const handleDelete = () => {
    setIsHidden(true);
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

  const deleteFromWhishlist = () => {
    dispatch(removeItem(item));
    setIsHidden(true);
    dispatch(setLiked(false));
  }

  const increment = () => {
    if (qty < 20) {
      onQuantityChange(qty + 1);
      setQty(qty + 1);
    }
  };

  const decrement = () => {
    if (qty > 1) {
      onQuantityChange(qty - 1);
      setQty(qty - 1);
    }
  };

  if (isHidden) {
    return null;
  }

  return (
    <div className="w-full hide-scrollbar mt-2.5">
      {" "}
      {/* Use flex-shrink-0 to prevent shrinking */}
      <div
        className="h-full border rounded-[5.463px] flex  gap-4 items-center justify-between md:justify-normal py-3 pl-[14px]"
      //className="border flex"
      >
        <img
          src="./image-19.png"
          alt=""
          className="w-[80px] h-[80px] object-cover"
        />
        <div className="">
          <div className="flex w-full justify-center items-center">
            <h1 className="text-[16px] truncate max-w-[180px]">{name || "Item Name"}</h1>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="z-0">
                  <BsThreeDotsVertical size={15} className="mx-2 " />{" "}
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
                      Delete Item
                    </p>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          </div>
          <p className="text-[15px] text-[#868E96]">Color: {color || "Bronze Yellow"}</p>
          <p className="text-[15px] text-[#868E96]">Size: {size || "37"}</p>
          <div className="flex items-center justify-between">
            {bag ? (
              <>
                {" "}
                <div className="flex mt-2">
                  <button className="px-2">
                    <IoRemoveOutline size={16} onClick={decrement} />
                  </button>
                  <p>{qty}</p>
                  <button className="pl-2">
                    <IoAddOutline size={16} onClick={increment} />
                  </button>
                </div>
              </>
            ) : (
              <>
                <h1 className="text-[15px] text-[#868E96]">
                  Qty: {quantity || "1"}
                </h1>
              </>
            )}
            <div onClick={likedProducts?deleteFromWhishlist : handleDelete}>
              <RiDeleteBinLine color="red" />
            </div>

            <h1 className="text-[18px] mr-3">₹{price}</h1>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Product;