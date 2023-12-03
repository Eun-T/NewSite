"use client"

import React, { useEffect } from 'react'
import law from "../../public/images/law.png";
import schoolbully from "../../public/images/schoolbully.png";
import megacoffee from "../../public/images/megacoffee.png";
import Image from "next/image";
import BlogEx from "./BlogEx";

type Props = {};

const BlogSlider = (props: Props) => {
  const images = [
    {
      id: "0",
      src: law,
      alt: "law",
    },
    {
      id: "1",
      src: schoolbully,
      alt: "schoolbully",
    },
    {
      id: "2",
      src: megacoffee,
      alt: "megacoffee",
    },
    {
      id: "3",
      src: law,
      alt: "law",
    },
    {
      id: "4",
      src: law,
      alt: "law",
    },
    {
      id: "5",
      src: law,
      alt: "law",
    },
    {
      id: "6",
      src: law,
      alt: "law",
    },
    {
      id: "7",
      src: law,
      alt: "law",
    },
    {
      id: "8",
      src: law,
      alt: "law",
    },
  ];

  return (
    <>
      <div id="blogslider" className="w-full">
        {/* id="blogslider" */}
        <div id="bsc">
          {/* id="bsc" */}
          {images.map((img) => (
            <div id={img.id}>
              <Image
                src={img.src}
                alt={img.alt}
                objectFit="cover"
                className="w-full h-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
              />
            </div>
          ))}

          {images.map((img) => (
            <div id={img.id}>
              <Image
                src={img.src}
                alt={img.alt}
                objectFit="cover"
                className="w-full h-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
              />
            </div>
          ))}
        </div>
      </div>
      <BlogEx />
    </>

    // <div
    //   id="blogslider"
    //   className="relative overflow-x-scroll overflow-y-hidden w-full h-[547px]"
    // >
    //   <div className="absolute left-0 flex justify-start items-center flex-row gap-[8px]">
    //     {images.map((img) => (
    //       <div
    //         id={img.id}
    //         className="relative bg-[#eee] w-[410px] px-[48px] pt-[24px] rounded-[20px] overflow-hidden"
    //       >
    //         <Image
    //           src={img.src}
    //           alt={img.alt}
    //           objectFit="cover"
    //           className="w-full h-auto shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
    //         />
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default BlogSlider;
