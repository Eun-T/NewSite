import React from "react";
import Image from "next/image";
import reservation from "../../public/images/reservation.png";
import talk from "../../public/images/talk.png";
import blogging from "../../public/images/blogging.png";
import copywriting from "../../public/images/copywriting.png";
import results from "../../public/images/results.png";

type Props = {};

const circles = [
  {
    main: "전화/온라인 예약",
    title: "01",
    progress: "before:rotate-[80deg]",
    back: "before:bg-[#ebebebe6]",
    image: reservation,
  },
  {
    main: "마케팅 상담",
    title: "02",
    progress: "before:rotate-[140deg]",
    back: "before:bg-[#ebebebe6]",
    image: talk,
  },
  {
    main: "블로거 모집 / 선정",
    title: "03",
    progress: "before:rotate-[60deg]",
    back: "before:bg-[#22c55e]",
    image: blogging,
  },
  {
    main: "콘텐츠 생산",
    title: "04",
    progress: "before:rotate-[120deg]",
    back: "before:bg-[#22c55e]",
    image: copywriting,
  },
  {
    main: "결과 보고 및 분석",
    title: "05",
    progress: "before:rotate-[180deg]",
    back: "before:bg-[#22c55e]",
    image: results,
  },
];

const BlogProcess = (props: Props) => {
  return (
      <div className="relative max-w-[1240px] flex justify-center items-center flex-wrap gap-[30px] py-[80px]">
        {circles.map((circle) => (
          <div className="flex flex-col items-center">
            <div
              id="progress"
              className={
                circle.back +
                " relative w-[220px] h-[220px] rounded-[50%] mb-[15px]  before:content-[''] before:block before:h-full before:ml-[50%] before:origin-left  after:content-[''] after:absolute after:inset-[7px] after:rounded-[50%] after:bg-[#fff] " +
                circle.progress
              }
            >
              <div className="absolute top-[55%] gap-2 left-[50%] -translate-x-[50%] -translate-y-[50%] z-10 text-black flex flex-col items-center">
                <Image
                  src={circle.image}
                  alt={circle.title}
                  objectFit="cover"
                  width={70}
                  height={70}
                />
                <h3 className="text-[40px] font-[600]">{circle.title}</h3>
              </div>
            </div>
            <div>
              <h3 className="text-[#22c55e] text-[24px] font-[600]">
                {circle.main}
              </h3>
            </div>
          </div>
        ))}
      </div>
  );
};

export default BlogProcess;
