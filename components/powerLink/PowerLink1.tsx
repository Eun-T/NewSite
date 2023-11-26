import React from 'react'
import Image from "next/image";
import bigarrow from "../../public/images/bigarrow.png";
import powerlink1 from "../../public/images/powerlink1.png";
import powerlink2 from "../../public/images/powerlink2.png";
import powerlink3 from "../../public/images/powerlink3.png";

type Props = {}

const PowerLink1 = (props: Props) => {
  return (
    <div>
              <p>파워링크 설정법</p>
              <p className="text-[18px] text-gray-400 font-[600] mb-[20px]">
                위치 및 매장 홍보에 효과적인 네이버 지도 플레이스 마케팅입니다.
                <br />
                어뷰징이나 편법 없이 네이버 플레이스를 최적화 시켜 노출과 전환이
                잘 되게 만듭니다.
              </p>
              <div>
                <div className="flex flex-row items-center">
                  <div className="w-[400px] relative">
                    <Image
                      src={powerlink1}
                      alt="powerlink1"
                      objectFit="cover"
                      className="w-full h-auto"
                    />
                    <p>1. 캠페인 만들기</p>
                  </div>
                  <div className="w-[30px] relative opacity-75">
                    <Image
                      src={bigarrow}
                      alt="bigarrow"
                      objectFit="cover"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="w-[400px] relative">
                    <Image
                      src={powerlink2}
                      alt="powerlink2"
                      objectFit="cover"
                      className="w-full h-auto"
                    />
                    <p>2. 광고그룹 만들기</p>
                  </div>
                  <div className="w-[30px] relative opacity-75">
                    <Image
                      src={bigarrow}
                      alt="bigarrow"
                      objectFit="cover"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="w-[400px] relative">
                    <Image
                      src={powerlink3}
                      alt="powerlink3"
                      objectFit="cover"
                      className="w-full h-auto"
                    />
                    <p>3. 키워드 입력하기</p>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default PowerLink1