import React from "react";
import PowerLink1 from "./powerLink/PowerLink1";
import PowerLink2 from "./powerLink/PowerLink2";
import PowerLinkFood from "./powerLink/PowerLinkFood";

type Props = {};

const PowerLink = (props: Props) => {
  return (
    <section className="section" id="powerlink">
      <div className="container">
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="60"
          data-aos-once="true"
          data-aos-easing="ease-in-out"
        >
          <h2 className="section-title">
            <span className="text-green-500 block s:inline">네이버</span>{" "}
            파워링크
          </h2>
          <p className="section-text">
            네이버 검색창에 특정 키워드를 입력했을때 검색결과에 제목과 설명{" "}
            <br className="block l:hidden"/>그리고 사이트 URL이 나열되는것을 보실 수 있습니다.
            <br />
            이것이 바로 네이버 검색광고 대표 상품인{" "}
            <span className="font-[700] textColor">파워링크</span>입니다.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-full mx-auto">
            <PowerLinkFood />
            <PowerLink1 />
            {/* <PowerLink2 /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerLink;
