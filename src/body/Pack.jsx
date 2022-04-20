const ITEMS = [
    {
        tite: 'بسته امنیت سفر',
        description: ' امکانات ویژه امنیت سفر، شامل اشتراک سفر و پشتیبانی ۲۴ ساعته تیم متخصصین امنیت تپسی'
    },
    {
        tite: 'درخواست تلفنی',
        description: 'امکان درخواست خودرو بدون نیاز به اینترنت و اپلیکیشن، از طریق تماس با شماره ۱۶۳۰'
    },
    {
        tite: 'دسترس‌پذیری برای توان‌یابان',
        description: 'امکان استفاده کاربران نابینا و ناشنوا از اپلیکیشن تپسی و عدم کسر کمیسیون از سفر مسافران ویلچردار'
    },
    {
        tite: 'امکانات هوشمند',
        description: 'سهولت استفاده از اپلیکیشن با پیشنهاد مبدا و مقصد سفر، مقاصد منتخب و پیشنهادهای ویژه شما'
    },
]

export default function Pack() {
    return (
        <div className="xl:city CityLight">
            <div className="w-[95%] mx-auto py-20">
                <div className="lg:flex justify-between items-center mx-auto">
                    {ITEMS.map(({ tite, description }, i) => <div key={i} className="flex flex-col flex-1 px-4 items-center text-white text-center lg:mb-0 mb-10 lg:border-l-2 lg:last:border-l-0 border-gray-50">

                        <h3 className="text-[24px] mb-[10px]">{tite}</h3>
                        <p className="text-[18px}">
                            {description}
                        </p>


                    </div>)}
                </div>
            </div >
        </div >
    )
}