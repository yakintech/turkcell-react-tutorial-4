import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Detail from "./pages/Detail";
import Counter from "./pages/Counter";
import Suppliers from "./pages/Suppliers";
import SupplierDetail from "./pages/SupplierDetail";
import AddSupplier from "./pages/AddSupplier";
import Categories from "./pages/Categories";

function App() {


  return <> 
      <ul style={{display:'flex', justifyContent:'space-between'}}>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/suppliers"}>Suppliers</Link></li>
        <li><Link to={"/blog"}>Blog</Link></li>
        <li><Link to={"/products"}>Products</Link></li>
        <li><Link to={"/counter"}>Counter</Link></li>
        <li><Link to={"/categories"}>Categories</Link></li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Detail/>} />
        <Route path="/counter" element={<Counter/>} />
        <Route path="/suppliers" element={<Suppliers/>} />
        <Route path="/suppliers/:id" element={<SupplierDetail/>} />
        <Route path="/suppliers/add" element={<AddSupplier/>} />
        <Route path="/categories" element={<Categories/>} />

        <Route path="*" element={<NotFound/>} />
      </Routes>
      <footer style={{position:'fixed', bottom:0, textAlign:'center'}}>Footer @2024</footer>
  </>
}

export default App;
