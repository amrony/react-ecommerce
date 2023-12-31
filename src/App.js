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
import CartPage from './features/pages/CartPage';
import Checkout from './features/pages/Checkout';
import ProductDetailPage from './features/pages/ProductDetailPage';
import Protected from './features/auth/component/Protected';
import { useEffect } from 'react';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser } from './features/auth/authSlice';
import PageNotFound from './features/pages/404';
import OrderSuccessPage from './features/pages/orderSuccessPage';
import UserOrdersPage from './features/pages/UserOrdersPage';
import UserProfilePage from './features/pages/UserProfilePage';
import { fetchLoggedInUserAsync } from './features/user/userSlice';
import Logout from './features/auth/component/Logout';
import ForgotPasswordPage from './features/pages/ForgotPasswordPage';
import ProtectedAdmin from './features/auth/component/ProtectedAdmin';
import AdminHome from './features/pages/AdminHome';
import AdminProductDetailPage from './features/pages/AdminProductDetailPage';
import AdminProductFormPage from './features/pages/AdminProductFormPage';
import AdminOrdersPage from './features/pages/AdminOrdersPage';
import UserProfile from './features/user/components/UserProfile';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Home></Home>
      </Protected>
    ),
  },
  {
    path: "/admin",
    element: (
      <ProtectedAdmin>
        <AdminHome></AdminHome>
      </ProtectedAdmin>
    ),
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
    element: (
      <Protected>
        <CartPage></CartPage>
      </Protected>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Protected>
        <Checkout></Checkout>
      </Protected>
    ),
  },
  {
    path: '/product-detail/:id',
    element: (
      <Protected>
        <ProductDetailPage></ProductDetailPage>
      </Protected>
    ),
  },
  {
    path: '/admin/product-detail/:id',
    element: (
      <ProtectedAdmin>
        <AdminProductDetailPage></AdminProductDetailPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: '/admin/product-form',
    element: (
      <ProtectedAdmin>
        <AdminProductFormPage></AdminProductFormPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: '/admin/product-form/edit/:id',
    element: (
      <ProtectedAdmin>
        <AdminProductFormPage></AdminProductFormPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: '/order-success/:id',
    element: (
      <OrderSuccessPage></OrderSuccessPage>
    ),
  },
  {
    path: '/orders',
    element: (
      <UserOrdersPage></UserOrdersPage>
    ),
  },
  {
    path: '/profile',
    element: (
      <UserProfilePage></UserProfilePage>
    ),
  },
  // AdminOrdersPage
  {
    path: '/admin/orders',
    element: (
      <ProtectedAdmin>
        <AdminOrdersPage></AdminOrdersPage>
      </ProtectedAdmin>
    ),
  },

  {
    path: '/logout',
    element: (
      <Logout></Logout>
    ),
  },

  {
    path: '/forgot-password',
    element: (
      <ForgotPasswordPage></ForgotPasswordPage>
    ),
  },

  {
    path: '*',
    element: (
      <PageNotFound></PageNotFound>
    ),
  },
  
]);

function App() {
  const user = useSelector(selectLoggedInUser)
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (user) {
  //     dispatch(fetchItemsByUserIdAsync());
  //     // we can get req.user by token on backend so no need to give in front-end
  //     dispatch(fetchLoggedInUserAsync());
  //   }
  // }, [dispatch, user]);

  useEffect(()=>{
    if(user){
      dispatch(fetchItemsByUserIdAsync(user.id))
      dispatch(fetchLoggedInUserAsync(user.id))
    }
  },[dispatch, user]);
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
