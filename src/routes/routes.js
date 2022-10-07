import Register from "../components/organisms/forms/Register";
import Home from "../components/templates/Home";

const routes = [
  {
    public: [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/register",
        component: Register,
      },
    ],
  },
];

export default routes;
