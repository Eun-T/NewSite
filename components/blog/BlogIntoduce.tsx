import React from "react";
import Image from "next/image";
import notebook from "../../public/images/notebook.png";

type Props = {};

const BlogIntoduce = (props: Props) => {
  return (
    <div className="relative flex flex-col m:flex-row justify-between gap-[20px] items-center section-paragraph">
      <div className="relative m:right-[15px] w-[80%] m:w-[600px] max-w-[800px] aspect-[1200/1008] mb-[10px] s:mb-[15px] m:mb-0 m:order-2 bg-red-40">
        <Image
          src={notebook}
          alt="notebook"
          objectFit="cover"
          fill
        />
      </div>
      <div className="text-[16px] s:text-[18px] l:text-[36px] h-auto m:w-[33.3%] font-[300] m:order-3">
        <span className="block mb-[20px] text-[24px] textColor font-[500]">
          의료 · 법조인을 위한
        </span>
        <span className="block">나만의 브랜드 블로그</span>
        <span className="font-[700]">간편한 대행 서비스</span>
      </div>
    </div>
  );
};

export default BlogIntoduce;
