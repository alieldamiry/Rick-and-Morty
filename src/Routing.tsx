import Characters from "./pages/Characters";
import { useRoutes } from "react-router";
import Character from "./pages/Character";
import Layout from "./components/Layout";

const Routing = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/characters",
          element: <Characters />,
          children: [],
        },
        {
          path: "/characters/:characterId",
          element: <Character />,
        },
      ],
    },
  ]);

  return routes;
};

export default Routing;
