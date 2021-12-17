import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Outlet,
  Navigate
} from "react-router-dom";

import ProductAdd from './pages/ProductAdd';
import ProductUpdate from './pages/ProductUpdate';
import Products from './pages/Products';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './pages/privateRoute';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="products/add" element={
          <PrivateRoute>
            <ProductAdd />
          </PrivateRoute>
        } />
        <Route path="products/update/:id" element={<ProductUpdate />} />
      </Routes>
    </BrowserRouter>
  )
}



export default App;
