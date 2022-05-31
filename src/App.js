
import './App.css';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Service from './Components/Service/Service';
import Contact from './Components/Contact/Contact';
import Guide from './Components/Guide/Guide';


function App() {
  return (
    <div>
    <BrowserRouter>
    <Header></Header>
    
    <Routes>
    
    <Route  path="/" element={<Home></Home>} ></Route>
    <Route  path="/home" element={<Home></Home>} ></Route>
    <Route path="/login" element={<Login></Login>}></Route>
    <Route path="/Registration" element={<Register></Register>}></Route>
    <Route path="/Service" element={<Service></Service>}></Route>
    <Route path="/Contact" element={<Contact></Contact>}></Route>
    <Route path="/Guide" element={<Guide/>}></Route>


    </Routes>
    
    </BrowserRouter>
    
  
     
    </div>
  );
}

export default App;
