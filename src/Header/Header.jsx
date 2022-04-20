export default function Header() {
    return (
        <div className="flex justify-between items-center w-5/6 mx-auto py-4">
            <div className="flex items-center justify-between">
                <span className="lg:text-[40px] text-[20px] text-black font-bold"> تپسی </span>
                <div className="relative w-[40px] mr-[10px]">
                    <img className="lg:w-[40px] lg:h-[24px] w-[30px] h-[14px]" src="/images/Group 1.png" alt="#" />
                </div>
            </div>
            <ul className="lg:flex justify-between hidden font-[20px] text-[#545454]">
                <li className="ml-10 last:ml-0"> پشتیبانی</li>
                <li className="ml-10 last:ml-0"> خدمات کسب و کارها</li>
                <li className="ml-10 last:ml-0">فرصت های شغلی</li>
                <li className="ml-10 last:ml-0">وبلاگ</li>
            </ul>
            <div className="lg:flex hidden text-[20px] text-white bg-[#FF5722] w-[140px] h-[46px] rounded-md">
                <button className="flex py-[5px] mx-auto">دانلود تپسی</button>
            </div>
            <div className="lg:hidden flex">
                <img src="/images/MenuToggler.png" alt="#" />
            </div>
        </div>
    )
}