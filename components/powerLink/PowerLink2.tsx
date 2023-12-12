"use client";

import React, { useState } from "react";
import Image from "next/image";
import englishback from "../../public/images/englishback.png";
import englishfront from "../../public/images/englishfront.png";
import foodback from "../../public/images/foodback.png";
import foodfront from "../../public/images/foodfront.png";
import localback from "../../public/images/localback.png";
import localfront from "../../public/images/localfront.png";
import soccerBackground from "../../public/images/soccerBackground.png";
import soccerFront from "../../public/images/soccerFront.png";

type Props = {};

const searches = [
  {
    id: 0,
    title: "사이트검색광고",
    backImage: soccerBackground,
    frontImage: soccerFront,
    delay: 50,
    // MouseEnter: onMouseEnter={() => setIsHovered(true)},
    // MouseLeave: onMouseLeave={() => setIsHovered(false)}
  },
  {
    id: 1,
    title: "플레이스광고",
    backImage: foodback,
    frontImage: foodfront,
    delay: 150,
  },
  {
    id: 2,
    title: "콘텐츠검색광고",
    backImage: englishback,
    frontImage: englishfront,
    delay: 250,
  },
  {
    id: 3,
    title: "지역소상공인광고",
    backImage: localback,
    frontImage: localfront,
    delay: 350,
  },
];

const PowerLink2 = (props: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative bg-[url('/images/computer.jpg')] m:bg-fixed bg-no-repeat bg-cover before:content-[''] before:bg-black before:absolute before:inset-0  before:bg-bottom before:bg-no-repeat before:bg-cover before:opacity-30 section mb-[150px]">
      <div className="container px-[24px] relative">
        {/* <h3 className="text-white text-center text-[40px] font-[500] mb-[0px]">검색광고 대표 상품 소개</h3> */}
        <h4 className="text-white text-center text-[28px] x:text-[32px] m:text-[36px] l:text-[40px] font-[500] mb-[40px]">
          다른 검색광고 상품들도{" "}<br className="block m:hidden"/>작업이 가능합니다.
        </h4>
        <div className="grid grid-cols-2 l:flex justify-between justify-items-center">
          {/* <div className="flex justify-between"> */}
          {searches.map((search) => (
            <div
              className="w-[25%] flex flex-col items-center"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              key={search.id}
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={search.delay}
              data-aos-once="true"
              data-aos-easing="ease-in-out"
            >
              <p className="font-[400] text[22px] l:text-[24px] text-white mb-[30px]">
                {search.title}
              </p>
              <div className="relative border-[3px] border-green-500 border-solid">
                <div className="w-[140px] s:w-[160px] x:w-[180px] m:w-[200px] relative aspect-[230/336]">
                  <Image
                    src={search.backImage}
                    alt="soccerBackground"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className={
                    "w-[160px] s:w-[180px] x:w-[205px] m:w-[225px] absolute h-auto top-[45px] x:top-[75px] left-[50%] -translate-x-[50%] z-2 border-[3px] border-green-500 border-solid transition duration-300 ease-in-out shadow-[0_6px_10px_rgba(0,0,0,.15)] " +
                    (isHovered ? "scale-105 border-blue-500" : "")
                  }
                >
                  <Image
                    src={search.frontImage}
                    alt="soccerFront"
                    // fill
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PowerLink2;
