import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Detail from "./pages/Detail";
import StateIntro from "./stateSample/StateIntro";
import StateColorSample from "./stateSample/StateColorSample";
import StateIfElse from "./stateSample/StateIfElse";
import StateArraySample from "./stateSample/StateArraySample";
import ProductsTable from "./stateSample/ProductsTable";

function App() {

  return <ProductsTable/>

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
        <Route path="/products/:id" element={<Detail/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <footer>Footer @2024</footer>
  </>
}

export default App;
