import React from "react";

type Props = {};

const BlogCounting = (props: Props) => {
  const lists = [
    {
      id: "0",
      num: "24시간",
      title: "최대 작업 기간",
      main1: "전문가가 원고를 작성하는 데는",
      main2: "최대 24시간이 소요됩니다.",
    },
    {
      id: "1",
      num: "1500자",
      title: "최소 글자 수",
      main1: "블로그가 너무 간결하면 내용",
      main2: "전달이 어려울 수 있습니다.",
    },
    {
      id: "2",
      num: "12장",
      title: "유료 이미지",
      main1: "저작권이 있는 유료 이미지를 활용하여",
      main2: "원고를 더욱 풍성하게 표현합니다.",
    },
  ];

  return (
    <div className="mt-[75px]">
      <div className="mb-[70px]">
        <h3 className="text-center mb-[10px] text-[40px] font-[500]">
          한 번만 이용하시면 팬이 됩니다.
        </h3>
        <p className="text-center text-[20px]">
          나만의 블로그를 만들어보세요.
        </p>
      </div>
      <div>
        <ul className="flex gap-[30px] items-center text-center">
          {lists.map((list) => (
            <li className="flex flex-col gap-[10px] w-[33.3%]">
              <h3 className="text-[40px] text-center textColor">{list.num}</h3>
              <h4 className="text-[22px] font-[500]">{list.title}</h4>
              <p className="text-[14px] text-[#3b4589]">
                {list.main1}
                <br />
                {list.main2}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogCounting;
