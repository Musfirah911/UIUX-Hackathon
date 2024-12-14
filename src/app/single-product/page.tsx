export default function SingleProduct() {
  return (
    <div>
      <div className="Banner1 m-6">
        <div className="header lg:pl-16 ">
          <ul className="flex space-x-6 text-center">
            <li className="opacity-50">Home</li>
            <li>
              <img
                src="/images/20.png"
                alt="vector"
                className="w-2 h-3 m-2 justify-center"
              />
            </li>
            <li className="opacity-50">Shop</li>
            <li>
              <img
                src="/images/20.png"
                alt="vector"
                className="w-2 h-3 m-2 justify-center"
              />
            </li>
            <li>
              {" "}
              <img src="/images/38.png" alt="line" className="h-7 w-0.5" />
            </li>
            <li>Asgard Sofa</li>
          </ul>
        </div>
        <div className="flex lg:pt-10 space-x-10">
          <div className="leftSide lg:pl-16 space-x-10 flex">
            <div className="left  ">
              <div className="space-y-4">
                <img src="/images/56.png" alt="" />
                <img src="/images/57.png" alt="" />
                <img src="/images/58.png" alt="" />
                <img src="/images/59.png" alt="" />
              </div>
            </div>
            <div className="right ">
              <img src="/images/60.png" alt="" />
            </div>
          </div>
          <div className="rightSide space-y-4">
            <h3 className="font-medium text-[38px] ">Asgaard Sofa</h3>
            <p className="text-[20px] opacity-50 ">Rs. 250,000.00</p>
            <div className="flex space-x-3 ">
              <img src="/images/61.png" alt="" />
              <img src="/images/38.png" alt="line" className="h-5 w-0.5" />
              <p className="text-[12px] opacity-50">5 Customer Review</p>
            </div>
            <p className="text-wrap text-[14px] ">
              Setting the bar as one of the loudest speakers in its class, the{" "}
              <br /> Kilburn is a compact, stout-hearted hero with a
              well-balanced <br /> audio which boasts a clear midrange and
              extended highs for a <br /> sound.
            </p>
            <p className="opacity-50 text-[14px] ">Size</p>
            <div className="flex space-x-4">
              <img src="/images/62.png" alt="" />
              <img src="/images/63.png" alt="" />
              <img src="/images/64.png" alt="" />
            </div>
            <p className="opacity-50 text-[14px] ">Color</p>
            <div className="flex space-x-4">
              <img src="/images/65.png" alt="" />
              <img src="/images/66.png" alt="" />
              <img src="/images/67.png" alt="" />
            </div>
            <div className="flex space-x-4 pt-8">
              <button className=" outline outline-1 px-9 py-2 rounded-lg">
                - 1 +{" "}
              </button>
              <button className=" outline outline-1 px-9 py-2 rounded-lg">
                Add to Cart{" "}
              </button>
            </div>
            <div className="border-b-2 pt-8"></div>
            <div className="space-x-3 text-[14px] text-left  flex">
              <div className="lft opacity-50">
                <ul className="space-y-4">
                  <li>SKU</li>
                  <li>Category</li>
                  <li>Tags</li>
                  <li>Share</li>
                </ul>
              </div>
              <div className="rit ">
                <ul className="space-y-4">
                  <li className="opacity-50">: SS001</li>
                  <li className="opacity-50">: Sofas</li>
                  <li className="opacity-50">: Sofa, Chair, Home, Shop</li>
                  <li className="">
                    <div className=" flex space-x-3">
                      <p className="opacity-50">:</p>{" "}
                      <img src="/images/68.png" alt="" />
                      <img src="/images/69.png" alt="" />
                      <img src="/images/70.png" alt="" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-2"></div>
      
      <div className="Banner2 m-6">
        <div className="w-full justify-items-center">
          <div className="Banner2Header flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-7 text-[16px] sm:text-[18px]">
            <p>Description</p>
            <p className="opacity-50">Additional Information</p>
            <p className="opacity-50">Review [5]</p>
          </div>
          <div className="m-4 sm:m-8 px-4 sm:px-44 space-y-4 sm:space-y-8 opacity-50">
            <p>
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
            <p className="text-justify">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap justify-center lg:pl-12 sm:justify-start gap-6 lg:pr-10 sm:m-8">
            <img
              src="/images/54.png"
              alt="sofa"
              className="max-w-xs lg:max-w-lg w-auto"
            />
            <img
              src="/images/55.png"
              alt="sofa"
              className="max-w-xs lg:max-w-lg w-auto"
            />
          </div>
        </div>
      </div>

      <div className="Banner3 justify-items-center bg-white p-4">
        <h3 className="text-[28px] lg:text-[38px] text-center font-medium mt-8">
          Related Products
        </h3>

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
      <div className="border-b-2"></div>
    </div>
  );
}
