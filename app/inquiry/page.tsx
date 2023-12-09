"use client";

import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdArrowDropDown } from "react-icons/md";
import inquiry from "../../public/images/inquiry.jpg";
import Image from "next/image";
import InquiryDetail from "@/components/inquiry/InquiryDetail";

type Props = {};

const InquiryHome = (props: Props) => {
  const dropdownItems = [
    "~ 300만원",
    "300 ~ 500만원",
    "500 ~ 1000만원",
    "1000만원 이상",
  ];

  const consultentItems = ["상관없음", "대면 (오프라인)", "비대면 (온라인)"];

  const [consulting, setConsulting] = useState<string>("상관없음");

  const [isConsultingOpen, setIsConsultingOpen] = React.useState(false);

  const [checked, setChecked] = useState<string>("");

  const isChecked = (value: string) => value === checked;

  const [budget, setBudget] = useState<string>("월 예산");

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [data, setData] = useState({
    marketing: "",
    budget: "",
    message: "",
    content: "",
    problem: "",
    consultent: "",
    company: "",
    number: "",
    senderEmail: "",
    location: "",
    website: "",
  });

  const loadingNotify = () =>
    toast.loading("제출중...", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = loadingNotify();
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.status === 200) {
      // successNotify();
      toast.update(id, {
        render: () => (
          <div>
            제출 완료되었습니다!
            <br /> 3초 뒤 새로고침 됩니다.
          </div>
        ),
        type: "success",
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      setTimeout(() => {
        location.reload();
        window.scrollTo(0, -100);
        // router.reload()
      }, 3500);
    } else {
      // failNotify();
      toast.update(id, {
        render: () => (
          <div>
            제출에 실패하셨습니다!
            <br /> 다시 시도해주세요.
          </div>
        ),
        type: "error",
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }
  };

  return (
    <main>
      <section>
        <div className="relative h-[400px] w-full before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:bg-black before:h-full before:z-[3] before:opacity-40 after:content-['문의하기'] after:absolute after:left-[50%] after:-translate-x-[50%] after:top-[50%] after:-translate-y-[50%] after:text-white after:z-[5] after:text-[40px] after:font-[700]">
          <Image src={inquiry} alt="문의하기" fill className="object-cover" />
        </div>
      </section>
      <section>
        <div className="container">
          <h3 className="text-[22px] m:text-[28px] mt-[60px] text-center font-[600] bg-[#F0F0F0] px-[20px] py-[50px]">
            <span className="textColor">
              문의 전에 충분히 홈페이지 정보를 확인해주세요.{" "}
            </span>
            <br className="hidden x:block"/> ​모든 문의 내용은 이메일로 회신 드리고 있습니다.
          </h3>
        </div>
      </section>

      <>
        <ToastContainer
          position="top-right" // 알람 위치 지정
          autoClose={3000} // 자동 off 시간
          hideProgressBar={false} // 진행시간바 숨김
          closeOnClick // 클릭으로 알람 닫기
          rtl={false} // 알림 좌우 반전
          //pauseOnFocusLoss // 화면을 벗어나면 알람 정지
          draggable // 드래그 가능
          pauseOnHover // 마우스를 올리면 알람 정지
          theme="light"
          // limit={1} // 알람 개수 제한
        />

        <section
          className="w-full bg-no-repeat bg-cover flex flex-col justify-center items-center pt-[80px] pb-[100px] px-[20px]"
          id="question"
        >
          <div className="w-full container">
            <h2 className="text-[24px] m:text-[32px] font-[600] mb-[20px]">
              어떤 도움이 필요하신가요?
            </h2>
            <div className="w-full h-[1px] bg-black mb-[40px]"></div>

            <form onSubmit={sendEmail} className="flex flex-col gap-[30px]">
              <div>
                <h4 className="text-[16px] m:text-[18px] mb-[20px] block ml-[2px] w-fit font-[700]">
                  1. 문의하고 싶은 항목을 선택하세요.
                </h4>

                  <div className="text-[16px] m:text-[18px] flex m:flex-row flex-col gap-[20px]">
                    <div className="flex items-center gap-[10px]">
                      <input
                        type="radio"
                        name="fruit"
                        value="스마트플레이스"
                        checked={isChecked("스마트플레이스")}
                        onChange={(e) => {
                          setChecked(e.target.value);
                          setData((prevData) => ({
                            ...prevData,
                            marketing: e.target.value,
                          }));
                        }}
                      />
                      <label>스마트플레이스</label>
                    </div>

                    <div className="flex items-center gap-[10px]">
                      <input
                        type="radio"
                        name="fruit"
                        value="파워링크"
                        checked={isChecked("파워링크")}
                        onChange={(e) => {
                          setChecked(e.target.value);
                          setData((prevData) => ({
                            ...prevData,
                            marketing: e.target.value,
                          }));
                        }}
                      />
                      <label>파워링크</label>
                    </div>

                    <div className="flex items-center gap-[10px]">
                      <input
                        type="radio"
                        name="fruit"
                        value="브랜드 블로그"
                        checked={isChecked("브랜드 블로그")}
                        onChange={(e) => {
                          setChecked(e.target.value);
                          setData((prevData) => ({
                            ...prevData,
                            marketing: e.target.value,
                          }));
                        }}
                      />
                      <label>브랜드 블로그</label>
                    </div>

                    <div className="flex items-center gap-[10px]">
                      <input
                        type="radio"
                        name="fruit"
                        value="홈페이지 제작"
                        checked={isChecked("홈페이지 제작")}
                        onChange={(e) => {
                          setChecked(e.target.value);
                          setData((prevData) => ({
                            ...prevData,
                            marketing: e.target.value,
                          }));
                        }}
                      />
                      <label>홈페이지 제작</label>
                    </div>
                </div>
              </div>

              <div className="">
                <label
                  htmlFor="message"
                  className="text-[16px] m:text-[18px] block ml-[2px] w-fit font-[700] mb-[20px]"
                >
                  2. 마케팅 월 예산은 어느 정도로 생각하고 계신가요?
                </label>

                <div className="relative">
                  <div
                    className="w-[240px] bg-white hover:bg-gray-300 text-[#556] font-[500] py-4 px-[20px] text-[16px] m:text-[18px]  border-[1px] border-solid border-[#e0e0e0]  cursor-pointer flex justify-between items-center"
                    onClick={toggleDropdown}
                  >
                    {budget}
                    <MdArrowDropDown className="text-black text-[30px]" />
                  </div>
                  <ul
                    className={`absolute ${
                      isOpen ? "block" : "hidden"
                    } bg-white text-gray-800 pt-1 custom-dropdown w-[240px] border-[1px] border-solid border-[#e0e0e0] mt-[10px] `}
                  >
                    {dropdownItems.map((item, index) => (
                      <li
                        key={index}
                        className="hover:bg-gray-200 py-3 px-5 cursor-pointer"
                        onClick={() => {
                          setIsOpen(!isOpen);
                          setBudget(item);
                          setData((prevData) => ({
                            ...prevData,
                            budget: item,
                          }));
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="">
                <div className="flex m:flex-row flex-col m:justify-between mb-[20px]">
                  <label
                    htmlFor="content"
                    className="text-[16px] m:text-[18px] mb-[5px] block ml-[2px] font-[700]"
                  >
                    3. 현재 사업의 연 평균 매출과 순수익은 어느 정도이신가요?
                  </label>
                  <h5 className="font-[700] text-[#9a9a9a] w-fit self-end m:self-auto">
                    {data.content.length} / 1000자
                  </h5>
                </div>
                <textarea
                  maxLength={1000}
                  name="content"
                  placeholder="자세히 작성해 주세요."
                  className="resize-none w-full rounded-[0px] px-[15px] py-[10px] text-[16px] m:text-[18px] h-[160px] s:h-[180px] m:h-[200px] border-[1px] m:border-[1px] border-[#676363] outline-[1px] m:outline-[1px] outline-[#1bbc1b]"
                  onChange={(e) => {
                    setData((prevData) => ({
                      ...prevData,
                      content: e.target.value,
                    }));
                  }}
                />
              </div>

              <div className="">
                <div className="flex m:flex-row flex-col m:justify-between mb-[20px]">
                  <label
                    htmlFor="content"
                    className="text-[15px] s:text-[18px] mb-[5px] block ml-[2px] font-[700]"
                  >
                    4. 현재 사업의 문제점과 겪고 있는 어려움에 대한 정보를
                    적어주세요.
                  </label>
                  <h5 className="font-[700] text-[#9a9a9a] w-fit self-end m:self-auto">
                    {data.problem.length} / 1000자
                  </h5>
                </div>
                <textarea
                  maxLength={1000}
                  name="content"
                  placeholder="자세히 작성해 주세요."
                  className="resize-none w-full rounded-[0px] px-[15px] py-[10px] text-[16px] m:text-[18px] h-[160px] s:h-[180px] m:h-[200px] border-[1px] m:border-[1px] border-[#676363] outline-[1px] m:outline-[1px] outline-[#1bbc1b]"
                  onChange={(e) => {
                    setData((prevData) => ({
                      ...prevData,
                      problem: e.target.value,
                    }));
                  }}
                />
              </div>

              <div className="mb-[40px]">
                <label
                  htmlFor="message"
                  className="text-[16px] m:text-[18px] block ml-[2px] w-fit font-[700] mb-[20px]"
                >
                  {/* 1. 어떤 마케팅 상품을 원하시나요? */}
                  5. 바이럴토스는 대면 상담을 선호합니다. 고객님은 대면 혹은
                  비대면 중 어떤 상담을 원하시나요?
                </label>

                <div className="relative">
                  <div
                    // name="message"
                    className="w-[240px] bg-white hover:bg-gray-300 text-[#556] font-[500] py-4 px-[20px] text-[16px] m:text-[18px] rounded-[0px] border-[1px] border-solid border-[#e0e0e0]  cursor-pointer flex justify-between items-center"
                    onClick={() => {
                      setIsConsultingOpen(!isConsultingOpen);
                    }}
                  >
                    {consulting}
                    <MdArrowDropDown className="text-black text-[30px]" />
                  </div>
                  <ul
                    className={`absolute ${
                      isConsultingOpen ? "block" : "hidden"
                    } bg-white text-gray-800 pt-1 custom-dropdown w-[240px] border-[1px] border-solid border-[#e0e0e0] mt-[10px] rounded-[0px]`}
                  >
                    {consultentItems.map((item, index) => (
                      <li
                        key={index}
                        className="hover:bg-gray-200 py-3 px-5 cursor-pointer"
                        onClick={(e) => {
                          setIsConsultingOpen(!isConsultingOpen);
                          setConsulting(item);
                          setData((prevData) => ({
                            ...prevData,
                            consultent: item,
                          }));
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <InquiryDetail data={data} setData={setData} />

              <div className="mb-[20px] m:mb-[40px]">
                <div className="flex items-center mb-[5px]">
                  <label
                    htmlFor="senderEmail"
                    className="text-[16px] m:text-[18px] block ml-[2px] mr-[7px] font-[600]"
                  >
                    개인정보 수집 및 이용 동의에 동의합니다.
                  </label>
                  <input
                    type="checkbox"
                    name="checkbox"
                    className="w-[16px] h-[16px]"
                  />
                  <i className="w-[5px] h-[5px] rounded-[50px] bg-red-500 align-[3px] inline-block ml-[8px]"></i>
                </div>
                <div className="w-full h-[86px] text-[16px] m:text-[18px] m:h-[113px] bg-white overflow-y-auto rounded-[0px] p-[8px] s:p-[10px] break-keep border-[1px] m:border-[1px] border-[#676363]">
                  개인정보의 수집 및 이용목적 본 사이트는 온라인(상담)문의를
                  이용하는 기업 및 개인을 대상으로 아래와 같이 개인정보를
                  수집하고 있습니다.
                  <br /> 1. 수집 개인정보 항목 - 상호, 성함, 연락처, 이메일,
                  문의내용
                  <br /> 2. 개인정보의 수집 및 이용목적 - 상담 및 문의내용에
                  대한 확인 및 회신
                  <br /> 3. 개인정보의 보유 및 이용기간 - 목적달성 시점까지 이용
                  * 목적 이외의 타 용도로는 사용되지 않습니다.
                  <br /> 4. 이외 사항은 개인정보취급방침을 준수합니다.
                </div>
              </div>

              <button
                type="submit"
                className="w-full h-[60px] rounded-[10px] bgColor text-[18px] text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#386bc0] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-[#35b653] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              >
                상담 신청하기
              </button>
            </form>
          </div>
        </section>
      </>
    </main>
  );
};

export default InquiryHome;
