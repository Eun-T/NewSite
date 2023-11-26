import React from "react";
import Image from "next/image";
import paper from "../../public/images/paper.png";
import strawberry from "../../public/images/strawberry.png";
import consulting from "../../public/images/consulting.png";
import comment from "../../public/images/comment.png";

type Props = {};

const others = [
  {
    id: "0",
    image: paper,
    alt: "paper",
    title: "업체 등록을 위한 모든 서류를 알고 있어요.",
  },
  {
    id: "1",
    image: strawberry,
    alt: "strawberry",
    title: "업체 등록을 위한 모든 서류를 알고 있어요.",
  },
  {
    id: "2",
    image: consulting,
    alt: "consulting",
    title: "업체 등록을 위한 모든 서류를 알고 있어요.",
  },
  {
    id: "3",
    image: comment,
    alt: "comment",
    title: "기타 등등 바이럴토스가 제공하는 다양한 서비스를",
  },
];

const SmartOtherService = (props: Props) => {
  return (
    <div className="relative w-full bg-[#0b2926] py-[80px] flex justify-center">
      <div className="max-w-[1240px]">
        <h3 className="text-white text-[32px] text-center font-[600] mb-[50px]">
          그 외의
          <br />
          <span>다양한 서비스</span>
        </h3>
        <div className="flex flex-row flex-wrap gap-[20px] justify-center">
          {others.map((other) => (
            <div
              id={other.id}
              className="flex flex-row  w-[48%] h-[200px] bg-[#f4f5f7] rounded-[8px] p-[20px]"
            >
              <div className="relative w-[50%] h-full">
                <Image
                  src={other.image}
                  alt={other.alt}
                  objectFit="contain"
                  fill
                />
              </div>
              <div className="relative w-[50%] h-full flex items-center justify-center">
                <p className="text-center">{other.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmartOtherService;
