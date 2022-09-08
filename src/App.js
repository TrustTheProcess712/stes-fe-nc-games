import "./index.css";
import { useState } from "react";
import { UserProfile } from "./Context/UserProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import ReviewsList from "./Components/ReviewsList";
import Categories from "./Components/Categories";
import SingleCategory from "./Components/SingleCategory";
import SelectedReview from "./Components/SelectedReview";
import Comments from "./Components/Comments";

function App() {
  const [userProfile, setUserProfile] = useState({
    username: "cooljmessy",
    name: "Peter Messy",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/1/1a/MR_MESSY_4A.jpg/revision/latest/scale-to-width-down/250?cb=20170730171002",
  });

  return (
    <BrowserRouter>
      <UserProfile.Provider value={{ userProfile, setUserProfile }}>
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
            <Route path="/reviews/:review_id" element={<SelectedReview />} />
            <Route path="/reviews/:review_id/comments" element={<Comments />} />
          </Routes>
        </div>
      </UserProfile.Provider>
    </BrowserRouter>
  );
}

export default App;
