import React, { ReactNode } from 'react'


interface Props {
  children: ReactNode
  bgColor?: string
  sectionHeight?: string
}

const Section = ({ children, bgColor, sectionHeight }: Props) => {
  return (
    <div className={`w-full flex justify-center ${bgColor}`}>{children}</div>
  )
}

export default Section