import Characters from "./pages/Characters";
import { useRoutes } from "react-router";
import Character from "./pages/Character";

const Routing = () => {
  let routes = useRoutes([
    // {
    //   path: "/",
    // },
    {
      path: "/characters",
      element: <Characters />,
      children: [],
    },
    {
      path: "/characters/:characterId",
      element: <Character />,
    },
  ]);

  return routes;
};

export default Routing;
