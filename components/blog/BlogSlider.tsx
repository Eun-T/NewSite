"use client"

import React, { useEffect } from 'react'
import law from "../../public/images/law.png";
import schoolbully from "../../public/images/schoolbully.png";
import megacoffee from "../../public/images/megacoffee.png";
import blog4 from "../../public/images/blog4.png";
import blog5 from "../../public/images/blog5.png";
import blog6 from "../../public/images/blog6.png";
import blog7 from "../../public/images/blog7.png";
import Image from "next/image";
// import BlogEx from "./BlogEx";

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
      src: blog4,
      alt: "blog4",
    },
    {
      id: "4",
      src: blog5,
      alt: "blog5",
    },
    {
      id: "5",
      src: blog6,
      alt: "blog6",
    },
    {
      id: "6",
      src: blog7,
      alt: "blog7",
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
      <div id="blogslider" className="w-full ">
        {/* id="blogslider" */}
        <div id="bsc">
          {/* id="bsc" */}
          {images.map((img) => (
            <div key={img.id} className='relative top-[1px] w-[320px] x:w-[340px] m:w-[380px] l:w-[410px] aspect-[410/547] flex items-center pt-[24px] px-[32px] x:px-[40px] m:px-[48px] pb-0 bg-[#eee] rounded-[20px] overflow-hidden'>
              <Image
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
              />
            </div>
          ))}

          {images.map((img) => (
            <div key={img.id} className='relative top-[1px] w-[320px] x:w-[340px] m:w-[380px] l:w-[410px] aspect-[410/547] flex items-center pt-[24px] px-[32px] x:px-[40px] m:px-[48px] pb-0 bg-[#eee] rounded-[20px] overflow-hidden'>
              <Image
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
              />
            </div>
          ))}
        </div>
      </div>
      {/* <BlogEx /> */}
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
