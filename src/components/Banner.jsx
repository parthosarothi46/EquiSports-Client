import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <section className="slider w-full h-60 md:h-80 lg:h-[600px]">
      <Swiper
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide className="relative">
          <img
            src="https://i.ibb.co.com/LvWsvWb/1.jpg"
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end pb-10 justify-center">
            <h2 className="text-white text-2xl md:text-5xl font-bold">
              Wide Range of Sports Equipment
            </h2>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="relative">
          <img
            src="https://i.ibb.co.com/4F6LpNN/5.jpg"
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end pb-10 justify-center">
            <h2 className="text-white text-2xl md:text-5xl font-bold">
              Wide Range of Sports Equipment
            </h2>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="relative">
          <img
            src="https://i.ibb.co.com/xzdx5h4/3.jpg"
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end pb-10 justify-center">
            <h2 className="text-white text-2xl md:text-5xl font-bold">
              Wide Range of Sports Equipment
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
