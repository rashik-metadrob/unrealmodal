import { useNavigate } from "react-router-dom";
const BillingInformationComponent = () => {
  const navigate = useNavigate()
    return (
      <div className="px-[16px] pt-[8px] pb-6 flex flex-col gap-3 bg-white">
        <div className="flex items-center gap-2">
          <h1 className="w-[32px] h-[32px] flex items-center justify-center border border-black rounded-full text-[18px]">
            3
          </h1>
  
          <h1 className="text-[14px]">Billing Information</h1>
        </div>
  
        <form className="flex flex-col items-start gap-2 ml-2">
          <div className="w-[343px] h-[56px] relative">
            <h1>Billing Address*</h1>
  
            <div className="flex gap-1 mt-[12px]">
              <div className="flex items-center h-5">
                <input
                  id="helper-checkbox"
                  aria-describedby="helper-checkbox-text"
                  type="checkbox"
                  defaultChecked // This sets the checkbox as checked by default
                  className="w-[24px] h-[24px] text-blue-600 bg-gray-100 border-gray-300 rounded"
                />
              </div>
              <div className="ms-2 text-sm">
                <label htmlFor="helper-checkbox" className="text-14px">
                  Same as delivery address.
                </label>
              </div>
            </div>
          </div>
  
          <div className="w-[343px] h-[56px] mt-[24px] relative">
            <h1>Billing Type*</h1>
  
            <div className="flex justify-start gap-[76px]">
              <div className="flex items-center mt-2">
                <input
                  id="personal-radio"
                  type="radio"
                  name="property-type" // Group them by using the same name
                  value="personal"
                  defaultChecked // This sets "Personal" as the default checked option
                  className="w-[24px] h-[24px] text-blue-600 bg-gray-100 border-gray-300"
                />
                <label htmlFor="personal-radio" className="ms-2 text-[14px]">
                  Personal
                </label>
              </div>
  
              <div className="flex items-center mt-2">
                <input
                  id="commercial-radio"
                  type="radio"
                  name="property-type"
                  value="commercial"
                  className="w-[24px] h-[24px] text-blue-600 bg-gray-100 border-gray-300"
                />
                <label htmlFor="commercial-radio" className="ms-2 text-[14px]">
                  Commercial
                </label>
              </div>
            </div>
          </div>
  
          <div className="flex justify-center w-full items-center mt-[36px] gap-[15px]">
            <button onClick={()=>navigate(-1)} className="w-1/2 py-[17px] bg-transparent border border-[#3498DB] text-[#3498DB] rounded-[4px]">
              Cancel
            </button>
  
            <button onClick={()=>navigate('/secure-payment-2')} className="w-1/2 py-[17px] bg-[#222] text-white rounded-[4px]">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default BillingInformationComponent;
