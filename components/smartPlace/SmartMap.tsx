import React from "react";
import Image from "next/image";
import smartplaceIpad from "../../public/images/smartplaceIpad.png";
import paper from "../../public/images/paper.png";

type Props = {};

const SmartMap = (props: Props) => {
  return (
    <div className="relative flex flex-col m:flex-row justify-between gap-[50px] items-center section-paragraph">
      <div
        className="relative m:right-[15px] w-[80%] m:w-[66.7%] max-w-[750px] aspect-[1414/1072] mb-[10px] s:mb-[15px] m:mb-0 m:order-2"
        data-aos="fade-right"
        data-aos-duration="600"
        data-aos-delay="60"
        data-aos-once="true"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="center-center"
        data-aos-offset="-330"
        // data-aos-offset="2000"
        // data-aos-anchor-placement="top-center"
      >
        <Image
          src={smartplaceIpad}
          alt="smartplaceIpad"
          objectFit="cover"
          fill
        />
      </div>
      {/* <div className="w-[33.3%] text-gray-400 font-[600] text-[21px] break-keep leading-relaxed"> */}
      <div
        className="text-[22px] x:text-[24px] m:text-[29px] l:text-[36px] h-full m:w-[33.3%] font-[300] m:order-3 text-center m:text-start"
        data-aos="fade-left"
        data-aos-duration="600"
        data-aos-delay="60"
        data-aos-once="true"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="center-center"
        data-aos-offset="-330"
      >
        <span className="block mb-[20px] text-[24px] textColor font-[500]">
          플레이스 = 가게의 얼굴
        </span>
        <span className="block">고객의 시선을</span>
        사로잡는 <span className="font-[700]">고급 설정</span>
      </div>
    </div>
  );
};

export default SmartMap;

{
  /* <p>
          요식업,병원,로펌 등과 같은 많은 업종에서 중요한 것은 지도 검색입니다.

          지도를 봐야 정확한 위치를 알 수 있기 때문이죠.

          이러한 서비스를 제공해주는 플랫폼은 다름아닌 네이버인데요.

          네이버 스마트플레이스에서는 지도 검색에 업체를 등록할 수 있는 무료
          서비스를 제공합니다.

          플레이스는 가게의 '얼굴'입니다. 얼굴에 여드름 또는 뾰룩지 같은 것들이 생기면 지울려고 관리를 하듯이 플레이스도 꾸며야합니다. 그러기 위해서는 "꼼수"보다는 정상적인 방법을 사용하는 업체를 찾아야합니다. 
        </p> */
}
{
  /* 바이럴토스의 철학  */
}

{
  /* <span className="block">효과적인 관리와 꾸밈은</span>
          쉽게 눈길을 끌 수 있습니다. */
}
