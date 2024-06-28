import React from 'react'

const DropDownMenu = () => {
  return (
    
            <ul className='dropDown w-[144px] right-[-97%] absolute mt-2 flex flex-col text-[#e2ddd6] rounded-lg gap-2 border-2 border-gray-500 p-4 text-[20px] font-medium '>
                <li className='hover:scale-90 hover:text-[#6d6c73] duration-300'><a href="#Projects" >Projects</a></li>
                <li className='hover:scale-90 hover:text-[#6d6c73] duration-300'><a href="#Skills">Skils</a></li>
                <li className='hover:scale-90 hover:text-[#6d6c73] duration-300'><a href="#Contact Me">Contact Me</a></li>
            </ul>
  )
}

export default DropDownMenu