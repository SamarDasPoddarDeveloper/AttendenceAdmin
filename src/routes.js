/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EventIcon from "@mui/icons-material/Event";
// Material Dashboard 2 React layouts
import Dashboard from "./layouts/dashboard";
import Tables from "./layouts/tables";
import Billing from "./layouts/billing";
import RTL from "./layouts/rtl";
import Notifications from "./layouts/notifications";
import Profile from "./layouts/profile";
import SignIn from "./layouts/authentication/sign-in";
import SignUp from "./layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";
import Blog from "./layouts/tables";
import Attandance from "layouts/Attendance";
import Leave from "layouts/Leave";
import ForgetPassword from "layouts/authentication/forget-password/ForgetPassword";
import ResetPassword from "layouts/authentication/forget-password/ResetPassword";
import EmployeeList from "layouts/employeeList";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
    rights: ["student", "employee", "admin", "hr"],
  },
  {
    type: "collapse",
    name: "Employee List",
    key: "employeeList",
    icon: <Icon fontSize="small">list</Icon>,
    route: "/employeeList",
    component: <EmployeeList />,
    rights: ["employee", "admin", "hr"],
  },
  {
    type: "collapse",
    name: "Attandance",
    key: "attandance",
    icon: <CalendarMonthIcon />,
    route: "/attandance",
    component: <Attandance />,
    rights: ["employee", "admin", "hr"],
  },
  {
    type: "collapse",
    name: "Leave",
    key: "leave",
    icon: <EventIcon />,
    route: "/leave",
    component: <Leave />,
    rights: ["student", "employee", "admin", "hr"],
  },
  {
    type: "collapse",
    name: "Blog",
    key: "blog",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/blog",
    component: <Blog />,
    rights: ["admin", "hr"],
  },
  // {
  //   type: "collapse",
  //   name: "Tables",
  //   key: "tables",
  //   icon: <Icon fontSize="small">table_view</Icon>,
  //   route: "/tables",
  //   component: <Tables />,
  // },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Billing />,
    rights: ["admin", "hr", "student"],
  },
  // {
  //   type: "collapse",
  //   name: "RTL",
  //   key: "rtl",
  //   icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
  //   route: "/rtl",
  //   component: <RTL />,
  // },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
    rights: ["student", "employee", "admin", "hr"],
  },
  // {
  //   type: "collapse",
  //   name: "Profile",
  //   key: "profile",
  //   icon: <Icon fontSize="small">person</Icon>,
  //   route: "/profile",
  //   component: <Profile />,
  // },
  {
    type: "collapse",
    name: "Add Employee",
    key: "add-employee",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/add-employee",
    component: <SignUp />,
    rights: ["admin", "hr"],
  },
  {
    type: "xyyz",
    key: "change-password",
    // icon: <Icon fontSize="small">assignment</Icon>,
    route: "/change-password",
  },
];

const authRout = [
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Forget Password",
    key: "forget-password",
    icon: <Icon fontSize="small">change-password</Icon>,
    route: "/authentication/forgot-password",
    component: <ForgetPassword />,
  },
  {
    type: "collapse",
    name: "Reset Password",
    key: "reset-password",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/reset-password/:key",
    component: <ResetPassword />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
];

export { routes, authRout };
