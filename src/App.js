import { Link, Route, Routes, useLocation } from "react-router-dom";
import Category from "./components/Category";
import Search from "./components/Search";
import Cuisine from "./pages/Cuisine";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Searched from "./pages/Searched";
import { GiKnifeFork } from 'react-icons/gi';
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation()

  return (
    <div className="recipe">
      <div className="logo">
        <GiKnifeFork />
        <Link to={"/"} className="logo-link">
          React delicious
        </Link>
      </div>
      <Search />
      <Category />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/searched/:search" element={<Searched />} />
          <Route path="/recipe/:name" element={<Recipe />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
