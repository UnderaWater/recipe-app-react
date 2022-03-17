import { Route, Routes } from "react-router-dom";
import Category from "./components/Category";
import Search from "./components/Search";
import Cuisine from "./pages/Cuisine";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Searched from "./pages/Searched";

function App() {
  return (
    <div className="recipe">
      <Search />
      <Category />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/cuisine/:type" element={<Cuisine />} />
        <Route  path="/searched/:search" element={<Searched />} />
        <Route  path="/recipe/:name" element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default App;
