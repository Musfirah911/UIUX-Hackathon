import Link from "next/link";
import PreFooter from "../components/preFooter";

export default function MyAccount(){
    return(
        <div>
             <div className="bg-[url('/images/18.png')]">
        <div className="pt-20 pb-20 justify-items-center">
          <img src="/images/19.png" alt="Logo" />
          <h3 className="font-semibold text-[36px] mt-[-14px] mb-3 ">My Account</h3>
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
              <li>My Account</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="Banner2 text-left p-10 sm:p-14 lg:p-28 flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-36">
  <div></div>
  <div className="LeftOne space-y-5 w-full lg:w-auto">
    <h3 className="font-medium text-[24px] sm:text-[30px]">Log In</h3>
    <div className="space-y-5">
      <p>Username or email address</p>
      <input type="email" className="outline outline-1 outline-neutral-300 px-5 sm:px-20 py-2 sm:py-4 rounded-lg w-full lg:w-auto" />
      <p>Password</p>
      <input type="password" className="outline outline-1 outline-neutral-300 px-5 sm:px-20 py-2 sm:py-4 rounded-lg w-full lg:w-auto" />
    </div>
    <div className="flex items-center pt-6 space-x-5">
      <button className="outline outline-1 outline-neutral-300 px-3 py-3 rounded-sm"></button>
      <p>Remember me</p>
    </div>
    <div className="pt-7 flex text-nowrap gap-2">
      <button className="outline outline-1 outline-neutral-300 px-8 sm:px-16 font-medium py-2 sm:py-4 rounded-lg">Log In</button>
      <button className="px-5 py-2 sm:py-4 rounded-lg">Lost your Password?</button>
    </div>
  </div>
  <div className="RightOne space-y-5 w-full lg:w-auto">
    <h3 className="font-medium text-[24px] sm:text-[30px]">Register</h3>
    <div className="space-y-5">
      <p>Email address</p>
      <input type="email" className="outline outline-1 outline-neutral-300 px-5 sm:px-20 py-2 sm:py-4 rounded-lg w-full lg:w-auto" />
    </div>
    <div className="space-y-7 pt-3">
      <p>A link to set a new password will be sent to your email<br />address.</p>
      <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <strong>privacy policy</strong>.</p>
    </div>
    <div className="pt-9">
      <button className="outline outline-1 outline-neutral-300 px-8 sm:px-16 font-medium py-2 sm:py-4 rounded-lg">Register</button>
    </div>
  </div>
</div>
            <PreFooter/>
        </div>
    )
}