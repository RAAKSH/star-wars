import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import  Planet  from "./Components/Planet";
import { CommonComponents } from "./Components/CommonComponents";
import { Practice } from "./Components/Practice";

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/planet" element={<Planet />} />
          <Route path="/commonComponents" element={<CommonComponents />} />
          <Route path="/practice" element={<Practice />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
