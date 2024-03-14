import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Posts from "./components/Hero/Posts";
import PostsDetails from "./pages/PostsDetails";
import PostsCard from "./components/Hero/PostsCard";

function App() {
  return (
    <div className="app">
      <Header />
      <Posts />
      <Router>
        {/* <Header /> */}
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:postsId" element={<PostsDetails />} />
          {/* <Route path="/contact" element={<Contact />} />  */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
