// import Link from "next/link"
// export default function Footer(){
//     return(
//         <footer className="parentFooter w-full bg-[#FFFFFF] text-[12px] ">
//             <div className="childFoooter ma m-8  space-x-[136px]  ">
//                 <div className="max-w-[1131px] flex m-8">
//                     <div className="1 text-nowrap opacity-45  text-left mt-16">400 University Drive Suite 200 Coral <br />Gables, <br />
//                     FL 33134 USA</div>
//                     <div className="2 ml-10 ">
//                         <h5 className="opacity-45">Links</h5>
//                         <ul className="mt-7">
//                         <Link href="/home"><li className="mt-5">Home</li></Link>
//                         <Link href="/shop"><li className="mt-5">Shop</li></Link>
//                         <Link href="/about"><li className="mt-5">About</li></Link>
//                         <Link href="/contact"><li className="mt-5">Contact</li></Link></ul>
//                     </div>
//                     <div className="3 ml-10">
//                         <h5 className="opacity-45">Help</h5>
//                         <ul className="mt-7">
//                         <Link href="/paymentOptions"><li className="mt-5 text-nowrap">Payment Options</li></Link>
//                         <Link href="/Returns"><li className="mt-5 text-nowrap">Returns</li></Link>
//                         <Link href="/Privacy Policy"><li className="mt-5 text-nowrap">Privacy Policy</li></Link>
//                        </ul></div>
//                     <div className="4 ml-10">
//                     <h5 className="opacity-45 ">Newsletter</h5>
//                     <div className="flex">
//                     <input type="text" placeholder="Enter Your Email Address" className="outline-none underline mt-7 opacity-35"/>
//                     <button className="outline-none underline mt-7 ml-4">Subscribe</button></div>
//                     </div>
//                 </div>
//             </div>
//             <div className="Below h-[24px] lg:ml-16 text-[12px] align-top text-left">. All rights reverved</div>
//         </footer>
//     )
// }

import Link from "next/link";
export default function Footer(){
    return(
        <div className="Footer h-[505px] bg-white">

           <div className="Rectangle bg-white border border-black/30 border-opacity-[17%]">

           <div className="Top flex">

            <div className="Group_L">
            <p className="Para text-[#9F9F9F] text-[16px] ml-20 mt-36 flex-nowrap">400 University Drive Suite 200 Coral <br /> Gables,<br />
            FL 33134 USA</p>
            </div>
            
            <div className="Group_R flex">
                <div className="Links flex">
                    <div className="NavLinks mt-12 ml-32 text-[16px]">
                        <h5 className="h text-[#9F9F9F]">
                            Links
                        </h5>
                        <ul className="UL text-black font-medium mt-14">
                            <li className="LI mt-10">
                                <Link href={"/"} >Home</Link>
                            </li>
                            <li className="LI mt-10">
                                <Link href={"/"}>Shop</Link>
                            </li>
                            <li className="LI mt-10">
                                <Link href={"/"}>About</Link>
                            </li>
                            <li className="LI mt-10">
                                <Link href={"/"}>Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="HelpLinks mt-12 ml-32 text-[16px]">
                        <h5 className="h text-[#9F9F9F]">
                            Help
                        </h5>
                        <ul className="UL text-black font-medium mt-14">
                            <li className="LI mt-10">
                                <Link href={"/"}>Payment Options</Link>
                            </li>
                            <li className="LI mt-10">
                                <Link href={"/"}>Returns</Link>
                            </li>
                            <li className="LI mt-10">
                                <Link href={"/"}>Privacy Policies</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="Input">
                    <h5 className="h text-[#9F9F9F] mt-12 ml-20 text-[16px]">
                        Newsletter
                    </h5>
                    <div className="MInput mt-14 ml-20 flex">
                        <div>
                        <input type="email" placeholder="Enter Your Email Address"/>
                        <div className="Line bg-black h-[1px]"></div>
                        </div>
                        <div>
                        <button className="B ml-11">
                            Subscribe
                        </button>
                        <div className="Line bg-black h-[1px] ml-11"></div>
                        </div>
                    </div>
                </div>
            </div>
           </div>
           <div className="Bottom mt-12"></div>
           <div className="Line  bg-white border border-black/30 border-opacity-[17%] ml-20"></div>
           <p className="Para ml-20 mt-9">2022 Meubel House. All rights reverved</p>
           </div>
       </div>
    );
};