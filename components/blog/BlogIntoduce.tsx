import React from "react";
import Image from "next/image";
import notebook from "../../public/images/notebook.png";

type Props = {};

const BlogIntoduce = (props: Props) => {
  return (
    <div className="relative flex flex-col m:flex-row justify-between gap-[20px] pl-[16px] items-center section-paragraph w-full">
      {/* <div className="relative m:right-[15px] w-[80%] m:w-[600px] max-w-[750px] aspect-[1200/1008] mb-[10px] s:mb-[15px] m:mb-0 m:order-2 bg-red-40"> */}
      <div className="relative m:right-[15px] w-[80%] m:w-[66.7%] max-w-[580px] aspect-[1200/1008] mb-[10px] s:mb-[15px] m:mb-0 m:order-2">
        <Image src={notebook} alt="notebook" className="w-full h-full object-cover" />
      </div>
      {/* <div className="text-[16px] s:text-[18px] l:text-[36px] h-auto m:w-[33.3%] font-[300] m:order-3"> */}
      <div
        className="text-[22px] x:text-[24px] m:text-[29px] l:text-[36px] h-full m:w-[33.3%] font-[300] m:order-3 text-center m:text-start"
        data-aos="fade-left"
        data-aos-duration="600"
        data-aos-delay="60"
        data-aos-once="true"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="center-center"
        data-aos-offset="-330"
      >
        <span className="block mb-[20px] text-[24px] textColor font-[500]">
          의료 · 법조인을 위한
        </span>
        <span className="block">브랜드 블로그</span>
        <span className="font-[700]">간편한 대행 서비스</span>
      </div>
    </div>
  );
};

export default BlogIntoduce;
