import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import  Planet  from "./Components/Planet";
import { CommonComponents } from "./Components/CommonComponents";

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/planet" element={<Planet />} />
          <Route path="/commonComponents" element={<CommonComponents />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
