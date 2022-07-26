import "./App.css";

import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import ReviewsList from "./Components/ReviewsList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/reviews" element={<ReviewsList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
