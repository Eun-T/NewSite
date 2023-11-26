"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import React, { useState } from "react";
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

type SmartPlaceProps = {};

const SmartPlace = (props: SmartPlaceProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">
          <span className="text-green-500 block s:inline">네이버 </span>
          스마트플레이스
        </h2>
        <p className="section-text">
          위치 및 매장 홍보에 효과적인 네이버 지도 플레이스 마케팅입니다.
          <br />
          어뷰징이나 편법 없이 네이버 플레이스를 최적화 시켜 노출과 전환이 잘
          되게 만듭니다.
        </p>
        <div className=" flex justify-center">
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
