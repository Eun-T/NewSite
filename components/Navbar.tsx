"use client";

import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { CgMenuGridO } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { useEffect, useState } from "react";

const links = [
  {
    id: 1,
    title: "홈",
    url: "/",
  },
  {
    id: 2,
    title: "홈",
    url: "/",
  },
  {
    id: 3,
    title: "홈",
    url: "/",
  },
  {
    id: 4,
    title: "홈",
    url: "/",
  },
  {
    id: 5,
    title: "홈",
    url: "/",
  },
  {
    id: 6,
    title: "홈",
    url: "/",
  },
];

const NavBar = () => {
  const [click, setClick] = useState<boolean>(false);
  const [mobile,setMobile] = useState(true)

  // useEffect(() => {
  //   if(click){
  //     setMobile(false)
  //   }else{
  //     setMobile(true)
  //   }
  // },[click])
  
  return (
    <header className="w-full fixed z-[100] bg-white px-[4%]">
      <nav className="max-w-[1240px] mx-auto flex justify-between items-center py-4 bg-transparent">
        <Link href="/" className="flex justify-center items-center">
          {/* <Image
          src='/logo.svg'
          alt='logo'
          width={118}
          height={18}
          className='object-contain'
        /> */}
          Logo
        </Link>

        <div className="">
          {mobile ? <ul className={"flex gap-[20px] m:gap-[5px] top-[56px] m:top-0 m:right-0 m:pl-0 m:pt-0 pl-[10px] pt-[40px] right-0 flex-col m:flex-row justify-start items-start fixed m:static m:h-auto m:w-auto m:justify-center m:items-center w-[300px]  h-[100vh] m:animate-none " + (click ? "animate-mobileNavbarReverse right-[-300px]" : "")}>
            {links.map((link) => {
              return (
                <li key={link.id} className="px-[20px] relative">
                  <Link
                    key={link.id}
                    href={link.url}
                    className="relative font-[700] hover:text-red-500 after:content-[''] after:w-full after:h-[2px] after:bg-blue-300 after:absolute after:left-[0px] after:bottom-[-4px] after:hover:bg-red-500"
                  >
                    {link.title}
                  </Link>
                  {/* <div className="w-full h-[2px] bg-transparent hover:bg-blue-500"></div> */}
                </li>
              );
            })}
          </ul> : null}
        </div>
        {/* <CustomButton
        title='Sign in'
        btnType='button'
        containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
      /> */}
        <div id="mobile" className="block m:hidden">
          <div
            className="cursor-pointer"
            onClick={() => {
              setClick(!click);
            }}
          >
            {click ? <CgMenuGridO color="white" /> : <CgClose color="white" />}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
