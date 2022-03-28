import React from 'react'

function AuthSwitch({ authTitle, signup, authBtnTitle, setSignUp}) {
  return (

            <div className="auth_callback">
                <h3>{authTitle}</h3>
                <form action="">
                    <input type="email" name="email" placeholder='Email' />
                    {
                        signup ? <input type="text" name="Username" id="" placeholder='Username'/> : ""
                    }
                    <input type="password" name="password" placeholder='Password' />
                    <input type="button" value={authBtnTitle} />
                </form>

                <div className="other_auth">
                    { signup ? <p>I have an account already, <span className="authSwitch" onClick={()=> setSignUp(false)}>Login</span> </p>: <p>I don't have an account yet, <span className="authSwitch" onClick={()=> setSignUp(true)}>Sign Up</span> </p>  }
                </div>
            </div>
        )
    }

export default AuthSwitch