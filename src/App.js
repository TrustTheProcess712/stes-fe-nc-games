import "./index.css";

import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import ReviewsList from "./Components/ReviewsList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<ReviewsList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
