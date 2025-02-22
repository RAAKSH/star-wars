import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import  Planet  from "./Components/Planet";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h2 className="text-4xl font-bold mb-2">Star Wars</h2>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/planet" element={<Planet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
