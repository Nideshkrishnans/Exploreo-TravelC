import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Logreg from './pages/Logreg'
import Chatwindow from './pages/Chatwindow'
import Profile from './pages/Profile'
import Aboutus from './pages/Aboutus'


function App() {

  return (
    <>
<<<<<<< HEAD
    
=======
>>>>>>> 36d2504539fbed650d1806c700e8fe110bdd3a2b
     <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/logreg' element={<Logreg/>}/>
      <Route path='/chatbox' element={<Chatwindow/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>
     </Routes>
<<<<<<< HEAD
     
=======
>>>>>>> 36d2504539fbed650d1806c700e8fe110bdd3a2b
    </>
  )
}

export default App
