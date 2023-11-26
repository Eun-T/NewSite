"use client"
import Head from "next/head";
import type { Metadata } from "next";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

// export const metadata: Metadata = {
//   title: "good",
// };

const page = (props: Props) => {
  return (
    <div>
      <Head>
        <title>dsfdsf</title>
      </Head>
      <div>page입니다</div>
      <motion.div animate={{ x: 100 }} transition={{ delay: 1 }}>
        <div className="w-[30px] h-[30px] rounded-[50px] bg-black"></div>
      </motion.div>
    </div>
  );
};

export default page;
