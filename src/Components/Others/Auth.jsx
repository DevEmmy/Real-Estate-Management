import React, { useState } from 'react'
import AuthSwitch from './AuthSwitch'

function Auth() {

    const [signup, setSignUp] = useState(false)


  return (
    <div className='auth_component'>
        <AuthSwitch authTitle={signup ? "Sign Up" :"Login"} signup={signup} authBtnTitle={signup ? "Sign Up" :"Login"} setSignUp={setSignUp}/>
    </div>
  )
}

export default Auth