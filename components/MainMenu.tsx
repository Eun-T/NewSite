import React from "react";
import Image from "next/image";
import smartplace from "../public/images/smartplace.png";
import backgroundImage from "../public/images/bg-image5.png";
import SimpleBox from "./SimpleBox";
type Props = {};

const MainMenu = (props: Props) => {
  //bg-green-400
  return (
    <section id="mainmenu" className="w-full bg-gradient-to-r from-[#b6f492] to-[#338b93] px-[4%]">
      <div className="flex flex-col w-full m:flex-row gap-5 z-0 max-w-[1240px] mx-auto relative py-[80px]">
        <div className="py-[150px] z-10">
          <h1 className="text-[50px] font-[600] ">
            마케팅 지식이
            <br />
            필요없는 나만의
            <br />
            바이럴 광고 시작하기
          </h1>
          <button className="bg-white rounded-[8px]">문의하기</button>
        </div>
        <div className="absolute top-[50%] -translate-y-[50%] right-[-50px] flex justify-center items-center">
          <div className="relative w-[931px] h-[690px]">
            {/* w-[900px] aspect-video */}
            <Image src={backgroundImage} alt="hero" fill objectFit="cover" />
          </div>

          <div className="hero__image-overlay" />
        </div>
      </div>
    </section>
  );
};

export default MainMenu;
