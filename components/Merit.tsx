import Image from "next/image";
import React from "react";
import rocket from "../public/images/rocket13.png";

type Props = {};

const lists = [
  {
    id: "0",
    image: "https://cdn-icons-png.flaticon.com/512/7202/7202291.png",
    title: "신속한 주문처리",
    main: "입금 즉시 충전이 가능하여 빠른 이용이 가능합니다.",
  },
  {
    id: "1",
    image: "https://cdn-icons-png.flaticon.com/512/10896/10896607.png",
    title: "대면 상담",
    // main: "고객님의 편의를 위해 온라인뿐만 아니라 오프라인에서도 대면 상담이 가능합니다.",
    main: "온·오프라인 상담 중 원하는 서비스를 직접 선택하세요.",
    // main: "온·오프라인 상담 중 원하는 서비스를 직접 고르세요.",
  },
  {
    id: "2",
    image: "https://cdn-icons-png.flaticon.com/512/4185/4185475.png",
    title: "All-In-One",
    main: "다양한 업무를 처리하는만큼 여러곳에 외주를 맡길 필요가 없습니다.",
  },
  {
    id: "3",
    image: "https://cdn-icons-png.flaticon.com/512/9600/9600025.png",
    title: "연중무휴",
    main: "마케팅은 휴일이 없습니다. 언제든지 연락주세요.",
    // main: "365일 9~21시",
  },
];

const Merit = (props: Props) => {
  return (
    //mt-[75px] m:mt-[150px]
    <section id="merit" className="section py-0">
      <div className="container">
        <h2 className="section-title">SNS 마케팅, 왜 SNS키트일까요?</h2>
        {/* <h3 className="section-text">
          SNS키트는 높은 기술력을 통한 지속적 업데이트로 차별화 된 서비스를
          제공합니다. 고객님과 약속한 모든 부분에 책임감을 갖고 24시간 365일
          최선을 다해 정진하고 있습니다.
        </h3> */}
        <div className="flex flex-row flex-wrap m:flex-nowrap">
          {lists.map((list) => (
            <div className="w-[50%] mb-[20px]" key={list.id}>
              <div className="relative mx-auto w-[125px] h-[125px] mb-[20px]">
                {/* <Image
                  src={list.image}
                  alt="rocket"
                  fill
                  objectFit="cover"
                  quality={100}
                /> */}
                <img src={list.image} alt="sdf" />
              </div>
              <div className="font-[500] text-center w-[80%] min-w-[150px] mx-auto">
                <h4 className="l:text-[18px] font-[600]">{list.title}</h4>
                <p className="font-[400] text-[14px] l:text-[16px] break-normal">{list.main}</p>
              </div>
            </div>
          ))}
        </div>
        {/* <img src="https://cdn-icons-png.flaticon.com/512/10896/10896607.png" alt="asd" className="w-[100px] h-[100px]"/>
        <img src="https://cdn-icons-png.flaticon.com/512/4185/4185475.png" alt="asd" className="w-[100px] h-[100px]"/> */}
      </div>
    </section>
  );
};

export default Merit;