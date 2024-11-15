import { useNavigate } from "react-router-dom";
const Navbar = ({page}) => {
    const navigate = useNavigate();
    
    
    return (
      <div className="relative w-full h-[8vh] bg-white flex justify-center items-center">
  
        <div onClick={()=>navigate(-1)} className="absolute h-full flex items-center left-5 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.75704 15.7307C8.28529 16.1155 7.59024 16.0879 7.14988 15.6481L0.351275 8.84909C0.123372 8.62119 0 8.3163 0 8.00003C0 7.68365 0.12316 7.37932 0.351275 7.15055L7.15002 0.351803C7.61965 -0.117268 8.37982 -0.117268 8.84822 0.351803C9.31801 0.821034 9.31801 1.58141 8.84836 2.05039L2.8992 8.00003L8.84822 13.9495C9.28862 14.3894 9.31617 15.0851 8.93084 15.557L8.84827 15.6482L8.75704 15.7307Z"
              fill="#222222"
            />
          </svg>
        </div>
  
        <div className="text-[#212529]">
          <h1 className="text-[15px] md:text-[18px] font-normal">{page}</h1>
        </div>
  
      </div>
    );
  };
  
  export default Navbar;
