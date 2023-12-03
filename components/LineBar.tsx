"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import linebar from "../public/images/linebar2.png";
type LineBarProps = {};

const LineBar = (props: LineBarProps) => {
  // useEffect(() => {

  // const y = window.scrollY
  // console.log(y)
  // animate-[lineBar_1s_ease-in-out] fill-mode-backwards scale-110
  // }, [])

  return (
    <section className="w-full flex justify-center">
      <div
        id="linebar"
        className="relative w-[14px] h-[147px]"
        data-aos="new-animation"
        data-aos-duration="800"
        data-aos-delay="60"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
      >
        <Image src={linebar} alt="linebar" objectFit="cover" fill />
      </div>
    </section>
  );
};

export default LineBar;
