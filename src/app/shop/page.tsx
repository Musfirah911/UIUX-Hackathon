import Link from "next/link";
import PreFooter from "../components/preFooter";

export default function Shop() {
  return (
    <div>
      <div className="bg-[url('/images/18.png')]">
        <div className="pt-20 pb-20 justify-items-center">
          <img src="/images/19.png" alt="Logo" />
          <h3 className="font-semibold text-[36px] mt-[-14px] mb-3 ">Shop</h3>
          <div className="flex text-[17px] ">
            <ul className="flex">
              <Link href="/mainPage">
                <li className="font-medium">Home</li>
              </Link>
              <img
                src="/images/20.png"
                alt="vector"
                className="w-2 h-3 m-2 justify-center"
              />
              <li>Shop</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="Banner1 bg-[#FAF4F4]">
        <div className="flex flex-col md:flex-row items-center justify-between p-5 m-2 text-sm">
          {/* Left Section */}
          <div className="left-section md:pl-20 w-full md:w-auto mb-4 md:mb-0">
            <div className="flex flex-wrap items-center gap-2 md:gap-4">
              <img src="/images/36.png" alt="filter" className="w-6 h-6" />
              <p className="text-[16px] whitespace-nowrap">Filter</p>
              <img src="/images/37.png" alt="icon" className="w-6 h-6" />
              <img src="/images/35.png" alt="icon" className="w-6 h-6" />
              <img
                src="/images/38.png"
                alt="line"
                className="hidden md:block pl-6"
              />
              <p className="text-[14px] md:pl-6">Showing 1-16 of 32 results</p>
            </div>
          </div>

          {/* Divider Line for Small Screens */}
          <div className="border-t border-gray-300 w-full block md:hidden my-4"></div>

          {/* Right Section */}
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-end space-x-4 md:pr-20 w-full md:w-auto">
            {/* Show Dropdown */}
            <div className="flex items-center space-x-2">
              <span className="text-[16px]">Show</span>
              <button className="border border-none bg-white text-gray-500 focus:ring-2 focus:ring-gray-300 focus:outline-none text-sm px-4 py-[8px]">
                16
              </button>
            </div>

            {/* Sort By Dropdown */}
            <div className="flex items-center space-x-2">
              <span className="text-[16px]">Sort by</span>
              <button className="border border-none bg-white text-gray-500 focus:ring-2 focus:ring-gray-300 focus:outline-none text-sm px-6 py-[8px]">
                Default
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="Banner3 justify-items-center bg-white p-4">
        <div className="BasicDiv flex flex-wrap justify-center lg:justify-items-center mt-8 ">
          {/* Item 1 */}
          <div className="m-4 w-[160px] lg:w-[200px]">
            <img
              src="/images/8.png"
              alt="Trenton modular sofa_3"
              className="w-full h-auto"
            />
            <p className="text-[14px] lg:text-[17px] text-center md:text-left mt-2">
              Trenton modular sofa_3
            </p>
            <p className="text-[20px] lg:text-[28px] md:text-left text-center mt-2">
              Rs. 25,000.00
            </p>
          </div>
          {/* Item 2 */}
          <div className="m-4 w-[160px] lg:w-[200px]">
            <img
              src="/images/9.png"
              alt="Granite dining table with dining chair"
              className="w-full h-auto"
            />
            <p className="text-[14px] lg:text-[17px] text-center md:text-left mt-2">
              Granite dining table with <br /> dining chair
            </p>
            <p className="text-[20px] lg:text-[28px] md:text-left text-center mt-2">
              Rs. 25,000.00
            </p>
          </div>
          {/* Item 3 */}
          <div className="m-4 w-[160px] lg:w-[200px]">
            <img
              src="/images/10.png"
              alt="Outdoor bar table and stool"
              className="w-full h-auto"
            />
            <p className="text-[14px] lg:text-[17px] text-center md:text-left mt-2">
              Outdoor bar table and <br /> stool
            </p>
            <p className="text-[20px] lg:text-[28px] md:text-left text-center mt-2">
              Rs. 25,000.00
            </p>
          </div>
          {/* Item 4 */}
          <div className="m-4 w-[160px] lg:w-[200px]">
            <img
              src="/images/11.png"
              alt="Plain console with teak mirror"
              className="w-full h-auto"
            />
            <p className="text-[14px] lg:text-[17px] text-center md:text-left mt-2">
              Plain console with teak <br /> mirror
            </p>
            <p className="text-[20px] lg:text-[28px] md:text-left text-center mt-2">
              Rs. 25,000.00
            </p>
          </div>
          <div className="BasicDiv flex flex-wrap justify-center lg:justify-start mt-8 ">
            {/* Item 5 */}
            <div className="m-4 w-[160px] lg:w-[200px]">
              <img
                src="/images/39.png"
                alt="Trenton modular sofa_3"
                className="w-full h-auto"
              />
              <p className="text-[14px] lg:text-[17px] text-center md:text-left mt-2">
                Grain coffee table
              </p>
              <p className="text-[20px] lg:text-[28px] md:text-left text-center mt-2">
                Rs. 15,000.00
              </p>
            </div>
            {/* Item 6 */}
            <div className="m-4 pt-10 w-[160px] lg:w-[200px]">
              <img
                src="/images/40.png"
                alt="Granite dining table with dining chair"
                className="w-full h-auto"
              />
              <p className="text-[14px] lg:text-[17px] text-center md:text-left mt-2 pt-10">
                Kent coffee table
              </p>
              <p className="text-[20px] lg:text-[28px] md:text-left text-center mt-2">
                Rs. 225,000.00
              </p>
            </div>
            {/* Item 7 */}
            <div className="m-4 w-[160px] lg:w-[200px]">
              <img
                src="/images/42.png"
                alt="Outdoor bar table and stool"
                className="w-full h-auto"
              />
              <p className="text-[14px] lg:text-[17px] text-center md:text-left mt-2">
                Round coffee table_color <br />2
              </p>
              <p className="text-[20px] lg:text-[28px] md:text-left text-center mt-2">
                Rs. 251,000.00
              </p>
            </div>
            {/* Item 8*/}
            <div className="m-4 w-[160px] lg:w-[200px]">
              <img
                src="/images/43.png"
                alt="Plain console with teak mirror"
                className="w-full h-auto"
              />
              <p className="text-[14px] lg:text-[17px] text-center md:text-left mt-2">
                Reclaimed teak coffee <br /> table
              </p>
              <p className="text-[20px] lg:text-[28px] md:text-left text-center mt-2">
                Rs. 25,200.00
              </p>
            </div>
          </div>
          <div className="BasicDiv flex flex-wrap justify-center lg:justify-start mt-8 ">
            {/* Item 9 */}
            <div className="m-4 w-[160px] lg:w-[200px]">
              <img
                src="/images/44.png"
                alt="Trenton modular sofa_3"
                className="w-full h-auto"
              />
              <p className="text-[14px] lg:text-[17px] text-center md:text-left mt-2">
                Plain console_
              </p>
              <p className="text-[20px] lg:text-[28px] md:text-left text-center mt-2">
                Rs. 258,200.00
              </p>
            </div>
            {/* Item 10 */}
            <div className="m-4 w-[160px] lg:w-[200px]">
              <img
                src="/images/45.png"
                alt="Granite dining table with dining chair"
                className="w-full h-auto"
              />
              <p className="text-[14px] lg:text-[17px] text-center md:text-left mt-2">
                Reclaimed teak Sideboard
              </p>
              <p className="text-[20px] lg:text-[28px] md:text-left text-center mt-2">
                Rs. 20,000.00
              </p>
            </div>
            {/* Item 11*/}
            <div className="m-4 w-[160px] lg:w-[200px]">
              <img
                src="/images/46.png"
                alt="Outdoor bar table and stool"
                className="w-full h-auto"
              />
              <p className="text-[14px] lg:text-[17px] text-center md:text-left mt-2">
                SJP_0825
              </p>
              <p className="text-[20px] lg:text-[28px] md:text-left text-center mt-2">
                Rs. 200,000.00
              </p>
            </div>
            {/* Item 12*/}
            <div className="m-4 w-[160px] lg:w-[200px]">
              <img
                src="/images/47.png"
                alt="Plain console with teak mirror"
                className="w-full h-auto"
              />
              <p className="text-[14px] lg:text-[17px] text-center md:text-left mt-2">
                Bella chair and table
              </p>
              <p className="text-[20px] lg:text-[28px] md:text-left text-center mt-2">
                Rs. 100,000.00
              </p>
            </div>
          </div>
          <div className="BasicDiv flex flex-wrap justify-center lg:justify-start mt-8 ">
            {/* Item 13 */}
            <div className="m-4 w-[160px] lg:w-[200px]">
              <img
                src="/images/48.png"
                alt="Trenton modular sofa_3"
                className="w-full h-auto"
              />
              <p className="text-[14px] lg:text-[17px] text-center md:text-left mt-2">
                Granite square side table
              </p>
              <p className="text-[20px] lg:text-[28px] md:text-left text-center mt-2">
                Rs. 258,800.00
              </p>
            </div>
            {/* Item 14 */}
            <div className="m-4 w-[160px] lg:w-[200px]">
              <img
                src="/images/49.png"
                alt="Granite dining table with dining chair"
                className="w-full h-auto"
              />
              <p className="text-[14px] lg:text-[17px] text-center md:text-left mt-2">
                Asgaard sofa
              </p>
              <p className="text-[20px] lg:text-[28px] md:text-left text-center mt-2">
                Rs. 250,000.00
              </p>
            </div>
            {/* Item 14 */}
            <div className="m-4 w-[160px] lg:w-[200px]">
              <img
                src="/images/50.png"
                alt="Outdoor bar table and stool"
                className="w-full h-auto"
              />
              <p className="text-[14px] lg:text-[17px] text-center md:text-left mt-2">
                Maya sofa three seater
              </p>
              <p className="text-[20px] lg:text-[28px] md:text-left text-center mt-2">
                Rs. 115,000.00
              </p>
            </div>
            {/* Item 16 */}
            <div className="m-4 w-[160px] lg:w-[200px]">
              <img
                src="/images/51.png"
                alt="Plain console with teak mirror"
                className="w-full h-auto"
              />
              <p className="text-[14px] lg:text-[17px] text-center md:text-left mt-2">
                Outdoor sofa set
              </p>
              <p className="text-[20px] lg:text-[28px] md:text-left text-center mt-2">
                Rs. 244,000.00
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="p-10 space-x-6 flex flex-wrap justify-center">
          <button className="border-none rounded-md px-5 bg-[#FBEBB5] py-2 mb-4 md:mb-0">
            1
          </button>
          <button className="border-none rounded-md px-5 bg-[#FFF9E5] py-2 mb-4 md:mb-0">
            2
          </button>
          <button className="border-none rounded-md px-5 bg-[#FFF9E5] py-2 mb-4 md:mb-0">
            3
          </button>
          <button className="border-none rounded-md px-5 bg-[#FFF9E5] py-2">
            Next
          </button>
        </div>
      </div>
      <PreFooter />
    </div>
  );
}
