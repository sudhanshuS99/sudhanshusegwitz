import {
  Route,
  createBrowserRouter,
  createRouterFromElements,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage";
import MainLayout from "../src/layouts/MainLayout";
import Hero from "./components/Hero";

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
      <Navbar />
      <Hero />
    </>
  );
};

export default App;
