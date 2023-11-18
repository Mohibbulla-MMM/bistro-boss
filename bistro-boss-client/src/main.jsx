import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import Route from "./Routes/Route.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvaider from "./provaider/AuthProvaider.jsx";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvaider>
        <HelmetProvider>
          <Toaster position="top-right" reverseOrder={false} />
          <RouterProvider router={Route} />
        </HelmetProvider>
      </AuthProvaider>
    </QueryClientProvider>
  </React.StrictMode>
);
