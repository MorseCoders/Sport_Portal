import React  , {useState} from 'react'
import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");
const Register = () => {

  const [user , setUser] = useState({college_name : "" , username : "" , password : "" ,password2 : "" , studentID  :"" });

  const [error , setError] = useState(false);

  const onChangeInput = (e)=>{
    const key = e.target.id;
    const val = e.target.value;
    setUser((pre)=>{
       return ({...pre , [key] : val})
    })
  }

 

  const onSubmitHandler = (e)=>{

    e.preventDefault();
    
    if(user.password !== user.password2  )
    {
      console.log("incorrect password");
      setError(true);
      
    }else{
      console.log(user);
      socket.emit("new_user_detail" , {userDetail : user});

    }

  
  }

  return (
    <div >

      <div className=' h-screen w-screen place-items-center'>


        <div className='bg-gray-800 h-screen w-screen flex flex-row justify-center items-center overflow-hidden  '>
     
          <form onSubmit={onSubmitHandler} className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8  border-4 border-white shadow-lg shadow-white'>
          {error && <div className='text-red-700 font-semibold text-center'> Password incorrect </div> }
            <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN UP</h2>
            <div className='flex flex-col text-gray-300 py-2'>
              <label htmlFor='college_name' > College Name</label>
              <select required={true}  onChange={onChangeInput}  value={user.college_name}  className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' id="college_name">
                <option  value="" >Choose</option>
                <option  value="geu" >Geu</option>
                <option value="gehu">Gehu-Dehradun</option>
                <option value="geub">Gehu-Bhimtal</option>
                <option value="geuh">Gehu-Haldwani</option>
              </select>
            </div>
            <div className='flex flex-col text-gray-300 py-2'>
              <label htmlFor='username' >Name </label>
              <input required={true} id="username" className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" value={user.name} onChange={onChangeInput} placeholder="Enter the name" />
            </div>
            <div className='flex flex-col text-gray-300 py-2'>
              <label htmlFor='studentID'>Student ID </label>
              <input required={true} id="studentID" className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" value={user.name} onChange={onChangeInput} placeholder="Student ID"  />
            </div>
            <div className='flex flex-col text-gray-300 py-2'>
              <label htmlFor='password'>Password</label>
              <input required={true} id="password" className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" value={user.name} onChange={onChangeInput} placeholder="Password"  />
            </div>
            <div className='flex flex-col text-gray-300 py-2'>
              <label html="password2"> Confirm Password</label>
              <input required={true} id="password2" className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" value={user.name} onChange={onChangeInput} placeholder="Confirm Password"  />
            </div>

            <button  type='submit' className='w-full my-5 py-2 bg-red-500 shadow-lg shadow-red-500/50 hover:shadow-red-500/40 text-white font-semibold rounded-lg'>SIGNUP</button>

          </form>

           <div className='max-w-[400px] '>
            <img className='cover' src="https://i.pinimg.com/originals/c7/ae/06/c7ae0615b9d39b2837dddfd98e63e42c.gif" alt="gif"/>
           </div>
        </div>
      </div>


    </div>
  )
}

export default Register