import React from "react";

type Props = {};

const BlogCounting = (props: Props) => {
  return (
    <div>
      <div className="mb-[70px]">
        <h3 className="text-center mb-[10px] text-[40px] font-[700]">
          한 번 이용하면 팬이 됩니다.
        </h3>
        <p className="text-center text-[20px]">
          아임웹에서 당신의 생각을 표현해보세요.
        </p>
      </div>
      <div>
        <ul className="flex gap-[30px] items-center text-center">
          <li className="flex flex-col gap-[10px] w-[33.3%]">
            <h3 className="text-[36px] text-center textColor">24시간</h3>
            <h4 className="text-[22px] font-[500]">최대 작업 기간</h4>
            <p className="text-[14px] text-[#3b4589]">
              전문가가 원고를 작성하는 데는
              <br />
              최대 24시간이 소요됩니다.
            </p>
          </li>

          <li className="flex flex-col gap-[10px] w-[33.3%]">
            <h3 className="text-[36px] text-center textColor">1500자</h3>
            <h4 className="text-[22px] font-[500]">최소 글자 수</h4>
            <p className="text-[14px]">
              블로그가 너무 간결하면 내용
              <br />
              전달이 어려울 수 있습니다
            </p>
          </li>

          <li className="flex flex-col gap-[10px] w-[33.3%]">
            <h3 className="text-[36px] text-center textColor">12장</h3>
            <h4 className="text-[22px] font-[500]">유료 이미지</h4>
            <p className="text-[14px]">
              저작권이 있는 유료 이미지를 활용하여
              <br />
              원고를 더욱 풍성하게 표현합니다.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogCounting;
