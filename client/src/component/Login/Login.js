import React , {useState } from 'react'

const Login = () => {
 


  return (
    <form>
      <label htmlFor='studentID'> Student ID </label>
      <input id="studentID" type="text"  />
      <label > Password </label>
      <input type="text" />

    </form>
  )
}

export default Login