import React, { ReactNode } from 'react'


interface Props {
  children: ReactNode
  bgColor?: string
}

const Section = ({ children, bgColor }: Props) => {
  return (
    <div className={`w-full flex justify-center ${bgColor}`}>{children}</div>
  )
}

export default Section