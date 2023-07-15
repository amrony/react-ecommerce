import './App.css';
import Home from './features/pages/Home';
import LoginPage from './features/pages/LoginPage';
import SignupPage from './features/pages/SignupPage';
import ProductList from './features/product-list/ProductList';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Cart from './features/cart/Cart';
import CartPage from './features/pages/CartPage';


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
