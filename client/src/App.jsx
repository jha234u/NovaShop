import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ScrollToTop from "./components/ScrollToTop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import ProtectedRoute from "./components/ProtectedRoute";
import MyOrders from "./pages/MyOrders";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
function App() {
  return (
    <BrowserRouter>
  <ScrollToTop />

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/product/:id" element={<Product />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/contact" element={<Contact />} />
    <Route
      path="/cart"
      element={
        <ProtectedRoute>
          <Cart />
        </ProtectedRoute>
      }
    />

    <Route
      path="/checkout"
      element={
        <ProtectedRoute>
          <Checkout />
        </ProtectedRoute>
      }
    />

    <Route
      path="/my-orders"
      element={
        <ProtectedRoute>
          <MyOrders />
        </ProtectedRoute>
      }
    />

    <Route path="/success" element={<Success />} />
  </Routes>
</BrowserRouter>
  );
}

export default App;