import Characters from "./pages/Characters";
import { Navigate, useRoutes } from "react-router";
import Character from "./pages/Character";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import { useAppSelector } from "./redux/hooks";

const Routing = () => {
  const { isAuth } = useAppSelector((state) => state.auth);
  let routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/login",
          element: isAuth ? <Navigate to="/characters" /> : <Login />,
        },
        {
          path: "/characters",
          element: isAuth ? <Characters /> : <Navigate to="/login" />,
        },
        {
          path: "/characters/:characterId",
          element: isAuth ? <Character /> : <Navigate to="/login" />,
        },
      ],
    },
  ]);

  return routes;
};

export default Routing;
