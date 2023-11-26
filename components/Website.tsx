import React from "react";

type WebsiteProps = {};

const Website = (props: WebsiteProps) => {
  return (
    <section className="relative w-full px-[4%] py-[50px]">
      <div className="max-w-[1240px] mx-auto w-full relative">
        <h2 className="text-[40px] font-[600] mb-[15px]">
          <span className="text-[#ffa900]">홈페이지</span> 제작
        </h2>
        <p className="text-[18px] text-gray-400 font-[600] mb-[20px]">
          위치 및 매장 홍보에 효과적인 네이버 지도 플레이스 마케팅입니다.
          <br />
          어뷰징이나 편법 없이 네이버 플레이스를 최적화 시켜 노출과 전환이 잘
          되게 만듭니다.
        </p>
        <div className="w-full flex flex-row gap-[40px] justify-between flex-wrap relative">
          <img src="/images/food.png" alt="f" className="w-[47.5%] aspect-square"/>
          <img src="/images/food.png" alt="f" className="w-[47.5%] aspect-square"/>
          <img src="/images/food.png" alt="f" className="w-[47.5%] aspect-square"/>
          <img src="/images/food.png" alt="f" className="w-[47.5%] aspect-square"/>
        </div>
      </div>
    </section>
  );
};

export default Website;
