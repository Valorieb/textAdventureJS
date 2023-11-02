import "./App.css";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Other } from "./components/Other";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Other" element={<Other />} />
      </Routes>
    </>
  );
}

export default App;
