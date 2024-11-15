import { useEffect } from "react";
import Collections from "./Collections";
import { useLocation, useNavigate } from "react-router-dom"; // Ensure this line is present

const CollectionComponent = ({add}) => {
  const location = useLocation();
  const { totalPrice } = location.state || { totalPrice: "10,899"}; // Provide default values
  console.log(totalPrice,"dsnfsdfsdvfgsdvfgsdhvsdhgfsh");
  
  const totalAmount = localStorage.getItem("totalPrice")
  const navigate = useNavigate()
  useEffect(()=>{
    localStorage.setItem("totalPrice",totalPrice)
  },[])
  const collectionData = [
    {
      id: 1,
      name: "Men's Regular Fit Th...",
      color: "Bronze Yellow",
      size: "37",
      qty: "1",
      price: "10,899",
    },
    {
      id: 2,
      name: "Men's Regular Fit Th...",
      color: "Bronze Yellow",
      size: "37",
      qty: "1",
      price: "10,899",
    },
    {
      id: 3,
      name: "Men's Regular Fit Th...",
      color: "Bronze Yellow",
      size: "37",
      qty: "1",
      price: "10,899",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col bg-white pt-2">
      <div className="flex items-center justify-between px-[14px] text-[12px]">
        <h1>{collectionData.length} items</h1>
        <h1 className="bg-[#FFF9DB] px-[7px] py-[8px]">
          Arrives by April 3 to April 9th
        </h1>
      </div>

      <div className="w-full mt-[20px] pb-36 px-3 flex gap-2 overflow-x-auto">
        {collectionData.map((item) => (
          <Collections
            key={item.id}
            name={item.name}
            color={item.color}
            size={item.size}
            qty={item.qty}
            price={item.price}
          />
        ))}
      </div>

      <div className="w-full h-[135px] fixed bottom-0 bg-white shadow-custom-shadow flex flex-col pb-[16px]">
        <div className="flex items-center justify-between px-[16px] mt-[20px] mb-[10px]">
          <div className="flex items-center gap-[7px]">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.17358 10.6436C3.92559 10.3396 3.94332 9.89168 4.22678 9.60788L8.60854 5.22639C8.75542 5.07951 8.95191 5 9.15574 5C9.35963 5 9.55577 5.07937 9.7032 5.22639L14.0848 9.60797C14.3871 9.91063 14.3871 10.4005 14.0848 10.7024C13.7824 11.0052 13.2923 11.0052 12.9901 10.7025L9.15574 6.86845L5.32147 10.7024C5.03798 10.9862 4.5896 11.004 4.28552 10.7557L4.22673 10.7024L4.17358 10.6436Z"
                  fill="#222222"
                />
              </svg>
            </div>

            <div className="flex flex-col items-start">
              <h1 className="text-[13px]">Total</h1>
              <h1 className="text-[18px] leading-none">₹{totalAmount||totalPrice}</h1>
            </div>
          </div>

          <div>
            {add?<h1 onClick={() => navigate('/order-confirm', { state: { totalAmount } })} className="bg-custom-gray hover:bg-black text-white px-[47px] py-[17px] rounded-[6px]">
              Pay Now
            </h1>:<h1 className="bg-custom-gray  text-white px-[47px] py-[17px] rounded-[6px]">
              Pay Now
            </h1>}
          </div>
        </div>

        <div>
          <p className="text-[11px] px-[16px] text-[#868E96]">
            This is the final step, after you touching Pay Now button, the
            payment will be transaction
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollectionComponent;