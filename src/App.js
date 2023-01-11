import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Customers from "./pages/customers/Customers";
import Products from "./pages/product/Product";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {userInputs} from "./formData"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/users",
    element: <Customers />,
  },
  {
    path: "/users/:usersId",
    element: <Single />,
  },
  {
    path: "/users/:usersId/new",
    element: <New inputs={userInputs} title="Add new user"/>,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:productId/new",
    element: <New />,
  },
  {
    path: "/products/:productId",
    element: <Single />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
