import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import HeadeOption from './HeadeOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import Avatar from '@mui/material/Avatar';

function Header() {
  return (
    <div className='header flex border-b-2 border-gray-300 w-full  py-1 sticky top-0 justify-evenly z-40'>

        <div className="header_left flex items-center">

          <img src="/picture/iconLI.png" alt="" className='object-contain h-14 mr-1'  />

          <div className="headerleft_serach px-2 py-2 items-center rounded-sm h-11 bg-slate-200">
          <SearchIcon className=''/>
          <input type="text" className='outline-none border-none bg-transparent w-60 ' />
          </div>
     
        </div>
        <div className="header_right flex ">
          <HeadeOption Icon={HomeIcon} title="Home"/>
          <HeadeOption  Icon={SupervisorAccountIcon} title="My Network"/>
          <HeadeOption Icon={WorkIcon} title="Jobs"/>
          <HeadeOption Icon={ChatIcon} title="Messaging"/>
          <HeadeOption Icon={NotificationsIcon} title="Notification"/>
          <HeadeOption avatar="/picture/harshpic.jpeg" title="me" />
        </div>
      
    </div>
  );
}

export default Header
