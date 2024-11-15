
import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/routes";  // Import your routes


function App() {

  return (
    <>

      <Router>
      {/* <ThreejsScene/> */}
        {/* <Navbar /> */}
        <AppRoutes />
      </Router>


    </>
  )
}

export default App
