import Image from "next/image";
import React from "react";
import bubble from "../../public/images/Group 177.png";
import { IoIosArrowForward } from "react-icons/io";

type Props = {};

const snsImages = [
  {
    id: "0",
    image: bubble,
    alt: "bubble",
    bgColor: "bg-[#B46130]",
  },
  {
    id: "0",
    image: bubble,
    alt: "bubble",
    bgColor: "bg-[#B46130]",
  },
  {
    id: "0",
    image: bubble,
    alt: "bubble",
    bgColor: "bg-[#B46130]",
  },
  {
    id: "0",
    image: bubble,
    alt: "bubble",
    bgColor: "bg-[#B46130]",
  },
]

const SnsImage = (props: Props) => {
  return (
    <div className="mb-[50px]">
      <div className="flex flex-row flex-wrap justify-between">
        {snsImages.map(snsImage => (
          <div id={snsImage.id} className="overflow-hidden border-2 hover:border-[#3b5998] border-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] hover:scale-110 transition duration-300 ease-in-out cursor-pointer">
          <div className="relative w-[250px] h-[250px]">
            <Image src={snsImage.image} alt={snsImage.alt} fill className="object-cover" />
          </div>
          <div className={"flex justify-between items-center w-[250px] h-[25px] px-[10px] " + (snsImage.bgColor)}>
            <span className="text-[12px] text-white">더 알아보기</span>
            <IoIosArrowForward size={15} color="white"/>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default SnsImage;
