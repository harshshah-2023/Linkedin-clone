import React,{useEffect, useState} from 'react';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import EventNoteIcon from '@mui/icons-material/EventNote';
import FeedPost from './FeedPost'; 
import { db } from './firebase';



function Feedtop() {
    const[posts,setPost]=useState([]);
    const[input,setInput]=useState('');
    useEffect(()=>{
        db.collection("posts").onSnapshot((snapshot)=>
        setPost(
            snapshot.docs.map((doc)=>({
                id:doc.id,
                data:doc.data(),
            }))
        )
        )
    },[]); 

   
   const sendPost =(e)=>
   {
    e.preventDefault(); 
    //  here preventing the default behaviior of referesing

    db.collection('posts').add({
        name:'Harsh Shah',
        description:'Developer',
        message:input,
    });

    setInput("");
   };
   
   

   
  return (
   
     <div className='Feed flex-[0.6] mt-3 mx-2'>
        <div className="feed_input_container bg-white p-2  rounded-md mb-3 py-11 ">
            <div className="feed_input border border-gray-600 rounded-3xl  px-1 py-2 pl-4 text-gray-500 flex ">
                <CreateIcon/>
                <form action="" className='flex w-[100%]' >
                    <input value={input} onChange={e=>setInput(e.target.value)} type="text"  className=' border-none flex-1 ml-2 outline-none font-medium text-black ' />
                <button onClick={sendPost} type='Submit' className='hidden'><h3 className='text-gray-600'>Send </h3></button>
                </form>     
            </div>
            <div className="feedicons flex justify-evenly">
            <InputOption Icon={ImageIcon} title="Photo" color="skyblue" />
            <InputOption Icon={SubscriptionsIcon } title="Video" color="green" />
            <InputOption Icon={EventNoteIcon} title="Event" color="orange" />
            <InputOption Icon={CalendarViewDayIcon} title="Write article" color="orange" />
            </div>
             
        </div>
        {posts.map(({id,data:{name,description,message}})=>(
            <FeedPost
            key={id}
            name={name}
            description={description}
            message={message}
            />
        ))}
    
          
       
        {/* every time you have a post it render here */}

    </div>
  )
}

export default Feedtop;  