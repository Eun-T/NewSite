"use client";

import Link from "next/link";
import Image from "next/image";
import { CgMenuGridO } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { useEffect, useState } from "react";
import logo from "../public/images/logoblack.svg";

const links = [
  {
    id: 1,
    title: "홈",
    url: "#mainmenu",
  },
  {
    id: 2,
    title: "스마트플레이스",
    url: "#smartplace",
  },
  {
    id: 3,
    title: "파워링크",
    url: "#powerlink",
  },
  {
    id: 4,
    title: "브랜드 블로그",
    url: "#blog",
  },
  {
    id: 5,
    title: "홈페이지 제작",
    url: "#website",
  },
  {
    id: 6,
    title: "문의하기",
    url: "/inquiry",
  },
];

const NavBar = () => {
  const [click, setClick] = useState<boolean>(true);
  const [mobile, setMobile] = useState(false);

  // useEffect(() => {
  //   if(click){
  //     setMobile(false)
  //   }else{
  //     setMobile(true)
  //   }
  // },[click])

  return (
    <header className="w-full fixed z-[100] bg-white px-[4%] border-b-[1px] border-solid border-[#e0e0e0] ease-in-out transition duration-75 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.1),_0px_4px_6px_0px_rgba(54,79,199,0.08)]">
      <nav className="max-w-[1200px] mx-auto flex justify-between items-center py-[15px] m:py-[30px] bg-transparent">
        <a
          href="/"
          className="flex items-center gap-[8px] text-black font-[700] text-[18px]"
        >
          <Image
            src={logo}
            width={100}
            height={0}
            style={{ width: "30px", height: "auto" }}
            alt={"바이럴토스"}
          />
          VIRAL TOSS
        </a>
        {/* <Image
          src='/logo.svg'
          alt='logo'
          width={118}
          height={18}
          className='object-contain'
        /> */}

        {/* PC */}
        <div className="hidden m:block">
          <ul
            className={
              "flex gap-[20px] m:gap-[0px] top-[56px] m:top-0 m:right-0 m:pl-0 m:pt-0 pl-[10px] pt-[40px] right-0 flex-col m:flex-row justify-start items-start fixed m:static m:h-auto m:w-auto m:justify-center m:items-center w-[300px]  h-[100vh]  bg-white " +
              (click ? " right-[-300px]  " : "")
            }
          >
            {links.map((link) => {
              return (
                <li key={link.id} className="px-[13px] relative">
                  <Link
                    key={link.id}
                    href={link.url}
                    className="relative font-[700]"
                    onClick={() => {
                      setMobile(false);
                      setClick(true);
                    }}
                  >
                    {link.title}
                  </Link>
                  {/* <div className="w-full h-[2px] bg-transparent hover:bg-blue-500"></div> */}
                </li>
              );
            })}
          </ul>
        </div>

        {/* 모바일 */}
        {mobile ? (
          <div className="block m:hidden">
            <ul
              className={
                "flex gap-[20px] m:gap-[0px] top-[56px] m:top-0 m:right-0 m:pl-0 m:pt-0 pl-[10px] pt-[40px] right-0 flex-col m:flex-row justify-start items-start fixed m:static m:h-auto m:w-auto m:justify-center m:items-center w-[300px]  h-[100vh]  bg-white " +
                (click ? " right-[-300px]  " : "")
              }
            >
              {links.map((link) => {
                return (
                  <li key={link.id} className="px-[13px] relative">
                    <Link
                      key={link.id}
                      href={link.url}
                      className="relative font-[700]"
                      onClick={() => {
                        setMobile(false);
                        setClick(true);
                      }}
                    >
                      {link.title}
                    </Link>
                    {/* <div className="w-full h-[2px] bg-transparent hover:bg-blue-500"></div> */}
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}

        <div id="mobile" className="block m:hidden">
          <div
            className="cursor-pointer"
            onClick={() => {
              setClick(!click);
              setMobile(!mobile)
            }}
          >
            {click ? (
              <CgMenuGridO color="black" size={25} />
            ) : (
              <CgClose color="black" size={25} />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

// <Link
// key={link.id}
// href={link.url}
// className="relative font-[700] hover:text-red-500 after:content-[''] after:w-full after:h-[2px] after:bg-blue-300 after:absolute after:left-[0px] after:bottom-[-4px] after:hover:bg-red-500"
// >
// {link.title}
// </Link>

{
  /* <div className="">
{mobile ? (
  <ul
    className={
      "flex gap-[20px] m:gap-[0px] top-[56px] m:top-0 m:right-0 m:pl-0 m:pt-0 pl-[10px] pt-[40px] right-0 flex-col m:flex-row justify-start items-start fixed m:static m:h-auto m:w-auto m:justify-center m:items-center w-[300px]  h-[100vh] m:animate-none bg-white " +
      (click ? "animate-mobileNavbarReverse right-[-300px]  " : "")
    }
  >
    {links.map((link) => {
      return (
        <li key={link.id} className="px-[13px] relative">
          <Link
            key={link.id}
            href={link.url}
            className="relative font-[700]"
          >
            {link.title}
          </Link>
        </li>
      );
    })}
  </ul>
) : null}
</div> */
}
