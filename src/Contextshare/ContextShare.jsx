import React,  { useState }  from 'react'
import { createContext } from 'react'



export const isLoginAuthContext = createContext(false)


function ContextShare({children}) {
    const [isLoginStatus,setIsLoginStatus] = useState(true)

  return (
    <isLoginAuthContext.Provider value={{isLoginStatus,setIsLoginStatus}}> 
        {children}
      </isLoginAuthContext.Provider>
  )
}

export default ContextShare