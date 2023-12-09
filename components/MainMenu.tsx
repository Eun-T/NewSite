"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import under from "../public/images/under.png";
import backgroundImage from "../public/images/bg-image5.png";
import SimpleBox from "./SimpleBox";
import { HiArrowDown } from "react-icons/hi";
import { type } from "os";
import { useTypedSuperpower } from "./useTypedSuperpower";

type Props = {};

const MainMenu = (props: Props) => {
  const superpowers = ["바이럴", "브랜드", "블로그", "SNS!!"];
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
      <div id="box" className="relative container h-[587px] m:h-[100vh]">
        <div className="relative top-[30%] m:top-[26%] bg-transparent" id="maintext">
          <div className="flex gap-3 mb-5">
            <button className="bgColor w-[105px] s:w-[120px] m:w-[130px] l:w-[150px] py-[13px] text-[12px] s:text-[14px] m:text-[15px] l:text-[16px] relative text-white text-center font-[600] block boxShd">
              # 대면 상담 YES
            </button>
            <button className="bgColor w-[105px] s:w-[120px] m:w-[130px] l:w-[150px] py-[13px] text-[12px] s:text-[14px] m:text-[15px] l:text-[16px] relative text-white text-center font-[600] block boxShd">
              # 연중무휴 YES
            </button>
          </div>
          <div className="italic font-[400] text-[20px] x:text-[25px] m:text-[30px] l:text-[40px] bg-white">
            "This is Differentiated Marketing"
          </div>
          <div
            id="maintxt"
            className="overflow-hidden leading-[1.7] x:leading-[1.5] text-[33px] s:text-[38px] x:text-[45px] m:text-[65px] l:text-[80px]"
          >
            <h1 className="font-[200] bg-white w-fit">
              <span className="font-[500] z-[3] relative">바이럴토스</span>와
              함께
            </h1>
            <h1 id="container1" className="font-[200] bg-white overflow-hidden">
              <span
                id="sec-text"
                className={
                  "textColor font-[500] relative w-[85px] s:w-[100px] x:w-[120px] m:w-[170px] l:w-[207.43px] inline-block"
                }
                // aria-label={word}
              >
                {word}
                {/* {word ? word : "바이럴"} */}
              </span>
              <span className="z-[2] relative "> 마케팅을 시작하다</span>
            </h1>
          </div>

          <div className="absolute top-[66%] s:top-[63%] m:top-[57%] left-[0%] w-[150px] s:w-[180px] x:w-[200px] m:w-[290px] l:w-[350px] h-auto z-[1] aspect-[1000/146]">
            <Image src={under} alt="under" className="w-full h-full object-cover" />
          </div>

          <a href="#smartplace" className="flex justify-center items-center bgColor w-[50px] h-[50px] m:w-[58px] m:h-[58px] absolute text-white text-center animate-imageUp bottom-[-100px] m:bottom-[-160px] left-[50%] -translate-x-[50%] rounded-[50%] z-[10]">
            <HiArrowDown size={35} />
          </a>
          {/* <img
            src="/images/under.png"
            alt="sdf"
            className="absolute top-[57%] left-[0%] w-[350px] h-auto z-[1]"
          /> */}
        </div>
        {/* <img
          src="/images/blend1.png"
          alt="sdf"
          className="relative top-[-40%] left-[80%] w-[500px] opacity-40 h-auto z-[1] animate-[imageUp_2.5s_ease_infinite]"
        />
        <img
          src="/images/blend1.png"
          alt="sdf"
          className="relative bottom-[15%] rotate-[135deg]  left-[85%] w-[500px] opacity-40 h-auto z-[1] animate-[imageDown_2.5s_ease_infinite]"
        /> */}
      </div>
      {/* <div className="absolute top-[54%] -translate-y-[50%] left-0 w-full h-[2px] bgColor z-[-1] rotate-[355deg]"></div> */}
      {/* <div className="absolute top-[54%] -translate-y-[50%] left-0 w-full h-[2px] bgColor z-[-1] rotate-[15deg]"></div> */}
      {/* <div className="absolute left-[20%] -translate-x-[50%] top-0 w-[2px] h-full bgColor z-[-1]"></div> */}
      {/* <button className="bgColor w-[150px] py-[13px] absolute text-white text-center font-[600] block boxShd top-[54%] -translate-y-[50%] left-[66%] rotate-12"># 대면 상담 YES</button>
      <button className="bgColor w-[150px] py-[13px] absolute text-white text-center font-[600] block boxShd top-[25%] -translate-y-[50%] left-[16%] rotate-[348deg]"># 연중무휴 YES</button> */}
    </section>
  );
};



export default MainMenu;
