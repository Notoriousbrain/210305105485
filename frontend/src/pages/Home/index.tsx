import { useEffect, useState } from "react";
import { banner } from "../../assets";
import { useNavigate } from "react-router-dom";
import { Product } from "../../types";

const HomePage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const [jsonData, setJsonData] = useState<Product[] | null>(null);
  const filter = [
    "Men",
    "Women",
    "9@ Master Premium Quality",
    "7@ Master Premium Quality",
    "5@ Master Premium Quality",
    "3@ Master Premium Quality",
  ];

  const [selectedFilter, setSelectedFilter] = useState<string[]>([]);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const handleProductHover = (productId: number) => {
    setHoveredProduct(productId);
  };

  const handleProductLeave = () => {
    setHoveredProduct(null);
  };

  const handleProduct = (productId: number) => {
    navigate(`/product/${productId}`, {
      state: { data: jsonData && jsonData[productId] },
    });
  };

  const handleFilterClick = (filterName: string) => {
    if (selectedFilter.includes(filterName)) {
      setSelectedFilter(selectedFilter.filter((item) => item !== filterName));
    } else {
      setSelectedFilter([...selectedFilter, filterName]);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/data/data.json");
        const data = await response.json();

        let filteredData = data;
        if (selectedFilter.length > 0) {
          filteredData = data.filter((product: Product) => {
            return selectedFilter.some((filter) =>
              product.tags.includes(filter)
            );
          });
        }

        setJsonData(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedFilter]);

  return (
    <div className="bg-white py-1 px-10 md:px-6 xs:px-4">
      {/* Banner  */}
      <div className="relative rounded-[15px]">
        <img
          src={banner}
          alt="banner"
          className="w-full rounded-[15px] sm:h-[70vh] object-cover"
        />
        <div className="w-full h-full flex flex-col justify-center items-center absolute space-y-8 sm:space-y-2 top-0 left-0">
          <div className="text-white w-[90%] text-center font-bold sm:text-semibold leading-9 text-[64px] lgm:text-[48px] md:text-[36px] mds:text-[28px] sm:text-[32px]">
            Elevate Your Style
          </div>
          <div className="text-[#E2E2E2] text-center font-medium text-[24px] md:text-[20px] sm:text-[16px] ">
            Discover Style at AffordMed
          </div>
        </div>
      </div>

      {/* Products */}
      <div id="products" className="py-20 space-y-10 sm:py-10 sm:space-y-10">
        <div className="flex items-center justify-center flex-col  space-y-10">
          <div className="w-4/5 space-x-6 flex sm:w-full sm:space-x-4">
            <div className="text-black text-[40px] md:text-[32px] sm:text-[24px] xs:text-[20px] font-semibold ">
              Products
            </div>
            {/* <div className="w-full">
              <input
                type="text"
                placeholder="Search Your Product"
                className="py-3 sm:py-2 text-[14px] px-4 border rounded-[15px] outline-none w-full"
              />
            </div> */}
          </div>
          <div className="w-4/5 sm:w-full space-x-6 flex">
            <div className="text-black text-[32px] md:text-[24px] sm:text-[20px] xs:text-[16px] font-semibold ">
              Filter:
            </div>
            <div className="flex flex-wrap gap-4">
              {filter.map((item, key) => (
                <div
                  key={key}
                  className={`border border-black py-1.5 px-4 rounded-[15px] cursor-pointer ${
                    selectedFilter.includes(item) ? "bg-black text-white" : ""
                  }`}
                  onClick={() => handleFilterClick(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 items-center justify-center">
          {loading ? (
            <div className="text-[56px] md:text-[48px] sm:text-[32px] xs:text-[24px] font-semibold">
              Loading...
            </div>
          ) : (
            <>
              {jsonData && jsonData.length > 0 ? (
                jsonData?.map((item, key) => (
                  <div
                    key={key}
                    onClick={() => handleProduct(key)}
                    onMouseEnter={() => handleProductHover(key)}
                    onMouseLeave={handleProductLeave}
                    className="relative cursor-pointer rounded-[15px] overflow-hidden"
                  >
                    <img
                      src={item.img}
                      alt="product"
                      className="w-[400px] rounded-[15px] object-cover"
                    />
                    <div
                      className={`absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 transform transition-all duration-300 ${
                        hoveredProduct === key
                          ? "translate-y-0"
                          : "translate-y-full"
                      } `}
                    >
                      <div className="text-white font-semibold text-[20px]">
                        {item.name}
                      </div>
                      <div className="text-white font-medium text-[14px]">
                        ₹{item.price}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-[56px] md:text-[48px] sm:text-[32px] xs:text-[24px] font-semibold">
                  No product available
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
