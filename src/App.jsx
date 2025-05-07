import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./Routes/route.jsx";


function App() {
  const routing = useRoutes(routes);
  return routing;
}

export default App;
