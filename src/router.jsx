// File to router configurations.

// React Router import
import { createBrowserRouter } from "react-router-dom";

// Components
import RootLayout from "./RootLayout";
import Home from "./pages/Home";
import Country from "./pages/Country";

// Router configurations
const router = createBrowserRouter([
  {
    path: "/geography-with-rest-countries-api",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "geography-with-rest-countries-api/:commonName",
        element: <Country />,
      },
    ],
  },
]);

export default router;
