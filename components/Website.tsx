import Image from "next/image";
import React from "react";
import imac from "../public/images/imac.png";

type WebsiteProps = {};

const Website = (props: WebsiteProps) => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">
          <span className="text-[#ffa900]">홈페이지</span> 제작
        </h2>
        <p className="section-text text-[21px]">
        우리의 수년 간의 풍부한 경험과 탄탄한 기획 그리고 감각적인 디자인을 바탕으로<br/>만들어 낸 고객님의 소중한 홈페이지는 최신 기술 스택을 활용하여 제작되었습니다.<br/> 기존의 웹사이트보다 더 현대적이며 반응 속도가 뛰어난 사이트를 선보이고 있습니다.
        {/* 우리만의 특별한 전문성과 노하우를 담아 고객님의 비즈니스에 최상의 디지털 솔루션을 제공합니다. */}
          {/* 24년 이상의 풍부한 경험과 탄탄한 기획, 감각적인 디자인으로 만들어 낸,
          이프론트의 땀방울로 일궈낸 고객사의 소중한 자산, 주요 제작실적을 한눈에 보여드립니다. */}
        </p>
        <div className="">
          <ul>
            <li className="relative w-[630px] cursor-pointer ">
              <div className="relative w-full aspect-[523/565]">
                <Image src={imac} alt="sdf" fill objectFit="cover"/>
              </div>
              <div className="flex justify-between mt-[20px] px-[30px]">
                <h5 className="relative uppercase font-[200] text-[14px] tracking-[.25em] before:border-b-[1px] before:border-black before:content-[''] before:bottom-[-5px] before:left-[50%] before:-translate-x-[50%] before:absolute before:w-[140%]">Law Days</h5>
                <p className="font-[300] tracking-[.1em] text-[14px]">법률사무소 사이트</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Website;
