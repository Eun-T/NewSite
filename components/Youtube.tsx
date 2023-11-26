"use client";

import React, { useState } from "react";
import HorizonSlide from "./HorizonSlide";

type YoutubeProps = {};

const Youtube = (props: YoutubeProps) => {
  const slides = [
    { url: "/images/ipad.png", title: "beach" },
    { url: "/images/smartplace.png", title: "boat" },
    { url: "/images/ipad.png", title: "forest" },
    { url: "/images/smartplace.png", title: "city" },
    { url: "/images/ipad.png", title: "italy" },
  ];

  return (
    <section className="relative w-full px-[4%] py-[50px]">
      <div className="max-w-[1240px] mx-auto w-full relative">
        <h2 className="text-[40px] font-[600] mb-[15px]">
        <span className="text-red-500">유튜브</span> 컨설팅
        </h2>
        <p className="text-[18px] text-gray-400 font-[600] mb-[20px]">
          위치 및 매장 홍보에 효과적인 네이버 지도 플레이스 마케팅입니다.
          <br />
          어뷰징이나 편법 없이 네이버 플레이스를 최적화 시켜 노출과 전환이 잘
          되게 만듭니다.
        </p>
        <HorizonSlide slides={slides} parentWidth={1240} />
      </div>
    </section>
  );
};

export default Youtube;
