import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./AuthProvider/authProvider.jsx";
import Root from "./Components/Root/Root.jsx";
import Registration from "./Components/Registration/Registration.jsx";
import SignIn from "./Components/SignIn/SignIn.jsx";
import Home from "./Components/Home/Home.jsx";
import PrivateRoute from "./Routes/PrivateRoute.jsx";
import Error from "./Components/Error/Error.jsx";
import AddProduct from "./Components/AddProduct/AddProduct.jsx";
import MyCart from "./Components/MyCart/MyCart.jsx";
import Products from "./Components/Products/Products.jsx";
import Details from "./Components/Details/Details.jsx";
import Update from "./Components/Update/Update.jsx";
import AddCategory from "./Components/AddCategory/AddCategory.jsx";
import CategoryUpdate from "./Components/CategoryUpdate/CategoryUpdate.jsx";
import Welcome from "./Components/Welcome/Welcome.jsx";

const router = createBrowserRouter([
  {
    path:"welcome",
    element:<Welcome></Welcome>
  },
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      
      // {
      //   path: "registration",
      //   element: <PrivateRoute><Registration></Registration></PrivateRoute>,
      // },
      {
        path: "SignIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/foods/:name",
        element:<Products></Products>,
        loader: ()=>fetch('http://localhost:3000/foods')
      },
      {
        path:"add_product",
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path:"add_category",
        element:<PrivateRoute><AddCategory></AddCategory></PrivateRoute>
      },
      
      {
        path:"/details/:id",
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader: ()=>fetch('https://brand-website-server-9lu7pgb34-mirza-shahriar-tonmoys-projects.vercel.app/products')

      },
      {
        path:"my_cart",
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
      },
      {
        path:"/update/:id",
        element:<PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:3000/foods/${params.id}`)
      },
      {
        path:"/category_update/:id",
        element:<PrivateRoute><CategoryUpdate></CategoryUpdate></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:3000/categories/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
