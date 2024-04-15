import Login from './pages/common/Login'
import Layout from './pages/common/Layout';
import Products from './pages/waiter_waitress/Products';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Cart from './pages/waiter_waitress/Cart';
import OrderList from './pages/common/OrderList';
import OrderDetails from './pages/common/OrderDetails';
import EmployeeRegistration from './pages/manager/EmployeeRegistration';
import ProductDetails from './pages/waiter_waitress/ProductDetails';
import SalesList from './pages/manager/SalesList';
import SaleDetails from './pages/manager/SaleDetails';
import EmployeeList from './pages/manager/EmployeeList';
import EmployeeDetails from './pages/manager/EmployeeDetails';
import ReportManag from './pages/manager/ReportManag';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Cart/>}/>
            <Route path="products" element={<Products/>}/>
            <Route path="productDetails" element={<ProductDetails/>}/>
            <Route path="orders" element={<OrderList/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="regEmpl" element={<EmployeeRegistration/>}/>
            <Route path="orderDetails" element={<OrderDetails/>}/>
            <Route path="salesList" element={<SalesList/>}/>
            <Route path="saleDetails" element={<SaleDetails/>}/>
            <Route path="employeeList" element={<EmployeeList/>}/>
            <Route path="employeeDetails" element={<EmployeeDetails/>}/>
            <Route path="reportManag" element={<ReportManag/>}/>
          </Route>
          <Route path="login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
