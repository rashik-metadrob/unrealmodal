import React, { Children } from "react";
import tw from "tailwind-styled-components";

const Overlay = tw.div`
${params =>
  params.$isOpen
    ? "fixed inset-0 bg-black/20 transform duration-300 z-40"
    : "hidden"}
`;

const SidebarContain = tw.div`
fixed w-full  h-full bg-white transform duration-300 z-50 top-0 right-0 shadow-md 
${params => (params.$isOpen ? "translate-x-0" : "translate-x-full")}
`;

const CloseIcon = tw.div`
absolute top-4 right-4
`;

const SidebarDesktop = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <Overlay $isOpen={isOpen} />
      <SidebarContain $isOpen={isOpen} className="sm:w-96">
        <CloseIcon onClick={toggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="#222222"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </CloseIcon>
        {Children}
      </SidebarContain>
    </>
  );
};

export default SidebarDesktop;
