import React from 'react'
import Button from './Button'

const Hero2 = () => {
  return (
      <div className='border-green-400 border-2 w-auto max-w-[1000px] h-[600px] flex flex-col items-center justify-center'>
        <h1 className='text-gray-900 text-7xl text-center'>We offer <br /> Well designed <br /> Solutions</h1>
        <div className='mt-4'>
          <Button />
        </div>
      </div>
  )
}

export default Hero2