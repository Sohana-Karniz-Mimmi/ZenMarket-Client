/* eslint-disable react/prop-types */
import { FaHeart } from "react-icons/fa";
import { FaRegClock, FaStar } from "react-icons/fa6";
import moment from 'moment-timezone';
import { SiBrandfolder } from "react-icons/si";

const ProductCard = ({ product }) => {
  const { name, image, description, price, category, ratings, createdAt, brand_name } = product;
  // Convert to a specific time zone (e.g., Asia/Dhaka)
  const localTimeInDhaka = moment.tz(createdAt, 'UTC').tz('Asia/Dhaka').format('YYYY-MM-DD h:mm A');


  return (
    <>
      <div className=" roboto relative max-w-sm mx-auto group rounded border-2 cursor-pointer">

        <div className="overflow-hidden relative">
          <img role="presentation" className="object-cover transition-all group-hover:scale-110 duration-700 ease-in-out w-full rounded h-72 bg-gray-500" src={image} />
          <h3 title="Add Wishlist" className="z-10  bg-[#00000050] text-sm font-medium text-white absolute top-4 right-5 rounded-full py-2 px-2 xs:text-xl md:text-sm flex items-center gap-2"> <FaHeart className="group-hover:text-[#FF0143]" /></h3>
          {/* <h3 className="z-10 bg-[#51AA1B] text-sm font-medium text-white absolute -bottom-4  rounded-full left-[85px] py-1 px-4 xs:text-xl md:text-sm flex justify-center items-center gap-2"> {brand_name}</h3> */}
        </div>

        <div className="p-6 space-y-0.5 relative">

          {/* <div>
            <h3 className="z-10 justify-center transition-all duration-500 else-in-out hover:bg-green-600 text-xs font-medium hover:text-white bg-[#51AA1B] text-white absolute top-[-12px] left-[30%] rounded-full py-1 px-3 flex items-center gap-2 shadow-sm"> <SiBrandfolder />{brand_name}</h3>
          </div> */}
          <h3 className="text-sm font-semibold ">{category}</h3>
          <div className="flex justify-between">
            <h3 className="text-xl font-semibold ">{name}</h3>
            <div className=" flex justify-between items-center pb-1">
              <h2 className=" text-[#9ca3a9] font-medium">

              </h2>
            </div>
          </div>
          <p className="pb-1 lato">{description.slice(0, 40)}</p>
          <div>
            <div className="flex justify-between items-center border-b pb-5 ">
              <h2 className="text-[#FF0143] font-semibold text-xl ">${price}</h2>
              <h3 className="justify-center transition-all duration-500 else-in-out hover:bg-green-600 text-xs font-medium hover:text-white bg-[#51AA1B] text-white rounded-full py-1 px-3 flex items-center gap-2 shadow-sm"> <SiBrandfolder />{brand_name}</h3>
            </div>

          </div>


          <div className="flex justify-between gap-6 font-medium text-[#9ca3a9] pt-3 text-sm">
            <p className="flex gap-2 items-center"><FaRegClock /> {localTimeInDhaka.split(" ")[0]} at {localTimeInDhaka.split(" ")[1]} {localTimeInDhaka.split(" ")[2]}</p>
            <p className="flex gap-1 items-center" > <FaStar className="text-[#ffa801] mb-0.5" /> {ratings}</p>
          </div>

        </div>
      </div>

    </>
  );
}

export default ProductCard
