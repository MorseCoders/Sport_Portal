import React, { useState } from 'react';
import imgsrc from "../../asset/register.gif";

import io from 'socket.io-client';
import {Link ,  useNavigate } from "react-router-dom";
const socket = io.connect("http://localhost:3001");
const Login = () => {
  const navigate = useNavigate();
  const [studentID , setstudentID ] = useState ("");
  const [password  , setPassword] = useState("");
  const [ error , setError]  = useState(false) ;
  const onChangeHandler = (e)=>{
    const val = e.target.value;
    if(e.target.id === "studentID" ){
      setstudentID(val);
    }
    if(e.target.id === "password")
    {
      setPassword(val);
    }
  }
   
   const  onSubmitHandler = (e)=>{
    e.preventDefault();
  //  console.log(e.target.value);
    
    const user = { 
      studentID : studentID,
      password : password,
    }
    console.log(user);
    socket.emit("connect_msg" , {message : "conncted"});
    socket.emit("user" , {user : user});
    
    setstudentID("");
    setPassword("");
    socket.on("user_exist" ,  (data)=>{
     //  console.log(data.user);
     
       setError(data.user);
      if(data.user === "true")
       navigate("/register");
    })

   }
   
 
    
  return (
   <div>
    <div className='h-screen w-screen  place-items-center'>
    <div className='bg-gray-800 h-screen flex flex-row  justify-center items-center '>
     
     <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8  border-4 border-white shadow-lg shadow-white ' onSubmit={onSubmitHandler} >
       {error  && <div className='text-red-600 text-center'> User not exist </div> } 
       
       <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN IN</h2>
       <div className='flex flex-col text-gray-300 py-2'>
         <label className='p' htmlFor='studentID'> Student ID </label>
       
         <input required={true} className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'  id="studentID" type="text"  onChange={onChangeHandler} value={studentID}   placeholder="Enter Student Id" />
       </div>
       <div className='flex flex-col text-gray-300 py-2'>
         <label htmlFor='password' > Password </label>
         <input required={true} className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'  id="password" type="password"  onChange={onChangeHandler} value={password}   placeholder="Enter Password"  />
       </div>
    
       <button type='submit'  className='w-full my-5 py-2 bg-red-500 shadow-lg shadow-red-500/50 hover:shadow-red-500/40 text-white font-semibold rounded-lg' >
        Login
        </button>
        <Link  className='text-white text-sm hover:text-red-700' to="/register"> SignUp </Link>
       <div className='text-center text-white'>copyright @ 2022 </div>
     </form>
     <div   className='max-w-[400px] p-10 flex justify-center'>
      <img src={imgsrc} alt="gif" />
     </div>
   </div>
    </div>
   </div>

  )
}

export default Login



