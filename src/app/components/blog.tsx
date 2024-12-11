import Link from "next/link";

export default function Blog() {
  return (
    <div className="bg-[url('/images/18.png')]">
      <div className="pt-20 pb-20 justify-items-center">
        <img src="/images/19.png" alt="Logo" />
        <h3 className="font-semibold text-[28px] mt-[-14px] mb-3 ">Blog</h3>
        <div className="flex text-[17px] ">
          <ul className="flex">
          <Link href="/mainPage">
            <li className="">Home</li>
          </Link>
          <img src="/images/20.png" alt="vector" className="w-2 h-3 m-2 justify-center" />
          <li>Blog</li>
        </ul>
        </div>
      </div>
    </div>
  );
}
