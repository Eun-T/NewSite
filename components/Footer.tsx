import Image from "next/image";
import React from "react";
import logo from "../public/images/logowhite.svg";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      <div className="w-full relative bg-[#000] text-[#999da9]">
        <div className="w-[92%] justify-between flex max-w-[1140px] mx-auto py-[50px]">
          <div className="flex gap-[60px]">
            <ul className="flex flex-col gap-[8px] text-[12px]">
              <li>회사명 : 바이럴토스</li>
              <li>대표 : 김은태</li>
              <li>전화번호: 010-5578-7956</li>
              <li>이메일주소 : viraltoss@naver.com</li>
              <li>카톡아이디 : 바이럴토스</li>
            </ul>

            <ul className="hidden flex-col gap-[8px] text-[12px] x:flex">
              <li>기업소개</li>
              <li>스마트플레이스</li>
              <li>파워링크</li>
              <li>브랜드 마케팅</li>
              <li>홈페이지 제작</li>
            </ul>
          </div>
          <Image src={logo} alt="바이럴토스_로고" width={80} height={80} className="opacity-50"/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
