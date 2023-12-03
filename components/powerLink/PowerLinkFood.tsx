import React from "react";
import Image from "next/image";
import food2 from "../../public/images/food2.png";
import power from "../../public/images/power.png";
import food1 from "../../public/images/food1.png";

type Props = {};

const PowerLinkFood = (props: Props) => {
  return (
    <div className="relative flex flex-col m:flex-row gap-[30px]  section-paragraph">
      <div className="relative w-[80%] m:w-1/2 max-w-[800px] aspect-[1079/1421] mb-[10px] s:mb-[15px] m:mb-0 m:order-2">
        <Image src={food2} alt="smartplaceIpad" objectFit="cover" fill />
      </div>

      <div className="text-[16px] s:text-[18px] l:text-[36px] h-auto m:w-1/2 font-[300] m:order-3">
        <div className="mb-[40px]">
          <div className="relative w-[300px] aspect-[386/72] mb-[10px]">
            <Image src={power} alt="smartplaceIpad" objectFit="cover" fill />
          </div>
          <p
            className="text-[20px]"
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-delay="60"
            data-aos-once="true"
            data-aos-easing="ease-in-out"
          >
            네이버는 키워드에 따라 광고를 보여줍니다.
            <br />
            예를 들어, <span className="font-[600]">'모란역맛집'</span>의
            경우에는 <span className="font-[600]">'모란역맛집'</span>이라는
            <br />
            키워드를 기입해 두셔야합니다.
          </p>
        </div>
        <div>
          <div className="relative w-[450px] aspect-[831/713] mb-[10px]">
            <Image src={food1} alt="smartplaceIpad" objectFit="cover" fill />
          </div>
          <p
            className="text-[20px]"
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-delay="60"
            data-aos-once="true"
            data-aos-easing="ease-in-out"
          >
            {" "}
            위 사진과 같이, <span className="font-[600]">키워드</span>를
            세팅하신 대표님들만
            <br /> 해당 광고들이 이용자들에게 제공됩니다.
          </p>
        </div>
        {/* <span className="block">고객의 시선을</span>
        사로잡는 <span className="font-[700]">고급 설정</span> */}
      </div>
    </div>
  );
};

export default PowerLinkFood;
