import { Button } from 'src/components';
export default function Benefits() {
    return (
        <div className="xl:flex justify-between mt-22">
            <img className="xl:hidden w-[300px] h-[196px] mb-[11px]" src="/images/body/driver 1.png" alt="#" />
            <div className="xl:ml-[45px]">
                <h1 className="xl:text-[50px] text-[16px] font-bold mb-[10px]">مزایای تپسی برای رانندگان تاکسی اینترنتی</h1>
                <div className="xl:text-[24px] text-[14px] text-[#333333]">
                    <p className="mb-[30px]">
                        رانندگان (سفیران) به‌عنوان همکاران تپسی، جایگاه ویژه‌ای برای شرکت دارند. به همین‌دلیل مزایای مختلفی برای آنها در نظر گرفته شده است.
                    </p>
                    <p>
                        کسب درآمد روزانه، پایدار و بدون محدودیت
                    </p>
                    <p>۱. امکان تسویه‌ی اعتبار در هر ساعت از شبانه‌روز</p>
                    <p>۲. طرح‌های تشویقی، ماموریت‌ها‌، پاداش و اعطای وام‌های قرض‌الحسنه به‌طور دوره‌ای </p>
                    <p> ۳. نمایش مکان‌های پردرخواست در اپلیکیشن و دریافت سفرهای طلایی</p>
                    <p>تضمین امنیت و پشتیبانی رانندگان</p>
                    <p>۱. پشتیبانی ۲۴ ساعته</p>
                    <p>۲. امکانات امنیت سفر شامل تماس اضطراری با واحد امنیت و پشتیبانی ۲۴ ساعته تیم امنیت</p>
                    <p>واریز سهمیه بنزین ویژه رانندگان تپسی</p>
                    <p>۱. نمایش میزان پیمایش ماهانه درون اپلیکیشن</p>
                    <p>۲. محاسبه‌ی مسافت طی شده تا مسافر در پیمایش استفاده از مزایای
                        <span className="text-blue-600">باشگاه رانندگان تپس</span>
                    </p>
                    <p>. تخفیف روی خدمات خودرو مانند بیمه، سرویس‌های دوره‌ای، خرید لاستیک و ... </p>
                    <p>۲. تخفیف روی خدمات رفاهی مانند وام قرض‌الحسنه، خدمات درمانی، خرید اقساطی و ...</p>
                </div>
                <div className="xl:flex  text-white mt-[52px]">
                    <Button color="blue">ثبت نام راننده تاکسی آنلاین</Button>
                    <Button color="blue">دانلود برنامه تپسی راننده</Button>
                </div>
            </div>
            <img className="xl:flex hidden h-[443px]" src="/images/body/driver 1.png" alt="#" />
        </div>
    )
}