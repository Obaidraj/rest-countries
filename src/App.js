import { useEffect, useState } from "react";
import "./App.css";
import Data from "./app/data.json";
import Nav from "./components/common/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Detail from "./screens/Detail";

function App() {
  const [countries, setcountries] = useState([]);

  useEffect(() => {
    setcountries(Data);
  }, []);

  return (
    <div>
      <Nav />
      {/* <div
        style={{
          backgroundColor: "green",
          position: "absolute",
          top: 50,
          right: "0",
          bottom: "0",
          left: "0",
        }}
      > */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":country" element={<Detail />} />
        </Routes>
      </BrowserRouter>
      {/* </div> */}
    </div>
  );
}

export default App;
