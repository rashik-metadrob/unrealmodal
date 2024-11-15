import { useState } from "react";
const ShippingAddressComponent = () => {
  const [selectedCity, setSelectedCity] = useState("Jaipur");
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleSelect = city => {
    setSelectedCity(city);
    setOpenDropdown(null);
  };

  const handleSelectCountry = country => {
    setSelectedCountry(country);
    setOpenDropdown(null);
  };

  const toggleDropdown = dropdownName => {
    setOpenDropdown(prev => (prev === dropdownName ? null : dropdownName));
  };

  const [state, setState] = useState({
    addressTitle: "",
    address: "",
    focusField: null
  });

  const { addressTitle, address, focusField } = state;

  const handleChange = (e) => {
    console.log("someeeeeeeeeee");
    
    const { name, value } = e.target;

    setState(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = name => {
    setState(prev => ({ ...prev, focusField: name }));
  };

  const handleBlur = e => {
    const { name, value } = e.target;
    value
      ? setState(prev => ({ ...prev, focusField: name }))
      : setState(prev => ({ ...prev, focusField: null }));
  };

  return (
    <div className="px-5 pt-[8px]  flex flex-col gap-3 bg-white">
      <div className="flex items-center gap-2">
        <h1 className="w-[32px] h-[32px] flex items-center justify-center border border-black rounded-full text-[18px]">
          2
        </h1>

        <h1 className="text-[14px]">Shipping Address</h1>
      </div>

      <form className="flex  flex-col items-start gap-2">
        <div className="w-full h-[56px] relative">
          <input
            id="address-title"
            name="addressTitle"
            value={addressTitle}
            onChange={handleChange}
            onFocus={() => handleFocus("addressTitle")}
            onBlur={handleBlur}
            className="peer w-full h-[56px] rounded-md pl-[16px] outline-none border border-[#EEEFF0]"
            type="text"
            placeholder=""
          />
          <label
            htmlFor="address-title"
            className={`absolute left-3 top-1/2 -translate-y-1/2 transform bg-transparent px-1 text-gray-500 transition-all ${addressTitle ||
            focusField === "addressTitle"
              ? "top-2 translate-y-[-50%] text-[11px] font-normal"
              : "top-1/2 -translate-y-1/2 text-gray-400"}
                  `}
          >
            Address Title (Optional)
          </label>
        </div>

        <h1 className="text-[#868E96] text-[11px]">
          For estimating if the place is opened or closed on the weekends.
        </h1>

        <div className="w-full h-[56px] relative">
          <input
            id="address"
            name="address"
            value={address}
            onChange={handleChange}
            onFocus={() => handleFocus("address")}
            onBlur={handleBlur}
            className="peer w-full h-[56px] rounded-md pl-[16px] outline-none border border-[#EEEFF0]"
            type="text"
            placeholder=""
          />
          <label
            htmlFor="address"
            className={`absolute left-3 top-1/2 -translate-y-1/2 transform bg-transparent px-1 text-gray-500 transition-all ${address ||
            focusField === "address"
              ? "top-2 translate-y-[-50%] text-[11px] font-normal"
              : "top-1/2 -translate-y-1/2 text-gray-400"}
                  `}
          >
            Address*
          </label>

          <div className="w-fit absolute right-3 top-1/2 -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clipPath="url(#clip0_1726_2350)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.0001 2.64931C17.1645 2.64931 21.3507 6.83576 21.3507 12C21.3507 17.1642 17.1645 21.3506 12.0001 21.3506C6.83587 21.3506 2.64941 17.1642 2.64941 12C2.64941 6.83576 6.83587 2.64931 12.0001 2.64931Z"
                  stroke="#222222"
                  strokeWidth="1.63636"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 1.21069V4.8071"
                  stroke="#222222"
                  strokeWidth="1.63636"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.7893 11.9999H19.1929"
                  stroke="#222222"
                  strokeWidth="1.63636"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 22.7891V19.1927"
                  stroke="#222222"
                  strokeWidth="1.63636"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.21094 11.9999H4.80734"
                  stroke="#222222"
                  strokeWidth="1.63636"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.0001 9.84209C13.192 9.84209 14.158 10.8081 14.158 11.9999C14.158 13.1918 13.192 14.1578 12.0001 14.1578C10.8085 14.1578 9.84229 13.1918 9.84229 11.9999C9.84229 10.8081 10.8085 9.84209 12.0001 9.84209Z"
                  stroke="#222222"
                  strokeWidth="1.63636"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1726_2350">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        <div className="flex items-center gap-[7px]">
          <div className="w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clipPath="url(#clip0_1726_2333)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.00009 2.66667C8.36828 2.66667 8.66671 2.96519 8.66671 3.3333L8.66575 7.33267L12.6667 7.33329C13.0349 7.33329 13.3334 7.63181 13.3334 8.00001C13.3334 8.3682 13.0349 8.66672 12.6667 8.66672L8.66575 8.66667L8.66671 12.6666C8.66671 13.0348 8.36828 13.3333 8.00009 13.3333C7.63189 13.3333 7.33337 13.0348 7.33337 12.6666L7.33275 8.66667L3.33338 8.66672C2.96518 8.66672 2.66675 8.3682 2.66675 8.00001C2.66675 7.63181 2.96518 7.33329 3.33338 7.33329L7.33275 7.33267L7.33337 3.3333C7.33337 2.96519 7.63189 2.66667 8.00009 2.66667Z"
                  fill="#222222"
                />
              </g>
              <defs>
                <clipPath id="clip0_1726_2333">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <h1 className="text-[14px]">Street Address 2 (Optional)</h1>
        </div>

        <div className="mt-2 w-full  flex flex-col gap-3">
          {/* City Dropdown */}
          <div className="w-full h-[56px] relative">
            <button
              id="dropdownDefaultButton"
              onClick={() => toggleDropdown("city")}
              className="text-gray-700 bg-white border border-[#EEEFF0] rounded-md w-full h-full flex items-center justify-between px-5 pb-4 pt-6 focus:outline-none"
              type="button"
            >
              {selectedCity}
              <svg
                className="w-4 h-4 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="#222222"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {/* City Dropdown Menu */}
            <div
              className={`z-10 ${openDropdown === "city"
                ? ""
                : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-full absolute`}
            >
              <ul
                className="py-2 text-sm text-gray-700"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <h1
                    onClick={() => handleSelect("Delhi")}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Delhi
                  </h1>
                </li>
                <li>
                  <h1
                    onClick={() => handleSelect("Mumbai")}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Mumbai
                  </h1>
                </li>
                <li>
                  <h1
                    onClick={() => handleSelect("Indore")}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Indore
                  </h1>
                </li>
                <li>
                  <h1
                    onClick={() => handleSelect("Jaipur")}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Jaipur
                  </h1>
                </li>
              </ul>
            </div>

            <label
              htmlFor="dropdownDefaultButton"
              className="absolute left-4 top-3 transform -translate-y-1/2 bg-white px-1 text-[11px] text-gray-500 transition-all"
            >
              City*
            </label>
          </div>

          {/* Country Dropdown */}
          <div className="w-full h-[56px] relative">
            <button
              id="dropdownCountryButton"
              onClick={() => toggleDropdown("country")}
              className="text-gray-700 bg-white border border-[#EEEFF0] rounded-md w-full h-full flex items-center justify-between px-5 pb-4 pt-6 focus:outline-none"
              type="button"
            >
              {selectedCountry}
              <svg
                className="w-4 h-4 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="#222222"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {/* Country Dropdown Menu */}
            <div
              className={`z-10 ${openDropdown === "country"
                ? ""
                : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-full absolute`}
            >
              <ul
                className="py-2 text-sm text-gray-700"
                aria-labelledby="dropdownCountryButton"
              >
                <li>
                  <h1
                    onClick={() => handleSelectCountry("India")}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    India
                  </h1>
                </li>
                <li>
                  <h1
                    onClick={() => handleSelectCountry("USA")}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    USA
                  </h1>
                </li>
                <li>
                  <h1
                    onClick={() => handleSelectCountry("France")}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    France
                  </h1>
                </li>
                <li>
                  <h1
                    onClick={() => handleSelectCountry("Germany")}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Germany
                  </h1>
                </li>
              </ul>
            </div>

            <label
              htmlFor="dropdownCountryButton"
              className="absolute left-4 top-3 transform -translate-y-1/2 bg-white px-1 text-[11px] text-gray-500 transition-all"
            >
              Country*
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ShippingAddressComponent;
