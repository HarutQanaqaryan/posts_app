import "./App.css";
import { Routes, Route } from "react-router-dom";
import { WelcomePage } from "./pages/welcomePage";
import { Posts } from "./pages/posts";
import { PostComment } from "./pages/postComments";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/comments" element={<PostComment />} />
        <Route path="/" element={<WelcomePage />} />
      </Routes>
    </div>
  );
}

export default App;
