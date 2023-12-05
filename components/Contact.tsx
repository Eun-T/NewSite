"use client";

import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdArrowDropDown } from "react-icons/md";
// import { useRouter } from "next/navigation";


const Contact = () => {
  // const router = useRouter()
  const [data, setData] = useState({
    senderEmail: "",
    message: "",
    number: "",
    content: "",
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
        render: () => (<div>제출 완료되었습니다!<br/> 3초 뒤 새로고침 됩니다.</div>),
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
        window.scrollTo(0,-100)
        // router.reload()
      }, 3500);
    } else {
      // failNotify();
      toast.update(id, {
        render: () => (<div>제출에 실패하셨습니다!<br/> 다시 시도해주세요.</div>),
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
      <section className="w-full bg-[url('/images/우주.jpg')] bg-no-repeat bg-cover flex flex-col justify-center items-center pt-[80px] pb-[100px] px-[20px]" id="question">
        <h2 className="text-white text-[40px] s:text-[50px] m:text-[60px] font-[700] mb-[25px]">
          간편 상담 신청
        </h2>
        <h3 className="text-white text-[14px] s:text-[17px] m:text-[21px] text-center mb-[10px] leading-snug">
          상담 글을 작성해주시면 확인 후 순차적으로 연락드립니다.
          <br />
          급하신 경우, 전화 상담이나 채널톡 상담을 이용해주세요
        </h3>
        <MdArrowDropDown className="text-white text-[60px]" />
        <div className="w-full max-w-[600px] bg-white p-[30px] m:p-[50px] rounded-[20px] mt-[10px]">
          <form onSubmit={sendEmail} className="flex flex-col gap-[14px] s:gap-[16px] m:gap-[18px]">
            <div className="">
              <label
                htmlFor="message"
                className="text-[15px] s:text-[18px] mb-[5px] block ml-[2px]"
              >
                <i className="w-[5px] h-[5px] rounded-[50px] bg-red-500 align-[2px] inline-block mr-[8px]"></i>
                성함 / 상호명
              </label>
              <input
                type="text"
                name="message"
                className="w-full h-[50px] rounded-[10px] px-[15px] text-[16px] border-[1px] m:border-[2px] border-[#676363] outline-[1px] m:outline-[2px] outline-[#3182F6]"
                placeholder="홍길동 / 바이럴토스"
                minLength={1}
                onChange={(e) => {
                  setData((prevData) => ({
                    ...prevData,
                    message: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="">
              <label
                htmlFor="number"
                className="text-[15px] s:text-[18px] mb-[5px] block ml-[2px]"
              >
                <i className="w-[5px] h-[5px] rounded-[50px] bg-red-500 align-[2px] inline-block mr-[8px]"></i>
                연락처
              </label>
              <input
                type="tel"
                name="number"
                className="w-full h-[50px] rounded-[10px] px-[15px] text-[16px] border-[1px] m:border-[2px] border-[#676363] outline-[1px] m:outline-[2px] outline-[#3182F6]"
                placeholder="01012345678"
                onChange={(e) => {
                  setData((prevData) => ({
                    ...prevData,
                    number: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="">
              <label
                htmlFor="senderEmail"
                className="text-[15px] s:text-[18px] mb-[5px] block ml-[2px]"
              >
                <i className="w-[5px] h-[5px] rounded-[50px] bg-red-500 align-[2px] inline-block mr-[8px]"></i>
                이메일
              </label>
              <input
                type="email"
                name="senderEmail"
                className="w-full h-[50px] rounded-[10px] px-[15px] text-[16px] border-[1px] m:border-[2px] border-[#676363] outline-[1px] m:outline-[2px] outline-[#3182F6]"
                placeholder="abcde@naver.com"
                onChange={(e) => {
                  setData((prevData) => ({
                    ...prevData,
                    senderEmail: e.target.value,
                  }));
                }}
              />
            </div>

            <div className="">
              <label
                htmlFor="content"
                className="text-[15px] s:text-[18px] mb-[5px] block ml-[2px]"
              >
                <i className="w-[5px] h-[5px] rounded-[50px] bg-red-500 align-[2px] inline-block mr-[8px]"></i>
                문의 내용
              </label>
              <textarea
                name="content"
                placeholder="문의 내용(500자 이내)"
                className="resize-none w-full rounded-[10px] px-[15px] py-[10px] text-[16px] h-[160px] s:h-[180px] m:h-[200px] border-[1px] m:border-[2px] border-[#676363] outline-[1px] m:outline-[2px] outline-[#3182F6]"
                onChange={(e) => {
                  setData((prevData) => ({
                    ...prevData,
                    content: e.target.value,
                  }));
                }}
              />
            </div>

            <div className="mb-[10px]">
              <div className="flex items-center mb-[5px]">
                <label
                  htmlFor="senderEmail"
                  className="text-[15px] s:text-[18px] block ml-[2px] mr-[7px]"
                >
                  <i className="w-[5px] h-[5px] rounded-[50px] bg-red-500 align-[2px] inline-block mr-[8px]"></i>
                  개인정보 수집 및 이용 동의에 동의합니다.
                </label>
                <input
                  type="checkbox"
                  name="checkbox"
                  className="w-[16px] h-[16px]"
                />
              </div>
              <div className="w-full h-[86px] m:h-[113px] bg-white overflow-y-auto rounded-[10px] p-[8px] s:p-[10px] break-keep border-[1px] m:border-[2px] border-[#676363]">
                개인정보의 수집 및 이용목적 본 사이트는 온라인(상담)문의를
                이용하는 기업 및 개인을 대상으로 아래와 같이 개인정보를 수집하고
                있습니다.
                <br /> 1. 수집 개인정보 항목 - 상호, 성함, 연락처, 이메일,
                문의내용
                <br /> 2. 개인정보의 수집 및 이용목적 - 상담 및 문의내용에 대한
                확인 및 회신
                <br /> 3. 개인정보의 보유 및 이용기간 - 목적달성 시점까지 이용 *
                목적 이외의 타 용도로는 사용되지 않습니다.
                <br /> 4. 이외 사항은 개인정보취급방침을 준수합니다.
              </div>
            </div>

            <button
              type="submit"
              className="w-full h-[60px] rounded-[10px] bgColor text-[18px] text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#386bc0] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-[#35b653] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            >
              상담 신청하기
              {/* 
              망설이지 마시고, 지금 문의하세요
              망설이지 마시고 지금 조언을 구해보십시오. 전문가들이 직접 도와드립니다.
              상담은 사전 예약제로 진행됩니다.
편하신 방법으로 문의 남겨 주시면 확인 후 연락 드리겠습니다.
            */}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;