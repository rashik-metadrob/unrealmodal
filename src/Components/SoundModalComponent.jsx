import React, { useState } from "react";
import { useAudio } from "../context/useAudio"; // Adjust the import path as needed

const SoundModalComponent = ({ onClose }) => {
  const { handlePlayAudio, handleStopAudio } = useAudio(); // Use the audio context
  const [overlayVisibility, setOverlayVisibility] = useState(true);

  const handleOverlayVisibility = () => {
    onClose()
    setOverlayVisibility(false);
  };

  const handleMusic = (shouldPlay) => {
    if (shouldPlay) {
      handlePlayAudio(); // Play the audio if "Yes" is clicked
    } else {
      handleStopAudio(); // Stop the audio if "No" is clicked
    }
  };

  return (
    <>
      <div className={`fixed top-0 bg-zinc-900/30 w-full h-screen z-20 ${overlayVisibility === false && "hidden"}`}></div>

      <div className="absolute z-[21] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[265px] h-[138px] text-white flex flex-col items-center justify-start gap-[16px] pt-[35px] rounded-[10px] border border-white border-opacity-50 backdrop-blur-[28px]">
        <h1 className="text-[16px] font-medium">Turn the sound on?</h1>
        <div className="flex gap-[8px]">
          <button
            className="px-[24px] py-[6px] border border-white rounded-[4px] text-[14px]"
            onClick={() => { handleOverlayVisibility(); handleMusic(true); }}
          >
            Yes
          </button>

          <button
            className="px-[24px] py-[6px] border border-white rounded-[4px] text-[14px]"
            onClick={() => { handleOverlayVisibility(); handleMusic(false); }}
          >
            No
          </button>
        </div>
      </div>
    </>
  );
};

export default SoundModalComponent;
