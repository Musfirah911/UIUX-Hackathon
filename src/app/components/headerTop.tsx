import Link from "next/link";

export default function HeaderTop() {
  return (
    <div className="Header bg-[#FFFFFF] flex items-center justify-between px-4 py-4 md:px-12 md:py-4 gap-x-8">
      {/* Spacer to help center navigation */}
      <div className="flex-1 md:flex-none"></div>

      {/* Navigation Section */}
      <div className="w-full md:w-auto flex-nowrap">
        <ul className="UL font-medium flex items-center gap-4 md:gap-8 justify-start md:justify-center text-sm md:text-base">
          <li>
            <Link
              href={"/home"}
              className="hover:underline hover:underline-offset-4"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/shop"}
              className="hover:underline hover:underline-offset-4"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href={"/blog"}
              className="hover:underline hover:underline-offset-4"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href={"/contact"}
              className="hover:underline hover:underline-offset-4"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Icons Section */}
      <div className="Icons flex items-center gap-4 md:gap-6 flex-nowrap">
        <Link href={"/my-account"}>
          <img
            src="/images/4.png"
            alt="vector"
            className="h-4 md:w-6 md:h-6 hover:scale-110 transition-transform"
          />
        </Link>
        <Link href={"/"}>
          <img
            src="/images/2.png"
            alt="search"
            className="h-4 md:w-6 md:h-6 hover:scale-110 transition-transform"
          />
        </Link>
        <Link href={"/single-product"}>
          <img
            src="/images/1.png"
            alt="Favourite"
            className="h-4 md:w-6 md:h-6 hover:scale-110 transition-transform"
          />
        </Link>
        <Link href={"/cart"}>
          <img
            src="/images/3.png"
            alt="cart"
            className="h-4 md:w-6 md:h-6 hover:scale-110 transition-transform"
          />
        </Link>
      </div>
    </div>
  );
}
