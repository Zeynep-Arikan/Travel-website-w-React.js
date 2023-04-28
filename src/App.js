import { Route, Routes } from "react-router-dom";

import "./styles.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Misafir from "./routes/Misafir";



export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/about" element={<About></About>}/>
        <Route path="/service" element={<Service></Service>}/>
        <Route path="/contact" element={<Contact></Contact>}/>
        <Route path="/Misafir" element={<Misafir></Misafir>}/>

        
        
        
      </Routes>
      
    </div>
  );
}
