import { Avatar } from '@mui/material';
import React from 'react'


function HeadeOption({avatar,Icon,title}) {
  return (
    <div className="HeaderOption flex flex-col items-center mr-5 text-gray-500 cursor-pointer hover:text-black text-[15px] ">
        {Icon && <Icon className="headerOpton_icon "/>}
        {avatar && <Avatar className='HeaderOption_avatar border-x-gray-400' src={avatar}/>}
       
        <h3>{title}</h3>
        

    </div>
  );
}

export default HeadeOption;