import {
  Route,
  createBrowserRouter,
  createRouterFromElements,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage";
import MainLayout from "../src/layouts/MainLayout";

const router = createBrowserRouter(
  createRouterFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      return <RouterProvider router={router} />
    </>
  );
};

export default App;
