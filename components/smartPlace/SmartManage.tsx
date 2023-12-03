import React from "react";
import Image from "next/image";
import iphone9 from "../../public/images/iphone9.png";
import iphone10 from "../../public/images/iphone10.png";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { ImArrowRight } from "react-icons/im";

type Props = {};

const SmartManage = (props: Props) => {
  return (
    <div className="flex flex-col m:flex-row justify-evenly items-center mt-[75px]">
      <div
        className="flex flex-col items-center mb-[30px] m:mb-0"
        data-aos="fade-right"
        data-aos-duration="600"
        data-aos-delay="60"
        data-aos-once="true"
        data-aos-easing="ease-in-out"
      >
        <span className="text-green-500 mb-[10px] block text-[16px] s:text-[18px] l:text-[20px] font-[600]">
          관리하지 않은 플레이스
        </span>
        <h3 className="max-w-[400px] font-[600] text-[18px] s:text-[21px] break-keep leading-relaxed text-center mb-[15px] s:mb-[20px]">
          위치와 전화번호 외에 정보가 없어 어떤 업체인지 알기가 어려워요.
          권장/필수사항 모두 꼼꼼히 기입해야 해요.
        </h3>
        <div className="relative w-[250px] s:w-[280px] max-w-[800px] aspect-[300/613] rounded-[50px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
          <Image src={iphone9} alt="ipad" objectFit="cover" fill />
        </div>
      </div>

      <div
        className="w-[50px] rotate-[90deg] m:rotate-0 mb-[30px]"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="60"
        data-aos-once="true"
        data-aos-easing="ease-in-out"
      >
        <MdOutlineKeyboardDoubleArrowRight className="w-full h-full" />
      </div>

      <div
        className="flex flex-col items-center"
        data-aos="fade-left"
        data-aos-duration="600"
        data-aos-delay="60"
        data-aos-once="true"
        data-aos-easing="ease-in-out"
      >
        <span className="text-green-500 mb-[10px] block text-[16px] s:text-[18px] l:text-[20px] font-[600]">
          관리하면 이렇게 변해요
        </span>
        <h3 className="max-w-[400px] font-[600] text-[18px] s:text-[21px] break-keep leading-relaxed text-center mb-[15px] s:mb-[20px]">
          이벤트, 예약, 이용시간 그리고 가격표 사진 등을 통해 어떤 곳인지
          알려주고 방문하고 싶게 만들어요.
        </h3>
        <div className="relative w-[250px] s:w-[280px] max-w-[800px] aspect-[300/613] rounded-[50px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
          <Image src={iphone10} alt="ipad" objectFit="cover" fill />
        </div>
      </div>
    </div>
  );
};

export default SmartManage;
