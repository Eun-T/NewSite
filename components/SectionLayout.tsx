import React from 'react'

type SectionLayoutProps = {
  children: React.ReactNode
  id: string
}

const SectionLayout = (props: SectionLayoutProps) => {
  return (
    <section className='w-full px-[4%] relative' id={props.id}>
      <div className='max-w-[1240px] mx-auto w-full relative'>
        {props.children}
      </div>
    </section>
  )
}

export default SectionLayout