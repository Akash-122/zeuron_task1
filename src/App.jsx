import { BrowserRouter as Router } from "react-router-dom";

import './App.css'
import Navbar from './Component/Navbar/Navbar'
import AllRoutes from './AllRoutes';

function App() {
  

  return (
    <>
      <div className='app'>
      <Router>
      <Navbar/>
      <AllRoutes/>
      </Router>
      </div>

    </>
  )
}

export default App
