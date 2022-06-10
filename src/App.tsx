import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Login from "./pages/Login";
import Register from "./pages/Register";
import 'react-toastify/dist/ReactToastify.css'
import "@progress/kendo-theme-material/dist/all.css";
import "hammerjs";
import { ToastContainer } from "react-toastify";
import PageNotFound from "./pages/PageNotFound";
import Container from "./pages/Container";
import './index.css';
import Redirect from "./components/Redirect/Redirect";
function App() {
  
  return (
    <Router>
      
      <Routes>
          <Route path="*"  element={<PageNotFound/>}/>
          <Route path="/" element={<Redirect path={"/login"}/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element = {<Register/>}/>
          <Route path ='/debts' element = {<Container/>} />
          <Route path ='/payments' element={<Container/>}  />
          <Route path= '/earnings' element={<Container/>} />
          <Route path = '/analytics' element={<Container/>}/>
      </Routes>
      
      <ToastContainer/>
    </Router>
  );
}

export default App;
