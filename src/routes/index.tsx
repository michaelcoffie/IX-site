import { RouteObject } from "react-router-dom";
import Home from "@/components/home";
import About from "@/pages/about";
import Membership from "@/pages/membership";
import Roster from "@/pages/roster";
import Programs from "@/pages/programs";
import Contact from "@/pages/contact";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/membership",
    element: <Membership />,
  },
  {
    path: "/roster",
    element: <Roster />,
  },
  {
    path: "/programs",
    element: <Programs />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];

export default routes;
