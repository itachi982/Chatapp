
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage'
import { Signup } from './pages/Signup'
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
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
  )

}

export default App
