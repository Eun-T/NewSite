import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import BlogProcess from "./blog/BlogProcess";
import BlogSlider from "./blog/BlogSlider";
import BlogIntoduce from "./blog/BlogIntoduce";
import BlogCounting from "./blog/BlogCounting";

type SnsProps = {};

const Blog = (props: SnsProps) => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">
          <span className="text-green-500">네이버</span> 브랜드 블로그
        </h2>
        <p className="section-text text-[21px]">
          위치 및 매장 홍보에 효과적인 네이버 지도 플레이스 마케팅입니다.
          <br />
          어뷰징이나 편법 없이 네이버 플레이스를 최적화 시켜 노출과 전환이 잘
          되게 만듭니다.
        </p>
        <div className="flex justify-center">
          <div className="w-full mx-auto">
            <BlogIntoduce />
            <BlogCounting />
          </div>
        </div>
      </div>
      {/* <BlogSlider />
      <BlogProcess /> */}
    </section>
  );
};

export default Blog;
