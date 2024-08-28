import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Logreg from './pages/Logreg'
import Chatwindow from './pages/Chatwindow'
import Profile from './pages/Profile'
import Aboutus from './pages/Aboutus'
import PageNotFound from './pages/PageNotFound'
import { useContext } from 'react'
import { isLoginAuthContext } from './Contextshare/ContextShare'


function App() {
  const {isLoginStatus}=useContext(isLoginAuthContext)


  return (
    <>
     <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={isLoginStatus?<Home/>:<PageNotFound/>}/>
      <Route path='/logreg' element={<Logreg/>}/>
      <Route path='/chatbox' element={<Chatwindow/>}/>
      <Route path='/profile' element={isLoginStatus?<Profile/>:<PageNotFound/>}/>
      <Route path='/aboutus' element={isLoginStatus?<Aboutus/>:<PageNotFound/>}/>
      <Route path='*' element={<PageNotFound/>}/>

     </Routes>


    </>
  )
}

export default App
