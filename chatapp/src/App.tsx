
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Dashboard } from './pages/Dashboard/Dashboard'

function App() {

  return (
   <Paths/>
  )
}

const Paths=()=>{
  
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
  )

}

export default App
