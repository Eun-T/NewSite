import React from "react";
import Image from "next/image";
import linebar from "../public/images/linebar2.png";
type LineBarProps = {};

const LineBar = (props: LineBarProps) => {
  return (
    <section className="w-full flex justify-center">
      <div className="relative w-[14px] h-[147px] animate-[lineBar_1s_ease-in-out]">
        <Image src={linebar} alt="linebar" objectFit="cover" fill />
      </div>
    </section>
  );
};

export default LineBar;
