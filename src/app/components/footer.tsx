import Link from "next/link";

export default function Footer() {
  return (
    <div className="Footer bg-white">
      <div className="Rectangle bg-white justify-items-center">
        <div className="Top flex flex-col md:flex-row">
          <div className="Group_L">
            <p className="Para text-[#9F9F9F] text-[16px] mt-10 md:mt-36 md:ml-20 flex-nowrap">
              400 University Drive Suite 200 Coral <br />
              Gables, <br /> FL 33134 USA
            </p>
          </div>
          <div className="Group_R mt-10 md:mt-0 md:flex-1 md:flex md:justify-between md:items-start">
            <div className="Links flex flex-col md:flex-row">
              <div className="NavLinks mt-12 md:ml-32 text-[16px]">
                <h5 className="h text-[#9F9F9F]">Links</h5>
                <ul className="UL text-black font-medium mt-14">
                  <li className="LI mt-10">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="LI mt-10">
                    <Link href="/">Shop</Link>
                  </li>
                  <li className="LI mt-10">
                    <Link href="/">About</Link>
                  </li>
                  <li className="LI mt-10">
                    <Link href="/">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="HelpLinks mt-12 md:ml-20 text-[16px]">
                <h5 className="h text-[#9F9F9F]">Help</h5>
                <ul className="UL text-black font-medium mt-14">
                  <li className="LI mt-10">
                    <Link href="/">Payment Options</Link>
                  </li>
                  <li className="LI mt-10">
                    <Link href="/">Returns</Link>
                  </li>
                  <li className="LI mt-10">
                    <Link href="/">Privacy Policies</Link>
                  </li>
                </ul>
              </div>
              <div className="Input mt-12 md:mt-12 md:ml-20">
                <h5 className="h text-[#9F9F9F] text-[16px]">Newsletter</h5>
                <div className="MInput mt-14 flex">
                  <div>
                    <input
                      type="email"
                      placeholder="Enter Your Email Address"
                      className="w-full md:w-auto"
                    />
                    <div className="Line bg-black h-[1px]"></div>
                  </div>
                  <div>
                    <button className="B ml-11 ">SUBSCRIBE</button>
                    <div className="Line bg-black h-[1px] ml-11 "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Bottom mt-12"></div>
        <div className="Line bg-white border border-black/30 border-opacity-[17%] w-full md:w-[1130px] md:ml-20"></div>
        <p className="Para mt-9 md:text-left mb-9">
          2022 Meubel House. All rights reverved
        </p>
      </div>
    </div>
  );
}
