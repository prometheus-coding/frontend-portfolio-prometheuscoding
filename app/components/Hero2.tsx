import React from 'react'
import Button from './Button'

const Hero2 = () => {
  return (
      <div className='w-auto max-w-[1000px] h-[600px] flex flex-col items-center justify-center'>
        <h1 className='text-gray-900 text-8xl text-center font-valentino dark:text-white'>We offer <br /> Well designed <br /> Solutions</h1>
        <div className='mt-4'>
          <Button />
        </div>
      </div>
  )
}

export default Hero2