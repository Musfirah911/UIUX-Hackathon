export default function MainPage() {
  return (
    <div>
      <div className="Banner1 bg-[#FBEBB5] flex flex-col lg:flex-row items-center lg:items-start h-auto lg:h-screen w-full">
        <div className="ml-8 lg:ml-16 lg:items-center justify-start w-full lg:w-1/2 pl-4 lg:pl-40">
          <p className="font-medium text-[32px] lg:text-[56px] mt-16 lg:mt-64">
            Rocket single
          </p>
          <p className="font-medium text-[28px] lg:text-[52px] mt-[-10px] lg:mt-[-18px]">
            seater
          </p>
          <button className="mt-4 text-[16px] lg:text-[18px] bg-transparent hover:bg-black hover:text-white transition-all duration-300 px-4 py-2  ">
            Shop Now
            <div className="Line mt-1 h-[2px] w-full bg-black"></div>
          </button>
        </div>
        <img
          src="/images/5.png"
          alt="Rocket single seater"
          className="h-[300px] w-auto lg:h-[700px] lg:w-[700px] lg:pr-20 mt-4 lg:mt-0"
        />
      </div>
      <div className="Banner2 flex flex-wrap bg-[#FAF4F4] h-auto w-full">
        <div className="lg:flex lg:justify-start lg:flex-nowrap flex flex-wrap justify-center mt-10 lg:pt-20">
          {/* Part 1 */}
          <div className="part1 w-full lg:w-[605px] h-auto lg:h-[562px] mt-7 lg:ml-10 pb-10">
            <img
              src="/images/6.png"
              alt="Table"
              className="w-full lg:w-[500px] h-auto lg:h-[388px]"
            />
            <p className="text-[32px] lg:text-[48px] ml-8 lg:ml-24 mt-[-50px] lg:mt-[-100px]">
              Side table
            </p>
            <button className="ml-8 lg:ml-24 mt-3 text-[18px] lg:text-[23px] bg-transparent hover:bg-black hover:text-white transition-all duration-300 px-4 py-2">
              View More
              <div className="Line mt-1 h-[2px] w-full bg-black"></div>
            </button>
          </div>
          {/* Part 2 */}
          <div className="part2 w-full lg:w-[605px] h-auto lg:h-[562px] m-4 lg:ml-0 pb-10">
            <img
              src="/images/7.png"
              alt="Table"
              className="w-full lg:w-[500px] h-auto lg:h-[400px]"
            />
            <p className="text-[32px] lg:text-[48px] ml-8 lg:ml-24 mt-[-50px] lg:mt-[-100px]">
              Side table
            </p>
            <button className="ml-8 lg:ml-24 mt-3 text-[18px] lg:text-[23px] bg-transparent hover:bg-black hover:text-white transition-all duration-300 px-4 py-2 ">
              View More
              <div className="Line mt-1 h-[2px] w-full bg-black"></div>
            </button>
          </div>
        </div>
      </div>
      <div className="Banner3 justify-items-center bg-white p-4">
        <h3 className="text-[28px] lg:text-[48px] text-center mt-8">
          Top Picks For You
        </h3>
        <p className="text-center text-[14px] lg:text-[18px] opacity-50 mt-2">
          Find a bright ideal to suit your taste with our great selection of
          suspension, floor, and table lights.
        </p>
        <div className="BasicDiv flex flex-wrap justify-center lg:justify-start lg:pl-24 mt-8">
          {/* Item 1 */}
          <div className="m-4 w-[160px] lg:w-[200px]">
            <img
              src="/images/8.png"
              alt="Trenton modular sofa_3"
              className="w-full h-auto"
            />
            <p className="text-[14px] lg:text-[17px] text-left mt-2">
              Trenton modular sofa_3
            </p>
            <p className="text-[20px] lg:text-[28px] mt-2">Rs. 25,000.00</p>
          </div>
          {/* Item 2 */}
          <div className="m-4 w-[160px] lg:w-[200px]">
            <img
              src="/images/9.png"
              alt="Granite dining table with dining chair"
              className="w-full h-auto"
            />
            <p className="text-[14px] lg:text-[17px] text-left mt-2">
              Granite dining table with <br /> dining chair
            </p>
            <p className="text-[20px] lg:text-[28px] mt-2">Rs. 25,000.00</p>
          </div>
          {/* Item 3 */}
          <div className="m-4 w-[160px] lg:w-[200px]">
            <img
              src="/images/10.png"
              alt="Outdoor bar table and stool"
              className="w-full h-auto"
            />
            <p className="text-[14px] lg:text-[17px] text-left mt-2">
              Outdoor bar table and <br /> stool
            </p>
            <p className="text-[20px] lg:text-[28px] mt-2">Rs. 25,000.00</p>
          </div>
          {/* Item 4 */}
          <div className="m-4 w-[160px] lg:w-[200px]">
            <img
              src="/images/11.png"
              alt="Plain console with teak mirror"
              className="w-full h-auto"
            />
            <p className="text-[14px] lg:text-[17px] text-left mt-2">
              Plain console with teak <br /> mirror
            </p>
            <p className="text-[20px] lg:text-[28px] mt-2">Rs. 25,000.00</p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="m-4 px-6 py-2 text-[16px] lg:text-[18px] bg-transparent hover:bg-black hover:text-white transition-all duration-300 ">
            View More
            <div className="Line border border-black opacity-50 mt-2"></div>
          </button>
        </div>
      </div>
      <div className="Banner4 flex flex-wrap justify-center items-center bg-[#FFF9E5] p-4">
        {/* Image Section */}
        <img
          src="/images/12.png"
          alt="Asgaard Sofa"
          className="w-full sm:w-[300px] md:w-[400px] lg:w-[500px] h-auto"
        />
        {/* Text Section */}
        <div className="text-center pl-0 md:pl-14">
          <p className="text-[26px] mt-8">New Arrivals</p>
          <p className="font-bold text-[40px] mt-2">Asgaard Sofa</p>
          <button className="outline outline-1 m-4 px-6 py-2 text-[18px] hover:bg-black hover:text-white transition-all duration-300">
            Order Now
          </button>
        </div>
      </div>
      <div className="Banner5 bg-[#FFFFFF] text-center p-4">
        {/* Header Section */}
        <h3 className="text-[36px] md:text-[48px] pt-8">Our Blog</h3>
        <p className="opacity-50 mt-2 text-[14px] md:text-[16px]">
          Find a bright ideal to suit your taste with our great selection
        </p>

        {/* Blog Cards Section */}
        <div className="BasicDiv flex flex-wrap justify-center mt-14 gap-6">
          {/* Blog Card 1 */}
          <div className="justify-items-center m-2 max-w-[300px]">
            <img src="/images/13.png" alt="Laptop" className="w-full h-auto" />
            <p className="mt-4 text-[16px]">
              Going all-in with millennial design
            </p>
            <button className="mt-4 text-[14px]">
              Read More
              <div className="border border-black mt-2 opacity-30"></div>
            </button>
            <img
              src="/images/16.png"
              alt="vector"
              className="h-[20px] w-[150px] mt-6 mx-auto"
            />
          </div>

          {/* Blog Card 2 */}
          <div className="justify-items-center m-2 max-w-[300px]">
            <img src="/images/14.png" alt="Laptop" className="w-full h-auto" />
            <p className="mt-4 text-[16px]">
              Going all-in with millennial design
            </p>
            <button className="mt-4 text-[14px]">
              Read More
              <div className="border border-black mt-2 opacity-30"></div>
            </button>
            <img
              src="/images/16.png"
              alt="vector"
              className="h-[20px] w-[150px] mt-6 mx-auto"
            />
          </div>

          {/* Blog Card 3 */}
          <div className="justify-items-center m-2 max-w-[300px]">
            <img src="/images/15.png" alt="Laptop" className="w-full h-auto" />
            <p className="mt-4 text-[16px]">
              Going all-in with millennial design
            </p>
            <button className="mt-4 text-[14px]">
              Read More
              <div className="border border-black mt-2 opacity-30"></div>
            </button>
            <img
              src="/images/16.png"
              alt="vector"
              className="h-[20px] w-[150px] mt-6 mx-auto"
            />
          </div>
        </div>

        {/* View All Posts Button */}
        <button className="mt-16 text-[16px] px-6 py-2 hover:bg-black hover:text-white transition-all duration-300">
          View All Posts
          <div className="border-t border-black opacity-70 mt-2"></div>
        </button>
      </div>
      <div className="Banner6 bg-[url('/images/17.png')] bg-cover bg-center h-[450px] text-center flex flex-col items-center justify-center">
        <p className="text-[30px] md:text-[50px] font-extrabold">
          Our Instagram
        </p>
        <p className="text-[16px] md:text-[20px] mt-2 md:mt-4">
          Follow our store on Instagram
        </p>
        <button className="text-[14px] md:text-[18px] border rounded-full mt-6 md:mt-8 px-8 py-2 md:px-14 md:py-3 shadow-xl hover:bg-black hover:text-white transition-all duration-300">
          Follow us
        </button>
      </div>
    </div>
  );
}
