import "./index.css";

import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import ReviewsList from "./Components/ReviewsList";
import Categories from "./Components/Categories";
import SingleCategory from "./Components/SingleCategory";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<ReviewsList />} />
          <Route path="/categories" element={<Categories />} />
          <Route
            path="/categories/:category_name"
            element={<SingleCategory />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
