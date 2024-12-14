import Link from "next/link";
import PreFooter from "../components/preFooter";

export default function Blog() {
  return (
    <div>
      <div className="bg-[url('/images/18.png')]">
        <div className="pt-20 pb-20 justify-items-center">
          <img src="/images/19.png" alt="Logo" />
          <h3 className="font-semibold text-[36px] mt-[-14px] mb-3 ">Blog</h3>
          <div className="flex text-[17px] ">
            <ul className="flex">
              <Link href="/home">
                <li className="font-medium">Home</li>
              </Link>
              <img
                src="/images/20.png"
                alt="vector"
                className="w-2 h-3 m-2 justify-center"
              />
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="Banner2 bg-[#FFFFFF] flex flex-col md:flex-row">
        <div className="leftSide text-left p-16">
          <img src="/images/21.png" alt="laptop image" />
          <img src="/images/23.png" alt="vector" className="pt-4" />
          <h3 className="text-[30px] mt-3 ">
            Going all-in with millennial design
          </h3>
          <p className="opacity-40 mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
            mauris vitae ultricies leo integer malesuada nunc. In nulla posuere
            sollicitudin aliquam ultrices. Morbi blandit cursus risus at
            ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in.
            Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis
            nunc sed blandit libero. Pellentesque elit ullamcorper dignissim
            cras tincidunt. Pharetra et ultrices neque ornare aenean euismod
            elementum.
          </p>
          <button className="mt-7 text-[16px]  px-4 pt-2 hover:bg-black hover:text-white transition-all duration-300">
            Read more
            <div className="border-t border-black opacity-70 mt-2"></div>
          </button>
          <img src="/images/22.png" alt="image" className="mt-12" />
          <img src="/images/24.png" alt="vector" className="pt-4" />
          <h3 className="text-[30px] mt-3 ">
            Exploring new ways of decorating
          </h3>
          <p className="opacity-40 mt-3">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
            mauris vitae ultricies leo integer malesuada nunc. In nulla posuere
            sollicitudin aliquam ultrices. Morbi blandit cursus risus at
            ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in.
            Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis
            nunc sed blandit libero. Pellentesque elit ullamcorper dignissim
            cras tincidunt. Pharetra et ultrices neque ornare aenean euismod
            elementum.
          </p>
          <button className="mt-7 text-[16px] px-4 pt-2 hover:bg-black hover:text-white transition-all duration-300">
            Read more
            <div className="border-t border-black opacity-70 mt-2"></div>
          </button>
          <img src="/images/25.png" alt="image" className="mt-12" />
          <img src="/images/23.png" alt="vector" className="pt-4" />
          <h3 className="text-[30px] mt-3 ">
            Handmade pieces that took time to make
          </h3>
          <p className="opacity-40 mt-3">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
            mauris vitae ultricies leo integer malesuada nunc. In nulla posuere
            sollicitudin aliquam ultrices. Morbi blandit cursus risus at
            ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in.
            Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis
            nunc sed blandit libero. Pellentesque elit ullamcorper dignissim
            cras tincidunt. Pharetra et ultrices neque ornare aenean euismod
            elementum.
          </p>
          <button className="mt-7 text-[16px] px-4 pt-2 hover:bg-black hover:text-white transition-all duration-300">
            Read more
            <div className="border-t border-black opacity-70 mt-2 "></div>
          </button>
        </div>
        <div className="rightSide w-full lg:w-1/3 flex flex-col items-center text-center sm:items-start sm:text-left p-6 lg:pt-16 lg:pr-48">
          <div className="upper px-4 lg:px-0 w-full sm:w-auto text-center sm:text-left">
            <input
              type="text"
              className="outline-1 outline px-4 py-[5px] rounded-md text-center "
              placeholder="Search here"
            />
            <div className="p-8">
              <h3 className=" text-[22px] font-medium ">Categories</h3>
              <div className="flex justify-between opacity-50">
                <div className="text-left">
                  <ul className="py-5">
                    <li className="py-5">Crafts</li>
                    <li className="py-5">Design</li>
                    <li className="py-5">Handmade</li>
                    <li className="py-5">Interior</li>
                    <li className="py-5">Wood</li>
                  </ul>
                </div>
                <div className="text-right">
                  <ul className="py-5">
                    <li className="py-5">2</li>
                    <li className="py-5">8</li>
                    <li className="py-5">7</li>
                    <li className="py-5">1</li>
                    <li className="py-5">6</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="lower p-8 py-[64px]  w-full sm:w-auto text-center sm:text-left ">
            <div>
              <h3 className="text-[22px] font-medium">Recent Posts </h3>
              <div className="flex pt-10">
                <img
                  src="/images/27.png"
                  alt="image"
                  className="h-[80px] w-[80px]"
                />
                <div className="flex flex-wrap">
                  <p className="px-2 text-nowrap text-[16px] ">
                    Going all-in with <br />
                    millennial design
                  </p>
                  <p className="pl-2  text-[16px] opacity-50">03 Aug 2023</p>
                </div>
              </div>
              <div className="flex pt-10">
                <img
                  src="/images/28.png"
                  alt="image"
                  className="h-[80px] w-[80px]"
                />
                <div className="flex flex-wrap">
                  <p className="px-2 text-nowrap text-[16px] ">
                    Going all-in with <br />
                    millennial design
                  </p>
                  <p className="pl-2  text-[16px] opacity-50">03 Aug 2023</p>
                </div>
              </div>
              <div className="flex pt-10">
                <img
                  src="/images/29.png"
                  alt="image"
                  className="h-[80px] w-[80px]"
                />
                <div className="flex flex-wrap">
                  <p className="px-2 text-nowrap text-[16px] ">
                    Going all-in with <br />
                    millennial design
                  </p>
                  <p className="pl-2  text-[16px] opacity-50">03 Aug 2023</p>
                </div>
              </div>
              <div className="flex pt-10">
                <img
                  src="/images/30.png"
                  alt="image"
                  className="h-[80px] w-[80px]"
                />
                <div className="flex flex-wrap">
                  <p className="px-2 text-nowrap text-[16px] ">
                    Going all-in with <br />
                    millennial design
                  </p>
                  <p className="pl-2  text-[16px] opacity-50">03 Aug 2023</p>
                </div>
              </div>
              <div className="flex pt-10">
                <img
                  src="/images/31.png"
                  alt="image"
                  className="h-[80px] w-[80px]"
                />
                <div className="flex flex-wrap">
                  <p className="px-2 text-nowrap text-[16px] ">
                    Going all-in with <br />
                    millennial design
                  </p>
                  <p className="pl-2  text-[16px] opacity-50">03 Aug 2023</p>
                </div>
              </div>
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
