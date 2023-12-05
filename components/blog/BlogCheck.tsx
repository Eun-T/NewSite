import React from "react";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

type Props = {};

const BlogCheck = (props: Props) => {
  return (
    <section className="section bg-[#f1fff1] section-paragraph">
      <div className="container">
        <div className="relative w-fit mb-[20px] overflow-hidden">
          <h4 className="text-[28px] textColor flex items-center">
            <span className="inline-block mr-[2px]">
              <IoCheckmarkDoneOutline size={30} />
            </span>
            Check Point
          </h4>
        </div>

        <h2 className="mb-[40px] leading-[1.2] text-[40px]">
          <span>정직한 방법, 만족스러운 결과물</span>
          <strong className="block">블로그 3대 철칙</strong>
        </h2>

        <div className="flex">
          <ul className="mt-[30px] w-full flex items-center justify-between">
            <div className="w-[300px]">
              <div className=" flex gap-[20px] items-center pb-[25px] border-b-[1px] border-solid border-gray-500 mb-[30px]">
                <div className="w-[50px] h-[50px] bgColor rounded-[50%] flex justify-center items-center text-white text-[24px]">
                  1
                </div>
                <h4 className="text-[18px] font-[400]">
                  실적으로만 이야기 합니다.
                </h4>
              </div>
              <p className="text-[15px]">
                키워드, 상위노출 따위로 성과를 말하지 않습니다. <br/>마케팅의 결과는 실적입니다.
              </p>
            </div>
            
            <div className="w-[300px]">
              <div className=" flex gap-[20px] items-center pb-[25px] border-b-[1px] border-solid border-gray-500 mb-[30px]">
                <div className="w-[50px] h-[50px] bgColor rounded-[50%] flex justify-center items-center text-white">
                  2
                </div>
                <h4 className="text-[18px] font-[400]">
                  해당 전문가가 작업합니다.
                </h4>
              </div>
              <p>
                크몽,아이보스에서 1,2만원에 원고를 사오지 <br/>않습니다. 직무 전문가가 직접 작성합니다.
              </p>
            </div>

            <div className="w-[300px]">
              <div className=" flex gap-[20px] items-center pb-[25px] border-b-[1px] border-solid border-gray-500 mb-[30px]">
                <div className="w-[50px] h-[50px] bgColor rounded-[50%] flex justify-center items-center text-white">
                  3
                </div>
                <h4 className="text-[18px] font-[400]">
                  SNS광고와 연계합니다.
                </h4>
              </div>
              <p>
                단순히 블로그만으로는 성공하기 힘듭니다. <br/>SNS플랫폼과 함께 광고를 진행합니다.
              </p>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BlogCheck;
