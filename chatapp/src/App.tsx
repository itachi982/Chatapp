
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
   <Paths/>
  )
}

const Paths=()=>{
  
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={"hi"} />
        </Routes>
      </BrowserRouter>
  )

}

export default App
