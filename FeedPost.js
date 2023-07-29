import { Avatar } from '@mui/material'
import React from 'react';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';import InputOption from './InputOption';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function FeedPost({ name,description,message}) {
  return (
    <div className='Feedpost bg-white mt-2 rounded-md p-3'>
        <div className="post_header flex ">
            <Avatar/>
            <div className="post_text ml-4">
            <h4 className='Header_name font-semibold text-lg'>{name}</h4>
            <p className='post_des font-normal  text-gray-700'>{description}</p>  
            </div>
            

        </div>
        <div className=" mt-2 post_body break-word justify-evenly">
            <p>{message}</p>  
        </div>
        <div className="post_button flex">
            <InputOption Icon={ThumbUpOutlinedIcon} title="Like" color="gray" />
            <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray"/>

            <InputOption Icon={ShareOutlinedIcon} title="share" color="gray"/>

            <InputOption Icon={SendOutlinedIcon} title="send" color="gray"/>


             
        </div>

    </div>
  )
}

export default FeedPost