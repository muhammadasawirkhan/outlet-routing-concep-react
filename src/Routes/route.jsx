import React from "react";
// In src/Routes/route.jsx
import Layout from "../Components/Layout";

import Dashboard from "../Pages/Dashboard";
import Profile from "../Pages/Profile";
import Settings from "../Pages/Settings";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "profile", element: <Profile /> },
      { path: "settings", element: <Settings /> },
    ],
  },
];

export default routes;
