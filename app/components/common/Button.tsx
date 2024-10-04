import React from 'react'


interface Props {
  text: string
}

const Button = ({ text }: Props) => {
  return (
    <React.Fragment>
      <div className=' py-3 px-6 rounded-full border-[1px] bg-transparent transition-colors duration-200 text-white border-white cursor-pointer'>{text}</div>
    </React.Fragment>
  )
}

export default Button