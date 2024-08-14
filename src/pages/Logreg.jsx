import React, { useState } from 'react'
import { getUserApi, registerApi } from '../../server/allApi'
import * as Components from './Lrstyle'
import { useNavigate } from 'react-router-dom'



function Logreg() {
  const navigate = useNavigate()
  const [signIn, toggle] = React.useState(true);

  const [userDetails, setUserDetails] = useState({
    userName: '',
    email: '',
    password: ''
  })
  

  const [lemail,setLemail]=useState()
  const [lpassword,setLpassword]=useState()

  //console.log(lemail);
  //console.log(lpassword);
  
  

  // console.log(userDetails);
  const handleRegister = async (e) => {
    e.preventDefault()
    const { userName, email, password } = userDetails
    if (!userName || !email || !password) {
      alert(`please fill the form completly`)
    } else {
      const users = await getUserApi()
      if (users) {
        const userExists = users.data.some((user) => user.email === userDetails.email);

        if (userExists) {
          alert("userExist ")
          setUserDetails({
            userName:"",
            email:"",
            password:""
          })
        } else {
          const result = await registerApi(userDetails)
          alert("registration successfull")
          toggle(true)
          setUserDetails({
            userName:"",
            email:"",
            password:""
          })

          //console.log(result);
        }
      }
    }
  }

  const handleLogin = async (e)=>{
    e.preventDefault()
    
   
    if( !lemail || !lpassword){
      alert('please fill the form complete')
    }else {
      const users = await getUserApi()
      
      if (users) {
        console.log(users.data);
        const userExists = users.data.find(user => user.email === lemail);
        const userPassword = users.data.some(user => user.password === lpassword);

        console.log(userExists);
        console.log(userPassword);
        
        if(userExists && userPassword){
          alert('loggin successfully')
          sessionStorage.setItem("userName",userExists.userName)
          

          navigate('/home')
        }
        else{
          alert('incorrect password or email')
        }
    }
  }
  }


  return (
    <div className='w-100 d-flex justify-content-center align-items-center my-5 py-5'>
      <Components.Container>
        <Components.SignUpContainer signingIn={signIn}>
          <Components.Form>
            <Components.Title>Create Account</Components.Title>
            <Components.Input type="text" placeholder="Name" value={userDetails.userName} onChange={(e) => { setUserDetails({ ...userDetails, userName: e.target.value }) }} />
            <Components.Input type="email" placeholder="Email" value={userDetails.email} onChange={(e) => { setUserDetails({ ...userDetails, email: e.target.value }) }} />
            <Components.Input type="password" placeholder="Password" value={userDetails.password} onChange={(e) => { setUserDetails({ ...userDetails, password: e.target.value }) }} />
            <Components.Button onClick={handleRegister}>Sign Up</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>
        <Components.SignInContainer signingIn={signIn}>
          <Components.Form>
            <Components.Title>Sign in</Components.Title>
            <Components.Input type="email" placeholder="Email" onChange={(e)=>setLemail(e.target.value)} />
            <Components.Input type="password" placeholder="Password" onChange={(e)=>setLpassword(e.target.value)}/>
            <Components.Anchor href="#"  >Forgot your password?</Components.Anchor>
            <Components.Button onClick={handleLogin}>Sign In</Components.Button>
          </Components.Form>
        </Components.SignInContainer>
        <Components.OverlayContainer signingIn={signIn}>
          <Components.Overlay signingIn={signIn}>
            <Components.LeftOverlayPanel signingIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                To keep connected with us please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Sign In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>
            <Components.RightOverlayPanel signingIn={signIn}>
              <Components.Title>Hello, Friend!</Components.Title>
              <Components.Paragraph>
                Enter your personal details and start journey with us
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Sign Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </div>
  )
}



export default Logreg;