import React from "react";
import { GrCheckmark } from "react-icons/gr";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

type Props = {};

const SmartExplain = (props: Props) => {
  const arr1 = [
    "불법적인 트래픽 작업",
    "영수증 마케팅",
    "지도 URL이 들어간 블로그 배포",
  ];

  const arr2 = [
    "플레이스 최적화을 위한 초기 세팅",
    "외부 프로그램 최소화",
    "전문 컨설턴트가 제공하는 팁과 노하우",
  ];

  return (
    <section className="section bg-[#f1fff1] section-paragraph">
      <div className="container">
        <div className="relative w-fit mb-[20px] overflow-hidden">
          <h4 className="text-[22px] s:text-[24px] m:text-[28px] textColor flex items-center">
            <span className="inline-block mr-[2px]">
              <IoCheckmarkDoneOutline size={30} />
            </span>
            Check Point
          </h4>
        </div>

        <h2
          className="mb-[40px] leading-[1.2] text-[28px] x:text-[32px] m:text-[36px] l:text-[40px]"
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-delay="60"
          data-aos-once="true"
          data-aos-easing="ease-in-out"
        >
          <span>정직한 방법, <br className="block x:hidden"/>만족스러운 결과물</span>
          <strong className="block">플레이스 최적화 세팅</strong>
        </h2>

        <div className="flex flex-col m:flex-row items-center justify-center gap-[30px] m:gap-0">
          <div className="w-full m:w-[40%] l:w-[38%] text-center">
            <h3 className="text-[#b8b1ca] text-[22px] m:text-[24px] l:text-[28px]">타사</h3>
            <ul className="mt-[10px] m:mt-[30px]">
              {arr1.map((arr, index) => (
                <li
                  className="w-full h-[78px] leading-[78px] bg-[#d4ffd4] rounded-[12px] text-center mb-[10px] border-[1px] border-solid border-[#b7ffb7] text-[#b8b1ca] text-[16px] x:text-[18px] l:text-[20px]"
                  key={index}
                >
                  {arr}
                </li>
              ))}
            </ul>
          </div>
          <h2 className="w-[8%] text-center text-[30px] font-[700]">VS</h2>
          <div className="w-full m:w-[56%] l:w-[58%] text-center">
            <h3 className="text-[22px] m:text-[24px] l:text-[28px] font-[700] textColor">바이럴토스</h3>
            <ul className="mt-[10px] m:mt-[30px]">
              {arr2.map((arr, index) => (
                <li
                  className="w-full h-[78px] leading-[78px] bg-white rounded-[12px] text-center mb-[10px] border-[1px] border-solid border-[#1bbc1b] boxShd text-[16px] x:text-[18px] l:text-[20px]"
                  key={index}
                >
                  {arr}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="text-red-500 text-[14px] m:text-[20px] text-start font-[500] mt-[20px] opacity-60">
          ※ 불법적인 프로그램과 반복적인 악성 블로그 배포는 지도 노출에 제외될
          수 있습니다.
        </h2>
      </div>
    </section>
  );
};

export default SmartExplain;
