import Image from "next/image";
import React from "react";
import rocket from "../public/images/rocket.png";

type Props = {};

const lists = [1, 2, 3, 4];

const Merit = (props: Props) => {
  return (
    <section id="merit" className="w-full px-[4%]">
      <div className="max-w-[1240px] w-full py-[53px] mx-auto font-[600]">
        <div className="flex flex-row gap-[30px]">
          {lists.map((list) => (
            <div className="w-[25%]">
              <div className="relative mx-auto w-[125px] h-[125px] mb-[20px]">
                <Image
                  src={rocket}
                  alt="rocket"
                  fill
                  objectFit="cover"
                  quality={100}
                />
              </div>
              <div className="font-[500] text-center">
                <h4>빠른 주문처리</h4>
                <p>입금 즉시 충전이 가능하여 빠른 이용이 가능합니다.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Merit;
