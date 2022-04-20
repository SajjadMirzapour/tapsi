export default function Shadow() {
    return (
        <div className="lg:max-w-[610px] max-w-[300px] w-full bg-[rgba(23,26,60,0.7)] text-white p-[30px] md:mr-[146px] mx-auto">
            <div className="lg:mr-[64px] mx-auto pb-[45px] pt-5">
                <h1 className="lg:text-[60px] text-[30px] mb-[10px]">تپسی</h1>
                <h2 className="lg:text-[24px] text-[18px]">اپلیکیشن درخواست خودرو و پیک</h2>
            </div>
            <div className="grid grid-cols-1 gap-x-[30px] gap-y-2.5 md:gap-y-[30px] lg:grid-cols-2">
                <button className="bg-white text-black flex justify-between items-center py-4 px-[20px] rounded-lg">
                    <img className="ml-2" src="/images/backg/Vector 9.png" alt="#" />
                    <span className="text-[16px]">دانلود اپلیکیشن مسافران</span>
                </button>
                <button className="bg-white text-black flex justify-between items-center py-4 px-[20px] rounded-lg">
                    <img className="ml-2" src="/images/backg/PWA.png" alt="#" />
                    <span className="text-[16px]">وب اپلیکیشن مسافران</span>
                </button>
                <button className="flex justify-between items-center py-4 px-[20px] rounded-lg border-white border-[1px]">
                    <img className="ml-2" src="/images/backg/Vector 9 (1).png" alt="#" />
                    <span className="text-[16px]">دانلود اپلیکیشن رانندگان</span>
                </button>
                <button className="relative flex justify-center items-center py-4 px-[20px] rounded-lg border-white border-[1px]">
                    <img className="absolute top-4 right-4" src="/images/backg/car.png" alt="#" />
                    <span className="text-[16px]">ثبت نام راننده</span>
                </button>

            </div>
        </div>
    )
}