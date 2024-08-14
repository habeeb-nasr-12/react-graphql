import "./App.css";
import CharcaterList from "./pages/CharcaterList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Charcter from "./pages/Charcter";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<CharcaterList />} />
          <Route path="/search" element={<Search />} />
          <Route path="/:id" element={<Charcter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
