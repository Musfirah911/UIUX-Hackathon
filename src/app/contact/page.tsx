import Link from "next/link";
import PreFooter from "../components/preFooter";

export default function Contact() {
  return (
    <div className="">
      <div className="Header bg-[url('/images/18.png')]">
        <div className="pt-20 pb-20 justify-items-center">
          <img src="/images/19.png" alt="Logo" />
          <h3 className="font-semibold text-[36px] mt-[-14px] mb-3 ">
            Contact
          </h3>
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
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
<div className="Banner1 text-center">
  <div className="py-20 px-4 lg:px-0">
    <h3 className="text-[30px] font-medium">Get In Touch With Us</h3>
    <p className="opacity-50 text-[14px]">
      For More Information About Our Product & Services. Please Feel Free
      To Drop Us <br className="hidden lg:block" /> An Email. Our Staff Always
      Be There To Help You Out. Do Not Hesitate!
    </p>
  </div>
  <div className="flex flex-col lg:flex-row ">
    {/* Left Side */}
    <div className="leftSide pt-5 text-left justify-items-center">
      <div className="flex py-5 lg:px-40 px-8">
        <img
          src="/images/32.png"
          alt="location icon"
          className="h-[28.18px] w-[22px]"
        />
        <div className="px-4 lg:px-8">
          <h4 className="text-[20px] font-medium">Address</h4>
          <p className="text-[14px]">
            236 5th SE Avenue, New <br /> York NY10000, United <br /> States
          </p>
        </div>
      </div>
      <div className="flex py-5 lg:px-40 px-8">
        <img
          src="/images/33.png"
          alt="phone icon"
          className="h-[28.18px] w-[26px]"
        />
        <div className="px-4 lg:px-8">
          <h4 className="text-[20px] font-medium">Phone</h4>
          <p className="text-[14px]">
            Mobile: +(84) 546-6789 <br />
            Hotline: +(84) 456-6789
          </p>
        </div>
      </div>
      <div className="flex py-5 lg:px-40 px-8">
        <img
          src="/images/34.png"
          alt="clock icon"
          className="h-[22px] w-[22px]"
        />
        <div className="px-4 lg:px-8">
          <h4 className="text-[20px] font-medium">Working Hours</h4>
          <p className="text-[14px]">
            Monday-Friday: 9:00 - <br />
            22:00 <br />
            Saturday-Sunday: 9:00 - <br />
            21:00
          </p>
        </div>
      </div>
    </div>

    {/* Right Side */}
    <div className="rightSide pt-5 text-left text-[16px]">
      <div className="py-5 px-4 lg:px-28 mb-32">
        <div className="flex flex-col space-y-8">
          <p className="font-medium">Your Name</p>
          <input
            type="text"
            className="outline outline-1 px-4 lg:px-28 py-3 outline-slate-400 rounded-md"
            placeholder="Abc"
          />
          <div className="flex flex-col space-y-8">
            <p className="font-medium">Email address</p>
            <input
              type="text"
              className="outline outline-1 px-4 lg:px-28 py-3 outline-slate-400 rounded-md"
              placeholder="Abc@def.com"
            />
            <div className="flex flex-col space-y-8">
              <p className="font-medium">Subject</p>
              <input
                type="text"
                className="outline outline-1 px-4 lg:px-28 py-3 outline-slate-400 rounded-md"
                placeholder="This is an optional"
              />
              <div className="flex flex-col space-y-8">
                <p className="font-medium">Message</p>
                <input
                  className="outline outline-1 px-4 lg:px-28 py-6 outline-slate-400 rounded-md"
                  placeholder="Hi! I'd like to ask about"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-14 text-center lg:text-left">
          <button
            className="outline outline-1 px-10 lg:px-20 py-2 rounded-lg"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<PreFooter/>
    </div>
  );
}
