"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import smartplace from "../public/images/smartplace.png";
import backgroundImage from "../public/images/bg-image5.png";
import SimpleBox from "./SimpleBox";
import { HiArrowDown } from "react-icons/hi";
import { type } from "os";
import { useTypedSuperpower } from "./useTypedSuperpower";

type Props = {};

const MainMenu = (props: Props) => {
  const superpowers = ["바이럴", "브랜드", "블로그", "SNS!!"]
  // const {typedSuperpower, selectedSuperpower, phase} = useTypedSuperpower(superpowers)
  const [word, setWord] = useState("바이럴");
  const [index, setIndex] = useState(1);

  const words = ["바이럴", "브랜드", "블로그", "SNS!!"];

  const wordLoading = () => {

    setIndex((prevIndex) => (prevIndex + 1) % words.length);
    setWord(words[index]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      wordLoading();
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  }, [index]);

  return (
    <section id="mainmenu" className="section overflow-hidden py-0">
      <div id="box" className="relative container h-[100vh]">
        <div className="relative top-[30%] bg-transparent" id="maintext">
          <div className="flex gap-3 mb-5">
            <button className="bgColor w-[150px] py-[13px] relative text-white text-center font-[600] block boxShd ">
              # 대면 상담 YES
            </button>
            <button className="bgColor w-[150px] py-[13px] relative text-white text-center font-[600] block boxShd">
              # 연중무휴 YES
            </button>
          </div>
          <div className="italic font-[400] text-[40px] bg-white">
            "This is Differentiated Marketing"
          </div>
          <div id="maintxt" className="overflow-hidden">
            <div className="text-[80px] font-[200] bg-white w-fit">
              <span className="font-[500] z-[3] relative">바이럴토스</span>와
              함께
            </div>
            <div id="container1" className="text-[80px] font-[200] bg-white overflow-hidden">
              <span
                id="sec-text"
                className={
                  "textColor font-[500] relative w-[207.43px] inline-block"
                }
                // aria-label={word}
              >
                {word}
                {/* {word ? word : "바이럴"} */}
              </span>
              <span className="z-[2] relative "> 마케팅을 시작하다</span>
            </div>
          </div>

          <img
            src="/images/under.png"
            alt="sdf"
            className="absolute top-[57%] left-[0%] w-[350px] h-auto z-[1]"
          />
        </div>
        <img
          src="/images/blend1.png"
          alt="sdf"
          className="relative top-[-40%] left-[80%] w-[500px] opacity-40 h-auto z-[1] animate-[imageUp_2.5s_ease_infinite]"
        />
        <img
          src="/images/blend1.png"
          alt="sdf"
          className="relative bottom-[15%] rotate-[135deg]  left-[85%] w-[500px] opacity-40 h-auto z-[1] animate-[imageDown_2.5s_ease_infinite]"
        />
      </div>
      {/* <div className="absolute top-[54%] -translate-y-[50%] left-0 w-full h-[2px] bgColor z-[-1] rotate-[355deg]"></div> */}
      {/* <div className="absolute top-[54%] -translate-y-[50%] left-0 w-full h-[2px] bgColor z-[-1] rotate-[15deg]"></div> */}
      {/* <div className="absolute left-[20%] -translate-x-[50%] top-0 w-[2px] h-full bgColor z-[-1]"></div> */}
      {/* <button className="bgColor w-[150px] py-[13px] absolute text-white text-center font-[600] block boxShd top-[54%] -translate-y-[50%] left-[66%] rotate-12"># 대면 상담 YES</button>
      <button className="bgColor w-[150px] py-[13px] absolute text-white text-center font-[600] block boxShd top-[25%] -translate-y-[50%] left-[16%] rotate-[348deg]"># 연중무휴 YES</button> */}
      <button className="flex justify-center items-center bgColor w-[58px] h-[58px] absolute text-white text-center animate-bounce top-[85%] left-[50%] -translate-x-[50%] rounded-[50%]">
        <HiArrowDown size={35} />
      </button>
    </section>
  );
};

// const MainMenu = (props: Props) => {
//   return (
//     <section id="mainmenu" className="section overflow-hidden py-0  pt-[70px]">
//       <div id="box" className="container flex relative  rounded-[30px] rounded-br-[200px] overflow-hidden bg-[#313538]">
//         <div className="pt-[150px] pb-[150px] z-10 text-white">
//           <h1 className="text-[60px] font-[600] leading-[1.3]">
//             마케팅 지식이
//             <br />
//             필요없는 나만의
//             <br />
//             바이럴 광고 시작하기

//             마케팅 전문 지식이<br/>필요 없는 나만의<br/>바이럴 광고를 시작하세요

//             성공적인 바이럴 광고를<br/>위한
//             최고의 선택
//           </h1>
//           <p>다양한 업무를 처리하는만큼 여러곳에 외주를 맡길 필요가 없습니다.다양한 업무를 처리하는<br/>만큼 여러곳에 외주를 맡길 필요가 없습니다.다양한 업무를 처리하는만큼 여러곳에 외주를 맡길 필요가 없습니다.</p>
//           <button className="bg-white rounded-[8px] text-[#313538]">문의하기</button>
//         </div>
//         <div className="absolute top-[100%] -translate-y-[50%] right-[-100px] flex justify-center items-center">
//           <div className="relative w-[801px] aspect-[931/690]">
//             <Image src={backgroundImage} alt="hero" fill objectFit="cover" />
//           </div>

//           <div className="hero__image-overlay" />
//         </div>
//       </div>
//     </section>
//   );
// };

export default MainMenu;
