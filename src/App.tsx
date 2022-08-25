import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import routes, { RouteType } from "./routes";
import { ThemeProvider } from "styled-components";

import LightTheme from "./assets/theme/light";
import DarkTheme from "./assets/theme/dark";

import storage from "./common/utils/storage";

function App() {
  const [theme, setTheme] = useState(storage.getTheme());
  const getRoutes = (allRoutes: Array<RouteType>) =>
    allRoutes.map((route: RouteType) => {
      return route.route && <Route path={route.route} element={route.component} key={route.key} />;
    });

  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          storage.setTheme(theme.id);
          setTheme((theme) => (theme.id === "light" ? DarkTheme : LightTheme));
        }
      }}>
      <BrowserRouter>
        <Routes>
          {getRoutes(routes)}
          {/* <Route path="*" element={<Navigate to="/404" />} /> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
