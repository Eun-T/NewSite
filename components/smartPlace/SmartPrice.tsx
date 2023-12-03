import React from "react";
import { IoPricetags } from "react-icons/io5";
import never1 from "../../public/images/never1.png";
import consultent1 from "../../public/images/consultent1.png";
import etc1 from "../../public/images/etc1.png";
import Image from "next/image";

type Props = {};

const SmartPrice = (props: Props) => {
  const lists = [
    {
      id: "0",
      title: "스마트 플레이스",
      price: "+99만원",
      delay: "50",
      img: never1,
      alt: "naver",
    },
    {
      id: "1",
      title: "전문 컨설팅",
      price: "+0만원",
      delay: "150",
      img: consultent1,
      alt: "consultent",
    },
    {
      id: "2",
      title: "기타 등등",
      price: "+0만원",
      delay: "250",
      img: etc1,
      alt: "etc",
    },
  ];

  const arr2 = [
    "2~5년 긴 의무약정기간",
    "어려운 해지 절차",
    "해지시 위약금 발생",
  ];

  return (
    <section className="section section-paragraph bgColor text-black section-paragraph mb-[150px]">
      <div className="container">
        <div className="relative mb-[20px] overflow-hidden text-center">
          <h4 className="text-[28px] text-black flex items-center justify-center ">
            <span className="inline-block mr-[2px]">
              <IoPricetags />
            </span>
            Quotation
          </h4>
        </div>

        <h2 className="mb-[70px] leading-[1.2] text-[40px] text-white text-center">
          <>합리적인 가격</>과 <>무료 혜택</>들을 <strong>한번에!</strong>
        </h2>

        <div className="flex items-center justify-center h-[584px] gap-[10px]">
          <div className="w-[40%] h-full flex justify-end flex-col gap-[10px]">
            {lists.map((list) => (
              <div
              id={list.id}
                className="w-full h-[160px] flex bg-white rounded-[20px] items-center justify-between px-[37px] gap-[20px]"
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-delay="60"
                data-aos-once="true"
                data-aos-easing="ease-in-out"
              >
                {/* <img
                  src="/images/never1.png"
                  alt="sdf"
                  className="w-[100px] h-[100px]"
                /> */}
                <Image src={list.img} alt={list.alt} width={100} height={100}/>
                <div>
                  <p className="text-[30px] text-end">{list.title}</p>
                  <p className="text-[40px] font-[700] text-end">{list.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="w-[35%]"
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-delay="60"
            data-aos-once="true"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top-center"
            data-aos-offset="200"
          >
            <div className="py-[40px] px-[30px] bg-white rounded-[20px] ">
              <div>
                <h5 className="relative text-[22px] textColor font-[800]">
                  스마트 플레이스
                </h5>
                <p className="mt-[12px] mb-[30px] text-[16px] font-[400]">
                  전문가와 함께라면
                  <br />
                  쉽고 간편하게 플레이스 만들기
                </p>
              </div>

              <ul className="w-full mb-[24px] ">
                <li className="flex justify-between text-[20px] font-[700] items-center">
                  <span className="">플레이스 작업비</span>
                  <span className="textColor">
                    <strong className="text-[30px]">99</strong>
                    <small className="text-black text-[20px]">만원</small>
                  </span>
                </li>
                <li className="flex justify-between text-[20px] font-[700] items-center">
                  <span className="">전문 컨설팅</span>
                  <span className="textColor">
                    <strong className="text-[30px]">+0</strong>
                    <small className="text-black text-[20px]">만원</small>
                  </span>
                </li>
                <li className="flex justify-between text-[20px] font-[700] items-center">
                  <span className="">기타 등등</span>
                  <span className="textColor">
                    <strong className="text-[30px]">+0</strong>
                    <small className="text-black text-[20px]">만원</small>
                  </span>
                </li>

                <div className="w-full h-[1px] bg-[#ddd]"></div>
                <li className="flex justify-between text-[20px] font-[700] items-center py-[10px] ">
                  <span className="">총</span>
                  <span className="textColor">
                    <strong className="text-[30px]">99</strong>
                    <small className="text-black text-[20px]">만원</small>
                  </span>
                </li>
              </ul>

              <ul className="list-none text-[#181c26cc]">
                <li className="mb-[8px] ">
                  <span>※ 작업기간: </span>
                  <span>계약서 작성 후 최대 1주일</span>
                </li>
                <li className="mb-[0px] ">
                  <span>※ VAT 포함</span>
                </li>
              </ul>

              <a
                href="/"
                className="block w-[150px] h-[50px] leading-[50px] text-center rounded-[50px] mt-[50px] mx-auto border-[#1bbc1b] border-[1px]"
              >
                상담받기
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartPrice;
