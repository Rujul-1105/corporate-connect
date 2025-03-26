import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../components/carousel.css';

const Carousel = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative px-4 py-10 border-b-2 border-white"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
    >
      {/* Container for text and carousel */}
      <div className="bg-blue-100/70 backdrop-blur-md w-full max-w-4xl p-4 rounded-lg">
        <div className="heading">Corporate Connect 3.0</div>
        <div className="flex flex-col items-center">
          <div className="w-full text-blue-950 p-3">
            <p className="para">
              Corporate Connect is an industry-academia interaction event hosted by IIT Ropar that provides a platform to industry leaders, renowned academics, and ambitious students to foster meaningful connections, facilitate knowledge-sharing, and inspire innovative approaches to tackle the challenges of today’s dynamic industrial landscape.
              Today’s corporations are global, complex, and interconnected, crossing domains, cultures, and technologies. In this era, success isn’t about being a 'jack of all trades' or a 'master of one'—it’s about becoming a master of many. The modern engineer or innovator must blend expertise across disciplines, from mechanics to AI, to truly thrive.
              Corporate Connect at IIT Ropar aims to be the bridge linking industries, academia, and aspiring leaders, creating a dynamic space where knowledge meets innovation. This ambitious initiative is our commitment to shaping tomorrow’s multidisciplinary trailblazers, ready for a rapidly evolving world.
              Corporate Connect 3.0 – our continued effort to bridge the gap between classroom knowledge and the real-world demands of tomorrow. This year, we’re taking future leaders straight to the source, offering firsthand insights from top industry experts on breakthrough technologies and the evolving fusion of engineering fields. Join us and step into the future, where knowledge meets innovation and leadership is redefined.
            </p>
          </div>
          {/* Carousel Container */}
          <div className="w-full max-w-7xl p-6 rounded-xl">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              className="rounded-xl"
            >
              <SwiperSlide>
                <img src="/images/5.png" alt="Slide 1" className="pic" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/2.png" alt="Slide 2" className="pic" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/3.png" alt="Slide 3" className="pic" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/4.png" alt="Slide 4" className="pic" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/5.png" alt="Slide 5" className="pic" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/6.png" alt="Slide 6" className="pic" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/7.png" alt="Slide 7" className="pic" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/8.png" alt="Slide 8" className="pic" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
