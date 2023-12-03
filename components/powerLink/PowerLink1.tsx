"use client";

import React from "react";
import Image from "next/image";
import bigarrow from "../../public/images/bigarrow.png";
import powerlink1 from "../../public/images/powerlink1.png";
import powerlink2 from "../../public/images/powerlink2.png";
import powerlink3 from "../../public/images/powerlink3.png";
import HorizonSlide from "../HorizonSlide";

type Props = {};

const slides = [
  { url: "/images/p1.png", title: "beach", aspect: "" },
  { url: "/images/p2.png", title: "boat", aspect: "" },
  { url: "/images/p3.png", title: "boat", aspect: "" },
  { url: "/images/p4.png", title: "boat", aspect: "" },
  { url: "/images/p5.png", title: "boat", aspect: "" },
  // { url: "/images/pow1.png", title: "forest" },
  // { url: "/images/pow1.png", title: "city" },
  // { url: "/images/pow1.png", title: "italy" },
];

const PowerLink1 = (props: Props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="order-3">
        <HorizonSlide slides={slides} parentWidth={600} />
      </div>
      <div className="order-2">
        <p
          className="font-[300] text-[36px]"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="60"
          data-aos-once="true"
          data-aos-easing="ease-in-out"
        >
          <span className="block textColor text-[24px] font-[500]">
            걱정하지 마세요
          </span>
          세팅을 위한 5가지의 관문
          <br />
          모든 걸 설정해 드립니다.
        </p>
      </div>
    </div>
  );
};

// const PowerLink1 = (props: Props) => {
//   return (
//     <div>
//       <p className="block mb-[20px] text-[24px] textColor font-[500]">
//         파워링크 설정법
//       </p>
//       <p className="text-[18px] text-gray-400 font-[600] mb-[20px]">
//         위치 및 매장 홍보에 효과적인 네이버 지도 플레이스 마케팅입니다.
//         <br />
//         어뷰징이나 편법 없이 네이버 플레이스를 최적화 시켜 노출과 전환이 잘 되게
//         만듭니다.
//       </p>
//       <div>
//         <div className="flex flex-row items-center">
//           <div className="w-[400px] relative">
//             <Image
//               src={powerlink1}
//               alt="powerlink1"
//               objectFit="cover"
//               className="w-full h-auto"
//             />
//             <p>1. 캠페인 만들기</p>
//           </div>
//           <div className="w-[30px] relative opacity-75">
//             <Image
//               src={bigarrow}
//               alt="bigarrow"
//               objectFit="cover"
//               className="w-full h-auto"
//             />
//           </div>
//           <div className="w-[400px] relative">
//             <Image
//               src={powerlink2}
//               alt="powerlink2"
//               objectFit="cover"
//               className="w-full h-auto"
//             />
//             <p>2. 광고그룹 만들기</p>
//           </div>
//           <div className="w-[30px] relative opacity-75">
//             <Image
//               src={bigarrow}
//               alt="bigarrow"
//               objectFit="cover"
//               className="w-full h-auto"
//             />
//           </div>
//           <div className="w-[400px] relative">
//             <Image
//               src={powerlink3}
//               alt="powerlink3"
//               objectFit="cover"
//               className="w-full h-auto"
//             />
//             <p>3. 키워드 입력하기</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default PowerLink1;
