import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import BlogProcess from "./blog/BlogProcess";
import BlogSlider from "./blog/BlogSlider";

type SnsProps = {};

const Blog = (props: SnsProps) => {
  return (
    <section className="w-full px-[4%] pt-[50px] over">
      <div className="max-w-[1240px] mx-auto w-full mb-[30px]">
        <h2 className="text-[40px] font-[600] mb-[15px]">
          <span className="text-green-500">네이버</span> 블로그 마케팅
        </h2>
        <p className="text-[18px] text-gray-400 font-[600]">
          위치 및 매장 홍보에 효과적인 네이버 지도 플레이스 마케팅입니다.
          <br />
          어뷰징이나 편법 없이 네이버 플레이스를 최적화 시켜 노출과 전환이 잘
          되게 만듭니다.
        </p>
      </div>
      {/* <BlogSlider />
      <BlogProcess /> */}
    </section>
  );
};

export default Blog;
