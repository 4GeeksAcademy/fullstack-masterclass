import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./Users";
import UsersDetails from "./UsersDetails";
import { AppProvider } from "./store/AppProvider";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "")
    return <BackendURL />;

  return (
    <div>
      <h1>Todolist + Users App</h1>
      <AppProvider>
        <BrowserRouter basename={basename}>
          <Routes>
            <Route element={<Users />} path="/" />
            <Route element={<UsersDetails />} path="/users/:userId" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
};

export default Layout;
