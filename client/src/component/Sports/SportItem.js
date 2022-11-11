import React from 'react'

const SportItem = (props) => {
   

    return (
        <div className='card p-0 w-60 h-60 flex flex-col justify-between  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 '>
            <div className=' w-full  ' >   <img className='cover ' src={props.sport.src} alt="no game " /> </div>
           <div className='p-2'>
           <div className='  font-semibold '>  {props.sport.name} </div>
           <div className='  font-semibold '>  {props.sport.clg} </div>
           
          
           </div>
        </div>
    )
  
}

export default SportItem