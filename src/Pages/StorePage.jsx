import { useState } from "react";
import SliderModalComponent from "../Components/SliderModalComponent";
import SoundModalComponent from "../Components/SoundModalComponent";
import WelcomeComponent from "../Components/WelcomeComponent";
import ThreeNav from "../Components/ThreeNav";

const StorePage = () => {
  const [currentModal, setCurrentModal] = useState("welcome");

  const handleEnterClick = () => {
    setCurrentModal("sound");
  };

  const handleSoundModalClose = () => {
    setCurrentModal("slider");
  };

  const handleSliderModalClose = () => {
    setCurrentModal("welcome");
  };

  return (
    <div className="w-full h-screen bg-[url('./storeImage.png')] flex justify-center items-center overflow-hidden">

      {/* <div className="absolute z-0 w-full h-screen bg-black bg-opacity-25"></div> */}
      <ThreeNav />

      {currentModal === "welcome" && (
        <WelcomeComponent onEnter={handleEnterClick} />
      )}
      {currentModal === "sound" && (
        <SoundModalComponent onClose={handleSoundModalClose} />
      )}
      {currentModal === "slider" && (
        <SliderModalComponent onClose={handleSliderModalClose} />
      )}
    </div>
  );
};

export default StorePage;
