import "./App.css";
import { Routes, Route } from "react-router-dom";
import { WelcomePage } from "./pages/welcomePage";
import { Posts } from "./pages/posts";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/posts/page/" element={<Posts />} />
        <Route path="/" element={<WelcomePage />} />
      </Routes>
    </div>
  );
}

export default App;
