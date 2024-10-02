import React from 'react'


interface Props {
  text: string
}

const Button = ({ text }: Props) => {
  return (
    <React.Fragment>
      <div className=' py-2 px-5 rounded-full border-[1px] bg-transparent hover:bg-primary-600 hover:text-white transition-colors duration-200 text-white border-white'>{text}</div>
    </React.Fragment>
  )
}

export default Button