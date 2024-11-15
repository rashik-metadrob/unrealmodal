import { HiWindow } from "react-icons/hi2";
import { GiCrackedGlass } from "react-icons/gi";
import { SlMagnifier } from "react-icons/sl";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 text-white flex flex-col justify-between items-center overflow-hidden">

        <div className="w-full flex flex-col items-center justify-center pt-5">
        <h1 className="text-[8vw] font-extrabold">404 Not Found</h1>
        <p className="text-xs leading-none font-extralight text-zinc-300 px-10 text-center">The page you are looking for does not exist.</p>
        </div>

        <div className="text-[100vw] text-zinc-600/50">
            <HiWindow />
        </div>

        <svg width="0" height="0">
        <filter id="stroke">
          <feMorphology in="SourceAlpha" result="DILATED" operator="dilate" radius="2"></feMorphology>
          <feFlood floodColor="black" floodOpacity="1" result="COLORED"></feFlood>
          <feComposite in="COLORED" in2="DILATED" operator="in" result="OUTLINE"></feComposite>
          <feMerge>
            <feMergeNode in="OUTLINE" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </svg>

      <div className="absolute top-[81vw] left-[43vw] text-[50vw] z-[2]">
        <SlMagnifier style={{ filter: 'url(#stroke)' }} />
      </div>
        <div className="absolute top-[82vw] left-[44vw] text-[37vw] rounded-full text-blue-300 overflow-hidden z-[1]">
            <GiCrackedGlass />
        </div>

        <NavLink to="/" className="bg-blue-500 text-white px-4 py-2 rounded-md mb-5">Go Back</NavLink>

    </div>
  )
}

export default NotFoundPage