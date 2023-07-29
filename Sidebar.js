import { Avatar } from '@mui/material'
import React from 'react';
    
 

function Sidebar() {

    const recentItem=(topic)=>(
        <div className="sidebar_rIT flex mt-1 space-x-1 text-md text-gray-600 hover:font-semibold hover:cursor-pointer ">
            <span className='sidebar_icon'>#</span>
            <p className='recentpara'>{topic}</p>
        </div>

    );

  return (
    <div className=' sidebar sticky top-16 rounded-sm flex-col flex-[0.2] text-center h-fit mt-3 md:ml-40'>
        <div className="sidebar_top flex flex-col items-center  border-gray-300 border-2 border-b-0  rounded-t-lg bg-white pb-2">
            <img src="/picture/linkdeinbg.jpeg" alt="" className='slidebar_img rounded-t-lg object-cover w-[100%] mb-[-20px] h-20' />
            <Avatar className='sidebar_avatar mb-2 b'/>
            <h2 className='font-medium'>Harsh shah</h2>
            <h4 className='text-sm text-gray-500'>harshshah9848,</h4>

        </div>
        <div className="sidebar_stats py-2 px-1 bg-white  h-fit  rounded-b-lg border-gray-300 border-2 ">
            <div className="sidebar_stat mt-1 flex justify-between ">
            <p className='text-gray-500 font-normal'>Who viewed your profile</p>
            <p className='text-blue-500 font-semibold'>2,543</p>
            </div>
            <div className="sidebar_stat mt-1 flex justify-between ">
            <p className='text-gray-500 font-normal'>Who viewd your post</p>
            <p className='text-blue-500 font-semibold'> 2,543</p>
                
           </div>
        </div>
        <div className="sidebar_bottom  mt-3 p-2 text-left border-gray-300 border-2 bg-white rounded-lg  ">
            <p>Recent</p>
           {recentItem("Reactjs")}
           {recentItem("Programming")}
           {recentItem("developer")}
           {recentItem("deign")}
           {recentItem("softwareEngineering")}
           {recentItem("Front-end developer")}
           


        </div>


    </div>
  )
}


export default Sidebar;