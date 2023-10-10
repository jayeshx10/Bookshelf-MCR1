import { Routes, Route } from "react-router-dom";

import { Home } from "/src/pages/Home";
import { Search } from "/src/pages/Search";
import "./styles.css";
import { Header } from "./pages/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
