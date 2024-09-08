import React from 'react'
import TerminalIcon from '../../components/ui/TerminalIcon'
import SquareUserIcon from '../../components/ui/SquareUserIcon'
import JoystickIcon from '../../components/ui/JoystickIcon'
import ProfessionalInfo from '@/components/panels/ProfessionalInfo'

const page = () => {
  return (
    <div className='h-[calc(100%-100px)] text-gray-custom font-fira-code flex '>
      <div className='border-r border-white w-[1300px] flex flex-row h-full'>
        <div className='w-[64px] border-r border-white flex flex-col justify-start items-center'>
          <div className='mt-6 cursor-pointer hover:text-white-custom'><TerminalIcon/></div>
          <div className='mt-6 cursor-pointer hover:text-white-custom'><SquareUserIcon/></div>
          <div className='mt-6 cursor-pointer hover:text-white-custom'><JoystickIcon/></div>
        </div>
        <div className='h-full '>
          <ProfessionalInfo/>
        </div>
      </div>
    </div>
  )
}

export default page
