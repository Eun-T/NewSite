"use client";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import './styles.css';
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import ipad from "../public/images/ipad.png";
import snsimage from "../public/images/snsimage.png";
import SnsImage from "./sns/SnsImage";
type SnsProps = {};

const Sns = (props: SnsProps) => {
  const images = [
    {
      id: 1,
      src: snsimage,
      alt: "sns",
    },
    {
      id: 2,
      src: ipad,
      alt: "sns",
    },
    {
      id: 3,
      src: snsimage,
      alt: "sns",
    },
    {
      id: 4,
      src: snsimage,
      alt: "sns",
    },
  ];
  const [slideNumber, setSlideNumber] = useState(1);

  return (
    <section className="relative w-full px-[4%] py-[50px]">
      <div className="max-w-[1240px] mx-auto w-full relative">
        <h2 className="text-[40px] font-[600] mb-[15px]"><span className="text-[#3b5998]">SNS</span> 마케팅</h2>

        <div className="flex flex-col">
          <div className="flex items-center mb-[20px]">
            <p className="text-[18px] text-gray-400 font-[600]">
              위치 및 매장 홍보에 효과적인 네이버 지도 플레이스 마케팅입니다.
              <br />
              어뷰징이나 편법 없이 네이버 플레이스를 최적화 시켜 노출과 전환이
              잘 되게 만듭니다.
            </p>
          </div>

          <SnsImage />

          {/* 이미지 박스 */}
          <div className="flex flex-row w-full h-[630px] relative rounded-3xl overflow-hidden bg-[#eee]">
            <div className="w-[200px] py-[10px] px-[20px]">
              <div className="w-full h-full flex flex-col gap-[10px] ">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={
                      "w-full h-[25%] cursor-pointer relative tranistion ease hover:scale-110 duration-200 rounded-3xl overflow-hidden" +
                      (slideNumber ? "" : "")
                    }
                    onClick={() => {
                      setSlideNumber(image.id);
                    }}
                  >
                    {/* <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full relative  object-cover"
                    /> */}
                    <>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        objectFit="cover"
                        fill
                      />
                      <div className={(image.id === slideNumber ? "" : " w-full h-full bg-black opacity-50 hover:opacity-0 transition duration-200")}></div>
                    </>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 overflow-hidden relative py-[10px]">
              {slideNumber >= 1 ? (
                <Image
                  src={images[slideNumber - 1].src}
                  alt={images[slideNumber - 1].alt}
                  objectFit="cover"
                  fill
                />
              ) : (
                ""
              )}
              {/* <img src="/images/snsimage.png" alt="" className="w-full h-full object-cover"/> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sns;
