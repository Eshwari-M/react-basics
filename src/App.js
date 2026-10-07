import logo from "./logo.svg";
import "./App.css";
// import StudentProfile from "./components/StudentProfile";
// import StateDemo from "./components/StateDemo";
// import BindingDemo from "./components/BindingDemo";
// import StylingDemo from "./components/StylingDemo";
// import LoadingRetryDemo from "./components/LoadingRetrynDemo";
import StudentRegistration from "./components/StudentRegistration";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import CartPage from "./pages/CartPage";
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> {" | "}
        <Link to="/products">Products</Link>
        {" | "}
        <Link to="/cart">Cart</Link>{" | "}
        <Link to="/register">Register</Link>
        {" | "}
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/register" element={<StudentRegistration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;