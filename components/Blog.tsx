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
          전문직 브랜드 <span className="text-green-500">블로그</span>
        </h2>
        <p className="section-text text-[21px]">
          의사, 변호사, 세무사 등 전문직종을 위한 브랜드 블로그입니다.
          <br />
          브랜드 블로그를 활용해서 고객이 원하는 키 포인트를 잡아줍니다.
          고객이 원하는 정보, 필요한 내용을 중점적으로 적어서 
          뿐만 아니라 SNS광고를 통해 
        </p>
        <div className="flex justify-center">
          <div className="w-full mx-auto">
            <BlogIntoduce />
{/*             <BlogCounting /> */}
          </div>
        </div>
      </div>
      {/* <BlogSlider />
      <BlogProcess /> */}
    </section>
  );
};

export default Blog;
