import Image, { StaticImageData } from 'next/image'
import React from 'react'
// import smartplace from '../public/images/smartplace.png'

type SimpleBoxProps = {
  alt: string,
  src: StaticImageData,
}

const SimpleBox = ({ alt, src}: SimpleBoxProps) => {
  return (
    <div className='relative w-[241px] h-[241px] rounded-[12px] overflow-hidden'>
      <Image src={src} alt={alt}  objectFit='cover' quality={100} fill/>
    </div>
    
  )
}

export default SimpleBox