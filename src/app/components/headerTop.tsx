import Link from "next/link";
export default function HeaderTop(){
    return(
        <div className="Header bg-[#FFFFFF] flex p-7">
            <div>
                    <ul className="UL font-medium flex space-x-10 ml-80 mt-1">

                            <li>
                                <Link href={"/home"}>Home</Link>
                            </li>
                            <li>
                                <Link href={"/shop"}>Shop</Link>
                            </li>
                            <li>
                                <Link href={"/about"}>Blog</Link>
                            </li>
                            <li>
                                <Link href={"/contact"}>Contact</Link>
                            </li>

                    </ul>

                  </div>

                  <div className="Icons flex space-x-10 ml-40">
                    <Link href={"/"}><img src="/images/4.png" alt="vector" /></Link>
                    <Link href={"/"}><img src="/images/2.png" alt="search" /></Link> 
                   <Link href={"/"}><img src="/images/1.png" alt="Favourite" /></Link> 
                   <Link href={"/"}><img src="/images/3.png" alt="cart" /></Link> 
                  </div>
            </div>
        
    );
};