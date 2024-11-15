import { IoMapOutline, IoHeartOutline } from "react-icons/io5";
import { TbMusic, TbMusicOff } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";
import { ImInfo } from "react-icons/im";
import { MdOutlineQuestionMark } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import avatar from "/travel.png";
import { useEffect, useRef, useState } from "react";
import MyBag from "./MyBag";
import TailwindModal from "./TailwindModal";
import { useAudio } from "../context/useAudio";
import InfoModal from "./InfoModal";
const ThreeNav = () => {
  const [state,setState] = useState(false)
  const [component,setComponent] = useState("")
  const { toggleAudio, isPlaying } = useAudio();
  const [drob,setDrob] = useState(false)
  const [items, setItems] = useState(false)

  return (
    <>
      {/* <!-- Top Navbar --> */}
      <nav className="absolute top-0 w-full flex justify-between items-center px-4 py-3">
        {/* <!-- Left Side (Map Icon Dropdown) --> */}
        <div className="relative group">
          <div className="bg-white/30 backdrop-blur-md text-white flex items-center justify-center w-12 h-12 rounded-full">
            <IoMapOutline size={25} />
          </div>
          {/* <!-- Dropdown content --> */}
          <div className="absolute mt-2 hidden group-hover:block bg-white/30 backdrop-blur-md rounded-lg p-4 shadow-lg min-w-36">
            <ul>
              <li>
                <a href="#" className="block text-black">
                  Armani Suits
                </a>
              </li>
              <li>
                <a href="#" className="block text-black">
                  Formal Suits
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Right Side (Wishlist, Cart, Profile Dropdown) --> */}
        <div className="flex space-x-4 items-center">
          <div onClick={()=>{setState(true); setComponent("fav")}} className="bg-white/30 backdrop-blur-md text-white flex items-center justify-center w-12 h-12 rounded-full">
            <IoHeartOutline size={25} />
          </div>
          <div onClick={()=>{setState(true); setComponent("bag")}} className="bg-white/30 backdrop-blur-md text-white flex items-center justify-center w-12 h-12 rounded-full">
            <FiShoppingCart size={25} />
          </div>
          <div className="relative group">
            <div onClick={()=>setDrob(!drob)} className="bg-white/30 backdrop-blur-md text-white rounded-full ">
              <img src={avatar} className="w-12 h-12 rounded-full" />
            </div>
            {/* <!-- Dropdown content --> */}
            {drob&&<div className="absolute mt-2 hidden group-hover:block bg-white divide-y divide-gray-100 rounded-lg p-4 shadow-lg right-0 max-w-fit min-w-60">
              <div className="py-3 text-sm text-gray-900 dark:text-white">
                <div className="flex items-center gap-4">
                  <div className="bg-white/30 backdrop-blur-md text-white rounded-full ">
                    <img src={avatar} className="w-12 h-12 rounded-full" />
                  </div>
                  <div className="font-medium truncate">
                    <p className="text-md font-medium text-black ">Bonnie Green</p>
                    <p className="text-[#999] text-sm font-medium">name@mail.com</p>
                  </div>
                </div>
              </div>
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownInformationButton"
              >
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-4 text-black px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white "
                  >
                    <MdOutlineQuestionMark size={20}/>
                    Help Center
                  </a>
                </li>
              </ul>
              <div className="py-2">
                <a
                  href="#"
                  // className="flex items-center gap-4 text-black px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  className="flex items-center gap-4 text-black px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white "

                >
                    <TbLogout2 size={20}/>
                  Log out
                </a>
              </div>
            </div>}
          </div>
        </div>
      </nav>

      {/* <!-- Bottom Navbar with Icons --> */}
      <nav className="absolute bottom-4 left-0 right-0 flex justify-center space-x-8">
      <div onClick={() => { setComponent('info'); setState(true); }} onTouchStart={() => { setComponent('info'); setState(true); }} className="bg-white/30 backdrop-blur-md text-white p-3 rounded-full">
  <       ImInfo size={25} />
      </div>
        <div className="bg-white/30 backdrop-blur-md text-white p-3 rounded-full"onClick={toggleAudio}>
          {isPlaying ? <TbMusicOff size={25}/> : <TbMusic size={25} />}
        </div>
      </nav>
     {component=="bag"&&<MyBag open={state} setOpen={setState} />}
     {component=="fav"&&<TailwindModal open={state} setOpen={setState} />}
     {component=='info'&& <InfoModal open={state} setOpen={setState} />}

    </>
  );
};

export default ThreeNav;
