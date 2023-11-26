import React from "react";
import PowerLink1 from "./powerLink/PowerLink1";
import PowerLink2 from "./powerLink/PowerLink2";

type Props = {};

const PowerLink = (props: Props) => {
  return (
    <section className="relative w-full px-[4%] py-[50px]">
      <div className="max-w-[1240px] mx-auto w-full relative">
        <h2 className="text-[40px] font-[600] mb-[15px]">
          <span className="text-green-500">네이버</span> 파워링크
        </h2>
        <p className="text-[18px] text-gray-400 font-[600] mb-[20px]">
          위치 및 매장 홍보에 효과적인 네이버 지도 플레이스 마케팅입니다.
          <br />
          어뷰징이나 편법 없이 네이버 플레이스를 최적화 시켜 노출과 전환이 잘
          되게 만듭니다.
        </p>
        <div className="flex justify-center">
          <div className="w-full mx-auto">
            <PowerLink1 />
            <PowerLink2 />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerLink;
