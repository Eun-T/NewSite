"use client";

import Image from "next/image";

// import { CustomButtonProps } from "../types";

const Button = ({ isDisabled, btnType, containerStyles, textStyles, title, rightIcon, handleClick }: CustomButtonProps) => (
  <button
    disabled={isDisabled}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
  >
    <span className={`flex-1 ${textStyles}`}>{title}</span>
    {rightIcon && (
      <div className="relative w-6 h-6">
        <Image
          src={rightIcon}
          alt="arrow_left"
          fill
          className="object-contain"
        />
      </div>
    )}
  </button>
);


// const Button = ({ isDisabled, btnType, containerStyles, textStyles, title, rightIcon, handleClick }: CustomButtonProps) => (
//   <button
//     disabled={isDisabled}
//     type={btnType || "button"}
//     className={`custom-btn ${containerStyles}`}
//     onClick={handleClick}
//   >
//     <span className={`flex-1 ${textStyles}`}>{title}</span>
//     {rightIcon && (
//       <div className="relative w-6 h-6">
//         <Image
//           src={rightIcon}
//           alt="arrow_left"
//           fill
//           className="object-contain"
//         />
//       </div>
//     )}
//   </button>
// );
//https://github.com/adrianhajdin/project_next13_car_showcase/blob/main/types/index.ts
//https://github.com/safak/nextjs-tutorial/blob/main/src/components/Button/Button.jsx
//https://github.com/adrianhajdin/project_nextjs13_flexibble/blob/main/components/Button.tsx
export default Button;