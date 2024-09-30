import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/Home';
import Layout from './pages/Layout';
import Shop from './pages/Shop';
import ViewCart from './pages/ViewCart';
import CheckOut from './pages/Checkout';
function App() {

  return (
    
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<Shop />} />
          <Route path="viewcart" element={<ViewCart />} />
          <Route path="checkout" element={<CheckOut />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
