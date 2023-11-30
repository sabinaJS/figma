import React from 'react'

const Button = ({children}) => {
  return (
   <button className='text-white text-xl font-bold bg-blue-600 rounded py-[10px] px-[10px] w-[170px] '>{children}</button>
  )
}

export default Button

