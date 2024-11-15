const Collections = ({ name, color, size, qty, price }) => {
    return (
      <div className="w-[300px] flex-shrink-0"> {/* Use flex-shrink-0 to prevent shrinking */}
        <div className="h-full border rounded-[5.463px] flex justify-between items-center py-3 px-[16px]">
          <img src="./image-19.png" alt="" className="w-[80px] h-[80px] object-cover" />
          <div className="flex flex-col">
            <h1 className="text-[16px]">{name || "Item Name"}</h1>
            <p className="text-[15px] text-[#868E96]">Color: {color || "N/A"}</p>
            <p className="text-[15px] text-[#868E96]">Size: {size || "N/A"}</p>
            <div className="flex items-center justify-between">
              <h1 className="text-[15px] text-[#868E96]">Qty: {qty || "0"}</h1>
              <h1 className="text-[18px]">₹{price || "0"}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Collections
  