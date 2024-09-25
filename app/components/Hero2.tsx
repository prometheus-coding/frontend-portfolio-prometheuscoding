import React from 'react'
import Button from './Button'

const Hero2 = () => {
  return (
    <div className='w-full border-blue-800 border-2 bg-gray-200 grid place-items-center h-[600px]'>
      <div className='border-green-400 border-2 w-auto max-w-[1000px] h-full flex flex-col items-center justify-center'>
        <h1 className='text-gray-900 text-7xl text-center'>We offer <br /> Well designed <br /> Solutions</h1>
        <div className='mt-4'>
          <Button />
        </div>
      </div>
    </div>
  )
}

export default Hero2