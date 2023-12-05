import Image from "next/image";
import React from "react";
import logowhite1 from '../../public/images/logowhite1.svg'

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      <div className="w-full relative bg-[#000] text-[#999da9]">
        <div className="w-[92%] justify-between flex max-w-[1140px] mx-auto py-[50px]">
          <ul className="flex flex-col gap-[8px] text-[12px]">
            <li>회사명 : 바이럴토스</li>
            <li>대표 : 김은태</li>
            <li>전화번호: 010-5578-7956</li>
            <li>이메일주소 : viraltoss@naver.com</li>
            <li>카톡아이디 : 바이럴토스</li>
          </ul>
          {/* <Image src={logowhite1} alt="바이럴토스_로고" width={120} height={120}/> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;