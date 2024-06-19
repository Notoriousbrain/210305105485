import { useLocation } from "react-router-dom";
import { Product } from "../../types";
import { useEffect } from "react";

const ProductDetails = () => {
  const location = useLocation();

  const data: Product = location.state?.data;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="flex md:flex-col space-x-10 md:space-x-0 md:space-y-10 px-10 md:px-6 sm:px-4 py-20 sm:py-10">
      <div className="flex-1 rounded-[15px] overflow-hidden flex justify-center items-center">
        <img
          src={data.img}
          alt="product"
          className="w-4/5 sm:w-full rounded-[15px]"
        />
      </div>
      <div className="flex-1 ">
        <div className="text-[40px] md:text-[32px] sm:text-[24px] font-bold sm:font-semibold mb-10">
          Product Details
        </div>

        <div className="text-[32px] md:text-[24px] sm:text-[20px] font-semibold">
          {data.name}
        </div>
        <div className="text-[24px] md:text-[20px] sm:text-[16px] font-medium">
          ₹{data.price}
        </div>

        {/* Tags */}
        <div className="my-10 space-x-4 flex items-start">
          <div className="text-[24px] md:text-[20px] sm:text-[16px] font-medium">
            Tags:
          </div>
          <div className="flex flex-wrap gap-2">
            {data.tags.map((tag, key) => (
              <div
                key={key}
                className="border border-black rounded-[15px] py-1.5 px-4"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div className="my-10 space-x-4 flex items-start">
          <div className="text-[24px] md:text-[20px] sm:text-[16px] font-medium">
            Tags:
          </div>
          <div className="flex flex-wrap gap-2">
            {data.sizes.map((size, key) => (
              <div
                key={key}
                className="border border-black rounded-[15px] py-1.5 px-4"
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="my-10 space-x-4 flex items-center">
          <div className="text-[24px] md:text-[20px] sm:text-[16px] font-medium">
            For Purchase Whatsapp on this number: 1234567890
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
