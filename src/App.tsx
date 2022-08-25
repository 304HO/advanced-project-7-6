import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import routes, { RouteType } from "./routes";
import { ThemeProvider } from "styled-components";

import LightTheme from "./assets/theme/light";
import DarkTheme from "./assets/theme/dark";

import storage from "./common/utils/storage";
import Header from "./components/Header";

import "antd/dist/antd.css";
import { defaultSurveyData, defaultSurveyDataTypes } from "./common/constants";

function App() {
  const [theme, setTheme] = useState(storage.getTheme());

  const [surveyData, setSurveyData] = React.useState<defaultSurveyDataTypes>(defaultSurveyData);

  React.useEffect(() => {
    const newSurveyData = localStorage.getItem("surveyData");
    if (newSurveyData === null) setSurveyData(defaultSurveyData);
    else {
      setSurveyData(JSON.parse(newSurveyData));
    }
  }, []);

  const getRoutes = (allRoutes: Array<RouteType>) =>
    allRoutes.map((route: RouteType) => {
      const CloneElement = React.cloneElement(route.component, { surveyData, setSurveyData });
      if (route.useHeader === true) {
        return (
          route.route && (
            <Route
              path={route.route}
              element={
                <>
                  <Header surveyData={surveyData} />
                  {CloneElement}
                </>
              }
              key={route.key}
            />
          )
        );
      } else {
        return route.route && <Route path={route.route} element={CloneElement} key={route.key} />;
      }
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
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
