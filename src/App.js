import './App.css';
import Home from './features/pages/Home';
import LoginPage from './features/pages/LoginPage';
import SignupPage from './features/pages/SignupPage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Cart from './features/cart/Cart';
import CartPage from './features/pages/CartPage';
import Checkout from './features/pages/Checkout';
import ProductDetail from './features/product/components/ProductDetail';
import ProductDetailPage from './features/pages/ProductDetailPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
  {
    path: "/checkout",
    element: <Checkout></Checkout>,
  },
  {
    path: "/product-detail",
    element: <ProductDetailPage></ProductDetailPage>,
  },
  
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <LoginPage></LoginPage> */}
      {/* <SignupPage></SignupPage> */}
        {/* <Home></Home> */}
    </div>
  );
}

export default App;
