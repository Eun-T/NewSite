"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { SwiperCore } from "swiper";
import {
  Pagination,
  EffectCoverflow,
  Navigation,
  Autoplay,
} from "swiper/modules";
import "swiper/css/autoplay";
import SmartMap from "./smartPlace/SmartMap";
import SmartManage from "./smartPlace/SmartManage";
import SmartOtherService from "./smartPlace/SmartOtherService";
import "aos/dist/aos.css";
import AOS from "aos";

type SmartPlaceProps = {};

const SmartPlace = (props: SmartPlaceProps) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section className="section" id="smartplace">
      <div className="container">
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="60"
          data-aos-once="true"
          data-aos-easing="ease-in-out"
        >
          <h2 className="section-title">
            <span className="text-green-500 block s:inline">네이버 </span>
            스마트플레이스
          </h2>
          <p className="section-text">
            네이버에서 제공하는 서비스로는 가게와 업체의 상세한 정보를 확인할 수
            있습니다.&nbsp;
            <br className="hidden x:block"/>
            위치, 사진, 휴무일 등 다양한 정보를 기입하여 이용자에게 제공합니다.&nbsp;
            <br className="hidden x:block"/>
            국내에서 매우 널리 사용되며, 약 200만 개의 플레이스 업체가 등록되어
            있습니다.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-full mx-auto">
            <SmartMap />
            <SmartManage />

            {/* <div className="relative w-full bg-black py-[80px]">
              <h3 className="text-white text-[32px] text-center font-[600] mb-[50px]">그 외의<br />다양한 서비스</h3>
              <div className="flex flex-row flex-wrap gap-[20px] justify-center">
                {others.map((other) => (
                  <div id={other.id} className="flex flex-row  w-[48%] h-[200px] bg-[#f4f5f7] rounded-[8px] p-[20px]">
                    <div className="relative w-[50%] h-full">
                      <Image src={other.image} alt={other.alt} objectFit="contain" fill />
                    </div>
                    <div className="relative w-[50%] h-full flex items-center justify-center">
                      <p className="text-center">
                        {other.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            {/* <Swiper
              observer
              observeParents
              style={{
                height: "600px",
                position: "relative",
                // padding: "2rem 0",
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              initialSlide={1}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 150,
                modifier: 2.5,
                slideShadows: false,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
            >
              <SwiperSlide
                style={{
                  width: "680px",
                  height: "510px",
                  position: "relative",
                  userSelect: "none",
                }}
              >
                <img
                  src="/images/smartplace.png"
                  alt="slide_image0"
                  className="w-[680px] h-[510px] relative  object-cover"
                />
              </SwiperSlide>
              <SwiperSlide
                style={{
                  width: "680px",
                  height: "510px",
                  position: "relative",
                  userSelect: "none",
                }}
              >
                <img
                  src="/images/ipad1.png"
                  alt="slide_image"
                  className="w-[680px] h-[510px] relative  object-cover"
                />
                <div className="flex items-center justify-center mt-[-10px]">
                  <span className="text-green-500 text-[45px] font-[700]">
                    스마트 플레이스
                  </span>
                  &nbsp;
                  <p className="text-center text-[30px] font-[700]">
                    설정을 더 꼼꼼하게
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  width: "680px",
                  height: "510px",
                  position: "relative",
                  userSelect: "none",
                }}
              >
                <p>안녕하세요</p>
                <img
                  src="/images/iphone3.png"
                  alt="slide_image"
                  className="w-[680px] h-[510px] relative  object-cover"
                />
              </SwiperSlide>
              <SwiperSlide
                style={{
                  width: "680px",
                  height: "510px",
                  position: "relative",
                  userSelect: "none",
                }}
              >
                <img
                  src="/images/menu5.png"
                  alt="slide_image"
                  className="w-[680px] h-[510px] relative  object-cover"
                />
              </SwiperSlide>

              <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow"></div>
                <div className="swiper-button-next slider-arrow"></div>
                <div className="swiper-pagination"></div>
              </div>
            </Swiper> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartPlace;

{
  /* {images.map((image, index) => (
                  <SwiperSlide
                    key={index}
                    style={{
                      width: "680px",
                      height: "510px",
                      position: "relative",
                      margin: "0 auto",
                    }}
                  >
                    <Image src={image.src} alt={image.alt} objectFit="cover" />
                  </SwiperSlide>
                ))} */
}
{
  /* <div className="slider-controler">
                  <div className="swiper-button-prev slider-arrow">
                    <Image src={arrowBack} alt="arrowBack" className="w-[40px] h-[40px]" objectFit="cover"/>
                  </div>
                  <div className="swiper-button-next slider-arrow">
                    <Image src={arrowForward} alt="arrowForward" className="w-[40px] h-[40px]" objectFit="cover"/>
                  </div>
                  <div className="swiper-pagination"></div>
                </div> */
}
