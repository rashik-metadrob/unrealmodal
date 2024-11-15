import { useState } from "react";

const WelcomeComponent = ({ onEnter }) => {
  const [overlayVisibility, setOverlayVisibility] = useState(true);

  const handleOverlayVisibility = () => {
    onEnter()
    setOverlayVisibility(false);
  };

  return (
    <>
      {/* Overlay */}
      <div className={`fixed top-0 bg-zinc-900/30 w-full h-screen z-20 ${overlayVisibility === false && "hidden"}`}></div>

      <div className="absolute z-[21] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[265px] h-[265px] text-white flex flex-col items-center justify-start gap-[16px] pt-[35px] rounded-[10px] border border-white border-opacity-50 backdrop-blur-[28px]">
        <h1 className="text-[24px]">ARMANI</h1>
        <p className="text-center leading-4 text-[14px] px-10">
          Explore Armani&apos;s Winter 2024 collection—virtually at your
          fingertips!
        </p>
        <button
          className="mt-[24px] bg-[#222] px-[48px] py-[8px] rounded-[4px]"
          onClick={handleOverlayVisibility}
        >
          Enter
        </button>
      </div>
    </>
  );
};

export default WelcomeComponent;
