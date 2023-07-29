import React from 'react'

function InputOption({Icon ,title,color}) {
  return (
    <div className='inputOption flex items-center mt-2 hover:cursor-pointer p-1 rounded-md w-32 h-12 hover:bg-gray-300'>
        <Icon style={{color:color}}/>
        <h4 className='icon_text ml-1'>{title}</h4>

         
         </div>
  )
}

export default InputOption;