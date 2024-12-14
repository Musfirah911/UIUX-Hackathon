import Link from "next/link"

export default function Cart(){
    return(
        <div>
            <div className="bg-[url('/images/18.png')]">
        <div className="pt-20 pb-20 justify-items-center">
          <img src="/images/19.png" alt="Logo" />
          <h3 className="font-semibold text-[36px] mt-[-14px] mb-3 ">Cart</h3>
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
              <li>Cart</li>
            </ul>
          </div>
        </div>
      </div>
    <div className="m-6 lg:m-14 lg:pl-16 flex flex-col lg:flex-row gap-10">
      {/* Left Side */}
      <div className="left-side  w-full lg:w-3/5">
        {/* Header */}
        <div className="header bg-[#FFF9E5] p-4">
          <ul className="hidden lg:flex justify-between font-medium text-sm lg:text-base pb-2">
            <li className="w-1/4 text-center">Product</li>
            <li className="w-1/4 text-center">Price</li>
            <li className="w-1/4 text-center">Quantity</li>
            <li className="w-1/4 text-center">Subtotal</li>
          </ul>
        </div>

        {/* Product Row */}
        <div className="product bg-white pb-6 pt-6 flex flex-col lg:flex-row items-center lg:gap-2 lg:pb-4 border-b">
          {/* Product Image */}
          <div className="w-16 h-16 lg:w-24 lg:h-24 flex-shrink-0">
            <img
              src="/images/52.png"
              alt="Asgard Sofa"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col lg:flex-row lg:w-full lg:justify-between lg:items-center gap-4 lg:gap-0 mt-4 lg:mt-0">
            {/* Product Name */}
            <div className="w-full lg:w-1/4 text-center lg:text-left">
              <p className="font-medium text-sm lg:hidden">Product</p>
              <p className="opacity-70">Asgard Sofa</p>
            </div>

            {/* Price */}
            <div className="w-full lg:w-1/4 text-center lg:text-left">
              <p className="font-medium text-sm lg:hidden">Price</p>
              <p className="opacity-70">Rs. 250,000.00</p>
            </div>

            {/* Quantity */}
            <div className="w-full lg:w-1/4 lg:pl-3 space-x-4 flex justify-center lg:justify-start items-center">
              <p className="font-medium text-sm lg:hidden">Quantity</p>
              <button
                className="outline outline-1 px-4 py-1 rounded-md text-center w-12"
              >1</button>
            </div>

            {/* Subtotal */}
            <div className="w-full lg:w-1/4 lg:pl-10 lg:text-nowrap text-center lg:text-left">
              <p className="font-medium text-sm lg:hidden">Subtotal</p>
              <p>Rs. 250,000.00</p>
            </div>
          </div>
          
          {/* Additional Image */}
          <div className="lg:pl-4 mt-4 lg:mt-0">
            <img src="/images/53.png" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="right-side bg-[#FFF9E5] p-6 lg:w-4/12 lg:space-y-10 shadow-md">
        <h3 className="text-center font-medium text-lg mb-4 lg:text-[28px] ">
          Cart Totals
        </h3>
        <div className="flex justify-between items-center mb-4">
          <p className="font-medium">Subtotal</p>
          <p className="opacity-70">Rs. 250,000.00</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <p className="font-medium">Total</p>
          <p className="text-yellow-600 font-bold text-[18px]">Rs. 250,000.00</p>
        </div>
        <button className="w-full outline-1 outline py-2 rounded-lg">
          Check Out
        </button>
      </div>
    </div>
        </div>
    )
}