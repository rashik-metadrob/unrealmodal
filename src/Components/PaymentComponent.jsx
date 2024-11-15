import { useEffect } from "react";

const PaymentComponent = ({ add }) => {

  useEffect(() => {
    console.log('paymrny9999999999');
    console.log(":::::::::::::::::::::::::::")
  }, [])
  return (
    <div className="flex flex-col bg-white">
      {add ? <div className="flex mx-5 my-3 justify-between" >

        <h1 className="">Payment</h1>
        <h1 className="text-[#3498DB]">Add / Edit</h1>
      </div> : <h1 className="mx-5 mt-2">Payment</h1>}

      <div className="flex flex-col px-5 my-3 bg-[#F5F5F5] py-4 mx-5 rounded">
        <div className="flex gap-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.3333 5.25C20.5616 5.25443 20.7456 5.43841 20.75 5.66667V19C20.75 19.2347 20.5597 19.425 20.325 19.425H3.66667C3.43521 19.4205 3.25 19.2315 3.25 19V5.66667C3.25443 5.43841 3.43841 5.25443 3.66667 5.25H20.3333ZM20.3333 4H3.66667C2.74619 4 2 4.74619 2 5.66667V19C2 19.9205 2.74619 20.6667 3.66667 20.6667H20.3333C21.2538 20.6667 22 19.9205 22 19V5.66667C22 4.74619 21.2538 4 20.3333 4Z"
              fill="#212529"
            />
            <path
              d="M2.96671 8.15857H20.8917"
              stroke="#212529"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.99161 11.5H20.9166"
              stroke="#212529"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.16666 16.5H11.1667"
              stroke="#212529"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.1667 16.5H17.8333"
              stroke="#212529"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <h1 className="text-[15px] md:text-[18px]">Add Credit / Debit Card</h1>
        </div>

        <form
          className="flex flex-col items-center gap-[10px] mt-[19px]"
          action=""
        >
          <div className=" w-full" >
            <input
              className="w-full h-[56px] rounded-sm border-none pl-[16px] outline-none"
              type="text"
              placeholder="Bhavya Mathur"
            />
          </div>
          <div className="w-full" >
            <input
              className="w-full h-[56px] rounded-sm border-none pl-[16px] outline-none"
              type="text"
              placeholder="2145 1414 0258"
            />
          </div>

          <div className="w-full flex flex-col items-start ">
            <h1 className="text-[12px] mt-[12px]">Expiry Date</h1>

            <div className="w-full flex justify-start gap-2 mt-[7px]">
              <input
                className="w-1/2 h-[56px] pl-[17px] outline-none rounded-sm border-none"
                type="text"
                placeholder="08"
              />
              <input
                className="w-1/2 h-[56px] pl-[17px] outline-none rounded-sm border-none"
                type="text"
                placeholder="2002"
              />
            </div>

            <div className="w-full flex justify-start items-center gap-2 mt-[7px]">
              <input
                className="w-1/2 h-[56px] pl-[17px] outline-none rounded-sm border-none"
                type="text"
                placeholder="420"
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10 0C4.47309 0 0 4.4725 0 10C0 15.5269 4.4725 20 10 20C15.5269 20 20 15.5275 20 10C20 4.47309 15.5275 0 10 0ZM10 18.6046C5.25539 18.6046 1.39535 14.7446 1.39535 10C1.39535 5.25539 5.25539 1.39535 10 1.39535C14.7446 1.39535 18.6046 5.25539 18.6046 10C18.6046 14.7446 14.7446 18.6046 10 18.6046Z"
                  fill="#222222"
                />
                <path
                  d="M10.0001 7.95349C9.61474 7.95349 9.3024 8.26587 9.3024 8.65115V14.3721C9.3024 14.7574 9.61478 15.0697 10.0001 15.0697C10.3853 15.0697 10.6977 14.7574 10.6977 14.3721V8.65119C10.6977 8.26587 10.3854 7.95349 10.0001 7.95349Z"
                  fill="#222222"
                />
                <path
                  d="M10.0001 4.9303C9.61474 4.9303 9.3024 5.24268 9.3024 5.62795V6.46518C9.3024 6.85049 9.61478 7.16284 10.0001 7.16284C10.3853 7.16284 10.6977 6.85045 10.6977 6.46518V5.62795C10.6977 5.24268 10.3854 4.9303 10.0001 4.9303Z"
                  fill="#222222"
                />
              </svg>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentComponent;
