import Swipp from "./Swiper";

export default function Services() {
    return (
        <div className="md:mt-72 mt-10">
            <h2 className="md:text-[50px] text-[20px] text-black font-bold mb-[39px]">
                سرویس‌های تپسی
            </h2>
            <ul className="lg:flex justify-between items-center text-center hidden">
                <li className="text-[18px] text-[#5E5E5E] ">
                    <img className="mb-[11px] last:mb-0" src="/images/body/cc-classic 1.png" alt="#" />
                    <span>تپسی کلاسیک</span>
                </li>
                <li className="text-[18px] text-[#5E5E5E] ">
                    <img className="mb-[11px] last:mb-0" src="/images/body/cc-motopeyk 1.png" alt="#" />
                    <span>موتور پیک </span>
                </li>
                <li className="text-[18px] text-[#5E5E5E] ">
                    <img className="mb-[11px] last:mb-0" src="/images/body/cc-autopeyk 1.png" alt="#" />
                    <span>اوتوپیک </span>
                </li>
                <li className="text-[18px] text-[#5E5E5E] ">
                    <img className="mb-[11px] last:mb-0" src="/images/body/cc-plus-big-new 1.png" alt="#" />
                    <span>تپسی پلاس</span>
                </li>
                <li className="text-[18px] text-[#5E5E5E] ">
                    <img className="mx-auto mb-[11px] last:mb-0" src="/images/body/telephone 1.png" alt="#" />
                    <span>تپسی تلفنی </span>
                </li>
                <li className="text-[18px] text-[#5E5E5E] ">
                    <img className="mb-[11px] last:mb-0" src="/images/body/cc-hamyar 1.png" alt="#" />
                    <span>همیار</span>
                </li>
                <li className="text-[18px] text-[#5E5E5E] ">
                    <img className="mb-[11px] last:mb-0" src="/images/body/cc-hamkhat 1 (1).png" alt="#" />
                    <span>هم خط</span>
                </li>
                <li className="text-[18px] text-[#5E5E5E] ">
                    <img className="mb-[11px] last:mb-0" src="/images/body/cc-taxi 1.png" alt="#" />
                    <span>تاکسی</span>
                </li>
                <li className="text-[18px] text-[#5E5E5E] ">
                    <img className="mb-[11px] last:mb-0" src="/images/body/cc-line 1.png" alt="#" />
                    <span>تپسی لاین</span>
                </li>
            </ul>
            <Swipp />
        </div>
    )
}