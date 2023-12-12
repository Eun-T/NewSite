import Image from "next/image";
import React from "react";
import diaarrow from "../public/images/diaarrow.png";
import { GoArrowUpRight } from "react-icons/go";

type Props = {};

const Contact = (props: Props) => {
  return (
    <section className="section bg-[url('/images/aurora.jpg')] bg-no-repeat bg-center bg-cover m:bg-fixed">
      <div className="container flex m:items-center m:justify-between py-[75px] m:py-[100px] m:flex-row flex-col gap-[20px] m:gap-0">
        <div className="text-white">
          <h3 className="uppercase text-[52px] m:text-[60px]">why?</h3>
          <p className="text-[20px] m:text-[24px]">
            국내에는 마케팅 업체가 수백개나 있습니다.
            <br />
            여러 사이트를 둘러보시고 마음에 드신 곳으로 방문하세요.
          </p>
        </div>
        <a
          href="/inquiry"
          className="flex justify-center items-center w-[125px] h-[45px] m:w-[250px] m:h-[65px] leading-[50px] text-center rounded-[50px] text-white m:text-[20px]  border-[#fff] border-[2px] hover:border-[#1bbc1b] hover:bg-[#1bbc1b] hover:text-black transition duration-300"
        >
          문의하기&nbsp;
          <GoArrowUpRight />
        </a>
      </div>
    </section>
  );
};

export default Contact;
