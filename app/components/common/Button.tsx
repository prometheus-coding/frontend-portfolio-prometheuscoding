import React from 'react'


interface Props {
  text: string
}

const Button = ({ text }: Props) => {
  return (
    <React.Fragment>
      <div className='text-gray-800 py-2 px-5 rounded-full border-[1px] border-gray-700 bg-white hover:bg-primary-600 hover:text-white transition-colors duration-200 dark:bg-primary-500 dark:text-white dark:border-white'>{text}</div>
    </React.Fragment>
  )
}

export default Button