import ForgotPassword from "../components/organisms/forms/ForgotPassword";
import Login from "../components/organisms/forms/Login";
import Register from "../components/organisms/forms/Register";
import About from "../components/templates/About/About";
import Contact from "../components/templates/Contact/Contact";
import Home from "../components/templates/Home";

const routes = [
  {
    public: [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/about",
        component: About,
      },
      {
        path: "/contact",
        component: Contact,
      },
      {
        path: "/signup",
        component: Register,
      },
      {
        path: "/signin",
        component: Login,
      },
      {
        path: "/passwordReset",
        component: ForgotPassword,
      },
    ],
  },
];

export default routes;
