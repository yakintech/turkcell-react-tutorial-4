import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";

function App() {

  return <> 
      <ul style={{display:'flex', justifyContent:'space-between'}}>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/blog"}>Blog</Link></li>
        <li><Link to={"/products"}>Products</Link></li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <footer>Footer @2024</footer>
  </>
}

export default App;
