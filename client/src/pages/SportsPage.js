import React ,  {useState  } from 'react'
import SportsList from '../component/Sports/SportsList'
import Header from '../component/Header'
import BookingForm from '../component/Sports/BookingForm';

import Login from '../component/Auth/Login';
const SportsPage = () => {

  const [showForm , setFormCart] = useState(false);
  
  const [user , setUser] = useState({});

  const [isUSER , setisUSER] = useState(false);
  const [sport , setSport] = useState("");
  

  const onLoginHandler = (u)=>{
    console.log("x : ", u);
    setUser(u);
   // 

  }
  const onIsUserHandler = ()=>{
    setisUSER(true) ;
  }


   const showFormHandler = ()=>{
    setFormCart(true);
   }
   
   const closeFormHnadler = ()=>{
    setFormCart(false);
   }
   
   const onlogouthandler = ()=>{
    setisUSER(false) ;
   }
  
  const onSportHandler = (s)=>{
      setSport(s);
  }

  return (
 
  
      <div>
      {isUSER === false  ?    <Login onLogin={onLoginHandler} onIsUser = {onIsUserHandler} />   : 
    
        <div> 
        {showForm && <BookingForm onCloseForm = { closeFormHnadler } user={user}  sport = {sport}   />   } 
        <Header username = {user.name} onLogout= { onlogouthandler}  />
        <SportsList onShowForm = {showFormHandler}  sport={onSportHandler}  /> 
       </div> 
      }
     
       </div>
  )
}

export default SportsPage