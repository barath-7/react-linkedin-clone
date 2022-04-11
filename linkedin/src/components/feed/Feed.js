import React, { useEffect, useState } from "react";
import './Feed.css'
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventIcon from '@mui/icons-material/Event';
import NotesIcon from '@mui/icons-material/Notes';
import Post from "./Post";
import { db } from "../../firebase";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const Feed = () => {
  const [posts, setPosts] = useState([])
  const [input, setInput] = useState('')
  const inputChangeHandler = event =>{
    setInput(event.target.value)
  }
  useEffect(()=>{
    db.collection("posts").orderBy('timeStamp').onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  },[])
  
  const sendPost = event =>{
    event.preventDefault()
    db.collection('posts').add({
      name:'Test name',
      description:'test description',
      message:input,
      photoUrl:'',
      timeStamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form >
              <input type="text" value={input} onChange={inputChangeHandler}/>
              <button type="submit" onClick={sendPost}>Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption title='Photo' Icon={ImageIcon} color='#70B5F9'/>
          <InputOption title='Video' Icon={SubscriptionsIcon} color='#E7A33E'/>
          <InputOption title='Event' Icon={EventIcon} color='#C0CBCD'/>
          <InputOption title='Write article' Icon={NotesIcon} color='#7FC15E'/>
        </div>
      </div>
      
     {posts.map((post)=>(
       <Post name={post.data.name} description={post.data.description} message={post.data.message} photoUrl={post.data.url} key={post.id} />
     ))}
      
          </div>
  );
};

export default Feed;
