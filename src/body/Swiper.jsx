import { Navigation, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'

export default function Swipp() {
    return (
        <div className="flex lg:hidden justify-between w-[calc(100%-50px)] mx-auto" >
            {/* <div className='w-[calc(100%-505px)]'> */}
            <Swiper modules={[Navigation, A11y]} autoplay navigation={{
                nextEl: '#next-slide-button',
                prevEl: '#prev-slide-button',
            }}
                // slidesPerView={1}
                loop // loop={true}
                pagination={false}
                scrollbar={false}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    340: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    425: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    },
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 50
                    },
                }}
            >
                <SwiperSlide>
                    <div className="text-[18px] text-[#5E5E5E] text-center">
                        <img className="mb-[11px] last:mb-0 mx-auto block" src="/images/body/cc-classic 1.png" alt="#" />
                        <span>تپسی کلاسیک</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-[18px] text-[#5E5E5E] text-center">
                        <img className="mb-[11px] last:mb-0 mx-auto block" src="/images/body/cc-motopeyk 1.png" alt="#" />
                        <span>موتور پیک </span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-[18px] text-[#5E5E5E] text-center">
                        <img className="mb-[11px] last:mb-0 mx-auto block" src="/images/body/cc-autopeyk 1.png" alt="#" />
                        <span>اوتوپیک </span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-[18px] text-[#5E5E5E] text-center">
                        <img className="mb-[11px] last:mb-0 mx-auto block" src="/images/body/cc-plus-big-new 1.png" alt="#" />
                        <span>تپسی پلاس</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-[18px] text-[#5E5E5E] text-center">
                        <img className="mb-[11px] last:mb-0 mx-auto block" src="/images/body/telephone 1.png" alt="#" />
                        <span>تپسی تلفنی </span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-[18px] text-[#5E5E5E] text-center">
                        <img className="mb-[11px] last:mb-0 mx-auto block" src="/images/body/cc-hamyar 1.png" alt="#" />
                        <span>همیار</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-[18px] text-[#5E5E5E] text-center">
                        <img className="mb-[11px] last:mb-0 mx-auto block" src="/images/body/cc-hamkhat 1 (1).png" alt="#" />
                        <span>هم خط</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-[18px] text-[#5E5E5E] text-center">
                        <img className="mb-[11px] last:mb-0 mx-auto block" src="/images/body/cc-taxi 1.png" alt="#" />
                        <span>تاکسی</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-[18px] text-[#5E5E5E] text-center">
                        <img className="mb-[11px] last:mb-0 mx-auto block" src="/images/body/cc-line 1.png" alt="#" />
                        <span>تپسی لاین</span>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}