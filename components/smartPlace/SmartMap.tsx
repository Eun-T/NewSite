import React from "react";
import Image from "next/image";
import smartplaceIpad from "../../public/images/smartplaceIpad.png";
import paper from "../../public/images/paper.png";

type Props = {};

const SmartMap = (props: Props) => {
  return (
    <div className="relative flex flex-col m:flex-row justify-between gap-[20px] items-center mb-[50px]">
      <div className="relative w-[80%] m:w-[66.7%] max-w-[800px] aspect-[1414/1072] mb-[10px] s:mb-[15px] m:mb-0 m:order-2">
        <Image src={smartplaceIpad} alt="smartplaceIpad" objectFit="cover" fill />
      </div>
      {/* <div className="w-[33.3%] text-gray-400 font-[600] text-[21px] break-keep leading-relaxed"> */}
      <div className="text-[16px] s:text-[18px] l:text-[20px] h-auto m:w-[33.3%] font-[500] m:order-1">
        <p>
          요식업,병원,로펌 등과 같은 많은 업종에서 중요한 것은 지도 검색입니다.

          지도를 봐야 정확한 위치를 알 수 있기 때문이죠.

          이러한 서비스를 제공해주는 플랫폼은 다름아닌 네이버인데요.

          네이버 스마트플레이스에서는 지도 검색에 업체를 등록할 수 있는 무료
          서비스를 제공합니다.
        </p>
      </div>
    </div>
  );
};

export default SmartMap;
