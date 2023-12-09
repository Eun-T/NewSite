"use client";

import React from "react";

type Props = {
  data: {
    senderEmail: string;
    message: string;
    number: string;
    content: string;
    problem: string;
    consultent: string;
    marketing: string;
    company: string;
    location: string;
    website: string;
    budget: string;
  };
  setData: React.Dispatch<
    React.SetStateAction<{
      senderEmail: string;
      message: string;
      number: string;
      content: string;
      problem: string;
      consultent: string;
      marketing: string;
      company: string;
      location: string;
      website: string;
      budget: string;
    }>
  >;
};

const InquiryDetail = ({ data, setData }: Props) => {
  return (
    <section>
      <div className="">

        <h2 className="text-[24px] m:text-[32px] font-[600] mb-[20px]">자세한 상담을 위해 1분만 투자해주세요.</h2>
            <div className="w-full h-[1px] bg-black mb-[40px]"></div>

        <div className="flex flex-col gap-[30px] m:flex-row m:gap-[40px] mb-[30px] m:mb-[40px]">
          <div className="w-full m:w-1/2">
            <label
              htmlFor="senderEmail"
              className="text-[16px] m:text-[18px] mb-[5px] block ml-[2px] font-[600]"
            >
              회사명 / 성함
              <i className="w-[5px] h-[5px] rounded-[50px] bg-red-500 align-[3px] inline-block ml-[8px]"></i>
            </label>
            <input
              type="text"
              name="senderEmail"
              className="w-full h-[50px] rounded-[0px] px-[15px] text-[16px] border-[1px] m:border-[1px] border-[#676363] outline-[1px] m:outline-[1px] outline-[#1bbc1b]"
              placeholder="바이럴토스 / 홍길동"
              onChange={(e) => {
                setData((prevData) => ({
                  ...prevData,
                  company: e.target.value,
                }));
              }}
            />
          </div>
          <div className="w-full m:w-1/2">
            <label
              htmlFor="senderEmail"
              className="text-[16px] m:text-[18px] mb-[5px] block ml-[2px] font-[600]"
            >
              연락처
              <i className="w-[5px] h-[5px] rounded-[50px] bg-red-500 align-[3px] inline-block ml-[8px]"></i>
            </label>
            <input
              type="text"
              name="senderEmail"
              className="w-full h-[50px] rounded-[0px] px-[15px] text-[16px] border-[1px] m:border-[1px] border-[#676363] outline-[1px] m:outline-[1px] outline-[#1bbc1b]"
              placeholder="01012341234 ('-'는 제외하고 작성해주세요)"
              onChange={(e) => {
                setData((prevData) => ({
                  ...prevData,
                  number: e.target.value,
                }));
              }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-[30px] m:flex-row m:gap-[40px] mb-[30px] m:mb-[40px]">
          <div className="w-full m:w-1/2">
            <label
              htmlFor="senderEmail"
              className="text-[16px] m:text-[18px] mb-[5px] block ml-[2px] font-[600]"
            >
              이메일
              <i className="w-[5px] h-[5px] rounded-[50px] bg-red-500 align-[3px] inline-block ml-[8px]"></i>
            </label>
            <input
              type="email"
              name="senderEmail"
              className="w-full h-[50px] rounded-[0px] px-[15px] text-[16px] border-[1px] m:border-[1px] border-[#676363] outline-[1px] m:outline-[1px] outline-[#1bbc1b]"
              placeholder="salse@viraltoss.com"
              onChange={(e) => {
                setData((prevData) => ({
                  ...prevData,
                  senderEmail: e.target.value,
                }));
              }}
            />
          </div>
          <div className="w-full m:w-1/2">
            <label
              htmlFor="senderEmail"
              className="text-[16px] m:text-[18px] mb-[5px] block ml-[2px] font-[600]"
            >
              지역
              <i className="w-[5px] h-[5px] rounded-[50px] bg-red-500 align-[3px] inline-block ml-[8px] opacity-0"></i>
            </label>
            <input
              type="text"
              name="senderEmail"
              className="w-full h-[50px] rounded-[0px] px-[15px] text-[16px] border-[1px] m:border-[1px] border-[#676363] outline-[1px] m:outline-[1px] outline-[#1bbc1b]"
              placeholder="부산"
              onChange={(e) => {
                setData((prevData) => ({
                  ...prevData,
                  location: e.target.value,
                }));
              }}
            />
          </div>
        </div>

        {/* 사이트 주소 */}
        <div className="w-full m:w-[calc(50%-20px)]">
          <label
            htmlFor="senderEmail"
            className="text-[16px] m:text-[18px] mb-[5px] block ml-[2px] font-[600]"
          >
            사이트 주소 (URL)
            <i className="w-[5px] h-[5px] rounded-[50px] bg-red-500 align-[3px] inline-block ml-[8px] opacity-0"></i>
          </label>
          <input
            type="text"
            name="senderEmail"
            className="w-full h-[50px] rounded-[0px] px-[15px] text-[16px] border-[1px] m:border-[1px] border-[#676363] outline-[1px] m:outline-[1px] outline-[#1bbc1b]"
            placeholder="https://viraltoss.com"
            onChange={(e) => {
              setData((prevData) => ({
                ...prevData,
                website: e.target.value,
              }));
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default InquiryDetail;
