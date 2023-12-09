import React from "react";
import { GrCheckmark } from "react-icons/gr";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

type Props = {};

const PowerExplain = (props: Props) => {
  const arr1 = [
    "불법적인 트래픽 작업",
    "영수증 마케팅",
    "지도 URL이 들어간 블로그 배포",
  ];

  const arr2 = [
    "1. 전문가와 상담",
    "2. 캠페인 설정",
    "3. 그룹 / 키워드 설정",
    "4. 광고 예산 확보하기",
    "5. 확장소재 / 입찰가 설정",
    "6. 광고노출진행",
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
          <span>정직한 방법, 만족스러운 결과물</span>
          <strong className="block">파워링크 진행과정</strong>
        </h2>

        <div className="flex">
          <ul className="mt-[30px] w-full flex m:flex-row flex-col flex-wrap justify-between">
            {arr2.map((arr, index) => (
              <li
                className="w-full m:w-[30%] h-[84px] l:h-[78px] leading-[78px] bg-white rounded-[12px] text-center mb-[20px] border-[1px] border-solid border-[#1bbc1b] boxShd text-[16px] x:text-[18px] l:text-[20px]"
                key={index}
              >
                {arr}
              </li>
            ))}
          </ul>
        </div>
{/* ※  */}
        <h2 className="relative text-[14px] x:text-[16px] l:text-[18px] text-start font-[500] mt-[50px] opacity-70 pl-[18px] after:content-['※'] after:absolute after:top-0 after:left-0">
          단순한 키워드 선택과 입찰가 설정은 효과적이지 않습니다.{" "}
          <br className="hidden l:block"/>
          효율적인 키워드와 가성비가 높은
          키워드를 신중하게 분류하고, 그 중에서 매출 전환율이 높은 순서로
          조정해야 합니다.{" "}
          <br className="hidden l:block"/>
          이를 위해서는 세밀한 작업과
          반복적인 수정이 필요하며, 바이럴토스만의 방식은 최적의 효율을
          추구합니다
        </h2>
      </div>
    </section>
  );
};

export default PowerExplain;
