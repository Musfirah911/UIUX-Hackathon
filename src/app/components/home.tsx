export default function MainPage(){
    return(
        <div className="w-auto">
        <div className="Banner1 bg-[#FBEBB5] flex h-screen w-auto">
            <div className="ml-16 items-center justify-start w-1/2 pl-8 ">
                <p className="text-[44px] mt-56">Rocket single</p>
                <p className="text-[42px] ">seater</p>
                <button className="outline-none underline mt-4 text-[18px] ">Shop Now</button>
            </div>
            <img src="/images/5.png" alt="Rocket single seater"  />
        </div>
        <div className="Banner2 flex flex-wrap bg-[#FAF4F4] h-screen w-auto ">
            <div className="flex mt-10">
            <div className="part1 w-[605px] h-[562px] mt-7 ml-20 pb-10">
                <img src="/images/6.png" alt="Table" className="w-[500px] h-[400px] " />
                <p className="text-[35px] ml-20 mt-0">Side table</p>
                <button className="ml-20 mt-3 outline-none text-[18px] underline">View More</button>
            </div>
            <div className="part2 w-[605px] h-[562px] m-4 pb-10">
            <img src="/images/7.png" alt="Table" className="w-[500px] h-[400px] " />
                <p className="text-[35px] ml-20 mt-0 ">Side table</p>
                <button className="ml-20 mt-3 outline-none text-[18px] underline">View More</button>
                </div>
            </div>
        </div>
        <div className="Banner3"></div>
        </div>
    )
}