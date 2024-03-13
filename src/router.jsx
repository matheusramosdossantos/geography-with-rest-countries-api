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
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/:commonName",
        element: <Country />,
      },
    ],
  },
]);

export default router;
