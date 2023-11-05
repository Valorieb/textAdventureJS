import "./App.css";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Other } from "./components/Other";
import { Story } from "./components/Story";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Other" element={<Other />} />
        <Route path="Story" element={<Story />} />
      </Routes>
    </>
  );
}

export default App;
