import { RouteObject } from "react-router-dom";
import Home from "@/components/home";
import About from "@/pages/about";
import Events from "@/pages/events";
import Membership from "@/pages/membership";
import Alumni from "@/pages/alumni";
import Contact from "@/pages/contact";
import MemberPortal from "@/pages/member-portal";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about/*",
    element: <About />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/membership/*",
    element: <Membership />,
  },
  {
    path: "/alumni/*",
    element: <Alumni />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/member-portal/*",
    element: <MemberPortal />,
  },
];

export default routes;
