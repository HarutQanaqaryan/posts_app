import "./App.css";
import { Routes, Route } from "react-router-dom";
import { WelcomePage } from "./pages/welcomePage";
import { Posts } from "./pages/posts";
import { PostComment } from "./pages/postComments";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="posts" element={<Posts />}></Route>
          <Route path="posts/comments" element={<PostComment />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
